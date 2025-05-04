import React from 'react';
// import { ArrowRight, LogIn } from 'lucide-react'; // Remove unused imports
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="py-4 px-4 border-b">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo - Make it a link to home */}
        <Link to="/" className="flex items-center gap-2">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Varosync Logo" className="h-8" />
          <span className="text-xl font-bold text-navy-900">VaroSync</span>
          {/* Optional: Keep subtitle if desired, but requirements don't specify it here */}
          {/* <span className="text-xs text-gray-500 hidden sm:inline">a biotech company</span> */}
        </Link>

        {/* Navigation - Update links */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Remove Home link (Logo handles this) */}
          {/* <Link to="/" className="text-gray-600 hover:text-navy-900 transition-colors">Home</Link> */}
          {/* Remove Platform link */}
          {/* <Link to="/platform" className="text-gray-600 hover:text-navy-900 transition-colors">Platform</Link> */}
          <Link to="/solutions" className="text-gray-600 hover:text-navy-900 transition-colors">Solutions</Link>
          <Link to="/company" className="text-gray-600 hover:text-navy-900 transition-colors">Company</Link>
          {/* Add News link */}
          <Link to="/news" className="text-gray-600 hover:text-navy-900 transition-colors">News</Link>
          {/* Add Careers link */}
          <Link to="/careers" className="text-gray-600 hover:text-navy-900 transition-colors">Careers</Link>
          {/* Remove Contact Us link (moved to footer) */}
          {/* <Link to="/contact" className="text-gray-600 hover:text-navy-900 transition-colors">Contact Us</Link> */}
        </nav>

        {/* Action Buttons - Remove these as per requirements */}
        {/* <div className="flex items-center gap-4">
          <button className="hidden sm:flex items-center gap-2 text-navy-900 font-medium">
            Log In
            <LogIn className="w-4 h-4" />
          </button>
          <button className="bg-navy-900 text-white px-4 py-2 rounded-full font-medium flex items-center gap-2 hover:bg-navy-800 transition-colors">
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </button>
        </div> */}
      </div>
    </header>
  );
}

export default Header; 