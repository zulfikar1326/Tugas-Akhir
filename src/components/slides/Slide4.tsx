import React from 'react';
import { motion } from 'framer-motion';
import { slideVariants, slideTransition, containerVariants, itemVariants } from './shared';
import { AnimatedCounter } from '../AnimatedCounter';
import { ChevronRight } from 'lucide-react';

export const Slide4: React.FC = () => {
  return (
    <motion.div
      variants={slideVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={slideTransition}
      className="flex flex-col justify-center h-full max-w-6xl mx-auto px-4"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">📊 Pembahasan: Hasil Klasifikasi</h2>
      <p className="text-sm md:text-base text-slate-400 border-l-4 border-sky-400 pl-4 mt-2 mb-5">Perbandingan performa SVM tanpa vs dengan SMOTE</p>

      <motion.div variants={containerVariants} animate="animate" className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Card A */}
        <motion.div variants={itemVariants} className="glass-card bg-white/5 border border-white/5 p-5 rounded-2xl border-t-4 border-t-red-400">
          <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
            <span className="bg-red-500/10 px-2 py-0.5 rounded text-red-400 text-xs">Skenario A</span> Tanpa SMOTE
          </h3>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div><span className="text-[8px] uppercase text-slate-400">Akurasi</span><div className="text-xl font-black text-sky-400"><AnimatedCounter value={96.67} suffix="%" /></div></div>
            <div><span className="text-[8px] uppercase text-slate-400">F1-Macro</span><div className="text-xl font-black text-slate-200"><AnimatedCounter value={96.03} suffix="%" /></div></div>
            <div><span className="text-[8px] uppercase text-slate-400">Recall Neg</span><div className="text-xl font-black text-amber-400"><AnimatedCounter value={95.0} suffix="%" /></div></div>
          </div>
          <div className="mt-3 text-[10px] text-slate-400 text-center border-t border-white/5 pt-2">F1 Neg: 0.93 | F1 Net: 0.97 | F1 Pos: 0.98</div>
        </motion.div>

        {/* Card B */}
        <motion.div variants={itemVariants} className="glass-card bg-amber-500/5 border border-amber-500/20 p-5 rounded-2xl border-t-4 border-t-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.05)]">
          <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
            <span className="bg-amber-500/10 px-2 py-0.5 rounded text-amber-400 text-xs">Skenario B</span> Dengan SMOTE
          </h3>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div><span className="text-[8px] uppercase text-slate-400">Akurasi</span><div className="text-xl font-black text-emerald-400"><AnimatedCounter value={96.72} suffix="%" /></div></div>
            <div><span className="text-[8px] uppercase text-slate-400">F1-Macro</span><div className="text-xl font-black text-slate-200"><AnimatedCounter value={96.19} suffix="%" /></div></div>
            <div><span className="text-[8px] uppercase text-slate-400">Recall Neg</span><div className="text-xl font-black text-amber-400"><AnimatedCounter value={97.0} suffix="%" /></div></div>
          </div>
          <div className="mt-3 text-[10px] text-slate-400 text-center border-t border-white/5 pt-2">F1 Neg: <span className="text-amber-400 font-bold">0.94</span> (+0.01) | F1 Net: 0.97 | F1 Pos: 0.98</div>
        </motion.div>
      </motion.div>

      <motion.div variants={itemVariants} className="mt-3 bg-emerald-500/5 border border-emerald-500/10 p-2.5 rounded-xl text-center text-xs text-slate-300 flex items-center justify-center gap-3 flex-wrap">
        <span className="text-amber-400 font-bold text-sm">⬆️ Recall Negatif Naik 2%</span>
        <span className="text-slate-600">|</span>
        <span>Akurasi +0.05% &amp; F1-Macro +0.16%</span>
        <span className="text-sky-400 font-semibold">CV 5-Fold stabil: 95.70% → 95.93%</span>
      </motion.div>
    </motion.div>
  );
};