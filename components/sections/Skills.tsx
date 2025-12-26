'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'NextJS', 'Redux'],
  },
  {
    category: 'Backend',
    skills: ['NodeJS', 'Express', 'NestJS', 'GraphQL', 'REST API', 'WebSocket'],
  },
  {
    category: 'Database',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'],
  },
  {
    category: 'AI & Machine Learning',
    skills: ['LLM', 'RAG', 'Generative AI', 'OpenAI API', 'Langchain', 'Vector DB', 'Prompt Engineering'],
  },
  {
    category: 'Tools & Deployment',
    skills: ['Git', 'Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Linux'],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="skills"
      className="py-20 bg-black grid-pulse hologram relative"
      ref={ref}
    >
      {/* Corner Frame Accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/20"></div>
      <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/20"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/20"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/20"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-3 tracking-wider uppercase">
            Professional Skills
          </h2>
          <div className="w-20 h-px bg-white/40 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto font-mono text-sm">
            I possess excellent knowledge of prominent backend and frontend technologies with hands-on experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="bg-white/5 border tech-border-accent p-6"
            >
              <h3 className="text-lg font-semibold font-mono text-white mb-4 flex items-center gap-2 tracking-wider uppercase">
                <span className="text-white/60">◆</span>
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                    className="px-4 py-2 bg-white/10 hover:bg-white/15 text-gray-300 text-sm font-medium font-mono transition-all duration-200 border tech-border"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
