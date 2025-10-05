import React from "react";
import {
  Package,
  Phone,
  Box,
  Settings,
  Headphones,
  TrendingUp,
} from "lucide-react";

export default function HowItWorks() {
  return (
    <div className="min-h-screen  flex items-center justify-center p-6 sm:p-8">
      <div className="max-w-7xl w-full relative">
        {/* Center Circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
            {/* Circle Background */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-900/40 to-purple-950/40 backdrop-blur-sm"></div>

            {/* Solid Circle */}
            <svg
              className="w-full h-full -rotate-90"
              viewBox="0 0 320 320"
            >
              <circle
                cx="160"
                cy="160"
                r="145"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="2"
              />
              <defs>
                <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#7c3aed" />
                </linearGradient>
              </defs>
            </svg>

            {/* Numbers around circle */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3">
              <NumberCircle num="01" />
            </div>
            <div className="absolute top-10 right-2 sm:top-12 sm:right-4">
              <NumberCircle num="02" />
            </div>
            <div className="absolute bottom-16 right-2 sm:bottom-20">
              <NumberCircle num="03" />
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
              <NumberCircle num="04" />
            </div>
            <div className="absolute bottom-16 left-2 sm:bottom-20">
              <NumberCircle num="05" />
            </div>
            <div className="absolute top-10 left-2 sm:top-12 sm:left-4">
              <NumberCircle num="06" />
            </div>

            {/* Center Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                How <br /> it Works?
              </h2>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="relative z-10 flex flex-col items-center gap-6 md:gap-12">
          {/* Top Row */}
          <div className="flex flex-col md:flex-row md:justify-between w-full gap-6 md:mb-24 lg:mb-32">
            <FeatureCard
              text="Delivery and Support"
              icon={<Package className="w-5 h-5 text-white" />}
              align="right"
            />
            <FeatureCard
              text="Book a Call"
              icon={<Phone className="w-5 h-5 text-white" />}
              align="left"
            />
          </div>

          {/* Middle Row */}
          <div className="flex flex-col md:flex-row md:justify-between w-full gap-6 md:mb-24 lg:mb-32">
            <FeatureCard
              text="Quality Assurance"
              icon={<Box className="w-5 h-5 text-white" />}
              align="right"
            />
            <div className="hidden md:block w-16 sm:w-32 lg:w-72"></div>
            <FeatureCard
              text="Requirement Analysis"
              icon={<TrendingUp className="w-5 h-5 text-white" />}
              align="left"
            />
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row md:justify-between w-full gap-6">
            <FeatureCard
              text="Implement & Develop"
              icon={<Settings className="w-5 h-5 text-white" />}
              align="right"
            />
            <FeatureCard
              text="Service Customisation"
              icon={<Headphones className="w-5 h-5 text-white" />}
              align="left"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ text, icon, align = "right" }) {
  return (
    <div
      className={`bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border border-slate-700/30 rounded-full px-6 sm:px-8 py-3 sm:py-4 flex items-center gap-3 sm:gap-4 shadow-2xl ${
        align === "left" ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <span className="text-white text-sm sm:text-base font-medium whitespace-nowrap">
        {text}
      </span>
      <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-full p-2 sm:p-3 shadow-lg">
        {icon}
      </div>
    </div>
  );
}

function NumberCircle({ num }) {
  return (
    <div className="bg-purple-900/60 backdrop-blur-sm border border-purple-600/40 rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center">
      <span className="text-yellow-400 text-[10px] sm:text-xs font-bold">
        {num}
      </span>
    </div>
  );
}
