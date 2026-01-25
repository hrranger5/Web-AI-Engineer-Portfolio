import React from 'react';
import { Target, Zap, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-3">About Me</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
            Bridging the gap between <br className="hidden md:block" />
            <span className="text-indigo-600">Complex Problems</span> and <span className="text-purple-600">Elegant Solutions</span>
          </h3>
          <p className="text-slate-600 text-lg leading-relaxed">
            I don't just write code; I engineer business value. By combining full-stack expertise with cutting-edge AI integration, I build systems that are scalable, intelligent, and user-centric.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
                icon: <Target size={28} />,
                title: "Problem Solver",
                desc: "I focus on the 'why' before the 'how'. Whether it's automating workflows or optimizing algorithms, I build solutions that save time.",
                color: "text-blue-600",
                bg: "bg-blue-50"
            },
            {
                icon: <Zap size={28} />,
                title: "Production Ready",
                desc: "I understand SDLC. My code is clean, modular, and documented. Experienced with CI/CD, Git, and maintainable architecture.",
                color: "text-amber-600",
                bg: "bg-amber-50"
            },
            {
                icon: <BookOpen size={28} />,
                title: "Fast Learner",
                desc: "Technology moves fast. I've rapidly upskilled from basic web dev to integrating complex AI agents (Gemini, OpenAI) into real apps.",
                color: "text-emerald-600",
                bg: "bg-emerald-50"
            }
          ].map((item, idx) => (
            <div key={idx} className="group p-8 bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300">
                <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed">
                    {item.desc}
                </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
