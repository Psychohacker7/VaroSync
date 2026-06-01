import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FAERS } from "@/lib/faers-data";

type Axis = "metabolic" | "immune" | "background";
type Reaction = { term: string; count: number; axis: Axis };
type Compound = { id: string; name: string; predicted_axis: "metabolic" | "immune"; total_reports: number; reactions: Reaction[] };

const C = FAERS as unknown as Compound[];
const AXIS_COLOR: Record<Axis, string> = { metabolic: "#d4853a", immune: "#b53324", background: "#ccc4b0" };
const AXIS_LABEL: Record<"metabolic" | "immune", string> = { metabolic: "metabolic axis", immune: "immune axis" };

type TabId = "signal" | "raw";

const ease = [0.22, 1, 0.36, 1] as const;
const wrapV  = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease, staggerChildren: 0.07 } } };
const childV = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.42, ease } } };

type Props = { num: string };

export function SignalsCard({ num }: Props) {
  const [tab, setTab] = useState<TabId>("signal");
  const [sel, setSel] = useState(2); // alpelisib — clearest signal

  const comp = C[sel];
  const all = comp.reactions;
  const signalRx = all.filter((r) => r.axis !== "background");
  const shown = (tab === "signal" ? signalRx : all).slice(0, 8);
  const max = Math.max(...shown.map((r) => r.count), 1);
  const dominant = signalRx[0];
  const confirmed = dominant && dominant.axis === comp.predicted_axis;

  return (
    <motion.div id="card-signals" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={wrapV} className="relative">
      <div className="absolute inset-0 overflow-hidden rounded-[6px]">
        <div className="absolute inset-0" style={{ background: "linear-gradient(155deg, #c0bcae 0%, #99947f 38%, #71705e 75%, #4c4a3e 100%)" }} />
        <svg className="absolute inset-0 w-full h-full opacity-[0.16] mix-blend-overlay" xmlns="http://www.w3.org/2000/svg">
          <filter id="sig-noise"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="13" /></filter>
          <rect width="100%" height="100%" filter="url(#sig-noise)" />
        </svg>
      </div>

      <div className="relative px-6 pt-7 pb-8 md:px-10 md:pt-9 md:pb-11">
        <motion.div variants={childV} className="mb-5">
          <span className="text-white/90 text-[14px] font-semibold tracking-[-0.005em]">
            <span className="text-white/55 mr-1.5 tabular">{num}</span>
            Post-market record
          </span>
        </motion.div>

        <motion.div variants={childV} className="font-helvetica bg-white rounded-[10px] shadow-[0_20px_48px_rgba(15,20,28,0.18),0_3px_8px_rgba(15,20,28,0.06)] overflow-hidden">
          <div className="px-8 pt-9 pb-7 md:px-12 md:pt-11 md:pb-9">
            <div className="mb-6 flex items-start justify-between gap-6">
              <div className="min-w-0">
                <h3 className="text-[19px] tracking-[-0.015em] font-bold text-[#0a0a0a]">Adverse-event signals</h3>
                <p className="mt-1 text-[12.5px] text-[#888377]">FDA post-market reports (FAERS, via openFDA), by compound. The predicted axis, tested against the record.</p>
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] text-[#888377]">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-[8px] w-[8px] rounded-full" style={{ background: AXIS_COLOR[comp.predicted_axis] }} />
                    on predicted axis ({AXIS_LABEL[comp.predicted_axis]})
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-[8px] w-[8px] rounded-full opacity-60" style={{ background: AXIS_COLOR.background }} />
                    off-axis
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setTab(tab === "signal" ? "raw" : "signal")}
                className="shrink-0 mt-1 inline-flex items-center gap-1.5 text-[11.5px] text-[#888377] hover:text-[#0a0a0a] uppercase tracking-[0.08em] font-semibold transition-colors"
                title={tab === "signal" ? "Show raw FAERS counts (un-calibrated)" : "Show calibrated signal"}
              >
                <span className={`h-[7px] w-[7px] rounded-full transition-colors ${tab === "raw" ? "bg-[#d4853a]" : "bg-[#cfc6a8]"}`} />
                {tab === "signal" ? "show raw" : "show calibrated"}
              </button>
            </div>

            {/* compound selector */}
            <div className="flex flex-wrap gap-2 mb-7">
              {C.map((c, i) => {
                const on = i === sel;
                return (
                  <button key={c.id} type="button" onClick={() => setSel(i)}
                    className={`inline-flex items-center gap-2 text-[12.5px] px-3 py-1.5 rounded-[6px] border transition-colors ${
                      on ? "border-[#cabfa0] bg-[#f7f3e6] text-[#0a0a0a] font-semibold" : "border-[#ece9e0] text-[#888377] hover:text-[#0a0a0a]"}`}>
                    <span className="h-[7px] w-[7px] rounded-full" style={{ background: AXIS_COLOR[c.predicted_axis] }} />
                    {c.name}
                  </button>
                );
              })}
            </div>

            {/* bars */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={`${sel}-${tab}`} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.2 } }} exit={{ opacity: 0, transition: { duration: 0.1 } }}>
                {shown.map((r, i) => {
                  const isMatch = r.axis === comp.predicted_axis;
                  const barColor = isMatch ? AXIS_COLOR[comp.predicted_axis] : AXIS_COLOR.background;
                  return (
                    <div key={r.term} className="grid grid-cols-[196px_1fr_58px] gap-5 items-center py-[7px] group">
                      <span className={`text-[13px] truncate transition-colors ${isMatch ? "text-[#0a0a0a] font-medium" : "text-[#a8a292]"}`}>{r.term}</span>
                      <div className="h-[13px] rounded-[3px] bg-[#f5f2e9] overflow-hidden">
                        <motion.div initial={{ width: 0 }} animate={{ width: `${Math.max((r.count / max) * 100, 2)}%`, transition: { duration: 0.55, ease, delay: 0.05 + i * 0.045 } }}
                          className="h-full rounded-[3px]" style={{ background: barColor, opacity: isMatch ? 1 : 0.55 }} />
                      </div>
                      <span className={`text-[12.5px] text-right tabular ${isMatch ? "text-[#6a655c]" : "text-[#a8a292]"}`}>{r.count.toLocaleString()}</span>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {/* verdict line */}
            <div className="mt-7 pt-5 border-t border-[#efefed] flex flex-wrap items-center gap-x-6 gap-y-2 text-[12.5px]">
              <span className="text-[#888377]">Predicted from structure: <span className="font-semibold text-[#0a0a0a]">{AXIS_LABEL[comp.predicted_axis]}</span></span>
              <span className="text-[#888377]">Observed dominant signal: <span className="font-semibold" style={{ color: AXIS_COLOR[dominant?.axis ?? "background"] }}>{dominant?.term ?? "—"}</span></span>
              {confirmed && <span className="inline-flex items-center gap-1.5 font-semibold text-[#5f9e3c]"><Check /> confirmed</span>}
              <span className="grow" />
              <span className="text-[#a8a292] tabular">{comp.total_reports.toLocaleString()} reports</span>
            </div>
            {tab === "raw" && (
              <p className="mt-3 text-[12px] text-[#a8714a] leading-[1.5]">Raw counts are dominated by non-specific terms (death, disease progression, off-label use). The signal that matters is the calibrated one.</p>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function Check() {
  return <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6.5L4.8 9L9.5 3.5" stroke="#5f9e3c" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
