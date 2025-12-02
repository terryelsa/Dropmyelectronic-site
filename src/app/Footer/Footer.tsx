import React from 'react';
import Link from 'next/link';
import { 
  FaRecycle, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaTwitter, 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin,
  FaArrowRight,
  FaShieldAlt,
  FaCheckCircle,
  FaHeart
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <FaRecycle className="text-white text-lg" />
              </div>
              <span className="text-2xl font-bold text-white">DropMyElectronic</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Making e-waste recycling simple, accessible, and rewarding for everyone. 
              Join us in building a sustainable future through responsible electronics disposal.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-green-400">
                <FaShieldAlt className="text-sm" />
                <span className="text-sm font-medium">Certified recycling partners</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <FaCheckCircle className="text-sm" />
                <span className="text-sm font-medium">Secure data destruction</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center gap-2 group">
                  <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center gap-2 group">
                  <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/rewards" className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center gap-2 group">
                  <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                  Rewards
                </Link>
              </li>
              <li>
                <Link href="/findcenters" className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center gap-2 group">
                  <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                  Find Centers
                </Link>
              </li>
              <li>
                <Link href="/education" className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center gap-2 group">
                  <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                  Education
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contactus" className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center gap-2 group">
                  <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center gap-2 group">
                  <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                  FAQ
                </Link>
              </li>
              
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6">Stay Connected</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 text-gray-400">
                <FaMapMarkerAlt className="text-green-400" />
                <span className="text-sm">123 Green Tech Park, Sustainability District</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <FaPhone className="text-green-400" />
                <span className="text-sm">+254796825624</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <FaEnvelope className="text-green-400" />
                <span className="text-sm">elsaterry4@gmail.com</span>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3">Follow us</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:scale-110">
                  <FaTwitter className="text-sm" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:scale-110">
                  <FaFacebook className="text-sm" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:scale-110">
                  <FaInstagram className="text-sm" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:scale-110">
                  <FaLinkedin className="text-sm" />
                </a>
              </div>
            </div>

            
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>
                &copy; {new Date().getFullYear()} DropMyElectronic. All rights reserved.
              </p>
            </div>

            

            <div className="text-green-400 text-sm text-center md:text-right">
              <div className="flex items-center gap-2">
                <FaRecycle className="text-xs" />
                <span>Proudly preventing e-waste pollution</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;