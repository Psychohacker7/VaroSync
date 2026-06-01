import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

type Verdict = "Likely escapes" | "Partial" | "Carries";
type Prog = { name: string; sponsor: string; verdict: Verdict; sub: string; sim: string; pos: number; basis: string };

const PROGS: Prog[] = [
  { name: "Inavolisib", sponsor: "Itovebi · Roche", verdict: "Partial", sub: "approved, axis engaged", sim: "0.19", pos: 0.46,
    basis: "More selective than alpelisib and degrades mutant p110α, but still engages the α axis. Hyperglycemia remains on the label. The escape is incomplete, not absent." },
  { name: "STX-478", sponsor: "Scorpion / Eli Lilly", verdict: "Likely escapes", sub: "preclinical basis", sim: "0.20", pos: 0.71,
    basis: "Mutant-selective allosteric inhibitor, structurally distinct from the orthosteric class. Reported to spare metabolic dysfunction in mutant models. Clinical confirmation at efficacious dose is the open item." },
  { name: "RLY-2608", sponsor: "Relay Therapeutics", verdict: "Likely escapes", sub: "on current clinical evidence", sim: "0.17", pos: 0.85,
    basis: "Mutant-selective allosteric inhibitor, structurally distinct. Published proof-of-concept reports clinical responses with minimal impact on insulin and no wild-type PI3Kα toxicities." },
];

const VC: Record<Verdict, string> = { "Likely escapes": "#5f9e3c", "Partial": "#d4853a", "Carries": "#b53324" };

const ease = [0.22, 1, 0.36, 1] as const;
const wrapV  = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease, staggerChildren: 0.07 } } };
const childV = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.42, ease } } };

type Props = { num: string };

export function EscapeCard({ num }: Props) {
  const [sel, setSel] = useState(2); // RLY-2608
  const p = PROGS[sel];

  return (
    <motion.div id="card-escape" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={wrapV} className="relative">
      <div className="absolute inset-0 overflow-hidden rounded-[6px]">
        <div className="absolute inset-0" style={{ background: "linear-gradient(155deg, #aab6ac 0%, #84908a 38%, #5e6a62 75%, #3e463f 100%)" }} />
        <svg className="absolute inset-0 w-full h-full opacity-[0.16] mix-blend-overlay" xmlns="http://www.w3.org/2000/svg">
          <filter id="esc-noise"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="11" /></filter>
          <rect width="100%" height="100%" filter="url(#esc-noise)" />
        </svg>
      </div>

      <div className="relative px-6 pt-7 pb-8 md:px-10 md:pt-9 md:pb-11">
        <motion.div variants={childV} className="mb-5 flex flex-wrap items-baseline gap-3">
          <span className="text-white/90 text-[14px] font-semibold tracking-[-0.005em]">
            <span className="text-white/55 mr-1.5 tabular">{num}</span>
            Inheritance · the live wave
          </span>
          <span className="grow" />
          <span className="inline-flex items-center gap-2 text-white/80 text-[11px] uppercase tracking-[0.12em] font-semibold"><span className="dot-live" /> Active programs</span>
        </motion.div>

        <motion.div variants={childV} className="font-helvetica bg-white rounded-[10px] shadow-[0_20px_48px_rgba(15,20,28,0.18),0_3px_8px_rgba(15,20,28,0.06)] overflow-hidden">
          <div className="px-8 pt-9 pb-8 md:px-12 md:pt-11 md:pb-10">
            <div className="mb-9">
              <h3 className="text-[19px] tracking-[-0.015em] font-bold text-[#0a0a0a]">The escape spectrum</h3>
              <p className="mt-1 text-[12.5px] text-[#888377]">Each active program placed by a mechanistic read. Structural distance to the orthosteric class shown.</p>
            </div>

            {/* spectrum */}
            <div className="relative mx-2 mb-2" style={{ height: 86 }}>
              {/* track */}
              <div className="absolute left-0 right-0 top-[52px] h-[3px] rounded-full" style={{ background: "linear-gradient(90deg, #b53324 0%, #d4853a 48%, #5f9e3c 100%)", opacity: 0.5 }} />
              {/* zone ticks */}
              {[0.4, 0.65].map((x) => <div key={x} className="absolute top-[46px] h-[15px] w-px bg-[#d8d3c8]" style={{ left: `${x * 100}%` }} />)}
              {/* end labels */}
              <span className="absolute top-[64px] left-0 text-[10.5px] uppercase tracking-[0.1em] font-semibold text-[#b53324]">Carries the liability</span>
              <span className="absolute top-[64px] right-0 text-[10.5px] uppercase tracking-[0.1em] font-semibold text-[#5f9e3c]">Escapes it</span>
              {/* markers */}
              {PROGS.map((prog, i) => {
                const on = i === sel;
                const c = VC[prog.verdict];
                return (
                  <button key={prog.name} type="button" onClick={() => setSel(i)} className="absolute group" style={{ left: `${prog.pos * 100}%`, top: 0, transform: "translateX(-50%)" }}>
                    <span className={`block text-[11.5px] whitespace-nowrap mb-1.5 transition-colors ${on ? "text-[#0a0a0a] font-bold" : "text-[#888377] group-hover:text-[#0a0a0a]"}`} style={{ transform: "translateX(-50%)", marginLeft: "50%" }}>{prog.name}</span>
                    <span className="block rounded-full mx-auto transition-all" style={{ width: on ? 16 : 11, height: on ? 16 : 11, background: c, boxShadow: on ? `0 0 0 5px ${c}22` : "none" }} />
                  </button>
                );
              })}
            </div>

            {/* detail */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={sel} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.28, ease } }} exit={{ opacity: 0, transition: { duration: 0.1 } }}
                className="mt-8 pt-7 border-t border-[#efefed] grid md:grid-cols-[260px_1fr] gap-8">
                <div>
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-[20px] font-bold text-[#0a0a0a] tracking-[-0.01em]">{p.name}</span>
                  </div>
                  <p className="text-[12.5px] text-[#888377] mt-0.5">{p.sponsor}</p>
                  <p className="mt-4 text-[19px] font-bold leading-tight" style={{ color: VC[p.verdict] }}>{p.verdict}</p>
                  <p className="text-[12px] text-[#888377] mt-1">{p.sub}</p>
                  <div className="mt-4 inline-flex items-baseline gap-2 text-[12px] text-[#888377]">
                    <span className="uppercase tracking-[0.08em] text-[10.5px] font-bold text-[#a8a292]">Structural distance</span>
                    <span className="font-semibold text-[#0a0a0a] tabular">{p.sim}</span>
                  </div>
                </div>
                <div className="md:border-l md:border-[#efefed] md:pl-8 flex items-center">
                  <p className="text-[14.5px] leading-[1.6] text-[#3a3a35]">{p.basis}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <p className="mt-8 pt-5 border-t border-[#efefed] text-[11.5px] leading-[1.5] text-[#a8a292]">
              Read derived from isoform selectivity, binding mode, and the reported clinical metabolic signal. Sources: company disclosures; Cancer Discovery, 2023–2024.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
