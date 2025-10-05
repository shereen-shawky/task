'use client';
import Image from 'next/image';
import { useState } from 'react';
import { MapPin, Phone, Mail, ChevronDown } from 'lucide-react';

export default function FooterNewsletter() {
  const [email, setEmail] = useState('');
  const [currency, setCurrency] = useState('gbp');

  const handleSubscribe = () => {
    console.log('Subscribing:', email);
  };

  return (
    <div className="bg-[#0a0515] min-h-screen text-white">
      {/* Newsletter Section */}
      <div className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-[#1a1530]/60 to-[#0f0a20]/60 backdrop-blur-sm rounded-[2rem] p-6 sm:p-10 md:p-12 border border-purple-900/30">
            <div className="flex flex-col items-center text-center gap-6">
              
              {/* Center Logo + Text */}
              <div className="flex flex-col items-center gap-3">
                <Image 
                  src="/Frame.gif" 
                  alt="Logo" 
                  width={60} 
                  height={60} 
                  className="rounded-full object-contain"
                />
                <div className="mt-1">
                  <div className="font-bold text-sm sm:text-base tracking-widest">METRO SOLVER</div>
                  <div className="text-purple-400 text-[11px] sm:text-sm italic">your IT Partner</div>
                </div>
              </div>

              {/* Input + Button Row (inline with button inside input) */}
              <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="m-2 text-center sm:text-left">
                  <h2 className="text-lg sm:text-2xl font-bold mb-1">Subscribe to Our Newsletter</h2>
                  <p className="text-gray-400 text-xs sm:text-sm">Join the 250,000+ clients in our community</p>
                </div>

                {/* Input wrapper */}
                <div className="relative w-full sm:w-80">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-4 pr-24 py-2.5 sm:py-3 bg-transparent border border-purple-500/40 rounded-full text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-purple-500"
                  />
                  <button
                    onClick={handleSubscribe}
                    className="absolute right-1 top-1 bottom-1 px-4 sm:px-6 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full transition-all text-xs sm:text-sm flex items-center justify-center"
                  >
                    ✨ Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="px-4 sm:px-6 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 mb-12">
            
            {/* Column 1 - Contact */}
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-xl sm:text-2xl font-bold mb-1">Got Questions?</h3>
              <h4 className="text-lg sm:text-xl font-bold mb-6">Call us!</h4>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-2 sm:gap-3">
                  <MapPin size={14} className="text-purple-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-400 text-[11px] sm:text-xs leading-relaxed">
                    Head office: Metro Solver Limited<br />
                    Grantham Road, London E12<br />
                    5LX, United Kingdom
                  </p>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <Phone size={14} className="text-purple-400 flex-shrink-0" />
                  <p className="text-gray-400 text-[11px] sm:text-xs">+447936 455446</p>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <Mail size={14} className="text-purple-400 flex-shrink-0" />
                  <p className="text-gray-400 text-[11px] sm:text-xs">official@metrosolver.com</p>
                </div>
              </div>

              {/* Currency Selector */}
              <div>
                <label className="block text-gray-500 text-[10px] sm:text-xs mb-1.5">Country Currency</label>
                <div className="relative">
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="w-full appearance-none px-3 sm:px-4 py-2 bg-transparent border border-purple-500/30 rounded-lg text-white text-[11px] sm:text-xs focus:outline-none focus:border-purple-500 cursor-pointer pr-8"
                  >
                    <option value="gbp" className="bg-gray-900">🇬🇧 GBP - British Pound</option>
                    <option value="usd" className="bg-gray-900">🇺🇸 USD - US Dollar</option>
                    <option value="eur" className="bg-gray-900">🇪🇺 EUR - Euro</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Generic column map */}
            {[
              { title: 'Company', links: ['Home', 'About us', 'Our Team', 'Use Cases', 'White Labelling'] },
              { title: 'About Us', links: ['Our Stories', 'Career', 'Send Message', 'Blog'] },
              { title: 'Support', links: ['Help Center', 'Contact Us', 'Privacy Policy', 'Terms & Conditions', 'Start Earning'] },
              { title: 'Services', links: ['Digital Marketing', 'Creative Writing', 'Web & Software Development', 'E-Commerce Solution', 'Graphic Design', 'Video Editing', 'Merchandise Store', 'Premium Website', 'Premium Domains', 'Special Combo'] },
            ].map((section, i) => (
              <div key={i}>
                <h5 className="text-white font-semibold mb-3 sm:mb-4 text-[11px] sm:text-xs uppercase tracking-wide">{section.title}</h5>
                <ul className="space-y-2">
                  {section.links.map((link, j) => (
                    <li key={j}>
                      <a href="#" className="text-gray-400 hover:text-purple-400 text-[10px] sm:text-xs transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Partners */}
          <div className="mb-8">
            <p className="text-gray-500 text-[10px] sm:text-xs mb-3">Our Future Partners</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {[
                ['Meta', 'Business Partner'],
                ['Google Marketing Platform', 'Sales Partner'],
                ['Microsoft', 'Partner'],
                ['AWS', 'Partner'],
                ['Semrush', 'Partner'],
                ['amazon.com', ''],
                ['TikTok', 'Marketing Partners'],
              ].map(([name, desc], i) => (
                <div key={i} className="text-gray-500 text-[10px] sm:text-xs">
                  <div className="font-bold">{name}</div>
                  {desc && <div className="text-[9px]">{desc}</div>}
                </div>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-4 sm:pt-6 flex flex-col sm:flex-row justify-between text-gray-500 text-[9px] sm:text-[10px] gap-2 sm:gap-0 text-center sm:text-left">
            <p>© Metro Solver. All Rights Reserved 2026</p>
            <p>Metro Solver Ltd Incorporated in England + Wales · Reg No 11787118</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
