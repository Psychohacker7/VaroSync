import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;
const wrapV  = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease, staggerChildren: 0.07 } } };
const childV = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.42, ease } } };
const rowsV  = { hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } } };
const rowV   = { hidden: { opacity: 0, y: 5 }, show: { opacity: 1, y: 0, transition: { duration: 0.32, ease } } };

const GREEN = "#5f9e3c", AMBER = "#d4853a", RED = "#b53324";
const labelClass = "text-[10.5px] uppercase tracking-[0.18em] text-[#a8a292] font-semibold";

// pos: 0 (low risk) → 1 (high risk)
type Flavor = "base" | "good" | "mid" | "bad";
type Scn = { label: string; pos: number; stratum: string; note: string; flavor: Flavor };

const BASE: Scn = { label: "Today, before the readout", pos: 0.56, stratum: "Elevated", flavor: "base",
  note: "The escape is unproven at an efficacious dose. The program sits between a clean escape and the class liability." };

const SCN: Scn[] = [
  BASE,
  { label: "Metabolic sparing holds at efficacious dose", pos: 0.15, stratum: "Low", flavor: "good",
    note: "The randomized readout confirms the escape. The mutant-selective class genuinely solved the α-axis liability." },
  { label: "Sparing erodes at efficacious exposure", pos: 0.90, stratum: "High", flavor: "bad",
    note: "Hyperglycemia returns at the dose that works. The program reverts toward the class liability." },
  { label: "Selectivity narrows in patients", pos: 0.66, stratum: "Elevated", flavor: "mid",
    note: "Pan-mutant breadth underdelivers; the addressable population and durability of response shrink." },
  { label: "Chronic metabolic burden emerges", pos: 0.82, stratum: "High", flavor: "bad",
    note: "Long-term tolerability proves worse than the short-duration data suggested." },
];

function posColor(p: number) { return p < 0.4 ? GREEN : p < 0.68 ? AMBER : RED; }

type Props = { num: string };

export function CatalystCard({ num }: Props) {
  const [hover, setHover] = useState<number | null>(null);
  const active = hover !== null ? SCN[hover] : BASE;

  const mx = useMotionValue(BASE.pos * 100);
  const left = useTransform(mx, (v) => `${v}%`);
  useEffect(() => {
    const c = animate(mx, active.pos * 100, { duration: 0.5, ease });
    return () => c.stop();
  }, [active, mx]);

  const col = posColor(active.pos);

  return (
    <motion.div id="card-catalyst" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={wrapV} className="relative">
      <div className="absolute inset-0 overflow-hidden rounded-[6px]">
        <div className="absolute inset-0" style={{ background: "linear-gradient(155deg, #bcc0b2 0%, #949a84 38%, #6c7059 75%, #484b3c 100%)" }} />
        <svg className="absolute inset-0 w-full h-full opacity-[0.16] mix-blend-overlay" xmlns="http://www.w3.org/2000/svg">
          <filter id="cat-noise"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="19" /></filter>
          <rect width="100%" height="100%" filter="url(#cat-noise)" />
        </svg>
      </div>

      <div className="relative px-6 pt-7 pb-8 md:px-10 md:pt-9 md:pb-11">
        <motion.div variants={childV} className="mb-5 flex flex-wrap items-baseline gap-3">
          <span className="text-white/90 text-[14px] font-semibold tracking-[-0.005em]">
            <span className="text-white/55 mr-1.5 tabular">{num}</span>
            Catalyst and scenarios
          </span>
        </motion.div>

        <motion.div variants={childV} className="font-helvetica bg-white rounded-[10px] shadow-[0_20px_48px_rgba(15,20,28,0.18),0_3px_8px_rgba(15,20,28,0.06)] overflow-hidden">
          <div className="px-8 pt-9 pb-8 md:px-12 md:pt-11 md:pb-10">
            <div className="mb-8">
              <h3 className="text-[19px] tracking-[-0.015em] font-bold text-[#0a0a0a]">The next readout moves the risk</h3>
              <p className="mt-1 text-[12.5px] text-[#888377]">RLY-2608 ReDiscover-2 Phase 3 · pending · the first randomized test of the sparing at an efficacious dose.</p>
            </div>

            {/* focal — animated stratum + risk dial */}
            <div className="mb-10">
              <div className="flex items-end gap-4 mb-5">
                <AnimatePresence mode="wait">
                  <motion.span key={active.stratum + col} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.25, ease } }} exit={{ opacity: 0, y: -6, transition: { duration: 0.14 } }}
                    className="text-[44px] md:text-[52px] font-bold leading-[0.95] tracking-[-0.025em]" style={{ color: col }}>
                    {active.stratum}
                  </motion.span>
                </AnimatePresence>
                <span className="text-[12px] text-[#a8a292] pb-2">risk stratum</span>
              </div>

              {/* dial */}
              <div className="relative h-[16px] rounded-full" style={{ background: "linear-gradient(90deg, #5f9e3c 0%, #d4853a 50%, #b53324 100%)", opacity: 0.92 }}>
                <motion.div className="absolute top-1/2" style={{ left, transform: "translate(-50%,-50%)" }}>
                  <div className="w-[20px] h-[20px] rounded-full bg-white shadow-[0_2px_8px_rgba(15,20,28,0.3)] flex items-center justify-center">
                    <div className="w-[9px] h-[9px] rounded-full" style={{ background: col }} />
                  </div>
                </motion.div>
              </div>
              <div className="flex justify-between mt-2.5 text-[11px] uppercase tracking-[0.1em] font-semibold">
                <span style={{ color: GREEN }}>Lower · escape</span>
                <span style={{ color: RED }}>Higher · liability</span>
              </div>

              <div className="mt-5 min-h-[40px]">
                <AnimatePresence mode="wait">
                  <motion.p key={active.label} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.22 } }} exit={{ opacity: 0, transition: { duration: 0.1 } }}
                    className="text-[13.5px] leading-[1.55] text-[#6a655c] max-w-[640px]">{active.note}</motion.p>
                </AnimatePresence>
              </div>
            </div>

            {/* outcome rows */}
            <div className="grid gap-4 pb-3" style={{ gridTemplateColumns: "1fr 120px" }}>
              <span className={labelClass}>If the readout shows</span>
              <span className={`${labelClass} text-right`}>Risk moves to</span>
            </div>
            <motion.div variants={rowsV} initial="hidden" animate="show">
              {SCN.filter((s) => s.flavor !== "base").map((s) => {
                const i = SCN.indexOf(s);
                const on = hover === i;
                const c = posColor(s.pos);
                return (
                  <motion.button key={s.label} type="button" variants={rowV}
                    onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)} onFocus={() => setHover(i)} onBlur={() => setHover(null)}
                    className={`w-full grid gap-4 py-[15px] border-t border-[#efefed] items-center text-left transition-colors ${on ? "bg-[#f7f4ec]" : ""}`}
                    style={{ gridTemplateColumns: "1fr 120px" }}>
                    <span className={`text-[14px] tracking-[-0.005em] ${on ? "text-[#0a0a0a] font-semibold" : "text-[#3a3a35]"}`}>{s.label}</span>
                    <span className="flex items-center justify-end gap-2">
                      <span className="text-[12.5px] font-bold" style={{ color: c }}>{s.stratum}</span>
                      <span className="h-[9px] w-[9px] rounded-full" style={{ background: c }} />
                    </span>
                  </motion.button>
                );
              })}
            </motion.div>

            <p className="mt-7 pt-5 border-t border-[#efefed] text-[11.5px] leading-[1.5] text-[#a8a292]">
              Strata are mechanistic, not a probability estimate. Source: RLY-2608 ReDiscover-2 trial design (ClinicalTrials.gov); class precedent.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
