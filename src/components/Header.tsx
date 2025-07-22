import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const navLinks = [
  { to: '/technology', label: 'Technology' },
  { to: '/company', label: 'Company' },
  { to: '/news', label: 'News' },
];

const Header = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setAtTop(currentScrollY <= 10);
      
      if (currentScrollY > 20) {
        const scrollDelta = currentScrollY - lastScrollY.current;
        if (scrollDelta > 10) {
          setIsHidden(true);
        } else if (scrollDelta < -10) {
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const headerStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 50,
    transform: isHidden ? 'translateY(-100%)' : 'translateY(0)',
    transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    willChange: 'transform',
  };

  const navStyle: React.CSSProperties = {
    background: atTop ? 'transparent' : 'rgba(255, 255, 255, 0.25)',
    boxShadow: atTop ? 'none' : '0 8px 32px rgba(0,0,0,0.10)',
    borderRadius: atTop ? '0' : '2rem',
    border: atTop ? 'none' : '1px solid rgba(0,0,0,0.04)',
    backdropFilter: atTop ? 'none' : 'blur(16px)',
    WebkitBackdropFilter: atTop ? 'none' : 'blur(16px)',
    transition: 'all 0.3s ease',
    minHeight: '4rem',
    margin: '12px 20px 0 20px',
    padding: '0 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '76rem',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  return (
    <>
      {/* Header */}
      <div style={headerStyle}>
        <nav style={navStyle}>
          {/* Logo - Left Side */}
          <div style={{ flex: '1', display: 'flex', alignItems: 'center' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: '#111' }}>
              <img 
                src="/assets/images/Varosync logo.svg" 
                alt="Varosync Logo" 
                style={{ height: '32px', width: '32px', objectFit: 'contain' }} 
              />
              <span style={{ fontSize: '18px', fontWeight: 500, fontFamily: 'var(--font-family)' }}>
                Varosync
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <div style={{ display: 'none', flex: '1', justifyContent: 'center' }} className="desktop-nav">
            <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  style={{
                    color: '#111',
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: '16px',
                    transition: 'color 0.2s',
                    fontFamily: 'var(--font-family)',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button - Right Side */}
          <div style={{ flex: '1', display: 'none', justifyContent: 'flex-end', alignItems: 'center' }} className="desktop-nav">
            <a 
              href="mailto:partnerships@varosync.com"
              style={{
                background: '#111',
                color: '#fff',
                borderRadius: '999px',
                padding: '10px 24px',
                fontWeight: 600,
                fontSize: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                transition: 'background 0.2s',
                fontFamily: 'var(--font-family)',
              }}
            >
              Get in touch
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 14L14 6M14 6H7M14 6V13" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              padding: '8px',
              cursor: 'pointer',
              color: '#111',
            }}
            className="mobile-menu-btn"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          background: 'rgba(255, 255, 255, 0.98)',
          zIndex: 100,
          transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease-in-out',
          display: 'flex',
          flexDirection: 'column',
        }}
        className="mobile-menu-overlay"
      >
        {/* Mobile Menu Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '24px',
          borderBottom: '1px solid #e5e5e5',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img 
              src="/assets/images/Varosync logo.svg" 
              alt="Varosync Logo" 
              style={{ height: '32px', width: '32px', objectFit: 'contain' }} 
            />
            <span style={{ fontSize: '18px', fontWeight: 500, color: '#111', fontFamily: 'var(--font-family)' }}>
              Varosync
            </span>
          </div>
          <button 
            onClick={closeMobileMenu}
            style={{
              background: 'transparent',
              border: 'none',
              padding: '8px',
              cursor: 'pointer',
              color: '#666',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div style={{ flex: 1, padding: '40px 24px' }}>
          <nav style={{ marginBottom: '48px' }}>
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                onClick={closeMobileMenu}
                                 style={{
                   display: 'block',
                   color: '#111',
                   textDecoration: 'none',
                   fontSize: '24px',
                   fontWeight: 500,
                   marginBottom: '24px',
                   transition: 'color 0.2s',
                   fontFamily: 'var(--font-family)',
                 }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div style={{ paddingTop: '32px', borderTop: '1px solid #e5e5e5' }}>
            <a 
              href="mailto:partnerships@varosync.com"
              onClick={closeMobileMenu}
              style={{
                background: '#111',
                color: '#fff',
                borderRadius: '999px',
                padding: '16px 32px',
                fontWeight: 600,
                fontSize: '18px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                textDecoration: 'none',
                transition: 'background 0.2s',
                fontFamily: 'var(--font-family)',
              }}
            >
              Get in touch
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 14L14 6M14 6H7M14 6V13" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>


    </>
  );
};

export default Header; 