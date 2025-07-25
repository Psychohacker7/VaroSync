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
      
      <section className="hero">
        <div className="hero-content" style={{ marginLeft: '400px', maxWidth: '1000px', marginRight: '50px', marginTop: '-160px' }}>
          <div className="hero-title-container">
            <h1 style={{
              fontSize: '4rem',
              fontWeight: '300',
              margin: 0,
              color: '#000000',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif'
            }}>
              Solving the attrition problem
            </h1>
          </div>
          <div className="hero-text-container" style={{ paddingBottom: '0px' }}>
            <p className="page-subtitle" style={{ fontSize: '1.5rem', fontWeight: '300', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif' }}>
              Varosync was founded with a singular, clear-sighted ambition: to deliver transformative medicines that address the underlying drivers of disease. We believe the next frontier in human health lies in understanding and modulating the essential, dynamic processes that govern cellular function. Our purpose is to translate this profound biological understanding into a new generation of therapeutics, offering hope where there was none and pursuing treatments for some of the world's most challenging illnesses.
            </p>
            <p className="page-subtitle" style={{ fontSize: '1.5rem', fontWeight: '300', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif' }}>
              Every day, with each new breakthrough, we're getting closer to achieving our ambitious mission to establish a new standard of care with the help of artificial intelligence.
            </p>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="content-with-image">
          <div className="company-info">
            <div className="partnership">
            <h2 style={{ fontSize: '2.2rem', fontWeight: '300', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif' }}>Partnerships that push boundaries </h2>
            <p style={{ fontSize: '1.2rem', fontWeight: '300', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif' }}>Our culture of collaboration reaches well beyond our own walls and forms the foundation of every partnership, whether with pharmaceutical firms, biotechs, CROs, or other forward-thinking innovators. Our partnerships bring us together in pursuit of a common aim to develop medicines for those who need them most. Transformative discoveries demand tenacity, bold thinking, and true collaboration. That's why we champion rigorous, high-potential science at every stage, applying our expertise to help turn ambitious ideas into tangible breakthroughs.</p>
                      </div>
          </div>
          <div className="content-image">
            <img
              src="/assets/images/pillcomp.png"
              alt="Company Pill"
              style={{ border: 'none', boxShadow: 'none', display: 'block', maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Company 