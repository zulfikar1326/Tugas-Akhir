import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ParticlesBg } from './components/ParticlesBg';
import { Slide1 } from './components/slides/Slide1';
import { Slide2 } from './components/slides/Slide2';
import { Slide3 } from './components/slides/Slide3';
import { Slide4 } from './components/slides/Slide4';
import { Slide5 } from './components/slides/Slide5';
import { Slide6 } from './components/slides/Slide6';
import { Slide7 } from './components/slides/Slide7';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7
  ];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const next = () => setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
  const prev = () => setCurrentSlide((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
  const goTo = (index: number) => { if (index >= 0 && index < slides.length) setCurrentSlide(index); };
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') { e.preventDefault(); next(); }
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); prev(); }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.changedTouches[0].screenX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].screenX;
    if (Math.abs(delta) > 50) { delta > 0 ? next() : prev(); }
    touchStartX.current = null;
  };

  const ActiveSlideComponent = slides[currentSlide];

  return (
    <div className="relative w-screen h-screen bg-[#0b1120] overflow-hidden flex flex-col justify-between"
      style={{ background: 'radial-gradient(ellipse at 20% 50%, #1e293b 0%, #0b1120 80%)' }}
      onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <ParticlesBg />
      {/* <main className="flex-1 w-full flex items-center justify-center p-6 md:p-12 z-10 min-h-0 select-text">flex-1 w-full flex items-center justify-center p-6 md:p-12 z-10 min-h-0 select-text scale-110 md:scale-125 */}
      <main className="flex-1 w-full flex items-center justify-center p-6 md:p-12 z-10 min-h-0 select-text scale-110 md:scale-125">
        <div className="w-full max-w-6xl h-full flex flex-col justify-center min-h-0">
          <AnimatePresence mode="wait">
            <motion.div key={currentSlide} className="w-full h-full flex flex-col justify-center min-h-0">
              <ActiveSlideComponent />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
      <footer className="w-full py-5 flex flex-col items-center gap-3 z-20 bg-slate-950/20 backdrop-blur-sm border-t border-white/5 relative">
        <div className="flex items-center gap-5 select-none">
          <button onClick={prev} className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-slate-350 hover:bg-sky-500/20 hover:border-sky-400 hover:text-sky-400 transition-all duration-200 cursor-pointer shadow-lg">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-2 max-w-[200px] md:max-w-md overflow-x-auto slide-scrollbar px-1 py-1">
            {slides.map((_, idx) => (
              <button key={idx} onClick={() => goTo(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${currentSlide === idx ? 'w-6 bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.5)]' : 'w-2 bg-white/20 hover:bg-white/40'}`} />
            ))}
          </div>
          <span className="text-xs md:text-sm font-bold text-slate-400 tracking-wider min-w-[45px] text-center">{currentSlide + 1} / {slides.length}</span>
          <button onClick={next} className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-slate-350 hover:bg-sky-500/20 hover:border-sky-400 hover:text-sky-400 transition-all duration-200 cursor-pointer shadow-lg">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 transition-all duration-300" style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }} />
      </footer>
    </div>
  );
}