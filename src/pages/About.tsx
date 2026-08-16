import { ArrowRight, Clock, GitBranch, MessageSquare, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { fadeUp, intro } from '../motion';
import { Description } from '../Seo';

// Principles carried over from the home page so the two stay in step.
const principles = [
  { id: '01', title: "Design isn't decoration.", desc: 'We use design to solve problems and create better experiences, not to dress them up.' },
  { id: '02', title: 'We think beyond the screen.', desc: 'We care about business goals, users and outcomes — not just what ships.' },
  { id: '03', title: 'Details matter.', desc: 'Spacing, typography, interaction and performance are the work, not the polish.' },
  { id: '04', title: 'Your idea deserves better.', desc: 'Every project should feel intentional and unique to the people it serves.' },
];

// Commitments, not claims — each of these is verifiable from day one.
const commitments = [
  { icon: Clock, label: 'Reply time', value: '1 business day', desc: 'Every inquiry gets a real reply from a person, including the ones we are not right for.' },
  { icon: GitBranch, label: 'Code ownership', value: 'Yours, commit #1', desc: 'We work in your repository where possible and hand over everything at the end.' },
  { icon: MessageSquare, label: 'Checkpoints', value: 'Every 2 weeks', desc: 'A working demo and a written update, so progress never needs a meeting to confirm.' },
  { icon: ShieldCheck, label: 'Scope changes', value: 'Quoted first', desc: 'Written estimate before any work starts, so no invoice ever surprises you.' },
];

export default function About() {
  return (
    <div>
      <title>VersaLab | About</title>
      <Description text="VersaLab is a small digital experience studio. Small enough to care, serious enough to deliver." />

      {/* ---- HERO ---- */}
      <section className="px-6 pt-28 md:pt-32 pb-12 md:pb-16">
        <motion.div className="mx-auto max-w-6xl" {...intro}>
          <p className="t-eyebrow mb-5">About</p>
          <h1 className="t-h1 text-ink mb-6 max-w-[18ch]">
            Small enough to care. Serious enough to <span className="t-accent">deliver.</span>
          </h1>
          <p className="t-body max-w-[52ch]">
            VersaLab is a digital experience studio. We design and build websites, apps and digital
            products — and we would rather tell you plainly how we work than sell you on it.
          </p>
        </motion.div>
      </section>

      {/* ---- COMMITMENTS ---- */}
      <section className="px-6 py-16 md:py-24 bg-paper/60 border-y border-line">
        <div className="mx-auto max-w-6xl">
          <motion.div className="mb-10" {...fadeUp}>
            <p className="t-eyebrow mb-4">How we work</p>
            <h2 className="t-h2 text-ink mb-4">
              The things we will <span className="t-accent">commit</span> to.
            </h2>
            <p className="t-body max-w-[46ch]">
              Not promises about quality — anyone can make those. These are specific enough that
              you would notice immediately if we broke one.
            </p>
          </motion.div>

          <motion.div className="grid sm:grid-cols-2 gap-4" {...fadeUp}>
            {commitments.map((c) => (
              <div key={c.label} className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex w-9 h-9 rounded-lg bg-violet/10 items-center justify-center shrink-0">
                    <c.icon className="w-4 h-4 text-violet" />
                  </span>
                  <div className="min-w-0">
                    <p className="t-eyebrow !text-muted">{c.label}</p>
                    <p className="font-display text-[0.9375rem] font-bold text-ink">{c.value}</p>
                  </div>
                </div>
                <p className="t-small leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---- PRINCIPLES ---- */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div className="mb-10 md:mb-12 max-w-[42ch]" {...fadeUp}>
            <p className="t-eyebrow mb-4">What we believe</p>
            <h2 className="t-h2 text-ink">Four things we keep coming back to.</h2>
          </motion.div>

          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8" {...fadeUp}>
            {principles.map((p) => (
              <div key={p.id}>
                <p className="font-display text-xl font-bold text-violet mb-3">{p.id}</p>
                <h3 className="text-[0.875rem] font-bold text-ink mb-2">{p.title}</h3>
                <p className="t-small leading-snug">{p.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="px-6 pb-16 md:pb-24">
        <motion.div
          className="mx-auto max-w-6xl rounded-3xl bg-[linear-gradient(120deg,#f2eeff,#f7f5f1_60%)] border border-line p-8 md:p-12 text-center"
          {...fadeUp}
        >
          <h2 className="t-h2 text-ink mb-3">
            Want to know if we're a <span className="t-accent">fit?</span>
          </h2>
          <p className="t-body max-w-[42ch] mx-auto mb-7">
            Tell us what you're building. If we're not the right studio for it, we'll say so.
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
