import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;
const wrapV  = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease, staggerChildren: 0.07 } } };
const childV = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.42, ease } } };
const rowsV  = { hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } } };
const rowV   = { hidden: { opacity: 0, y: 5 }, show: { opacity: 1, y: 0, transition: { duration: 0.32, ease } } };

const GREEN = "#5f9e3c", AMBER = "#d4853a", RED = "#b53324";

// The class record. Each scenario's gauge position traces to one of these, with the real source excerpt.
type Ev = { name: string; stat: string; what: string; who: string; cite: string; excerpt: string; url: string };
const SOLAR1: Ev = {
  name: "alpelisib", stat: "36.6%", what: "Grade 3/4 hyperglycemia", who: "alpelisib, SOLAR-1", cite: "NEJM · 2019",
  excerpt: "Phase 3 SOLAR-1 enrolled 572 patients. Grade 3/4 hyperglycemia occurred in 36.6% with alpelisib + fulvestrant vs 0.7% with placebo, direct evidence of PI3Kα insulin-feedback toxicity.",
  url: "https://pubmed.ncbi.nlm.nih.gov/31091374/" };
const POC: Ev = {
  name: "RLY-2608", stat: "~12x", what: "mutant-over-WT selectivity", who: "RLY-2608 proof-of-concept", cite: "Cancer Discovery · 2024",
  excerpt: "RLY-2608 binds a cryptic allosteric pocket achieving ~12x mutant-over-WT PI3Kα selectivity. Two patient case studies showed partial tumor responses with little to no impact on glucose homeostasis.",
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10850943/" };
const ZYDELIG: Ev = {
  name: "idelalisib", stat: "16% / 20%", what: "fatal hepatotoxicity / colitis", who: "idelalisib, boxed warning", cite: "FDA label · DailyMed",
  excerpt: "WARNING: FATAL AND SERIOUS TOXICITIES. Fatal or serious hepatotoxicity in 16%, diarrhea/colitis in 20%, pneumonitis in 4%, and infections in 48% of Zydelig-treated patients.",
  url: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=efbdafa9-d18c-4e85-b4a2-1e620fc74e50" };

// pos: 0 (low risk / escape) → 1 (high risk / liability)
type Flavor = "base" | "good" | "mid" | "bad";
type Scn = { label: string; pos: number; stratum: string; ev: Ev };

const BASE: Scn = { label: "Today, before the readout", pos: 0.56, stratum: "Elevated", ev: SOLAR1 };
const SCN: { label: string; pos: number; stratum: string; flavor: Flavor; ev: Ev }[] = [
  { label: "Metabolic sparing holds at efficacious dose", pos: 0.15, stratum: "Low",      flavor: "good", ev: POC },
  { label: "Sparing erodes at efficacious exposure",       pos: 0.90, stratum: "High",     flavor: "bad",  ev: SOLAR1 },
  { label: "Selectivity narrows in patients",              pos: 0.66, stratum: "Elevated", flavor: "mid",  ev: POC },
  { label: "Chronic metabolic burden emerges",             pos: 0.82, stratum: "High",     flavor: "bad",  ev: ZYDELIG },
];

function posColor(p: number) { return p < 0.4 ? GREEN : p < 0.68 ? AMBER : RED; }

type Props = { num: string };

export function CatalystCard({ num }: Props) {
  const [hover, setHover] = useState<number | null>(null); // hover previews the gauge
  const [open, setOpen] = useState<number | null>(1);      // start on the decisive scenario so the pattern is obvious
  const sel = hover ?? open;
  const active: Scn = sel === null ? BASE : SCN[sel];

  const mx = useMotionValue(BASE.pos * 100);
  const left = useTransform(mx, (v) => `${v}%`);
  useEffect(() => { const c = animate(mx, active.pos * 100, { duration: 0.5, ease }); return () => c.stop(); }, [active, mx]);
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
          <div className="px-5 pt-8 pb-8 md:px-12 md:pt-11 md:pb-10">
            <div className="mb-8">
              <h3 className="text-[19px] tracking-[-0.015em] font-bold text-[#0a0a0a]">The next readout moves the risk</h3>
              <p className="mt-1 text-[12.5px] text-[#888377] max-w-[600px]">
                <a href="https://clinicaltrials.gov/study/NCT06982521" target="_blank" rel="noopener" className="underline decoration-[#d4cba8] underline-offset-2 hover:text-[#0a0a0a]">RLY-2608 ReDiscover-2 Phase 3</a>, pending. The first randomized test of whether the live wave escapes the liability the class already proved.
              </p>
            </div>

            {/* the gauge — animated, and its scale is anchored to the record */}
            <div className="mb-8">
              <div className="flex items-end gap-4 mb-5">
                <AnimatePresence mode="wait">
                  <motion.span key={active.stratum + col} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.25, ease } }} exit={{ opacity: 0, y: -6, transition: { duration: 0.14 } }}
                    className="text-[44px] md:text-[52px] font-bold leading-[0.95] tracking-[-0.025em]" style={{ color: col }}>
                    {active.stratum}
                  </motion.span>
                </AnimatePresence>
                <span className="text-[12px] text-[#a8a292] pb-2">risk stratum</span>
              </div>

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
              <p className="mt-3 text-[11.5px] leading-[1.5] text-[#a8a292]">
                Anchored on the record: the escape is <a href={POC.url} target="_blank" rel="noopener" className="text-[#6a655c] underline decoration-[#d4cba8] underline-offset-2 hover:text-[#0a0a0a]">2 patients</a>, the proven liability <a href={SOLAR1.url} target="_blank" rel="noopener" className="text-[#6a655c] underline decoration-[#d4cba8] underline-offset-2 hover:text-[#0a0a0a]">572</a>.
              </p>
            </div>

            {/* scenarios — proof shown in every row, the source one tap deeper */}
            <p className="text-[10.5px] uppercase tracking-[0.18em] text-[#a8a292] font-semibold mb-1">If the readout shows</p>
            <motion.div variants={rowsV} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}>
              {SCN.map((s, i) => {
                const isOpen = open === i;
                const on = open === i || hover === i;
                const c = posColor(s.pos);
                return (
                  <motion.div key={s.label} variants={rowV} className="border-t border-[#efefed]">
                    <button type="button"
                      onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full py-4 text-left group">
                      <div className="flex items-center gap-3">
                        <span className={`flex-1 text-[14px] tracking-[-0.005em] transition-colors ${on ? "text-[#0a0a0a] font-semibold" : "text-[#3a3a35] group-hover:text-[#0a0a0a]"}`}>{s.label}</span>
                        <span className="flex items-center gap-2 shrink-0">
                          <span className="text-[12.5px] font-bold" style={{ color: c }}>{s.stratum}</span>
                          <span className="h-[9px] w-[9px] rounded-full" style={{ background: c }} />
                        </span>
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-[11.5px] text-[#6a655c]">
                          <span className="text-[#a8a292]">Precedent · </span>
                          <span className="font-semibold">{s.ev.name}</span>
                          <span className="text-[#cbc3b0]"> · </span>
                          <span className="font-semibold tabular">{s.ev.stat}</span>
                        </span>
                        <span className="grow" />
                        <span className="shrink-0 whitespace-nowrap inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.12em] font-bold" style={{ color: isOpen ? "#0a0a0a" : "#6a655c" }}>
                          {isOpen ? "Collapse" : "Expand"}
                          <svg width="9" height="9" viewBox="0 0 12 12" className="transition-transform duration-200" style={{ transform: isOpen ? "rotate(180deg)" : "none" }}>
                            <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div key="rec" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease }} className="overflow-hidden">
                          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06, duration: 0.35, ease }} className="pb-7 pt-1 max-w-[560px]">
                            {/* the record — clean type on the page, no box, no rule, no fill */}
                            <div className="flex items-baseline gap-x-3 gap-y-1 flex-wrap">
                              <span className="whitespace-nowrap text-[36px] md:text-[42px] font-bold leading-none tracking-[-0.035em] tabular text-[#171717]">{s.ev.stat}</span>
                              <span className="text-[13px] font-semibold text-[#3a3a35] leading-snug">{s.ev.what}</span>
                            </div>
                            <p className="mt-4 text-[12.5px] leading-[1.7] text-[#6a655c]">{s.ev.excerpt}</p>
                            <div className="mt-4 flex items-center gap-x-3 gap-y-1 flex-wrap">
                              <span className="text-[10.5px] uppercase tracking-[0.08em] text-[#a8a292] font-semibold">{s.ev.who} · {s.ev.cite}</span>
                              <span className="grow" />
                              <a href={s.ev.url} target="_blank" rel="noopener" className="inline-flex items-center gap-1 text-[11.5px] font-medium text-[#6a655c] hover:text-[#0a0a0a] underline decoration-[#cfc7b2] underline-offset-2 transition-colors">
                                verify the record
                                <svg width="10" height="10" viewBox="0 0 20 20" fill="none"><path d="M6 14L14 6M14 6H7M14 6V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                              </a>
                            </div>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>

            <p className="mt-6 pt-5 border-t border-[#efefed] text-[11.5px] leading-[1.5] text-[#a8a292]">
              Strata are mechanistic, not a probability estimate. Each rests on the class record, opened above.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
