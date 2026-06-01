import { useState } from "react";
import { motion } from "motion/react";

// ─────────────────────────────────────────────────────────────────────────
// A layered mechanism knowledge graph:
// Program → isoform target → signaling mechanism → toxicity axis → clinical fate.
// Every chain is the real mechanistic path for that compound.
// ─────────────────────────────────────────────────────────────────────────

type AxisKey = "immune" | "metabolic" | "escape" | "mixed";
const AXIS_COLOR: Record<AxisKey, string> = {
  immune: "#b53324", metabolic: "#d4853a", escape: "#5f9e3c", mixed: "#c9a73e",
};

type Node = { id: string; label: string; col: number };

const COLS = ["Program", "Isoform target", "Signaling", "Toxicity axis", "Clinical fate"];

const NODES: Node[] = [
  // col 0 — programs (top: immune, mid: metabolic, bottom: escape)
  { id: "idelalisib", label: "Idelalisib", col: 0 },
  { id: "duvelisib",  label: "Duvelisib",  col: 0 },
  { id: "umbralisib", label: "Umbralisib", col: 0 },
  { id: "copanlisib", label: "Copanlisib", col: 0 },
  { id: "alpelisib",  label: "Alpelisib",  col: 0 },
  { id: "inavolisib", label: "Inavolisib", col: 0 },
  { id: "rly2608",    label: "RLY-2608",   col: 0 },
  { id: "stx478",     label: "STX-478",    col: 0 },
  // col 1 — isoform target
  { id: "t_delta",    label: "PI3Kδ",                    col: 1 },
  { id: "t_dg",       label: "PI3Kδ / γ",               col: 1 },
  { id: "t_pan",      label: "pan-class I",              col: 1 },
  { id: "t_alpha",    label: "PI3Kα",                    col: 1 },
  { id: "t_mut",      label: "mutant-selective PI3Kα",   col: 1 },
  // col 2 — mechanism
  { id: "m_immune",   label: "Immune-cell signaling",    col: 2 },
  { id: "m_insulin",  label: "Insulin / glucose signaling", col: 2 },
  { id: "m_spare",    label: "Wild-type sparing",        col: 2 },
  // col 3 — toxicity axis
  { id: "a_immune",   label: "Immune toxicity",          col: 3 },
  { id: "a_metab",    label: "Metabolic · hyperglycemia", col: 3 },
  { id: "a_escape",   label: "Liability spared",         col: 3 },
  // col 4 — fate
  { id: "f_restr",    label: "Restricted",               col: 4 },
  { id: "f_with",     label: "Withdrawn",                col: 4 },
  { id: "f_market",   label: "On market",                col: 4 },
  { id: "f_active",   label: "Active · clinical",        col: 4 },
];

type Chain = { id: string; nodes: string[]; axis: AxisKey };
const CHAINS: Chain[] = [
  { id: "idelalisib", axis: "immune",   nodes: ["idelalisib", "t_delta", "m_immune", "a_immune", "f_restr"] },
  { id: "duvelisib",  axis: "immune",   nodes: ["duvelisib", "t_dg", "m_immune", "a_immune", "f_restr"] },
  { id: "umbralisib", axis: "immune",   nodes: ["umbralisib", "t_delta", "m_immune", "a_immune", "f_with"] },
  { id: "copanlisib", axis: "mixed",    nodes: ["copanlisib", "t_pan", "m_immune", "a_immune", "f_with"] },
  { id: "alpelisib",  axis: "metabolic",nodes: ["alpelisib", "t_alpha", "m_insulin", "a_metab", "f_market"] },
  { id: "inavolisib", axis: "metabolic",nodes: ["inavolisib", "t_alpha", "m_insulin", "a_metab", "f_market"] },
  { id: "rly2608",    axis: "escape",   nodes: ["rly2608", "t_mut", "m_spare", "a_escape", "f_active"] },
  { id: "stx478",     axis: "escape",   nodes: ["stx478", "t_mut", "m_spare", "a_escape", "f_active"] },
];

const FILTERS = [
  { id: "all", label: "All paths" },
  { id: "immune", label: "Immune axis" },
  { id: "metabolic", label: "Metabolic axis" },
  { id: "escape", label: "The escape" },
] as const;
type FilterId = typeof FILTERS[number]["id"];

// geometry
const W = 940, H = 520, padX = 70, padY = 36;
const colX = (c: number) => padX + (c / (COLS.length - 1)) * (W - 2 * padX);
function colNodes(c: number) { return NODES.filter((n) => n.col === c); }
function nodeY(n: Node): number {
  const peers = colNodes(n.col);
  const i = peers.findIndex((p) => p.id === n.id);
  const gap = (H - 2 * padY) / Math.max(peers.length - 1, 1);
  return peers.length === 1 ? H / 2 : padY + i * gap;
}
const POS: Record<string, { x: number; y: number }> = {};
NODES.forEach((n) => { POS[n.id] = { x: colX(n.col), y: nodeY(n) }; });

const ease = [0.22, 1, 0.36, 1] as const;
const wrapV  = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease, staggerChildren: 0.07 } } };
const childV = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.42, ease } } };

type Props = { num: string };

export function MechanismCard({ num }: Props) {
  const [filter, setFilter] = useState<FilterId>("all");
  const [hover, setHover] = useState<string | null>(null);

  const filtered = CHAINS.filter((ch) =>
    filter === "all" ? true :
    filter === "immune" ? (ch.axis === "immune" || ch.axis === "mixed") :
    filter === "metabolic" ? ch.axis === "metabolic" :
    ch.axis === "escape"
  );
  const visibleNodes = new Set<string>();
  filtered.forEach((ch) => ch.nodes.forEach((n) => visibleNodes.add(n)));

  const hotChains = hover ? filtered.filter((ch) => ch.nodes.includes(hover)) : [];
  const hotNodes = new Set<string>();
  hotChains.forEach((ch) => ch.nodes.forEach((n) => hotNodes.add(n)));

  // build segments
  type Seg = { d: string; axis: AxisKey; chain: string };
  const segs: Seg[] = [];
  filtered.forEach((ch) => {
    for (let i = 0; i < ch.nodes.length - 1; i++) {
      const a = POS[ch.nodes[i]], b = POS[ch.nodes[i + 1]];
      const mx = (a.x + b.x) / 2;
      segs.push({ d: `M ${a.x} ${a.y} C ${mx} ${a.y}, ${mx} ${b.y}, ${b.x} ${b.y}`, axis: ch.axis, chain: ch.id });
    }
  });

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
            Mechanism graph
          </span>
          <span className="grow" />
          {FILTERS.map((t) => {
            const on = t.id === filter;
            return (
              <button key={t.id} type="button" onClick={() => setFilter(t.id)}
                className={`text-[13px] tracking-[-0.005em] font-bold px-4 py-2.5 rounded-[12px] transition-all duration-200 ${
                  on ? "bg-white text-[#0a0a0a] shadow-[0_8px_22px_rgba(15,20,28,0.22),0_1px_3px_rgba(15,20,28,0.08)]"
                     : "bg-white/55 text-[#3a3a35] hover:bg-white/85 hover:text-[#0a0a0a] backdrop-blur-[2px] shadow-[0_3px_10px_rgba(15,20,28,0.08)]"}`}>
                {t.label}
              </button>
            );
          })}
        </motion.div>

        <motion.div variants={childV} className="font-helvetica bg-white rounded-[10px] shadow-[0_20px_48px_rgba(15,20,28,0.18),0_3px_8px_rgba(15,20,28,0.06)] overflow-hidden">
          <div className="px-8 pt-9 pb-7 md:px-12 md:pt-11 md:pb-9">
            <div className="mb-6">
              <h3 className="text-[19px] tracking-[-0.015em] font-bold text-[#0a0a0a]">Mechanism chains</h3>
              <p className="mt-1 text-[12.5px] text-[#888377] max-w-[640px]">Each program through its isoform target, signaling mechanism, toxicity axis, and outcome.</p>
            </div>

            {/* column headers */}
            <div className="relative w-full" style={{ aspectRatio: `${W} / ${H + 30}` }}>
              <svg viewBox={`0 0 ${W} ${H + 30}`} className="w-full h-auto select-none">
                {COLS.map((label, c) => (
                  <text key={label} x={colX(c)} y={14} textAnchor={c === 0 ? "start" : c === COLS.length - 1 ? "end" : "middle"}
                    className="text-[12px] uppercase font-bold" letterSpacing="1.8" fill="#b3ac9c">{label}</text>
                ))}

                <g transform="translate(0,24)">
                  {/* links */}
                  {segs.map((s, i) => {
                    const hot = hover && hotChains.some((c) => c.id === s.chain);
                    const dim = hover && !hot;
                    return <path key={i} d={s.d} fill="none" stroke={AXIS_COLOR[s.axis]}
                      strokeWidth={hot ? 3 : 1.4} strokeOpacity={dim ? 0.06 : hot ? 0.9 : 0.32} className="transition-all duration-150" />;
                  })}

                  {/* nodes */}
                  {NODES.filter((n) => visibleNodes.has(n.id)).map((n) => {
                    const p = POS[n.id];
                    const isProg = n.col === 0, isFate = n.col === COLS.length - 1;
                    const anchor = isProg ? "start" : isFate ? "end" : "middle";
                    const dx = isProg ? 11 : isFate ? -11 : 0;
                    const dy = isProg || isFate ? 4 : -11;
                    const hot = hotNodes.has(n.id);
                    const dimN = hover && !hot;
                    // node color: programs/targets use axis of their chain; structural cols neutral-ish
                    const ch = CHAINS.find((c) => c.nodes.includes(n.id));
                    const col = ch ? AXIS_COLOR[ch.axis] : "#c9a73e";
                    return (
                      <g key={n.id} onMouseEnter={() => setHover(n.id)} onMouseLeave={() => setHover(null)} className="cursor-pointer" opacity={dimN ? 0.26 : 1} style={{ transition: "opacity .15s" }}>
                        <circle cx={p.x} cy={p.y} r={hot ? 7 : 5} fill={col} />
                        {hot && <circle cx={p.x} cy={p.y} r={10.5} fill="none" stroke={col} strokeWidth={1.3} strokeOpacity={0.45} />}
                        <text x={p.x + dx} y={p.y + dy} textAnchor={anchor}
                          className={`${isProg || isFate ? "text-[12.5px]" : "text-[11.5px]"} ${hot ? "font-bold" : "font-medium"}`}
                          fill={isProg || isFate ? "#2a2a26" : "#6a655c"}>{n.label}</text>
                      </g>
                    );
                  })}
                </g>
              </svg>
            </div>

            {/* legend */}
            <div className="mt-5 pt-5 border-t border-[#efefed] flex flex-wrap items-center gap-x-7 gap-y-2">
              {[
                { a: "immune" as AxisKey, l: "Immune-toxicity axis" },
                { a: "metabolic" as AxisKey, l: "Metabolic axis" },
                { a: "escape" as AxisKey, l: "Engineered escape" },
              ].map((x) => (
                <span key={x.a} className="inline-flex items-center gap-2">
                  <span className="h-[9px] w-[9px] rounded-full block" style={{ background: AXIS_COLOR[x.a] }} />
                  <span className="text-[12px] text-[#5a5a55]">{x.l}</span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
