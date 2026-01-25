import React from 'react';
import { EXPERIENCE, EDUCATION, CERTIFICATIONS, ACHIEVEMENTS } from '../constants';
import { Briefcase, GraduationCap, Calendar, Award, Trophy, Star, Globe } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-indigo-200/20 rounded-full blur-[100px] -translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-[100px] translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Work Experience (Left Column) */}
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-indigo-100 flex items-center justify-center text-indigo-600">
                    <Briefcase size={24} />
                </div>
                <div>
                    <h2 className="text-3xl font-display font-bold text-slate-900">Work Experience</h2>
                    <p className="text-slate-500 text-sm">Professional journey & Mentorship</p>
                </div>
            </div>

            <div className="space-y-6">
                {EXPERIENCE.map((job, idx) => (
                    <div 
                        key={idx} 
                        className="group relative bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 hover:-translate-y-1"
                        style={{ animationDelay: `${idx * 150}ms` }}
                    >
                        {/* Connector Line for flow effect (optional visual) */}
                        {idx !== EXPERIENCE.length - 1 && (
                             <div className="absolute left-8 bottom-0 top-full w-px bg-slate-100 -z-10 h-6"></div>
                        )}

                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                                    {job.role}
                                </h3>
                                <p className="text-slate-500 font-medium">{job.company}</p>
                            </div>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-full border border-indigo-100 whitespace-nowrap self-start">
                                <Calendar size={12} />
                                {job.period}
                            </span>
                        </div>
                        
                        <ul className="space-y-2.5 mb-4">
                            {job.description.map((point, i) => (
                                <li key={i} className="text-slate-600 text-sm leading-relaxed flex items-start gap-2.5">
                                    <span className="mt-1.5 min-w-[6px] h-1.5 bg-indigo-400 rounded-full flex-shrink-0"></span>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="inline-flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50 px-2 py-1 rounded">
                           {job.type}
                        </div>
                    </div>
                ))}
            </div>
          </div>

          {/* Education & Certifications (Right Column) */}
          <div className="animate-fade-in-up flex flex-col gap-12" style={{ animationDelay: '200ms' }}>
            
            {/* Education Section */}
            <div>
                <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-emerald-100 flex items-center justify-center text-emerald-600">
                        <GraduationCap size={24} />
                    </div>
                    <div>
                        <h2 className="text-3xl font-display font-bold text-slate-900">Education</h2>
                        <p className="text-slate-500 text-sm">Academic background</p>
                    </div>
                </div>

                <div className="space-y-6 relative pl-4">
                    {/* Timeline Line */}
                    <div className="absolute left-[29px] top-4 bottom-4 w-px bg-slate-200"></div>

                    {EDUCATION.map((edu, idx) => (
                        <div key={idx} className="relative pl-12 py-1 group">
                            {/* Dot */}
                            <div className="absolute left-[24px] top-6 w-2.5 h-2.5 bg-white border-[2px] border-emerald-500 rounded-full z-10 group-hover:scale-125 transition-transform shadow-sm"></div>
                            
                            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm group-hover:border-emerald-200 group-hover:shadow-md transition-all duration-300">
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="font-bold text-slate-900">{edu.degree}</h3>
                                </div>
                                <div className="text-emerald-600 font-medium text-sm mb-2">{edu.institution}</div>
                                <span className="text-slate-400 text-xs font-mono bg-slate-50 px-2 py-1 rounded">
                                    {edu.period}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Certifications Section */}
            <div>
                <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-amber-100 flex items-center justify-center text-amber-600">
                        <Award size={24} />
                    </div>
                    <div>
                        <h2 className="text-3xl font-display font-bold text-slate-900">Certifications</h2>
                        <p className="text-slate-500 text-sm">Achievements & Awards</p>
                    </div>
                </div>

                <div className="space-y-4">
                    {CERTIFICATIONS.map((cert, idx) => (
                         <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:border-amber-200 hover:shadow-md transition-all">
                            <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 flex-shrink-0">
                                <Award size={18} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-sm">{cert.title}</h4>
                                <div className="flex items-center gap-2 text-xs text-slate-500">
                                    <span>{cert.issuer}</span>
                                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                    <span>{cert.date}</span>
                                </div>
                            </div>
                         </div>
                    ))}
                </div>
            </div>

            {/* Key Achievements Card (Inserted to balance height) */}
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                            <Trophy size={20} />
                        </div>
                        <h3 className="font-bold text-slate-900 text-lg">Key Achievements</h3>
                    </div>

                    <div className="space-y-5">
                        {ACHIEVEMENTS.map((ach, idx) => (
                            <React.Fragment key={idx}>
                                {idx > 0 && <div className="w-full h-px bg-slate-50"></div>}
                                <div className="flex gap-3">
                                    <div className="mt-1">
                                        {ach.icon === 'Star' ? <Star size={16} className={ach.color} fill="currentColor" /> : 
                                         ach.icon === 'Globe' ? <Globe size={16} className={ach.color} /> : null}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 text-sm mb-1">{ach.title}</h4>
                                        <p className="text-slate-500 text-xs leading-relaxed">
                                            {ach.description}
                                        </p>
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>

             {/* Always Learning Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl shadow-xl text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                <h4 className="font-bold text-lg mb-2 relative z-10">Always Learning</h4>
                <p className="text-slate-300 text-sm leading-relaxed relative z-10">
                    "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice."
                </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;