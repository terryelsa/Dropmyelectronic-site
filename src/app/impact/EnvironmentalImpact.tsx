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
    animateValue(setDevicesRecycled, 5821, 2500);
    animateValue(setWaterSaved, 12500, 1800);
  }, []);

  const nairobiImpactData = {
    problem: [
      {
        icon: <FaExclamationTriangle className="text-red-500 text-2xl" />,
        title: "Soil contamination in Dandora",
        description: "Heavy metals from e-waste leach into soil, affecting food crops in surrounding areas",
        stat: "45%",
        statLabel: "of soil samples show heavy metal contamination"
      },
      {
        icon: <FaWater className="text-blue-500 text-2xl" />,
        title: "Water pollution",
        description: "Toxic chemicals seep into groundwater, affecting Nairobi River and drinking water sources",
        stat: "3.2M",
        statLabel: "liters of water contaminated daily"
      },
      {
        icon: <FaUserInjured className="text-orange-500 text-2xl" />,
        title: "Health impacts",
        description: "Informal recycling exposes workers and communities to dangerous chemicals and heavy metals",
        stat: "15,000+",
        statLabel: "people directly affected in Nairobi"
      },
      {
        icon: <FaFire className="text-yellow-500 text-2xl" />,
        title: "Air pollution",
        description: "Burning of e-waste releases toxic fumes containing dioxins and furans",
        stat: "28%",
        statLabel: "increase in respiratory issues near dumpsites"
      }
    ],
    solution: [
      {
        icon: <FaRecycle className="text-green-500 text-2xl" />,
        title: "Materials recovery",
        description: "Valuable metals and materials are extracted and reused in manufacturing",
        stat: "85%",
        statLabel: "of materials can be recovered and reused"
      },
      {
        icon: <FaTree className="text-green-600 text-2xl" />,
        title: "Carbon reduction",
        description: "Recycling reduces the need for new raw material extraction and processing",
        stat: "50kg",
        statLabel: "CO₂ saved per smartphone recycled"
      },
      {
        icon: <FaWater className="text-blue-400 text-2xl" />,
        title: "Water conservation",
        description: "Proper recycling prevents toxic chemicals from contaminating water sources",
        stat: "240L",
        statLabel: "water saved per laptop recycled"
      },
      {
        icon: <FaUsers className="text-purple-500 text-2xl" />,
        title: "Community health",
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

     <section className="relative bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800 text-white py-24 -mt-24 overflow-hidden">
  <div className="absolute top-10 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
  <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl"></div>
  
  <div className="absolute top-20 left-20 text-4xl opacity-20">🌍</div>
  <div className="absolute bottom-32 right-32 text-3xl opacity-25">♻️</div>
  <div className="absolute top-32 right-20 text-2xl opacity-30">🌿</div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-6xl mx-auto text-center">
      <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/20">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></span>
          <span className="text-sm font-semibold tracking-wide">ENVIRONMENTAL IMPACT METRICS</span>
        </div>
      </div>

      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        Environmental impact in{' '}
        <span className="text-yellow-300 bg-gradient-to-r from-yellow-300 to-amber-300 bg-clip-text text-transparent">
          Nairobi
        </span>
      </h1>

      <p className="text-xl md:text-2xl text-green-50 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
        Discover how e-waste affects our city and how{' '}
        <span className="font-semibold text-yellow-300">proper recycling</span> creates 
        positive change for our environment and communities.
      </p>

    </div>
  </div>

  <div className="absolute bottom-0 left-0 w-full overflow-hidden transform rotate-180">
    <svg 
      viewBox="0 0 1200 120" 
      preserveAspectRatio="none" 
      className="relative block w-full h-16"
      fill="currentColor"
    >
      <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-white"></path>
      <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-white"></path>
      <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-white"></path>
    </svg>
  </div>
</section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
              Our collective impact in <span className="text-green-600">Nairobi</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-green-50 rounded-2xl border border-green-200">
                <FaTree className="text-4xl text-green-500 mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                  {co2Reduced.toLocaleString()} kg
                </div>
                <div className="text-gray-600 font-semibold">CO₂ emissions reduced</div>
                <p className="text-gray-500 text-2sm mt-2">Equivalent to planting 2,100 trees</p>
              </div>
              <div className="text-center p-8 bg-blue-50 rounded-2xl border border-blue-200">
                <FaRecycle className="text-4xl text-blue-500 mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {devicesRecycled.toLocaleString()}
                </div>
                <div className="text-gray-600 font-semibold">Devices properly recycled</div>
                <p className="text-gray-500 text-2sm mt-2">Preventing environmental contamination</p>
              </div>
              <div className="text-center p-8 bg-purple-50 rounded-2xl border border-purple-200">
                <FaWater className="text-4xl text-purple-500 mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                  {waterSaved.toLocaleString()} L
                </div>
                <div className="text-gray-600 font-semibold">Water saved from pollution</div>
                <p className="text-gray-500 text-2sm mt-2">Protecting Nairobi&apos;s water sources</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
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

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
              Value recovery from e-waste
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
                      <span className="text-gray-600">Recovery rate:</span>
                      <span className="font-semibold text-green-600">{item.recovery}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Value:</span>
                      <span className="font-semibold text-green-600">{item.value}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Reused for:</span>
                      <span className="font-semibold text-green-600 text-right">{item.use}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Economic opportunity for Nairobi</h3>
              <p className="text-green-100 mb-6 text-lg">
                Proper e-waste recycling could create over 5,000 green jobs in Nairobi and generate $15 million annually in recovered materials.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-green-200 text-sm">Green jobs</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">5M</div>
                  <div className="text-green-200 text-sm">Annual value</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">85%</div>
                  <div className="text-green-200 text-sm">Material recovery</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">60%</div>
                  <div className="text-green-200 text-sm">Cost savings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
              Success stories across <span className="text-green-600">Nairobi</span>
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
                        After intervention
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


    </div>
  );
};

export default EnvironmentalImpact;