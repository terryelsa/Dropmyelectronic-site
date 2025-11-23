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
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
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
            
            {/* Trust Badges */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-green-400">
                <FaShieldAlt className="text-sm" />
                <span className="text-sm font-medium">Certified Recycling Partners</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <FaCheckCircle className="text-sm" />
                <span className="text-sm font-medium">Secure Data Destruction</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
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
                <Link href="/map" className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center gap-2 group">
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

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center gap-2 group">
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
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center gap-2 group">
                  <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center gap-2 group">
                  <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-gray-400 hover:text-green-400 transition-colors duration-300 flex items-center gap-2 group">
                  <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                  Become a Partner
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Stay Connected</h3>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 text-gray-400">
                <FaMapMarkerAlt className="text-green-400" />
                <span className="text-sm">123 Green Tech Park, Sustainability District</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <FaPhone className="text-green-400" />
                <span className="text-sm">+1 (234) 567-890</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <FaEnvelope className="text-green-400" />
                <span className="text-sm">hello@dropmyelectronic.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3">Follow Us</h4>
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

            {/* Newsletter Signup */}
            <div>
              <h4 className="text-white font-semibold mb-3">Newsletter</h4>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors"
                />
                <button className="px-4 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>
                &copy; {new Date().getFullYear()} DropMyElectronic. All rights reserved.
              </p>
            </div>

            {/* Additional Links */}
            <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
              <Link href="/privacy" className="hover:text-green-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-green-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-green-400 transition-colors">
                Cookie Policy
              </Link>
              <Link href="/sitemap" className="hover:text-green-400 transition-colors">
                Sitemap
              </Link>
            </div>

            {/* Environmental Impact */}
            <div className="text-green-400 text-sm text-center md:text-right">
              <div className="flex items-center gap-2">
                <FaRecycle className="text-xs" />
                <span>Proudly preventing e-waste pollution</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile App CTA (Optional) */}
      <div className="bg-green-00">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white text-center md:text-left">
              <p className="font-semibold">Get the DropMyElectronic app for faster recycling!</p>
              <p className="text-green-100 text-sm">Available on iOS and Android</p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-black text-white rounded-lg font-semibold text-sm hover:bg-gray-900 transition-colors">
                Download for iOS
              </button>
              <button className="px-4 py-2 bg-black text-white rounded-lg font-semibold text-sm hover:bg-gray-900 transition-colors">
                Download for Android
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;