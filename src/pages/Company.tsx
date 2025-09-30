import { useEffect } from 'react'
import BackgroundBlobs from '../components/BackgroundBlobs.tsx'
import '../styles/css/company.css'

const Company = () => {
  useEffect(() => {
    document.title = 'Varosync - Company'
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
          background: '#effae2',
          transition: 'background 1s',
        }}
        aria-hidden="true"
      />
      <BackgroundBlobs page="company" />
      
      {/* Reduced spacing to prevent header overlap */}
      <div className="spacing nav-height"></div>
      
      <section className="hero" style={{ position: 'relative', marginTop: '100px', paddingTop: '50px', paddingBottom: '0px', display: 'flex', alignItems: 'flex-start', justifyContent: 'normal' }}>
        <div className="hero-content" style={{ marginLeft: 'clamp(5px, 5vw, 400px)', maxWidth: 'clamp(600px, 75vw, 1000px)', marginRight: 'clamp(20px, 5vw, 50px)', marginTop: '0px', paddingBottom: '40px' }}>
          <div className="hero-title-container">
            <h1 style={{
              fontSize: '4rem',
              fontWeight: '300',
              margin: 0,
              color: '#000000',
              fontFamily: 'var(--font-family)'
            }}>
              Solving the attrition problem
            </h1>
          </div>
          <div className="hero-text-container" style={{ paddingBottom: '0px' }}>
            <p className="page-subtitle" style={{ fontSize: '1.5rem', fontWeight: '300', fontFamily: 'var(--font-family)' }}>
Varosync was founded to build the definitive computational engine for the next era of molecular design. Our mission is to overcome the limitations of static tools, enabling the design of precision molecules against the world's most challenging protein targets.
Our core belief is that a true understanding of molecular systems is dynamic. The frontier lies not in static observation, but in computing the complex conformational motions of proteins. Within these rare, transitional states lie the most significant design opportunities. These states were previously invisible to researchers.</p>
            <p className="page-subtitle" style={{ fontSize: '1.5rem', fontWeight: '300', fontFamily: 'var(--font-family)' }}>
             Our purpose is to translate deep computational understanding into decisive insights. We are committed to refining this technology to empower the scientific community, accelerating discovery, and redefining what is possible in molecular engineering.</p>
          </div>
        </div>
      </section>

      <section className="content" style={{ position: 'relative', marginTop: '80px' }}>
        <div className="content-with-image">
          <div className="company-info">
            <div className="partnership">
            <h2 style={{ fontSize: '2.2rem', fontWeight: '300', fontFamily: 'var(--font-family)' }}>Partnerships that push boundaries </h2>
            <p style={{ fontSize: '1.2rem', fontWeight: '300', fontFamily: 'var(--font-family)' }}>Our culture of collaboration reaches well beyond our own walls and forms the foundation of every partnership, whether with pharmaceutical firms, biotechs, CROs, or other forward-thinking innovators. Our partnerships bring us together in pursuit of a common aim to develop medicines for those who need them most. Transformative discoveries demand tenacity, bold thinking, and true collaboration. That's why we champion rigorous, high-potential science at every stage, applying our expertise to help turn ambitious ideas into tangible breakthroughs.</p>
            
            {/* Company3 blob positioned naturally after text */}
            <img 
              src="/assets/images/company3.png" 
              alt="" 
              className="company1-blob company3-blob-inline"
            />
                      </div>
          </div>
          <div className="content-image">
            <img
              src="/assets/images/pillcomp.png"
              alt="Company Pill"
              style={{ border: 'none', boxShadow: 'none', display: 'block', maxWidth: '100%', width: '100%', height: 'auto', objectFit: 'contain' }}
            />
          </div>
        </div>
        
        {/* Company1 blob positioned relative to content section */}
        <img 
          src="/assets/images/company1.png" 
          alt="" 
          className="company1-blob content-blob"
        />
        

      </section>
    </>
  )
}

export default Company 