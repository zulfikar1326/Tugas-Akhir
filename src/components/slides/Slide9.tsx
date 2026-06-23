import React from 'react';
import { motion } from 'framer-motion';
import { slideVariants, slideTransition, containerVariants, itemVariants } from './shared';
import { AnimatedCounter } from '../AnimatedCounter';

export const Slide9: React.FC = () => {
  return (
    <motion.div
      variants={slideVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={slideTransition}
      className="flex flex-col justify-center h-full max-w-6xl mx-auto px-4"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
        📈 Skenario A: SVM <span className="text-xs md:text-sm font-semibold bg-red-500/10 border border-red-500/20 px-3 py-1 rounded-full text-red-400 ml-2">Tanpa SMOTE</span>
      </h2>
      <p className="text-sm md:text-base text-slate-400 border-l-4 border-sky-400 pl-4 mt-2 mb-4">Performa model pada data latih asli</p>

      <motion.div
        variants={containerVariants}
        animate="animate"
        className="flex flex-col gap-3"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div variants={itemVariants} className="glass-card p-4 rounded-2xl border border-white/5 bg-white/5 text-center flex flex-col items-center justify-center">
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">Akurasi</span>
            <span className="text-3xl md:text-4xl font-black text-sky-400">
              <AnimatedCounter value={96.67} suffix="%" />
            </span>
            <span className="px-2.5 py-0.5 bg-white/5 border border-white/10 rounded-full text-[10px] text-slate-400 font-semibold mt-3">⭐ Sangat Tinggi</span>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-card p-4 rounded-2xl border border-white/5 bg-white/5 text-center flex flex-col items-center justify-center">
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">F1-Macro</span>
            <span className="text-3xl md:text-4xl font-black text-slate-200">
              <AnimatedCounter value={96.03} suffix="%" />
            </span>
            <span className="px-2.5 py-0.5 bg-white/5 border border-white/10 rounded-full text-[10px] text-slate-400 font-semibold mt-3">📊 Stabil</span>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-card p-4 rounded-2xl border border-white/5 bg-white/5 text-center flex flex-col items-center justify-center border-b-amber-500 border-b-4">
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">Recall Negatif</span>
            <span className="text-3xl md:text-4xl font-black text-amber-400">
              <AnimatedCounter value={95.0} suffix="%" />
            </span>
            <span className="px-2.5 py-0.5 bg-amber-500/10 border border-amber-500/20 rounded-full text-[10px] text-amber-400 font-semibold mt-3">🟡 Cukup Baik</span>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap bg-white/5 border border-white/5 p-3 rounded-2xl text-[10px] md:text-xs text-slate-300">
          <span><span className="text-sky-400 font-semibold">F1 Neg:</span> 0.93</span>
          <span><span className="text-emerald-400 font-semibold">F1 Net:</span> 0.97</span>
          <span><span className="text-emerald-400 font-semibold">F1 Pos:</span> 0.98</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400">CV 5-Fold: <span className="text-sky-400 font-semibold">95.70%</span> (±0.16%)</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
