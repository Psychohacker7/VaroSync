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
  // Live openFDA query that reproduces these exact counts (generic_name + reaction breakdown).
  // Clicking it returns the same reaction tallies the bars are drawn from — checkable in seconds.
  const openfdaUrl = `https://api.fda.gov/drug/event.json?search=patient.drug.openfda.generic_name:%22${comp.id}%22&count=patient.reaction.reactionmeddrapt.exact`;
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
          <div className="px-5 pt-8 pb-7 md:px-12 md:pt-11 md:pb-9">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h3 className="text-[19px] tracking-[-0.015em] font-bold text-[#0a0a0a]">Adverse-event signals</h3>
                <p className="mt-1 text-[12.5px] text-[#888377]">FDA post-market reports (FAERS, via openFDA), by compound. The predicted axis, tested against the record.</p>
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] text-[#888377]">
                  <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                    <span className="h-[8px] w-[8px] rounded-full" style={{ background: AXIS_COLOR[comp.predicted_axis] }} />
                    on predicted axis ({AXIS_LABEL[comp.predicted_axis]})
                  </span>
                  <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                    <span className="h-[8px] w-[8px] rounded-full opacity-60" style={{ background: AXIS_COLOR.background }} />
                    off-axis
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setTab(tab === "signal" ? "raw" : "signal")}
                className="shrink-0 mt-1 hidden md:inline-flex items-center gap-1.5 text-[11.5px] text-[#888377] hover:text-[#0a0a0a] uppercase tracking-[0.08em] font-semibold transition-colors"
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
                    <div key={r.term} className="grid grid-cols-[1fr_auto] gap-x-3 gap-y-1.5 items-center py-[7px] md:grid-cols-[196px_1fr_58px] md:gap-x-5 md:gap-y-0 group">
                      <span className={`min-w-0 truncate text-[13px] transition-colors md:col-start-1 ${isMatch ? "text-[#0a0a0a] font-medium" : "text-[#a8a292]"}`}>{r.term}</span>
                      <span className={`text-[12.5px] text-right tabular md:col-start-3 md:row-start-1 ${isMatch ? "text-[#6a655c]" : "text-[#a8a292]"}`}>{r.count.toLocaleString()}</span>
                      <div className="col-span-2 h-[11px] md:col-span-1 md:col-start-2 md:row-start-1 md:h-[13px] rounded-[3px] bg-[#f5f2e9] overflow-hidden">
                        <motion.div initial={{ width: 0 }} animate={{ width: `${Math.max((r.count / max) * 100, 2)}%`, transition: { duration: 0.55, ease, delay: 0.05 + i * 0.045 } }}
                          className="h-full rounded-[3px]" style={{ background: barColor, opacity: isMatch ? 1 : 0.55 }} />
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {/* verdict — the actual finding, stated plainly, not a badge */}
            <div className="mt-7 pt-5 border-t border-[#efefed]">
              <p className="text-[13px] leading-[1.6] text-[#6a655c]">
                Structure predicts the <span className="font-semibold" style={{ color: AXIS_COLOR[comp.predicted_axis] }}>{AXIS_LABEL[comp.predicted_axis]}</span>. The record&rsquo;s dominant signal, <span className="font-semibold" style={{ color: AXIS_COLOR[dominant?.axis ?? "background"] }}>{dominant?.term ?? "—"}</span>,{" "}
                {confirmed
                  ? <span className="font-semibold text-[#0a0a0a]">lands on that axis.</span>
                  : <span className="font-semibold text-[#0a0a0a]">lands off it.</span>}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[12px] text-[#a8a292]">
                <span className="tabular">{comp.total_reports.toLocaleString()} reports</span>
                <span className="grow" />
                <a href={openfdaUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-1 text-[#6a655c] hover:text-[#0a0a0a] underline decoration-[#d4cba8] underline-offset-2 transition-colors">
                  verify on openFDA
                  <svg width="10" height="10" viewBox="0 0 20 20" fill="none"><path d="M6 14L14 6M14 6H7M14 6V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
              </div>
              {tab === "raw" && (
                <p className="mt-3 text-[12px] text-[#a8714a] leading-[1.5]">Raw counts are dominated by non-specific terms (death, disease progression, off-label use). The signal that matters is the calibrated one.</p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
