import { useEffect } from 'react'
import ContactForm from '../components/ContactForm.tsx'
import BackgroundBlobs from '../components/BackgroundBlobs.tsx'
import '../styles/css/contact.css'

const Contact = () => {
  useEffect(() => {
    document.title = 'Varosync - Contact'
  }, [])

  const fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif';

  return (
    <>
      <BackgroundBlobs page="contact" />
      <section className="hero">
        <div className="hero-content">
          <h1 className="page-title" style={{ fontFamily }}>Get in Touch</h1>
          <p className="page-subtitle" style={{ fontFamily }}>Let's discuss how we can help bring your vision to life</p>
        </div>
      </section>

      <section className="content">
        <div className="content-wrapper">
          <div className="contact-container">
            <div className="contact-info">
              <h2 style={{ fontFamily }}>Contact Information</h2>
              
              <div className="contact-item">
                <h3 style={{ fontFamily }}>General Inquiries</h3>
                <p style={{ fontFamily }}>Email: info@varosync.com</p>
                <p style={{ fontFamily }}>Phone: +1 (555) 123-4567</p>
              </div>
              
              <div className="contact-item">
                <h3 style={{ fontFamily }}>Sales</h3>
                <p style={{ fontFamily }}>Email: sales@varosync.com</p>
                <p style={{ fontFamily }}>Phone: +1 (555) 123-4568</p>
              </div>
              
              <div className="contact-item">
                <h3 style={{ fontFamily }}>Support</h3>
                <p style={{ fontFamily }}>Email: support@varosync.com</p>
                <p style={{ fontFamily }}>Phone: +1 (555) 123-4569</p>
              </div>
              
              <div className="contact-item">
                <h3 style={{ fontFamily }}>Office Address</h3>
                <p style={{ fontFamily }}>123 Innovation Drive<br />
                Tech Valley, CA 94025<br />
                United States</p>
              </div>
              
              <div className="social-links">
                <h3 style={{ fontFamily }}>Follow Us</h3>
                <div className="social-icons">
                  <a href="#linkedin" style={{ fontFamily }}>LinkedIn</a>
                  <a href="#twitter" style={{ fontFamily }}>Twitter</a>
                  <a href="#github" style={{ fontFamily }}>GitHub</a>
                  <a href="#youtube" style={{ fontFamily }}>YouTube</a>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <h2 style={{ fontFamily }}>Send us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact 