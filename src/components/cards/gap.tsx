import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

type Status = "established" | "partial" | "open";
type Finding = { q: string; status: Status; record: string; means: string };

const FINDINGS: Finding[] = [
  { q: "Mutant-selective allosteric binding", status: "established",
    record: "Confirmed in the experimental structure (PDB 8TDU) and the published pharmacology.",
    means: "The mechanism of the escape is real and structural, not just asserted." },
  { q: "Wild-type sparing, early clinical", status: "partial",
    record: "Minimal insulin impact reported in early proof-of-concept, small cohorts.",
    means: "Encouraging, but early-N. Not yet a population result." },
  { q: "Metabolic sparing at an efficacious dose", status: "open",
    record: "The class liability is on-target and dose-dependent. Sparing at fully efficacious exposure is not established in larger trials.",
    means: "The decisive question. The milestone the deal should hinge on." },
  { q: "Chronic, long-term metabolic profile", status: "open",
    record: "Early data is short-duration.",
    means: "Long-term tolerability is unpriced until later readouts." },
  { q: "Selectivity across the PIK3CA mutation spectrum", status: "partial",
    record: "Pan-mutant activity claimed; breadth in patients still maturing.",
    means: "Sets the addressable population and the durability of response." },
  { q: "Combination tolerability", status: "open",
    record: "Run in combination with endocrine therapy; the combined metabolic burden is not fully characterized.",
    means: "Real-world tolerability may diverge from the monotherapy profile." },
];

const SC: Record<Status, string> = { established: "#5f9e3c", partial: "#d4853a", open: "#b53324" };
const SL: Record<Status, string> = { established: "Established", partial: "Partial", open: "Open" };
const SFILL: Record<Status, number> = { established: 3, partial: 2, open: 1 };

const ease = [0.22, 1, 0.36, 1] as const;
const wrapV  = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease, staggerChildren: 0.07 } } };
const childV = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.42, ease } } };

type Props = { num: string };

export function GapCard({ num }: Props) {
  const [open, setOpen] = useState<number>(2); // the decisive question, expanded
  const openCount = FINDINGS.filter((f) => f.status === "open").length;

  return (
    <motion.div id="card-gap" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={wrapV} className="relative">
      <div className="absolute inset-0 overflow-hidden rounded-[6px]">
        <div className="absolute inset-0" style={{ background: "linear-gradient(155deg, #c4bfb1 0%, #9d9580 38%, #74705c 75%, #4e4a3d 100%)" }} />
        <svg className="absolute inset-0 w-full h-full opacity-[0.16] mix-blend-overlay" xmlns="http://www.w3.org/2000/svg">
          <filter id="gap-noise"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="17" /></filter>
          <rect width="100%" height="100%" filter="url(#gap-noise)" />
        </svg>
      </div>

      <div className="relative px-6 pt-7 pb-8 md:px-10 md:pt-9 md:pb-11">
        <motion.div variants={childV} className="mb-5 flex flex-wrap items-baseline gap-3">
          <span className="text-white/90 text-[14px] font-semibold tracking-[-0.005em]">
            <span className="text-white/55 mr-1.5 tabular">{num}</span>
            Gap audit · the live wave
          </span>
          <span className="grow" />
          <span className="text-white/80 text-[11px] uppercase tracking-[0.12em] font-semibold tabular">{openCount} open questions</span>
        </motion.div>

        <motion.div variants={childV} className="font-helvetica bg-white rounded-[10px] shadow-[0_20px_48px_rgba(15,20,28,0.18),0_3px_8px_rgba(15,20,28,0.06)] overflow-hidden">
          <div className="px-8 pt-9 pb-7 md:px-12 md:pt-11 md:pb-9">
            <div className="mb-7">
              <h3 className="text-[19px] tracking-[-0.015em] font-bold text-[#0a0a0a]">Coverage of the escape thesis</h3>
              <p className="mt-1 text-[12.5px] text-[#888377]">Each claim audited against the public record, marked established, partial, or open.</p>
            </div>

            <div>
              {FINDINGS.map((f, i) => {
                const on = i === open;
                return (
                  <div key={f.q} className="border-t border-[#efefed] last:border-b">
                    <button type="button" onClick={() => setOpen(on ? -1 : i)} className="w-full flex items-center gap-4 py-[18px] text-left group">
                      {/* coverage indicator */}
                      <span className="flex gap-[3px] shrink-0">
                        {[0, 1, 2].map((s) => (
                          <span key={s} className="block w-[16px] h-[5px] rounded-full" style={{ background: s < SFILL[f.status] ? SC[f.status] : "#ece9e0" }} />
                        ))}
                      </span>
                      <span className={`flex-1 text-[15px] tracking-[-0.005em] transition-colors ${on ? "text-[#0a0a0a] font-bold" : "text-[#3a3a35] font-semibold group-hover:text-[#0a0a0a]"}`}>{f.q}</span>
                      <span className="text-[10.5px] uppercase tracking-[0.08em] font-bold shrink-0" style={{ color: SC[f.status] }}>{SL[f.status]}</span>
                      <span className="text-[#b3ac9c] text-[18px] shrink-0 transition-transform duration-200" style={{ transform: on ? "rotate(45deg)" : "none" }}>+</span>
                    </button>
                    <AnimatePresence initial={false}>
                      {on && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1, transition: { duration: 0.3, ease } }} exit={{ height: 0, opacity: 0, transition: { duration: 0.2 } }} className="overflow-hidden">
                          <div className="pb-6 pl-[68px] grid md:grid-cols-2 gap-7 max-w-[760px]">
                            <div>
                              <p className="text-[10.5px] uppercase tracking-[0.1em] font-bold text-[#a8a292] mb-1.5">What the record shows</p>
                              <p className="text-[13.5px] leading-[1.55] text-[#6a655c]">{f.record}</p>
                            </div>
                            <div>
                              <p className="text-[10.5px] uppercase tracking-[0.1em] font-bold text-[#a8a292] mb-1.5">Why it matters</p>
                              <p className="text-[13.5px] leading-[1.55] text-[#0a0a0a]">{f.means}</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <p className="mt-7 pt-5 border-t border-[#efefed] text-[11.5px] leading-[1.5] text-[#a8a292]">
              Coverage reflects the public record as of this analysis. Three of six questions remain open; the decisive one is the metabolic profile at efficacious dose. Sources: ClinicalTrials.gov, company disclosures, peer-reviewed literature.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
