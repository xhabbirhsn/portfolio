'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Back-End Developer',
    company: 'Celebal Technologies Pvt. Ltd.',
    period: '2023 - present',
    description: 'Currently working as a backend developer, building scalable backend services and RESTful APIs. Implementing microservices architecture, database optimization, and ensuring application security and performance.',
  },
  {
    title: 'Front-End Developer',
    company: 'College Tech Festival / Internship',
    period: 'April 2022 - April 2023',
    description: 'Worked as a frontend developer creating responsive and interactive user interfaces. Collaborated with design and backend teams to deliver high-quality web applications using React and modern JavaScript frameworks.',
  },
  {
    title: 'Graduate in B.Tech',
    company: 'Rajasthan Technical University',
    period: '2019 - 2023',
    description: 'Completed my Bachelor of Technology degree in Computer Science Engineering with distinction. Gained comprehensive knowledge in software development, algorithms, data structures, and modern web technologies.',
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="experience"
      className="py-12 md:py-16 lg:py-20 bg-black tech-grid relative"
      ref={ref}
    >
      <div className="scan-line-horizontal"></div>
      {/* Corner Frame Accents */}
      <div className="absolute top-0 left-0 w-6 h-6 md:w-8 md:h-8 border-t border-l border-white/20"></div>
      <div className="absolute top-0 right-0 w-6 h-6 md:w-8 md:h-8 border-t border-r border-white/20"></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 md:w-8 md:h-8 border-b border-l border-white/20"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 md:w-8 md:h-8 border-b border-r border-white/20"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold font-mono text-white mb-3 tracking-wider uppercase">
            Career Journey
          </h2>
          <div className="w-16 md:w-20 h-px bg-white/40 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto font-mono text-sm">
            My professional path and educational background showcasing growth and learning
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-white/20"></div>

          <div className="space-y-6 md:space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-6 top-0 w-4 h-4 md:w-5 md:h-5 bg-white border-2 md:border-4 border-black tech-glow"></div>

                {/* Date badge */}
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-2 font-mono">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>

                {/* Content */}
                <div className="bg-white/5 p-4 md:p-6 border tech-border-accent hover:bg-white/10 transition-colors">
                  <h3 className="text-lg md:text-xl font-bold font-mono text-white mb-1 tracking-wider">
                    {exp.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-300 font-medium mb-3 font-mono">
                    {exp.company}
                  </p>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed font-mono">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
