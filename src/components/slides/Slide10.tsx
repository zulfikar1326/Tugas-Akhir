import React from 'react';
import { motion } from 'framer-motion';
import { slideVariants, slideTransition, containerVariants, itemVariants } from './shared';
import { AnimatedCounter } from '../AnimatedCounter';

export const Slide10: React.FC = () => {
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
        📈 Skenario B: SVM + <span className="text-xs md:text-sm font-semibold bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full text-amber-400 ml-2">SMOTE</span>
      </h2>
      <p className="text-sm md:text-base text-slate-400 border-l-4 border-sky-400 pl-4 mt-2 mb-4">Penambahan teknik oversampling untuk menyeimbangkan data</p>

      <motion.div
        variants={containerVariants}
        animate="animate"
        className="flex flex-col gap-3"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div variants={itemVariants} className="glass-card p-4 rounded-2xl border border-white/5 bg-white/5 text-center flex flex-col items-center justify-center border-t-emerald-400 border-t-4">
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">Akurasi</span>
            <span className="text-3xl md:text-4xl font-black text-emerald-400">
              <AnimatedCounter value={96.72} suffix="%" />
            </span>
            <span className="px-2.5 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[10px] text-emerald-400 font-semibold mt-3">⬆️ +0.05%</span>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-card p-4 rounded-2xl border border-white/5 bg-white/5 text-center flex flex-col items-center justify-center border-t-emerald-400 border-t-4">
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">F1-Macro</span>
            <span className="text-3xl md:text-4xl font-black text-slate-200">
              <AnimatedCounter value={96.19} suffix="%" />
            </span>
            <span className="px-2.5 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[10px] text-emerald-400 font-semibold mt-3">⬆️ +0.16%</span>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-card p-4 rounded-2xl border border-white/5 bg-amber-500/5 text-center flex flex-col items-center justify-center border-amber-500/40 border-2 shadow-[0_0_15px_rgba(251,191,36,0.15)]">
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">Recall Negatif</span>
            <span className="text-3xl md:text-4xl font-black text-amber-400">
              <AnimatedCounter value={97.0} suffix="%" />
            </span>
            <span className="px-2.5 py-0.5 bg-amber-500/20 border border-amber-500/30 rounded-full text-[10px] text-amber-400 font-bold mt-3 animate-pulse">🚀 +2% (Kunci!)</span>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap bg-white/5 border border-white/5 p-3 rounded-2xl text-[10px] md:text-xs text-slate-300">
          <span><span className="text-sky-400 font-semibold">F1 Neg:</span> <span className="text-amber-400 font-bold">0.94</span> (+0.01)</span>
          <span><span className="text-emerald-400 font-semibold">F1 Net:</span> 0.97</span>
          <span><span className="text-emerald-400 font-semibold">F1 Pos:</span> 0.98</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400">CV 5-Fold: <span className="text-sky-400 font-semibold">95.93%</span> (±0.20%)</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
