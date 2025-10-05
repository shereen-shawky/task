"use client";

export default function BrandLogos() {
  const brands = ["luminus", "brembo", "motorola", "luminus", "brembo"];

  return (
    <div className="w-full overflow-hidden bg-transparent py-12">
      <div className="flex gap-8 animate-marquee">
        {[...brands, ...brands].map((logo, i) => (
          <div
            key={i}
            className="flex-shrink-0 px-6 py-4 bg-gray-800/20 backdrop-blur-sm text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold rounded-lg text-white shadow-sm text-center"
          >
            {logo}
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </div>
  );
}
