import React from 'react';
import { motion } from 'framer-motion';
import { slideVariants, slideTransition, containerVariants, itemVariants } from './shared';
import { Smartphone, ShieldCheck, Tag, BarChart2, FlaskConical, ClipboardCheck, ArrowRight } from 'lucide-react';

export const Slide7: React.FC = () => {
  const steps = [
    { icon: <Smartphone className="w-6 h-6 text-sky-400" />, label: 'Scraping', desc: '77.828 ulasan' },
    { icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />, label: 'Preprocess', desc: '76.951 bersih' },
    { icon: <Tag className="w-6 h-6 text-slate-400" />, label: 'Pelabelan', desc: 'Lexicon-based' },
    { icon: <BarChart2 className="w-6 h-6 text-slate-400" />, label: 'TF-IDF', desc: '7.500 fitur' },
    { icon: <FlaskConical className="w-6 h-6 text-amber-400" />, label: '2 Skenario', desc: 'A: SVM | B: +SMOTE', highlight: true },
    { icon: <ClipboardCheck className="w-6 h-6 text-indigo-400" />, label: 'Evaluasi', desc: 'CV 5-Fold', highlight: true },
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
      <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">⚙️ Metodologi Penelitian</h2>
      <p className="text-sm md:text-base text-slate-400 border-l-4 border-sky-400 pl-4 mt-2 mb-4">Alur eksperimen dari data mentah hingga evaluasi model</p>

      <motion.div
        variants={containerVariants}
        animate="animate"
        className="flex flex-col gap-4"
      >
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-2.5">
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <motion.div
                variants={itemVariants}
                className={`glass-card p-3 rounded-xl border flex flex-col items-center text-center justify-center flex-1 min-w-[120px] ${
                  step.highlight ? 'bg-sky-500/10 border-sky-400/30' : 'bg-white/5 border-white/5'
                }`}
              >
                <div className="mb-2 bg-slate-900/50 p-2 rounded-full border border-white/5">{step.icon}</div>
                <span className="text-xs md:text-sm font-bold text-white">{step.label}</span>
                <span className="text-[10px] text-slate-400 mt-1 leading-tight">{step.desc}</span>
              </motion.div>
              {idx < steps.length - 1 && (
                <div className="hidden lg:flex text-sky-500/50 font-bold text-xl">
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <motion.div variants={itemVariants} className="text-center text-[10px] md:text-xs text-slate-400 bg-white/5 border border-white/5 py-1.5 px-4 rounded-xl">
          ⚡ Data mencakup <span className="text-amber-400 font-semibold">30+ kota</span> di seluruh Indonesia (Jawa, Sumatera, Kalimantan, Sulawesi, Papua, Bali, Nusa Tenggara, Maluku)
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap text-[10px] md:text-xs text-slate-400">
          <span>📌 Case Folding</span>
          <span>📌 Cleaning</span>
          <span>📌 Stopword (Negasi dipertahankan)</span>
          <span>📌 Stemming (Sastrawi)</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
