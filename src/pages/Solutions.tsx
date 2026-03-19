import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Solutions() {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const solutions = [
    {
      id: "01",
      title: "MVP Development",
      problem: "Startups and enterprises often spend months building features users don't need, burning capital before validating core assumptions in the market.",
      solution: "A lean, focused development cycle prioritizing core value propositions. We utilize rapid prototyping, agile methodologies, and scalable foundations to build what matters most.",
      impact: "Go to market in 8-12 weeks, gather real user feedback immediately, and secure subsequent funding rounds with validated metrics."
    },
    {
      id: "02",
      title: "Scaling Engineering Teams",
      problem: "Hiring senior technical talent locally is slow and expensive, causing product roadmaps to stall and technical debt to accumulate under pressure.",
      solution: "Seamlessly integrate our pre-vetted, cohesive engineering pods into your existing workflows. Our teams are managed by technical advisors to ensure architectural alignment.",
      impact: "Accelerate delivery velocity by 2x, drastically reduce hiring overhead, and maintain high code quality standards without management burden."
    },
    {
      id: "03",
      title: "Custom SaaS Platforms",
      problem: "Off-the-shelf software fails to accommodate unique operational workflows, leading to fragmented systems, manual workarounds, and data silos.",
      solution: "Architect and build bespoke, highly scalable SaaS solutions tailored precisely to your business logic, compliance needs, and integration requirements.",
      impact: "Streamline complex operations, create new recurring revenue streams, and gain a distinct competitive advantage through proprietary technology."
    }
  ];

  return (
    <div className="pt-28 md:pt-40 pb-24 bg-[#0A0F1C] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="mb-16 md:mb-24 max-w-4xl relative z-10" {...fadeUp}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-sm font-medium text-slate-300 tracking-wide uppercase">Business Outcomes</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-6 md:mb-8 leading-[1.05]">
            Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Solutions.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light">
            We don't just write code; we solve complex business challenges. Our solutions are designed to deliver measurable ROI and strategic advantages.
          </p>
        </motion.div>
        
        <div className="space-y-8 relative z-10">
          {solutions.map((solution, idx) => (
            <motion.div 
              key={idx} 
              className="glass-panel rounded-[2.5rem] p-10 md:p-16 card-glow-hover group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6 md:gap-8">
                <div>
                  <span className="text-xl font-medium text-cyan-400 mb-4 block drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">Solution {solution.id}</span>
                  <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all">{solution.title}</h2>
                </div>
                <Link to="/contact" className="inline-flex self-start md:self-auto items-center gap-2 text-lg font-medium text-slate-300 hover:text-cyan-400 transition-colors pb-1 border-b border-slate-700 hover:border-cyan-400">
                  Discuss this solution <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-10 lg:gap-16 pt-10 md:pt-12 border-t border-white/10">
                <div>
                  <h3 className="text-sm font-semibold tracking-widest text-slate-500 uppercase mb-6">The Problem</h3>
                  <p className="text-lg text-slate-400 leading-relaxed font-light">{solution.problem}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold tracking-widest text-white uppercase mb-6">Our Solution</h3>
                  <p className="text-lg text-slate-400 leading-relaxed font-light">{solution.solution}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold tracking-widest text-cyan-400 uppercase mb-6 drop-shadow-[0_0_5px_rgba(34,211,238,0.3)]">The Impact</h3>
                  <p className="text-lg text-white leading-relaxed font-medium">{solution.impact}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
