import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">SafeGuard Insurance Co.</span>
            </div>
            <p className="text-gray-300 text-sm">
              Protecting what matters most to you and your family since 1995. 
              Trusted by over 50,000 customers nationwide.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors">Insurance Products</Link></li>
              <li><Link to="/tools" className="text-gray-300 hover:text-white transition-colors">Tools & Calculators</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Insurance Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Insurance Products</h3>
            <ul className="space-y-2">
              <li><Link to="/products/health" className="text-gray-300 hover:text-white transition-colors">Health Insurance</Link></li>
              <li><Link to="/products/life" className="text-gray-300 hover:text-white transition-colors">Life Insurance</Link></li>
              <li><Link to="/products/auto" className="text-gray-300 hover:text-white transition-colors">Auto Insurance</Link></li>
              <li><Link to="/products/home" className="text-gray-300 hover:text-white transition-colors">Home Insurance</Link></li>
              <li><Link to="/products/business" className="text-gray-300 hover:text-white transition-colors">Business Insurance</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">1-800-SAFEGUARD</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">support@safeguardinsure.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                <span className="text-gray-300 text-sm">
                  123 Insurance Plaza<br />
                  Financial District<br />
                  New York, NY 10004
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 SafeGuard Insurance Co. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;