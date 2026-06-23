import React from 'react';
import { motion } from 'framer-motion';
import { slideVariants, slideTransition, containerVariants, itemVariants } from './shared';

export const Slide15: React.FC = () => {
  return (
    <motion.div
      variants={slideVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={slideTransition}
      className="flex flex-col justify-center h-full max-w-6xl mx-auto px-4"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">✅ Kesimpulan</h2>
      <p className="text-sm md:text-base text-slate-400 border-l-4 border-sky-400 pl-4 mt-2 mb-4">Jawaban atas dua rumusan masalah penelitian</p>

      <motion.div
        variants={containerVariants}
        animate="animate"
        className="flex flex-col gap-3"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            variants={itemVariants}
            className="glass-card bg-white/5 border border-white/5 border-t-6 border-t-sky-400 p-5 rounded-b-2xl rounded-t-lg flex flex-col justify-center h-full"
          >
            <span className="text-lg font-black text-sky-400 mb-1">01</span>
            <h3 className="text-sm md:text-base font-bold text-white mb-2">Performa SVM</h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              SVM dengan kernel linear mencapai <span className="text-sky-400 font-semibold">akurasi 96,67%</span> dan F1-macro 96,03% pada 76.951 ulasan. Cross-Validation 5-fold menunjukkan stabilitas tinggi (<span className="text-emerald-400 font-semibold">95,70% ± 0,16%</span>), membuktikan model sangat efektif dan <span className="text-amber-400 font-semibold">tidak overfitting</span>.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="glass-card bg-white/5 border border-white/5 border-t-6 border-t-amber-400 p-5 rounded-b-2xl rounded-t-lg flex flex-col justify-center h-full"
          >
            <span className="text-lg font-black text-amber-400 mb-1">02</span>
            <h3 className="text-sm md:text-base font-bold text-white mb-2">Pengaruh SMOTE</h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              SMOTE memberikan peningkatan metrik makro kecil (+0,05% – 0,23%), namun <span className="text-amber-400 font-semibold">recall kelas negatif naik 2%</span> (95% → 97%). Hal ini <span className="text-emerald-400 font-bold">sangat strategis</span> untuk mendeteksi keluhan pelanggan, meskipun dataset memiliki ketimpangan yang moderat.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="bg-emerald-500/5 border border-emerald-500/10 p-2.5 rounded-2xl text-center text-[10px] md:text-xs text-slate-400"
        >
          📌 <span className="text-emerald-400 font-bold">Kontribusi:</span> Studi pertama dengan dataset &gt;70.000 ulasan ritel Indonesia dan analisis eksplisit dampak SMOTE terhadap recall kelas minoritas.
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
