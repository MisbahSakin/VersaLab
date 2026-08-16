import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { fadeUp, intro } from '../motion';
import { Description } from '../Seo';

const solutions = [
  {
    id: '01',
    title: 'MVP development',
    problem:
      'Teams spend months building features nobody asked for, burning capital before anyone validates the core assumption.',
    solution:
      'A lean cycle that prioritises the core value proposition. Rapid prototyping, two-week sprints, and foundations that survive the next year of growth.',
    impact:
      'Live in 8–12 weeks, real user feedback immediately, and validated metrics to take into the next funding round.',
  },
  {
    id: '02',
    title: 'Scaling engineering teams',
    problem:
      'Hiring senior engineers locally is slow and expensive. Roadmaps stall and technical debt compounds while the requisition sits open.',
    solution:
      'Pre-vetted engineering pods that integrate into your existing workflow, with a technical advisor keeping architecture aligned to your standards.',
    impact:
      'Delivery velocity roughly doubles, hiring overhead drops, and code quality holds without adding management burden.',
  },
  {
    id: '03',
    title: 'Custom SaaS platforms',
    problem:
      'Off-the-shelf software rarely fits real operational workflows, so teams end up with fragmented systems, manual workarounds, and data silos.',
    solution:
      'Bespoke, scalable platforms built precisely around your business logic, compliance requirements, and the systems you already run.',
    impact:
      'Complex operations streamline, new recurring revenue becomes possible, and the technology itself becomes a competitive advantage.',
  },
];

export default function Solutions() {
  return (
    <div>
      <title>VersaLab | Work</title>
      <Description text="MVP development, engineering team augmentation, and custom SaaS platforms — the problems VersaLab solves and the outcomes they produce." />

      {/* ---- HERO ---- */}
      <section className="px-6 pt-28 md:pt-32 pb-12 md:pb-16">
        <motion.div className="mx-auto max-w-6xl" {...intro}>
          <p className="t-eyebrow mb-5">Our Work</p>
          <h1 className="t-h1 text-ink mb-6 max-w-[16ch]">
            The problems we <span className="t-accent">solve.</span>
          </h1>
          <p className="t-body max-w-[46ch]">
            Every engagement starts from a business problem and ends at a measurable outcome.
            Here is the work we take on and what it changes.
          </p>
        </motion.div>
      </section>

      {/* ---- SOLUTIONS ---- */}
      <section className="px-6 py-16 md:py-24 bg-paper/60 border-y border-line">
        <div className="mx-auto max-w-6xl">
          <motion.div className="mb-10 md:mb-12 max-w-[40ch]" {...fadeUp}>
            <p className="t-eyebrow mb-4">Business Outcomes</p>
            <h2 className="t-h2 text-ink mb-4">Where we do our best work.</h2>
            <p className="t-body">
              We don't just write code. Each of these is a problem we've built a repeatable
              approach for.
            </p>
          </motion.div>

          <motion.div className="grid gap-4" {...fadeUp}>
            {solutions.map((s) => (
              <article key={s.id} className="card p-6 md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-line">
                  <div className="flex items-center gap-4">
                    <span className="font-display text-sm font-bold text-violet">{s.id}</span>
                    <h3 className="t-h3 text-ink">{s.title}</h3>
                  </div>
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-1.5 text-[0.75rem] font-semibold text-violet"
                  >
                    Discuss this
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                  <div>
                    <h4 className="t-eyebrow !text-muted mb-3">The problem</h4>
                    <p className="t-small leading-relaxed">{s.problem}</p>
                  </div>
                  <div>
                    <h4 className="t-eyebrow !text-muted mb-3">Our approach</h4>
                    <p className="t-small leading-relaxed">{s.solution}</p>
                  </div>
                  <div className="rounded-xl bg-violet/[0.06] border border-violet/15 p-4 -m-1">
                    <h4 className="t-eyebrow mb-3">The impact</h4>
                    <p className="text-[0.8125rem] leading-relaxed text-ink">{s.impact}</p>
                  </div>
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
