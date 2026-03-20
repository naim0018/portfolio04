import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, MapPin, Mail, Download } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <Briefcase className="w-5 h-5" />, label: 'Experience', value: '7+ Years' },
    { icon: <Award className="w-5 h-5" />, label: 'Projects', value: '50+ Completed' },
    { icon: <MapPin className="w-5 h-5" />, label: 'Location', value: 'San Francisco, CA' },
    { icon: <Mail className="w-5 h-5" />, label: 'Email', value: 'alex@alexmitchell.dev' },
  ];

  return (
    <section id="about" className="px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-5 py-2 rounded-full text-[11px] font-bold tracking-widest uppercase bg-primary-500/10 text-primary-400 border border-primary-500/20"
          >
            About Me
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mt-6 tracking-tight"
          >
            Passionate Developer, <span className="gradient-text">Problem Solver</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Here's a little more about who I am and what drives me
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 xl:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="relative group max-w-md mx-auto">
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-400/20 z-10 group-hover:opacity-40 transition-opacity"></div>
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face"
                  alt="Alex Mitchell"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 border-2 border-primary-500/20 rounded-3xl z-20 transition-all group-hover:border-primary-500/40"></div>
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -right-6 w-28 h-28 bg-dark-100/90 rounded-3xl border border-primary-500/20 backdrop-blur-xl flex flex-col items-center justify-center z-30 shadow-2xl"
              >
                <span className="text-4xl font-bold gradient-text">7+</span>
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Years</span>
              </motion.div>
              <div className="absolute -top-6 -left-6 grid grid-cols-4 gap-2 opacity-20 group-hover:opacity-40 transition-opacity">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-primary-500"></div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 space-y-8"
          >
            <div className="space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed font-normal">
                I'm a <span className="text-white font-semibold">Senior Full-Stack Developer</span> with 7+ years of experience crafting scalable web applications and leading engineering teams. I specialize in React/Next.js ecosystems and cloud-native architectures.
              </p>
              <p className="text-gray-400 leading-relaxed font-normal">
                Throughout my career, I've worked with Fortune 500 companies, innovative startups, and everything in between. I believe in writing clean, maintainable code and building products that genuinely improve people's lives.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="glass-card p-6 rounded-2xl flex flex-col gap-3 group"
                >
                  <div className="p-3 bg-primary-500/10 rounded-xl text-primary-500 w-fit group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">{stat.label}</p>
                    <p className="text-sm font-bold text-white">{stat.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary-500 hover:bg-primary-600 text-white font-bold transition-all shadow-xl shadow-primary-500/20 group uppercase text-xs tracking-widest"
            >
              <Download className="w-4 h-4" /> Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
