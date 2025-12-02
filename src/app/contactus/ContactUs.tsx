import React from 'react';
import Link from 'next/link';
import { FaHeadset, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaQuestionCircle, FaTicketAlt, FaComments } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <FaHeadset className="text-3xl text-green-600" />
            </div>
            <h1 className="text-5xl md:text-5xl font-bold text-gray-800 mb-6">
              Support & <span className="text-green-600">Contact</span>
            </h1>
            <p className="text-2xl text-gray-600 leading-relaxed mb-12 max-w-2xl mx-auto">
              We&apos;re here to help you with any questions about e-waste recycling, our services, or partnership opportunities.
            </p>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-12"></div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-green-50 rounded-lg p-6 border border-green-100">
                <FaComments className="text-3xl text-green-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-green-600 mb-1">24/7</div>
                <div className="text-xl text-gray-600 font-medium">Chat support</div>
              </div>
              <div className="bg-green-50 rounded-lg p-6 border border-green-100">
                <FaClock className="text-3xl text-green-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-green-600 mb-1">2h</div>
                <div className="text-xl text-gray-600 font-medium">Avg response</div>
              </div>
              <div className="bg-green-50 rounded-lg p-6 border border-green-100">
                <FaTicketAlt className="text-3xl text-green-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-green-600 mb-1">98%</div>
                <div className="text-xl text-gray-600 font-medium">Satisfaction</div>
              </div>
              <div className="bg-green-50 rounded-lg p-6 border border-green-100">
                <FaQuestionCircle className="text-3xl text-green-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-green-600 mb-1">50+</div>
                <div className="text-xl text-gray-600 font-medium">FAQs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">How can we help you?</h2>
            <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
              Choose the support option that works best for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 text-center group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-green-100">
              <div className="flex justify-center mb-6">
                <FaComments className="text-5xl text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Live chat</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Get instant answers from our support team. Available 24/7 for quick questions and troubleshooting.
              </p>
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors duration-300 w-full">
                Start chat
              </button>
              <div className="mt-4 flex items-center justify-center text-green-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-xl font-medium">Online now</span>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-green-100">
              <div className="flex justify-center mb-6">
                <FaEnvelope className="text-5xl text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Email support</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Send us a detailed message and we&apos;ll get back to you within 2 hours during business hours.
              </p>
              <Link href="mailto:elsaterry4@gmail.com" className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors duration-300 w-full block">
                Send message
              </Link>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-green-100">
              <div className="flex justify-center mb-6">
                <FaPhone className="text-5xl text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Phone support</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Speak directly with our support team for complex issues or immediate assistance.
              </p>
              <a href="tel:+254796825624" className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors duration-300 w-full block">
                Call now
              </a>
              <div className="mt-4 text-2sm text-gray-500">
                Mon-Fri: 9AM-6PM EST
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Send us a message</h2>
              <p className="text-2xl text-gray-600">
                Fill out the form below and we&apos;ll get back to you as soon as possible
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Partnership</option>
                    <option>Recycling Center Registration</option>
                    <option>Feedback</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea 
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <button 
                    type="submit"
                    className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors duration-300 w-full"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in touch</h2>
              <p className="text-2xl text-gray-600">
                Other ways to reach us
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <FaEnvelope className="text-3xl text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Email</h3>
                <a href="mailto:support@dropmyelectronic.com" className="text-green-600 hover:text-green-700">
                  elsaterry4@gmail.com
                </a>
                <p className="text-gray-500 text-2sm mt-2">General Inquiries</p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <FaPhone className="text-3xl text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Phone</h3>
                <a href="tel:+254 796 825624" className="text-green-600 hover:text-green-700">
                  +254 796 825624
                </a>
                <p className="text-gray-500 text-2sm mt-2">Mon-Fri: 9AM-6PM EST</p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <FaMapMarkerAlt className="text-3xl text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Office</h3>
                <p className="text-gray-600">
                  123 Green Tech Park<br />
                  Sustainability District<br />
                  Nairobi, Kenya
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
              <p className="text-2xl text-gray-600">
                Quick answers to common questions
              </p>
            </div>
            
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">{faq.question}</h3>
                  <p className="text-xl text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link href="/faq" className="text-xl text-green-600 hover:text-green-700 font-semibold">
                View All FAQs →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const faqData = [
  {
    question: "How do I find recycling centers near me?",
    answer: "Use our interactive map on the homepage to locate certified e-waste recycling centers in your area. You can filter by device type and services offered."
  },
  {
    question: "What types of electronic devices can I recycle?",
    answer: "We accept all electronic devices including smartphones, laptops, tablets, computers, printers, TVs, and small household appliances."
  },
  {
    question: "Is there a cost for recycling my electronics?",
    answer: "Most recycling is free for consumers. Some centers may charge for large items or offer buy-back programs for valuable components."
  },
  {
    question: "How can my business become a recycling partner?",
    answer: "Visit our Partnership page or contact our business development team to learn about certification and partnership opportunities."
  }
];

export default ContactUs;