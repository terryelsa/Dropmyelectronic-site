"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  FaSearch, FaGavel, FaUniversity, FaUserTie, FaDownload, 
  FaBook, FaExclamationTriangle, FaHandshake, FaListAlt, 
  FaClipboardCheck, FaCalendarAlt, FaCheckCircle, FaQuestionCircle, FaBalanceScale, FaIndustry
} from 'react-icons/fa';

const Regulations = () => {
  const [activeCategory, setActiveCategory] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');

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

      <section className="relative bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 text-white py-20 -mt-28 overflow-hidden">
  <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
  
  <div className="absolute top-20 left-20 text-3xl opacity-20">⚖️</div>
  <div className="absolute bottom-32 right-32 text-2xl opacity-25">📜</div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-6xl mx-auto text-center">
      <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8">
        <FaGavel className="text-yellow-300 text-lg" />
        <span className="text-yellow-300 font-semibold tracking-wide">LEGAL FRAMEWORK</span>
        <div className="w-1 h-1 bg-yellow-300 rounded-full"></div>
      </div>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        E-waste regulations in{' '}
        <span className="text-yellow-300 bg-gradient-to-r from-yellow-300 to-amber-300 bg-clip-text text-transparent">
          Kenya
        </span>
      </h1>
      
      <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
        Your complete guide to Kenyan e-waste laws, compliance requirements, and environmental policies. 
        Stay informed and protect your business.
      </p>

      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2 shadow-2xl max-w-2xl mx-auto border border-white/20">
        <div className="relative">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-yellow-300 text-xl" />
          <input
            type="text"
            placeholder="Search regulations, compliance, penalties, NEMA guidelines..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-20 py-5 text-gray-900 rounded-xl border-0 focus:ring-2 focus:ring-yellow-300 focus:outline-none text-lg bg-white/95 backdrop-blur-sm transition-all duration-300 placeholder:text-gray-500"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <kbd className="px-2 py-1 text-xs font-mono text-gray-500 bg-gray-100 rounded border hidden sm:inline-block">⌘F</kbd>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mt-8">
        {['NEMA guidelines', 'EPRA compliance', 'Penalties', 'Extended producer responsibility', 'Waste management act'].map((tag) => (
          <button
            key={tag}
            className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-blue-100 text-2sm hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            {tag}
          </button>
        ))}
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

      <section className="py-12 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sticky top-4">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <FaListAlt className="text-blue-600" />
              Regulation categories
            </h3>
            <div className="space-y-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                      : 'bg-gray-50 text-gray-700 hover:bg-blue-50 hover:text-blue-700 border border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`text-xl ${
                      activeCategory === category.id ? 'text-white' : 'text-blue-600'
                    }`}>
                      {category.icon}
                    </div>
                    <div className="font-semibold text-sm">{category.name}</div>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaClipboardCheck className="text-green-600" />
                Quick compliance check
              </h4>
              <div className="space-y-3">
                {complianceChecklist.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <FaCheckCircle className="text-green-500 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-800">{item.item}</div>
                      <div className="text-xs text-gray-500 mt-1">
                        <span className="font-semibold">{item.required}</span> • {item.deadline}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-slate-800 via-blue-900 to-indigo-900 text-white p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{selectedRegulation.title}</h2>
                    <p className="text-blue-100 text-lg leading-relaxed">{selectedRegulation.description}</p>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:text-right">
                    <div className="flex items-center gap-2 text-blue-200 justify-center lg:justify-end">
                      <FaUniversity className="text-yellow-300" />
                      <span className="font-semibold">{selectedRegulation.authority}</span>
                    </div>
                    <div className="text-blue-200 text-sm mt-1 flex items-center gap-1 justify-center lg:justify-end">
                      <FaCalendarAlt className="text-xs" />
                      Updated: {new Date(selectedRegulation.lastUpdated).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8">
              <article 
                className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-gray-800 prose-table:text-gray-700 prose-a:text-blue-600 hover:prose-a:text-blue-700"
                dangerouslySetInnerHTML={{ __html: selectedRegulation.content }}
              />
            </div>

            <div className="p-8 bg-gradient-to-r from-gray-50 to-blue-50 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <FaQuestionCircle className="text-blue-600" />
                Need help with compliance?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link 
                  href="/contact" 
                  className="group bg-white border border-blue-200 p-6 rounded-xl text-center hover:shadow-lg hover:border-blue-300 transition-all duration-300"
                >
                  <FaUserTie className="text-2xl text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="font-bold text-gray-800 mb-1">Consult experts</div>
                  <div className="text-gray-600 text-2sm">Get professional legal guidance</div>
                </Link>
                <a 
                  href="#" 
                  className="group bg-white border border-green-200 p-6 rounded-xl text-center hover:shadow-lg hover:border-green-300 transition-all duration-300"
                >
                  <FaDownload className="text-2xl text-green-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="font-bold text-gray-800 mb-1">Download guides</div>
                  <div className="text-gray-600 text-2sm">Compliance checklists & templates</div>
                </a>
                <Link 
                  href="/education" 
                  className="group bg-white border border-purple-200 p-6 rounded-xl text-center hover:shadow-lg hover:border-purple-300 transition-all duration-300"
                >
                  <FaBook className="text-2xl text-purple-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="font-bold text-gray-800 mb-1">Learn more</div>
                  <div className="text-gray-600 text-2sm">Educational resources & training</div>
                </Link>
              </div>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 border border-yellow-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <FaExclamationTriangle className="text-yellow-600 text-2xl" />
                <h3 className="text-xl font-bold text-gray-800">Important updates</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>New EPR regulations effective July 2024</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Updated import restrictions on used electronics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>County licensing requirements being standardized</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Enhanced penalties for illegal dumping</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <FaHandshake className="text-green-600 text-2xl" />
                <h3 className="text-xl font-bold text-gray-800">Government partners</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>National Environment Management Authority (NEMA)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Kenya Bureau of Standards (KEBS)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>County Governments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Ministry of Environment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</section>

</div>
  );
};

export default Regulations;