import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useVelocity, useMotionValue, useMotionValueEvent } from 'framer-motion';
import { Calendar, MapPin, Rocket } from 'lucide-react';

const experiences = [
  {
    role: 'Senior Software Engineer',
    company: 'TechCorp Global',
    year: '2022',
    period: 'Jan 2022 — Present',
    location: 'San Francisco, CA',
    description: 'Leading a team of 8 engineers building enterprise SaaS platform serving 500K+ users.',
    achievements: [
      'Architected microservices reducing latency by 40%',
      'Led analytics dashboard for Fortune 100 clients',
      'Reduced infrastructure costs by 35%',
    ],
    tech: ['React', 'Next.js', 'Node.js', 'AWS', 'Docker'],
  },
  {
    role: 'Full-Stack Developer',
    company: 'InnovateTech Solutions',
    year: '2019',
    period: 'Jun 2019 — Dec 2021',
    location: 'New York, NY',
    description: 'Developed and maintained multiple client-facing web applications with cross-functional teams.',
    achievements: [
      'Built collaboration platform for 10K+ concurrent users',
      'Improved app performance by 60%',
      'Achieved 85% code coverage',
    ],
    tech: ['React', 'TypeScript', 'Python', 'GraphQL'],
  },
  {
    role: 'Software Developer',
    company: 'StartupXYZ',
    year: '2017',
    period: 'Aug 2017 — May 2019',
    location: 'Austin, TX',
    description: 'Early-stage startup — frontend to DevOps. Built products from 0 to 1.',
    achievements: [
      'Built MVP, helping secure $2M seed funding',
      'Designed entire frontend architecture',
      'Data pipeline processing 100K+ records/day',
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
  },
];

const Experience: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  const scrollVelocity = useVelocity(scrollYProgress);

  // MotionValue as the spring's reactive target — set() triggers smooth animation
  const rotationTarget = useMotionValue(135); // start pointing down-right (rocket icon is -45° visually)

  useMotionValueEvent(scrollVelocity, "change", (latest) => {
    if (latest > 0.001) {
      // Scrolling down → point rocket downward
      rotationTarget.set(180);
    } else if (latest < -0.001) {
      // Scrolling up → flip rocket to point upward
      rotationTarget.set(0);
    }
  });

  const scrollYSpring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const rocketY = useTransform(scrollYSpring, [0, 1], ["0%", "100%"]);

  // Spring-driven rotation from the MotionValue target — reacts instantly to .set()
  const rocketRotate = useSpring(rotationTarget, { stiffness: 260, damping: 28 });
  
  return (
    <section id="experience" className="px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24 md:mb-32">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-5 py-2 rounded-full text-[11px] font-bold tracking-widest uppercase bg-primary-500/10 text-primary-400 border border-primary-500/20"
          >
            Experience
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mt-6 tracking-tight"
          >
            Professional <span className="gradient-text">Journey</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            A timeline of my career growth and key achievements
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto" ref={timelineRef}>
          {/* Vertical Timeline Track */}
          <div className="absolute left-0 md:left-1/2 top-0 w-[2px] h-full bg-white/5 transform md:-translate-x-1/2 z-0" />
          
          {/* Vertical Timeline Progress */}
          <motion.div
            style={{ 
              scaleY: scrollYSpring,
              originY: 0
            }}
            className="absolute left-0 md:left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-primary-500 via-accent-400 to-transparent transform md:-translate-x-1/2 z-0 shadow-[0_0_15px_rgba(139,92,246,0.3)]"
          />

          {/* Animated Rocket Assembly */}
          <motion.div
            style={{
              top: rocketY,
              rotate: rocketRotate,
              x: '-50%',
              translateY: '-50%',
            }}
            className="absolute left-0 md:left-1/2 z-30 flex flex-col items-center origin-center"
          >
            <div className="relative flex flex-col items-center">
              {/* Rocket Housing */}
              <div className="w-12 h-12 rounded-full bg-[#030014] border border-primary-500/30 shadow-[0_0_30px_rgba(139,92,246,0.2)] flex items-center justify-center p-2.5 relative z-10 backdrop-blur-md">
                <Rocket className="w-full h-full text-white fill-white/10 transform -rotate-45" />
              </div>
              
              {/* Ultra-Realistic Flame Assembly */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full -mt-2 w-10 h-16 flex flex-col items-center pointer-events-none z-0">
                {/* 1. Outer Plasma Glow */}
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 0.4, repeat: Infinity }}
                  className="absolute w-6 h-12 bg-red-600/30 blur-xl rounded-full"
                />
                {/* 2. Main Tail */}
                <motion.div 
                  animate={{ scaleY: [1, 1.8, 1.3], opacity: [0.6, 1, 0.7] }}
                  transition={{ duration: 0.2, repeat: Infinity }}
                  className="absolute w-4 h-10 bg-gradient-to-b from-orange-500 via-red-500 to-transparent blur-md rounded-full"
                />
                {/* 3. Core Pulse */}
                <motion.div 
                  animate={{ scaleY: [1, 2.2, 1.5], opacity: [0.8, 1, 0.9] }}
                  transition={{ duration: 0.1, repeat: Infinity }}
                  className="absolute w-2 h-8 bg-gradient-to-b from-white via-yellow-300 to-transparent blur-[2px] rounded-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Experience entries follow... */}
          <div className="space-y-16 relative z-10 py-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role + i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`relative flex items-center justify-start md:justify-between w-full font-normal ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Intersection Node */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ 
                    scale: 1,
                    backgroundColor: 'rgba(139, 92, 246, 1)',
                    boxShadow: '0 0 20px rgba(139,92,246,0.6)'
                  }}
                  viewport={{ once: true, margin: "-50% 0px -50% 0px" }}
                  transition={{ duration: 0.5 }}
                  className="absolute left-[-11px] md:left-1/2 md:-translate-x-1/2 top-4 w-6 h-6 rounded-full border-4 border-[#030014] z-20"
                />

                <div className="w-full md:w-[45%] pl-10 md:pl-0">
                  <div className="glass-card p-10 rounded-3xl group hover:border-primary-500/30 transition-all duration-500">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors tracking-tight leading-tight">
                          {exp.role}
                        </h3>
                        <p className="text-primary-400 font-bold uppercase tracking-widest mt-2 text-[10px]">
                          {exp.company}
                        </p>
                      </div>
                      <span className="px-5 py-2 rounded-2xl text-[10px] font-bold font-mono bg-primary-500/10 text-primary-400 border border-primary-500/10 shadow-inner group-hover:bg-primary-500 group-hover:text-white transition-all">
                        {exp.year}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-8 text-[11px] text-gray-500 mb-8 font-bold uppercase tracking-wider text-nowrap">
                      <span className="flex items-center gap-3">
                        <Calendar className="w-4 h-4 text-primary-500/60" /> {exp.period}
                      </span>
                      <span className="flex items-center gap-3">
                        <MapPin className="w-4 h-4 text-primary-500/60" /> {exp.location}
                      </span>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed mb-8 font-normal">
                      {exp.description}
                    </p>

                    <div className="space-y-4 mb-10">
                      {exp.achievements.map((achievement, j) => (
                        <div key={j} className="flex items-start gap-4 text-sm text-gray-500 font-normal group/item">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 shrink-0 group-hover/item:scale-150 transition-transform shadow-[0_0_8px_rgba(139,92,246,0.8)]"></div>
                          <span className="group-hover/item:text-gray-300 transition-colors leading-relaxed">{achievement}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3 pt-8 border-t border-white/5">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-4 py-2 text-[10px] font-bold font-mono rounded-xl bg-white/5 text-gray-400 group-hover:text-primary-400 group-hover:bg-primary-500/10 transition-all uppercase tracking-widest border border-white/5 hover:border-primary-500/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty side for layout balance */}
                <div className="hidden md:block w-[45%]"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
