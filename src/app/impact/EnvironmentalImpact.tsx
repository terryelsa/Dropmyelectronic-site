"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  FaTree,
  FaWater,
  FaFire,
  FaUserInjured,
  FaRecycle,
  FaChartLine,
  FaArrowRight,
  FaLeaf,
  FaShieldAlt,
  FaUsers,
  FaCity,
  FaHeart,
  FaExclamationTriangle,
  FaCheckCircle,
  FaCoins,
  FaIndustry
} from 'react-icons/fa';

const EnvironmentalImpact = () => {
  const [activeTab, setActiveTab] = useState('problem');
  const [co2Reduced, setCo2Reduced] = useState(0);
  const [devicesRecycled, setDevicesRecycled] = useState(0);
  const [waterSaved, setWaterSaved] = useState(0);

  // Animated counter effect
  useEffect(() => {
    const animateValue = (setter: React.Dispatch<React.SetStateAction<number>>, end: number, duration: number) => {
      let start = 0;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setter(end);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 16);
    };

    animateValue(setCo2Reduced, 2540, 2000);
    animateValue(setDevicesRecycled, 52891, 2500);
    animateValue(setWaterSaved, 12500, 1800);
  }, []);

  // Nairobi-specific environmental data
  const nairobiImpactData = {
    problem: [
      {
        icon: <FaExclamationTriangle className="text-red-500 text-2xl" />,
        title: "Soil Contamination in Dandora",
        description: "Heavy metals from e-waste leach into soil, affecting food crops in surrounding areas",
        stat: "45%",
        statLabel: "of soil samples show heavy metal contamination"
      },
      {
        icon: <FaWater className="text-blue-500 text-2xl" />,
        title: "Water Pollution",
        description: "Toxic chemicals seep into groundwater, affecting Nairobi River and drinking water sources",
        stat: "3.2M",
        statLabel: "liters of water contaminated daily"
      },
      {
        icon: <FaUserInjured className="text-orange-500 text-2xl" />,
        title: "Health Impacts",
        description: "Informal recycling exposes workers and communities to dangerous chemicals and heavy metals",
        stat: "15,000+",
        statLabel: "people directly affected in Nairobi"
      },
      {
        icon: <FaFire className="text-yellow-500 text-2xl" />,
        title: "Air Pollution",
        description: "Burning of e-waste releases toxic fumes containing dioxins and furans",
        stat: "28%",
        statLabel: "increase in respiratory issues near dumpsites"
      }
    ],
    solution: [
      {
        icon: <FaRecycle className="text-green-500 text-2xl" />,
        title: "Materials Recovery",
        description: "Valuable metals and materials are extracted and reused in manufacturing",
        stat: "85%",
        statLabel: "of materials can be recovered and reused"
      },
      {
        icon: <FaTree className="text-green-600 text-2xl" />,
        title: "Carbon Reduction",
        description: "Recycling reduces the need for new raw material extraction and processing",
        stat: "50kg",
        statLabel: "CO₂ saved per smartphone recycled"
      },
      {
        icon: <FaWater className="text-blue-400 text-2xl" />,
        title: "Water Conservation",
        description: "Proper recycling prevents toxic chemicals from contaminating water sources",
        stat: "240L",
        statLabel: "water saved per laptop recycled"
      },
      {
        icon: <FaUsers className="text-purple-500 text-2xl" />,
        title: "Community Health",
        description: "Safe recycling practices protect workers and surrounding communities",
        stat: "95%",
        statLabel: "reduction in exposure to hazardous materials"
      }
    ]
  };

  const impactStories = [
    {
      location: "Dandora, Nairobi",
      before: "Informal e-waste burning causing respiratory issues and soil contamination",
      after: "Community recycling program reduced burning by 70% in 6 months",
      improvement: "Air quality improved by 45% in surrounding areas"
    },
    {
      location: "Kibera, Nairobi",
      before: "E-waste dumped in open areas, contaminating water sources",
      after: "Collection centers established, proper disposal channels created",
      improvement: "Water contamination levels dropped by 60%"
    },
    {
      location: "Eastleigh, Nairobi",
      before: "Unregulated electronics repair shops creating hazardous waste",
      after: "Training provided on safe handling and proper disposal methods",
      improvement: "Proper waste management adoption increased by 80%"
    }
  ];

  const materialRecovery = [
    { material: "Gold", recovery: "95%", value: "$50/device", use: "New electronics, jewelry" },
    { material: "Silver", recovery: "98%", value: "$15/device", use: "Electronics, medical equipment" },
    { material: "Copper", recovery: "99%", value: "$8/device", use: "Wiring, construction" },
    { material: "Aluminum", recovery: "97%", value: "$3/device", use: "Cans, automotive parts" },
    { material: "Plastic", recovery: "85%", value: "$2/device", use: "New products, packaging" },
    { material: "Glass", recovery: "90%", value: "$1/device", use: "New screens, construction" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Component */}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-emerald-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Environmental Impact in <span className="text-yellow-300">Nairobi</span>
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Understanding how e-waste affects our city and how proper recycling creates positive change for our environment and communities.
            </p>
          </div>
        </div>
      </section>

      {/* Live Impact Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
              Our Collective Impact in <span className="text-green-600">Nairobi</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-green-50 rounded-2xl border border-green-200">
                <FaTree className="text-4xl text-green-500 mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                  {co2Reduced.toLocaleString()} kg
                </div>
                <div className="text-gray-600 font-semibold">CO₂ Emissions Reduced</div>
                <p className="text-gray-500 text-sm mt-2">Equivalent to planting 2,100 trees</p>
              </div>
              <div className="text-center p-8 bg-blue-50 rounded-2xl border border-blue-200">
                <FaRecycle className="text-4xl text-blue-500 mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {devicesRecycled.toLocaleString()}
                </div>
                <div className="text-gray-600 font-semibold">Devices Properly Recycled</div>
                <p className="text-gray-500 text-sm mt-2">Preventing environmental contamination</p>
              </div>
              <div className="text-center p-8 bg-purple-50 rounded-2xl border border-purple-200">
                <FaWater className="text-4xl text-purple-500 mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                  {waterSaved.toLocaleString()} L
                </div>
                <div className="text-gray-600 font-semibold">Water Saved from Pollution</div>
                <p className="text-gray-500 text-sm mt-2">Protecting Nairobi's water sources</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem vs Solution Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex justify-center mb-12">
              <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
                <button
                  onClick={() => setActiveTab('problem')}
                  className={`px-8 py-4 rounded-xl font-bold text-lg transition-all ${
                    activeTab === 'problem' 
                      ? 'bg-red-500 text-white shadow-md' 
                      : 'text-gray-600 hover:text-red-500'
                  }`}
                >
                  <FaExclamationTriangle className="inline mr-2" />
                  The Problem
                </button>
                <button
                  onClick={() => setActiveTab('solution')}
                  className={`px-8 py-4 rounded-xl font-bold text-lg transition-all ${
                    activeTab === 'solution' 
                      ? 'bg-green-500 text-white shadow-md' 
                      : 'text-gray-600 hover:text-green-500'
                  }`}
                >
                  <FaCheckCircle className="inline mr-2" />
                  The Solution
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {nairobiImpactData[activeTab as keyof typeof nairobiImpactData].map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
                  <div className="text-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 text-center mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-center mb-4">
                    {item.description}
                  </p>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      {item.stat}
                    </div>
                    <div className="text-sm text-gray-500">
                      {item.statLabel}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Material Recovery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
              Value Recovery from E-Waste
            </h2>
            <p className="text-xl text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Every device recycled recovers valuable materials that can be reused, reducing the need for new resource extraction.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {materialRecovery.map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.material}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Recovery Rate:</span>
                      <span className="font-semibold text-green-600">{item.recovery}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Value:</span>
                      <span className="font-semibold text-green-600">{item.value}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Reused For:</span>
                      <span className="font-semibold text-green-600 text-right">{item.use}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Economic Opportunity for Nairobi</h3>
              <p className="text-green-100 mb-6 text-lg">
                Proper e-waste recycling could create over 5,000 green jobs in Nairobi and generate $15 million annually in recovered materials.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <div className="text-2xl font-bold">5,000+</div>
                  <div className="text-green-200 text-sm">Green Jobs</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">$15M</div>
                  <div className="text-green-200 text-sm">Annual Value</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">85%</div>
                  <div className="text-green-200 text-sm">Material Recovery</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">60%</div>
                  <div className="text-green-200 text-sm">Cost Savings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
              Success Stories Across <span className="text-green-600">Nairobi</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {impactStories.map((story, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-green-600 font-semibold mb-4">
                      <FaCity />
                      {story.location}
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                        <FaExclamationTriangle className="text-red-400" />
                        Before
                      </h4>
                      <p className="text-gray-600 text-sm">{story.before}</p>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                        <FaCheckCircle className="text-green-400" />
                        After Intervention
                      </h4>
                      <p className="text-gray-600 text-sm">{story.after}</p>
                    </div>

                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <h4 className="font-semibold text-green-700 mb-1">Improvement</h4>
                      <p className="text-green-600 text-sm">{story.improvement}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Be Part of Nairobi's <span className="text-yellow-300">Green Transformation</span>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of Nairobi residents who are turning e-waste into environmental solutions and economic opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/findcenters" 
              className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <FaRecycle />
              Start Recycling Today
              <FaArrowRight />
            </Link>
            <Link 
              href="/education" 
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <FaLeaf />
              Learn More
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-green-100">
            <div className="flex items-center gap-2">
              <FaShieldAlt className="text-sm" />
              <span>Certified Environmental Impact</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUsers className="text-sm" />
              <span>Community Driven</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCoins className="text-sm" />
              <span>Economic Benefits</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Component */}
    </div>
  );
};

export default EnvironmentalImpact;