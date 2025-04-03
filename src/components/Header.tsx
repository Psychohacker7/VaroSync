import React from 'react';
import { ArrowRight, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="py-4 px-4 border-b">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={`${import.meta.env.BASE_URL}public/logo.png`} alt="Varosync Logo" className="h-8" />
          <span className="text-xl font-bold text-navy-900">varosync</span>
          <span className="text-xs text-gray-500 hidden sm:inline">a biotech company</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-gray-600 hover:text-navy-900 transition-colors">Home</Link>
          <Link to="/solutions" className="text-gray-600 hover:text-navy-900 transition-colors">Solutions</Link>
          <Link to="/company" className="text-gray-600 hover:text-navy-900 transition-colors">Company</Link>
          <Link to="/contact" className="text-gray-600 hover:text-navy-900 transition-colors">Contact Us</Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:flex items-center gap-2 text-navy-900 font-medium">
            Log In
            <LogIn className="w-4 h-4" />
          </button>
          <button className="bg-navy-900 text-white px-4 py-2 rounded-full font-medium flex items-center gap-2 hover:bg-navy-800 transition-colors">
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header; 