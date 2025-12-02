'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaUser, FaEnvelope, FaLock, FaLeaf, FaRecycle } from 'react-icons/fa';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    location: 'Nairobi',
  });
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup data:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white py-8 -mt-40">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-12">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center shadow-sm">
              <FaRecycle className="text-green-600 text-3xl" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Join DropMyElectronic</h1>
              <p className="text-gray-600 mt-2">Start your e-waste recycling journey in nairobi</p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-8">
                  <h2 className="text-2xl font-bold mb-2">Create your account</h2>
                  <p className="text-green-100 opacity-90">Join 100+ Nairobians making a difference</p>
                </div>

                <div className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 text-2sm font-medium mb-2">
                          Full Name
                        </label>
                        <div className="relative">
                          <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="your name"
                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/30 focus:outline-none transition-colors"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-700 text-2sm font-medium mb-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/30 focus:outline-none transition-colors"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 text-2sm font-medium mb-2">
                          Password
                        </label>
                        <div className="relative">
                          <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="create a password"
                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/30 focus:outline-none transition-colors"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-700 text-2sm font-medium mb-2">
                          Confirm Password
                        </label>
                        <div className="relative">
                          <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="confirm your password"
                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/30 focus:outline-none transition-colors"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 text-2sm font-medium mb-2">
                        Your location in Nairobi
                      </label>
                      <select
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/30 focus:outline-none transition-colors"
                      >
                        <option value="Nairobi">Select your area</option>
                        <option value="Westlands">Westlands</option>
                        <option value="Parklands">Parklands</option>
                        <option value="Karen">Karen</option>
                        <option value="Lavington">Lavington</option>
                        <option value="CBD">CBD</option>
                        <option value="Kibera">Kibera</option>
                        <option value="Kawangware">Kawangware</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <input
                        type="checkbox"
                        id="terms"
                        checked={acceptTerms}
                        onChange={(e) => setAcceptTerms(e.target.checked)}
                        className="mt-1 w-6 h-6 text-green-600 rounded focus:ring-green-500"
                        required
                      />
                      <label htmlFor="terms" className="text-gray-600 text-2sm">
                        I agree to the terms of service and privacy policy
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-green-600 text-white py-4 rounded-lg font-bold hover:bg-green-700 transition-colors flex items-center justify-center gap-3 text-lg"
                    >
                      <FaLeaf />
                      Create my account
                    </button>
                  </form>

                  

                  <div className="text-center pt-6 border-t border-gray-200">
                    <p className="text-gray-600">
                      Already have an account?{' '}
                      <Link href="/login" className="text-green-600 hover:text-green-700 font-bold">
                        Sign in here
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <FaRecycle className="text-green-600 text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Why join us?</h3>
                </div>
                
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold">✓</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Earn rewards</p>
                      <p className="text-gray-600 text-sm mt-1">Get points for every device recycled</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold">📍</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Find centers</p>
                      <p className="text-gray-600 text-sm mt-1">Locate certified recycling near you</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold">🌍</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Make impact</p>
                      <p className="text-gray-600 text-sm mt-1">Track your environmental contribution</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold">👥</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Join community</p>
                      <p className="text-gray-600 text-sm mt-1">Connect with eco-conscious nairobians</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-600 to-emerald-700 text-white rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-6">Our community</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-200 text-sm">Active members</p>
                      <p className="text-2xl font-bold">100+</p>
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <span>👥</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-200 text-sm">Devices recycled</p>
                      <p className="text-2xl font-bold">50+</p>
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <span>📱</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-200 text-sm">Impact points</p>
                      <p className="text-2xl font-bold">10K+</p>
                    </div>
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <span>🏆</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                <p className="text-blue-800 font-medium mb-2">💡 Quick tip</p>
                <p className="text-blue-700 text-sm">
                  Start with small devices like old phones and chargers to earn your first rewards quickly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}