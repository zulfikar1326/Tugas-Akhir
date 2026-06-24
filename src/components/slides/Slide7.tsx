import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
// import { FaGithub } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { slideVariants, slideTransition, containerVariants, itemVariants } from './shared';
import confetti from 'canvas-confetti';

export const Slide7: React.FC = () => {
  useEffect(() => {
    const duration = 2.5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };
    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;
    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);
      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      variants={slideVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={slideTransition}
      className="flex flex-col justify-center items-center text-center h-full gap-4 max-w-5xl mx-auto px-4"
    >
      <motion.div variants={containerVariants} animate="animate" className="flex flex-col items-center gap-2">
        <motion.span variants={itemVariants} className="text-4xl opacity-40">🙏</motion.span>
        <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-black text-white mt-1 tracking-tight">Terima Kasih</motion.h2>
        <motion.div variants={itemVariants} className="w-16 h-1 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full my-1" />
        
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-2xl mt-3 text-left">
          <div className="glass-card bg-white/5 border border-white/5 p-3 rounded-xl">
            <span className="text-[25px] uppercase text-sky-400 font-bold">01</span>
            <p className="text-[15px] text-slate-300 leading-relaxed mt-1"><span className="text-white font-semibold">SVM:</span> Akurasi 96.67%, stabil di 76.951 data.</p>
          </div>
          <div className="glass-card bg-white/5 border border-white/5 p-3 rounded-xl">
            <span className="text-[25px] uppercase text-amber-400 font-bold">02</span>
            <p className="text-[15px] text-slate-300 leading-relaxed mt-1"><span className="text-white font-semibold">SMOTE:</span> Recall Negatif +2% (95% → 97%).</p>
          </div>
        </motion.div>

        <motion.p variants={itemVariants} className="text-xs md:text-sm text-slate-400 max-w-2xl font-light mt-1">
          Saran pengembangan: Coba deep learning (BERT/LSTM), tambah data Twitter/Shopee, dan sistem real-time.
        </motion.p>

        <motion.div variants={itemVariants} className="flex gap-2.5 justify-center flex-wrap mt-2">
          <span className="px-3 py-0.5 bg-white/5 border border-white/10 text-sky-400 rounded-full text-[10px] font-semibold">📧  zjuniarto@gmail.com</span>
          <span className="px-3 py-0.5 bg-white/5 border border-white/10 text-sky-400 rounded-full text-[10px] font-semibold">📅  24 Juni 2026</span>
          <span className="px-3 py-0.5 bg-white/5 border border-white/10 text-sky-400 rounded-full text-[10px] font-semibold"><a href='https://github.com/zulfikar1326' target='blank'><FaGithub className='inline align-text-bottom mr-1'/>zulfiker1326</a></span>
        </motion.div>

        <motion.p variants={itemVariants} className="text-slate-500 text-xs mt-4 border-t border-white/5 pt-3 w-56">
          Siap menerima pertanyaan, kritik, dan saran.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};