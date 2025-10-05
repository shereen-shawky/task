"use client";

export default function BrandLogos() {
  const brands = ["luminus", "brembo", "motorola", "luminus", "brembo"];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {brands.map((logo, i) => (
          <div
            key={i}
            className="px-6 py-4 bg-gray-800/20 backdrop-blur-sm text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold rounded-lg text-white shadow-sm text-center"
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
}
