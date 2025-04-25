import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Varosync Logo" className="h-8" />
              <span className="text-xl font-bold">VaroSync</span>
            </div>
            <p className="text-gray-400">
              Revolutionizing drug discovery through AI and quantum computing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/platform" className="text-gray-400 hover:text-white transition-colors">Platform</Link></li>
              <li><Link to="/solutions" className="text-gray-400 hover:text-white transition-colors">Solutions</Link></li>
              <li><Link to="/company" className="text-gray-400 hover:text-white transition-colors">Company</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Innovation Drive</li>
              <li>New York, NY 10025</li>
              <li>partnerships@varosync.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} VaroSync. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 