import { Lightbulb, Search, PenTool, Box, Rocket, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { fadeUp, intro } from '../motion';
import { Description } from '../Seo';

// Numbered deliberately: unlike Services, this genuinely is a sequence, so the
// numerals carry information the reader needs.
const steps = [
  {
    id: '01',
    icon: Lightbulb,
    title: 'Discovery & architecture',
    short: 'Discover',
    description:
      'We start by understanding the business objective, the audience, and the constraints. The system gets designed before a line of code is written.',
    details: ['Stakeholder interviews', 'System architecture design', 'Wireframing & UX flows', 'Technical feasibility assessment'],
  },
  {
    id: '02',
    icon: PenTool,
    title: 'Agile development',
    short: 'Build',
    description:
      'Cross-functional pods work in two-week sprints. You get working software continuously, and requirements can change without derailing the build.',
    details: ['Two-week sprint cycles', 'Daily standups & written reporting', 'Continuous integration', 'Code review by technical advisors'],
  },
  {
    id: '03',
    icon: Search,
    title: 'Quality assurance',
    short: 'Test',
    description:
      'Quality is built in throughout, not bolted on at the end. Multi-layered testing covers security, performance, and reliability before release.',
    details: ['Automated unit & integration testing', 'Manual exploratory testing', 'Security vulnerability scanning', 'Performance profiling'],
  },
  {
    id: '04',
    icon: Box,
    title: 'Deployment & scaling',
    short: 'Deploy',
    description:
      'We handle going live: zero-downtime deployments, infrastructure configured for auto-scaling, and monitoring in place before you need it.',
    details: ['CI/CD pipeline configuration', 'Cloud infrastructure provisioning', 'Database migration', 'Monitoring & alerting setup'],
  },
  {
    id: '05',
    icon: Rocket,
    title: 'Continuous evolution',
    short: 'Evolve',
    description:
      'Launch is the start. We support the system, watch its health, and iterate on what real usage data and market shifts tell us.',
    details: ['SLA-backed technical support', 'User analytics review', 'Feature iteration', 'Technical debt management'],
  },
];

export default function Process() {
  return (
    <div>
      <title>VersaLab | Process</title>
      <Description text="How we run projects: discovery, agile delivery, QA, deployment, and ongoing iteration." />

      {/* ---- HERO ---- */}
      <section className="px-6 pt-28 md:pt-32 pb-12 md:pb-16">
        <motion.div className="mx-auto max-w-6xl" {...intro}>
          <p className="t-eyebrow mb-5">Our Process</p>
          <h1 className="t-h1 text-ink mb-6 max-w-[16ch]">
            An idea is only the <span className="t-accent">beginning.</span>
          </h1>
          <p className="t-body max-w-[46ch]">
            A structured, predictable path from first conversation to a system that keeps running.
            You always know which stage you're in.
          </p>
        </motion.div>
      </section>

      {/* ---- TIMELINE STRIP ---- */}
      <section className="px-6 py-10 md:py-12 bg-paper border-y border-line">
        <motion.ol className="relative mx-auto max-w-4xl grid grid-cols-5 gap-1 sm:gap-2" {...fadeUp}>
          <div
            aria-hidden="true"
            className="absolute left-[10%] right-[10%] top-5 sm:top-7 border-t border-dashed border-line"
          />
          {steps.map((s) => (
            <li key={s.id} className="relative flex flex-col items-center gap-2 sm:gap-3 min-w-0">
              <span className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[linear-gradient(150deg,#c4b5fd,#6d4aff)] shadow-[0_10px_24px_-12px_rgba(109,74,255,0.8)] flex items-center justify-center shrink-0">
                <s.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </span>
              <span className="text-[0.625rem] sm:text-[0.5625rem] font-semibold tracking-[0.04em] sm:tracking-[0.12em] uppercase text-muted text-center">
                {s.short}
              </span>
            </li>
          ))}
        </motion.ol>
      </section>

      {/* ---- STAGES ---- */}
      <section className="px-6 py-16 md:py-24">
        <ol className="mx-auto max-w-6xl grid gap-4">
          {steps.map((step) => (
            <motion.li key={step.id} className="card p-6 md:p-8" {...fadeUp}>
              <div className="grid lg:grid-cols-[auto_1fr_1fr] gap-6 lg:gap-12">
                <div className="flex lg:flex-col items-center lg:items-start gap-4">
                  <span className="font-display text-3xl font-extrabold text-violet/25 leading-none">
                    {step.id}
                  </span>
                  <span className="inline-flex w-10 h-10 rounded-xl bg-violet/10 items-center justify-center shrink-0">
                    <step.icon className="w-4 h-4 text-violet" />
                  </span>
                </div>

                <div>
                  <h2 className="t-h3 text-ink mb-3">{step.title}</h2>
                  <p className="t-small leading-relaxed max-w-[46ch]">{step.description}</p>
                </div>

                <div className="rounded-xl bg-cream/70 border border-line p-5">
                  <h3 className="t-eyebrow !text-muted mb-4">What happens</h3>
                  <ul className="space-y-2.5">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-[0.8125rem] text-ink leading-snug">
                        <Check className="w-3.5 h-3.5 text-violet shrink-0 mt-0.5" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </section>

      {/* ---- CTA ---- */}
      <section className="px-6 pb-16 md:pb-24">
        <motion.div
          className="mx-auto max-w-6xl rounded-3xl bg-[linear-gradient(120deg,#f2eeff,#f7f5f1_60%)] border border-line p-8 md:p-12 text-center"
          {...fadeUp}
        >
          <h2 className="t-h2 text-ink mb-3">
            Ready to start at <span className="t-accent">stage one?</span>
          </h2>
          <p className="t-body max-w-[42ch] mx-auto mb-7">
            Discovery begins with a conversation. We reply within one business day.
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
