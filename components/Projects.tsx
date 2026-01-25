import React, { useState, useMemo } from 'react';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, ArrowUpRight, ImageOff, Layers, Zap } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'AI' | 'Full Stack' | 'Web'>('All');

  const filteredProjects = useMemo(() => {
    if (filter === 'All') return PROJECTS;
    return PROJECTS.filter(p => p.category === filter || (filter === 'AI' && p.category === 'AI'));
  }, [filter]);

  return (
    <section id="projects" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-4">
                    <Layers size={12} aria-hidden="true" />
                    Portfolio
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">Featured Projects</h2>
                <p className="text-slate-500 text-lg">
                    A curated selection of my work in Full-Stack development and AI engineering.
                </p>
            </div>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 bg-slate-100/80 p-1.5 rounded-2xl backdrop-blur-sm" role="tablist" aria-label="Project Categories">
                {['All', 'AI', 'Full Stack', 'Web'].map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat as any)}
                        aria-selected={filter === cat}
                        role="tab"
                        className={`px-6 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                            filter === cat 
                                ? 'bg-white text-indigo-600 shadow-sm ring-1 ring-slate-200' 
                                : 'text-slate-500 hover:text-slate-700 hover:bg-white/50'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
                <div 
                    key={project.title}
                    className="group flex flex-col bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 overflow-hidden hover:-translate-y-2 focus-within:translate-y-[-0.5rem] focus-within:shadow-2xl focus-within:shadow-indigo-500/10"
                    style={{ animation: `fadeInUp 0.6s ease-out forwards ${index * 100}ms`, opacity: 0 }}
                >
                    {/* Image Area */}
                    <div className="relative h-64 overflow-hidden bg-slate-100">
                        {project.image ? (
                            <img 
                                src={project.image} 
                                alt={`Screenshot of ${project.title}`} 
                                className="w-full h-full object-cover transform group-hover:scale-110 group-focus-within:scale-110 transition-transform duration-700 ease-out"
                            />
                        ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center text-slate-300 bg-slate-50">
                                <ImageOff size={48} className="mb-2 opacity-50" aria-hidden="true" />
                                <span className="text-xs font-medium uppercase tracking-wider">No Preview</span>
                            </div>
                        )}
                        
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-60 group-hover:opacity-40 group-focus-within:opacity-40 transition-opacity duration-300"></div>

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold rounded-lg shadow-sm border border-white/20">
                                {project.category}
                            </span>
                        </div>

                        {/* Action Buttons */}
                        <div className="absolute bottom-4 right-4 flex gap-2 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
                             <a 
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white text-slate-900 rounded-full hover:bg-indigo-600 hover:text-white transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-indigo-600 focus:text-white"
                                title="View Source"
                                aria-label={`View source code for ${project.title} on GitHub`}
                            >
                                <Github size={20} aria-hidden="true" />
                            </a>
                            {project.demoLink && (
                                <a 
                                    href={project.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white text-slate-900 rounded-full hover:bg-indigo-600 hover:text-white transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-indigo-600 focus:text-white"
                                    title="Live Demo"
                                    aria-label={`View live demo of ${project.title}`}
                                >
                                    <ExternalLink size={20} aria-hidden="true" />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 p-8 flex flex-col">
                        <div className="mb-4">
                            <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors flex items-center justify-between">
                                {project.title}
                            </h3>
                            <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                                {project.description}
                            </p>
                        </div>
                        
                        {/* Challenges Section */}
                        {project.challenges && (
                            <div className="mb-6 p-4 bg-indigo-50/50 rounded-xl border border-indigo-100/50">
                                <div className="flex items-center gap-2 mb-1.5 text-indigo-700">
                                    <Zap size={14} className="fill-indigo-600 text-indigo-600" aria-hidden="true" />
                                    <span className="text-xs font-bold uppercase tracking-wide">Challenge</span>
                                </div>
                                <p className="text-slate-600 text-xs leading-relaxed">
                                    {project.challenges}
                                </p>
                            </div>
                        )}

                        <div className="mt-auto pt-4 border-t border-slate-50">
                            <div className="flex flex-wrap gap-2">
                                {project.tags.slice(0, 3).map(tag => (
                                    <span key={tag} className="px-2.5 py-1 bg-slate-50 text-slate-600 text-xs font-semibold rounded-md border border-slate-100">
                                        {tag}
                                    </span>
                                ))}
                                {project.tags.length > 3 && (
                                    <span className="px-2.5 py-1 bg-slate-50 text-slate-400 text-xs font-semibold rounded-md border border-slate-100">
                                        +{project.tags.length - 3}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* View All GitHub Link */}
        <div className="mt-16 text-center">
            <a 
                href="https://github.com/hrranger5" 
                target="_blank"
                className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-semibold transition-colors group focus:outline-none focus:text-indigo-600 focus:underline"
                aria-label="View full project archive on GitHub"
            >
                View full project archive
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;