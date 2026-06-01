import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PI3K } from "@/lib/pi3k-data";

// ─────────────────────────────────────────────────────────────────────────
// Types + data (real: RDKit Morgan/Tanimoto on sourced structures)
// ─────────────────────────────────────────────────────────────────────────

type Axis = "immune" | "metabolic" | "metabolic_escape" | "mixed";
type Compound = {
  id: string; name: string; brand: string; sponsor: string;
  isoform: string; axis: Axis; status: string; outcome: string;
  formula: string; x: number; y: number; svg2d: string;
  smiles_src: string; iso_src: string;
};

const C = PI3K.compounds as unknown as Compound[];
const SIM = PI3K.sim as number[][];

const AXIS_COLOR: Record<Axis, string> = {
  immune:           "#b53324", // slate — δ immune axis
  metabolic:        "#d4853a", // amber — α metabolic axis
  metabolic_escape: "#5f9e3c", // green — allosteric escape
  mixed:            "#c9a73e", // muted — pan-class
};
const AXIS_LABEL: Record<Axis, string> = {
  immune: "PI3Kδ · immune-toxicity axis",
  metabolic: "PI3Kα · metabolic axis",
  metabolic_escape: "mutant-selective allosteric · escape",
  mixed: "pan-class I",
};
const AXIS_SHORT: Record<Axis, string> = {
  immune: "PI3Kδ", metabolic: "PI3Kα", metabolic_escape: "escape", mixed: "pan-class",
};
const STATUS_LABEL: Record<string, string> = {
  restricted: "Indication restricted", withdrawn: "Withdrawn",
  on_market: "On market", active: "Active · clinical",
};

const ease = [0.22, 1, 0.36, 1] as const;
const wrapV  = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease, staggerChildren: 0.07 } } };
const childV = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.42, ease } } };
const TABS = [
  { id: "map", label: "Structural map" },
  { id: "references", label: "References" },
] as const;
type TabId = typeof TABS[number]["id"];

// ── References: real sources, document-style ──
type SourceType = "fda" | "ct" | "lit" | "pubchem";
const SRC_COLOR: Record<SourceType, string> = { fda: "#b8514a", ct: "#4a73a3", lit: "#7a5c9e", pubchem: "#5a8a52" };
type RefLine = { width: string; text?: string };
type Doc = { label: string; file: string; type: SourceType; page: number; pageMax: number; url: string; lines: RefLine[] };

const DOCS: Doc[] = [
  {
    label: "FDA · ODAC briefing", file: "ODAC_PI3K_briefing_2022-04-21.pdf", type: "fda", page: 31, pageMax: 88,
    url: "https://www.onclive.com/view/odac-unanimously-votes-to-recommend-randomized-data-for-approval-of-pi3k-inhibitors-in-hematologic-cancers",
    lines: [
      { width: "92%" }, { width: "84%" },
      { width: "97%", text: "The committee voted 16 to 0 that future approvals be supported by randomized data." },
      { width: "88%", text: "Randomized trials revealed a higher rate of fatal adverse events than single-arm data." },
      { width: "76%" }, { width: "90%" }, { width: "70%" },
    ],
  },
  {
    label: "Cancer Discovery · RLY-2608", file: "Varkaris_RLY-2608_CancerDiscov_2024.pdf", type: "lit", page: 7, pageMax: 14,
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10850943/",
    lines: [
      { width: "86%" }, { width: "94%" },
      { width: "95%", text: "RLY-2608 inhibited mutant tumors with minimal impact on insulin." },
      { width: "82%", text: "Clinical responses observed with no wild-type PI3Kα toxicities." },
      { width: "78%" }, { width: "90%" },
    ],
  },
  {
    label: "Cancer Discovery · STX-478", file: "STX-478_mutant_selective_2023.pdf", type: "lit", page: 4, pageMax: 19,
    url: "https://aacrjournals.org/cancerdiscovery/article/13/11/2432/729855/STX-478-a-Mutant-Selective-Allosteric-PI3K",
    lines: [
      { width: "90%" },
      { width: "96%", text: "Mutant-selective allosteric inhibitor that spares metabolic dysfunction." },
      { width: "80%" }, { width: "88%" }, { width: "72%" },
    ],
  },
  {
    label: "Withdrawal record", file: "PI3K_class_withdrawals_2021-2023.pdf", type: "ct", page: 2, pageMax: 5,
    url: "https://www.ajmc.com/view/pi3k-inhibitors-face-challenges-in-hematologic-malignancies",
    lines: [
      { width: "84%", text: "Duvelisib Dec 2021 · umbralisib Jan 2022 · copanlisib Nov 2023." },
      { width: "92%" }, { width: "76%" }, { width: "88%" },
      { width: "70%", text: "Boxed warnings for idelalisib and duvelisib; FL/SLL indications withdrawn." },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────

type Props = { num: string };

export function StructureCard({ num }: Props) {
  const [tab, setTab] = useState<TabId>("map");
  const [active, setActive] = useState<number | null>(4); // alpelisib — populated on arrival
  const [docIdx, setDocIdx] = useState(0);
  const doc = DOCS[docIdx];

  // map projection
  const W = 600, H = 470, pad = 64;
  const px = (x: number) => pad + ((x + 1) / 2) * (W - 2 * pad);
  const py = (y: number) => pad + ((y + 1) / 2) * (H - 2 * pad);

  // minimum spanning tree over similarity — the chemical-space backbone (TMAP-style)
  const mst: { i: number; j: number; s: number }[] = [];
  {
    const n = C.length, inT = new Array(n).fill(false); inT[0] = true;
    for (let e = 0; e < n - 1; e++) {
      let bi = -1, bj = -1, bw = -1;
      for (let i = 0; i < n; i++) if (inT[i]) for (let j = 0; j < n; j++) if (!inT[j] && SIM[i][j] > bw) { bw = SIM[i][j]; bi = i; bj = j; }
      inT[bj] = true; mst.push({ i: bi, j: bj, s: bw });
    }
  }
  // group node indices by axis for the soft cluster regions
  const groups: Record<string, number[]> = {};
  C.forEach((c, i) => { (groups[c.axis] ||= []).push(i); });

  const ac = active != null ? C[active] : null;
  let nnIdx = -1, nnVal = -1;
  if (active != null) for (let j = 0; j < C.length; j++) if (j !== active && SIM[active][j] > nnVal) { nnVal = SIM[active][j]; nnIdx = j; }

  return (
    <motion.div id="card-structure" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={wrapV} className="relative">
      {/* Backdrop */}
      <div className="absolute inset-0 overflow-hidden rounded-[6px]">
        <div className="absolute inset-0" style={{ background: "linear-gradient(155deg, #c2c0b4 0%, #9c9889 38%, #726d5e 75%, #4d4a40 100%)" }} />
        <svg className="absolute inset-0 w-full h-full opacity-[0.16] mix-blend-overlay" xmlns="http://www.w3.org/2000/svg">
          <filter id="str-noise"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="5" /></filter>
          <rect width="100%" height="100%" filter="url(#str-noise)" />
        </svg>
      </div>

      <div className="relative px-6 pt-7 pb-8 md:px-10 md:pt-9 md:pb-11">
        {/* Header */}
        <motion.div variants={childV} className="mb-5 flex flex-wrap items-baseline gap-3">
          <span className="text-white/90 text-[14px] font-semibold tracking-[-0.005em]">
            <span className="text-white/55 mr-1.5 tabular">{num}</span>
            Structural landscape
          </span>
          <span className="grow" />
          {TABS.map((t) => {
            const on = t.id === tab;
            return (
              <button key={t.id} type="button" onClick={() => { setTab(t.id); setActive(null); }}
                className={`text-[13px] tracking-[-0.005em] font-bold px-5 py-2.5 rounded-[12px] transition-all duration-200 ${
                  on ? "bg-white text-[#0a0a0a] shadow-[0_8px_22px_rgba(15,20,28,0.22),0_1px_3px_rgba(15,20,28,0.08)]"
                     : "bg-white/55 text-[#3a3a35] hover:bg-white/85 hover:text-[#0a0a0a] backdrop-blur-[2px] shadow-[0_3px_10px_rgba(15,20,28,0.08)]"}`}>
                {t.label}
              </button>
            );
          })}
        </motion.div>

        {/* Card */}
        <motion.div variants={childV} className="font-helvetica bg-white rounded-[10px] shadow-[0_20px_48px_rgba(15,20,28,0.18),0_3px_8px_rgba(15,20,28,0.06)] overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            {tab === "map" ? (
              <motion.div key="map" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.25, ease } }} exit={{ opacity: 0, y: -4, transition: { duration: 0.14, ease } }}
                className="px-8 pt-7 pb-6 md:px-10 md:pt-8 md:pb-7">
                <div className="mb-5">
                  <h3 className="text-[18px] tracking-[-0.015em] font-bold text-[#0a0a0a]">The structural map</h3>
                  <p className="mt-1 text-[12px] text-[#888377]">Computed structural similarity. Tanimoto on Morgan fingerprints, radius 2, 2048-bit.</p>
                </div>

                <div className="grid md:grid-cols-[1.3fr_1fr] gap-2">
                  {/* Map */}
                  <div className="relative">
                    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto select-none">
                      {/* faint cluster region outlines by toxicity axis */}
                      {Object.entries(groups).filter(([, idx]) => idx.length > 1).map(([axis, idx]) => {
                        const xs = idx.map((i) => px(C[i].x)), ys = idx.map((i) => py(C[i].y));
                        const cx = xs.reduce((a, b) => a + b, 0) / idx.length, cy = ys.reduce((a, b) => a + b, 0) / idx.length;
                        const r = Math.max(...idx.map((i) => Math.hypot(px(C[i].x) - cx, py(C[i].y) - cy))) + 30;
                        return (
                          <g key={axis}>
                            <circle cx={cx} cy={cy} r={r} fill="none" stroke={AXIS_COLOR[axis as Axis]} strokeOpacity={0.28} strokeWidth={1} strokeDasharray="2 5" />
                            <text x={cx} y={cy - r - 8} textAnchor="middle" className="text-[10px] uppercase font-bold" letterSpacing="1.2" fill={AXIS_COLOR[axis as Axis]} opacity={0.85}>{AXIS_SHORT[axis as Axis]}</text>
                          </g>
                        );
                      })}
                      {/* MST backbone — links each compound to its nearest structural neighbor */}
                      {mst.map((e, k) => (
                        <line key={k} x1={px(C[e.i].x)} y1={py(C[e.i].y)} x2={px(C[e.j].x)} y2={py(C[e.j].y)}
                          stroke="#bcae8e" strokeWidth={1 + e.s * 2.4} strokeOpacity={0.5} strokeLinecap="round" />
                      ))}
                      {/* nodes */}
                      {C.map((c, i) => {
                        const on = active === i, col = AXIS_COLOR[c.axis];
                        return (
                          <g key={c.id} transform={`translate(${px(c.x)},${py(c.y)})`} onClick={() => setActive(on ? null : i)} className="cursor-pointer">
                            {on && <circle r={17} fill="none" stroke="#0a0a0a" strokeWidth={1.3} strokeOpacity={0.85} />}
                            <circle r={on ? 12 : 9} fill="#fff" />
                            <circle r={on ? 9 : 6.5} fill={col} />
                            <text x={0} y={on ? 30 : 26} textAnchor="middle" className={on ? "text-[12.5px] font-bold" : "text-[11.5px] font-semibold"} fill={on ? "#0a0a0a" : "#6a655c"}>{c.name}</text>
                          </g>
                        );
                      })}
                    </svg>
                  </div>

                  {/* Detail */}
                  <div className="md:border-l md:border-[#efefed] md:pl-7 pt-2">
                    <AnimatePresence mode="wait" initial={false}>
                      {ac ? (
                        <motion.div key={ac.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.28, ease } }} exit={{ opacity: 0, y: -6, transition: { duration: 0.12 } }}>
                          {/* Identity */}
                          <div className="flex items-baseline gap-2 flex-wrap">
                            <span className="text-[17px] font-bold text-[#0a0a0a] tracking-[-0.01em]">{ac.name}</span>
                            <span className="text-[11.5px] text-[#888377]">{ac.brand !== ac.name ? `${ac.brand} · ` : ""}{ac.sponsor}</span>
                          </div>
                          <div className="mt-1.5 inline-flex items-center gap-2">
                            <span className="h-[7px] w-[7px] rounded-full" style={{ background: AXIS_COLOR[ac.axis] }} />
                            <span className="text-[10.5px] uppercase tracking-[0.08em] text-[#5a5a55] font-semibold">{ac.isoform}</span>
                          </div>

                          {/* Compact 2D structure */}
                          <div className="mt-2.5 mol2d bg-[#fbfaf6] border border-[#efefed] rounded-[6px] p-1.5 mx-auto w-[170px]" dangerouslySetInnerHTML={{ __html: ac.svg2d }} />

                          {/* Key info — status + closest only */}
                          <div className="mt-2.5">
                            <Row k="Status" v={STATUS_LABEL[ac.status] || ac.status} bold />
                            <Row k="Closest" v={`${C[nnIdx].name} · ${nnVal.toFixed(2)}`} bold />
                          </div>

                          {/* Outcome — the takeaway */}
                          <p className="mt-2.5 text-[12px] leading-[1.5] text-[#6a655c]">{ac.outcome}</p>

                          {/* Sources — small inline footer */}
                          <p className="mt-2 text-[10.5px] text-[#a8a292]">
                            Sources:{" "}
                            <a href={ac.smiles_src} target="_blank" rel="noopener" className="hover:text-[#0a0a0a] underline decoration-[#d4cba8] underline-offset-2">PubChem</a>
                            {" · "}
                            <a href={ac.iso_src} target="_blank" rel="noopener" className="hover:text-[#0a0a0a] underline decoration-[#d4cba8] underline-offset-2">selectivity</a>
                          </p>
                        </motion.div>
                      ) : (
                        <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex items-center">
                          <p className="text-[13px] text-[#a8a292] leading-[1.55]">Select a compound to see its computed structure, its nearest structural neighbor in the class, and the outcome that defines it.</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Legend */}
                <div className="mt-5 pt-4 border-t border-[#efefed] flex flex-wrap items-center gap-x-5 gap-y-1.5">
                  {(Object.keys(AXIS_LABEL) as Axis[]).map((a) => (
                    <span key={a} className="inline-flex items-center gap-1.5">
                      <span className="h-[7px] w-[7px] rounded-full block" style={{ background: AXIS_COLOR[a] }} />
                      <span className="text-[11px] text-[#5a5a55]">{AXIS_LABEL[a]}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div key="references" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.25, ease } }} exit={{ opacity: 0, y: -4, transition: { duration: 0.14, ease } }}
                className="px-8 pt-9 pb-7 md:px-12 md:pt-11 md:pb-9">
                <div className="mb-7 flex flex-wrap items-center gap-x-5 gap-y-2">
                  {DOCS.map((d, i) => {
                    const on = i === docIdx;
                    return (
                      <button key={d.file} type="button" onClick={() => setDocIdx(i)} className="group inline-flex items-baseline gap-2">
                        <span className="block h-[8px] w-[8px] rounded-full transition-transform" style={{ background: SRC_COLOR[d.type], transform: on ? "scale(1.15)" : "scale(1)" }} />
                        <span className={`text-[13px] transition-colors ${on ? "text-[#0a0a0a] font-semibold" : "text-[#a8a292] group-hover:text-[#0a0a0a]"}`}>{d.label}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-baseline justify-between gap-4 flex-wrap mb-5">
                  <a href={doc.url} target="_blank" rel="noopener" className="text-[15px] text-[#0a0a0a] font-semibold underline decoration-[#d4cba8] underline-offset-2 hover:decoration-[#0a0a0a]">{doc.file}</a>
                  <p className="text-[13px] text-[#888377]">page <span className="font-semibold text-[#0a0a0a] tabular">{doc.page}</span> of <span className="tabular">{doc.pageMax}</span></p>
                </div>
                <div className="border-t border-[#efefed]" />

                <div className="pt-6 space-y-3.5">
                  {doc.lines.map((ln, i) => (
                    ln.text ? (
                      <span key={i} className="block rounded-[3px] px-3 py-1.5 text-[13px] text-[#0a0a0a] leading-[1.4]" style={{ background: "#fbe48a", width: ln.width }}>{ln.text}</span>
                    ) : (
                      <span key={i} className="block h-[10px] rounded-full" style={{ width: ln.width, background: "#d5d3cd" }} />
                    )
                  ))}
                </div>

                <div className="mt-7 pt-5 border-t border-[#efefed] flex items-center justify-between flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-[7px] w-[24px] rounded-full block" style={{ background: "#fbe48a" }} />
                    <span className="text-[12px] text-[#5a5a55]">Cited excerpt</span>
                  </span>
                  <div className="flex items-center gap-3 text-[12px] text-[#888377]">
                    <span>document <span className="font-semibold text-[#0a0a0a] tabular">{docIdx + 1}</span> of <span className="tabular">{DOCS.length}</span></span>
                    <button type="button" onClick={() => setDocIdx((i) => Math.max(0, i - 1))} disabled={docIdx === 0} className="ml-3 text-[#888377] hover:text-[#0a0a0a] disabled:opacity-40 transition-colors">← prev</button>
                    <button type="button" onClick={() => setDocIdx((i) => Math.min(DOCS.length - 1, i + 1))} disabled={docIdx === DOCS.length - 1} className="text-[#888377] hover:text-[#0a0a0a] disabled:opacity-40 transition-colors">next →</button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
}

function Row({ k, v, bold }: { k: string; v: string; bold?: boolean }) {
  return (
    <div className="grid grid-cols-[80px_1fr] gap-3 py-[7px] border-t border-[#efefed] items-baseline">
      <span className="text-[9.5px] uppercase tracking-[0.1em] text-[#a8a292] font-bold">{k}</span>
      <span className={`text-[12.5px] ${bold ? "text-[#0a0a0a] font-semibold" : "text-[#6a655c]"}`}>{v}</span>
    </div>
  );
}
