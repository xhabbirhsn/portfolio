'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      {/* Desktop: Centered floating nav */}
      <div className="hidden md:flex justify-center">
        <div
          className={`transition-all duration-300 border tech-border-accent ${
            isScrolled
              ? 'bg-black/90 backdrop-blur-md tech-shadow'
              : 'bg-black/80 backdrop-blur-sm'
          }`}
        >
          <div className="px-4 py-2">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-1.5 text-sm font-mono font-medium transition-all duration-200 border ${
                    activeSection === item.href.substring(1)
                      ? 'text-white bg-white/10 border-white/30'
                      : 'text-white/60 hover:text-white hover:bg-white/5 border-transparent'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Right-aligned hamburger */}
      <div className="md:hidden flex justify-end">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`p-2.5 text-white hover:bg-white/10 transition-all duration-300 border tech-border ${
            isScrolled
              ? 'bg-black/90 backdrop-blur-md tech-shadow'
              : 'bg-black/80 backdrop-blur-sm'
          }`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-16 right-4 w-64 bg-black/95 backdrop-blur-md border tech-border-accent tech-shadow p-2 animate-fadeIn">
          <div className="space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`block px-4 py-3 text-sm font-mono font-medium transition-colors border ${
                  activeSection === item.href.substring(1)
                    ? 'text-white bg-white/10 border-white/30'
                    : 'text-white/60 hover:bg-white/5 border-transparent'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
