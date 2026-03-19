import React from 'react';
import { motion } from 'motion/react';

export default function Process() {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const steps = [
    {
      id: "01",
      title: "Discovery & Architecture",
      description: "We begin by deeply understanding your business objectives, target audience, and technical constraints. Our architects design a scalable foundation before a single line of code is written.",
      details: ["Stakeholder interviews", "System architecture design", "Wireframing & UX flows", "Technical feasibility assessment"]
    },
    {
      id: "02",
      title: "Agile Development",
      description: "Execution is handled by dedicated, cross-functional pods working in iterative sprints. This ensures continuous delivery of value and allows for flexibility as requirements evolve.",
      details: ["Two-week sprint cycles", "Daily standups & transparent reporting", "Continuous Integration (CI)", "Code reviews by Technical Advisors"]
    },
    {
      id: "03",
      title: "Quality Assurance",
      description: "Quality is embedded throughout the lifecycle, not just at the end. We employ multi-layered testing strategies to ensure security, performance, and reliability.",
      details: ["Automated unit & integration testing", "Manual exploratory testing", "Security vulnerability scanning", "Performance profiling"]
    },
    {
      id: "04",
      title: "Deployment & Scaling",
      description: "We manage the complexities of taking your product live. Our DevOps engineers ensure smooth deployments with zero downtime and configure infrastructure for auto-scaling.",
      details: ["CI/CD pipeline configuration", "Cloud infrastructure provisioning", "Database migration", "Monitoring & alerting setup"]
    },
    {
      id: "05",
      title: "Continuous Evolution",
      description: "Launch is just the beginning. We provide ongoing support, monitor system health, and iterate on features based on real user data and changing market dynamics.",
      details: ["SLA-backed technical support", "User analytics review", "Feature iteration", "Technical debt management"]
    }
  ];

  return (
    <div className="pt-28 md:pt-40 pb-24 bg-[#0A0F1C] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="mb-20 md:mb-32 max-w-4xl relative z-10" {...fadeUp}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-sm font-medium text-slate-300 tracking-wide uppercase">Methodology</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-6 md:mb-8 leading-[1.05]">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Delivery Model.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light">
            A structured, predictable approach to product engineering. We combine agile methodologies with rigorous architectural oversight to guarantee results.
          </p>
        </motion.div>
        
        <div className="space-y-0 relative z-10">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx} 
              className="group relative grid md:grid-cols-12 gap-8 md:gap-16 py-16 border-t border-white/10 hover:bg-[#0F172A]/50 transition-colors -mx-6 px-6 md:mx-0 md:px-10 rounded-[2.5rem]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
            >
              <div className="md:col-span-2">
                <span className="text-5xl md:text-6xl font-extralight text-slate-600 group-hover:text-cyan-400 transition-colors drop-shadow-[0_0_8px_rgba(34,211,238,0)] group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">{step.id}</span>
              </div>
              
              <div className="md:col-span-10 grid lg:grid-cols-2 gap-8 lg:gap-24">
                <div>
                  <h2 className="text-3xl md:text-4xl font-medium text-white mb-4 md:mb-6">{step.title}</h2>
                  <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
                
                <div className="flex flex-col justify-center">
                  <ul className="space-y-6">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-cyan-400 transition-colors shrink-0 group-hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]" />
                        <span className="text-lg text-slate-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
