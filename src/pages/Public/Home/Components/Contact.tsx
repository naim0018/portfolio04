import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Send, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    setTimeout(() => setFormState('success'), 1500);
  };

  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />, label: 'Email', value: 'alex@alexmitchell.dev' },
    { icon: <MapPin className="w-5 h-5" />, label: 'Location', value: 'San Francisco, CA' },
    { icon: <Phone className="w-5 h-5" />, label: 'Phone', value: '+1 (555) 000-0000' },
  ];

  return (
    <section id="contact" className="px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative bg-transparent overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-5 py-2 rounded-full text-[11px] font-bold tracking-widest uppercase bg-primary-500/10 text-primary-400 border border-primary-500/20"
          >
            Contact
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mt-6 tracking-tight"
          >
            Let's <span className="gradient-text">Connect</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Have a project in mind or just want to say hi? I'm always open to discussing new projects, creative ideas or opportunities.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 xl:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-12"
          >
            <div className="space-y-8">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-400 group-hover:bg-primary-500 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-xl">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">{info.label}</p>
                    <p className="text-lg font-bold text-white tracking-tight">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-10 border-t border-white/5">
              <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest">Follow me</h4>
              <div className="flex gap-4">
                {[
                  { icon: <Github className="w-5 h-5" />, href: '#' },
                  { icon: <Linkedin className="w-5 h-5" />, href: '#' },
                  { icon: <Twitter className="w-5 h-5" />, href: '#' },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-primary-400 hover:border-primary-500/50 hover:-translate-y-1 transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-8 md:p-12 rounded-3xl shadow-2xl relative">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                    <input
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary-500/50 transition-all focus:ring-1 ring-primary-500/20"
                      placeholder="Alex Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                    <input
                      required
                      type="email"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary-500/50 transition-all focus:ring-1 ring-primary-500/20"
                      placeholder="alex@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest ml-1">Subject</label>
                  <input
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary-500/50 transition-all focus:ring-1 ring-primary-500/20"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest ml-1">Message</label>
                  <textarea
                    required
                    rows={6}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary-500/50 transition-all focus:ring-1 ring-primary-500/20 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  disabled={formState !== 'idle'}
                  type="submit"
                  className={cn(
                    'w-full py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-xs transition-all flex items-center justify-center gap-3',
                    formState === 'success' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-primary-500 text-white hover:bg-primary-600 shadow-xl shadow-primary-500/20 hover:scale-[1.01] active:scale-[0.98]'
                  )}
                >
                  {formState === 'idle' && (
                    <>Send Message <Send className="w-4 h-4" /></>
                  )}
                  {formState === 'loading' && (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  )}
                  {formState === 'success' && (
                    <>Message Sent! <CheckCircle className="w-4 h-4" /></>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
