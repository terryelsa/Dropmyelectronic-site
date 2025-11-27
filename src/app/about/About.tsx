import Link from "next/link";
import React from "react";
import { FaBullseye, FaEye, FaLeaf, FaUsers, FaLightbulb, FaHandshake, FaMapMarkerAlt, FaMobileAlt, FaCity, FaRecycle } from 'react-icons/fa';

const About = () => {
  return (
     <div className="min-h-screen bg-gray-50">          
        <section className="py-16 bg-white">
      <div className="container mx-auto px-4 -mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <FaRecycle className="text-3xl text-green-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About <span className="text-green-600">DropMyElectronic</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-2xl mx-auto">
            We&apos;re revolutionizing e-waste management through innovative technology and community-driven solutions for a sustainable tomorrow.
          </p>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-12"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="bg-green-50 rounded-lg p-6 border border-green-100">
              <FaUsers className="text-2xl text-green-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-green-600 mb-1">100+</div>
              <div className="text-sm text-gray-600 font-medium">Active Users</div>
            </div>
            <div className="bg-green-50 rounded-lg p-6 border border-green-100">
              <FaMapMarkerAlt className="text-2xl text-green-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-green-600 mb-1">5+</div>
              <div className="text-sm text-gray-600 font-medium">Recycling Centers</div>
            </div>
            <div className="bg-green-50 rounded-lg p-6 border border-green-100">
              <FaMobileAlt className="text-2xl text-green-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-green-600 mb-1">50+</div>
              <div className="text-sm text-gray-600 font-medium">Devices Recycled</div>
            </div>
            <div className="bg-green-50 rounded-lg p-6 border border-green-100">
              <FaCity className="text-2xl text-green-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-green-600 mb-1">1</div>
              <div className="text-sm text-gray-600 font-medium">City Covered</div>
            </div>
          </div>
        </div>
      </div>
    </section>

        <section className="py-16 bg-white">
         <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-green-800 mb-6">Who we are</h2>
              <p className="text-lg md:text-2xl text-gray-900 text-center flex-grow leading-relaxed">
              DropMyElectronic is a passionate team dedicated to solving the growing e-waste problem through innovative solutions and community engagement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <div className="text-green-700 text-5xl text-center mb-6">
                <FaBullseye className="mx-auto" />
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-green-800 text-center mb-6">Our Mission</h3>
              <p className="text-lg md:text-2xl text-gray-700 text-center flex-grow leading-relaxed">
                To make e-waste recycling simple, accessible, and rewarding for everyone by connecting people with certified recycling centers.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <div className="text-green-700 text-5xl text-center mb-6">
                <FaEye className="mx-auto" />
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-green-800 text-center mb-6">Our Vision</h3>
              <p className="text-lg md:text-2xl text-gray-700 text-center flex-grow leading-relaxed">
                A world where electronic waste becomes a valuable resource for sustainable innovation and communities actively participate in creating cleaner environments.
              </p>
            </div>
          </div>
         </div>
        </section>

        <section className="py-16 bg-gray-50">
         <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-green-800 mb-6">Our Values</h2>
              <p className="text-lg md:text-2xl text-gray-900 text-center flex-grow leading-relaxed">
              The principles that guide everything we do at DropMyElectronic
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-8xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-green-700 text-3xl mb-4">
                <FaLeaf className="mx-auto" />
                </div>
              <h3 className="text-2xl font-bold text-green-800 mb-3">Environmental stewardship</h3>
              <p className="text-gray-700 text-xl">
                We believe in protecting our planet for future generations by promoting sustainable practices and reducing electronic waste.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-green-700 text-3xl mb-4">
                <FaUsers className="mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-3">Community focus</h3>
              <p className="text-gray-700 text-xl">
                We prioritize accessibility and education to empower communities to take action against e-waste in their neighborhoods.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-green-700 text-3xl mb-4">
                <FaLightbulb className="mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-3">Innovation</h3>
              <p className="text-gray-700 text-xl">
                We continuously seek new ways to make e-waste recycling more efficient, accessible, and rewarding for everyone involved.
              </p>
               </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-green-700 text-3xl mb-4">
                <FaHandshake className="mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-3">Partnership</h3>
              <p className="text-gray-700 text-xl">
                We collaborate with certified recycling centers, environmental organizations, and communities to maximize our impact.
              </p>
            </div>
          </div>
         </div>
        </section>

       <section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Join our mission</h2>
      <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
        Choose how you want to contribute to a sustainable future
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-white text-center group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
        <div className="text-5xl mb-6 flex justify-center">
          <FaMapMarkerAlt className="text-white" />
        </div>
        <h3 className="text-3xl font-bold mb-4">Find recycling centers</h3>
        <p className="text-2xl mb-6 opacity-90 leading-relaxed">
          Locate certified e-waste recycling centers near you and dispose of your electronics responsibly.
        </p>
        <Link href="/findcenters" className="inline-block bg-white text-xl text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300">
          Explore map
        </Link>
      </div>
      
     <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
        <div className="text-5xl mb-6 flex justify-center">
          <FaHandshake className="text-white" />
        </div>
        <h3 className="text-3xl font-bold mb-4">Partner with us</h3>
        <p className="text-2xl mb-6 opacity-90 leading-relaxed">
          Join our network of recycling centers, organizations, and environmental advocates.
        </p>
        <Link href="/contactus" className="inline-block bg-white text-xl text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300">
          Get started
        </Link>
      </div>
    </div>
  </div>
</section>
      </div>
  );
};

export default About;
