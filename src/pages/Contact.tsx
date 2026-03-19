import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.projectType) newErrors.projectType = 'Please select a project type';
    if (!formData.budget) newErrors.budget = 'Please select a budget range';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  const inputClasses = (fieldId: string) => `
    w-full px-4 py-3.5 rounded-xl border outline-none transition-all duration-200 bg-[#0F172A]/50 text-white
    ${errors[fieldId] 
      ? 'border-red-500/50 focus:bg-[#0F172A] focus:ring-4 focus:ring-red-500/10 focus:border-red-500' 
      : 'border-white/10 focus:bg-[#0F172A] focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 hover:border-white/20'
    }
  `;

  return (
    <div className="pt-28 md:pt-40 pb-24 min-h-screen flex flex-col bg-[#0A0F1C]">
      <section className="flex-grow">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            
            {/* Contact Info */}
            <motion.div className="lg:sticky lg:top-32 h-fit relative z-10" {...fadeUp}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border border-white/10">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                <span className="text-sm font-medium text-slate-300 tracking-wide uppercase">Contact Us</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-6 md:mb-8 leading-[1.05]">Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">touch.</span></h1>
              <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light mb-12 md:mb-16">
                Ready to accelerate your product development? Reach out to our team to discuss your technical requirements and business objectives.
              </p>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-[#0F172A] border border-white/5 group-hover:border-blue-500/30 transition-colors rounded-full flex items-center justify-center shrink-0 shadow-inner">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                    <a href="mailto:contact@versalab.io" className="text-slate-400 hover:text-cyan-400 transition-colors">contact@versalab.io</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-[#0F172A] border border-white/5 group-hover:border-blue-500/30 transition-colors rounded-full flex items-center justify-center shrink-0 shadow-inner">
                    <Phone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                    <a href="tel:+8801601802857" className="text-slate-400 hover:text-cyan-400 transition-colors">+880 1601 802857</a>
                    <p className="text-slate-500 text-sm mt-1">Available Mon-Fri, 9am - 6pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-[#0F172A] border border-white/5 group-hover:border-blue-500/30 transition-colors rounded-full flex items-center justify-center shrink-0 shadow-inner">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
                    <p className="text-slate-400">Bangladesh</p>
                    <p className="text-slate-500 text-sm mt-1">Remote Global Team</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              className="glass-panel rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden card-glow-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              {isSuccess ? (
                <div className="absolute inset-0 bg-[#0A0F1C]/95 backdrop-blur-md z-10 flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-500">
                  <div className="w-20 h-20 bg-emerald-900/30 border border-emerald-500/30 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Request Received</h3>
                  <p className="text-slate-400 max-w-sm">
                    Thank you for reaching out. Our team will review your project details and get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 text-cyan-400 font-medium hover:text-cyan-300 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : null}

              <h3 className="text-2xl font-bold text-white mb-8">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-slate-300 mb-1.5">Full Name <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    id="fullName" 
                    value={formData.fullName}
                    onChange={handleChange}
                    className={inputClasses('fullName')} 
                    placeholder="Jane Doe" 
                  />
                  {errors.fullName && <p className="text-red-500 text-xs mt-1.5">{errors.fullName}</p>}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">Work Email <span className="text-red-500">*</span></label>
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClasses('email')} 
                      placeholder="jane@company.com" 
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-1.5">Company Name <span className="text-slate-500 font-normal">(Optional)</span></label>
                    <input 
                      type="text" 
                      id="company" 
                      value={formData.company}
                      onChange={handleChange}
                      className={inputClasses('company')} 
                      placeholder="Acme Corp" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-slate-300 mb-1.5">Project Type <span className="text-red-500">*</span></label>
                    <select 
                      id="projectType" 
                      value={formData.projectType}
                      onChange={handleChange}
                      className={`${inputClasses('projectType')} [&>option]:bg-[#0F172A] appearance-none`}
                    >
                      <option value="">Select type</option>
                      <option value="mvp">MVP Development</option>
                      <option value="saas">Custom SaaS Platform</option>
                      <option value="team">Team Augmentation</option>
                      <option value="design">Product Design / UI/UX</option>
                      <option value="academic">Academic Companion</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.projectType && <p className="text-red-500 text-xs mt-1.5">{errors.projectType}</p>}
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-slate-300 mb-1.5">Budget Range <span className="text-red-500">*</span></label>
                    <select 
                      id="budget" 
                      value={formData.budget}
                      onChange={handleChange}
                      className={`${inputClasses('budget')} [&>option]:bg-[#0F172A] appearance-none`}
                    >
                      <option value="">Select range</option>
                      <option value="under-50k">Under $50k</option>
                      <option value="50k-100k">$50k - $100k</option>
                      <option value="100k-250k">$100k - $250k</option>
                      <option value="250k-plus">$250k+</option>
                    </select>
                    {errors.budget && <p className="text-red-500 text-xs mt-1.5">{errors.budget}</p>}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1.5">Project Details <span className="text-red-500">*</span></label>
                  <textarea 
                    id="message" 
                    value={formData.message}
                    onChange={handleChange}
                    rows={4} 
                    className={`${inputClasses('message')} resize-none`} 
                    placeholder="Tell us about your objectives, timeline, and technical requirements..."
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1.5">{errors.message}</p>}
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full relative group flex items-center justify-center bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold py-4 rounded-xl transition-all duration-300 neon-btn hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed mt-6"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin mr-2" />
                      Processing...
                    </>
                  ) : (
                    'Submit Request'
                  )}
                </button>
                <p className="text-xs text-slate-500 text-center mt-4">
                  By submitting this form, you agree to our Privacy Policy and Terms of Service.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
