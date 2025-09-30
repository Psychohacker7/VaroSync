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

  const fontStyle = { fontSize: '1.5rem', fontWeight: '300', fontFamily: 'var(--font-family)' };
  const content2FontStyle = { fontSize: '1.35rem', fontWeight: '300', fontFamily: 'var(--font-family)' };

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
        <div className="hero-content" style={{ textAlign: 'left', marginTop: '50px', marginLeft: '20px', marginRight: '140px' }}>
          <div className="hero-title-container" style={{
            border: '1px solid black',
            borderRadius: '8px',
            padding: '20px',
            position: 'relative',
            display: 'inline-block',
            maxWidth: '900px'
          }}>
            <h1 style={{
              fontSize: '4rem',
              fontWeight: '300',
              margin: 0,
              color: '#000000',
              fontFamily: 'var(--font-family)'
            }}>
              Agentic orchestation of biological complexity
            </h1>
          </div>
          <div className="hero-text-container" style={{ paddingBottom: '0px' }}>
            <p className="page-subtitle" style={fontStyle}>
              We decode the dynamic behavior that determines protein function. Our multi-agent engine combines knowledge-grounded encoders with massively parallel molecular dynamics to map rare conformational states and reveal functional insights invisible to static structure analysis. This generates precision targets and binding strategies for biology's hardest problems.</p>
          </div>
        </div>
      </section>

      {/* Inline Technology3 blob for small screens */}
      <div className="tech-inline-blob-3" aria-hidden="true" style={{ display: 'none' }}>
        <img src="/assets/images/technology3.png" alt="" />
      </div>

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
            Proteins breathe and shift through constant motion. Critical conformational changes emerge and vanish within microseconds, such as transient states  and binding competent geometries. Traditional methods struggle to capture these dynamic events at the necessary resolution and scale.</p>
            <p style={fontStyle}>
              At the heart of our engine is a multi-agent workflow that explores high-dimensional conformational landscapes. Strategic retrievals leverage knowledge-grounded encoders to generate hypotheses about functional pathways from biological data and literature. These insights direct empirical agents to execute adaptive molecular dynamics simulations, efficiently sampling rare states where mechanistic insight emerges. Each cycle refines the system's predictive models, accelerating the path from hypothesis to validated biological understanding </p>
          </div>
          
          {/* Inline technology1 blob for mobile - positioned after text */}
          <div className="tech-inline-blob-1" aria-hidden="true" style={{ display: 'none' }}>
            <img src="/assets/images/technology1.png" alt="" />
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
                The engine delivers high-confidence functional annotations and intervention strategies with atomic-level precision. By integrating learned biological priors with insights from scientific literature, we explore alternative conformational pathways and reveal design opportunities overlooked by structure-centric methods.</p>
              </div>
            </div>
          </div>

          {/* Image on the right */}
          <div className="tech-image-right">
            <div className="tech-image-right-boxed">
              <img
                src="/assets/images/handchip.png"
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