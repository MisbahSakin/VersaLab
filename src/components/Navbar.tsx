import React, { useState, useEffect } from 'react';
import { Menu, X, Layers } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Process', path: '/process' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0A0F1C]/80 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group relative z-50">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-violet-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.4)]">
              <Layers className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">VersaLab</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-violet-600 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 neon-btn hover:-translate-y-0.5">
              Start a Project
            </Link>
          </div>

          <button 
            className="md:hidden text-slate-300 hover:text-white relative z-50 p-2 -mr-2 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#0A0F1C]/95 backdrop-blur-xl pt-28 px-6 md:hidden overflow-y-auto border-b border-white/10"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-medium tracking-tight ${
                    location.pathname === link.path
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-8 border-t border-white/5 mt-4">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-violet-600 text-white px-6 py-4 rounded-xl text-lg font-medium w-full neon-btn">
                  Start a Project
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
