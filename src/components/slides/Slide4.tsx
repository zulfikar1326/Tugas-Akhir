import React from 'react';
import { motion } from 'framer-motion';
import { slideVariants, slideTransition, containerVariants, itemVariants } from './shared';
import { HelpCircle } from 'lucide-react';

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
      <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">❓ Rumusan Masalah</h2>
      <p className="text-sm md:text-base text-slate-400 border-l-4 border-sky-400 pl-4 mt-2 mb-6">Dua pertanyaan penelitian yang harus dijawab</p>

      <motion.div
        variants={containerVariants}
        animate="animate"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <motion.div
          variants={itemVariants}
          className="glass-card bg-white/5 border border-white/5 border-t-6 border-t-sky-400 p-5 rounded-b-2xl rounded-t-lg flex flex-col justify-between h-full relative"
        >
          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-2xl font-black text-sky-400">01</span>
              <HelpCircle className="w-5 h-5 text-sky-400/50" />
            </div>
            <h3 className="text-base md:text-lg font-bold text-white mb-2">Performa SVM</h3>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
              Bagaimana performa algoritma <span className="text-sky-400 font-semibold">Support Vector Machine (SVM)</span> dalam mengklasifikasikan sentimen ulasan pelanggan Alfamart berskala besar ke dalam kategori <span className="text-emerald-400 font-semibold">positif</span>, <span className="text-slate-400 font-semibold">netral</span>, dan <span className="text-red-400 font-semibold">negatif</span>?
            </p>
          </div>
          <div className="flex gap-2 flex-wrap mt-4 pt-3 border-t border-white/5">
            {['Accuracy', 'Precision', 'Recall', 'F1-Score'].map((tag) => (
              <span key={tag} className="px-2.5 py-0.5 bg-white/5 border border-white/10 rounded-full text-[10px] text-slate-400 font-medium">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="glass-card bg-white/5 border border-white/5 border-t-6 border-t-amber-400 p-5 rounded-b-2xl rounded-t-lg flex flex-col justify-between h-full relative"
        >
          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-2xl font-black text-amber-400">02</span>
              <HelpCircle className="w-5 h-5 text-amber-400/50" />
            </div>
            <h3 className="text-base md:text-lg font-bold text-white mb-2">Efektivitas SMOTE</h3>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
              Bagaimana pengaruh penerapan <span className="text-amber-400 font-semibold">Synthetic Minority Over-sampling Technique (SMOTE)</span> terhadap peningkatan performa klasifikasi SVM, khususnya pada kelas sentimen <span className="text-red-400 font-semibold">minoritas (negatif)</span>?
            </p>
          </div>
          <div className="flex gap-2 flex-wrap mt-4 pt-3 border-t border-white/5">
            {['Skenario A (Tanpa)', 'Skenario B (Dengan)'].map((tag) => (
              <span key={tag} className="px-2.5 py-0.5 bg-amber-500/10 border border-amber-500/20 rounded-full text-[10px] text-amber-400 font-semibold">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
