'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="contact"
      className="py-12 md:py-16 lg:py-20 bg-black dither-pattern energy-field relative"
      ref={ref}
    >
      <div className="scan-line"></div>
      {/* Corner Frame Accents */}
      <div className="absolute top-0 left-0 w-6 h-6 md:w-8 md:h-8 border-t border-l border-white/20"></div>
      <div className="absolute top-0 right-0 w-6 h-6 md:w-8 md:h-8 border-t border-r border-white/20"></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 md:w-8 md:h-8 border-b border-l border-white/20"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 md:w-8 md:h-8 border-b border-r border-white/20"></div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold font-mono text-white mb-3 tracking-wider uppercase">
            Contact me
          </h2>
          <div className="w-16 md:w-20 h-px bg-white/40 mx-auto mb-6 md:mb-8"></div>

          <a href="mailto:xhabbirhsn@gmail.com" className="block">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 p-3 md:p-4 w-full md:inline-flex items-center gap-2 border tech-border-accent hover:bg-white/10 tech-glow transition-all flex justify-center cursor-pointer"
            >
              <div className="w-6 h-6 md:w-8 md:h-8 bg-white/10 flex items-center justify-center border tech-border">
                <Mail className="text-white" size={16} />
              </div>
              <span className="text-sm md:text-base font-mono text-white hover:text-gray-300 transition-colors break-all">
                xhabbirhsn@gmail.com
              </span>
            </motion.div>
          </a>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-sm text-gray-400 font-mono"
          >
            <a 
              href="mailto:xhabbirhsn@gmail.com" 
              className="hover:text-gray-300 transition-colors cursor-pointer"
            >
              Get in touch →
            </a>
          </motion.p>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 md:mt-20 pt-6 md:pt-8 border-t border-white/20 text-center text-gray-500 text-xs md:text-sm font-mono"
        >
          <p>© {new Date().getFullYear()} All rights are reserved by Shabbir</p>
        </motion.div>
      </div>
    </section>
  );
}
