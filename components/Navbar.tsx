import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Download } from 'lucide-react';
import { PROFILE } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Navbar background state
      setScrolled(window.scrollY > 20);
      
      // Progress bar state
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 z-[60]" style={{ width: `${scrollProgress * 100}%` }} aria-hidden="true"></div>

      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center ${
          scrolled ? 'pt-4' : 'pt-6'
        }`}
        role="navigation"
        aria-label="Main Navigation"
      >
        <div 
          className={`relative transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            scrolled 
              ? 'w-[90%] md:w-[85%] max-w-5xl rounded-full glass-nav shadow-glass px-6 py-3' 
              : 'w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-4 bg-transparent'
          }`}
        >
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a 
              href="#"
              className="flex-shrink-0 flex items-center gap-2 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg p-1"
              aria-label="Hafsa Raja Portfolio Home"
            >
              <div className="w-9 h-9 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:rotate-12 transition-transform duration-300">
                H
              </div>
              <span className={`font-display font-bold text-xl tracking-tight transition-opacity duration-300 ${scrolled ? 'text-slate-800' : 'text-slate-900'}`}>
                Raja.dev
              </span>
            </a>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              <ul className="flex items-center space-x-1">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/50 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              
              <div className="h-6 w-px bg-slate-200 mx-4" aria-hidden="true"></div>
              
              <div className="flex items-center space-x-2">
                <a 
                  href={PROFILE.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  aria-label="GitHub Profile"
                >
                  <Github size={18} aria-hidden="true" />
                </a>
                <a 
                  href={PROFILE.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} aria-hidden="true" />
                </a>
                <a
                    href={PROFILE.resumeLink}
                    target="_blank"
                    className="ml-2 px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20 flex items-center gap-2 group hover:shadow-indigo-500/20 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    aria-label="Download Resume"
                >
                    <span>Resume</span>
                    <Download size={14} className="group-hover:translate-y-0.5 transition-transform" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-600 hover:text-indigo-600 p-2 transition-colors rounded-full hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-xl transform transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col h-full pt-28 px-8 pb-8">
            <nav className="flex flex-col space-y-4">
                {navLinks.map((link, idx) => (
                <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-display font-bold text-slate-800 hover:text-indigo-600 transition-colors focus:outline-none focus:text-indigo-600"
                    style={{ transitionDelay: `${idx * 50}ms` }}
                >
                    {link.name}
                </a>
                ))}
            </nav>
            
            <div className="mt-auto flex flex-col gap-6">
                <div className="w-full h-px bg-slate-100" aria-hidden="true"></div>
                <div className="flex gap-4">
                     <a href={PROFILE.github} className="p-3 bg-slate-50 rounded-full text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500" aria-label="GitHub Profile">
                        <Github size={24} aria-hidden="true" />
                     </a>
                     <a href={PROFILE.linkedin} className="p-3 bg-slate-50 rounded-full text-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-500" aria-label="LinkedIn Profile">
                        <Linkedin size={24} aria-hidden="true" />
                     </a>
                </div>
                <a 
                    href={PROFILE.resumeLink}
                    target="_blank"
                    className="w-full py-4 bg-indigo-600 text-white text-center font-bold rounded-xl shadow-xl shadow-indigo-500/20 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Download Resume
                </a>
            </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;