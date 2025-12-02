import { useState } from 'react';
import Link from 'next/link';
import { FaSearch, FaPlus, FaMinus } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState('');
  
  const faqs = [
    {
      question: "What types of electronics can i recycle?",
      answer: "We accept smartphones, laptops, tablets, computers, tvs, monitors, batteries, chargers, and small home appliances. Basically anything with a plug or battery."
    },
    {
      question: "How do i prepare my devices for recycling?",
      answer: "Remove personal data by factory resetting your devices, remove sim cards and memory cards, and if possible, bring chargers and accessories along."
    },
    {
      question: "Do i get paid for recycling my electronics?",
      answer: "Yes! You earn eco-points for every device recycled. Points can be redeemed for discounts, vouchers, or donated to environmental projects."
    },
    {
      question: "Where are your recycling centers located?",
      answer: "We have centers across nairobi including westlands, parklands, karen, lavington, and the cbd. Use our find centers page to locate the nearest one."
    },
    {
      question: "How long does the recycling process take?",
      answer: "Drop-off takes about 5-10 minutes. We'll assess your device, award points immediately, and you'll receive a confirmation email within 24 hours."
    },
    {
      question: "Is my data safe when i recycle devices?",
      answer: "Absolutely. We follow strict data destruction protocols. All storage devices are securely wiped using certified software before recycling."
    },
    {
      question: "What happens to my device after i drop it off?",
      answer: "Devices are sorted, dismantled, and materials are separated. Working devices may be refurbished, others are responsibly recycled for raw materials."
    },
    {
      question: "Do you pick up devices from my home or office?",
      answer: "Yes, we offer free pick-up services for bulk recycling (5+ devices) or for businesses. Schedule a pick-up through our contact page."
    },
    {
      question: "How many points do i earn per device?",
      answer: "Points vary by device type: smartphones (50 points), laptops (100 points), tablets (40 points), tvs (80 points). See our rewards page for details."
    },
    {
      question: "Are there any items you don't accept?",
      answer: "We don't accept large appliances like refrigerators, microwaves, or air conditioners. These require specialized recycling facilities."
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-12">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 text-lg">
            Everything you need to know about recycling electronics in Nairobi
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/30 focus:outline-none shadow-sm"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          {filteredFaqs.length > 0 ? (
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-green-300 transition-colors"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full text-left p-6 flex justify-between items-center hover:bg-green-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 pr-4">
                      {faq.question}
                    </h3>
                    <span className="text-green-600 flex-shrink-0">
                      {openIndex === index ? <FaMinus /> : <FaPlus />}
                    </span>
                  </button>
                  
                  {openIndex === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No results found for "{searchTerm}"</p>
              <button 
                onClick={() => setSearchTerm('')}
                className="text-green-600 hover:text-green-700 font-medium mt-2"
              >
                Clear search
              </button>
            </div>
          )}
        </div>

        <div className="max-w-6xl mx-auto mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Browse by category
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "📱", title: "Devices & Points", color: "from-blue-100 to-blue-50" },
              { icon: "🔄", title: "Recycling Process", color: "from-green-100 to-green-50" },
              { icon: "📍", title: "Locations & Hours", color: "from-emerald-100 to-emerald-50" }
            ].map((category, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${category.color} rounded-2xl p-8 text-center border border-gray-100 hover:shadow-md transition-all cursor-pointer`}
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">{category.title}</h3>
                <p className="text-gray-600 text-sm">Common questions about this topic</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-16 text-center">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h2>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:elsaterry4@gmail.com"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors"
              >
                Email us
              </a>
              <Link 
                href="/contactus"
                className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-green-600 hover:text-white transition-colors"
              >
                Contact support
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};


export default FAQ;