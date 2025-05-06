import React, { useState, useEffect } from 'react';
// import { ArrowRight, LogIn } from 'lucide-react'; // Remove unused imports
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/solutions', label: 'Solutions' },
  { to: '/company', label: 'Company' },
  { to: '/news', label: 'News' },
  { to: '/careers', label: 'Careers' },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      // Progress bar for hero section (assume hero is 100vh)
      const heroHeight = window.innerHeight;
      const scroll = Math.min(window.scrollY, heroHeight);
      setProgress((scroll / heroHeight) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Progress Bar */}
      <div className="header-progress-bar" style={{ width: `${progress}%` }} />
      <header className={`header-main${scrolled ? ' header-scrolled' : ''}` + (menuOpen ? ' header-menu-open' : '')}>
        <div className="container mx-auto flex items-center justify-between gap-8 transition-all duration-300">
          {/* Logo - logotype only, larger, add img class */}
          <Link to="/" className={`header-logo${scrolled ? ' logo-scrolled' : ''}` + (menuOpen ? ' logo-menu-open' : '')}>
            <img 
              src={`${import.meta.env.BASE_URL}logo.png`} 
              alt="Varosync Logo" 
              className="h-12 md:h-16 transition-all duration-300 header-logo-img"
            />
          </Link>

          {/* Desktop Nav - horizontal row, centered */}
          <nav className="header-nav mobile-hidden flex flex-row items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`header-link ${location.pathname.startsWith(link.to) ? 'active' : ''}`}
              >
                {link.label}
                <span className="header-link-dot" />
              </Link>
            ))}
            <Link to="/contact" className="header-cta">Request Demo</Link>
          </nav>

          {/* Hamburger for mobile only */}
          {!menuOpen && (
            <button
              className="header-hamburger desktop-hidden"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen(m => !m)}
            >
              <Menu size={32} />
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        <div className={`header-mobile-menu desktop-hidden${menuOpen ? ' open' : ''}`}> 
          <div className="header-mobile-menu-bg" />
          <nav className="header-mobile-nav flex flex-col gap-6 pt-0 relative">
            {/* Close button, flex aligned top right inside menu */}
            <div className="flex justify-end w-full mt-1">
              <button
                className="p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                <X size={32} className="text-green-400" />
              </button>
            </div>
            {navLinks.map((link, i) => (
              <Link
                key={link.to}
                to={link.to}
                className={`header-link${location.pathname.startsWith(link.to) ? ' active' : ''}`}
                style={{ transitionDelay: menuOpen ? `${i * 80 + 200}ms` : '0ms', paddingLeft: '0.25rem' }}
              >
                {link.label}
                <span className="header-link-dot" />
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="header-cta w-full text-center flex justify-center items-center mt-2" 
              style={{ transitionDelay: menuOpen ? `${navLinks.length * 80 + 200}ms` : '0ms', paddingLeft: '0.25rem', marginLeft: 0 }}
            >
              Request Demo
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header; 