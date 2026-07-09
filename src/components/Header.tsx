import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CalButton } from './CalButton';

const Header = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();

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

  // Close menu + scroll to top on route change
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Escape closes the menu
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const isActive = (path: string) => location.pathname === path;

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
        .header-center {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .header-link {
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 450;
          letter-spacing: 0.01em;
          color: var(--text-secondary);
          text-decoration: none;
          padding: 8px 16px;
          border-radius: 999px;
          transition: color 0.2s ease, background 0.2s ease;
        }
        .header-link:hover {
          color: var(--text-primary);
          background: rgba(0, 0, 0, 0.04);
        }
        .header-link.active {
          color: var(--text-primary);
          font-weight: 500;
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

        /* ============================================================
           HAMBURGER — mobile only, premium two-line minimal
           ============================================================ */
        .header-hamburger {
          display: none;
          width: 44px;
          height: 44px;
          background: transparent;
          border: none;
          padding: 0;
          cursor: pointer;
          position: relative;
          z-index: 110;
        }
        .header-hamburger span {
          position: absolute;
          left: 50%;
          width: 22px;
          height: 1.5px;
          background: var(--text-primary);
          border-radius: 2px;
          margin-left: -11px;
        }
        .header-hamburger span:nth-child(1) { top: calc(50% - 4px); }
        .header-hamburger span:nth-child(2) { top: calc(50% + 4px); }

        /* ============================================================
           MOBILE MENU — slide-in drawer from the right edge
           ============================================================ */
        .menu-overlay {
          position: fixed;
          inset: 0;
          z-index: 100;
          background: var(--bg-primary, #FAFAF8);
          transform: translateX(100%);
          transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform;
        }
        .menu-overlay.open {
          transform: translateX(0);
        }

        /* subtle paper grain on overlay for warmth */
        .menu-overlay::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' seed='4'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.03 0'/></filter><rect width='240' height='240' filter='url(%23n)'/></svg>");
          pointer-events: none;
        }

        .menu-content {
          position: relative;
          height: 100%;
          /* match the header bar's mobile offset + horizontal padding */
          padding: 8px 18px 40px;
          display: flex;
          flex-direction: column;
        }

        /* Top row: logo + close X — aligned exactly with the header bar */
        .menu-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 56px;
        }
        .menu-top .header-logo a {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .menu-close {
          width: 44px;
          height: 44px;
          background: transparent;
          border: none;
          padding: 0;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-primary);
          transition: opacity 0.2s ease;
        }
        .menu-close:hover {
          opacity: 0.65;
        }

        /* Nav links — large editorial */
        .menu-nav {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 4px;
          padding: 24px 0;
        }
        .menu-nav-link {
          font-family: var(--font-heading);
          font-size: clamp(2.4rem, 11vw, 4rem);
          font-weight: 300;
          line-height: 1.05;
          letter-spacing: -0.025em;
          color: var(--text-primary);
          text-decoration: none;
          padding: 12px 0;
          display: inline-block;
          transition: opacity 0.2s ease;
        }
        .menu-nav-link:hover {
          opacity: 0.6;
        }
        .menu-nav-link.active {
          font-style: italic;
        }

        /* Bottom: CTA + email */
        .menu-foot {
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          padding-top: 28px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .menu-foot-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-body);
          font-size: 15px;
          font-weight: 500;
          color: var(--text-primary);
          text-decoration: none;
          align-self: flex-start;
          padding: 12px 24px;
          background: var(--text-primary);
          color: var(--white);
          border-radius: 999px;
          letter-spacing: 0.01em;
        }
        .menu-foot-meta {
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-family: var(--font-body);
          font-size: 13px;
          color: var(--text-secondary);
        }
        .menu-foot-meta a {
          color: var(--text-secondary);
          text-decoration: none;
        }

        /* ============================================================
           BREAKPOINTS
           ============================================================ */
        @media (max-width: 768px) {
          .header-center {
            display: none;
          }
          .header-cta {
            display: none;
          }
          .header-hamburger {
            display: block;
          }
          .header-nav {
            min-height: 56px;
            padding: 0 18px;
            margin-top: 8px;
          }
        }
      `}</style>

      <header className={`site-header ${isHidden ? 'header-hidden' : ''} ${isScrolled ? 'header-scrolled' : ''}`}>
        <nav className="header-nav">
          <div className="header-logo">
            <Link to="/">
              <img src="/assets/images/Varosync logo.svg" alt="Varosync Logo" />
              <span>Varosync</span>
            </Link>
          </div>
          <div className="header-center">
            <Link to="/biotech" className={`header-link ${isActive('/biotech') ? 'active' : ''}`}>
              Therapeutics
            </Link>
            <Link to="/finance" className={`header-link ${isActive('/finance') ? 'active' : ''}`}>
              Capital Markets
            </Link>
            <Link to="/careers" className={`header-link ${isActive('/careers') ? 'active' : ''}`}>
              Careers
            </Link>
          </div>
          <CalButton className="header-cta">
            Get in touch
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 14L14 6M14 6H7M14 6V13" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </CalButton>

          {/* Mobile hamburger — opens the slide-in menu */}
          <button
            type="button"
            className="header-hamburger"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
          </button>
        </nav>
      </header>

      {/* Mobile menu — slides in from the right */}
      <div className={`menu-overlay ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <div className="menu-content">
          <div className="menu-top">
            <div className="header-logo">
              <Link to="/" onClick={() => setMenuOpen(false)}>
                <img src="/assets/images/Varosync logo.svg" alt="Varosync Logo" />
                <span>Varosync</span>
              </Link>
            </div>
            <button
              type="button"
              className="menu-close"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <path d="M5 5L17 17M17 5L5 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav className="menu-nav">
            <Link
              to="/biotech"
              className={`menu-nav-link ${isActive('/biotech') ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              Therapeutics
            </Link>
            <Link
              to="/finance"
              className={`menu-nav-link ${isActive('/finance') ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              Capital Markets
            </Link>
            <Link
              to="/careers"
              className={`menu-nav-link ${isActive('/careers') ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              Careers
            </Link>
          </nav>

          <div className="menu-foot">
            <CalButton
              className="menu-foot-cta"
              ariaLabel="Get in touch"
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }} onClick={() => setMenuOpen(false)}>
                Get in touch
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                  <path d="M6 14L14 6M14 6H7M14 6V13" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </CalButton>
            <div className="menu-foot-meta">
              <a href="mailto:partnerships@varosync.com">partnerships@varosync.com</a>
              <span>&copy; 2026 Varosync</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
