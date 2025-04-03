import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Logo and Mission */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-6">
              <img src="/logo.png" alt="Varosync Logo" className="h-8" />
              <span className="text-xl font-bold text-white">varosync</span>
            </div>
            
            {/* Mission Statement */}
            <p className="text-white/80 mb-8">
              Our mission is to democratize computational health tools and empower
              researchers and organizations worldwide.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">
                <Link to="/" className="hover:text-violet-300 transition-colors">Home</Link>
              </h4>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">
                <Link to="/solutions" className="hover:text-violet-300 transition-colors">Solutions</Link>
              </h4>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">
                <Link to="/company" className="hover:text-violet-300 transition-colors">Company</Link>
              </h4>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">
                <Link to="/contact" className="hover:text-violet-300 transition-colors">Contact Us</Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 mb-4 md:mb-0">
            Copyright 2023© varosync, All Rights Reserved.
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-white/60 hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 