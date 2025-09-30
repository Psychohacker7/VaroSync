import { useEffect } from 'react'
import Hero3D from '../components/Hero3D.tsx'
import BackgroundBlobs from '../components/BackgroundBlobs.tsx'
import '../styles/css/landing.css'

const Landing = () => {
  useEffect(() => {
    document.title = 'Varosync - Home'
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
      <BackgroundBlobs page="landing" />
      
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
                      <h1 className="type-h1">Dynamic models for designing precision molecules</h1>
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
                      <p className="type-xl">We're entering a new era where inference-based computational methods uncover a new layer of intelligence in molecular design. At Varosync, we're building that future.</p>
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

      {/* Development approach section */}
      <section className="landing-content-section">
        <div className="landing-content-grid" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
          {/* Removed the image, keep the space */}
          <div className="landing-content-image" style={{ flex: 1 }}></div>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start', width: '100%', paddingRight: '20px' }}>
            <div
              className="landing-content-text"
              style={{
                maxWidth: '600px',
                marginLeft: '-150px', // Adjust this value to move the text right or left
                width: '100%',
              }}
            >
              <p className="landing-content-body" style={{ fontSize: '1.5rem', fontWeight: '300', fontFamily: 'var(--font-family)' }}>
                <br />
                <br />
              The ability to engineer matter at the molecular level demands a new class of instrument. One that operates beyond static blueprints, providing a computational environment where the complex motion of proteins becomes a deterministic design parameter. It is a system designed to augment scientific intuition, enabling our partners to build the molecular technologies of the future.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile blob section - only visible on mobile */}
      <section className="mobile-blob-section-left">
        <img
          src="/assets/images/landing1.png"
          alt="Mobile blob decoration left"
          className="mobile-blob-image-left"
        />
      </section>

      {/* Partners section */}
      <section className="landing-content-section">
        <div className="landing-partners-container">
          <h2 className="landing-content-subtitle" style={{ fontSize: '3rem', fontWeight: '400', fontFamily: 'var(--font-family)' }}>Our Partners</h2>
          <div className="landing-partners-grid">
            <img
              src="/assets/images/partnera.png"
              alt="Partner company 1"
              className="landing-content-img-plain"
              loading="lazy"
            />
            <img
              src="/assets/images/partnerb.png"
              alt="Partner company 2"
              className="landing-content-img-plain"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Recognized by section */}
      <section className="landing-content-section">
        <div className="landing-recognized-container">
          <h2 className="landing-content-subtitle" style={{ fontSize: '3rem', fontWeight: '400', fontFamily: 'var(--font-family)' }}>Recognized by</h2>
          <div style={{ height: '12px' }}></div>
          <div className="landing-recognized-grid">
            <img
              src="/assets/images/inceptionlogo.svg"
              alt="Inception logo"
              className="landing-content-img-plain"
              loading="lazy"
              style={{ transform: 'scale(1.3)', transformOrigin: 'center' }}
            />
            <img
              src="/assets/images/nybio.png"
              alt="NYBIO logo"
              className="landing-content-img-plain"
              loading="lazy"
            />
            <img
              src="/assets/images/nsf-icorps.png"
              alt="Nsf-icorps logo"
              className="landing-content-img-plain"
              loading="lazy"
              style={{ transform: 'scale(1.5)', transformOrigin: 'center' }}
            />
            <img
              src="/assets/images/theventures.svg"
              alt="The Ventures logo"
              className="landing-content-img-plain"
              loading="lazy"
              style={{ transform: 'scale(1.3)', transformOrigin: 'center' }}
            />
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
          height: 20px;
        }

        ._100px {
          height: 20px;
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
          min-height: 200px;
          display: flex;
          align-items: flex-end;
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
          align-items: flex-end;
          height: 100%;
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
            align-items: flex-end;
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
            height: 2px;
          }

          .spacing.nav-height {
            height: 2px;
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
            align-items: flex-end;
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