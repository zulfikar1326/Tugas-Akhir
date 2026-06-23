import React from 'react';
import { motion } from 'framer-motion';
import { slideVariants, slideTransition, containerVariants, itemVariants } from './shared';
import { ChevronRight } from 'lucide-react';

export const Slide11: React.FC = () => {
  const comparisons = [
    { label: 'Akurasi', valA: '96.67%', valB: '96.72%', diff: '+0.05%', positive: true },
    { label: 'F1-Macro', valA: '96.03%', valB: '96.19%', diff: '+0.16%', positive: true },
    { label: 'Recall Negatif ★', valA: '95%', valB: '97%', diff: '⬆️ +2% (Kunci!)', highlight: true, positive: true },
  ];

  return (
    <motion.div
      variants={slideVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={slideTransition}
      className="flex flex-col justify-center h-full max-w-6xl mx-auto px-4"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">⚖️ Perbandingan Komprehensif</h2>
      <p className="text-sm md:text-base text-slate-400 border-l-4 border-sky-400 pl-4 mt-2 mb-4">Skenario A (Tanpa SMOTE) vs Skenario B (Dengan SMOTE)</p>

      <motion.div
        variants={containerVariants}
        animate="animate"
        className="flex flex-col gap-3"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {comparisons.map((comp, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`glass-card p-4 rounded-2xl border flex flex-col items-center justify-center text-center ${
                comp.highlight ? 'bg-amber-500/5 border-amber-500/30 shadow-[0_0_12px_rgba(251,191,36,0.1)]' : 'bg-white/5 border-white/5 border-t-4 border-t-sky-400'
              }`}
            >
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">{comp.label}</span>
              <div className="flex gap-2 items-baseline justify-center mb-0.5">
                <span className="text-base md:text-lg font-bold text-slate-500">{comp.valA}</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-600 self-center" />
                <span className={`text-xl md:text-2xl font-black ${comp.highlight ? 'text-amber-400' : 'text-emerald-400'}`}>{comp.valB}</span>
              </div>
              <span className={`text-[10px] font-bold ${comp.positive ? 'text-emerald-400' : 'text-slate-400'}`}>{comp.diff}</span>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <motion.div
            variants={itemVariants}
            className="glass-card bg-sky-500/5 border border-sky-500/10 border-l-4 border-l-sky-500 p-3 rounded-r-2xl rounded-l-md"
          >
            <h4 className="text-sky-400 font-bold text-xs md:text-sm">📌 Temuan 1: SVM Tangguh</h4>
            <p className="text-[11px] md:text-xs text-slate-300 mt-1 leading-relaxed">
              Kernel linear terbukti sangat optimal untuk mengolah data teks representasi TF-IDF berdimensi tinggi. Hasil pengujian stabil pada data skala besar (deviasi standar CV &lt; 0.2%).
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="glass-card bg-amber-500/5 border border-amber-500/10 border-l-4 border-l-amber-500 p-3 rounded-r-2xl rounded-l-md"
          >
            <h4 className="text-amber-400 font-bold text-xs md:text-sm">📌 Temuan 2: SMOTE Strategis</h4>
            <p className="text-[11px] md:text-xs text-slate-300 mt-1 leading-relaxed">
              Penerapan SMOTE sangat vital untuk meningkatkan kepekaan model dalam mendeteksi <span className="text-red-400 font-semibold">keluhan pelanggan (Recall Negatif naik 2%)</span>, yang mana ini adalah tujuan krusial dari analisis sentimen ritel.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};
