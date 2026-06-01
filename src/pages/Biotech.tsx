import { useEffect } from 'react'
import { motion } from 'motion/react'
import { CalButton } from '../components/CalButton'

const ease = [0.22, 1, 0.36, 1] as const
const heroV = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
}
const heroChildV = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}
const listV = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const itemV = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
}
const fadeUpV = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
}

export default function Biotech() {
  useEffect(() => {
    document.title = 'Varosync - Therapeutics'
  }, [])

  return (
    <div
      style={{
        minHeight: '100vh',
        position: 'relative',
        overflowX: 'hidden',
        background: `
          radial-gradient(ellipse 55% 60% at 0% 28%, rgba(80, 130, 200, 0.07) 0%, transparent 60%),
          radial-gradient(ellipse 55% 60% at 100% 78%, rgba(40, 160, 200, 0.07) 0%, transparent 60%),
          #ffffff
        `,
      }}
    >
      <style>{`
        /* ============================================================
           HERO — cubes flush to left edge of viewport
           ============================================================ */
        .bio-hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: calc(100vh - 76px);
          align-items: center;
          gap: clamp(24px, 4vw, 64px);
        }

        .bio-hero-visual {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 0;
          margin: 0;
        }

        .bio-hero-image {
          width: 100%;
          max-width: 620px;
          height: auto;
          display: block;
          filter: drop-shadow(0 32px 64px rgba(80, 110, 170, 0.22));
        }

        .bio-hero-text {
          max-width: 580px;
          padding-right: clamp(32px, 5vw, 80px);
        }

        .bio-eyebrow {
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 28px;
        }

        .bio-title {
          font-family: var(--font-heading);
          font-size: clamp(2.4rem, 4.2vw, 3.4rem);
          font-weight: 300;
          line-height: 1.1;
          letter-spacing: -0.025em;
          color: var(--text-primary);
          margin-bottom: 28px;
        }

        .bio-subtitle {
          font-family: var(--font-body);
          font-size: clamp(0.95rem, 1.2vw, 1.05rem);
          font-weight: 400;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 36px;
        }

        .bio-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--text-primary);
          color: var(--white);
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.01em;
          padding: 13px 30px;
          border-radius: 999px;
          text-decoration: none;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .bio-cta:hover {
          background: #000;
          transform: translateY(-1px);
        }

        /* ============================================================
           ENGAGEMENT — cubes (mirrored) flush right, staircase items left
           ============================================================ */
        .engagement-section {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
          align-items: center;
          gap: clamp(24px, 4vw, 48px);
          padding: 80px 0 56px;
        }

        .engagement-content {
          padding-left: clamp(40px, 7vw, 112px);
          padding-right: clamp(24px, 3vw, 48px);
          max-width: 760px;
          justify-self: end;
          width: 100%;
        }

        /* — h2: italic word + tail, no em-dash — */
        .engagement-h2 {
          font-family: var(--font-heading);
          font-style: italic;
          font-weight: 300;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          line-height: 1.18;
          letter-spacing: -0.02em;
          color: var(--text-primary);
          margin: 0 0 56px;
        }

        .engagement-h2-tail {
          font-style: normal;
          color: var(--text-muted);
        }

        /* — Items list (staircase, flat single column blocks) — */
        .engagement-list {
          display: flex;
          flex-direction: column;
          margin-top: 56px;
        }

        .engagement-item {
          display: block;
          padding: 40px 0;
          position: relative;
        }

        .engagement-item + .engagement-item {
          border-top: 1px solid rgba(133, 106, 61, 0.16);
        }

        .engagement-item[data-step="2"] { padding-left: 56px; }
        .engagement-item[data-step="3"] { padding-left: 112px; }

        .engagement-tag {
          display: block;
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          color: var(--text-primary);
          margin-bottom: 18px;
        }

        .engagement-title-item {
          font-family: var(--font-heading);
          font-weight: 300;
          font-size: clamp(1.35rem, 1.9vw, 1.6rem);
          line-height: 1.25;
          letter-spacing: -0.018em;
          color: var(--text-primary);
          margin-bottom: 14px;
        }

        .engagement-body {
          font-family: var(--font-body);
          font-size: 14.5px;
          line-height: 1.7;
          color: var(--text-secondary);
          max-width: 460px;
        }

        /* — Visual (right side cubes + ghost CTA below) — */
        .engagement-visual {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-end;
          gap: 28px;
          padding: 0;
          margin: 0;
        }

        .engagement-image {
          width: 100%;
          max-width: 580px;
          height: auto;
          display: block;
          transform: scaleX(-1);
          filter: drop-shadow(0 32px 64px rgba(40, 140, 180, 0.20));
        }

        .engagement-side-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: transparent;
          color: var(--text-primary);
          border: 1px solid rgba(0, 0, 0, 0.18);
          border-radius: 999px;
          padding: 13px 28px;
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.01em;
          text-decoration: none;
          transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
          margin-right: clamp(40px, 6vw, 96px);
        }

        .engagement-side-cta:hover {
          background: var(--text-primary);
          color: var(--white);
          border-color: var(--text-primary);
          transform: translateY(-1px);
        }

        .engagement-side-cta svg {
          transition: transform 0.2s ease;
        }

        .engagement-side-cta:hover svg {
          transform: translateX(3px);
        }

        /* ============================================================
           RESPONSIVE
           ============================================================ */
        @media (max-width: 980px) {
          .bio-hero {
            grid-template-columns: 1fr;
            min-height: auto;
            padding: 100px 0 24px;
            gap: 32px;
          }
          /* On mobile, the hero cube comes AFTER the hero text */
          .bio-hero-text {
            padding: 0 24px;
            max-width: 100%;
            order: 1;
          }
          .bio-hero-visual {
            justify-content: flex-start;
            order: 2;
          }
          .bio-hero-image {
            max-width: 320px;
          }

          .engagement-section {
            grid-template-columns: 1fr;
            padding: 24px 0 100px;
          }
          /* On mobile, the engagement cube comes AFTER the items */
          .engagement-content {
            padding: 0 24px;
            justify-self: stretch;
            max-width: 100%;
            order: 1;
          }
          .engagement-visual {
            justify-content: flex-start;
            margin-top: 32px;
            margin-bottom: 0;
            order: 2;
          }
          .engagement-image {
            max-width: 280px;
          }

          .engagement-item[data-step="2"] { padding-left: 40px; }
          .engagement-item[data-step="3"] { padding-left: 80px; }
        }

        @media (max-width: 540px) {
          .bio-hero-image {
            max-width: 240px;
          }
          .engagement-item {
            grid-template-columns: 44px 1fr;
            gap: 16px;
            padding: 36px 0;
          }
          .engagement-item[data-step="2"] { padding-left: 24px; }
          .engagement-item[data-step="3"] { padding-left: 48px; }
          .engagement-tag-rule { width: 40px; }
          .engagement-image { max-width: 200px; }
        }
      `}</style>

      {/* Hero */}
      <section className="bio-hero">
        <div className="bio-hero-visual">
          <img
            src="/assets/images/blob-recovery/technology1.png"
            alt=""
            className="bio-hero-image"
          />
        </div>

        <motion.div
          className="bio-hero-text"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={heroV}
        >
          <motion.p variants={heroChildV} className="bio-eyebrow">For therapeutics</motion.p>
          <motion.h1 variants={heroChildV} className="bio-title">
          Model the liabilities that shape your program.
          </motion.h1>
          <motion.p variants={heroChildV} className="bio-subtitle">
            Pharmacology, off-target liability, formulation, and exposure, modeled at their intersection against a proprietary corpus of what has actually failed in the clinic and why. Quantified uncertainty, not point estimates.
          </motion.p>
          <motion.div variants={heroChildV}>
            <CalButton className="bio-cta">
              Discuss your program
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                <path d="M6 14L14 6M14 6H7M14 6V13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </CalButton>
          </motion.div>
        </motion.div>
      </section>

      {/* Engagement */}
      <section className="engagement-section">
        <div className="engagement-content">
          <motion.h2
            className="engagement-h2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUpV}
          >
            <em>Co-developed.</em><br />
            <span className="engagement-h2-tail">Specialized, embedded, iterated.</span>
          </motion.h2>
          <motion.div
            className="engagement-list"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={listV}
          >
            <motion.article variants={itemV} className="engagement-item" data-step="1">
              <span className="engagement-tag">Engage</span>
              <h3 className="engagement-title-item">Co-development, embedded with the program.</h3>
              <p className="engagement-body">
                The asset comes in. The models are fit to it. The program team works alongside the lab through every iteration of the science.
              </p>
            </motion.article>

            <motion.article variants={itemV} className="engagement-item" data-step="2">
              <span className="engagement-tag">Specialize</span>
              <h3 className="engagement-title-item">Specialized to the asset.</h3>
              <p className="engagement-body">
                Proprietary models, built on physics and clinical failure, are tuned for the molecule, target, and modality of the program at hand.
              </p>
            </motion.article>

            <motion.article variants={itemV} className="engagement-item" data-step="3">
              <span className="engagement-tag">Iterate</span>
              <h3 className="engagement-title-item">Tight loops, in working sessions.</h3>
              <p className="engagement-body">
                Findings, edge cases, and open questions are surfaced in conversation with the program team. Adaptive learning as more data comes in.
              </p>
            </motion.article>
          </motion.div>
        </div>

        <motion.div
          className="engagement-visual"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={heroV}
        >
          <motion.div variants={heroChildV}>
            <img
              src="/assets/images/blob-recovery/technology3.png"
              alt=""
              className="engagement-image"
            />
          </motion.div>
          <motion.div variants={heroChildV} style={{ marginTop: '32px' }}>
            <CalButton className="engagement-side-cta">
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4em' }}>
                Schedule a call
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none" style={{ display: 'inline', verticalAlign: 'middle' }}>
                  <path d="M6 14L14 6M14 6H7M14 6V13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </CalButton>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
