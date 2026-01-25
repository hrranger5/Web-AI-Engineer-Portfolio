import React from 'react';
import { ArrowRight, MapPin, Sparkles, MousePointerClick } from 'lucide-react';
import { PROFILE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-transparent">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-[100px] animate-blob mix-blend-multiply"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[600px] h-[600px] bg-gradient-to-tr from-blue-400/20 to-emerald-400/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left animate-fade-in-up">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-indigo-100 shadow-sm mb-8 transition-all hover:scale-105 hover:shadow-md cursor-default group">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-600 tracking-wide uppercase group-hover:text-indigo-600 transition-colors">Open to Work</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-slate-900 tracking-tight mb-6 leading-[1.1]">
              <span className="block text-slate-400 font-medium text-2xl lg:text-3xl mb-2">Hello, I'm {PROFILE.name}.</span>
              Building <span className="text-gradient-animated">Intelligent</span> <br />
              Web Experiences.
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-500 mb-8 max-w-xl font-light leading-relaxed">
               {PROFILE.subtext}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href="#projects" 
                className="group relative px-8 py-4 bg-slate-900 text-white font-semibold rounded-2xl overflow-hidden shadow-xl shadow-indigo-500/20 hover:shadow-2xl hover:shadow-indigo-500/30 transition-all duration-300 w-full sm:w-auto flex justify-center items-center active:scale-95"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative flex items-center">
                  View My Work
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-700 font-semibold rounded-2xl border border-slate-200 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all duration-300 w-full sm:w-auto flex justify-center items-center group shadow-sm hover:shadow-md active:scale-95"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6 text-sm font-medium text-slate-400">
                <div className="flex items-center gap-2 hover:text-indigo-600 transition-colors cursor-default">
                    <MapPin size={16} className="text-indigo-500" />
                    {PROFILE.location}
                </div>
                <div className="hidden sm:block w-1 h-1 bg-slate-300 rounded-full"></div>
                <div className="hidden sm:flex items-center gap-2 hover:text-indigo-600 transition-colors cursor-default">
                    <MousePointerClick size={16} className="text-indigo-500 animate-bounce" />
                    Scroll to explore
                </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
             <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px]">
                {/* Abstract Shapes */}
                <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-bl from-violet-300 to-indigo-300 rounded-[2rem] -rotate-6 animate-pulse-slow opacity-60 mix-blend-multiply filter blur-xl"></div>
                <div className="absolute bottom-0 left-4 w-3/4 h-3/4 bg-gradient-to-tr from-blue-300 to-emerald-300 rounded-[2rem] rotate-3 opacity-60 mix-blend-multiply filter blur-xl"></div>
                
                {/* Main Image Card */}
                <div className="absolute inset-4 bg-white rounded-[2rem] shadow-2xl overflow-hidden border-[6px] border-white transform hover:scale-[1.02] transition-transform duration-500 z-10">
                    <img 
                        src={PROFILE.profilePic} 
                        alt={PROFILE.name}
                        className="w-full h-full object-cover"
                    />
                    
                    {/* Floating Info Card */}
                    <div className="absolute bottom-6 left-6 right-6 p-4 glass-card rounded-xl border border-white/40 flex items-center gap-4 animate-float shadow-lg backdrop-blur-md bg-white/60">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
                            <Sparkles size={20} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5">Focus</p>
                            <p className="text-sm font-bold text-slate-900 leading-tight">AI Agents & <br/>Full-Stack Web</p>
                        </div>
                    </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;