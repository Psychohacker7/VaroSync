import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter } from 'lucide-react';

interface FooterProps {
  currentRouteBgColor: string;
}

function Footer({ currentRouteBgColor }: FooterProps) {
  return (
    <footer 
      className="py-16 border-t border-white transition-colors duration-300"
      style={{ backgroundColor: currentRouteBgColor }}
    >
      <div className="w-full px-3">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-x-12 gap-y-8 mb-12 items-start">
          {/* Logo and Branding */}
          <div className="mb-6 md:mb-0 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Varosync Logo" className="h-8" />
              <span className="text-xl font-bold text-gray-900">Varosync</span>
            </div>
            <p className="text-gray-900">
              Harnessing the power of timing to change drug delivery.
            </p>
          </div>

          {/* Empty column for spacing */}
          <div className="hidden md:block" />

          {/* Company Links */}
          <div className="md:px-4">
            <h5 className="font-semibold text-gray-900 mb-3">COMPANY</h5>
            <ul className="space-y-2 text-sm text-gray-900">
              <li><Link to="/Company" className="hover:text-gray-900">About Us</Link></li>
              <li><Link to="/Solutions" className="hover:text-gray-900">Technology</Link></li>
              <li><Link to="/News" className="hover:text-gray-900">Blog & Press</Link></li>
              <li><Link to="/Contact" className="hover:text-gray-900">Careers</Link></li>
              <li><Link to="/Contact" className="hover:text-gray-900">Contact Us</Link></li>
            </ul>
          </div>

          {/* Development Links */}
          <div className="md:px-4">
            <h5 className="font-semibold text-gray-900 mb-3">DEVELOPMENT</h5>
            <ul className="space-y-2 text-sm text-gray-900">
              <li><Link to="/Contact" className="hover:text-gray-900">Licensing & Pipeline</Link></li>
              <li><Link to="/Contact" className="hover:text-gray-900">Clinical Trials</Link></li>
            </ul>
          </div>

          {/* Policies & Social Links */}
          <div className="md:px-4 flex flex-col items-start">
            <h5 className="font-semibold text-gray-900 mb-3">POLICIES & SOCIAL</h5>
            <ul className="space-y-2 text-sm text-gray-900">
              <li><a href="https://crimson-lilian-17.tiiny.site" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">Code of Conduct</a></li>
              <li><a href="https://crimson-lilian-17.tiiny.site" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">Privacy Policy</a></li>
              <li className="flex space-x-4 mt-4">
                <a href="https://twitter.com/var0sync" aria-label="Twitter" className="text-gray-900 hover:text-gray-900 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/company/varosync/" aria-label="LinkedIn" className="text-gray-900 hover:text-gray-900 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 text-center text-sm text-gray-900">
          <p>&copy; {new Date().getFullYear()} Varosync. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 