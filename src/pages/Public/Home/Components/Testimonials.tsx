import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO at InnovateTech',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    text: 'Alex is one of the most talented developers I have ever worked with. His ability to understand complex requirements and turn them into elegant solutions is truly remarkable.',
    stars: 5,
  },
  {
    name: 'Michael Chen',
    role: 'CTO at TechCorp',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    text: 'Working with Alex was a game-changer for our architecture. He didn\'t just write code; he helped us design a system that can scale for years to come.',
    stars: 5,
  },
  {
    name: 'Emily Davis',
    role: 'Product Manager at StartupXYZ',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    text: 'Highly professional, great communicator, and exceptional technical skills. Alex delivered our MVP ahead of schedule and exceeded all our expectations.',
    stars: 5,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-5 py-2 rounded-full text-[11px] font-bold tracking-widest uppercase bg-primary-500/10 text-primary-400 border border-primary-500/20"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mt-6 tracking-tight"
          >
            Kind <span className="gradient-text">Words</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            What people are saying about working with me
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card p-10 rounded-3xl relative flex flex-col items-center text-center shadow-2xl group hover:border-primary-500/30 transition-all duration-500"
            >
              <div className="absolute top-8 left-8 text-primary-500/20 group-hover:text-primary-500/40 transition-colors">
                <Quote className="w-12 h-12" />
              </div>

              <div className="relative w-20 h-20 rounded-2xl overflow-hidden mb-6 group-hover:scale-110 transition-transform duration-500 border border-white/10 shadow-xl">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.stars)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              <p className="text-gray-400 italic mb-8 leading-relaxed font-normal">
                "{testimonial.text}"
              </p>

              <div className="mt-auto">
                <h4 className="text-lg font-bold text-white mb-1 uppercase tracking-widest leading-normal">{testimonial.name}</h4>
                <p className="text-[10px] text-primary-400 font-bold uppercase tracking-widest">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
