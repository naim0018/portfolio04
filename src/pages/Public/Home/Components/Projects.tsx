import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const projectFilters = [
  { id: 'all', name: 'All Work' },
  { id: 'webapp', name: 'Web App' },
  { id: 'saas', name: 'SaaS' },
  { id: 'backend', name: 'Backend' },
];

const projects = [
  {
    title: 'Enterprise Analytics Dashboard',
    category: 'webapp',
    type: 'Web App',
    year: '2023',
    subtitle: 'Real-time data visualization platform',
    description: 'A comprehensive analytics dashboard for Fortune 500 companies with real-time data processing and AI-powered insights.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    tech: ['React', 'TypeScript', 'D3.js', 'AWS'],
    links: { demo: '#', github: '#' },
  },
  {
    title: 'AI Content Platform',
    category: 'saas',
    type: 'SaaS',
    year: '2023',
    subtitle: 'AI-powered content creation suite',
    description: 'Intelligent platform leveraging GPT-4 and custom ML models for marketing teams.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
    tech: ['Next.js', 'Python', 'OpenAI', 'Stripe'],
    links: { demo: '#', github: '#' },
  },
  {
    title: 'FinTech Payment Gateway',
    category: 'backend',
    type: 'Backend',
    year: '2022',
    subtitle: 'Secure payment infrastructure',
    description: 'PCI-DSS compliant payment gateway handling $50M+ monthly with 30+ currencies.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop',
    tech: ['Go', 'Kafka', 'Redis', 'Terraform'],
    links: { demo: '#', github: '#' },
  },
  {
    title: 'Real Estate Portal',
    category: 'webapp',
    type: 'Web App',
    year: '2022',
    subtitle: 'High-performance property search',
    description: 'A lightning-fast portal with advanced filtering, map integration, and automated valuations.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop',
    tech: ['React', 'Node.js', 'PostgreSQL', 'ElasticSearch'],
    links: { demo: '#', github: '#' },
  },
  {
    title: 'Health Tracking App',
    category: 'webapp',
    type: 'Web App',
    year: '2021',
    subtitle: 'Wellness and fitness monitor',
    description: 'Personalized wellness application with biometric data analysis and habit tracking.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop',
    tech: ['ReactNative', 'Firebase', 'Redux', 'D3.js'],
    links: { demo: '#', github: '#' },
  },
  {
    title: 'Cloud Infrastructure Tool',
    category: 'saas',
    type: 'SaaS',
    year: '2021',
    subtitle: 'DevOps automation suite',
    description: 'Platform for automated cloud resource provisioning and security monitoring.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?w=800&h=500&fit=crop',
    tech: ['Go', 'Docker', 'Kubernetes', 'AWS'],
    links: { demo: '#', github: '#' },
  },
];

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = projects.filter(
    (project) => activeFilter === 'all' || project.category === activeFilter
  );

  return (
    <section id="projects" className="px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-5 py-2 rounded-full text-[11px] font-bold tracking-widest uppercase bg-primary-500/10 text-primary-400 border border-primary-500/20"
          >
            Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mt-6 tracking-tight"
          >
            Featured <span className="gradient-text">Work</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            A selection of projects that showcase my expertise in building robust, performant, and scalable applications.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16 md:mb-24">
          {projectFilters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={cn(
                'px-8 py-3 rounded-2xl text-[10px] uppercase tracking-widest font-bold transition-all duration-300 border',
                activeFilter === filter.id
                  ? 'bg-primary-500 text-white border-primary-500 shadow-[0_0_20px_rgba(139,92,246,0.3)] scale-105'
                  : 'bg-white/5 text-gray-400 border-white/5 hover:bg-white/10 hover:text-gray-300'
              )}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                className="group relative"
              >
                <div className="glass-card rounded-3xl overflow-hidden group hover:border-primary-500/30 transition-all duration-500 flex flex-col h-full shadow-2xl">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-default/90 via-dark-default/20 to-transparent" />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-primary-900/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-5">
                      <motion.a 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.links.demo} 
                        className="p-4 rounded-2xl bg-white/20 text-white hover:bg-white/30 backdrop-blur-md border border-white/20 transition-all shadow-xl"
                      >
                        <ExternalLink className="w-6 h-6" />
                      </motion.a>
                      <motion.a 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.links.github} 
                        className="p-4 rounded-2xl bg-white/20 text-white hover:bg-white/30 backdrop-blur-md border border-white/20 transition-all shadow-xl"
                      >
                        <Github className="w-6 h-6" />
                      </motion.a>
                    </div>

                    {/* Tags */}
                    <span className={cn(
                      "absolute top-5 left-5 px-4 py-1.5 rounded-full text-[10px] font-bold font-mono tracking-widest uppercase backdrop-blur-md shadow-lg",
                      project.category === 'webapp' ? 'bg-primary-500/80 text-white' : 
                      project.category === 'saas' ? 'bg-accent-500/80 text-white' : 
                      'bg-green-500/80 text-white'
                    )}>
                      {project.type}
                    </span>
                    <span className="absolute top-5 right-5 px-3 py-1.5 rounded-xl text-[10px] font-bold font-mono bg-black/40 text-gray-300 backdrop-blur-md border border-white/10 uppercase tracking-widest">
                      {project.year}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors uppercase tracking-wide leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm text-primary-400 font-bold uppercase tracking-[0.2em] mb-4 text-[11px]">
                        {project.subtitle}
                      </p>
                      <p className="text-sm text-gray-400 mb-8 line-clamp-3 leading-relaxed font-normal">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 text-[9px] font-bold font-mono rounded-lg bg-white/5 text-gray-500 border border-white/5 transition-all group-hover:border-primary-500/20 group-hover:text-primary-400 uppercase tracking-widest"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <motion.button 
                        whileHover={{ x: 5 }}
                        className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-[10px] uppercase font-bold tracking-[0.2em] text-white hover:bg-primary-500 hover:border-primary-500 transition-all duration-300 shadow-xl group/btn"
                      >
                        View Case Study <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24 text-center"
        >
          <a href="#" className="inline-flex items-center gap-3 text-gray-500 hover:text-white transition-all font-bold uppercase text-[11px] tracking-[0.3em] group">
            Explore All Projects <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
