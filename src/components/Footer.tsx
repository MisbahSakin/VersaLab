import React from 'react';
import { Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0A0F1C] text-slate-400 py-16 mt-auto border-t border-white/5 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-white/5 pb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                <Layers className="text-white w-4 h-4" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">VersaLab</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-500">
              High-performance global teams building scalable digital products with next-gen engineering.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services" className="hover:text-cyan-400 transition-colors">Product Design</Link></li>
              <li><Link to="/services" className="hover:text-cyan-400 transition-colors">Web & SaaS Development</Link></li>
              <li><Link to="/services" className="hover:text-cyan-400 transition-colors">Branding Systems</Link></li>
              <li><Link to="/services" className="hover:text-cyan-400 transition-colors">Academic Companion</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link to="/process" className="hover:text-cyan-400 transition-colors">Process</Link></li>
              <li><Link to="/solutions" className="hover:text-cyan-400 transition-colors">Case Studies</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-400 transition-colors">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-[#0F172A]/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white w-full focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all placeholder:text-slate-600"
              />
              <button className="neon-btn bg-gradient-to-r from-blue-600 to-violet-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} VersaLab Inc. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
