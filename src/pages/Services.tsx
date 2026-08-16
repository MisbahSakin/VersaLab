import { Palette, Code2, Sparkles, GraduationCap, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { fadeUp, intro } from '../motion';
import { Description } from '../Seo';

// Deliberately unnumbered: these are a set, not a sequence.
const services = [
  {
    icon: Palette,
    title: 'Product design',
    description:
      'We craft interfaces that survive contact with real users. The process bridges business objectives and what people actually do, so every interaction earns its place.',
    deliverables: ['UI/UX design', 'Interactive prototyping', 'User research & testing', 'Design systems'],
    useCases: ['Complex SaaS dashboards', 'Consumer mobile applications', 'Enterprise internal portals'],
  },
  {
    icon: Code2,
    title: 'Web & SaaS engineering',
    description:
      'Scalable architectures on modern stacks. Robust frontends and secure, highly-available backends built to handle production traffic without heroics.',
    deliverables: ['Frontend (React, Vue)', 'Backend APIs (Node, Python, Go)', 'Cloud architecture (AWS, GCP)', 'Database design'],
    useCases: ['B2B SaaS platforms', 'High-traffic marketplaces', 'Data-intensive applications'],
  },
  {
    icon: Sparkles,
    title: 'Branding systems',
    description:
      'Identity work built to be applied rather than admired. Scalable systems that stay consistent across every digital touchpoint and hold up as the product grows.',
    deliverables: ['Brand strategy & positioning', 'Logo & visual identity', 'Typography & color systems', 'Brand guidelines'],
    useCases: ['Rebranding legacy systems', 'Launching new products', 'Standardizing UI across product suites'],
  },
  {
    icon: GraduationCap,
    title: 'Academic companion',
    description:
      'Specialized technical work for advanced research and complex IoT implementations. End-to-end hardware-software integration with documentation that holds up to review.',
    deliverables: ['IoT & embedded engineering', 'Hardware-software integration', 'Research & thesis support', 'Technical project architecture'],
    useCases: ['University-level IoT prototypes', 'Data-driven research methodologies', 'Complex academic engineering projects'],
  },
];

export default function Services() {
  return (
    <div>
      <title>VersaLab | Services</title>
      <Description text="Product design, web and SaaS engineering, branding systems, and IoT research support." />

      {/* ---- HERO ---- */}
      <section className="px-6 pt-28 md:pt-32 pb-12 md:pb-16">
        <motion.div className="mx-auto max-w-6xl" {...intro}>
          <p className="t-eyebrow mb-5">Services</p>
          <h1 className="t-h1 text-ink mb-6 max-w-[18ch]">
            What can we <span className="t-accent">build</span> together?
          </h1>
          <p className="t-body max-w-[46ch]">
            From first concept to production scale, the technical and design work required to build
            something people rely on.
          </p>
        </motion.div>
      </section>

      {/* ---- SERVICE BLOCKS ---- */}
      <section className="px-6 pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl grid gap-4">
          {services.map((s) => (
            <motion.article key={s.title} className="card p-6 md:p-8" {...fadeUp}>
              <div className="grid lg:grid-cols-[1fr_1.25fr] gap-8 lg:gap-14">
                <div>
                  <span className="inline-flex w-11 h-11 rounded-xl bg-violet/10 items-center justify-center mb-5">
                    <s.icon className="w-5 h-5 text-violet" />
                  </span>
                  <h2 className="t-h2 text-ink mb-4">{s.title}</h2>
                  <p className="t-small leading-relaxed max-w-[46ch]">{s.description}</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                  <div className="rounded-xl bg-cream/70 border border-line p-5">
                    <h3 className="t-eyebrow !text-muted mb-4">Deliverables</h3>
                    <ul className="space-y-2.5">
                      {s.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-[0.8125rem] text-ink leading-snug">
                          <Check className="w-3.5 h-3.5 text-violet shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl bg-violet/[0.06] border border-violet/15 p-5">
                    <h3 className="t-eyebrow mb-4">Ideal for</h3>
                    <ul className="space-y-2.5">
                      {s.useCases.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-[0.8125rem] text-ink leading-snug">
                          <span className="w-1 h-1 rounded-full bg-violet shrink-0 mt-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="px-6 pb-16 md:pb-24">
        <motion.div
          className="mx-auto max-w-6xl rounded-3xl bg-[linear-gradient(120deg,#f2eeff,#f7f5f1_60%)] border border-line p-8 md:p-12 text-center"
          {...fadeUp}
        >
          <h2 className="t-h2 text-ink mb-3">
            Not sure which one you <span className="t-accent">need?</span>
          </h2>
          <p className="t-body max-w-[42ch] mx-auto mb-7">
            Tell us the problem rather than the solution. We'll tell you what's realistic.
          </p>
          <Link to="/contact" className="btn-primary">
            Let's Talk
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
