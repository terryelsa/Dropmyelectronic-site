"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  FaMobileAlt,
  FaLaptop,
  FaTv,
  FaTabletAlt,
  FaPrint,
  FaBatteryHalf,
  FaHeadphones,
  FaCamera,
  FaGamepad,
  FaQuestionCircle,
  FaExclamationTriangle,
  FaCheckCircle,
  FaTimesCircle,
  FaRecycle,
  FaArrowRight,
  FaSearch,
  FaDownload,
  FaEllipsisH
} from 'react-icons/fa';

interface GuideStep {
  step: number;
  title: string;
  description: string;
  tip?: string;
  nairobiTip?: string;
  warning?: string;
}

interface RecyclingGuide {
  title: string;
  steps: GuideStep[];
  donts: string[];
  nairobiSpecific: string[];
  points: number;
  materialsRecovered: string[];
  environmentalImpact: string;
}

interface DeviceCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  points: number;
}

const RecyclingGuide = () => {
  const [selectedDevice, setSelectedDevice] = useState('smartphones');
  const [searchQuery, setSearchQuery] = useState('');

  const deviceCategories: DeviceCategory[] = [
    { 
      id: 'smartphones', 
      name: 'Smartphones & Phones', 
      icon: <FaMobileAlt />,
      description: 'Mobile devices, feature phones, and accessories',
      points: 50
    },
    { 
      id: 'laptops', 
      name: 'Laptops & Computers', 
      icon: <FaLaptop />,
      description: 'Laptops, desktops, and computer peripherals',
      points: 100
    },
    { 
      id: 'tablets', 
      name: 'Tablets & E-Readers', 
      icon: <FaTabletAlt />,
      description: 'Tablets, iPads, Kindle, and similar devices',
      points: 75
    },
    { 
      id: 'tvs', 
      name: 'TVs & Monitors', 
      icon: <FaTv />,
      description: 'Televisions, computer monitors, and displays',
      points: 150
    },
    { 
      id: 'printers', 
      name: 'Printers & Scanners', 
      icon: <FaPrint />,
      description: 'Printers, scanners, and multifunction devices',
      points: 80
    },
    { 
      id: 'batteries', 
      name: 'Batteries', 
      icon: <FaBatteryHalf />,
      description: 'All types of batteries and power banks',
      points: 25
    },
    { 
      id: 'audio', 
      name: 'Audio Equipment', 
      icon: <FaHeadphones />,
      description: 'Headphones, speakers, and audio systems',
      points: 40
    },
    { 
      id: 'cameras', 
      name: 'Cameras & Drones', 
      icon: <FaCamera />,
      description: 'Digital cameras, lenses, and drones',
      points: 60
    },
    { 
      id: 'gaming', 
      name: 'Gaming Consoles', 
      icon: <FaGamepad />,
      description: 'Game consoles, controllers, and accessories',
      points: 70
    },
    { 
      id: 'others', 
      name: 'Other Electronics', 
      icon: <FaEllipsisH />,
      description: 'Miscellaneous electronic devices and accessories',
      points: 30
    }
  ];

  const recyclingGuides: Record<string, RecyclingGuide> = {
    smartphones: {
      title: "Smartphone Recycling Guide",
      steps: [
        {
          step: 1,
          title: "Backup Your Data",
          description: "Save your contacts, photos, and important files to cloud storage or computer",
          tip: "Use Google Drive, iCloud, or transfer to your new device",
          nairobiTip: "Many Nairobi cyber cafes offer data backup services for a small fee"
        },
        {
          step: 2,
          title: "Factory Reset",
          description: "Completely wipe all personal data from your device",
          tip: "Go to Settings > System > Reset options > Erase all data",
          warning: "This action cannot be undone. Double-check your backups!"
        },
        {
          step: 3,
          title: "Remove SIM & SD Cards",
          description: "Take out your SIM card and any external storage",
          tip: "Keep your SIM card for your new phone or dispose separately",
          nairobiTip: "Safaricom and Airtel shops can help transfer your number to a new SIM"
        },
        {
          step: 4,
          title: "Find Recycling Center",
          description: "Locate a certified e-waste recycling facility in Nairobi",
          tip: "Use our map to find the nearest certified center",
          nairobiTip: "Look for NEMA-certified facilities for proper handling"
        }
      ],
      donts: [
        "Don't throw in regular trash",
        "Don't burn or dismantle yourself",
        "Don't sell to informal recyclers in streets",
        "Don't store indefinitely - devices lose value over time"
      ],
      nairobiSpecific: [
        "Avoid informal buyers in CBD who may export illegally",
        "Check for NEMA certification of recycling facilities",
        "Consider donating working phones to community programs",
        "Be aware of data privacy - ensure proper wiping"
      ],
      points: 50,
      materialsRecovered: ["Gold", "Silver", "Copper", "Rare Earth Metals", "Plastic"],
      environmentalImpact: "Prevents heavy metals from contaminating soil and water sources"
    },
    laptops: {
      title: "Laptop & Computer Recycling Guide",
      steps: [
        {
          step: 1,
          title: "Data Backup & Transfer",
          description: "Backup all important files, documents, and settings",
          tip: "Use external hard drives or cloud services like Google Drive",
          nairobiTip: "Nairobi tech hubs like iHub offer secure data transfer services"
        },
        {
          step: 2,
          title: "Secure Data Erasure",
          description: "Use professional software to completely wipe the hard drive",
          tip: "Use DBAN (Darik's Boot and Nuke) for thorough cleaning",
          warning: "Simple deletion doesn't remove data permanently"
        },
        {
          step: 3,
          title: "Remove Personal Components",
          description: "Take out any removable hard drives, RAM, or accessories",
          tip: "These can often be reused in other devices",
          nairobiTip: "Computer Village in Nairobi offers component testing and reuse"
        }
      ],
      donts: [
        "Don't attempt to burn circuit boards",
        "Don't dispose with regular electronic waste",
        "Don't sell to uncertified refurbishers",
        "Don't store without proper data wiping"
      ],
      nairobiSpecific: [
        "Look for KBS-certified recycling facilities",
        "Consider donating to schools if still functional",
        "Be cautious of informal computer markets",
        "Check if manufacturer has take-back program in Kenya"
      ],
      points: 100,
      materialsRecovered: ["Aluminum", "Copper", "Gold", "Plastic", "Glass"],
      environmentalImpact: "One laptop recycled saves enough energy to power a home for 24 hours"
    },
    tablets: {
      title: "Tablet & E-Reader Recycling Guide",
      steps: [
        {
          step: 1,
          title: "Backup Personal Data",
          description: "Sync your books, documents, and media to cloud services",
          tip: "Use manufacturer's cloud service or Google Drive for backup",
          nairobiTip: "Local libraries in Nairobi may help with ebook transfers"
        },
        {
          step: 2,
          title: "Perform Factory Reset",
          description: "Remove all personal accounts and data from the device",
          tip: "Sign out of all accounts before resetting",
          warning: "Ensure all purchased content is backed up or transferred"
        },
        {
          step: 3,
          title: "Remove Accessories",
          description: "Separate cases, keyboards, and stylus pens",
          tip: "Accessories can often be reused with new devices",
          nairobiTip: "Some Nairobi tech shops accept accessories for refurbishment"
        }
      ],
      donts: [
        "Don't dispose with regular household waste",
        "Don't attempt to remove the battery yourself",
        "Don't sell without proper data wiping",
        "Don't store damaged tablets that could leak battery acid"
      ],
      nairobiSpecific: [
        "Consider donating to schools or community centers",
        "Check if device can be refurbished for educational use",
        "Be aware of counterfeit tablet markets in Nairobi",
        "Look for certified e-waste handlers"
      ],
      points: 75,
      materialsRecovered: ["Glass", "Aluminum", "Lithium", "Copper", "Plastic"],
      environmentalImpact: "Prevents lithium battery fires and glass contamination"
    },
    tvs: {
      title: "TV & Monitor Recycling Guide",
      steps: [
        {
          step: 1,
          title: "Disconnect Properly",
          description: "Safely unplug all cables and remove from wall mounts",
          tip: "Take photos of cable connections for easy reinstallation of new TV",
          nairobiTip: "Many Nairobi recycling centers offer free pickup for large TVs"
        },
        {
          step: 2,
          title: "Handle with Care",
          description: "TV screens contain glass and hazardous materials",
          tip: "Use original packaging or bubble wrap for transport",
          warning: "CRT TVs contain leaded glass - handle with extra care"
        },
        {
          step: 3,
          title: "Check for Recycling Programs",
          description: "Some manufacturers have take-back programs",
          tip: "Contact the manufacturer or check their website",
          nairobiTip: "Major electronics stores in Nairobi may accept old TVs with new purchases"
        }
      ],
      donts: [
        "Never break the screen - contains hazardous materials",
        "Don't leave on the curb for informal collectors",
        "Don't attempt to dismantle yourself",
        "Don't dispose with regular bulk waste"
      ],
      nairobiSpecific: [
        "Large TVs require special handling - use certified centers",
        "Some Nairobi counties offer bulk e-waste collection days",
        "Be cautious of informal TV repair shops that may unsafe practices",
        "Plasma TVs contain mercury - requires special disposal"
      ],
      points: 150,
      materialsRecovered: ["Glass", "Copper", "Aluminum", "Plastic", "Circuit Boards"],
      environmentalImpact: "Prevents lead and mercury from contaminating groundwater"
    },
    printers: {
      title: "Printer & Scanner Recycling Guide",
      steps: [
        {
          step: 1,
          title: "Remove Ink/Toner Cartridges",
          description: "Take out all ink and toner cartridges separately",
          tip: "Many office supply stores recycle cartridges for free",
          nairobiTip: "Nairobi office supply chains often have cartridge recycling bins"
        },
        {
          step: 2,
          title: "Clear Memory",
          description: "Reset the device to factory settings if possible",
          tip: "Some printers store print history and network information",
          warning: "Ink and toner can be messy - handle carefully"
        },
        {
          step: 3,
          title: "Prepare for Transport",
          description: "Secure moving parts and wrap the device",
          tip: "Use the original box or adequate padding",
          nairobiTip: "Many Nairobi recycling centers specialize in office equipment"
        }
      ],
      donts: [
        "Don't throw in regular trash - contains hazardous materials",
        "Don't pour leftover ink down drains",
        "Don't attempt to refill cartridges improperly",
        "Don't dispose with regular electronic waste"
      ],
      nairobiSpecific: [
        "Office equipment often has higher recycling value",
        "Consider donating to schools or NGOs if functional",
        "Some Nairobi companies offer bulk office equipment recycling",
        "Check with your office supplier for take-back programs"
      ],
      points: 80,
      materialsRecovered: ["Plastic", "Steel", "Copper", "Circuit Boards", "Glass"],
      environmentalImpact: "Prevents plastic waste and toxic ink from polluting environment"
    },
    batteries: {
      title: "Battery Recycling Guide",
      steps: [
        {
          step: 1,
          title: "Sort by Type",
          description: "Separate alkaline, lithium-ion, NiMH, and lead-acid batteries",
          tip: "Different battery types require different recycling processes",
          nairobiTip: "Many Nairobi supermarkets have battery collection points"
        },
        {
          step: 2,
          title: "Safe Storage",
          description: "Store batteries in non-conductive containers",
          tip: "Use original packaging or tape terminals to prevent short circuits",
          warning: "Damaged or swollen batteries can be fire hazards"
        },
        {
          step: 3,
          title: "Find Collection Points",
          description: "Locate certified battery recycling locations",
          tip: "Many electronics stores accept batteries for recycling",
          nairobiTip: "NEMA-approved facilities handle batteries safely"
        }
      ],
      donts: [
        "Never throw batteries in regular trash",
        "Don't mix different battery types together",
        "Don't attempt to recharge non-rechargeable batteries",
        "Don't store large quantities together"
      ],
      nairobiSpecific: [
        "Car batteries can be returned to automotive shops",
        "Many phone shops in Nairobi accept old phone batteries",
        "Be cautious of informal battery collectors",
        "Laptop batteries contain valuable lithium - recycle properly"
      ],
      points: 25,
      materialsRecovered: ["Lithium", "Nickel", "Cadmium", "Lead", "Cobalt"],
      environmentalImpact: "Prevents heavy metals from leaching into soil and water"
    },
    audio: {
      title: "Audio Equipment Recycling Guide",
      steps: [
        {
          step: 1,
          title: "Test Functionality",
          description: "Check if equipment still works and could be donated",
          tip: "Many charities accept working audio equipment",
          nairobiTip: "Nairobi community centers often need audio equipment"
        },
        {
          step: 2,
          title: "Separate Components",
          description: "Disconnect speakers, amplifiers, and accessories",
          tip: "Components may have different recycling requirements",
          nairobiTip: "Some Nairobi music schools accept equipment donations"
        },
        {
          step: 3,
          title: "Remove Batteries",
          description: "Take out any batteries from remote controls or wireless devices",
          tip: "Batteries must be recycled separately",
          nairobiTip: "Electronic markets in Nairobi may buy working audio equipment"
        }
      ],
      donts: [
        "Don't dispose with regular household waste",
        "Don't burn speaker components",
        "Don't dismantle speakers yourself - may contain magnets",
        "Don't throw away working equipment that could be reused"
      ],
      nairobiSpecific: [
        "Consider donating to churches or community groups",
        "Some Nairobi DJ equipment shops accept trade-ins",
        "Vintage audio equipment may have collector value",
        "Check with local music stores for recycling programs"
      ],
      points: 40,
      materialsRecovered: ["Copper", "Magnets", "Plastic", "Steel", "Circuit Boards"],
      environmentalImpact: "Recovers valuable copper wiring and prevents plastic waste"
    },
    cameras: {
      title: "Camera & Drone Recycling Guide",
      steps: [
        {
          step: 1,
          title: "Backup Media",
          description: "Transfer all photos and videos to computer or cloud",
          tip: "Remove memory cards and format them separately",
          nairobiTip: "Nairobi photography studios may help with data transfer"
        },
        {
          step: 2,
          title: "Remove Batteries & Memory",
          description: "Take out all batteries, memory cards, and lenses",
          tip: "Lenses can often be sold or donated separately",
          nairobiTip: "Camera shops in Nairobi may buy quality lenses"
        },
        {
          step: 3,
          title: "Reset to Factory Settings",
          description: "Clear all personal settings and data",
          tip: "Remove any custom configurations or Wi-Fi settings",
          warning: "Drones may have flight data that should be cleared"
        }
      ],
      donts: [
        "Don't throw in regular trash",
        "Don't attempt to remove camera sensors",
        "Don't dispose of drones with regular electronics",
        "Don't store with batteries installed"
      ],
      nairobiSpecific: [
        "Consider donating to photography schools or clubs",
        "Some Nairobi camera shops have trade-in programs",
        "Drones require special handling due to lithium batteries",
        "Professional equipment may have resale value"
      ],
      points: 60,
      materialsRecovered: ["Glass", "Lithium", "Copper", "Plastic", "Circuit Boards"],
      environmentalImpact: "Prevents lithium battery hazards and recovers optical glass"
    },
    gaming: {
      title: "Gaming Console Recycling Guide",
      steps: [
        {
          step: 1,
          title: "Backup Game Saves",
          description: "Upload game saves to cloud storage or external drive",
          tip: "Most consoles offer cloud save features with subscription",
          nairobiTip: "Nairobi gaming cafes may help with data transfer"
        },
        {
          step: 2,
          title: "Deactivate Accounts",
          description: "Remove your accounts and personal information",
          tip: "Deactivate the console as your primary device",
          warning: "Failure to deactivate may limit your account on new devices"
        },
        {
          step: 3,
          title: "Factory Reset",
          description: "Perform complete system reset to remove all data",
          tip: "Remove game discs and accessories before reset",
          nairobiTip: "Some Nairobi game stores accept consoles for trade-in"
        }
      ],
      donts: [
        "Don't throw in regular trash",
        "Don't attempt to modify or jailbreak before recycling",
        "Don't dispose with games still inside",
        "Don't store with batteries in controllers"
      ],
      nairobiSpecific: [
        "Consider donating to youth centers or schools",
        "Older consoles may have collector value",
        "Some Nairobi electronic markets buy working consoles",
        "Check with game stores for recycling programs"
      ],
      points: 70,
      materialsRecovered: ["Plastic", "Copper", "Circuit Boards", "Aluminum", "Glass"],
      environmentalImpact: "Recovers valuable metals and prevents plastic waste"
    },
    others: {
      title: "Other Electronics Recycling Guide",
      steps: [
        {
          step: 1,
          title: "Identify Device Type",
          description: "Determine what category your electronic device falls into",
          tip: "Check for any hazardous materials labels or warnings",
          nairobiTip: "Take photos and ask at certified recycling centers for guidance"
        },
        {
          step: 2,
          title: "Remove Personal Data",
          description: "Clear any stored information or settings",
          tip: "For smart devices, perform factory reset if possible",
          warning: "Some devices may store personal information even without screens"
        },
        {
          step: 3,
          title: "Separate Components",
          description: "Disconnect any removable parts or accessories",
          tip: "Batteries, cables, and accessories should be recycled separately",
          nairobiTip: "Nairobi recycling centers can help identify proper disposal methods"
        },
        {
          step: 4,
          title: "Consult Professionals",
          description: "Contact certified recyclers for unusual electronic items",
          tip: "When in doubt, seek professional advice before disposal",
          nairobiTip: "NEMA provides guidance on unusual e-waste items in Kenya"
        }
      ],
      donts: [
        "Don't mix with regular household waste",
        "Don't burn any electronic components",
        "Don't dismantle devices containing capacitors or batteries",
        "Don't dispose of medical electronics with regular e-waste"
      ],
      nairobiSpecific: [
        "Contact NEMA for guidance on unusual electronic items",
        "Some Nairobi universities accept electronic components for research",
        "Be cautious with medical equipment - requires special handling",
        "Industrial electronics may have different recycling requirements"
      ],
      points: 30,
      materialsRecovered: ["Various Metals", "Plastics", "Circuit Components", "Glass"],
      environmentalImpact: "Prevents hazardous materials from entering the environment"
    }
  };

  const selectedGuide = recyclingGuides[selectedDevice];
  const filteredCategories = deviceCategories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">

      <section className="relative bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 text-white py-20 overflow-hidden">
  <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
  
  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-6xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
        <span className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></span>
        <span className="text-xl font-medium">Smart recycling guides</span>
      </div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        Complete recycling 
        <span className="text-yellow-300 block mt-2">guides & resources</span>
      </h1>

      <p className="text-xl text-green-100 mb-12 max-w-3xl mx-auto leading-relaxed">
        Step-by-step instructions for recycling all electronic devices in Nairobi. 
        Earn <span className="text-yellow-300 font-semibold">eco-points</span> while protecting our environment.
      </p>

      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2 shadow-2xl max-w-2xl mx-auto border border-white/20">
        <div className="relative">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-300 text-xl" />
          <input
            type="text"
            placeholder="Search for devices: smartphones, laptops, TVs, batteries..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-5 text-gray-800 rounded-xl border-0 focus:ring-2 focus:ring-yellow-300 focus:outline-none text-lg bg-white/95 backdrop-blur-sm transition-all duration-300 placeholder:text-gray-500"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <kbd className="px-2 py-1 text-xs font-mono text-gray-500 bg-gray-100 rounded border hidden sm:inline-block">⌘K</kbd>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-8 text-green-100">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-yellow-300 rounded-full"></div>
          <span className="text-2sm font-medium">50+ Device types</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-yellow-300 rounded-full"></div>
          <span className="text-2sm font-medium">Step-by-step guides</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-yellow-300 rounded-full"></div>
          <span className="text-2sm font-medium">Earn rewards</span>
        </div>
      </div>
    </div>
  </div>

  <div className="absolute bottom-0 left-0 w-full overflow-hidden">
    <svg 
      viewBox="0 0 1200 120" 
      preserveAspectRatio="none" 
      className="relative block w-full h-12"
    >
      <path 
        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
        opacity=".25" 
        className="fill-white"
      ></path>
      <path 
        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
        opacity=".5" 
        className="fill-white"
      ></path>
      <path 
        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
        className="fill-white"
      ></path>
    </svg>
  </div>
</section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Device Types</h3>
                  <div className="space-y-2">
                    {filteredCategories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedDevice(category.id)}
                        className={`w-full text-left p-4 rounded-xl transition-all ${
                          selectedDevice === category.id
                            ? 'bg-green-500 text-white shadow-md'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`text-xl ${
                            selectedDevice === category.id ? 'text-white' : 'text-green-500'
                          }`}>
                            {category.icon}
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold">{category.name}</div>
                            <div className={`text-sm ${
                              selectedDevice === category.id ? 'text-green-100' : 'text-gray-500'
                            }`}>
                              {category.points} points
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3">
                {selectedGuide && (
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="text-3xl">
                          {deviceCategories.find(cat => cat.id === selectedDevice)?.icon}
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold">{selectedGuide.title}</h2>
                          <p className="text-green-100">
                            Earn {selectedGuide.points} points for recycling this device
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-800 mb-6">Step-by-Step Guide</h3>
                      <div className="space-y-6">
                        {selectedGuide.steps.map(step => (
                          <div key={step.step} className="flex gap-6">
                            <div className="flex-shrink-0">
                              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                {step.step}
                              </div>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                                {step.title}
                              </h4>
                              <p className="text-gray-600 mb-3">{step.description}</p>
                              
                              {step.tip && (
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-2">
                                  <div className="flex items-center gap-2 text-blue-700 font-semibold mb-1">
                                    <FaCheckCircle />
                                    Pro tip
                                  </div>
                                  <p className="text-blue-600 text-sm">{step.tip}</p>
                                </div>
                              )}

                              {step.nairobiTip && (
                                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-2">
                                  <div className="flex items-center gap-2 text-green-700 font-semibold mb-1">
                                    <FaRecycle />
                                    Nairobi specific
                                  </div>
                                  <p className="text-green-600 text-sm">{step.nairobiTip}</p>
                                </div>
                              )}

                              {step.warning && (
                                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                  <div className="flex items-center gap-2 text-red-700 font-semibold mb-1">
                                    <FaExclamationTriangle />
                                    Important
                                  </div>
                                  <p className="text-red-600 text-sm">{step.warning}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-gray-50">
                      <div>
                        <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                          <FaTimesCircle className="text-red-500" />
                          What to avoid
                        </h4>
                        <ul className="space-y-2">
                          {selectedGuide.donts.map((dont, index) => (
                            <li key={index} className="flex items-start gap-2 text-gray-600">
                              <FaTimesCircle className="text-red-400 mt-1 flex-shrink-0" />
                              <span>{dont}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                          <FaRecycle className="text-green-500" />
                          Nairobi considerations
                        </h4>
                        <ul className="space-y-2">
                          {selectedGuide.nairobiSpecific.map((tip, index) => (
                            <li key={index} className="flex items-start gap-2 text-gray-600">
                              <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="p-8 border-t border-gray-200">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-xl font-bold text-gray-800 mb-4">Materials recovered</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedGuide.materialsRecovered.map((material, index) => (
                              <span 
                                key={index}
                                className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
                              >
                                {material}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-800 mb-4">Environmental impact</h4>
                          <p className="text-gray-600">{selectedGuide.environmentalImpact}</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-8 bg-gray-50 border-t border-gray-200">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link 
                          href="/findcenters"
                          className="flex-1 bg-green-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-colors text-center flex items-center justify-center gap-3"
                        >
                          <FaRecycle />
                          Find recycling centers
                          <FaArrowRight />
                        </Link>
                        <button className="flex-1 border-2 border-green-600 text-green-600 py-4 rounded-xl font-bold text-lg hover:bg-green-600 hover:text-white transition-colors flex items-center justify-center gap-3">
                          <FaDownload />
                          Download PDF guide
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqItems.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-3">
                    <FaQuestionCircle className="text-green-500" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

const faqItems = [
  {
    question: "Why can't I just throw electronics in regular trash?",
    answer: "Electronics contain hazardous materials like lead, mercury, and cadmium that can leach into soil and water. In Nairobi, this poses serious risks to communities near dumpsites like Dandora."
  },
  {
    question: "How do I know if a recycling center is certified?",
    answer: "Look for NEMA (National Environment Management Authority) certification. All centers listed on our platform are verified and certified for proper e-waste handling."
  },
  {
    question: "Can I get paid for my old electronics?",
    answer: "While you might not get cash, you earn reward points that can be redeemed for discounts, products, or environmental contributions. Some high-value devices may have buy-back programs."
  },
  {
    question: "What happens to my data when I recycle?",
    answer: "Certified centers follow strict data destruction protocols. However, we recommend you wipe your devices yourself before recycling for maximum security."
  },
  {
    question: "Are there pickup services available in Nairobi?",
    answer: "Yes, many certified centers offer pickup services for larger items or bulk recycling. Check individual center details on our map for available services."
  }
];

export default RecyclingGuide;