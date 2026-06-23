import React from 'react';
import { motion } from 'framer-motion';
import { slideVariants, slideTransition, containerVariants, itemVariants } from './shared';

export const Slide12: React.FC = () => {
  return (
    <motion.div
      variants={slideVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={slideTransition}
      className="flex flex-col justify-center h-full max-w-6xl mx-auto px-4"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">💬 Pengujian Manual</h2>
      <p className="text-sm md:text-base text-slate-400 border-l-4 border-sky-400 pl-4 mt-2 mb-4">Model mampu memahami konteks, bukan sekadar kata kasar</p>

      <motion.div
        variants={containerVariants}
        animate="animate"
        className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch"
      >
        <motion.div variants={itemVariants} className="lg:col-span-2 flex flex-col gap-2.5 justify-center">
          <div className="glass-card bg-white/5 border border-white/5 border-l-4 border-l-emerald-400 p-3.5 rounded-r-xl rounded-l-md">
            <div className="flex justify-between items-center mb-0.5">
              <span className="font-bold text-emerald-400 text-xs md:text-sm">✅ Positif</span>
              <span className="text-[10px] md:text-xs font-black text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">99.9%</span>
            </div>
            <p className="text-[11px] md:text-xs text-slate-200 italic mt-1">"Pelayanan Alfamart sangat ramah dan cepat!"</p>
          </div>

          <div className="glass-card bg-white/5 border border-white/5 border-l-4 border-l-slate-400 p-3.5 rounded-r-xl rounded-l-md">
            <div className="flex justify-between items-center mb-0.5">
              <span className="font-bold text-slate-400 text-xs md:text-sm">⚪ Netral</span>
              <span className="text-[10px] md:text-xs font-black text-slate-400 bg-slate-500/10 px-2 py-0.5 rounded">99.99%</span>
            </div>
            <p className="text-[11px] md:text-xs text-slate-200 italic mt-1">"Tokonya biasa aja, standar minimarket pada umumnya."</p>
            {/* <p className="text-[9px] text-amber-400 font-semibold mt-1"></p> */}
          </div>

          <div className="glass-card bg-white/5 border border-white/5 border-l-4 border-l-red-400 p-3.5 rounded-r-xl rounded-l-md">
            <div className="flex justify-between items-center mb-0.5">
              <span className="font-bold text-red-400 text-xs md:text-sm">❌ Negatif</span>
              <span className="text-[10px] md:text-xs font-black text-red-400 bg-red-500/10 px-2 py-0.5 rounded">97.9%</span>
            </div>
            <p className="text-[11px] md:text-xs text-slate-200 italic mt-1">"Kasirnya tidak sopan dan tidak senyum sama sekali"</p>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="glass-card bg-white/5 border border-white/5 p-5 rounded-2xl flex flex-col items-center justify-center text-center"
        >
          <span className="text-3xl opacity-20 mb-2">🧪</span>
          <p className="text-xs text-slate-300 max-w-[240px] leading-relaxed">
            Dari 11 opini buatan, <span className="text-amber-400 font-bold">10 dari 11 ulasan</span> berhasil terklasifikasi dengan confidence level &gt; 95%.
          </p>
          <p className="text-[9px] text-slate-500 mt-3 leading-snug">
            Tingkat kepercayaan terendah: 75.87% (pada kalimat pendek dengan konteks minimal).
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
