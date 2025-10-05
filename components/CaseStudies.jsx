'use client';

import { useState } from 'react';

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState('success');

  const tabs = [
    { id: 'success', label: 'Success Stories' },
    { id: 'case', label: 'Case Studies' },
    { id: 'blog', label: 'Blog and News' }
  ];

  const caseStudies = [
    {
      id: 1,
      title: "The Future of Metro Systems by Company",
      description: "Provide a quick introduction to your metro solver company. Highlight your mission, core expertise",
      views: "50M+ Views",
      cpa: "39% Lower CPA",
      sales: "$2M+ Sales Generated",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    },
    {
      id: 2,
      title: "The Future of Metro Systems by Company",
      description: "Provide a quick introduction to your metro solver company. Highlight your mission, core expertise",
      views: "50M+ Views",
      cpa: "39% Lower CPA",
      sales: "$2M+ Sales Generated",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      highlighted: true
    },
    {
      id: 3,
      title: "The Future of Metro Systems by Company",
      description: "Provide a quick introduction to your metro solver company. Highlight your mission, core expertise",
      views: "50M+ Views",
      cpa: "39% Lower CPA",
      sales: "$2M+ Sales Generated",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            The Success Stories,<br />Case Studies & Blog
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Based on the description of Metro Solver and the image provided, here is a 
            6-step process that Metro Solver uses to scale a customer's business
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 ${
                study.highlighted 
                  ? 'ring-2 ring-purple-500 shadow-xl shadow-purple-500/30' 
                  : ''
              }`}
            >
              {/* Card Content */}
              <div className="bg-gradient-to-b from-purple-900/40 to-gray-900/80 backdrop-blur-sm p-6 h-full">
                {/* Image */}
                <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Title */}
                <h3 className="text-white text-xl font-semibold mb-3 leading-snug">
                  {study.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-6 line-clamp-2">
                  {study.description}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-purple-900/30 rounded-lg p-3 text-center">
                    <p className="text-white font-semibold text-sm">{study.views}</p>
                  </div>
                  <div className="bg-purple-900/30 rounded-lg p-3 text-center">
                    <p className="text-white font-semibold text-sm">{study.cpa}</p>
                  </div>
                </div>

                {/* Sales Badge */}
                <div className="bg-purple-900/30 rounded-lg p-3 text-center">
                  <p className="text-white font-semibold text-sm">{study.sales}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center">
          <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 hover:scale-105">
            View More
          </button>
        </div>
      </div>
    </div>
  );
}