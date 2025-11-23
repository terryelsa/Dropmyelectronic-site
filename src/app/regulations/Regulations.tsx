"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  FaGavel,
  FaFileAlt,
  FaShieldAlt,
  FaExclamationTriangle,
  FaCheckCircle,
  FaIndustry,
  FaUserTie,
  FaBalanceScale,
  FaSearch,
  FaDownload,
  FaArrowRight,
  FaBook,
  FaUniversity,
  FaHandshake,
  FaAward
} from 'react-icons/fa';

const Regulations = () => {
  const [activeCategory, setActiveCategory] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');

  // Kenyan e-waste regulations and laws
  const regulationsData = {
    overview: {
      title: "Kenyan E-Waste Regulatory Framework",
      description: "Understanding the legal landscape governing electronic waste management in Kenya",
      content: `
        <p>Kenya has developed a comprehensive regulatory framework to address the growing challenge of electronic waste. The primary legislation is guided by the Environmental Management and Co-ordination Act (EMCA) and supported by various regulations and standards.</p>
        
        <h3>Key Regulatory Bodies</h3>
        <ul>
          <li><strong>National Environment Management Authority (NEMA)</strong> - Primary regulator</li>
          <li><strong>Kenya Bureau of Standards (KEBS)</strong> - Standards development</li>
          <li><strong>County Governments</strong> - Local implementation and enforcement</li>
          <li><strong>Water Resources Authority (WRA)</strong> - Water pollution control</li>
        </ul>

        <h3>Legal Foundation</h3>
        <p>The regulatory framework is built on the "polluter pays" principle and extended producer responsibility (EPR), making manufacturers and importers responsible for the entire lifecycle of their products.</p>
      `,
      lastUpdated: "2024-01-15",
      authority: "NEMA Kenya"
    },
    emca: {
      title: "Environmental Management & Coordination Act",
      description: "The primary legislation governing environmental protection and waste management in Kenya",
      content: `
        <h3>EMCA 1999 & Amendments</h3>
        <p>The Environmental Management and Co-ordination Act provides the legal basis for all environmental management in Kenya, including electronic waste.</p>

        <h4>Key Provisions for E-Waste:</h4>
        <ul>
          <li><strong>Section 3:</strong> Fundamental principles of environmental management</li>
          <li><strong>Section 42:</strong> Control of hazardous wastes and materials</li>
          <li><strong>Section 87:</strong> Environmental impact assessment requirements</li>
          <li><strong>Section 100:</strong> Waste management licenses and permits</li>
        </ul>

        <h3>EMCA (Waste Management) Regulations 2006</h3>
        <p>These specific regulations under EMCA provide detailed requirements for waste management:</p>
        <ul>
          <li>Classification of hazardous wastes</li>
          <li>Transportation requirements</li>
          <li>Storage and disposal standards</li>
          <li>Record-keeping obligations</li>
        </ul>

        <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">
          <h4 class="font-semibold text-blue-800 mb-2">Legal Requirement</h4>
          <p class="text-blue-700">All e-waste handlers must obtain a license from NEMA and comply with the Waste Management Regulations.</p>
        </div>
      `,
      lastUpdated: "2024-01-10",
      authority: "National Assembly of Kenya"
    },
    extendedProducer: {
      title: "Extended Producer Responsibility (EPR)",
      description: "Requirements for manufacturers and importers to manage product end-of-life",
      content: `
        <h3>EPR Framework in Kenya</h3>
        <p>Kenya has adopted Extended Producer Responsibility as a key strategy for managing e-waste, making producers responsible for their products throughout the lifecycle.</p>

        <h4>Producer Obligations:</h4>
        <ul>
          <li>Register with NEMA as a producer of electronic equipment</li>
          <li>Develop and implement take-back systems</li>
          <li>Establish collection and recycling infrastructure</li>
          <li>Meet annual collection and recycling targets</li>
          <li>Submit annual returns to NEMA</li>
          <li>Finance e-waste management activities</li>
        </ul>

        <h4>Applicable Products:</h4>
        <div class="grid grid-cols-2 gap-2 my-4">
          <div class="bg-gray-50 p-2 rounded">Computers & Laptops</div>
          <div class="bg-gray-50 p-2 rounded">Mobile Phones</div>
          <div class="bg-gray-50 p-2 rounded">Televisions</div>
          <div class="bg-gray-50 p-2 rounded">Printers & Scanners</div>
          <div class="bg-gray-50 p-2 rounded">Refrigerators</div>
          <div class="bg-gray-50 p-2 rounded">Air Conditioners</div>
        </div>

        <div class="bg-green-50 border border-green-200 rounded-lg p-4 my-4">
          <h4 class="font-semibold text-green-800 mb-2">Compliance Benefit</h4>
          <p class="text-green-700">Companies with EPR schemes may receive preferential treatment in government procurement and enjoy enhanced brand reputation.</p>
        </div>
      `,
      lastUpdated: "2024-01-20",
      authority: "NEMA & KEBS"
    },
    importExport: {
      title: "Import & Export Controls",
      description: "Regulations governing cross-border movement of electronic equipment and e-waste",
      content: `
        <h3>Import Controls</h3>
        <p>Kenya has strict controls on the importation of electronic equipment to prevent dumping of e-waste:</p>

        <h4>Pre-shipment Requirements:</h4>
        <ul>
          <li>KEBS certification for new equipment</li>
          <li>Age restrictions on used equipment (typically max 5 years)</li>
          <li>Functionality testing requirements</li>
          <li>Environmental bond for certain categories</li>
        </ul>

        <h4>Prohibited Imports:</h4>
        <ul>
          <li>Non-functional electronic equipment</li>
          <li>Equipment containing banned substances (e.g., certain flame retardants)</li>
          <li>CRT monitors and televisions</li>
          <li>Equipment without RoHS compliance</li>
        </ul>

        <h3>Export Controls</h3>
        <p>Export of e-waste from Kenya is strictly regulated under the Basel Convention:</p>
        <ul>
          <li>Prior informed consent requirement</li>
          <li>NEMA export permit mandatory</li>
          <li>Only to countries with adequate recycling facilities</li>
          <li>Complete documentation and tracking</li>
        </ul>

        <div class="bg-red-50 border border-red-200 rounded-lg p-4 my-4">
          <h4 class="font-semibold text-red-800 mb-2">Important Notice</h4>
          <p class="text-red-700">Illegal import or export of e-waste can result in fines up to KES 5,000,000 and/or imprisonment for up to 5 years.</p>
        </div>
      `,
      lastUpdated: "2024-01-18",
      authority: "Kenya Revenue Authority & NEMA"
    },
    penalties: {
      title: "Penalties & Enforcement",
      description: "Legal consequences for non-compliance with e-waste regulations",
      content: `
        <h3>Enforcement Powers</h3>
        <p>NEMA and county governments have extensive powers to enforce e-waste regulations:</p>

        <h4>Enforcement Actions:</h4>
        <ul>
          <li>Site inspections and audits</li>
          <li>Sample collection and analysis</li>
          <li>Compliance notices</li>
          <li>License suspension or revocation</li>
          <li>Product seizure</li>
          <li>Prosecution in environmental courts</li>
        </ul>

        <h3>Penalties for Non-Compliance</h3>
        <div class="overflow-x-auto">
          <table class="min-w-full bg-white border border-gray-200">
            <thead>
              <tr class="bg-gray-50">
                <th class="px-4 py-2 border text-left">Offense</th>
                <th class="px-4 py-2 border text-left">Fine</th>
                <th class="px-4 py-2 border text-left">Imprisonment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px-4 py-2 border">Operating without license</td>
                <td class="px-4 py-2 border">KES 1,000,000</td>
                <td class="px-4 py-2 border">Up to 2 years</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border">Illegal dumping</td>
                <td class="px-4 py-2 border">KES 2,000,000</td>
                <td class="px-4 py-2 border">Up to 3 years</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border">Illegal import/export</td>
                <td class="px-4 py-2 border">KES 5,000,000</td>
                <td class="px-4 py-2 border">Up to 5 years</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border">False reporting</td>
                <td class="px-4 py-2 border">KES 500,000</td>
                <td class="px-4 py-2 border">Up to 1 year</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Environmental Restoration Orders</h3>
        <p>Courts may issue environmental restoration orders requiring offenders to:</p>
        <ul>
          <li>Clean up contaminated sites</li>
          <li>Restore damaged ecosystems</li>
          <li>Compensate affected communities</li>
          <li>Implement environmental management plans</li>
        </ul>
      `,
      lastUpdated: "2024-01-22",
      authority: "Environment and Land Court"
    }
  };

  const categories = [
    { id: 'overview', name: 'Overview', icon: <FaBook /> },
    { id: 'emca', name: 'EMCA Law', icon: <FaGavel /> },
    { id: 'extendedProducer', name: 'EPR Framework', icon: <FaIndustry /> },
    { id: 'importExport', name: 'Import/Export', icon: <FaBalanceScale /> },
    { id: 'penalties', name: 'Penalties', icon: <FaExclamationTriangle /> }
  ];

  const complianceChecklist = [
    { item: "NEMA License Obtained", required: "Mandatory", deadline: "Before operation" },
    { item: "EPR Plan Submitted", required: "For producers", deadline: "Annual" },
    { item: "Waste Tracking Records", required: "Mandatory", deadline: "Continuous" },
    { item: "Staff Training Completed", required: "Mandatory", deadline: "Annual" },
    { item: "Environmental Audit", required: "Mandatory", deadline: "Every 2 years" },
    { item: "Annual Returns to NEMA", required: "Mandatory", deadline: "March 31st" }
  ];

  const selectedRegulation = regulationsData[activeCategory as keyof typeof regulationsData];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Component */}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
              <FaGavel className="text-blue-300" />
              <span className="text-blue-300 font-semibold">Legal Framework</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              E-Waste <span className="text-yellow-300">Regulations</span> in Kenya
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Comprehensive guide to Kenyan laws, policies, and compliance requirements for electronic waste management. Stay informed and compliant.
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-xl p-2 shadow-2xl max-w-2xl mx-auto">
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search regulations, compliance, penalties..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-gray-800 rounded-lg border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              
              {/* Categories Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Regulation Categories</h3>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`w-full text-left p-4 rounded-xl transition-all ${
                          activeCategory === category.id
                            ? 'bg-blue-500 text-white shadow-md'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`text-xl ${
                            activeCategory === category.id ? 'text-white' : 'text-blue-500'
                          }`}>
                            {category.icon}
                          </div>
                          <div className="font-semibold">{category.name}</div>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Quick Compliance Checklist */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="text-lg font-bold text-gray-800 mb-4">Quick Compliance Check</h4>
                    <div className="space-y-3">
                      {complianceChecklist.map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <FaCheckCircle className="text-green-500 flex-shrink-0" />
                          <div className="flex-1">
                            <div className="text-sm font-medium text-gray-800">{item.item}</div>
                            <div className="text-xs text-gray-500">
                              {item.required} • {item.deadline}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Regulation Content */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  {/* Regulation Header */}
                  <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div>
                        <h2 className="text-3xl font-bold mb-2">{selectedRegulation.title}</h2>
                        <p className="text-blue-100 text-lg">{selectedRegulation.description}</p>
                      </div>
                      <div className="mt-4 lg:mt-0 lg:text-right">
                        <div className="flex items-center gap-2 text-blue-200">
                          <FaUniversity />
                          <span>{selectedRegulation.authority}</span>
                        </div>
                        <div className="text-blue-200 text-sm mt-1">
                          Last updated: {new Date(selectedRegulation.lastUpdated).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Regulation Content */}
                  <div className="p-8">
                    <article 
                      className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-gray-800 prose-table:text-gray-700"
                      dangerouslySetInnerHTML={{ __html: selectedRegulation.content }}
                    />
                  </div>

                  {/* Action Section */}
                  <div className="p-8 bg-gray-50 border-t border-gray-200">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Need Help with Compliance?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Link 
                        href="/contact" 
                        className="bg-blue-600 text-white p-4 rounded-lg text-center hover:bg-blue-700 transition-colors"
                      >
                        <FaUserTie className="text-xl mx-auto mb-2" />
                        <div className="font-semibold">Consult Experts</div>
                        <div className="text-blue-100 text-sm">Get professional guidance</div>
                      </Link>
                      <a 
                        href="#" 
                        className="bg-green-600 text-white p-4 rounded-lg text-center hover:bg-green-700 transition-colors"
                      >
                        <FaDownload className="text-xl mx-auto mb-2" />
                        <div className="font-semibold">Download Guides</div>
                        <div className="text-green-100 text-sm">Compliance checklists</div>
                      </a>
                      <Link 
                        href="/education" 
                        className="bg-purple-600 text-white p-4 rounded-lg text-center hover:bg-purple-700 transition-colors"
                      >
                        <FaBook className="text-xl mx-auto mb-2" />
                        <div className="font-semibold">Learn More</div>
                        <div className="text-purple-100 text-sm">Educational resources</div>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Additional Resources */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <FaExclamationTriangle className="text-yellow-600 text-2xl" />
                      <h3 className="text-xl font-bold text-gray-800">Important Updates</h3>
                    </div>
                    <ul className="space-y-2 text-gray-600">
                      <li>• New EPR regulations effective July 2024</li>
                      <li>• Updated import restrictions on used electronics</li>
                      <li>• County licensing requirements being standardized</li>
                      <li>• Enhanced penalties for illegal dumping</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <FaHandshake className="text-green-600 text-2xl" />
                      <h3 className="text-xl font-bold text-gray-800">Government Partners</h3>
                    </div>
                    <ul className="space-y-2 text-gray-600">
                      <li>• National Environment Management Authority (NEMA)</li>
                      <li>• Kenya Bureau of Standards (KEBS)</li>
                      <li>• County Governments</li>
                      <li>• Ministry of Environment</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stay <span className="text-yellow-300">Compliant</span>, Stay <span className="text-green-300">Protected</span>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ensure your business or organization meets all Kenyan e-waste regulations with our comprehensive compliance tools and expert guidance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <FaUserTie />
              Compliance Consultation
              <FaArrowRight />
            </Link>
            <a 
              href="#" 
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <FaDownload />
              Download Regulations
            </a>
          </div>
        </div>
      </section>

      {/* Footer Component */}
    </div>
  );
};

export default Regulations;