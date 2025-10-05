'use client'
import { useState } from 'react';
import { Play, Volume2 } from 'lucide-react';

export default function VideoPlayerSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="max-w-5xl w-full">
        {/* Video Player Container */}
        <div className="relative group cursor-pointer rounded-3xl overflow-hidden shadow-2xl">
          {/* Video Thumbnail */}
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
            alt="Team collaboration meeting"
            className="w-full h-auto object-cover"
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />

          {/* Play Button */}
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 rounded-full flex items-center justify-center transition-all transform group-hover:scale-110 shadow-2xl shadow-purple-500/50 group-hover:shadow-purple-500/80"
          >
            <Play className="w-10 h-10 md:w-14 md:h-14 text-white ml-2" fill="white" />
          </button>

         
        </div>
      </div>
    </div>
  );
}