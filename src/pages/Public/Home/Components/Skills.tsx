import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const skillCategories = [
  { id: 'all', name: 'All' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'backend', name: 'Backend' },
  { id: 'database', name: 'Database' },
  { id: 'devops', name: 'Cloud & DevOps' },
  { id: 'tools', name: 'Tools' },
];

const skills = [
  { name: 'React', category: 'frontend', percent: 95, color: '#61DAFB', icon: '⚛' },
  { name: 'Next.js', category: 'frontend', percent: 92, color: '#a78bfa', icon: '▲' },
  { name: 'TypeScript', category: 'frontend', percent: 90, color: '#3178C6', icon: 'TS' },
  { name: 'JavaScript', category: 'frontend', percent: 95, color: '#F7DF1E', icon: 'JS' },
  { name: 'Tailwind', category: 'frontend', percent: 93, color: '#06B6D4', icon: '💨' },
  { name: 'Node.js', category: 'backend', percent: 88, color: '#339933', icon: '⬡' },
  { name: 'Python', category: 'backend', percent: 82, color: '#3776AB', icon: '🐍' },
  { name: 'GraphQL', category: 'backend', percent: 85, color: '#E10098', icon: '◈' },
  { name: 'PostgreSQL', category: 'database', percent: 85, color: '#4169E1', icon: '🐘' },
  { name: 'MongoDB', category: 'database', percent: 80, color: '#47A248', icon: '🍃' },
  { name: 'AWS', category: 'devops', percent: 85, color: '#FF9900', icon: 'AWS' },
  { name: 'Docker', category: 'devops', percent: 88, color: '#2496ED', icon: '🐳' },
  { name: 'Git', category: 'tools', percent: 92, color: '#F05032', icon: '⎇' },
  { name: 'Figma', category: 'tools', percent: 75, color: '#F24E1E', icon: '🎨' },
];

const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredSkills = skills.filter(
    (skill) => activeFilter === 'all' || skill.category === activeFilter
  );

  return (
    <section id="skills" className="px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative bg-transparent overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-accent-400/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-5 py-2 rounded-full text-[11px] font-bold tracking-widest uppercase bg-primary-500/10 text-primary-400 border border-primary-500/20"
          >
            Skills
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mt-6 tracking-tight"
          >
            Technical <span className="gradient-text">Expertise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Technologies and tools I work with daily
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 md:mb-20">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={cn(
                'px-6 py-2.5 rounded-2xl text-[10px] uppercase tracking-widest font-bold transition-all duration-300 border',
                activeFilter === cat.id
                  ? 'bg-primary-500 text-white border-primary-500 shadow-[0_0_20px_rgba(139,92,246,0.5)] scale-105'
                  : 'bg-white/5 text-gray-500 border-white/5 hover:bg-white/10 hover:text-gray-300'
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass-card p-6 rounded-3xl group text-center hover:bg-white/10"
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" 
                  style={{ background: `${skill.color}15`, color: skill.color }}
                >
                  <span className="drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]">{skill.icon}</span>
                </div>
                <h3 className="font-bold text-white text-sm mb-2 group-hover:text-primary-400 transition-colors uppercase tracking-widest leading-normal">{skill.name}</h3>
                <div className="text-[10px] text-gray-500 mb-4 font-bold font-mono uppercase tracking-widest">{skill.percent}% expertise</div>
                <div className="skill-bar h-1.5 bg-dark-200/50 backdrop-blur-sm overflow-hidden rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: 'easeOut', delay: index * 0.1 }}
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)` }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
