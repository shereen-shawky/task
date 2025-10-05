'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen  flex items-center justify-center p-6">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left Section */}
        <div className="text-white space-y-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src="/Frame.gif" alt="Logo" width={50} height={50} className="rounded-full object-contain" />
          </div>

          {/* Heading */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Still Have<br />A Questions?
            </h1>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <button className="w-10 h-10 bg-purple-800/50 hover:bg-purple-700 rounded-lg flex items-center justify-center transition-colors">
              <Linkedin size={20} />
            </button>
            <button className="w-10 h-10 bg-purple-800/50 hover:bg-purple-700 rounded-lg flex items-center justify-center transition-colors">
              <Facebook size={20} />
            </button>
            <button className="w-10 h-10 bg-purple-800/50 hover:bg-purple-700 rounded-lg flex items-center justify-center transition-colors">
              <Instagram size={20} />
            </button>
            <button className="w-10 h-10 bg-purple-800/50 hover:bg-purple-700 rounded-lg flex items-center justify-center transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            </button>
            <button className="w-10 h-10 bg-purple-800/50 hover:bg-purple-700 rounded-lg flex items-center justify-center transition-colors">
              <Youtube size={20} />
            </button>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="space-y-6">
          {/* Name and Email Row */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-white text-sm mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name..."
                className="w-full px-4 py-3 bg-purple-900/30 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-white text-sm mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your name..."
                className="w-full px-4 py-3 bg-purple-900/30 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
          </div>

          {/* Phone and Service Row */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-white text-sm mb-2">WhatsApp/Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your number..."
                className="w-full px-4 py-3 bg-purple-900/30 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-white text-sm mb-2">Which are You Looking for Support in?</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-purple-900/30 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors appearance-none cursor-pointer"
              >
                <option value="" className="bg-gray-900">Choose services</option>
                <option value="web-dev" className="bg-gray-900">Web Development</option>
                <option value="mobile-dev" className="bg-gray-900">Mobile Development</option>
                <option value="design" className="bg-gray-900">UI/UX Design</option>
                <option value="consulting" className="bg-gray-900">Consulting</option>
              </select>
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-white text-sm mb-2">How Can We Help?</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message goes in here..."
              rows={5}
              className="w-full px-4 py-3 bg-purple-900/30 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-purple-500/50"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}