'use client'
import Image from "next/image";
import { ShoppingCart, User, ChevronDown } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <Image 
            src="/frame.gif" 
            alt="Logo" 
            width={50} 
            height={50} 
            className="rounded-full object-contain"
          />
        </a>

        {/* Menu Items */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="px-6 py-2 border border-white/30 rounded-full hover:bg-white/10 transition-colors">Home</a>
          <a href="#" className="hover:text-purple-300 transition-colors">About us</a>
          <button className="flex items-center gap-1 hover:text-purple-300 transition-colors">
            Services <ChevronDown className="w-4 h-4" />
          </button>
          <a href="#" className="hover:text-purple-300 transition-colors">White label</a>
          <a href="#" className="hover:text-purple-300 transition-colors">Contact us</a>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full bg-purple-600/30 hover:bg-purple-600/50 transition-colors">
            <ShoppingCart className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-full transition-colors">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
}
