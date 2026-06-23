import React from 'react';
import { motion } from 'framer-motion';
import { slideVariants, slideTransition, containerVariants, itemVariants } from './shared';

export const Slide1: React.FC = () => {
  return (
    <motion.div
      variants={slideVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={slideTransition}
      className="flex flex-col justify-center items-center text-center h-full gap-4 max-w-5xl mx-auto px-4"
    >
      <motion.div variants={containerVariants} animate="animate" className="flex flex-col items-center gap-3">
        <motion.span variants={itemVariants} className="px-4 py-1.5 bg-sky-500/10 border border-sky-500/20 text-sky-400 rounded-full text-xs font-semibold uppercase tracking-wider">
          Seminar Hasil Tugas Akhir
        </motion.span>
        
        <motion.h1 variants={itemVariants} className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-white mt-2">
          Analisis Sentimen Ulasan Pelanggan Alfamart Menggunakan Algoritma{' '}
          <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
            Support Vector Machine (SVM)
          </span>
        </motion.h1>

        <motion.div variants={itemVariants} className="w-20 h-1 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full my-2" />

        <motion.p variants={itemVariants} className="text-lg md:text-xl font-light text-slate-200 mt-2">
          Zulfikar Juniarto <span className="text-slate-600 mx-3">|</span> NIM. 22010022
        </motion.p>

        <motion.p variants={itemVariants} className="text-xs md:text-sm text-slate-400">
          Program Studi Teknik Informatika <br /> Universitas Dharma Wacana
        </motion.p>

        <motion.p variants={itemVariants} className="text-xs md:text-xs text-slate-500 tracking-widest mt-2">
          Metro, 24 Juni 2026
        </motion.p>

        <motion.div variants={itemVariants} className="flex gap-2.5 justify-center flex-wrap mt-4">
          {['#TextMining', '#NLP', '#SVM', '#SMOTE'].map((tag) => (
            <span key={tag} className="px-3.5 py-1 bg-white/5 border border-white/10 text-sky-400 rounded-full text-xs font-semibold">
              {tag}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
