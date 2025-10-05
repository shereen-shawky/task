'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const stats = [
    { number: "150", label: "Current Clients", suffix: "+" },
    { number: "25k", label: "Completed Projects", suffix: "+" },
    { number: "90", label: "Metro Solver Teams", suffix: "+" }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Katie Johnson",
      title: "Founder of Strava",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
      review: "Metro Solver with Mixer was the best solution. I am very satisfied with the team and the work they did. I am sincerely grateful for the work and effort.",
      rating: 5,
      platform: "Google",
      platformIcon: "⭐",
      bgColor: "from-purple-900/20 to-gray-900/40"
    },
    {
      id: 2,
      name: "Wade Warren",
      title: "Founder of Strava",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
      review: "Metro Solver with Mixer was the best solution. I am very satisfied with the team and the work they did. I am sincerely grateful for the work and effort.",
      rating: 5,
      platform: "Trustpilot",
      platformIcon: "⭐",
      bgColor: "from-teal-900/30 to-purple-900/40",
      highlighted: true
    },
    {
      id: 3,
      name: "Jenny Wilson",
      title: "Founder of Strava",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
      review: "Metro Solver with Mixer was the best solution. I am very satisfied with the team and the work they did. I am sincerely grateful for the work and effort.",
      rating: 5,
      platform: "Google",
      platformIcon: "⭐",
      bgColor: "from-purple-900/20 to-gray-900/40"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen  py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-900/20 to-gray-900/40 backdrop-blur-sm rounded-2xl p-8 text-center border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="flex items-center justify-center mb-2">
                <h3 className="text-5xl md:text-6xl font-bold text-white">
                  {stat.number}
                </h3>
                <span className="text-orange-400 text-4xl font-bold ml-1">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-gray-300 text-lg font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* What People Say Section */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What People Say
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Based on the description of Metro Solver and the image provided, here is a 
            6-step process that Metro Solver uses to scale a customer's business
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`relative rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 ${
                  testimonial.highlighted 
                    ? 'bg-gradient-to-br from-teal-900/30 to-purple-900/40 border-2 border-teal-400/50 shadow-xl shadow-teal-500/20 scale-105' 
                    : 'bg-gradient-to-br from-purple-900/20 to-gray-900/40 border border-purple-500/20'
                } hover:scale-105`}
              >
                {/* Avatar and Name */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover ring-2 ring-purple-500/50"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className={testimonial.highlighted ? "fill-teal-400 text-teal-400" : "fill-yellow-400 text-yellow-400"}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Name and Title */}
                <div className="mb-4">
                  <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.title}</p>
                </div>

                {/* Review Text */}
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  "{testimonial.review}"
                </p>

                {/* Platform Badge */}
                <div className="flex items-center gap-2 pt-4 border-t border-purple-500/20">
                  <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${
                    testimonial.highlighted 
                      ? 'bg-teal-900/40' 
                      : 'bg-yellow-900/40'
                  }`}>
                    <Star size={14} className={testimonial.highlighted ? "fill-teal-400 text-teal-400" : "fill-yellow-400 text-yellow-400"} />
                    <span className={`font-semibold text-sm ${
                      testimonial.highlighted ? 'text-teal-400' : 'text-white'
                    }`}>
                      {testimonial.platform}
                    </span>
                  </div>
                  <span className="text-gray-400 text-xs">Review by {testimonial.platform}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-purple-900/50 hover:bg-purple-700 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} className="text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg shadow-purple-500/50"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}