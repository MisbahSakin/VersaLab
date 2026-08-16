import {
  ArrowDown,
  Layout,
  Code2,
  Smartphone,
  LayoutDashboard,
  Palette,
  GraduationCap,
  Lightbulb,
  Search,
  PenTool,
  Box,
  Rocket,
  Check,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { fadeUp, intro } from '../motion';
import { Description } from '../Seo';

/* ------------------------------------------------------------------ *
 * Hero artwork — CSS/SVG stand-in for the 3D render in the reference.  *
 * ------------------------------------------------------------------ */

const floatingCards = [
  { label: 'Website', desc: 'Beautiful websites that stand out.', icon: Layout, pos: 'left-[2%] top-[3%]', hideOnMobile: false },
  { label: 'App', desc: 'Engaging mobile experiences.', icon: Smartphone, pos: 'right-0 top-[1%]', hideOnMobile: false },
  { label: 'Product', desc: 'Digital products people love.', icon: Palette, pos: 'left-0 bottom-[22%]', hideOnMobile: true },
  { label: 'Academic', desc: 'Smart tools for smarter learning.', icon: GraduationCap, pos: 'left-[32%] bottom-0', hideOnMobile: true },
  { label: 'Brand', desc: 'Design systems that scale.', icon: Box, pos: 'right-[2%] bottom-[14%]', hideOnMobile: false },
];

function HeroArt() {
  return (
    <div className="relative w-full aspect-square max-w-[380px] sm:max-w-[460px] lg:max-w-[540px] mx-auto" aria-hidden="true">
      <div className="absolute inset-[12%] rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(139,109,255,0.30),rgba(247,245,241,0)_68%)] blur-xl" />
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full opacity-40">
        <ellipse cx="50" cy="50" rx="38" ry="24" fill="none" stroke="#8b6dff" strokeWidth="0.25" transform="rotate(-18 50 50)" />
        <ellipse cx="50" cy="50" rx="44" ry="18" fill="none" stroke="#8b6dff" strokeWidth="0.2" transform="rotate(12 50 50)" />
      </svg>

      <img
        src="/logo.png"
        alt=""
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[38%] drop-shadow-[0_20px_45px_rgba(20,19,28,0.22)]"
      />

      <div className="absolute right-[12%] top-[27%] w-[13%] aspect-square rounded-full bg-[radial-gradient(circle_at_32%_28%,#c4b5fd,#6d4aff_50%,#3b1e9e)] shadow-[0_10px_26px_-8px_rgba(76,34,214,0.6)]" />
      <div className="absolute left-[21%] top-[45%] w-[8%] aspect-square rounded-[22%] bg-[linear-gradient(140deg,#ddd6fe,#8b6dff)] rotate-[24deg] shadow-lg" />

      {floatingCards.map((c) => (
        <div
          key={c.label}
          className={`absolute ${c.pos} ${
            c.hideOnMobile ? 'hidden sm:block' : ''
          } w-[42%] sm:w-[38%] bg-paper/90 backdrop-blur-sm border border-line rounded-xl p-2 sm:p-2.5 shadow-[0_10px_30px_-14px_rgba(20,19,28,0.35)]`}
        >
          <p className="text-[0.4375rem] sm:text-[0.5rem] font-semibold tracking-[0.14em] uppercase text-muted mb-1">
            {c.label}
          </p>
          <p className="text-[0.5rem] sm:text-[0.5625rem] leading-snug text-ink/70 mb-1.5 sm:mb-2">
            {c.desc}
          </p>
          <span className="inline-flex w-4 h-4 sm:w-5 sm:h-5 rounded-md bg-violet/10 items-center justify-center">
            <c.icon className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-violet" />
          </span>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * Data                                                                *
 * ------------------------------------------------------------------ */

const steps = [
  { id: '01', title: 'Think', desc: 'We understand the problem deeply.', dot: 'bg-violet' },
  { id: '02', title: 'Design', desc: 'We craft experiences that connect.', dot: 'bg-lime-400' },
  { id: '03', title: 'Build', desc: 'We develop with quality and care.', dot: 'bg-violet' },
  { id: '04', title: 'Launch', desc: 'We deliver and support your growth.', dot: 'bg-lime-400' },
];

const services = [
  { icon: Layout, title: 'Web Design', desc: 'Beautiful, strategic websites that represent your brand.' },
  { icon: Code2, title: 'Website Development', desc: 'Fast, responsive and production-ready websites.' },
  { icon: Smartphone, title: 'App Design', desc: 'Mobile experiences designed around real user behavior.' },
  { icon: LayoutDashboard, title: 'Web Applications', desc: 'Custom platforms and dashboards built for your needs.' },
  { icon: Palette, title: 'Product Design', desc: 'From idea to polished product with meaningful design.' },
  { icon: GraduationCap, title: 'Academic Companion', desc: 'Smart digital tools that help students learn and achieve.' },
];

const academicFeatures = ['Study Planner', 'Task & Assignment Tracker', 'Notes & Resources', 'AI Study Assistant', 'Progress Analytics'];

const timeline = [
  { icon: Lightbulb, label: 'Idea' },
  { icon: Search, label: 'Discover' },
  { icon: PenTool, label: 'Design' },
  { icon: Box, label: 'Build' },
  { icon: Rocket, label: 'Launch' },
];

const principles = [
  { id: '01', title: "Design isn't decoration.", desc: 'We use design to solve problems and create better experiences.' },
  { id: '02', title: 'We think beyond the screen.', desc: 'We care about business goals, users and outcomes.' },
  { id: '03', title: 'Details matter.', desc: 'Spacing, typography, interaction and performance matter.' },
  { id: '04', title: 'Your idea deserves better.', desc: 'Every project should feel intentional and unique.' },
];

/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <div>
      <title>VersaLab | Digital Experience Studio</title>
      <Description text="VersaLab designs and builds websites, apps and digital products that look beautiful, feel effortless and move businesses forward." />

      {/* ---- HERO ------------------------------------------------------ */}
      <section className="px-6 pt-28 md:pt-32 pb-14 md:pb-16">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-8 items-center">
          <motion.div {...intro}>
            <p className="t-eyebrow mb-5">Digital Experience Studio</p>
            <h1 className="t-h1 text-ink mb-6">
              We turn ideas into
              <br />
              <span className="t-accent">digital</span> experiences.
            </h1>
            <p className="t-body max-w-[42ch] mb-8">
              VersaLab designs and builds websites, apps and digital products that look beautiful,
              feel effortless and move businesses forward.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <Link to="/contact" className="btn-primary">
                Start a Project
              </Link>
              <Link to="/services" className="btn-ghost">
                Explore Our Services
                <ArrowDown className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <HeroArt />
          </motion.div>
        </div>
      </section>

      {/* ---- FOUR STEPS ------------------------------------------------ */}
      <section className="px-6 py-8 md:py-10 border-y border-line bg-paper">
        {/* gap-px over a line-coloured grid draws the dividers, so they stay
            correct at 1, 2 and 4 columns without any nth-child guesswork. */}
        <motion.div
          className="mx-auto max-w-6xl grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line"
          {...intro}
        >
          {steps.map((step) => (
            <div key={step.id} className="relative bg-paper px-0 sm:px-6 py-5">
              <p className="font-display text-xl font-bold text-muted/50 mb-1">{step.id}</p>
              <h2 className="t-h3 text-ink mb-2">{step.title}</h2>
              <p className="t-small max-w-[24ch] pr-5">{step.desc}</p>
              <span className={`absolute right-0 sm:right-6 bottom-6 w-1.5 h-1.5 rounded-full ${step.dot}`} />
            </div>
          ))}
        </motion.div>
      </section>

      {/* ---- SERVICES -------------------------------------------------- */}
      <section className="px-6 py-16 md:py-24 bg-paper/60 border-y border-line">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-[1fr_3fr] gap-8 lg:gap-10">
          <motion.div {...fadeUp}>
            <p className="t-eyebrow mb-4">Services</p>
            <h2 className="t-h2 text-ink">
              What can we
              <br className="hidden sm:block" /> build together?
            </h2>
          </motion.div>

          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3" {...fadeUp}>
            {services.map((s) => (
              <Link
                key={s.title}
                to="/services"
                className="card p-5 hover:border-violet/40 hover:-translate-y-0.5 transition-all"
              >
                <span className="inline-flex w-9 h-9 rounded-lg bg-violet/10 items-center justify-center mb-4">
                  <s.icon className="w-4 h-4 text-violet" />
                </span>
                <h3 className="text-[0.875rem] font-bold text-ink mb-1.5">{s.title}</h3>
                <p className="t-small leading-snug">{s.desc}</p>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ---- ACADEMIC COMPANION ---------------------------------------- */}
      <section className="px-6 py-16 md:py-24">
        <motion.div
          className="mx-auto max-w-6xl rounded-3xl bg-[linear-gradient(120deg,#f2eeff,#f7f5f1_55%)] border border-line p-5 sm:p-8 md:p-10 grid lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-10 items-center"
          {...fadeUp}
        >
          <div>
            <p className="t-eyebrow mb-4">Academic Companion</p>
            <h2 className="t-h2 text-ink mb-4">
              Technology that
              <br className="hidden sm:block" /> helps people
              <br className="hidden sm:block" /> <span className="t-accent">learn</span> better.
            </h2>
            <p className="t-body mb-6 max-w-[36ch]">
              We build academic tools and companions that help students stay organized, focused and
              achieve their goals.
            </p>
            <ul className="space-y-2.5 mb-8">
              {academicFeatures.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-[0.8125rem] text-ink">
                  <Check className="w-3.5 h-3.5 text-violet shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Link to="/services" className="btn-primary">
              Explore Solutions
            </Link>
          </div>

          <div className="bg-paper rounded-2xl border border-line shadow-[0_20px_50px_-30px_rgba(20,19,28,0.4)] overflow-hidden grid grid-cols-[auto_1fr]">
            <div className="hidden sm:block w-32 border-r border-line p-4 space-y-3">
              <div className="w-6 h-6 rounded-md bg-violet mb-4" />
              {['Dashboard', 'Tasks', 'Planner', 'Notes', 'Resources', 'Analytics', 'AI Assistant', 'Settings'].map(
                (item, i) => (
                  <p key={item} className={`text-[0.625rem] ${i === 0 ? 'text-violet font-semibold' : 'text-muted'}`}>
                    {item}
                  </p>
                ),
              )}
            </div>

            <div className="p-4 md:p-5 min-w-0">
              <p className="text-[0.8125rem] font-bold text-ink mb-0.5">Good morning, Anika 👋</p>
              <p className="text-[0.625rem] text-muted mb-4">Let's keep your streak going!</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
                {[
                  { k: 'Tasks', v: '12', s: 'Due today' },
                  { k: 'Study Streak', v: '7', s: 'Days in a row' },
                  { k: 'Progress', v: '68%', s: 'This week' },
                  { k: 'Rank', v: '#4', s: 'In class' },
                ].map((t) => (
                  <div key={t.k} className="rounded-lg border border-line p-2.5">
                    <p className="text-[0.5rem] text-muted mb-1">{t.k}</p>
                    <p className="font-display text-lg font-bold text-ink leading-none">{t.v}</p>
                    <p className="text-[0.5rem] text-muted mt-1">{t.s}</p>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-[1.3fr_1fr] gap-2">
                <div className="rounded-lg border border-line p-3">
                  <p className="text-[0.625rem] font-semibold text-ink mb-2">Today's Plan</p>
                  {['Calculus Assignment', 'Physics Revision', 'UI/UX Case Study', 'Read Chapter 8'].map((t, i) => (
                    <div key={t} className="flex items-center justify-between gap-2 py-1">
                      <span className="text-[0.5625rem] text-muted truncate">{t}</span>
                      <span className={`w-2 h-2 rounded-full shrink-0 ${i < 2 ? 'bg-violet' : 'bg-line'}`} />
                    </div>
                  ))}
                </div>
                <div className="rounded-lg border border-line p-3">
                  <p className="text-[0.625rem] font-semibold text-ink mb-2">AI Assistant</p>
                  <p className="text-[0.5625rem] text-muted leading-relaxed mb-2">
                    What would you like to study today?
                  </p>
                  <div className="rounded-md bg-violet/10 p-2 text-[0.5rem] text-ink">
                    Recommend a study plan for my upcoming exam
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ---- PROCESS TIMELINE ------------------------------------------ */}
      <section className="px-6 py-16 md:py-24 bg-paper/60 border-y border-line">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-[1fr_2.2fr] gap-10 lg:gap-12 items-center">
          <motion.div {...fadeUp}>
            <p className="t-eyebrow mb-4">Our Process</p>
            <h2 className="t-h2 text-ink">
              An idea is only
              <br className="hidden sm:block" /> the <span className="t-accent">beginning.</span>
            </h2>
          </motion.div>

          <motion.ol className="relative grid grid-cols-5 gap-1 sm:gap-2" {...fadeUp}>
            <div
              aria-hidden="true"
              className="absolute left-[10%] right-[10%] top-5 sm:top-7 border-t border-dashed border-line"
            />
            {timeline.map((t) => (
              <li key={t.label} className="relative flex flex-col items-center gap-2 sm:gap-3 min-w-0">
                <span className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[linear-gradient(150deg,#c4b5fd,#6d4aff)] shadow-[0_10px_24px_-12px_rgba(109,74,255,0.8)] flex items-center justify-center shrink-0">
                  <t.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </span>
                <span className="text-[0.5rem] sm:text-[0.5625rem] font-semibold tracking-[0.12em] sm:tracking-[0.16em] uppercase text-muted text-center">
                  {t.label}
                </span>
              </li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* ---- WHY VERSALAB ---------------------------------------------- */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div className="mb-10 md:mb-12" {...fadeUp}>
            <p className="t-eyebrow mb-4">Why VersaLab</p>
            <h2 className="t-h2 text-ink">
              Small enough to care.
              <br className="hidden sm:block" /> Serious enough to deliver.
            </h2>
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
    </div>
  );
}
