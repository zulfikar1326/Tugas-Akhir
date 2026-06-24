import React from 'react';
import { motion } from 'framer-motion';
import { slideVariants, slideTransition, containerVariants, itemVariants } from './shared';
import { Target, TrendingUp } from 'lucide-react';

export const Slide2: React.FC = () => {
  return (
    <motion.div
      variants={slideVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={slideTransition}
      className="flex flex-col justify-center h-full max-w-6xl mx-auto px-4"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">🧠 Latar Belakang</h2>
      <p className="text-sm md:text-base text-slate-400 border-l-4 border-sky-400 pl-4 mt-2 mb-5">Mengapa penelitian ini penting?</p>

      <motion.div variants={containerVariants} animate="animate" className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <motion.div variants={itemVariants} className="md:col-span-2 flex flex-col gap-4">
          <div className="glass-card bg-white/5 border border-white/5 p-5 rounded-2xl flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl font-black text-sky-400">77.828</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider">Ulasan Pelanggan Alfamart</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Alfamart memiliki ribuan gerai di seluruh Indonesia. Volume ulasan sangat masif, namun <span className="text-red-400 font-semibold">penelitian sebelumnya</span> rata-rata hanya menggunakan <span className="text-amber-400 font-semibold">&lt; 4.200 ulasan</span> dan <span className="text-red-400 font-bold">gagal mendeteksi sentimen negatif</span> (F1-Score 0.00).
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex gap-3 text-xs text-slate-400">
              <Target className="w-5 h-5 text-amber-500 shrink-0" />
              <p><span className="text-amber-400 font-bold">Research Gap:</span> Belum ada studi yang menguji SVM pada dataset ulasan ritel berskala besar (&gt;70.000) di Indonesia.</p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="glass-card bg-white/5 border border-white/5 p-5 rounded-2xl flex flex-col items-center justify-center text-center">
          <TrendingUp className="w-8 h-8 text-amber-400 mb-2" />
          <div className="flex gap-3 items-center justify-center">
            <div><span className="text-2xl font-black text-red-500">4K</span><span className="block text-[9px] text-slate-400 uppercase">Studi Lain</span></div>
            <span className="text-slate-600 font-bold text-lg">vs</span>
            <div><span className="text-2xl font-black text-emerald-400">77K</span><span className="block text-[9px] text-slate-400 uppercase">Studi Ini</span></div>
          </div>
          <p className="text-xs text-slate-400 mt-3">Skala data <span className="text-amber-400 font-bold">18x lebih besar</span> dari rata-rata studi terdahulu.</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
