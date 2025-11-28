"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  FaRecycle, 
  FaMapMarkerAlt, 
  FaUser, 
  FaBars, 
  FaTimes,
  FaSearch,
  FaChevronDown
} from 'react-icons/fa';

const Header = () => {
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [locations, setLocation] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleResourcesToggle = () => {
    setIsResourcesOpen(!isResourcesOpen);
  };

  const [user, setUser] = useState<any>(null);
  
  useEffect(() => {
    const mockUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null;
    setUser(mockUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setIsDropdownOpen(false);
  };

  const getUserDisplayName = () => {
    if (!user) return 'User';
    
    const userName = user.username || user.name || user.email?.split('@')[0] || 'User';
    
    return userName.charAt(0).toUpperCase() + userName.slice(1);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lon},${lat}.json?access_token=pk.eyJ1Ijoic2h1ZW5jZSIsImEiOiJjbG9wcmt3czMwYnZsMmtvNnpmNTRqdnl6In0.vLBhYMBZBl2kaOh1Fh44Bw`)
            .then(response => response.json())
            .then(data => {
              const city = data.features[0].context.find((context: { id: string | string[]; }) => context.id.includes('place'))?.text || 'Unknown';
              const state = data.features[0].context.find((context: { id: string | string[]; }) => context.id.includes('region'))?.text || 'Unknown';
              setLocation(`${city}, ${state}`);
            })
            .catch(error => {
              console.error('Error:', error);
              setLocation('Location unavailable');
            });
        },
        (error) => {
          console.error(error);
          setLocation('Enable location access');
        },
        options
      );
    } else {
      setLocation('Geolocation not supported');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsHeaderActive(true);
      } else {
        setIsHeaderActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setIsNavbarActive(!isNavbarActive);
  };

  const closeNavbar = () => {
    setIsNavbarActive(false);
  };

  return (
    <header className={`bg-white shadow-md sticky top-0 z-50 transition-all duration-300 ${
      isHeaderActive ? "shadow-lg bg-white/95 backdrop-blur-sm" : "shadow-md"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <FaRecycle className="text-white text-lg" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-800 leading-none">DropMyElectronic</span>
              <span className="text-xs text-green-600 font-medium">Sustainable Tech Recycling</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavItem label="Home" href="/" />
            <NavItem label="About" href="/about" />
            
            {/* Resources Dropdown */}
            <div className="relative">
              <button 
                onClick={handleResourcesToggle}
                className="flex items-center gap-1 text-gray-700 hover:text-green-600 font-medium transition-colors group"
              >
                Resources
                <FaChevronDown className={`text-xs transition-transform duration-300 ${isResourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isResourcesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                  <Link 
                    href="/education" 
                    className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                    onClick={() => setIsResourcesOpen(false)}
                  >
                    Education
                  </Link>
                  <Link 
                    href="/recyclingguide" 
                    className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                    onClick={() => setIsResourcesOpen(false)}
                  >
                    Recycling Guides
                  </Link>
                  <Link 
                    href="/impact" 
                    className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                    onClick={() => setIsResourcesOpen(false)}
                  >
                    Environmental Impact
                  </Link>
                  <Link 
                    href="/regulations" 
                    className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                    onClick={() => setIsResourcesOpen(false)}
                  >
                    Regulations
                  </Link>
                </div>
              )}
            </div>

            <NavItem label="Rewards" href="/rewards" />
            <NavItem label="Contact Us" href="/contactus" />
            <NavItem label="Find Centers" href="/findcenters" />
          </nav>

          {/* Right Section - Location, Search, Auth */}
          <div className="flex items-center space-x-4">
            {/* Location - Desktop */}
            <div className="hidden md:flex items-center gap-2 text-green-600 font-medium">
              <FaMapMarkerAlt className="text-sm" />
              <span className="text-sm">{locations || 'Detecting location...'}</span>
            </div>

            {/* Search Icon - Desktop */}
            <button className="hidden md:flex items-center justify-center w-10 h-10 text-gray-600 hover:text-green-600 transition-colors">
              <FaSearch className="text-lg" />
            </button>

            {/* User Auth Section */}
            <div className="flex items-center space-x-3">
              {user ? (
                <div className="relative">
                  <button
                    onClick={handleToggleDropdown}
                    className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-lg hover:bg-green-100 transition-colors group"
                  >
                    <FaUser className="text-green-600 text-sm" />
                    <span className="text-green-700 font-medium text-sm">
                      {getUserDisplayName()}
                    </span>
                    <FaChevronDown className={`text-green-600 text-xs transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isDropdownOpen && (
                    <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 py-2 w-48 z-50">
                      <Link 
                        href="/profile" 
                        className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        My Profile
                      </Link>
                      <Link 
                        href="/my-rewards" 
                        className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        My Rewards
                      </Link>
                      <Link 
                        href="/recycling-history" 
                        className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Recycling History
                      </Link>
                      <div className="border-t border-gray-200 my-1"></div>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                      >
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="hidden md:flex items-center space-x-3">
                  <Link 
                    href="/sign-in" 
                    className="text-green-600 font-medium hover:text-green-700 transition-colors"
                  >
                    Sign In
                  </Link>
                  <Link 
                    href="/sign-up" 
                    className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
                  >
                    Get Started
                  </Link>
                </div>
              )}

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden text-gray-600 hover:text-green-600 transition-colors p-2"
                onClick={toggleNavbar}
                aria-label="toggle menu"
              >
                {isNavbarActive ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden fixed top-0 left-0 w-full h-full bg-white transform transition-transform duration-300 z-40 ${
          isNavbarActive ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="p-6 h-full flex flex-col">
            {/* Mobile Header */}
            <div className="flex justify-between items-center mb-8">
              <Link href="/" className="flex items-center gap-3" onClick={closeNavbar}>
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <FaRecycle className="text-white text-lg" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-gray-800">DropMyElectronic</span>
                  <span className="text-xs text-green-600 font-medium">Sustainable Tech Recycling</span>
                </div>
              </Link>
              <button onClick={toggleNavbar} className="text-gray-600 p-2">
                <FaTimes className="text-xl" />
              </button>
            </div>

            {/* Mobile Location */}
            <div className="flex items-center gap-3 text-green-600 font-medium mb-6 p-4 bg-green-50 rounded-lg">
              <FaMapMarkerAlt />
              <span className="text-sm">{locations || 'Detecting location...'}</span>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="flex-1 space-y-2">
              <MobileNavItem label="Home" href="/" onClick={closeNavbar} />
              <MobileNavItem label="About" href="/about" onClick={closeNavbar} />
              <MobileNavItem label="Education" href="/education" onClick={closeNavbar} />
              <MobileNavItem label="Recycling Guides" href="/guides" onClick={closeNavbar} />
              <MobileNavItem label="Rewards" href="/rewards" onClick={closeNavbar} />
              <MobileNavItem label="Find Centers" href="/map" onClick={closeNavbar} />
              <MobileNavItem label="Environmental Impact" href="/impact" onClick={closeNavbar} />
            </nav>

            {/* Mobile Auth Section */}
            <div className="pt-6 border-t border-gray-200">
              {user ? (
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <FaUser className="text-green-600" />
                    <span className="text-green-700 font-medium">
                      {getUserDisplayName()}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Link 
                      href="/profile" 
                      className="text-center bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                      onClick={closeNavbar}
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="bg-gray-200 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  <Link 
                    href="/sign-in" 
                    className="text-center border-2 border-green-600 text-green-600 py-3 rounded-lg font-medium hover:bg-green-600 hover:text-white transition-colors"
                    onClick={closeNavbar}
                  >
                    Sign In
                  </Link>
                  <Link 
                    href="/sign-up" 
                    className="text-center bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                    onClick={closeNavbar}
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Overlay */}
        {isNavbarActive && (
          <div 
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={toggleNavbar}
          ></div>
        )}
      </div>
    </header>
  );
};

// Desktop Navigation Item Component
const NavItem = ({ label, href }: { label: string; href: string }) => {
  return (
    <Link 
      href={href}
      className="text-gray-700 hover:text-green-600 font-medium transition-colors relative group"
    >
      {label}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
};

// Mobile Navigation Item Component
const MobileNavItem = ({ label, href, onClick }: { label: string; href: string; onClick?: () => void }) => {
  return (
    <Link 
      href={href}
      className="block py-3 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg font-medium transition-colors border-b border-gray-100"
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default Header;