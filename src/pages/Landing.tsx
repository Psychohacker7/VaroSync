import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Hero3D from '../components/Hero3D'
import '../styles/css/landing.css'

const Landing = () => {
  const statementsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    document.title = 'Varosync - Home'
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('statement-visible')
          }
        })
      },
      { threshold: 0.15 }
    )

    statementsRef.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
        <>
      {/* Static multi-layered mesh gradient background for organic, distributed look */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -10,
          pointerEvents: 'none',
          background: `
            linear-gradient(120deg, #FBEEF5 0%, #FDF5F9 60%, transparent 100%),
            linear-gradient(60deg, #FFF9FC 10%, transparent 80%),
            linear-gradient(200deg, #FDF5F9 20%, #FFF9FC 80%, transparent 100%),
            linear-gradient(90deg, #FBEEF5 0%, transparent 100%)
          `,
          transition: 'background 1s',
        }}
        aria-hidden="true"
      />

      {/* Hero section - exact structure from provided HTML */}
      <div className="section home-hero" style={{ position: 'relative' }}>
        <div className="spacing nav-height"></div>
        <div className="spacing _100px tablet-60px mobile-40px"></div>
        <div className="container">
          <div className="comp-hero-card-module a--group">
            <div className="list-horizontal just-right a--group">
              <div className="flex-w-child-100">
                <div className="el extra-pad-bottom" style={{transitionDuration: '1s', transform: 'translate(0px, 0px)', opacity: 1, transitionTimingFunction: 'ease'}}>
                  <div className="flex-horizontal">
                    <div className="news-image-module-image-wrap flex-child-grow">
                      <h1 className="type-h1">A drug asset’s outcome declares itself late.</h1>
                    </div>
                    <div className="flex-w-child-50 tablet-hidden"></div>
                  </div>
                  <div className="animate-parent">
                    <div className="a--anim">
                      <div className="a--delay">0</div>
                      <div className="a--type">a--up</div>
                      <div className="a--type">none</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="list-horizontal min1t a--group">
              <div className="flex-child-grow">
                <div className="el hero-text-el" style={{transitionDuration: '1s', transform: 'translate(0px, 0px)', opacity: 1, height: '100%', transitionTimingFunction: 'ease'}}>
                  <div className="news-image-module-image-wrap flex-bottom-left">
                    <div className="max-w-66 max-w-560px">
                      <p className="hero-subtext">Its molecule, target, and biology shape therapeutic risk long before clinical reality is visible.</p>
                    </div>
                  </div>
                  <div className="animate-parent">
                    <div className="a--anim">
                      <div className="a--delay">2</div>
                      <div className="a--type">a--up</div>
                      <div className="a--type">a--h-150-100</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-w-child-25 tablet-1-6th min1l">
                <div className="el el-empty" style={{transitionDuration: '1s', transform: 'translate(0px, 0px)', opacity: 1, transitionTimingFunction: 'ease'}}>
                  <div className="animate-parent">
                    <div className="a--anim">
                      <div className="a--delay">1</div>
                      <div className="a--type">a--up</div>
                      <div className="a--type">none</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-list">
              <div className="a--list-settings">
                <div className="a--type">a--up</div>
                <div className="a--columns-desktop">3</div>
                <div className="a--columns-tablet">2</div>
                <div className="a--columns-mobile">1</div>
              </div>
            </div>
          </div>
        </div>

        {/* 3D object overlay - positioned absolutely to overlay the hero structure */}
        <div
          className="hero-3d-overlay-grid"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 10,
            display: 'grid',
            gridTemplateColumns: '1fr minmax(320px, 1fr)',
            pointerEvents: 'none',
          }}
        >
          {/* Left cell: empty, right cell: 3D object */}
          <div style={{ pointerEvents: 'none', width: '100%', height: '100%' }}></div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'auto',
              width: '100%',
              height: '100%',
              overflow: 'hidden',
              minWidth: 0,
            }}
          >
            <div className="hero-3d" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <Hero3D />
            </div>
          </div>
        </div>
      </div>
      {/* Responsive stacking for mobile */}
      <style>{`
        /* Desktop: constrain 3D canvas to hero section height */
        .home-hero {
          position: relative !important;
        }

        .hero-3d-overlay-grid {
          height: 100% !important;
        }

        @media (max-width: 900px) {
          .hero-3d-overlay-grid {
            display: flex !important;
            flex-direction: column !important;
            position: static !important;
            width: 100% !important;
            height: auto !important;
            z-index: 10 !important;
          }
          .hero-3d-overlay-grid > div:first-child {
            display: none !important;
          }
          .hero-3d-overlay-grid > div:last-child {
            width: 100% !important;
            height: 600px !important;
            min-height: 500px !important;
            max-height: 700px !important;
            margin-top: -20px !important;
            margin-bottom: -120px !important;
            pointer-events: auto !important;
          }
        }

        @media (max-width: 480px) {
          .hero-3d-overlay-grid > div:last-child {
            height: 320px !important;
            min-height: 220px !important;
            max-height: 400px !important;
            margin-bottom: 60px !important;
          }
        }
      `}</style>

      {/* Statement 1: The bridge — blob left, text right */}
      <section className="statement-section statement-fact" ref={(el) => { statementsRef.current[0] = el }}>
        <div className="statement-blob-area statement-blob-area--left">
          <img src="/assets/images/landing3.png" alt="" className="statement-blob-img" />
        </div>
        <div className="statement-inner">
          <p className="statement-primary">
            Affinity is not the bottleneck.
          </p>
        </div>
      </section>

      {/* Statement 2: The punch — text left, blob right */}
      <section className="statement-section statement-critique" ref={(el) => { statementsRef.current[1] = el }}>
        <div className="statement-inner">
          <p className="statement-primary">
            Generation is commoditized.
          </p>
          <p className="statement-secondary">
            Consequence is not.
          </p>
        </div>
        <div className="statement-blob-area statement-blob-area--right">
          <img src="/assets/images/landing1.png" alt="" className="statement-blob-img" />
        </div>
      </section>

      {/* The Hook: The Solution — blob left, text right */}
      <section className="statement-section statement-hook" ref={(el) => { statementsRef.current[2] = el }}>
        <div className="statement-blob-area statement-blob-area--left">
          <img src="/assets/images/landing2.png" alt="" className="statement-blob-img" style={{ transform: 'scaleX(-1)' }} />
        </div>
        <div className="statement-inner">
          <p className="statement-primary">
            Computational intelligence modeling the foundations of therapeutic risk.
          </p>
        </div>
      </section>

      {/* Routing CTA — double button after the hook */}
      <section className="landing-descriptor" ref={(el) => { statementsRef.current[3] = el }}>
        <div className="descriptor-inner">
          <div className="descriptor-cta-row">
            <Link to="/biotech" className="descriptor-cta">
              For drug developers
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M6 14L14 6M14 6H7M14 6V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
            <Link to="/finance" className="descriptor-cta descriptor-cta--outline">
              For capital allocators
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M6 14L14 6M14 6H7M14 6V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="trusted-section">
        <div className="trusted-container">
          <h2 className="trusted-label">Trusted by</h2>
          <div className="trusted-marquee" aria-label="Trusted by">
            <div className="trusted-marquee-track">
              {/* Render the logo set TWICE for a seamless infinite loop */}
              {[0, 1].map((copy) => (
                <div key={copy} className="trusted-marquee-set" aria-hidden={copy === 1 ? true : undefined}>
                  <a href="https://www.ucsf.edu" target="_blank" rel="noopener noreferrer" className="trusted-marquee-item">
                    <img src="/assets/images/UCSF.png" alt="UCSF" className="trusted-logo" loading="lazy" />
                  </a>
                  <a href="https://medicine.yale.edu" target="_blank" rel="noopener noreferrer" className="trusted-marquee-item">
                    <img src="/assets/images/Yale.png" alt="Yale School of Medicine" className="trusted-logo" loading="lazy" />
                  </a>
                  <a href="https://www.columbia.edu" target="_blank" rel="noopener noreferrer" className="trusted-marquee-item">
                    <img src="/assets/images/Columbia.png" alt="Columbia University" className="trusted-logo" loading="lazy" />
                  </a>
                  <a href="https://hackingmedicine.mit.edu" target="_blank" rel="noopener noreferrer" className="trusted-marquee-item">
                    <img src="/assets/images/MIT_Hack.png" alt="MIT Hacking Medicine" className="trusted-logo" loading="lazy" />
                  </a>
                  <a href="https://new.nsf.gov/funding/initiatives/i-corps" target="_blank" rel="noopener noreferrer" className="trusted-marquee-item">
                    <img src="/assets/images/nsf-icorps.png" alt="NSF I-Corps" className="trusted-logo" loading="lazy" />
                  </a>
                  <a href="https://www.nvidia.com/en-us/startups/" target="_blank" rel="noopener noreferrer" className="trusted-marquee-item">
                    <img src="/assets/images/inceptionlogo.svg" alt="NVIDIA Inception" className="trusted-logo" loading="lazy" />
                  </a>
                  <a href="https://www.c10labs.com" target="_blank" rel="noopener noreferrer" className="trusted-marquee-item">
                    <img src="/assets/images/c10.png" alt="C10 Labs" className="trusted-logo" loading="lazy" />
                  </a>
                  <a href="https://www.larta.org" target="_blank" rel="noopener noreferrer" className="trusted-marquee-item">
                    <img src="/assets/images/larta.png" alt="Larta Institute" className="trusted-logo" loading="lazy" />
                  </a>
                  <a href="https://hsil.sph.harvard.edu" target="_blank" rel="noopener noreferrer" className="trusted-marquee-item">
                    <img src="/assets/images/hsil.png" alt="Harvard T.H. Chan School of Public Health · Health Systems Innovation Lab" className="trusted-logo" loading="lazy" />
                  </a>
                  <a href="https://edc.nyc" target="_blank" rel="noopener noreferrer" className="trusted-marquee-item">
                    <img src="/assets/images/nycedc.png" alt="NYC Economic Development Corporation" className="trusted-logo" loading="lazy" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CSS for the exact structure from provided HTML */}
      <style>{`
        /* Exact CSS from the provided HTML file */
        .section {
          padding: 20px 0 0 0 !important;
          margin: 0 !important;
        }

        .section.home-hero {
          padding: 20px 0 0 0 !important;
          margin: 0 !important;
        }

        .spacing {
          height: 20px;
        }

        .nav-height {
          height: 60px;
        }

        ._100px {
          height: 60px;
        }

        .tablet-60px {
          height: 60px;
        }

        .mobile-40px {
          height: 40px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .comp-hero-card-module {
          border-radius: 12px;
          box-shadow: none;
          padding: 0;
          margin-bottom: 0;
          position: relative;
        }

        .list-horizontal {
          display: flex;
          gap: 0px;
          margin-bottom: 0px;
          border: 1px solid black;
          border-radius: 8px;
          padding: 20px;
          position: relative;
        }

        .list-horizontal::before {
          content: "2";
          position: absolute;
          top: 5px;
          left: 5px;
          background: blue;
          color: white;
          padding: 2px 6px;
          font-size: 12px;
          font-weight: bold;
          display: none;
        }

        .list-horizontal:nth-of-type(2)::before {
          content: "3";
          background: green;
          display: none;
        }

        .list-horizontal:nth-of-type(2) {
          border-color: black;
        }

        .flex-w-child-100 {
          flex: 1;
          padding: 10px;
          position: relative;
        }

        .flex-w-child-50 {
          flex: 0 0 50%;
          padding: 10px;
          position: relative;
        }

        .flex-w-child-25 {
          flex: 0 0 25%;
          padding: 10px;
          position: relative;
        }

        .flex-child-grow {
          flex: 1;
          padding: 10px;
          position: relative;
          min-height: 0;
          display: flex;
          align-items: flex-start;
        }

        .flex-horizontal {
          display: flex;
          align-items: flex-start;
          gap: 20px;
        }

        .news-image-module-image-wrap {
          width: 100%;
        }

        .flex-bottom-left {
          align-items: flex-start;
          display: flex;
        }

        .type-h1 {
          font-size: 3.8rem;
          font-weight: 300;
          line-height: 1.2;
          color: #000;
          margin-bottom: 0;
          letter-spacing: -0.02em;
          font-family: var(--font-family);
        }

        .type-xl {
          font-size: 1.5rem;
          line-height: 1.6;
          color: #000;
          font-weight: 300;
          margin-top: 0;
          font-family: var(--font-family);
        }

        .max-w-66 {
          max-width: 66%;
        }

        .max-w-560px {
          max-width: 560px;
        }

        .min1t {
          min-height: auto;
        }

        .hero-text-el {
          padding: 0;
        }

        .el {
          opacity: 1;
          transform: none;
        }

        .extra-pad-bottom {
          padding-bottom: 30px;
        }

        .tablet-hidden {
          display: block;
        }

        .tablet-1-6th {
          flex: 0 0 16.66%;
        }

        .el-empty {
          min-height: 0;
        }

        /* Hide animation control elements */
        .animate-parent,
        .animate-list,
        .a--anim,
        .a--delay,
        .a--type,
        .a--list-settings,
        .a--columns-desktop,
        .a--columns-tablet,
        .a--columns-mobile {
          display: none;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .section {
            padding: 20px 0 0 0 !important;
            margin: 0 !important;
          }

          .section.home-hero {
            padding: 20px 0 0 0 !important;
            margin: 0 !important;
          }

          .home-hero {
            padding: 20px 0 0 0 !important;
            margin: 0 !important;
          }

          .tablet-hidden {
            display: none;
          }

          .spacing._100px {
            height: 20px;
          }

          .spacing.nav-height {
            height: 20px;
          }

          .type-h1 {
            font-size: 3rem;
          }

          .type-xl {
            font-size: 1.25rem;
          }

          .comp-hero-card-module {
            padding: 40px 30px;
          }

          .list-horizontal {
            flex-direction: column;
            gap: 20px;
          }

          .flex-w-child-50,
          .flex-w-child-25 {
            flex: 1;
          }

          .max-w-66 {
            max-width: 100%;
          }

          .flex-child-grow {
            min-height: 0;
            display: flex;
            align-items: flex-start;
          }

          .el-empty {
            min-height: 0;
          }
        }

        @media (max-width: 480px) {
          .section {
            padding: 5px 0 0 0 !important;
            margin: 0 !important;
          }

          .section.home-hero {
            padding: 5px 0 0 0 !important;
            margin: 0 !important;
          }

          .home-hero {
            padding: 5px 0 0 0 !important;
            margin: 0 !important;
          }

          .spacing._100px {
            height: 20px;
          }

          .spacing.nav-height {
            height: 60px;
          }

          .type-h1 {
            font-size: 2.5rem;
          }

          .comp-hero-card-module {
            padding: 30px 20px;
          }

          .flex-child-grow {
            min-height: 0;
            display: flex;
            align-items: flex-start;
          }

          .el-empty {
            min-height: 0;
          }
        }
      `}</style>
    </>
  )
}

export default Landing