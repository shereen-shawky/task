import React from 'react';
import { Sparkles } from 'lucide-react';

export default function MetroSolverHero() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 sm:p-8 overflow-hidden">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 lg:gap-12 items-center">
        {/* Left Section */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Why You Choose Metro Solver?
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            We are constantly growing or learning and improving. Enter your personal real estate sanctuary, 
            where finding the ideal home is effortless and comfortable with our assistance.
          </p>
          <button className="mx-auto md:mx-0 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/50">
            <Sparkles className="w-5 h-5" />
            Book Now
          </button>
        </div>

        {/* Right Section */}
        <div className="relative h-auto md:h-[600px] flex flex-col gap-4 md:block">
          {/* Mobile-friendly stacked pills */}
          <div className="flex flex-col gap-4 md:hidden">
            <Pill text="Cancel Anytime" />
            <Pill text="24/7 Customer Service" big />
            <Pill text="Refers & Earn" />
            <Pill text="Money Back Guarantee" big />
          </div>

          {/* Floating pills for desktop (unchanged) */}
          <div className="hidden md:block relative w-full h-full">
            {/* Cancel Anytime */}
            <div
              className="absolute top-20 right-20 bg-gradient-to-r from-teal-900/40 to-teal-800/40 backdrop-blur-sm border border-teal-700/30 rounded-full px-8 py-4 shadow-lg"
              style={{ transform: 'rotate(-8deg)' }}
            >
              <p className="text-white text-xl font-medium">Cancel Anytime</p>
            </div>

            {/* 24/7 Customer Service */}
            <div
              className="absolute top-54 right-10 bg-gradient-to-r from-purple-900/60 to-purple-800/60 backdrop-blur-sm border border-purple-600/40 rounded-full px-12 py-6 shadow-xl shadow-purple-500/20"
              style={{ transform: 'rotate(8deg)' }}
            >
              <p className="text-white text-2xl font-semibold">24/7 Customer Service</p>
            </div>

            {/* Refers & Earn */}
            <div
              className="absolute top-89 left-80 bg-gradient-to-r from-teal-900/40 to-emerald-900/40 backdrop-blur-sm border border-teal-700/30 rounded-full px-8 py-4 shadow-lg"
              style={{ transform: 'rotate(-8deg)' }}
            >
              <p className="text-white text-xl font-medium">Refers & Earn</p>
            </div>

            {/* Money Back Guarantee */}
            <div
              className="absolute bottom-10 left-60 bg-gradient-to-r from-gray-900/60 to-gray-800/60 backdrop-blur-sm border border-gray-700/40 rounded-full px-10 py-5 shadow-xl"
            >
              <p className="text-white text-2xl font-semibold">Money Back Guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Pill({ text, big = false }) {
  return (
    <div className="bg-gradient-to-r from-gray-800/40 to-gray-700/40 backdrop-blur-sm border border-gray-600/30 rounded-full px-6 py-3 shadow-md">
      <p className={`text-white ${big ? "text-lg sm:text-xl font-semibold" : "text-base sm:text-lg font-medium"}`}>
        {text}
      </p>
    </div>
  );
}
