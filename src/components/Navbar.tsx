import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Work', path: '/solutions' },
  { name: 'Services', path: '/services' },
  { name: 'Process', path: '/process' },
  { name: 'About', path: '/about' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!mobileMenuOpen) return;

    document.body.style.overflow = 'hidden';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <div className="fixed top-4 inset-x-0 z-50 px-4 md:px-8">
        <nav className="mx-auto max-w-6xl bg-paper/95 backdrop-blur-md border border-line rounded-2xl shadow-[0_2px_18px_-10px_rgba(20,19,28,0.25)]">
          <div className="relative px-5 md:px-7 h-14 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 relative z-50">
              <img
                src="/logo.png"
                alt=""
                width={28}
                height={28}
                className="w-7 h-7 shrink-0"
              />
              <span className="font-display font-extrabold tracking-[0.02em] text-ink text-[0.9375rem]">
                VERSA<span className="text-violet">LAB</span>
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  aria-current={location.pathname === link.path ? 'page' : undefined}
                  className={`text-[0.8125rem] font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-violet'
                      : 'text-muted hover:text-ink'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <Link to="/contact" className="hidden md:inline-flex btn-primary py-2.5 px-5 text-[0.8125rem]">
              Let's Talk
            </Link>

            <button
              className="md:hidden text-ink relative z-50 p-1 -mr-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            id="mobile-menu"
            className="fixed inset-0 z-40 bg-cream pt-28 px-8 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`t-h2 py-4 border-b border-line ${
                    location.pathname === link.path ? 'text-violet' : 'text-ink'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary mt-8 w-full"
              >
                Let's Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
