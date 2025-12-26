'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      className="py-12 md:py-16 lg:py-20 bg-black grid-pulse relative"
      ref={ref}
    >
      <div className="scan-line-horizontal"></div>
      {/* Corner Frame Accents */}
      <div className="absolute top-0 left-0 w-6 h-6 md:w-8 md:h-8 border-t border-l border-white/20 pulse-beacon"></div>
      <div className="absolute top-0 right-0 w-6 h-6 md:w-8 md:h-8 border-t border-r border-white/20 pulse-beacon"></div>
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
            About me
          </h2>
          <div className="w-16 md:w-20 h-px bg-white/40 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4 text-sm md:text-base text-gray-300 leading-relaxed font-mono"
        >
          <p>
            Who am I as a Software Technologist - I consider myself as a budding software 
            technologist who is having excellent knowledge on Javascript & Typescript based technologies 
            in full-stack development.
          </p>
          <p>
            My journey in web & mobile development has equipped me with a comprehensive 
            understanding of both frontend and backend technologies, allowing me to create 
            seamless and robust applications. I thrive in collaborative environments and am 
            constantly seeking opportunities to expand my skill set and stay current with 
            emerging technologies.
          </p>
          <p>
            In addition to coding, I enjoy tackling new challenges, participating in hackathons, 
            contributing to open-source projects, and sharing my knowledge with the community. 
            My goal is to continue evolving as a developer and contribute to innovative solutions 
            that make a difference. I'm currently working full-time as a software developer in a 
            renowned development company located in the capital of India, New Delhi.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
