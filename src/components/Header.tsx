import React, { useState, useEffect, useRef } from 'react';
// import { ArrowRight, LogIn } from 'lucide-react'; // Remove unused imports
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Image } from './Image';

interface HeaderProps {
  currentRouteBgColor: string;
}

const navLinks = [
  { to: '/solutions', label: 'Technology' },
  { to: '/company', label: 'Company' },
  { to: '/news', label: 'News' },
];

function Header({ currentRouteBgColor }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hideHeader, setHideHeader] = useState(false);
  const [hideMobileHeader, setHideMobileHeader] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const prevScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setAtTop(currentScrollY === 0);
      if (window.innerWidth >= 768) {
        // Desktop
        if (currentScrollY > prevScrollY.current) {
          setHideHeader(true);
        } else {
          setHideHeader(false);
        }
      } else {
        // Mobile
        if (currentScrollY > prevScrollY.current) {
          setHideMobileHeader(true);
        } else {
          setHideMobileHeader(false);
        }
      }
      prevScrollY.current = currentScrollY;
      setScrolled(currentScrollY > 50);
      const heroHeight = window.innerHeight;
      const scroll = Math.min(currentScrollY, heroHeight);
      setProgress((scroll / heroHeight) * 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const handleMenuClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setIsClosing(false);
    }, 300); // Match this with the animation duration
  };

  return (
    <>
      {/* Progress Bar */}
      <div className="header-progress-bar" style={{ width: `${progress}%` }} />
      <header
        className={`header-main${scrolled ? ' header-scrolled' : ''}${menuOpen ? ' header-menu-open' : ''}${atTop ? ' header-at-top' : ''}`}
        style={{
          backgroundColor: atTop ? currentRouteBgColor : '#fff',
        }}
      >
        <div className="w-full flex items-center justify-between gap-8 transition-all duration-300 px-3">
          {/* Logo - logotype only, larger, add img class */}
          <Link to="/" className={`header-logo${scrolled ? ' logo-scrolled' : ''}${menuOpen ? ' logo-menu-open' : ''}`}> 
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
                className={`header-link ${location.pathname === link.to || location.pathname.startsWith(`${link.to}/`) ? 'active' : ''}`}
              >
                {link.label}
                <span className="header-link-dot" />
              </Link>
            ))}
            <Link to="/contact" className="header-cta">Get in touch</Link>
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
      </header>
      {/* Mobile Menu - OUTSIDE header */}
      {(menuOpen || isClosing) && (
        <div 
          className={`fixed inset-0 z-50 flex flex-col transition-transform duration-300 ease-in-out transform ${
            isClosing ? 'translate-x-full' : 'translate-x-0'
          }`} 
          style={{ backgroundColor: currentRouteBgColor, opacity: 1 }}
        >
          {/* Logo and Close Button Row */}
          <div className="flex items-center justify-between px-6 pt-6 pb-2">
            <Link to="/" onClick={handleMenuClose}>
              <img 
                src={`${import.meta.env.BASE_URL}logo.png`} 
                alt="Varosync Logo" 
                className="h-12" 
              />
            </Link>
            <button
              className="p-2 rounded-full bg-transparent hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
              onClick={handleMenuClose}
            >
              <X size={32} className="text-gray-900" />
            </button>
          </div>
          <hr className="border-t border-gray-300 mb-2" />
          {/* Nav Links */}
          <nav className="flex flex-col gap-0 w-full px-0">
            {navLinks.map((link, i) => (
              <React.Fragment key={link.to}>
                <Link
                  to={link.to}
                  onClick={handleMenuClose}
                  className="text-2xl font-medium px-6 py-5 w-full text-gray-900 hover:bg-gray-100 transition-colors"
                  style={{ borderBottom: '1px solid #e5e5e5' }}
                >
                  {link.label}
                </Link>
              </React.Fragment>
            ))}
            <Link 
              to="/contact" 
              onClick={handleMenuClose}
              className="text-2xl font-medium px-6 py-5 w-full text-gray-900 hover:bg-gray-100 transition-colors"
              style={{ borderBottom: '1px solid #e5e5e5' }}
            >
              Get in touch
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}

export default Header; 