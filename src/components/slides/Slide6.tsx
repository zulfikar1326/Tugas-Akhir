import React from 'react';
import { motion } from 'framer-motion';
import { slideVariants, slideTransition, containerVariants, itemVariants } from './shared';

export const Slide6: React.FC = () => {
  return (
    <motion.div
      variants={slideVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={slideTransition}
      className="flex flex-col justify-center h-full max-w-6xl mx-auto px-4"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">💡 Pembahasan: Interpretasi</h2>
      <p className="text-sm md:text-base text-slate-400 border-l-4 border-sky-400 pl-4 mt-2 mb-5">Apa arti dari semua angka ini?</p>

      <motion.div variants={containerVariants} animate="animate" className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <motion.div variants={itemVariants} className="glass-card bg-sky-500/5 border border-sky-500/10 p-5 rounded-2xl border-l-6 border-l-sky-500 flex flex-col justify-center h-full">
          <h3 className="text-sky-400 font-bold text-base mb-2">📌 Temuan 1: SVM Tangguh</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Kernel linear terbukti sangat optimal untuk mengolah data teks TF-IDF berdimensi tinggi. 
            Model stabil pada data skala besar dengan <span className="text-emerald-400 font-semibold">deviasi standar CV &lt; 0.2%</span>. 
            Ini membuktikan SVM <span className="text-amber-400 font-bold">tidak overfitting</span> dan mampu generalisasi dengan baik.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="glass-card bg-amber-500/5 border border-amber-500/10 p-5 rounded-2xl border-l-6 border-l-amber-500 flex flex-col justify-center h-full">
          <h3 className="text-amber-400 font-bold text-base mb-2">📌 Temuan 2: SMOTE Strategis</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Meskipun dataset relatif seimbang (rasio 3:1), SMOTE tetap vital untuk meningkatkan kepekaan model terhadap <span className="text-red-400 font-bold">keluhan pelanggan</span>. 
            <span className="block mt-2 text-amber-400 font-semibold">Recall Negatif +2%</span> adalah pencapaian krusial, karena dalam bisnis ritel, mendeteksi ketidakpuasan pelanggan jauh lebih penting daripada sekadar menaikkan akurasi 0.05%.
          </p>
        </motion.div>
      </motion.div>

      <motion.div variants={itemVariants} className="mt-4 bg-white/5 border border-white/5 p-2.5 rounded-xl text-center text-[10px] text-slate-400">
        🎯 <span className="text-white font-semibold">Kontribusi:</span> Studi pertama dengan dataset &gt;70.000 ulasan ritel Indonesia yang menganalisis dampak SMOTE terhadap recall kelas negatif.
      </motion.div>
    </motion.div>
  );
};