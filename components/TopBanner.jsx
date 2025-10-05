'use client'
export default function TopBanner() {
  return (
    <div className="bg-slate-900/50 backdrop-blur-sm border-b border-purple-500/30 py-2 px-3 sm:py-3 sm:px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center text-[10px] sm:text-xs md:text-sm">
        
        {/* Left Side */}
        <div className="flex items-center gap-4 sm:gap-4">
          <span>Budget friendly</span>
          <span className="hidden md:inline">•</span>
          <span>No. 1 in Europe</span>
          <span className="hidden md:inline">•</span>
          <span>On your first order</span>
          <span className="bg-red-500 text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full font-semibold text-[9px] sm:text-xs">
            30% OFF
          </span>
          <span className="hidden lg:inline">For all products buy now get the offer</span>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4 sm:gap-4">
          <span className="hidden sm:inline">User Friendly</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">24/7 Service</span>
        </div>
      </div>
    </div>
  );
}
