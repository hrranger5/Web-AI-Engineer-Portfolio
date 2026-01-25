import React, { useRef, useState } from 'react';
import { SKILLS } from '../constants';
import { Layout, Server, Cpu, Database } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Layout: <Layout size={24} />,
  Server: <Server size={24} />,
  Cpu: <Cpu size={24} />,
  Database: <Database size={24} />
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center lg:text-left">
          <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm">Expertise</span>
          <h2 className="text-4xl font-display font-bold text-slate-900 mt-2 mb-4">Technical Arsenal</h2>
          <p className="text-slate-500 max-w-2xl text-lg lg:mx-0 mx-auto">
            A comprehensive toolkit enabling me to build end-to-end scalable systems, from the database to the pixel-perfect UI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skillGroup, idx) => (
            <SpotlightCard key={skillGroup.category} skillGroup={skillGroup} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SpotlightCard: React.FC<{ skillGroup: typeof SKILLS[0] }> = ({ skillGroup }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div 
        ref={divRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="group relative bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden h-full"
    >
      {/* Spotlight Gradient */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(99, 102, 241, 0.1), transparent 40%)`
        }}
      />
      
      <div className="relative p-8 h-full flex flex-col">
          <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 -translate-y-4">
            {React.cloneElement(iconMap[skillGroup.icon] as React.ReactElement<any>, { size: 100 })}
          </div>
          
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm border border-slate-100 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
            {iconMap[skillGroup.icon]}
          </div>
          
          <h3 className="font-bold text-slate-900 text-xl mb-4 group-hover:text-indigo-600 transition-colors">{skillGroup.category}</h3>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            {skillGroup.items.map((skill) => (
              <span 
                key={skill} 
                className="px-3 py-1.5 bg-white text-slate-600 text-sm font-medium rounded-lg border border-slate-200/60 shadow-sm group-hover:border-indigo-100 transition-colors z-10"
              >
                {skill}
              </span>
            ))}
          </div>
      </div>
    </div>
  );
};

export default Skills;