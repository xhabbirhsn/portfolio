'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Greenprint',
    description: 'Developed a scalable microservice architecture with multi-tenant support using NestJS and Azure cloud services. Implemented API gateway, Azure B2C authentication, and containerized deployment with Docker and Kubernetes for enterprise-level sustainability solutions.',
    tech: ['NestJS', 'PostgreSQL', 'Azure', 'API Gateway', 'Azure B2C', 'Redis', 'Docker', 'Kubernetes'],
    liveUrl: 'https://app.gprnt.ai/',
    githubUrl: '',
    image: '/images/greenprint.png',
    color: 'from-gray-700 to-gray-900',
  },
  {
    title: 'Curealy',
    description: 'Developed a comprehensive healthcare platform using Next.js and Node.js with PostgreSQL database. Implemented secure authentication, user management, and healthcare service delivery features for seamless patient care.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Auth', 'Vercel'],
    liveUrl: 'https://curealy.vercel.app/',
    githubUrl: 'https://github.com/xhabbirhsn/curealy',
    image: '/images/curealy.png',
    color: 'from-blue-500 to-blue-700',
  },
  {
    title: 'API Gateway Service',
    description: 'Created a robust API gateway handling authentication, rate limiting, and request routing. Integrated with multiple microservices with comprehensive logging and monitoring.',
    tech: ['NodeJS', 'Express', 'Redis', 'JWT', 'Docker'],
    liveUrl: '',
    githubUrl: '',
    color: 'from-indigo-500 to-purple-600',
  },
  {
    title: 'Real-time Chat Application Backend',
    description: 'Developed a real-time chat application backend with WebSocket support, message persistence, and user presence tracking. Scalable architecture supporting thousands of concurrent users.',
    tech: ['NodeJS', 'Socket.io', 'MongoDB', 'Redis', 'AWS'],
    liveUrl: '',
    githubUrl: '',
    color: 'from-indigo-600 to-purple-700',
  },
  {
    title: 'Authentication Microservice',
    description: 'Built a centralized authentication microservice with OAuth2, JWT tokens, and multi-factor authentication. Handles user management, session handling, and security protocols.',
    tech: ['NodeJS', 'PostgreSQL', 'JWT', 'OAuth', 'Docker'],
    liveUrl: '',
    githubUrl: '',
    color: 'from-gray-700 to-gray-900',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="projects"
      className="py-20 bg-black tech-grid energy-field relative"
      ref={ref}
    >
      <div className="scan-line"></div>
      {/* Corner Frame Accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/20"></div>
      <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/20"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/20"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/20"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-3 tracking-wider uppercase">
            Featured Projects
          </h2>
          <div className="w-20 h-px bg-white/40 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto font-mono text-sm">
            I always strive to build high-level technology-based projects that demonstrate my skills in architecting 
            and developing large-scale applications
          </p>
        </motion.div>

        <div className="space-y-8 md:space-y-12 lg:space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 overflow-hidden border tech-border-accent hover:bg-white/10 transition-all duration-300"
            >
              <div className="grid md:grid-cols-3 gap-0">
                {/* Left side - Content */}
                <div className="md:col-span-2 p-8 relative z-10">
                  <h3 className="text-2xl font-bold font-mono text-white mb-3 tracking-wider">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed font-mono text-sm">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/10 text-gray-300 text-sm font-medium font-mono border tech-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ cursor: 'pointer' }}
                        className="flex items-center gap-2 text-sm text-white font-medium font-mono hover:text-gray-300 transition-colors border tech-border px-3 py-1.5"
                      >
                        <ExternalLink size={16} />
                        Live URL
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ cursor: 'pointer' }}
                        className="flex items-center gap-2 text-sm text-white font-medium font-mono hover:text-gray-300 transition-colors border tech-border px-3 py-1.5"
                      >
                        <Github size={16} />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>

                {/* Right side - Visual/Mockup */}
                <div className="md:col-span-1 bg-white/5 flex items-center justify-center p-4 border-l tech-border">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center group"
                    >
                      {project.image ? (
                        <div className="relative w-full overflow-hidden border tech-border-accent" style={{ aspectRatio: '9/16', maxHeight: '280px' }}>
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-auto absolute top-0 left-0 transition-transform duration-[5000ms] ease-linear group-hover:translate-y-[calc(-100%+280px)]"
                          />
                        </div>
                      ) : (
                        <div className="w-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border tech-border-accent hover:bg-white/20 transition-all duration-300" style={{ aspectRatio: '9/16', maxHeight: '280px' }}>
                          <div className="text-white text-center">
                            <ExternalLink size={32} className="mx-auto mb-3 group-hover:scale-110 transition-transform" />
                            <p className="text-sm font-medium font-mono">View Project</p>
                          </div>
                        </div>
                      )}
                    </a>
                  ) : (
                    <div className="w-full flex items-center justify-center">
                      {project.image ? (
                        <div className="relative w-full overflow-hidden border tech-border-accent" style={{ aspectRatio: '9/16', maxHeight: '280px' }}>
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-auto"
                          />
                        </div>
                      ) : (
                        <div className="w-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border tech-border-accent" style={{ aspectRatio: '9/16', maxHeight: '280px' }}>
                          <div className="text-white text-center">
                            <div className="text-4xl mb-2">📱</div>
                            <p className="text-sm font-medium font-mono">Project Preview</p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
