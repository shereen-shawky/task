"use client";
import { X } from "lucide-react";

export default function DiscountBanner() {
  return (
    <div className="px-3 py-2 rounded-lg inline-flex items-center gap-3 shadow-sm bg-gray-800/20 backdrop-blur-sm 
                    ml-40 max-md:ml-0 max-md:w-full max-md:justify-between max-md:px-4">
      <span className="font-semibold text-lg text-white max-sm:text-base">
        Get My 15% OFF
      </span>
      <button className="hover:bg-white/20 rounded-full p-2 transition-colors">
        <X className="w-5 h-5 text-white" />
      </button>
    </div>
  );
}
