"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  FaMapMarkerAlt, 
  FaSearch, 
  FaFilter,
  FaPhone,
  FaClock,
  FaCar,
  FaWalking,
  FaStar,
  FaRecycle,
  FaMobileAlt,
  FaLaptop,
  FaTv,
  FaTabletAlt,
  FaArrowRight
} from 'react-icons/fa';

const nairobiCenters = [
  {
    id: 1,
    name: "Nairobi Central E-Waste Facility",
    address: "Moi Avenue, Central Business District, Nairobi",
    phone: "+254 700 123 456",
    hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM",
    types: ["Smartphones", "Laptops", "Tablets", "TVs"],
    rating: 4.8,
    reviews: 124,
    distance: "0.8 km",
    coordinates: { lat: -1.2921, lng: 36.8219 }
  },
  {
    id: 2,
    name: "Westlands Green Tech Hub",
    address: "Westlands, Parklands Road, Nairobi",
    phone: "+254 711 234 567",
    hours: "Mon-Sat: 8AM-7PM, Sun: 10AM-3PM",
    types: ["All Electronics", "Large Appliances"],
    rating: 4.6,
    reviews: 89,
    distance: "3.2 km",
    coordinates: { lat: -1.2659, lng: 36.8065 }
  },
  {
    id: 3,
    name: "Karen Eco Recycling Center",
    address: "Karen Shopping Centre, Karen, Nairobi",
    phone: "+254 722 345 678",
    hours: "Mon-Fri: 9AM-5PM, Sat: 9AM-2PM",
    types: ["Smartphones", "Laptops", "Tablets"],
    rating: 4.9,
    reviews: 67,
    distance: "12.5 km",
    coordinates: { lat: -1.3192, lng: 36.7082 }
  },
  {
    id: 4,
    name: "Eastleigh Community E-Waste Point",
    address: "Eastleigh, 6th Street, Nairobi",
    phone: "+254 733 456 789",
    hours: "Mon-Sun: 7AM-8PM",
    types: ["All Electronics", "Batteries"],
    rating: 4.4,
    reviews: 156,
    distance: "4.1 km",
    coordinates: { lat: -1.2774, lng: 36.8540 }
  },
  {
    id: 5,
    name: "Thika Road Digital Waste Solutions",
    address: "Thika Road Mall, Nairobi",
    phone: "+254 744 567 890",
    hours: "Mon-Sat: 8AM-9PM",
    types: ["Smartphones", "Laptops", "TVs", "Monitors"],
    rating: 4.7,
    reviews: 203,
    distance: "8.7 km",
    coordinates: { lat: -1.2276, lng: 36.8924 }
  }
];

const deviceTypes = [
  { id: 'smartphones', name: 'Smartphones', icon: <FaMobileAlt /> },
  { id: 'laptops', name: 'Laptops', icon: <FaLaptop /> },
  { id: 'tablets', name: 'Tablets', icon: <FaTabletAlt /> },
  { id: 'tvs', name: 'TVs & Monitors', icon: <FaTv /> },
  { id: 'all', name: 'All Electronics', icon: <FaRecycle /> }
];

const FindCenters = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedCenter, setSelectedCenter] = useState<any>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [userLocation, setUserLocation] = useState('Nairobi, Kenya');

  const filteredCenters = nairobiCenters.filter(center => {
    const matchesSearch = center.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         center.address.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = selectedTypes.length === 0 || 
                       selectedTypes.some(type => center.types.some((centerType: string) => 
                         centerType.toLowerCase().includes(type.toLowerCase())
                       ));
    
    return matchesSearch && matchesType;
  });

  const toggleDeviceType = (typeId: string) => {
    setSelectedTypes(prev => 
      prev.includes(typeId) 
        ? prev.filter(t => t !== typeId)
        : [...prev, typeId]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Component Here */}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-emerald-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find E-Waste Recycling Centers in <span className="text-yellow-300">Nairobi</span>
            </h1>
            <p className="text-xl text-green-100 mb-8">
              Locate certified recycling facilities near you. Drop off your electronics safely and earn rewards.
            </p>
            
            {/* Search Bar */}
            <div className="bg-white rounded-xl p-2 shadow-2xl max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1 relative">
                  <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search recycling centers in Nairobi..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 text-gray-800 rounded-lg border-0 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />
                </div>
                <button 
                  onClick={() => setShowFilters(!showFilters)}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center gap-2"
                >
                  <FaFilter />
                  Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      {showFilters && (
        <section className="bg-white border-b border-gray-200 py-6">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Filter by Device Type</h3>
              <div className="flex flex-wrap gap-3">
                {deviceTypes.map(device => (
                  <button
                    key={device.id}
                    onClick={() => toggleDeviceType(device.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
                      selectedTypes.includes(device.id)
                        ? 'bg-green-500 text-white border-green-500'
                        : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                    }`}
                  >
                    {device.icon}
                    {device.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Location Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 text-green-600">
                <FaMapMarkerAlt />
                <span className="font-semibold">Showing centers in: {userLocation}</span>
              </div>
              <div className="text-gray-600">
                {filteredCenters.length} center{filteredCenters.length !== 1 ? 's' : ''} found
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Centers List */}
              <div className="space-y-4">
                {filteredCenters.length > 0 ? (
                  filteredCenters.map(center => (
                    <div 
                      key={center.id}
                      className={`bg-white rounded-xl shadow-md border-2 hover:shadow-lg transition-all cursor-pointer ${
                        selectedCenter?.id === center.id ? 'border-green-500' : 'border-transparent'
                      }`}
                      onClick={() => setSelectedCenter(center)}
                    >
                      <div className="p-6">
                        {/* Header */}
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-bold text-gray-800">{center.name}</h3>
                          <div className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded">
                            <FaStar className="text-yellow-500" />
                            <span className="font-semibold">{center.rating}</span>
                            <span className="text-sm">({center.reviews})</span>
                          </div>
                        </div>

                        {/* Address & Distance */}
                        <div className="flex items-center gap-2 text-gray-600 mb-3">
                          <FaMapMarkerAlt className="text-green-500" />
                          <span className="flex-1">{center.address}</span>
                          <div className="flex items-center gap-1 text-sm bg-gray-100 px-2 py-1 rounded">
                            <FaWalking />
                            <span>{center.distance}</span>
                          </div>
                        </div>

                        {/* Device Types */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {center.types.map((type: string, index: number) => (
                            <span 
                              key={index}
                              className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded"
                            >
                              {type}
                            </span>
                          ))}
                        </div>

                        {/* Contact & Hours */}
                        <div className="flex justify-between items-center text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <FaPhone className="text-green-500" />
                            <span>{center.phone}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FaClock className="text-green-500" />
                            <span>{center.hours.split(',')[0]}</span>
                          </div>
                        </div>

                        {/* Action Button */}
                        <button className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                          <FaCar className="text-sm" />
                          Get Directions
                          <FaArrowRight className="text-sm" />
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="bg-white rounded-xl shadow-md p-8 text-center">
                    <FaMapMarkerAlt className="text-4xl text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-800 mb-2">No centers found</h3>
                    <p className="text-gray-600 mb-4">Try adjusting your search filters</p>
                    <button 
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedTypes([]);
                      }}
                      className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    >
                      Clear Filters
                    </button>
                  </div>
                )}
              </div>

              {/* Map/Details Sidebar */}
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-4">
                {selectedCenter ? (
                  <>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{selectedCenter.name}</h3>
                    
                    {/* Map Placeholder */}
                    <div className="bg-gray-200 rounded-lg h-64 mb-4 flex items-center justify-center">
                      <div className="text-center text-gray-600">
                        <FaMapMarkerAlt className="text-3xl text-green-500 mx-auto mb-2" />
                        <p>Interactive Map</p>
                        <p className="text-sm">Showing location in Nairobi</p>
                      </div>
                    </div>

                    {/* Center Details */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Address</h4>
                        <p className="text-gray-600 flex items-center gap-2">
                          <FaMapMarkerAlt className="text-green-500" />
                          {selectedCenter.address}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Contact</h4>
                        <p className="text-gray-600 flex items-center gap-2">
                          <FaPhone className="text-green-500" />
                          {selectedCenter.phone}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Operating Hours</h4>
                        <p className="text-gray-600 flex items-center gap-2">
                          <FaClock className="text-green-500" />
                          {selectedCenter.hours}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Accepts</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedCenter.types.map((type: string, index: number) => (
                            <span 
                              key={index}
                              className="bg-green-50 text-green-700 text-sm px-3 py-1 rounded-full"
                            >
                              {type}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="grid grid-cols-2 gap-3 pt-4">
                        <button className="bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                          Call Now
                        </button>
                        <button className="border-2 border-green-600 text-green-600 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors">
                          Get Directions
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center text-gray-600 h-64 flex items-center justify-center">
                    <div>
                      <FaMapMarkerAlt className="text-4xl text-gray-400 mx-auto mb-4" />
                      <h3 className="text-xl font-bold mb-2">Select a Center</h3>
                      <p>Click on a recycling center to view details and location</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Can&apos;t Find a Center Near You?
            </h2>
            <p className="text-gray-600 mb-6">
              We&apos;re constantly expanding our network of certified recycling partners across Nairobi.
              Request a new location or learn about our pickup services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Request New Location
              </Link>
              <Link 
                href="/support" 
                className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Component Here */}
    </div>
  );
};

export default FindCenters;