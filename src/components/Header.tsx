import { useState, useEffect, useRef } from 'react';

const Header = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 10);

      if (currentScrollY > 80) {
        if (currentScrollY > lastScrollY.current + 5) {
          setIsHidden(true);
        } else if (currentScrollY < lastScrollY.current - 5) {
          setIsHidden(false);
        }
      } else {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 50;
          transition: transform 0.35s ease !important;
        }
        .site-header.header-hidden {
          transform: translateY(-100%);
        }
        .header-nav {
          background: transparent;
          border-radius: 20px;
          min-height: 4rem;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 76rem;
          margin: 12px auto 0;
          transition: background 0.35s ease, backdrop-filter 0.35s ease;
        }
        .site-header.header-scrolled .header-nav {
          background: rgba(250, 250, 248, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        .header-logo a {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          color: var(--text-primary);
        }
        .header-logo img {
          height: 28px;
          width: 28px;
          object-fit: contain;
        }
        .header-logo span {
          font-size: 17px;
          font-weight: 500;
          font-family: var(--font-body);
          letter-spacing: 0.01em;
        }
        .header-cta {
          background: var(--text-primary);
          color: var(--white);
          border-radius: 999px;
          padding: 10px 24px;
          font-weight: 500;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          font-family: var(--font-body);
          letter-spacing: 0.01em;
        }
      `}</style>
      <header className={`site-header ${isHidden ? 'header-hidden' : ''} ${isScrolled ? 'header-scrolled' : ''}`}>
        <nav className="header-nav">
          <div className="header-logo">
            <a href="#top">
              <img src="/assets/images/Varosync logo.svg" alt="Varosync Logo" />
              <span>Varosync</span>
            </a>
          </div>
          <a href="mailto:partnerships@varosync.com" className="header-cta">
            Get in touch
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 14L14 6M14 6H7M14 6V13" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </nav>
      </header>
    </>
  );
};

export default Header;
