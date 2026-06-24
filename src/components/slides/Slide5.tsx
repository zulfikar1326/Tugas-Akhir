import React from 'react';
import { motion } from 'framer-motion';
import { slideVariants, slideTransition, containerVariants, itemVariants } from './shared';

export const Slide5: React.FC = () => {
  return (
    <motion.div
      variants={slideVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={slideTransition}
      className="flex flex-col justify-center h-full max-w-6xl mx-auto px-4"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">📊 Pembahasan: Analisis Kesalahan</h2>
      <p className="text-sm md:text-base text-slate-400 border-l-4 border-sky-400 pl-4 mt-2 mb-4">Confusion Matrix & Pengujian Manual</p>

      <motion.div variants={containerVariants} animate="animate" className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <motion.div variants={itemVariants} className="lg:col-span-3 glass-card bg-white/5 border border-white/5 p-4 rounded-2xl">
          <h4 className="text-xs font-bold text-slate-300 mb-2 text-center">Perubahan Pola Kesalahan (Netral → Negatif)</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <span className="text-[8px] uppercase text-slate-400">Tanpa SMOTE</span>
              <div className="bg-white/5 p-3 rounded-xl mt-1">
                <span className="text-2xl font-black text-red-400">72</span>
                <span className="text-xs text-slate-500 block">Netral → Negatif</span>
              </div>
            </div>
            <div className="text-center">
              <span className="text-[8px] uppercase text-amber-400">Dengan SMOTE</span>
              <div className="bg-amber-500/5 border border-amber-500/20 p-3 rounded-xl mt-1">
                <span className="text-2xl font-black text-amber-400">115</span>
                <span className="text-xs text-slate-500 block">Netral → Negatif (+60%)</span>
              </div>
            </div>
          </div>
          <p className="text-[9px] text-slate-400 mt-3 text-center leading-relaxed">
            ⚠️ <span className="text-amber-400 font-bold">Insight:</span> SMOTE meningkatkan sensitivitas terhadap sentimen negatif, sehingga model lebih berani mengklasifikasi ulasan ambigu sebagai <span className="text-red-400">Negatif</span> (Recall naik, Precision sedikit turun).
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="lg:col-span-2 glass-card bg-white/5 border border-white/5 p-4 rounded-2xl flex flex-col justify-center">
          <h4 className="text-xs font-bold text-slate-300 mb-2 text-center">🧪 Uji Manual (Konteks {'>'} Kata Kasar)</h4>
          <div className="space-y-2 text-center">
            <div className="bg-white/5 p-2 rounded-lg border-l-2 border-l-emerald-400">
              <p className="text-[10px] text-slate-200 italic">"Pelayanan sangat ramah!"</p>
              <span className="text-[8px] text-emerald-400 font-bold">✅ Positif (99.9%)</span>
            </div>
            <div className="bg-white/5 p-2 rounded-lg border-l-2 border-l-slate-400">
              <p className="text-[10px] text-slate-200 italic">"Seperti pada Umumnya minimarket lh"</p>
              <span className="text-[8px] text-amber-400 font-bold">⚪ Netral (99.99%) → Model paham konteks!</span>
            </div>
            <div className="bg-white/5 p-2 rounded-lg border-l-2 border-l-red-400">
              <p className="text-[10px] text-slate-200 italic">"Kasir tidak sopan & tidak senyum"</p>
              <span className="text-[8px] text-red-400 font-bold">❌ Negatif (97.9%)</span>
            </div>
          </div>
          <p className="text-[8px] text-slate-500 mt-2 text-center">10 dari 11 opini buatan confidence &gt; 95%</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};