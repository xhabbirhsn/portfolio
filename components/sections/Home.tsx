'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { GlitterFinal } from '@/components/ui/animated-hero-with-web-gl-glitter';

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden starfield-bg">
      {/* WebGL Glitter Background */}
      <GlitterFinal speed={0.75} intensity={5.0} className="absolute inset-0 z-0" />
      
      {/* Scanning line effect */}
      <div className="scan-line"></div>
      
      {/* Corner Frame Accents */}
      <div className="absolute top-0 left-0 w-8 h-8 md:w-12 md:h-12 border-t border-l border-white/30 z-20"></div>
      <div className="absolute top-0 right-0 w-8 h-8 md:w-12 md:h-12 border-t border-r border-white/30 z-20"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 md:w-12 md:h-12 border-b border-l border-white/30 z-20"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 md:w-12 md:h-12 border-b border-r border-white/30 z-20"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
        <div className="text-center">
          {/* Technical Header Line */}
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 0.6, width: 'auto' }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-2 mb-4 md:mb-6"
          >
            <div className="w-12 md:w-20 h-px bg-white"></div>
            <span className="text-white text-[8px] md:text-[10px] font-mono tracking-wider">001</span>
            <div className="w-12 md:w-20 h-px bg-white"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 md:mb-3 font-mono tracking-wider" style={{ letterSpacing: '0.1em' }}>
              SHABBIR
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm md:text-lg lg:text-xl text-white/60 mb-2 md:mb-3 font-mono"
          >
            FULL STACK DEVELOPER
          </motion.p>
          
          {/* Decorative dots pattern */}
          <div className="hidden md:flex justify-center gap-1 mb-6 opacity-40">
            {Array.from({ length: 40 }).map((_, i) => (
              <div key={i} className="w-0.5 h-0.5 bg-white rounded-full"></div>
            ))}
          </div>
          <div className="flex md:hidden justify-center gap-1 mb-4 opacity-40">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="w-0.5 h-0.5 bg-white rounded-full"></div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xs md:text-sm lg:text-base text-gray-300 max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed font-mono opacity-80 px-4"
          >
            Where code meets creativity — Building modern web applications with precision and performance
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-6 md:mb-8 px-4"
          >
            <a
              href="#projects"
              className="relative w-full sm:w-auto px-5 md:px-6 py-2 md:py-2.5 bg-transparent text-white font-mono text-xs md:text-sm border border-white hover:bg-white hover:text-black transition-all duration-200 group text-center"
            >
              <span className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
              VIEW MY WORK
            </a>
            <a
              href="/images/Shabbir_resume.pdf"
              download="Shabbir_Resume.pdf"
              className="w-full sm:w-auto px-5 md:px-6 py-2 md:py-2.5 bg-transparent border border-white text-white font-mono text-xs md:text-sm hover:bg-white hover:text-black transition-all duration-200 text-center"
            >
              DOWNLOAD RESUME
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-5 md:px-6 py-2 md:py-2.5 bg-transparent border border-white text-white font-mono text-xs md:text-sm hover:bg-white hover:text-black transition-all duration-200 text-center"
            >
              GET IN TOUCH
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex gap-3 md:gap-4 justify-center"
          >
            <a
              href="https://www.linkedin.com/in/shabbir-hassan-bb30b0288"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border tech-border text-white hover:bg-white/10 tech-glow transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/xhabbirhsn"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border tech-border text-white hover:bg-white/10 tech-glow transition-all"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://leetcode.com/u/xhabbirhsn/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border tech-border text-white hover:bg-white/10 tech-glow transition-all"
              aria-label="LeetCode"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z"/>
              </svg>
            </a>
          </motion.div>
          
          {/* Bottom technical notation */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 1.2 }}
            className="flex items-center justify-center gap-2 mt-8 md:mt-12 px-4"
          >
            <span className="text-white text-[8px] md:text-[9px] font-mono">∞</span>
            <div className="w-20 md:w-32 h-px bg-white"></div>
            <span className="text-white text-[8px] md:text-[9px] font-mono">SYSTEM.ACTIVE</span>
            <div className="w-20 md:w-32 h-px bg-white"></div>
            <span className="text-white text-[8px] md:text-[9px] font-mono">∞</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
