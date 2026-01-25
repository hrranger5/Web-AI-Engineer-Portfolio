import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm">Testimonials</span>
          <h2 className="text-4xl font-display font-bold text-slate-900 mt-2">
            Trusted by Leaders & Students
          </h2>
        </div>

        {/* Masonry-like Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 h-full"
            >
              <Quote size={32} className="text-indigo-200 mb-6 flex-shrink-0" />

              <p className="text-slate-600 leading-relaxed mb-8 flex-grow italic">
                "{item.content}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-50 mt-auto">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-100"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{item.name}</h4>
                  <p className="text-xs text-slate-500 font-medium">{item.role}</p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wide">{item.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;