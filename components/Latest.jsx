'use client'
import { useState } from 'react';
import { ExternalLink, Play } from 'lucide-react';

export default function LatestWorksPortfolio() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Build Your Own Gift",
      category: "E-Commerce",
      image: "bg-gradient-to-br from-red-600 to-red-800",
      span: "row-span-1"
    },
    {
      id: 2,
      title: "Mobile App Design",
      category: "UI/UX Design",
      image: "bg-gradient-to-br from-white to-gray-100",
      span: "row-span-1"
    },
    {
      id: 3,
      title: "Leading Tomorrow",
      category: "Web Design",
      image: "bg-gradient-to-br from-orange-600 to-red-600",
      span: "row-span-1"
    },
    {
      id: 4,
      title: "Data Partner Platform",
      category: "Web Development",
      image: "bg-gradient-to-br from-slate-800 to-purple-900",
      span: "row-span-2"
    },
    {
      id: 5,
      title: "The Ability",
      category: "Architecture Portfolio",
      image: "bg-gradient-to-br from-gray-200 to-gray-400",
      span: "row-span-1"
    },
    {
      id: 6,
      title: "Cyberpunk Design",
      category: "Branding",
      image: "bg-gradient-to-br from-gray-700 to-gray-900",
      span: "row-span-1"
    },
    {
      id: 7,
      title: "Digital Art NFTs",
      category: "NFT Marketplace",
      image: "bg-gradient-to-br from-lime-400 to-green-600",
      span: "row-span-2"
    },
    {
      id: 8,
      title: "Creative Agency",
      category: "Agency Website",
      image: "bg-gradient-to-br from-gray-900 to-black",
      span: "row-span-2"
    },
    {
      id: 9,
      title: "Hot Trending",
      category: "Music Platform",
      image: "bg-gradient-to-br from-gray-800 to-gray-900",
      span: "row-span-2"
    },
    {
      id: 10,
      title: "Crypto Investment",
      category: "Financial Platform",
      image: "bg-gradient-to-br from-emerald-600 to-teal-700",
      span: "row-span-2"
    },
    {
      id: 11,
      title: "Character Design",
      category: "Illustration",
      image: "bg-gradient-to-br from-yellow-400 to-orange-500",
      span: "row-span-1"
    },
    
    
    
  ];

  return (
    <div className="min-h-screen  py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-2">
              Our Latest Works
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-gray-400 text-sm">
              Based on the description of Metro Solver and the image provided, here is a 6-step process that Metro Solver uses to scale a customer's business
            </p>
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`${project.span} group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 hover:scale-[1.02]`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background */}
              <div className={`absolute inset-0 ${project.image}`}>
                {/* Overlay Pattern */}
                <div className="absolute inset-0 bg-black/20" />
                
                {/* Grid Pattern Overlay */}
                <div 
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px),
                                     repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)`
                  }}
                />
              </div>

              {/* Content Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 ${
                hoveredIndex === index ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-purple-600/80 backdrop-blur-sm text-white text-xs rounded-full font-medium">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full text-sm font-medium transition-all">
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </button>
                  </div>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className={`absolute inset-0 border-2 border-purple-500/0 group-hover:border-purple-500/50 rounded-2xl transition-all duration-300 pointer-events-none`} />

              {/* Corner Accent */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-purple-600/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Play className="w-4 h-4 text-white" />
              </div>

              {/* Number Badge */}
              <div className="absolute top-4 left-4 w-10 h-10 bg-black/50 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50 inline-flex items-center gap-2">
            View All Projects
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}