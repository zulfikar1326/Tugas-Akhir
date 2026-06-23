import React from 'react';
import { motion } from 'framer-motion';
import { slideVariants, slideTransition, containerVariants, itemVariants } from './shared';
import { AlertTriangle, Lightbulb } from 'lucide-react';

export const Slide14: React.FC = () => {
  return (
    <motion.div
      variants={slideVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={slideTransition}
      className="flex flex-col justify-center h-full max-w-6xl mx-auto px-4"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">⚠️ Keterbatasan & 💡 Saran</h2>
      <p className="text-sm md:text-base text-slate-400 border-l-4 border-sky-400 pl-4 mt-2 mb-4">Refleksi untuk pengembangan penelitian ke depan</p>

      <motion.div
        variants={containerVariants}
        animate="animate"
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <motion.div
          variants={itemVariants}
          className="glass-card bg-white/5 border border-white/5 border-l-6 border-l-red-400 p-5 rounded-r-2xl rounded-l-md flex flex-col h-full"
        >
          <div className="flex gap-2 items-center text-red-400 mb-3 font-bold text-base">
            <AlertTriangle className="w-4.5 h-4.5 shrink-0" />
            <span>🔴 Keterbatasan</span>
          </div>
          <ul className="space-y-2.5 text-xs text-slate-300">
            <li className="flex gap-2">
              <span className="text-red-400 font-bold">1.</span>
              <p>Pelabelan <span className="text-amber-400 font-semibold">Lexicon-Based</span> belum akurat untuk menangkap kalimat sarkastik.</p>
            </li>
            <li className="flex gap-2">
              <span className="text-red-400 font-bold">2.</span>
              <p>Hanya menggunakan <span className="text-sky-400 font-semibold">kernel linear</span> RBF atau Sigmoid belum dieksplorasi.</p>
            </li>
            <li className="flex gap-2">
              <span className="text-red-400 font-bold">3.</span>
              <p>Teknik balancing <span className="text-amber-400 font-semibold">hanya SMOTE</span> belum dibandingkan dengan ADASYN.</p>
            </li>
            <li className="flex gap-2">
              <span className="text-red-400 font-bold">4.</span>
              <p>Sumber data <span className="text-sky-400 font-semibold">hanya Google Maps</span> belum mencakup Twitter atau Play Store.</p>
            </li>
          </ul>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="glass-card bg-white/5 border border-white/5 border-l-6 border-l-emerald-400 p-5 rounded-r-2xl rounded-l-md flex flex-col h-full"
        >
          <div className="flex gap-2 items-center text-emerald-400 mb-3 font-bold text-base">
            <Lightbulb className="w-4.5 h-4.5 shrink-0" />
            <span>🟢 Saran</span>
          </div>
          <ul className="space-y-2 text-xs text-slate-300">
            <li className="flex gap-2">
              <span className="text-emerald-400 font-bold">•</span>
              <p>Gunakan pelabelan <span className="text-sky-400 font-semibold">manual/crowdsourcing</span> untuk hasil lebih presisi.</p>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-400 font-bold">•</span>
              <p>Eksplorasi <span className="text-amber-400 font-semibold">kernel RBF</span> atau model deep learning (LSTM/BERT).</p>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-400 font-bold">•</span>
              <p>Uji teknik balancing lain: <span className="text-sky-400 font-semibold">ADASYN</span>, Tomek Links.</p>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-400 font-bold">•</span>
              <p>Bandingkan SVM dengan <span className="text-emerald-400 font-semibold">Random Forest</span> atau XGBoost.</p>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-400 font-bold">•</span>
              <p>Perluas sumber data ke <span className="text-amber-400 font-semibold">Twitter, Shopee, atau Play Store</span>.</p>
            </li>
            <li className="flex gap-2">
              <span className="text-emerald-400 font-bold">•</span>
              <p>Implementasikan sistem <span className="text-amber-400 font-semibold">real-time monitoring</span> untuk ritel.</p>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
