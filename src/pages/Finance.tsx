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

// CTA entrance
const ctaV = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease, staggerChildren: 0.1 } },
};

function Panel({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={panelWrapV}
      className="w-[380px] shrink-0 flex flex-col justify-center"
    >
      <motion.p variants={panelItemV} className="text-[11.5px] uppercase tracking-[0.16em] text-oxblood font-semibold mb-4">{eyebrow}</motion.p>
      <motion.h2 variants={panelItemV} className="font-heading text-[28px] leading-[1.15] tracking-[-0.02em] font-light text-ink">{title}</motion.h2>
      <motion.p variants={panelItemV} className="mt-4 text-[15px] leading-[1.6] text-muted">{body}</motion.p>
    </motion.div>
  );
}

function Module({ side, panel, children }: { side: "left" | "right"; panel: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className="max-w-[1320px] mx-auto px-10 py-12 flex gap-12 items-center">
      {side === "left"
        ? <>{panel}<div className="flex-1 min-w-0">{children}</div></>
        : <><div className="flex-1 min-w-0">{children}</div>{panel}</>}
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
                  For allocators
                </motion.p>
                <motion.h1 variants={heroChildV} className="font-heading text-[clamp(2.4rem,4.2vw,3.4rem)] leading-[1.1] tracking-[-0.025em] font-light text-ink mb-7">
                  Asset-level risk intelligence.
                </motion.h1>
                <motion.p variants={heroChildV} className="text-[clamp(0.95rem,1.2vw,1.05rem)] leading-[1.7] text-muted mb-9">
                  Sponsor-data gap audits against historical failure patterns. Comparable-failure cohorts indexed by structural and mechanism similarity. Decomposable risk components, model-ready. Independent of position.
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
                    Below: structural risk mapping, calibrated post-market signals, mechanism traces, binding-mode reads, escape verdicts, gap audits, and catalyst timing. One drug class in full.
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

            {/* — Mobile-only: "open on desktop" message with Lottie idle animation — */}
            <div className="lg:hidden px-6 pt-12 pb-24">
              <div className="max-w-[420px] mx-auto text-center">
                {/* Minimal monitor SVG with one breathing dot inside.
                    To swap in a Lottie / GIF later: replace this <svg> with an <img src="..."/> or <dotlottie-player ... />. */}
                <svg viewBox="0 0 100 92" className="w-[140px] h-auto mx-auto mb-6" fill="none" aria-hidden="true">
                  <rect x="10" y="10" width="80" height="58" rx="4" stroke="var(--color-ink)" strokeWidth="1.4" opacity="0.5" />
                  <line x1="42" y1="68" x2="42" y2="80" stroke="var(--color-ink)" strokeWidth="1.4" opacity="0.5" />
                  <line x1="58" y1="68" x2="58" y2="80" stroke="var(--color-ink)" strokeWidth="1.4" opacity="0.5" />
                  <line x1="28" y1="80" x2="72" y2="80" stroke="var(--color-ink)" strokeWidth="1.4" opacity="0.5" strokeLinecap="round" />
                  <circle cx="50" cy="39" r="3" fill="var(--color-oxblood)" opacity="0.85">
                    <animate attributeName="r" values="2;6;2" dur="2.4s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.35;0.85;0.35" dur="2.4s" repeatCount="indefinite" />
                  </circle>
                </svg>
                <h3 className="font-heading text-[22px] leading-[1.2] tracking-[-0.015em] font-light text-ink mb-3">
                  Best viewed on desktop.
                </h3>
                <p className="text-[14px] leading-[1.65] text-muted mb-7">
                  Seven interactive views, computed live. Open this page on a larger screen to walk through them.
                </p>
                <CalButton
                  className="inline-flex items-center gap-2 text-[13px] font-semibold text-paper bg-ink px-6 py-3 rounded-full hover:bg-oxblood transition-colors"
                >
                  Or, request access
                  <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
                    <path d="M6 14L14 6M14 6H7M14 6V13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </CalButton>
              </div>
            </div>

            {/* — Desktop-only: 7 cards + closing CTA — */}
            <div className="hidden lg:block">

            {/* — Structural landscape (the hook) — */}
            <Module side="right" panel={
              <Panel
                eyebrow="Structural landscape"
                title="Failure has a shape."
                body="Eight programs placed by computed molecular similarity. Programs that share liabilities cluster in structure. The pattern reads as a class signal, not a string of unrelated setbacks."
              />}>
              <StructureCard num="" />
            </Module>

            {/* — Post-market record (the proof) — */}
            <Module side="left" panel={
              <Panel
                eyebrow="Post-market record"
                title="Predicted from chemistry. Reflected in the record."
                body="The structural prediction: δ programs hit the immune axis, α programs hit the metabolic axis. Across roughly sixteen thousand FAERS reports, with generic background terms filtered out, the dominant adverse-event signal tracks the structural read."
              />}>
              <SignalsCard num="" />
            </Module>

            {/* — The live wave (the verdict — does it inherit or escape) — */}
            <Module side="right" panel={
              <Panel
                eyebrow="The live wave"
                title="Inherit, or escape?"
                body="Active programs scored on whether they carry the class liability or break from it. The read separates programs that engineered around the liability from ones that only moved it."
              />}>
              <EscapeCard num="" />
            </Module>

            {/* — Gap audit (actionable diligence — broadest ICP appeal) — */}
            <Module side="left" panel={
              <Panel
                eyebrow="Gap audit"
                title="What still has to be proven."
                body="The public read is supportive, but the decisive question remains open: whether the metabolic sparing holds at an efficacious dose. These are the gaps that become milestones, diligence questions, and deal terms."
              />}>
              <GapCard num="" />
            </Module>

            {/* — Catalysts and scenarios (timing — hedge funds, PE, VCs) — */}
            <Module side="right" panel={
              <Panel
                eyebrow="Catalysts and scenarios"
                title="What to watch, and when."
                body="The class unwound on a chain of readouts. The escape thesis turns on the next: a randomized test of the sparing at an efficacious dose. Here is how the risk branches on the result."
              />}>
              <CatalystCard num="" />
            </Module>

            {/* — Mechanism (analytical depth — for those who want to verify) — */}
            <Module side="left" panel={
              <Panel
                eyebrow="Mechanism"
                title="One path from mechanism to outcome."
                body="Target to outcome, each program traces the same chain. Isoform sets the signaling, signaling sets the toxicity axis, the axis sets the clinical outcome. Trace any node."
              />}>
              <MechanismCard num="" />
            </Module>

            {/* — Binding mode (deepest analytical, visually striking closer) — */}
            <Module side="right" panel={
              <Panel
                eyebrow="Binding mode"
                title="The liability lives at the protein."
                body="PI3Kα from the experimental structure. The orthosteric pocket carries the wild-type metabolic liability. The allosteric pocket is where the new wave was designed to bind instead. Same protein, two sites."
              />}>
              <BindingCard num="" />
            </Module>

            {/* closing CTA — specific deliverables, direct ask */}
            <motion.section
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={ctaV}
              className="max-w-[1320px] mx-auto px-10 pt-10 pb-24"
            >
              <div className="border-t border-rule pt-14 flex items-end justify-between gap-12 flex-wrap">
                <motion.div variants={panelItemV} className="max-w-[640px]">
                  <h2 className="font-heading text-[36px] leading-[1.12] tracking-[-0.02em] font-light text-ink">
                    The full PI3K case study.
                  </h2>
                  <p className="mt-6 text-[15.5px] leading-[1.65] text-muted">
                    Calibrated PoS with sensitivity ranges. Decomposable risk components, interrogatable. Off-target binding profiles across the proteome. Mechanism traces with metabolite-level evidence. Comparable-failure cohorts indexed by structural and mechanism similarity, at scale.
                  </p>
                </motion.div>
                <motion.div variants={panelItemV} className="shrink-0">
                  <CalButton className="inline-flex items-center gap-2.5 text-[14px] font-semibold tracking-[-0.005em] text-paper bg-ink px-7 py-3.5 rounded-full hover:bg-oxblood transition-colors">
                    Request access
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                      <path d="M6 14L14 6M14 6H7M14 6V13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </CalButton>
                </motion.div>
              </div>
            </motion.section>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
