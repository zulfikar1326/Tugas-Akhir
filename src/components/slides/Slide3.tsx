import React from 'react';
import { motion } from 'framer-motion';
import { slideVariants, slideTransition, containerVariants, itemVariants } from './shared';
import { DonutChart } from '../DonutChart';
import { Smartphone, ShieldCheck, Tag, BarChart2, FlaskConical, ClipboardCheck, ArrowRight } from 'lucide-react';

export const Slide3: React.FC = () => {
  const steps = [
    { icon: <Smartphone className="w-35 h-15 text-sky-400" />, label: 'Scraping', desc: '77.828' },
    { icon: <ShieldCheck className="w-35 h-15 text-emerald-400" />, label: 'Preprocess', desc: '76.951' },
    { icon: <Tag className="w-35 h-15 text-slate-400" />, label: 'Pelabelan', desc: 'Lexicon' },
    { icon: <BarChart2 className="w-35 h-15 text-slate-400" />, label: 'TF-IDF', desc: '7.500 fitur' },
    { icon: <FlaskConical className="w-35 h-12 text-amber-400" />, label: '2 Skenario', desc: 'A: SVM | B: +SMOTE' },
    { icon: <ClipboardCheck className="w-35 h-15 text-indigo-400" />, label: 'Evaluasi', desc: 'CV 5-Fold' },
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
      <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">⚙️ Metode Penelitian</h2>
      <p className="text-sm md:text-base text-slate-400 border-l-4 border-sky-400 pl-4 mt-2 mb-4">Alur eksperimen & distribusi data</p>

      <motion.div variants={containerVariants} animate="animate" className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <motion.div variants={itemVariants} className="lg:col-span-2 flex flex-col gap-3 justify-center">
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {steps.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className={`glass-card p-2.5 rounded-xl border flex flex-col items-center text-center flex-1 min-w-[80px] ${step.label === '2 Skenario' || step.label === 'Evaluasi' ? 'bg-sky-500/10 border-sky-400/30' : 'bg-white/5 border-white/5'}`}>
                  <div className="mb-1">{step.icon}</div>
                  <span className="text-[15px] font-bold text-white">{step.label}</span>
                  <span className="text-[15px] text-slate-400">{step.desc}</span>
                </div>
                {idx < steps.length - 1 && <ArrowRight className="w-4 h-4 text-sky-500/30 hidden lg:block" />}
              </React.Fragment>
            ))}
          </div>
          <div className="text-center text-[15px] text-slate-400 bg-white/5 border border-white/5 py-1.5 px-4 rounded-xl">
            ⚡ 30+ kota di seluruh Indonesia (Jawa, Sumatera, Kalimantan, Sulawesi, Papua, Bali, Nusa Tenggara, Maluku)
          </div>
          <div className="flex gap-2 justify-center flex-wrap text-[8px] text-slate-500 text-[12px]">
            <span>📌 Case Folding</span><span>📌 Cleaning</span><span>📌 Stopword (Negasi dipertahankan)</span><span>📌 Stemming (Sastrawi)</span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col items-center justify-center">
          <DonutChart />
          <div className="mt-2 text-[12px] text-slate-400 text-center leading-relaxed">
            <span className="text-white font-bold">76.951</span> ulasan bersih<br />
            <span className="text-slate-400">Netral 49% | Positif 36% | Negatif 14%</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};