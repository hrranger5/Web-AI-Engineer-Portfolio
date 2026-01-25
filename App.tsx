import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import GeminiDemo from './components/GeminiDemo';

function App() {
  
  // Simple "Google Analytics" simulation (View tracking)
  useEffect(() => {
    console.log("Page View Tracked: /home");
    // In a real app, window.gtag('event', 'page_view', ...) would go here
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
      </main>
      <Contact />
      <GeminiDemo />
    </div>
  );
}

export default App;