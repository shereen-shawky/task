'use client';

import { MapPin, Phone } from 'lucide-react';

export default function MapSection() {
  return (
    <div className="min-h-screen py-16 px-6 flex items-center justify-center">
      <div className="w-full max-w-7xl">
        <div className="relative rounded-3xl overflow-hidden h-[450px] bg-gradient-to-br from-slate-700 to-slate-900">
          {/* Map SVG Background */}
          <svg 
            viewBox="0 0 1200 500" 
            className="w-full h-full absolute inset-0"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* World Map Continents */}
            <g opacity="0.6" fill="#475569">
              {/* North America */}
              <path d="M100,80 L180,70 L220,90 L240,130 L220,180 L180,200 L140,190 L110,150 Z" />
              
              {/* South America */}
              <path d="M140,300 L180,280 L200,320 L190,380 L160,400 L130,380 Z" />
              
              {/* Europe */}
              <path d="M450,100 L520,95 L560,120 L540,160 L500,170 L460,150 Z" />
              
              {/* Africa */}
              <path d="M480,200 L540,190 L580,230 L590,300 L560,350 L510,360 L470,320 L460,260 Z" />
              
              {/* Asia */}
              <path d="M650,80 L750,70 L850,90 L920,110 L950,150 L940,200 L880,240 L800,260 L720,250 L670,200 L640,150 Z" />
              
              {/* Australia */}
              <path d="M850,320 L920,310 L950,340 L940,380 L900,390 L850,370 Z" />
            </g>
          </svg>

          {/* Location Pins */}
          {/* Pin 1 - North America (Left) */}
          <div className="absolute top-[25%] left-[10%]">
            <MapPin size={36} className="text-orange-400 drop-shadow-lg animate-bounce" fill="#fb923c" />
          </div>

          {/* Pin 2 - Europe (Center-top) */}
          <div className="absolute top-[26%] left-[42%]">
            <MapPin size={36} className="text-orange-400 drop-shadow-lg animate-bounce" fill="#fb923c" style={{ animationDelay: '0.2s' }} />
          </div>

          {/* Pin 3 - South America (Bottom-left) */}
          <div className="absolute top-[70%] left-[13%]">
            <MapPin size={36} className="text-orange-400 drop-shadow-lg animate-bounce" fill="#fb923c" style={{ animationDelay: '0.4s' }} />
          </div>

          {/* Pin 4 - Asia/Australia (Right) */}
          <div className="absolute top-[68%] left-[82%]">
            <MapPin size={36} className="text-orange-400 drop-shadow-lg animate-bounce" fill="#fb923c" style={{ animationDelay: '0.6s' }} />
          </div>

          {/* Info Card */}
          <div className="absolute top-[18%] right-[8%] bg-gray-900/95 backdrop-blur-md rounded-2xl p-6 w-80 shadow-2xl border border-gray-700/50">
            {/* Header */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-gray-900 font-bold text-sm">#1</span>
              </div>
              <h3 className="text-white text-xl font-semibold">Metro solver</h3>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                  <MapPin size={20} className="text-purple-400" />
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Head office: Metro Solver Limited Grantham Road, London E12 5LX, United Kingdom
                </p>
              </div>

              {/* Phone 1 */}
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 flex-shrink-0">
                  <Phone size={20} className="text-purple-400" />
                </div>
                <p className="text-gray-300 text-sm">+447936 455446</p>
              </div>

              {/* Phone 2 */}
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 flex-shrink-0">
                  <Phone size={20} className="text-purple-400" />
                </div>
                <p className="text-gray-300 text-sm">+447464850205</p>
              </div>

              {/* Additional Info */}
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-400">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <p className="text-gray-300 text-sm">02044844</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}