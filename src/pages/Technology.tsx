import { useEffect, useState } from 'react'
import BackgroundBlobs from '../components/BackgroundBlobs.tsx'
import '../styles/css/technology.css'

const Technology = () => {
  const [videoScale, setVideoScale] = useState(60)

  useEffect(() => {
    document.title = 'Varosync - Technology'
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const videoElement = document.getElementById('tech-video')
      if (!videoElement) return

      // Skip animation on mobile devices
      const isMobile = window.innerWidth <= 768
      if (isMobile) {
        setVideoScale(90) // Fixed size on mobile
        return
      }

      const rect = videoElement.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Calculate when video is in view and when it reaches the top
      const isInView = rect.bottom > 0 && rect.top < windowHeight
      
      if (isInView) {
        // Calculate progress: 0 when video first enters view, 1 when top reaches header area
        const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / windowHeight))
        
        // Interpolate between 60% and 90% based on scroll progress
        const newScale = 60 + (30 * progress)
        setVideoScale(newScale)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll) // Handle screen size changes
    // Call once to set initial state
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const fontStyle = { fontSize: '1.5rem', fontWeight: '300', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif' };
  const content2FontStyle = { fontSize: '1.35rem', fontWeight: '300', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif' };

  return (
    <>
      {/* Blue background */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -10,
          pointerEvents: 'none',
          backgroundColor: '#f0f6fd',
          transition: 'background 1s',
        }}
        aria-hidden="true"
      />
      <BackgroundBlobs page="technology" />
      <section className="hero">
        <div className="hero-content" style={{ textAlign: 'left', marginTop: '50px', marginLeft: '80px' }}>
          <div className="hero-text-container">
            <p className="page-subtitle" style={fontStyle}>
              At the heart of our research and development lies a powerful, dual-pronged philosophy: to first understand the intricate complexity of human biology with unprecedented clarity, and then to rationally design and develop therapeutics of remarkable precision. We have cultivated a technology ecosystem that converges predictive, AI-driven science with a versatile, multi-modal therapeutic engine.
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="tech-video-section">
        <div className="tech-video-container">
          <video
            id="tech-video"
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: `${videoScale}%`,
              height: 'auto',
              borderRadius: '20px',
              display: 'block',
              margin: '0 auto',
              maxWidth: '100%'
            }}
          >
            <source src="/assets/videos/outputech.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
            <div className="tech-content-left-boxed">
              <div className="tech-content-inner">
                <p style={content2FontStyle}>
                  Our computational platform integrates diverse data streams to model complex biological systems. By combining machine learning with mechanistic modeling, we can predict how drugs will interact with biological targets and optimize therapeutic outcomes.
                </p>
                <p style={content2FontStyle}>
                  The platform enables us to rapidly iterate through potential drug candidates, identifying those with the highest likelihood of success while minimizing potential side effects. This approach accelerates the drug development process while maintaining rigorous scientific standards.
                </p>
              </div>
            </div>
          </div>

          {/* Image on the right */}
          <div className="tech-image-right">
            <div className="tech-image-right-boxed">
              <img
                src="/assets/images/gpu.png"
                alt="Technology Visualization"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Technology 