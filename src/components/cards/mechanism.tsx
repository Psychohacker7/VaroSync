import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// ─────────────────────────────────────────────────────────────────────────
// Mechanism flow. Program → isoform → signaling → toxicity axis → outcome.
// Layered layout: every downstream node sits at the centroid of the programs
// feeding it, so the chains fan in cleanly instead of crossing at random.
// Monochrome web; one muted accent for the engineered escape.
// ─────────────────────────────────────────────────────────────────────────

type AxisKey = "immune" | "metabolic" | "escape";

const INK = "#2b2519";
const MUTED = "#b3a482";
const LINE = "#cabfa0";
const SAGE = "#6f8a5f";
const SAGE_DK = "#4f6b3c";

const COLS = ["Program", "Isoform", "Signaling", "Toxicity", "Outcome"];
const LABEL: Record<string, string> = {
  idelalisib: "Idelalisib", duvelisib: "Duvelisib", umbralisib: "Umbralisib", copanlisib: "Copanlisib",
  alpelisib: "Alpelisib", inavolisib: "Inavolisib", rly2608: "RLY-2608", stx478: "STX-478",
  t_delta: "PI3Kδ", t_dg: "PI3Kδ / γ", t_pan: "pan-class I", t_alpha: "PI3Kα", t_mut: "mutant-sel. α",
  m_immune: "Immune signaling", m_insulin: "Insulin signaling", m_spare: "WT sparing",
  a_immune: "Immune tox", a_metab: "Hyperglycemia", a_escape: "Spared",
  f_restr: "Restricted", f_with: "Withdrawn", f_market: "On market", f_active: "Active",
};
const COL_OF: Record<string, number> = {};
[["idelalisib","duvelisib","umbralisib","copanlisib","alpelisib","inavolisib","rly2608","stx478"],
 ["t_delta","t_dg","t_pan","t_alpha","t_mut"],
 ["m_immune","m_insulin","m_spare"],
 ["a_immune","a_metab","a_escape"],
 ["f_restr","f_with","f_market","f_active"]].forEach((ids, c) => ids.forEach((id) => { COL_OF[id] = c; }));

type Chain = { id: string; nodes: string[]; axis: AxisKey };
const CHAINS: Chain[] = [
  { id: "idelalisib", axis: "immune",    nodes: ["idelalisib", "t_delta", "m_immune", "a_immune", "f_restr"] },
  { id: "duvelisib",  axis: "immune",    nodes: ["duvelisib", "t_dg", "m_immune", "a_immune", "f_restr"] },
  { id: "umbralisib", axis: "immune",    nodes: ["umbralisib", "t_delta", "m_immune", "a_immune", "f_with"] },
  { id: "copanlisib", axis: "immune",    nodes: ["copanlisib", "t_pan", "m_immune", "a_immune", "f_with"] },
  { id: "alpelisib",  axis: "metabolic", nodes: ["alpelisib", "t_alpha", "m_insulin", "a_metab", "f_market"] },
  { id: "inavolisib", axis: "metabolic", nodes: ["inavolisib", "t_alpha", "m_insulin", "a_metab", "f_market"] },
  { id: "rly2608",    axis: "escape",    nodes: ["rly2608", "t_mut", "m_spare", "a_escape", "f_active"] },
  { id: "stx478",     axis: "escape",    nodes: ["stx478", "t_mut", "m_spare", "a_escape", "f_active"] },
];

const FILTERS = [
  { id: "all", label: "All paths" },
  { id: "immune", label: "Immune axis" },
  { id: "metabolic", label: "Metabolic axis" },
  { id: "escape", label: "The escape" },
] as const;
type FilterId = typeof FILTERS[number]["id"];

// Mobile reads the class as three axis stories rather than a 5-column flow that can't
// shrink legibly on a phone. Same programs, same chain, grouped by toxicity axis.
const AXIS_META: Record<AxisKey, { label: string; verdict: string; isoform: string }> = {
  immune:    { label: "Immune axis",    verdict: "Carries it", isoform: "PI3Kδ · δγ · pan" },
  metabolic: { label: "Metabolic axis", verdict: "Carries it", isoform: "PI3Kα" },
  escape:    { label: "The escape",     verdict: "Breaks it",  isoform: "Mutant-selective α" },
};

const W = 900, H = 460, HEADER = 26, padX = 132, padY = 26;
const colX = (c: number) => padX + (c / (COLS.length - 1)) * (W - 2 * padX);

const ease = [0.22, 1, 0.36, 1] as const;
const wrapV  = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease, staggerChildren: 0.07 } } };
const childV = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.42, ease } } };

type Props = { num: string };

export function MechanismCard({ num }: Props) {
  const [filter, setFilter] = useState<FilterId>("all");
  const [hover, setHover] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<AxisKey | null>(null); // mobile accordion

  const chains = CHAINS.filter((c) => filter === "all" || c.axis === filter);
  const programs = chains.map((c) => c.nodes[0]);

  // mobile: group the visible chains by axis into compact program → outcome summaries
  const uniqLabels = (cs: Chain[], idx: number) => [...new Set(cs.map((c) => LABEL[c.nodes[idx]]))];
  const mobileGroups = (["immune", "metabolic", "escape"] as AxisKey[])
    .filter((ax) => chains.some((c) => c.axis === ax))
    .map((ax) => {
      const cs = chains.filter((c) => c.axis === ax);
      return {
        axis: ax,
        programs: cs.map((c) => LABEL[c.nodes[0]]),
        stages: [AXIS_META[ax].isoform, uniqLabels(cs, 2).join(" / "), uniqLabels(cs, 3).join(" / "), uniqLabels(cs, 4).join(" · ")],
      };
    });

  // layered positions — programs evenly spaced; everything downstream at the
  // centroid (mean y) of the programs whose chains pass through it.
  const pos: Record<string, { x: number; y: number }> = {};
  const gap = (H - 2 * padY) / Math.max(programs.length - 1, 1);
  programs.forEach((id, i) => { pos[id] = { x: colX(0), y: programs.length === 1 ? H / 2 : padY + i * gap }; });
  const downstream = new Set<string>();
  chains.forEach((c) => c.nodes.slice(1).forEach((n) => downstream.add(n)));
  downstream.forEach((id) => {
    const ys = chains.filter((c) => c.nodes.includes(id)).map((c) => pos[c.nodes[0]].y);
    pos[id] = { x: colX(COL_OF[id]), y: ys.reduce((a, b) => a + b, 0) / ys.length };
  });

  const hotChains = hover ? chains.filter((c) => c.nodes.includes(hover)) : [];
  const isHotChain = (id: string) => hotChains.some((c) => c.id === id);

  const visNodes = Array.from(new Set(chains.flatMap((c) => c.nodes)));

  return (
    <motion.div id="card-mechanism" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={wrapV} className="relative">
      <div className="absolute inset-0 overflow-hidden rounded-[6px]">
        <div className="absolute inset-0" style={{ background: "linear-gradient(155deg, #b9c0c4 0%, #93999b 38%, #6b7072 75%, #494d4e 100%)" }} />
        <svg className="absolute inset-0 w-full h-full opacity-[0.16] mix-blend-overlay" xmlns="http://www.w3.org/2000/svg">
          <filter id="mech-noise"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="3" /></filter>
          <rect width="100%" height="100%" filter="url(#mech-noise)" />
        </svg>
      </div>

      <div className="relative px-6 pt-7 pb-8 md:px-10 md:pt-9 md:pb-11">
        <motion.div variants={childV} className="mb-5 flex flex-wrap items-baseline gap-3">
          <span className="text-white/90 text-[14px] font-semibold tracking-[-0.005em]">
            <span className="text-white/55 mr-1.5 tabular">{num}</span>
            Mechanism
          </span>
          <span className="grow" />
          {FILTERS.map((t) => {
            const on = t.id === filter;
            return (
              <button key={t.id} type="button" onClick={() => { setFilter(t.id); setHover(null); }}
                className={`hidden md:block text-[13px] tracking-[-0.005em] font-bold px-4 py-2.5 rounded-[12px] transition-all duration-200 ${
                  on ? "bg-white text-[#0a0a0a] shadow-[0_8px_22px_rgba(15,20,28,0.22),0_1px_3px_rgba(15,20,28,0.08)]"
                     : "bg-white/55 text-[#3a3a35] hover:bg-white/85 hover:text-[#0a0a0a] backdrop-blur-[2px] shadow-[0_3px_10px_rgba(15,20,28,0.08)]"}`}>
                {t.label}
              </button>
            );
          })}
        </motion.div>

        <motion.div variants={childV} className="font-helvetica bg-white rounded-[10px] shadow-[0_20px_48px_rgba(15,20,28,0.18),0_3px_8px_rgba(15,20,28,0.06)] overflow-hidden">
          <div className="px-5 pt-8 pb-7 md:px-12 md:pt-11 md:pb-9">
            <div className="mb-5">
              <h3 className="text-[19px] tracking-[-0.015em] font-bold text-[#0a0a0a]">Same mechanism, same fate</h3>
              <p className="mt-1 text-[12.5px] text-[#888377] max-w-[640px]">Each program runs one chain, isoform target through to outcome. Only the mutant-selective programs break it.</p>
            </div>

            {/* desktop: the full 5-column flow diagram */}
            <div className="hidden md:block w-full" style={{ aspectRatio: `${W} / ${H + HEADER}` }}>
              <svg viewBox={`0 0 ${W} ${H + HEADER}`} className="w-full h-auto select-none">
                {/* column headers */}
                {COLS.map((label, c) => (
                  <text key={label} x={colX(c)} y={12}
                    textAnchor={c === 0 ? "end" : c === COLS.length - 1 ? "start" : "middle"}
                    dx={c === 0 ? 6 : c === COLS.length - 1 ? -6 : 0}
                    className="text-[10px] uppercase font-bold" letterSpacing="1.6" fill="#bdb6a6">{label}</text>
                ))}

                <g transform={`translate(0,${HEADER})`}>
                  {/* ribbons */}
                  {chains.map((c) => {
                    const pts = c.nodes.map((id) => pos[id]);
                    let d = `M ${pts[0].x} ${pts[0].y}`;
                    for (let i = 1; i < pts.length; i++) {
                      const a = pts[i - 1], b = pts[i], mx = (a.x + b.x) / 2;
                      d += ` C ${mx} ${a.y}, ${mx} ${b.y}, ${b.x} ${b.y}`;
                    }
                    const esc = c.axis === "escape";
                    const hot = hover && isHotChain(c.id);
                    const dim = hover && !hot;
                    return <path key={c.id} d={d} fill="none"
                      stroke={hot ? (esc ? SAGE_DK : INK) : (esc ? SAGE : LINE)}
                      strokeWidth={hot ? 2.6 : 1.8} strokeOpacity={dim ? 0.12 : hot ? 0.95 : esc ? 0.6 : 0.45}
                      strokeLinecap="round" className="transition-all duration-200" />;
                  })}

                  {/* nodes */}
                  {visNodes.map((id) => {
                    const p = pos[id], col = COL_OF[id];
                    const isProg = col === 0, isFate = col === COLS.length - 1;
                    const esc = chains.some((c) => c.axis === "escape" && c.nodes.includes(id));
                    const core = esc ? SAGE : (isProg || isFate ? INK : MUTED);
                    const hot = hotChains.some((c) => c.nodes.includes(id));
                    const dimN = hover && !hot;
                    const anchor = isProg ? "end" : isFate ? "start" : "middle";
                    const dx = isProg ? -11 : isFate ? 11 : 0;
                    const dy = isProg || isFate ? 4 : -11;
                    return (
                      <g key={id} onMouseEnter={() => setHover(id)} onMouseLeave={() => setHover(null)}
                        className="cursor-pointer" opacity={dimN ? 0.3 : 1} style={{ transition: "opacity .15s" }}>
                        <circle cx={p.x} cy={p.y} r={hot ? 6.5 : 5.5} fill="#fff" />
                        <circle cx={p.x} cy={p.y} r={hot ? 4.5 : 3.5} fill={core} className="transition-all duration-200" />
                        <text x={p.x + dx} y={p.y + dy} textAnchor={anchor}
                          paintOrder="stroke" stroke="#fff" strokeWidth={3.5} strokeLinejoin="round"
                          className={`${isProg || isFate ? "text-[12px]" : "text-[11px]"} ${hot ? "font-bold" : "font-medium"}`}
                          fill={isProg || isFate ? "#2b2519" : "#7a7468"}>{LABEL[id]}</text>
                      </g>
                    );
                  })}
                </g>
              </svg>
            </div>

            {/* mobile: tap an axis to draw its chain in — programs → isoform → signaling → toxicity →
                outcome. Monochrome for the two liability axes, sage only for the engineered escape. */}
            <div className="md:hidden mt-1 border-t border-[#efefed]">
              {mobileGroups.map((g) => {
                const esc = g.axis === "escape";
                const open = expanded === g.axis;
                const nodes = [g.programs.join(" · "), ...g.stages];
                const rail   = esc ? "#bdd0ad" : "#ddd5c0";
                const dotMid = esc ? SAGE      : "#c2b694";
                const dotEnd = esc ? SAGE_DK   : INK;
                const labMid = esc ? "#5f7e50" : "#6a655c";
                const labEnd = esc ? SAGE_DK   : INK;
                return (
                  <div key={g.axis} className="border-b border-[#efefed]">
                    <button type="button" onClick={() => setExpanded(open ? null : g.axis)}
                      className="w-full flex items-center gap-3 py-[17px] text-left">
                      <span className="text-[15.5px] font-semibold tracking-[-0.015em]" style={{ color: esc ? SAGE_DK : INK }}>{AXIS_META[g.axis].label}</span>
                      <span className="text-[9.5px] uppercase tracking-[0.13em] font-bold" style={{ color: esc ? SAGE : "#b3ac9c" }}>{AXIS_META[g.axis].verdict}</span>
                      <span className="grow" />
                      <span className="text-[20px] leading-none font-light transition-transform duration-300" style={{ color: esc ? SAGE : "#b3ac9c", transform: open ? "rotate(45deg)" : "none" }}>+</span>
                    </button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div key="body" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.32, ease }} className="overflow-hidden">
                          <div className="relative pb-6 pt-0.5">
                            {/* the rail draws down from the top as the chain reveals */}
                            <motion.span className="absolute left-[5px] top-[10px] bottom-[10px] w-[1.5px] rounded-full origin-top" style={{ background: rail }}
                              initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.6, ease, delay: 0.08 }} />
                            <div className="space-y-[15px]">
                              {nodes.map((label, i) => {
                                const end = i === 0 || i === nodes.length - 1;
                                const delay = 0.16 + i * 0.1; // each node lights up as the rail reaches it
                                return (
                                  <motion.div key={i} className="relative flex items-start gap-3.5"
                                    initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay, duration: 0.4, ease }}>
                                    <motion.span className="mt-[3px] h-[11px] w-[11px] shrink-0 rounded-full ring-[3px] ring-white relative z-10" style={{ background: end ? dotEnd : dotMid }}
                                      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }} />
                                    <span className={`text-[13.5px] leading-[1.4] tracking-[-0.005em] ${end ? "font-semibold" : "font-normal"}`} style={{ color: end ? labEnd : labMid }}>
                                      {label}
                                    </span>
                                  </motion.div>
                                );
                              })}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* legend */}
            <div className="mt-4 pt-5 border-t border-[#efefed] hidden md:flex flex-wrap items-center gap-x-7 gap-y-2">
              <span className="inline-flex items-center gap-2">
                <span className="h-[3px] w-[18px] rounded-full block" style={{ background: LINE }} />
                <span className="text-[12px] text-[#5a5a55]">Carries the class liability</span>
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-[3px] w-[18px] rounded-full block" style={{ background: SAGE }} />
                <span className="text-[12px] text-[#5a5a55]">Engineered escape</span>
              </span>
              <span className="grow" />
              <span className="text-[11.5px] text-[#a8a292]">Hover any node to trace its path</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
