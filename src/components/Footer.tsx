import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { intro } from '../motion';
import { site } from '../siteConfig';


const columns = [
  {
    heading: 'Company',
    links: [
      { label: 'Work', to: '/solutions' },
      { label: 'Services', to: '/services' },
      { label: 'Process', to: '/process' },
      { label: 'About', to: '/about' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Solutions', to: '/solutions' },
      { label: 'Process', to: '/process' },
      { label: 'Privacy', to: '/privacy' },
      { label: 'Contact', to: '/contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-night text-white/55 mt-auto">
      {/* ---- CTA band ---- */}
      <div className="relative overflow-hidden px-6 py-20 md:py-28">
        {/* Ambient orbs, standing in for the render in the design */}
        {/* Kept off small screens: at mobile width the orb sits behind the
            headline and drops its contrast. */}
        <div className="pointer-events-none hidden lg:block absolute -right-24 top-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle_at_35%_30%,#8b6dff,#3b1e9e_45%,#0d0b1f_75%)] opacity-70 blur-[2px]" />
        <div className="pointer-events-none hidden lg:block absolute -right-6 bottom-10 w-24 h-24 rounded-full bg-[radial-gradient(circle_at_35%_30%,#a78bfa,#4c1d95)] opacity-80" />
        <div className="pointer-events-none absolute left-[8%] top-10 w-1.5 h-1.5 rounded-full bg-violet-soft" />
        <div className="pointer-events-none absolute left-[18%] bottom-14 w-1 h-1 rounded-full bg-white/50" />
        <div className="pointer-events-none absolute left-[4%] bottom-24 w-2 h-2 rounded-full bg-violet/70" />

        <motion.div className="relative mx-auto max-w-2xl text-center" {...intro}>
          <h2 className="t-h1 text-white mb-4">
            Have an idea
            <br />
            worth <span className="t-accent !text-violet-soft">building?</span>
          </h2>
          <p className="text-white/55 text-[0.9375rem] mb-8">
            Let's turn it into something people remember.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link to="/contact" className="btn-primary">
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="btn-ghost !bg-white/5 !border-white/15 !text-white hover:!border-white/40"
            >
              {site.email}
            </a>
          </div>
        </motion.div>
      </div>

      {/* ---- Footer proper ---- */}
      <div className="border-t border-white/10 px-6 py-14">
        <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <img src="/logo.png" alt="" width={36} height={36} className="w-9 h-9 shrink-0" />
              <p className="font-display font-extrabold text-2xl tracking-[0.02em] text-white">
                VERSA<span className="text-violet-soft">LAB</span>
              </p>
            </div>
            <p className="text-[0.8125rem] text-white/60">
              Ideas <span className="text-violet-soft">→</span> Experiences
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h2 className="text-white text-[0.8125rem] font-semibold mb-4">{col.heading}</h2>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-[0.8125rem] hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="text-white text-[0.8125rem] font-semibold mb-4">Get in touch</h2>
            <ul className="space-y-2.5 text-[0.8125rem]">
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-white transition-colors">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.phoneHref} className="hover:text-white transition-colors">
                  {site.phone}
                </a>
              </li>
              <li>{site.location}</li>
            </ul>
          </div>
        </div>

        <div className="mx-auto max-w-6xl mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-2 text-[0.75rem] text-white/60">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Built with curiosity.</p>
        </div>
      </div>
    </footer>
  );
}
