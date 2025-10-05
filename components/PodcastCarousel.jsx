'use client';

import { useState } from 'react';
import { Clock, Calendar, ChevronLeft, ChevronRight, Play } from 'lucide-react';

export default function PodcastCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const podcasts = [
    {
      id: 1,
      title: "How Brands Can Prepare for Black Friday & Christmas",
      duration: "30 Minute",
      date: "Mar 11, 2025",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&q=80"
    },
    {
      id: 2,
      title: "How Brands Can Prepare for Black Friday & Christmas",
      duration: "30 Minute",
      date: "Mar 11, 2025",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80"
    },
    {
      id: 3,
      title: "Digital Marketing Strategies for 2025",
      duration: "45 Minute",
      date: "Mar 15, 2025",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    },
    {
      id: 4,
      title: "Building Customer Loyalty Programs",
      duration: "35 Minute",
      date: "Mar 18, 2025",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, podcasts.length - 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, podcasts.length - 1)) % Math.max(1, podcasts.length - 1));
  };

  const visiblePodcasts = podcasts.slice(currentIndex, currentIndex + 2);

  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Did You Hear about<br />Our Podcast?
            </h1>
          </div>
          <div className="flex items-center">
            <p className="text-gray-300 text-lg">
              Based on the description of Metro Solver and the image provided, here is a 
              6-step process that Metro Solver uses to scale a customer's business
            </p>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="relative">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {visiblePodcasts.map((podcast, index) => (
              <div
                key={podcast.id}
                className="group relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer"
              >
                {/* Image with Overlay */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={podcast.image}
                    alt={podcast.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Duration Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full">
                    <Clock size={16} className="text-white" />
                    <span className="text-white text-sm font-medium">{podcast.duration}</span>
                  </div>

                  {/* Date Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full">
                    <Calendar size={16} className="text-white" />
                    <span className="text-white text-sm font-medium">{podcast.date}</span>
                  </div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-white/40 group-hover:scale-110 transition-all duration-300">
                      <Play size={28} className="text-white ml-1" fill="white" />
                    </div>
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-semibold leading-snug">
                      {podcast.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-gray-800/50 hover:bg-purple-600 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
              aria-label="Previous"
            >
              <ChevronLeft size={24} className="text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg shadow-purple-500/50"
              aria-label="Next"
            >
              <ChevronRight size={24} className="text-white" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: Math.max(1, podcasts.length - 1) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-purple-600'
                    : 'w-2 bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}