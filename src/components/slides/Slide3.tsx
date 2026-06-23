import React from 'react';
import { motion } from 'framer-motion';
import { slideVariants, slideTransition, containerVariants, itemVariants } from './shared';
import { AlertCircle, Target, TrendingUp } from 'lucide-react';

export const Slide3: React.FC = () => {
  return (
    <motion.div
      variants={slideVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={slideTransition}
      className="flex flex-col justify-center h-full max-w-6xl mx-auto px-4"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">🧠 Latar Belakang Masalah</h2>
      <p className="text-sm md:text-base text-slate-400 border-l-4 border-sky-400 pl-4 mt-2 mb-6">Mengapa penelitian ini penting?</p>

      <motion.div
        variants={containerVariants}
        animate="animate"
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        <motion.div variants={itemVariants} className="lg:col-span-2 flex flex-col gap-4">
          <div className="glass-card bg-white/5 border border-white/5 p-5 rounded-2xl flex flex-col justify-between h-full">
            <div>
              <p className="text-base md:text-lg text-slate-200">
                <span className="text-sky-400 font-semibold">Alfamart</span> memiliki ribuan gerai di seluruh Indonesia.
              </p>
              <div className="mt-4 flex flex-col">
                <span className="text-xs uppercase tracking-wider text-slate-400">Volume Ulasan Mentah:</span>
                <span className="text-3xl md:text-4xl font-black text-sky-400 mt-1">77.828</span>
              </div>
            </div>
            
            <div className="mt-5 pt-3 border-t border-white/5 flex gap-3 text-xs md:text-sm text-slate-400">
              <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
              <p>
                ❌ Penelitian sebelumnya rata-rata menggunakan <span className="text-red-400 font-semibold">data kecil (&lt;4.200)</span> dan gagal mendeteksi sentimen negatif (F1-Score 0.00).
              </p>
            </div>
          </div>

          <div className="glass-card bg-amber-500/5 border-l-6 border-l-amber-500 border-white/5 p-4 rounded-r-2xl flex gap-3">
            <Target className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-amber-500 text-sm md:text-base">🎯 Celah Penelitian (Research Gap)</h4>
              <p className="text-xs md:text-sm text-slate-400 mt-0.5">
                Belum ada studi yang menguji SVM pada dataset ulasan ritel berskala besar (&gt;70.000) di Indonesia.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="glass-card bg-white/5 border border-white/5 p-6 rounded-2xl flex flex-col items-center justify-center text-center relative overflow-hidden"
        >
          <div className="absolute top-4 right-4 bg-white/5 p-2 rounded-full border border-white/5">
            <TrendingUp className="w-5 h-5 text-amber-400" />
          </div>
          <span className="text-4xl opacity-20 mb-3">📈</span>
          <div className="flex gap-4 items-center justify-center my-2">
            <div>
              <span className="text-2xl md:text-3xl font-black text-red-500">4K</span>
              <span className="block text-[10px] text-slate-400 uppercase tracking-widest mt-1">Studi Lain</span>
            </div>
            <span className="text-slate-600 font-bold text-lg">vs</span>
            <div>
              <span className="text-2xl md:text-3xl font-black text-emerald-400">77K</span>
              <span className="block text-[10px] text-slate-400 uppercase tracking-widest mt-1">Studi Ini</span>
            </div>
          </div>
          <div className="w-full bg-white/5 h-2.5 rounded-full mt-4 overflow-hidden relative border border-white/5">
            <div className="bg-emerald-400 h-full w-[95%] rounded-full animate-pulse" />
            <div className="bg-red-500 h-full w-[5%] absolute top-0 left-0 rounded-full" />
          </div>
          <p className="text-xs text-slate-400 mt-4">
            Skala data <span className="text-amber-400 font-bold">18x lebih besar</span> dari rata-rata studi terdahulu.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
