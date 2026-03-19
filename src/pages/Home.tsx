import React from 'react';
import { ArrowRight, ArrowUpRight, Code2, Cpu, Globe, Shield, Microchip, Activity, Zap, Server, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Home() {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const features = [
    { icon: <Cpu className="w-6 h-6 text-blue-400" />, title: "Scalable Architecture", desc: "Built for global scale with zero downtime." },
    { icon: <Code2 className="w-6 h-6 text-violet-400" />, title: "Clean Code", desc: "Maintainable, documented, and test-driven." },
    { icon: <Shield className="w-6 h-6 text-cyan-400" />, title: "Enterprise Security", desc: "Bank-grade encryption and compliance." },
    { icon: <Microchip className="w-6 h-6 text-blue-400" />, title: "Academic Companion", desc: "Specialized IoT and hardware-software integration for advanced research." }
  ];

  return (
    <div className="pt-24">
      {/* HERO SECTION */}
      <section className="relative pt-32 md:pt-48 pb-24 md:pb-32 px-6 max-w-7xl mx-auto">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-full bg-grid-pattern [mask-image:radial-gradient(ellipse_at_top,white,transparent_70%)] opacity-20 pointer-events-none"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-40 -left-40 w-[400px] h-[400px] bg-violet-600/20 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10">
          {/* Left: Text Content */}
          <motion.div className="max-w-2xl" {...fadeUp}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border border-white/10 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
              <span className="text-sm font-medium text-slate-300 tracking-wide uppercase">Next-Gen Engineering</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.1] mb-8">
              Engineer the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]">future</span> of your product.
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed font-light mb-10 max-w-xl">
              VersaLab delivers elite product design, scalable architecture, and high-performance engineering for global technology companies.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
              <Link to="/contact" className="group flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 neon-btn w-full sm:w-auto">
                Start a Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="group flex items-center justify-center gap-3 bg-transparent text-white border border-white/20 hover:border-white/40 hover:bg-white/5 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 w-full sm:w-auto">
                Our Capabilities
              </Link>
            </div>
          </motion.div>

          {/* Right: Futuristic UI Mockup */}
          <motion.div 
            className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Animated Code Editor Mockup */}
            <motion.div 
              className="absolute w-full max-w-lg glass-panel rounded-2xl border border-white/10 p-6 shadow-2xl shadow-blue-900/20 z-10 overflow-hidden bg-[#0A0F1C]/80"
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              {/* Mac-style Window Header */}
              <div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_5px_rgba(239,68,68,0.5)]"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_5px_rgba(234,179,8,0.5)]"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_5px_rgba(16,185,129,0.5)]"></div>
                </div>
                <div className="text-xs text-slate-500 font-mono flex items-center gap-2">
                  <Code2 className="w-3 h-3" />
                  architecture.ts
                </div>
              </div>

              {/* Animated Code Content */}
              <div className="font-mono text-sm md:text-base space-y-1.5 text-slate-300">
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                  <span className="text-violet-400">import</span> &#123; <span className="text-cyan-400">VersaEngine</span> &#125; <span className="text-violet-400">from</span> <span className="text-emerald-400">'@versalab/core'</span>;
                </motion.div>
                <br/>
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.5 }}>
                  <span className="text-violet-400">const</span> <span className="text-blue-400">system</span> = <span className="text-violet-400">new</span> <span className="text-cyan-400">VersaEngine</span>(&#123;
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 2.2 }} className="pl-6">
                  <span className="text-slate-400">architecture:</span> <span className="text-emerald-400">'microservices'</span>,
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 2.7 }} className="pl-6">
                  <span className="text-slate-400">scaling:</span> <span className="text-emerald-400">'auto-edge'</span>,
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 3.2 }} className="pl-6">
                  <span className="text-slate-400">performance:</span> <span className="text-emerald-400">'maximum'</span>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 3.7 }}>
                  &#125;);
                </motion.div>
                <br/>
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 4.5 }}>
                  <span className="text-blue-400">system</span>.<span className="text-cyan-400">deploy</span>().<span className="text-cyan-400">then</span>(() <span className="text-violet-400">=&gt;</span> &#123;
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 5.5 }} className="pl-6 flex items-center gap-2">
                  <span><span className="text-slate-400">console.</span><span className="text-cyan-400">log</span>(<span className="text-emerald-400">'System online.'</span>);</span>
                  <motion.span 
                    animate={{ opacity: [1, 0] }} 
                    transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                    className="w-2 h-4 bg-cyan-400 inline-block"
                  />
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 6.0 }}>
                  &#125;);
                </motion.div>
              </div>
            </motion.div>

            {/* Floating Element 1 - Appears after code "deploys" */}
            <motion.div 
              className="absolute -right-4 top-12 glass-panel rounded-xl border border-white/10 p-4 shadow-xl z-20 flex items-center gap-4 hidden md:flex"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0, y: [10, -10, 10] }}
              transition={{ 
                opacity: { delay: 6.5, duration: 0.5 },
                x: { delay: 6.5, duration: 0.5 },
                y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 6.5 }
              }}
            >
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Build Passing</p>
                <p className="text-xs text-slate-400">0 errors, 0 warnings</p>
              </div>
            </motion.div>

            {/* Floating Element 2 - Appears after code "deploys" */}
            <motion.div 
              className="absolute -left-8 bottom-24 glass-panel rounded-xl border border-white/10 p-4 shadow-xl z-20 flex items-center gap-4 hidden md:flex"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0, y: [-8, 8, -8] }}
              transition={{ 
                opacity: { delay: 7.0, duration: 0.5 },
                x: { delay: 7.0, duration: 0.5 },
                y: { repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 7.0 }
              }}
            >
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                <Zap className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Edge Deployed</p>
                <p className="text-xs text-emerald-400 flex items-center gap-1">Global CDN active</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* TRUST INDICATORS - Minimalist */}
      <motion.section className="border-y border-white/5 bg-[#0F172A]/30 py-8 mt-12" {...fadeUp}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-sm font-medium text-slate-500 uppercase tracking-widest">
            <span className="hover:text-slate-300 transition-colors cursor-default">Advisor-led delivery</span>
            <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-700"></span>
            <span className="hover:text-slate-300 transition-colors cursor-default">Multi-layer QA</span>
            <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-700"></span>
            <span className="hover:text-slate-300 transition-colors cursor-default">Scalable global teams</span>
            <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-700"></span>
            <span className="hover:text-slate-300 transition-colors cursor-default">Structured execution</span>
          </div>
        </div>
      </motion.section>

      {/* SERVICES PREVIEW - Glass Cards */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6 md:gap-8" {...fadeUp}>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white">
              Engineering<br className="hidden md:block" /> Excellence.
            </h2>
            <Link to="/services" className="text-lg font-medium text-slate-300 hover:text-cyan-400 flex items-center gap-2 transition-colors pb-2 border-b border-slate-700 hover:border-cyan-400 self-start md:self-auto">
              Explore all capabilities
            </Link>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-50px" }} 
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link to="/services" className="block glass-panel rounded-3xl p-8 md:p-10 card-glow-hover group h-full">
                  <div className="w-14 h-14 rounded-2xl bg-[#0A0F1C] border border-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all">{feature.title}</h3>
                  <p className="text-slate-400 text-lg font-light leading-relaxed">{feature.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA - Oversized */}
      <section className="py-24 md:py-40 relative border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/30 to-[#0A0F1C]"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-violet-600/10 blur-[100px] pointer-events-none"></div>
        
        <motion.div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center relative z-10" {...fadeUp}>
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-medium tracking-tighter mb-8 md:mb-12 max-w-4xl leading-[1.05] text-white">
            Ready to scale your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">engineering?</span>
          </h2>
          <Link to="/contact" className="group inline-flex items-center justify-center gap-4 bg-white text-[#0A0F1C] hover:bg-slate-200 px-8 md:px-10 py-4 md:py-5 rounded-full text-lg md:text-xl font-medium transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 w-full sm:w-auto">
            Start the conversation <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
