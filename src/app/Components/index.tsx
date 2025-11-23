"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  FaRecycle, 
  FaMobileAlt, 
  FaSearch,
  FaAward,
  FaArrowRight,
  FaShieldAlt,
  FaGlobe,
  FaHeart,
  FaRocket,
  FaPlay,
  FaUsers,
  FaTree,
  FaCoins,
  FaCheckCircle
} from 'react-icons/fa';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('problem');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="container mx-auto px-4 text-center">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6">
              Give Your Tech
              <br />
              <span className="text-green-600">A Second Life</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Recycle electronics easily, earn rewards, and make a real environmental impact. 
              Simple, secure, and rewarding.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/findcenters" 
                className="group bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-3"
              >
                <FaSearch className="text-xl" />
                Find Recycling Centers
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="/about" 
                className="group border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
              >
                <FaPlay className="text-xl" />
                How It Works
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-500">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                <span>Certified Recycling</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCoins className="text-green-500" />
                <span>Instant Rewards</span>
              </div>
              <div className="flex items-center gap-2">
                <FaShieldAlt className="text-green-500" />
                <span>Secure & Safe</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            <div className="flex justify-center mb-12">
              <div className="bg-white rounded-2xl p-2 shadow-xl border border-gray-200">
                <button
                  onClick={() => setActiveTab('problem')}
                  className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                    activeTab === 'problem' 
                      ? 'bg-red-500 text-white shadow-lg' 
                      : 'text-gray-600 hover:text-red-500'
                  }`}
                >
                  <FaShieldAlt className="inline mr-2" />
                  The Problem
                </button>
                <button
                  onClick={() => setActiveTab('solution')}
                  className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                    activeTab === 'solution' 
                      ? 'bg-green-500 text-white shadow-lg' 
                      : 'text-gray-600 hover:text-green-500'
                  }`}
                >
                  <FaRocket className="inline mr-2" />
                  Our Solution
                </button>
              </div>
            </div>

            <div className="transition-all duration-500">
              {activeTab === 'problem' && (
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 md:p-12">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
                    The <span className="text-red-500">Silent Crisis</span> in Your Drawer
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                      <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500 transition-colors">
                        <FaMobileAlt className="text-3xl text-red-500 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">Buried Treasure</h3>
                      <p className="text-gray-600">
                        Your old phone contains gold, silver, and rare earth metals worth real money.
                      </p>
                    </div>

                    <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                      <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500 transition-colors">
                        <FaGlobe className="text-3xl text-red-500 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">Environmental Time Bomb</h3>
                      <p className="text-gray-600">
                        Toxic materials leaching into soil and water, harming ecosystems and communities.
                      </p>
                    </div>

                    <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                      <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500 transition-colors">
                        <FaHeart className="text-3xl text-red-500 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">Human Cost</h3>
                      <p className="text-gray-600">
                        Informal recycling exposes workers to dangerous conditions and health risks.
                      </p>
                    </div>
                  </div>

                  <div className="mt-12 bg-red-50 rounded-2xl p-6 border border-red-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-xl font-bold text-red-800">The Opportunity Cost</h4>
                        <p className="text-red-600">Every device not recycled is value lost forever</p>
                      </div>
                      <Link 
                        href="/education" 
                        className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'solution' && (
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 md:p-12">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
                    Simple <span className="text-green-500">Solution</span>, Big <span className="text-green-600">Impact</span>
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center p-6 bg-green-50 rounded-2xl border border-green-200">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FaSearch className="text-2xl text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">Find Centers</h3>
                      <p className="text-gray-600">
                        Locate certified recycling locations near you in seconds.
                      </p>
                    </div>

                    <div className="text-center p-6 bg-green-50 rounded-2xl border border-green-200">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FaRecycle className="text-2xl text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">Recycle</h3>
                      <p className="text-gray-600">
                        Drop off your devices safely and securely.
                      </p>
                    </div>

                    <div className="text-center p-6 bg-green-50 rounded-2xl border border-green-200">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FaAward className="text-2xl text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">Earn Rewards</h3>
                      <p className="text-gray-600">
                        Get points and benefits for your environmental contribution.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <Link 
                      href="/map" 
                      className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
                    >
                      <FaPlay className="text-xl" />
                      Start Recycling Today
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Why Choose <span className="text-green-600">DropMyElectronic</span>?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaTree className="text-2xl text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Environmental Impact</h3>
                <p className="text-gray-600">
                  Reduce e-waste and prevent toxic materials from harming our planet.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCoins className="text-2xl text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Earn Rewards</h3>
                <p className="text-gray-600">
                  Get points for every device recycled and redeem for exclusive benefits.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaShieldAlt className="text-2xl text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Secure & Certified</h3>
                <p className="text-gray-600">
                  All recycling partners are certified and follow strict safety standards.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUsers className="text-2xl text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Community Driven</h3>
                <p className="text-gray-600">
                  Join thousands making a difference in their local communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-12">Making a Real Difference</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">100+</div>
                <div className="text-gray-600">Happy Users</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-gray-600">Devices Recycled</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">0+</div>
                <div className="text-gray-600">Partner Locations</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">200+</div>
                <div className="text-gray-600">Tons CO₂ Reduced</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of eco-conscious individuals and start turning your e-waste into environmental impact today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/findcenters" 
              className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:scale-105"
            >
              Find Recycling Centers
            </Link>
            <Link 
              href="/rewards" 
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105"
            >
              Explore Rewards
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;