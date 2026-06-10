import { useEffect } from 'react'
import { motion } from 'motion/react'
import { CalButton } from '../components/CalButton'
import { StructureCard } from '@/components/cards/structure'
import { BindingCard } from '@/components/cards/binding'
import { MechanismCard } from '@/components/cards/mechanism'
import { SignalsCard } from '@/components/cards/signals'
import { EscapeCard } from '@/components/cards/escape'
import { GapCard } from '@/components/cards/gap'
import { CatalystCard } from '@/components/cards/catalyst'

const ease = [0.22, 1, 0.36, 1] as const;

// Panel text entrance — staggered children
const panelWrapV = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease, staggerChildren: 0.1 } },
};
const panelItemV = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
};

// Hero stagger
const heroV = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};
const heroChildV = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

function Panel({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={panelWrapV}
      className="w-full flex flex-col justify-center"
    >
      <motion.p variants={panelItemV} className="text-[11.5px] uppercase tracking-[0.16em] text-oxblood font-semibold mb-4">{eyebrow}</motion.p>
      <motion.h2 variants={panelItemV} className="font-heading text-[28px] leading-[1.15] tracking-[-0.02em] font-light text-ink">{title}</motion.h2>
      <motion.p variants={panelItemV} className="mt-4 text-[15px] leading-[1.6] text-muted">{body}</motion.p>
    </motion.div>
  );
}

function Module({ side, panel, children }: { side: "left" | "right"; panel: React.ReactNode; children: React.ReactNode }) {
  // Mobile: always stack panel above card (text intro, then the visual).
  // Desktop: lay out side by side, panel left or right per `side`.
  return (
    <section className="max-w-[1320px] mx-auto px-5 sm:px-6 lg:px-10 py-8 lg:py-12 flex flex-col lg:flex-row gap-7 lg:gap-12 lg:items-center">
      <div className={`w-full lg:w-[380px] lg:shrink-0 ${side === "right" ? "lg:order-2" : ""}`}>{panel}</div>
      <div className={`w-full lg:flex-1 min-w-0 ${side === "right" ? "lg:order-1" : ""}`}>{children}</div>
    </section>
  );
}

export default function Finance() {
  useEffect(() => {
    document.title = 'Varosync - Capital Markets'
  }, [])

  return (
    <>
      <div>
        {/* — Cream layer wraps everything (including the area behind the fixed header) — */}
        <div
          className="layer"
          style={{
            background: 'var(--color-paper)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Paper grain — scoped to this layer */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' seed='4'/><feColorMatrix values='0 0 0 0 0.36  0 0 0 0 0.28  0 0 0 0 0.16  0 0 0 0.08 0'/></filter><rect width='240' height='240' filter='url(%23n)'/></svg>")`,
              mixBlendMode: 'multiply' as const,
              opacity: 0.85,
              pointerEvents: 'none' as const,
              zIndex: 1,
            }}
          />

          <div style={{ position: 'relative', zIndex: 3 }}>
            {/* spacer for fixed site header — inside cream so the bg matches */}
            <div className="h-[76px]" />

            {/* — Varosync-level hero — mobile mirrors biotech hero specs exactly — */}
            <motion.section
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={heroV}
              className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-12 pt-[100px] pb-[60px] lg:py-20"
            >
              <div className="flex items-center justify-start order-2 lg:order-none">
                <motion.img
                  variants={heroChildV}
                  src="/assets/images/blob-recovery/news3.png"
                  alt=""
                  className="w-full max-w-[320px] lg:max-w-[620px] h-auto block"
                  style={{ mixBlendMode: 'multiply' }}
                />
              </div>
              <div className="px-6 lg:px-0 lg:max-w-[580px] lg:pr-[clamp(32px,5vw,80px)] order-1 lg:order-none">
                <motion.p variants={heroChildV} className="text-[12px] uppercase tracking-[0.18em] text-muted-2 font-semibold mb-7">
                  For capital allocators
                </motion.p>
                <motion.h1 variants={heroChildV} className="font-heading text-[clamp(2.4rem,4.2vw,3.4rem)] leading-[1.1] tracking-[-0.025em] font-light text-ink mb-7">
                  Everything behind a drug asset, on the record.
                </motion.h1>
                <motion.p variants={heroChildV} className="text-[clamp(0.95rem,1.2vw,1.05rem)] leading-[1.7] text-muted mb-9">
                  Programs that came before it their performance, what is still unproven, and what will settle it. Fully verifiable to the filing or trial behind it.
                </motion.p>
                <motion.div variants={heroChildV}>
                  <CalButton className="inline-flex items-center gap-2.5 bg-ink text-paper px-7 py-3.5 rounded-full text-[14px] font-medium hover:bg-oxblood transition-colors">
                    Discuss your asset
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                      <path d="M6 14L14 6M14 6H7M14 6V13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </CalButton>
                </motion.div>
              </div>
            </motion.section>

            {/* — Case study sub-hero wrapper + right-edge decorative cubes — */}
            <div style={{ position: 'relative' }}>
              <motion.section
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={heroV}
                className="max-w-[1320px] mx-auto px-6 lg:px-10 pt-8 pb-10 lg:pb-14 relative"
                style={{ zIndex: 3 }}
              >
                <div className="max-w-[860px]">
                  <motion.p variants={heroChildV} className="text-[12px] uppercase tracking-[0.16em] text-oxblood font-semibold mb-6">
                    Example case study: PI3K inhibitor class
                  </motion.p>
                  <motion.h2 variants={heroChildV} className="font-heading text-[clamp(2.4rem,4.2vw,3rem)] leading-[1.1] tracking-[-0.025em] font-light text-ink">
                    On-target toxicity ended a cancer drug class. The market is betting it can engineer its way back in.
                  </motion.h2>
                  <motion.p variants={heroChildV} className="mt-8 text-[18px] leading-[1.55] text-muted max-w-[640px]">
                    PI3K inhibitors, a class of targeted therapies approved for blood cancers and breast cancer, saw five programs withdrawn or restricted in two years. A 16-to-0 FDA vote against the class. The failures were on-target and isoform-specific, written into the chemistry.
                  </motion.p>
                  <motion.p variants={heroChildV} className="mt-5 text-[16px] leading-[1.6] text-muted-2 max-w-[640px]">
                    The class, taken apart below.
                  </motion.p>
                </div>
              </motion.section>

              {/* Decorative news2 cubes — mirrored, flush right edge of viewport,
                  2/3 inside sub-hero / 1/3 spilling into the first card below */}
              <img
                src="/assets/images/blob-recovery/news2.png"
                alt=""
                aria-hidden="true"
                className="hidden lg:block"
                style={{
                  position: 'absolute',
                  right: 0,
                  bottom: 0,
                  width: 'clamp(280px, 26vw, 440px)',
                  height: 'auto',
                  transform: 'scaleX(-1) translateY(50%)',
                  mixBlendMode: 'multiply',
                  pointerEvents: 'none',
                  zIndex: 2,
                }}
              />
            </div>

            {/* — Case study: 7 cards + closing CTA (adaptive, all viewports) — */}
            <div>

              {/* — Structural landscape (the hook) — */}
              <Module side="right" panel={
                <Panel
                  eyebrow="Class-wide risk"
                  title="Failure tracks the target, not the molecule."
                  body="The same liabilities recur across 56 distinct chemotypes. Of 63 resolved structures, 50 are dead, the δ-selective cluster entirely. The risk sits in the target biology, so a fresh scaffold does not escape it."
                />}>
                <StructureCard num="" />
              </Module>

              {/* — Post-market record (the proof) — */}
              <Module side="left" panel={
                <Panel
                  eyebrow="Post-market signal"
                  title="Written into the chemistry. Confirmed in the record."
                  body="Read the structure and the toxicity axis follows: δ programs hit immunity, α programs hit metabolism. The FDA's 20-million-report adverse-event corpus agrees. Alpelisib's hyperglycemia carries a reporting odds ratio of 128, idelalisib's pneumonitis 23."
                />}>
                <SignalsCard num="" />
              </Module>

              {/* — The live wave (the verdict — does it inherit or escape) — */}
              <Module side="right" panel={
                <Panel
                  eyebrow="The live wave"
                  title="Inherit, or escape?"
                  body="The active programs, scored on whether they carry the class liability or break it. RLY-2608 and STX-478 are built to spare wild-type α; inavolisib only softens it. Lilly paid $2.5 billion for the company behind one of them."
                />}>
                <EscapeCard num="" />
              </Module>

              {/* — Gap audit (actionable diligence — broadest ICP appeal) — */}
              <Module side="left" panel={
                <Panel
                  eyebrow="Gap audit"
                  title="What still has to be proven."
                  body="The escape thesis rests on one unproven point: that sparing wild-type α holds at a dose that still kills tumor. No active program has shown it yet. On a live asset, gaps like this become diligence questions, milestones, and deal terms."
                />}>
                <GapCard num="" />
              </Module>

              {/* — Catalysts and scenarios (timing — hedge funds, PE, VCs) — */}
              <Module side="right" panel={
                <Panel
                  eyebrow="Catalyst calendar"
                  title="What resolves, and when."
                  body="Each finding above is settled by a dated event. Gedatolisib's FDA decision in Q3 2026, the inavolisib and RLY-2608 head-to-head readouts behind it. Every catalyst maps to the specific risk it puts to the test."
                />}>
                <CatalystCard num="" />
              </Module>

              {/* — Mechanism (analytical depth — for those who want to verify) — */}
              <Module side="left" panel={
                <Panel
                  eyebrow="Mechanism trace"
                  title="One path from mechanism to outcome."
                  body="Target to outcome, every program traces one chain: isoform sets the signaling, signaling sets the toxicity axis, the axis sets the clinical result. Trace any node back to its evidence."
                />}>
                <MechanismCard num="" />
              </Module>

              {/* — Binding mode (deepest analytical, visually striking closer) — */}
              <Module side="right" panel={
                <Panel
                  eyebrow="Binding mode"
                  title="The liability lives at the protein."
                  body="PI3Kα from the experimental structure. The orthosteric pocket carries the wild-type metabolic liability. The mutant-selective programs were built to bind a pocket the wild-type enzyme never forms. Same protein, two fates."
                />}>
                <BindingCard num="" />
              </Module>

              {/* — Closing: credibility earns the ask, one continuous movement — */}
              <motion.section
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={panelWrapV}
                className="max-w-[1320px] mx-auto px-5 sm:px-6 lg:px-10 pt-14 lg:pt-16 pb-20 lg:pb-24"
              >
                <div className="border-t border-rule pt-12 lg:pt-16">
                  <div className="grid lg:grid-cols-[1fr_340px] gap-10 lg:gap-16">
                    {/* left: the title sentence, then what the full workspace answers */}
                    <div>
                      <motion.h2 variants={panelItemV} className="font-heading text-[clamp(1.65rem,2.7vw,2.5rem)] leading-[1.12] tracking-[-0.025em] font-light text-ink max-w-[740px]">
                        You have seen the preview. The full workspace built to answer the questions a position actually turns on.
                      </motion.h2>
                      <motion.div variants={panelItemV} className="mt-8 lg:mt-9 max-w-[600px] space-y-3 text-[clamp(1rem,1.2vw,1.1rem)] leading-[1.5] text-[#3a3a35]">
                        <p>Where the target is crowded and where it is open, indication by indication. How much friction sits between this asset and the clinic, scored. What each dated catalyst does to the thesis.</p>
                      </motion.div>
                    </div>
                    {/* right: the ask, filling the space that was empty on desktop */}
                    <motion.div variants={panelItemV} className="flex flex-col justify-center lg:border-l lg:border-rule-soft lg:pl-12">
                      <h3 className="font-heading text-[clamp(1.5rem,2vw,1.9rem)] leading-[1.12] tracking-[-0.02em] font-light text-ink">
                        Bring the asset you are weighing.
                      </h3>
                      <CalButton className="mt-6 self-start inline-flex items-center gap-2.5 text-[14px] font-semibold tracking-[-0.005em] text-paper bg-ink px-7 py-3.5 rounded-full hover:bg-oxblood transition-colors">
                        Request the full case study
                        <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                          <path d="M6 14L14 6M14 6H7M14 6V13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </CalButton>
                    </motion.div>
                  </div>
                </div>
              </motion.section>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
