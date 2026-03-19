import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';

export default function Services() {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const services = [
    {
      id: "01",
      title: "Product Design",
      description: "We craft intuitive, user-centric interfaces that drive engagement and simplify complex workflows. Our design process bridges the gap between business objectives and user needs, ensuring every interaction is purposeful.",
      deliverables: ["UI/UX Design", "Interactive Prototyping", "User Research & Testing", "Design Systems"],
      useCases: ["Complex SaaS dashboards", "Consumer mobile applications", "Enterprise internal portals"]
    },
    {
      id: "02",
      title: "Web & SaaS Development",
      description: "Building scalable, high-performance architectures using modern tech stacks. We engineer robust frontend experiences and secure, highly-available backend systems capable of handling enterprise-grade traffic.",
      deliverables: ["Frontend Development (React, Vue)", "Backend APIs (Node.js, Python, Go)", "Cloud Architecture (AWS, GCP)", "Database Design"],
      useCases: ["B2B SaaS platforms", "High-traffic marketplaces", "Data-intensive applications"]
    },
    {
      id: "03",
      title: "Branding Systems",
      description: "Creating cohesive visual identities that resonate with your target audience. We build scalable branding systems that maintain consistency across all digital touchpoints and marketing channels.",
      deliverables: ["Brand Strategy & Positioning", "Logo & Visual Identity", "Typography & Color Systems", "Brand Guidelines"],
      useCases: ["Rebranding legacy systems", "Launching new products", "Standardizing UI across product suites"]
    },
    {
      id: "04",
      title: "Academic Companion",
      description: "Providing specialized technical expertise for advanced academic research and complex IoT implementations. We deliver end-to-end hardware-software integration and structured engineering solutions to accelerate thesis development and technical projects.",
      deliverables: ["IoT & Embedded Systems Engineering", "Hardware-Software Integration", "Advanced Research & Thesis Support", "Technical Project Architecture"],
      useCases: ["University-level IoT prototypes", "Data-driven research methodologies", "Complex academic engineering projects"]
    }
  ];

  return (
    <div className="pt-28 md:pt-40 pb-24 bg-[#0A0F1C] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div className="mb-20 md:mb-32 max-w-4xl relative z-10" {...fadeUp}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></span>
            <span className="text-sm font-medium text-slate-300 tracking-wide uppercase">Our Capabilities</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-6 md:mb-8 leading-[1.05]">
            End-to-End <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">Product Engineering.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light">
            From initial concept to global scale, we provide the technical expertise and design excellence required to build category-defining digital products.
          </p>
        </motion.div>
        
        <div className="space-y-24 md:space-y-32 relative z-10">
          {services.map((service, idx) => (
            <motion.div 
              key={service.id} 
              className="grid md:grid-cols-12 gap-10 md:gap-24 items-start border-t border-white/10 pt-12 md:pt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
            >
              <div className="md:col-span-5 md:sticky md:top-32">
                <span className="text-xl font-medium text-cyan-400 mb-4 block drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">{service.id}</span>
                <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4 md:mb-6">{service.title}</h2>
                <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
              
              <div className="md:col-span-7 space-y-8 mt-4 md:mt-0">
                <div className="glass-panel rounded-3xl p-8 md:p-10 card-glow-hover">
                  <h3 className="text-sm font-semibold tracking-widest text-slate-300 uppercase mb-8 pb-4 border-b border-white/10">Key Deliverables</h3>
                  <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <Check className="w-5 h-5 text-blue-400 shrink-0 drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]" />
                        <span className="text-lg text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="glass-panel rounded-3xl p-8 md:p-10 card-glow-hover">
                  <h3 className="text-sm font-semibold tracking-widest text-slate-300 uppercase mb-8 pb-4 border-b border-white/10">Ideal Use Cases</h3>
                  <ul className="space-y-6">
                    {service.useCases.map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2.5 shrink-0 drop-shadow-[0_0_5px_rgba(139,92,246,0.5)]" />
                        <span className="text-lg text-slate-300">{item}</span>
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
