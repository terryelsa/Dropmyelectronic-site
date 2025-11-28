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
              Give your tech
              <br />
              <span className="text-green-600">a second life</span>
            </h1>

            <p className="text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Recycle electronics easily, earn rewards, and make a real environmental impact. 
              Simple, secure, and rewarding.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/findcenters" 
                className="group bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-3"
              >
                <FaSearch className="text-2xl" />
                Find recycling centers
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="/about" 
                className="group border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
              >
                <FaPlay className="text-2xl" />
                How it works
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-500">
              <div className="flex items-center gap-2 text-xl">
                <FaCheckCircle className="text-green-500" />
                <span>Certified recycling</span>
              </div>
              <div className="flex items-center gap-2 text-xl">
                <FaCoins className="text-green-500" />
                <span>Instant rewards</span>
              </div>
              <div className="flex items-center gap-2 text-xl">
                <FaShieldAlt className="text-green-500" />
                <span>Secure & safe</span>
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
                    The <span className="text-red-500">silent crisis</span> in your drawer
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                      <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500 transition-colors">
                        <FaMobileAlt className="text-3xl text-red-500 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">Buried treasure</h3>
                      <p className="text-gray-600">
                        Your old phone contains gold, silver, and rare earth metals worth real money.
                      </p>
                    </div>

                    <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                      <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500 transition-colors">
                        <FaGlobe className="text-3xl text-red-500 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">Environmental time bomb</h3>
                      <p className="text-gray-600">
                        Toxic materials leaching into soil and water, harming ecosystems and communities.
                      </p>
                    </div>

                    <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                      <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500 transition-colors">
                        <FaHeart className="text-3xl text-red-500 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">Human cost</h3>
                      <p className="text-gray-600">
                        Informal recycling exposes workers to dangerous conditions and health risks.
                      </p>
                    </div>
                  </div>

                  <div className="mt-12 bg-red-50 rounded-2xl p-6 border border-red-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-xl font-bold text-red-800">The opportunity cost</h4>
                        <p className="text-red-600">Every device not recycled is value lost forever</p>
                      </div>
                      <Link 
                        href="/education" 
                        className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
                      >
                        Learn more
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
                Why choose <span className="text-green-600">DropMyElectronic</span>?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaTree className="text-2xl text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Environmental impact</h3>
                <p className="text-gray-600">
                  Reduce e-waste and prevent toxic materials from harming our planet.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCoins className="text-2xl text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Earn rewards</h3>
                <p className="text-gray-600">
                  Get points for every device recycled and redeem for exclusive benefits.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaShieldAlt className="text-2xl text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Secure & certified</h3>
                <p className="text-gray-600">
                  All recycling partners are certified and follow strict safety standards.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUsers className="text-2xl text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Community driven</h3>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-12">Making a real difference</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">100+</div>
                <div className="text-gray-600">Happy users</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-gray-600">Devices recycled</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">5+</div>
                <div className="text-gray-600">Partner locations</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">2+</div>
                <div className="text-gray-600">Tons CO₂ reduced</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-white border-t border-b border-gray-100 overflow-hidden">
  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-5"></div>
  <div className="absolute inset-0 bg-gradient-to-br from-green-50/80 to-emerald-100/60"></div>
  
  <div className="absolute top-10 left-5 w-6 h-6 text-green-200">
    <span className="text-3xl">🍃</span>
  </div>
  <div className="absolute top-20 right-8 w-5 h-5 text-green-300">
    <span className="text-3xl">🌿</span>
  </div>
  <div className="absolute bottom-20 left-16 w-5 h-5 text-emerald-200">
    <span className="text-3xl">♻️</span>
  </div>
  <div className="absolute bottom-10 right-20 w-6 h-6 text-green-400">
    <span className="text-3xl">🌎</span>
  </div>

  <div className="container mx-auto px-4 text-center relative z-10">
    <div className="inline-block bg-green-100 text-green-800 text-2sm font-medium px-4 py-2 rounded-full mb-8 border border-green-200">
      ♻️ Join the E-Waste Revolution
    </div>
    
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
      Ready to make<br />
      <span className="text-green-600">your environmental impact?</span>
    </h2>
    
    <p className="text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
      Every device recycled is a step towards a cleaner Nairobi. Join our community in building a sustainable future today.
    </p>
    
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Link 
        href="/findcenters" 
        className="group bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-3 min-w-[220px] justify-center"
      >
        <svg className="w-9 h-9 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        Find nearby centers
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
      
      <Link 
        href="/rewards" 
        className="group border-2 border-green-600 bg-white/80 backdrop-blur-sm text-green-700 hover:bg-green-600 hover:text-white px-10 py-4 rounded-xl font-bold text-xl transition-all duration-300 hover:shadow-lg transform hover:scale-105 flex items-center gap-3 min-w-[220px] justify-center"
      >
        <svg className="w-8 h-8 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
        Explore rewards
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
    
    <div className="mt-16 pt-8 border-t border-green-200/50">
      <p className="text-gray-600 text-2sm mb-6 font-medium">Trusted by eco-conscious Nairobians</p>
      <div className="flex flex-wrap justify-center items-center gap-6 text-gray-500">
        <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-green-200">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-2sm">Certified recycling</span>
        </div>
        <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-green-200">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-2sm">Instant rewards</span>
        </div>
        <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-green-200">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-2sm">Nairobi-wide</span>
        </div>
        <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-green-200">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-2sm">Environmental impact</span>
        </div>
      </div>
      
      <div className="flex justify-center items-center gap-6 mt-6">
        <div className="text-3xl text-green-400 opacity-70">🌍</div>
        <div className="text-3xl text-green-500 opacity-80">💚</div>
        <div className="text-3xl text-emerald-400 opacity-70">🔋</div>
        <div className="text-3xl text-green-600 opacity-90">📱</div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default Home;