'use client'
export default function TopBanner() {
  return (
    <div className="bg-slate-900/50 backdrop-blur-sm border-b border-purple-500/30 py-3 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-xs md:text-sm">
        <div className="flex items-center gap-6 flex-wrap">
          <span>Budget friendly</span>
          <span className="hidden md:inline">•</span>
          <span>No. 1 in Europe</span>
          <span className="hidden md:inline">•</span>
          <span>On your first order</span>
          <span className="bg-red-500 text-white px-3 py-1 rounded-full font-semibold">30% OFF</span>
          <span className="hidden lg:inline">For all products buy now get the offer</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="hidden md:inline">User Friendly</span>
          <span className="hidden md:inline">•</span>
          <span className="hidden md:inline">24/7 Service</span>
        </div>
      </div>
    </div>
  );
}
