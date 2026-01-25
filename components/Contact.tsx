import React, { useState } from 'react';
import { Mail, Linkedin, Github, ArrowRight, Instagram } from 'lucide-react';
import { PROFILE } from '../constants';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white py-24 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" aria-hidden="true"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50"></div>
        <div className="absolute -top-[400px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
        <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tight">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400 animate-text-shimmer">collaborate?</span>
        </h2>
        
        <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-12 font-light">
            I'm currently looking for internship opportunities or junior developer roles. Let's build something scalable together.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 flex-wrap">
            <a 
                href={`mailto:${PROFILE.email}`} 
                className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-indigo-50 transition-all transform hover:scale-105 shadow-xl shadow-indigo-500/10 flex items-center group focus:outline-none focus:ring-4 focus:ring-indigo-500/50"
                aria-label="Send me an email"
            >
                <Mail className="mr-3 group-hover:-translate-y-0.5 transition-transform" size={20} aria-hidden="true" />
                Say Hello
            </a>
            <a 
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-transparent border border-slate-700 text-white rounded-full font-bold hover:bg-slate-800 transition-all flex items-center hover:border-slate-600 focus:outline-none focus:ring-4 focus:ring-indigo-500/50"
                aria-label="Visit my LinkedIn Profile"
            >
                <Linkedin className="mr-3" size={20} aria-hidden="true" />
                LinkedIn
            </a>
            <a 
                href={PROFILE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-transparent border border-pink-500/30 text-white rounded-full font-bold hover:bg-pink-500/10 transition-all flex items-center hover:border-pink-500/50 group focus:outline-none focus:ring-4 focus:ring-pink-500/50"
                aria-label="Visit my Instagram Profile"
            >
                <Instagram className="mr-3 group-hover:text-pink-400 transition-colors" size={20} aria-hidden="true" />
                Instagram
            </a>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
             <p>&copy; {new Date().getFullYear()} Hafsa Raja. All rights reserved.</p>
             <div className="flex gap-6 mt-4 md:mt-0">
                <a href={PROFILE.github} className="hover:text-white transition-colors focus:outline-none focus:underline" aria-label="GitHub Profile">GitHub</a>
                <a href={PROFILE.linkedin} className="hover:text-white transition-colors focus:outline-none focus:underline" aria-label="LinkedIn Profile">LinkedIn</a>
                <span className="text-slate-700" aria-hidden="true">|</span>
                <span className="flex items-center gap-2">
                    Built with <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" aria-hidden="true"></span> React & Tailwind
                </span>
             </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;