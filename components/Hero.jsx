'use client'
import { Sparkles } from 'lucide-react';
import Image from 'next/image';
export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
  Expert to <br />
  Digitalise <br />
  <span className="inline-flex items-center gap-3">
    Your
    <Image 
      src="/Frame 1229.gif" 
      alt="Expert to Digitalise Your Growth" 
      width={250}   // smaller so it aligns better
      height={250} 
      className="rounded-lg"
    />
  </span>
</h1>
          <p className="text-gray-300 text-lg max-w-lg">
            We are constantly growing or learning and improving. Enter your the personal real estate sanctuary, where finding the ideal home is
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50">
            <Sparkles className="w-5 h-5" />
            Explore Now
          </button>
        </div>

        {/* Right Content - Full Video */}
        <div className="relative flex justify-center">
          <video
            src="/v.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto max-w-2xl rounded-xl shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}
