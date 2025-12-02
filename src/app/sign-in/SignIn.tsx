'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaEnvelope, FaLock, FaLeaf, FaRecycle, FaSpinner } from 'react-icons/fa';

export default function SigninPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);

    try {
      setTimeout(() => {
        setLoading(false);
        router.push('/dashboard');
      }, 1500);

    } catch (err) {
      setLoading(false);
      setError('Something went wrong. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white py-8 -mt-24">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-12">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center shadow-sm">
              <FaRecycle className="text-green-600 text-3xl" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Welcome back</h1>
              <p className="text-gray-600 mt-2">Sign in to your DropMyElectronic account</p>
            </div>
          </div>
        </div>

        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-8">
              <h2 className="text-2xl font-bold mb-2">Sign in to your account</h2>
              <p className="text-green-100 opacity-90">Access your rewards and recycling history</p>
            </div>

            <div className="p-8">
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                
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
                      disabled={loading}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-gray-700 text-2sm font-medium">
                      Password
                    </label>
                    <Link 
                      href="/forgot-password" 
                      className="text-green-600 hover:text-green-700 text-sm font-medium"
                    >
                      forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="your password"
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500/30 focus:outline-none transition-colors"
                      required
                      disabled={loading}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-6 h-6 text-green-600 rounded focus:ring-green-500"
                    disabled={loading}
                  />
                  <label htmlFor="remember" className="text-gray-600 text-2sm">
                    Remember me
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-green-600 text-white py-4 rounded-lg font-bold hover:bg-green-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg"
                >
                  {loading ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    <>
                      <FaLeaf />
                      Sign in
                    </>
                  )}
                </button>
              </form>

            
              <div className="text-center pt-6 border-t border-gray-200">
                <p className="text-gray-600">
                  Don't have an account?{' '}
                  <Link href="/signup" className="text-green-600 hover:text-green-700 font-bold">
                    Sign up here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}