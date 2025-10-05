'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState('digital');
  const [openQuestion, setOpenQuestion] = useState(0);

  const categories = [
    { id: 'digital', label: 'Digital Marketing' },
    { id: 'web', label: 'Web & Software Development' },
    { id: 'graphic', label: 'Graphic Design & Logo' },
    { id: 'multimedia', label: 'Multimedia & Video Editing' },
    { id: 'creative', label: 'Creative Writing Solutions' },
    { id: 'ecommerce', label: 'E-Commerce Solutions' },
    { id: 'refund', label: 'Refund, Earn & Cancel Policies' },
    { id: 'getting', label: 'Getting Started & General Info' },
    { id: 'general', label: 'General Policies & Customer Support' }
  ];

  const faqs = [
    {
      question: "What services do you offer in digital marketing?",
      answer: "We provide SEO, social media management, email marketing, content marketing, PPC campaigns, and more."
    },
    {
      question: "How can digital marketing help my business?",
      answer: "Digital marketing increases your online visibility, drives targeted traffic, and helps convert visitors into customers through strategic campaigns."
    },
    {
      question: "How do you measure campaign success?",
      answer: "We track KPIs such as ROI, conversion rates, traffic growth, engagement metrics, and revenue generated to measure the success of our campaigns."
    },
    {
      question: "Do you offer local SEO?",
      answer: "Yes, we specialize in local SEO to help businesses rank higher in local search results and attract nearby customers."
    }
  ];

  return (
    <div className="min-h-screen  py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-2">Got Questions?</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">We've got Answers</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Categories */}
          <div className="space-y-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`w-full text-left px-6 py-4 rounded-lg transition-all duration-300 flex items-center gap-4 ${
                  activeCategory === category.id
                    ? 'bg-transparent text-white'
                    : 'bg-transparent text-gray-400 hover:text-gray-300'
                }`}
              >
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                  activeCategory === category.id 
                    ? 'border-orange-500' 
                    : 'border-gray-500'
                }`}>
                  {activeCategory === category.id && (
                    <div className="w-2.5 h-2.5 bg-orange-500 rounded-full"></div>
                  )}
                </div>
                <span className="font-normal text-lg">{category.label}</span>
              </button>
            ))}
          </div>

          {/* Right Side - Questions */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-700"
              >
                <button
                  onClick={() => setOpenQuestion(openQuestion === index ? -1 : index)}
                  className="w-full px-0 py-5 flex items-center justify-between text-left group"
                >
                  <span className="text-white text-lg pr-4">{faq.question}</span>
                  {openQuestion === index ? (
                    <ChevronUp size={24} className="text-orange-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown size={24} className="text-gray-500 group-hover:text-orange-500 flex-shrink-0 transition-colors" />
                  )}
                </button>
                {openQuestion === index && (
                  <div className="pb-5 pr-12">
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}