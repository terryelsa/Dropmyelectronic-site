"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  FaBook, 
  FaMapMarkerAlt,
  FaBookOpen,
  FaQuestionCircle,
  FaExclamationTriangle, 
  FaLightbulb,
  FaPlay,
  FaDownload,
  FaShare,
  FaArrowRight,
  FaUsers,
  FaTree,
  FaShieldAlt,
  FaChartLine
} from 'react-icons/fa';

const Education = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const educationalContent = [
    {
      id: 1,
      title: "E-Waste Situation in Kenya",
      description: "Understanding the growing e-waste challenge in Nairobi and its impact on our environment and communities.",
      category: "problem",
      duration: "5 min read",
      type: "article",
      localStats: [
        { value: "3,000+", label: "Tonnes e-waste in Nairobi yearly" },
        { value: "17%", label: "Properly recycled" },
        { value: "50%", label: "Growth rate in e-waste" }
      ]
    },
    {
      id: 2,
      title: "NEMA E-Waste Regulations in Kenya",
      description: "Learn about Kenya's environmental laws and regulations governing electronic waste disposal.",
      category: "regulations",
      duration: "8 min read",
      type: "guide",
      localRelevance: "Kenya-specific regulations"
    },
    {
      id: 3,
      title: "Dandora Dumpsite: The E-Waste Crisis",
      description: "Case study on how informal e-waste handling affects Nairobi's largest dumpsite and surrounding communities.",
      category: "case-study",
      duration: "10 min read",
      type: "case-study",
      location: "Nairobi, Dandora"
    },
    {
      id: 4,
      title: "How to Properly Dispose Phones in Kenya",
      description: "Step-by-step guide for Nairobi residents on safely disposing of mobile phones and accessories.",
      category: "how-to",
      duration: "6 min read",
      type: "tutorial",
      devices: ["Smartphones", "Tablets"]
    },
    {
      id: 5,
      title: "Kenyans Turning E-Waste into Opportunity",
      description: "Success stories of local entrepreneurs creating businesses from e-waste recycling in Nairobi.",
      category: "success",
      duration: "7 min read",
      type: "story",
      localExamples: true
    },
    {
      id: 6,
      title: "E-Waste & Health: Risks in Urban Nairobi",
      description: "Understanding the health implications of improper e-waste handling in dense urban areas.",
      category: "health",
      duration: "9 min read",
      type: "article",
      focus: "Urban health impacts"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Topics', icon: <FaBook />, count: educationalContent.length },
    { id: 'problem', name: 'The Problem', icon: <FaExclamationTriangle />, count: 1 },
    { id: 'regulations', name: 'Kenyan Laws', icon: <FaShieldAlt />, count: 1 },
    { id: 'how-to', name: 'How-To Guides', icon: <FaLightbulb />, count: 1 },
    { id: 'health', name: 'Health & Safety', icon: <FaUsers />, count: 1 },
    { id: 'success', name: 'Success Stories', icon: <FaChartLine />, count: 1 },
    { id: 'case-study', name: 'Case Studies', icon: <FaTree />, count: 1 }
  ];

  const filteredContent = activeCategory === 'all' 
    ? educationalContent 
    : educationalContent.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">

      <section className="relative py-20">
  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -mt-24"></div>
  
  <div className="absolute inset-0 opacity-5">
    <div className="absolute inset-0" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300a8ff' fill-opacity='0.1'%3E%3Cpath d='M36,34 L24,46 L12,34 L24,22 Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    }}></div>
  </div>
  
  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-4xl mx-auto">
      
      <div className="flex items-center justify-center gap-3 mb-8 -mt-24">
        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
          <FaBookOpen className="text-blue-600 text-sm" />
        </div>
        <span className="text-blue-600 font-medium">Education Center</span>
      </div>

      <h1 className="text-5xl md:text-6xl font-bold text-center text-gray-900 mb-6 leading-tight">
        E-waste knowledge for
        <br />
        <span className="text-blue-600">Nairobi</span>
      </h1>
      
      <p className="text-gray-600 text-lg text-center mb-12 max-w-2xl mx-auto leading-relaxed">
        Everything you need to know about recycling electronics in our city. 
        Simple guides, clear information, real impact.
      </p>

      {/* Stats - clean cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
          <div className="text-gray-500">Tonnes of e-waste annually in Nairobi</div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
          <div className="text-gray-500">Certified recycling centers</div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="text-3xl font-bold text-blue-600 mb-2">7%</div>
          <div className="text-gray-500">Currently properly recycled</div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
         <Link 
          href="/recyclingguide" 
          className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <FaBook className="text-sm" />
          Read Guides
        </Link>
        
        <Link 
          href="/faq" 
          className="px-8 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors flex items-center gap-2"
        >
          <FaQuestionCircle className="text-sm" />
          View FAQ
        </Link>
        
        <Link 
          href="/findcenters" 
          className="px-8 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center gap-2"
        >
          <FaMapMarkerAlt className="text-sm" />
          Find Centers
        </Link>
      </div>
    </div>
  </div>
</section>

      <section className="py-8 bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all ${
                  activeCategory === category.id
                    ? 'bg-green-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.icon}
                <span className="font-medium">{category.name}</span>
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                  activeCategory === category.id ? 'bg-white/20' : 'bg-gray-300'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredContent.map(item => (
                <div key={item.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                        item.category === 'problem' ? 'bg-red-100 text-red-700' :
                        item.category === 'regulations' ? 'bg-blue-100 text-blue-700' :
                        item.category === 'how-to' ? 'bg-green-100 text-green-700' :
                        item.category === 'health' ? 'bg-orange-100 text-orange-700' :
                        item.category === 'success' ? 'bg-purple-100 text-purple-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {categories.find(cat => cat.id === item.category)?.name}
                      </span>
                      <span className="text-xs text-gray-500">{item.duration}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.localStats && (
                        <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
                          🇰🇪 Local Data
                        </span>
                      )}
                      {item.localRelevance && (
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                          📍 Kenya Focus
                        </span>
                      )}
                      {item.location && (
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                          🏙️ {item.location}
                        </span>
                      )}
                    </div>

                    <div className="flex justify-between items-center">
                      <button className="flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold text-sm">
                        <FaPlay className="text-xs" />
                        Read More
                        <FaArrowRight className="text-xs" />
                      </button>
                      <div className="flex gap-2">
                        <button className="text-gray-400 hover:text-gray-600 transition-colors">
                          <FaDownload className="text-sm" />
                        </button>
                        <button className="text-gray-400 hover:text-gray-600 transition-colors">
                          <FaShare className="text-sm" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                <span className="text-green-600">Nairobi-specific</span> resources
              </h2>
              <p className="text-xl text-gray-600">
                Tailored information for residents of Nairobi and surrounding areas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <FaShieldAlt className="text-white text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Kenyan E-Waste Laws</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Understand the legal framework governing e-waste management in Kenya, including NEMA regulations and compliance requirements.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-700">
                    <FaArrowRight className="text-green-500 text-xs" />
                    Environmental Management and Coordination Act
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <FaArrowRight className="text-green-500 text-xs" />
                    Waste Management Regulations 2006
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <FaArrowRight className="text-green-500 text-xs" />
                    Extended Producer Responsibility
                  </li>
                </ul>
                <Link href="/regulations" className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  View regulations
                  <FaArrowRight className="text-sm" />
                </Link>
              </div>

              <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <FaUsers className="text-white text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Nairobi community programs</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Discover local initiatives, community clean-ups, and educational programs happening across Nairobi neighborhoods.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-700">
                    <FaArrowRight className="text-blue-500 text-xs" />
                    School e-waste awareness programs
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <FaArrowRight className="text-blue-500 text-xs" />
                    Community collection drives
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <FaArrowRight className="text-blue-500 text-xs" />
                    Youth entrepreneurship in recycling
                  </li>
                </ul>
                <Link href="/community" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Join programs
                  <FaArrowRight className="text-sm" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

     <section className="py-16 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
  <div className="container mx-auto px-4 text-center">
    <div className="max-w-2xl mx-auto">
      <h2 className="text-4xl font-bold mb-4">
        Ready to make a difference in <span className="text-yellow-300">Nairobi</span>?
      </h2>
      
      <p className="text-lg text-green-100 mb-8">
        Join thousands of Nairobi residents who are turning e-waste knowledge into environmental action.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link 
          href="/findcenters" 
          className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Find recycling centers
        </Link>
        <Link 
          href="/rewards" 
          className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition-colors"
        >
          Earn rewards
        </Link>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Education;