import { useEffect } from 'react'
import BackgroundBlobs from '../components/BackgroundBlobs.tsx'
import '../styles/css/technology.css'

const Technology = () => {
  useEffect(() => {
    document.title = 'Varosync - Technology'
  }, [])

  const fontStyle = { fontSize: '1.5rem', fontWeight: '300', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif' };

  return (
    <>
      {/* Image background */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -10,
          pointerEvents: 'none',
          backgroundImage: 'url(/assets/images/background-blue.png)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          transition: 'background 1s',
        }}
        aria-hidden="true"
      />
      <BackgroundBlobs page="technology" />
      <section className="hero">
        <div className="hero-content" style={{ textAlign: 'left', marginTop: '50px', marginLeft: '80px' }}>
          <p className="page-subtitle" style={fontStyle}>
            At the heart of our research and development lies a powerful, dual-pronged philosophy: to first understand the intricate complexity of human biology with unprecedented clarity, and then to rationally design and develop therapeutics of remarkable precision. We have cultivated a technology ecosystem that converges predictive, AI-driven science with a versatile, multi-modal therapeutic engine.
          </p>
        </div>
      </section>

      {/* Content 1 - Full width */}
      <section className="tech-content-section">
        <div className="tech-content-block">
          <div className="tech-content-inner">
            <p style={fontStyle}>
              Varosync is building a new kind of engine, one that bridges biological complexity with computational clarity. Our platform integrates advanced machine learning with real-world data to uncover latent physiological signals and guide therapeutic design with greater precision.
            </p>
            <p style={fontStyle}>
              By modelling multiscale biological processes ranging from gene expression dynamics to drug metabolism and tissue-level pharmacokinetics. We infer patient-specific trajectories that reflect the true heterogeneity of disease. Using deep learning to capture nonlinear interactions between molecular pathways, physiological rhythms, and external interventions. enabling the prediction of therapeutic outcomes with greater temporal and mechanistic resolution.
            </p>
          </div>
        </div>
      </section>

      {/* Content 2 with Image - Two columns */}
      <section className="tech-content-section-split">
        <div className="tech-split-container">
          {/* Content 2 on the left */}
          <div className="tech-content-left">
            <div className="tech-content-inner">
              <p style={fontStyle}>
                Our computational platform integrates diverse data streams to model complex biological systems. By combining machine learning with mechanistic modeling, we can predict how drugs will interact with biological targets and optimize therapeutic outcomes.
              </p>
              <p style={fontStyle}>
                The platform enables us to rapidly iterate through potential drug candidates, identifying those with the highest likelihood of success while minimizing potential side effects. This approach accelerates the drug development process while maintaining rigorous scientific standards.
              </p>
            </div>
          </div>

          {/* Image on the right */}
          <div className="tech-image-right">
            <img
              src="/assets/images/gpu.png"
              alt="Technology Visualization"
              style={{
                display: 'block',
                width: '100%',
                height: 'auto',
                maxWidth: '100%',
                border: 'none',
                boxShadow: 'none',
                padding: '20px'
              }}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Technology 