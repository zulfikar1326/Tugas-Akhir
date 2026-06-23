import React from 'react';
import { motion } from 'framer-motion';
import { slideVariants, slideTransition, containerVariants, itemVariants } from './shared';
import { Search, BookOpen, Settings, BarChart2, CheckCircle2 } from 'lucide-react';

export const Slide2: React.FC = () => {
  const steps = [
    { icon: <Search className="w-8 h-8 text-sky-400" />, title: 'Pendahuluan', desc: 'Masalah & Rumusan' },
    { icon: <BookOpen className="w-8 h-8 text-sky-400" />, title: 'Tinjauan Pustaka', desc: 'State of the Art' },
    { icon: <Settings className="w-8 h-8 text-sky-400" />, title: 'Metodologi', desc: 'Data & Eksperimen' },
    { icon: <BarChart2 className="w-8 h-8 text-sky-400" />, title: 'Hasil & Pembahasan', desc: 'Temuan Utama', active: true },
    { icon: <CheckCircle2 className="w-8 h-8 text-sky-400" />, title: 'Penutup', desc: 'Kesimpulan & Saran' },
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
      <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">📋 Alur Presentasi</h2>
      <p className="text-sm md:text-base text-slate-400 border-l-4 border-sky-400 pl-4 mt-2 mb-6">Peta jalan menuju jawaban penelitian</p>
      
      <motion.div
        variants={containerVariants}
        animate="animate"
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
      >
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className={`glass-card p-5 flex flex-col items-center text-center justify-center rounded-2xl border transition-all duration-300 hover:scale-[1.03] ${
              step.active
                ? 'bg-sky-500/10 border-sky-400/40 shadow-[0_0_20px_rgba(56,189,248,0.15)]'
                : 'bg-white/5 border-white/5 hover:border-white/10'
            }`}
          >
            <div className="mb-3 bg-slate-900/50 p-3 rounded-full border border-white/5">{step.icon}</div>
            <h3 className={`text-base font-bold ${step.active ? 'text-sky-400' : 'text-white'}`}>{step.title}</h3>
            <p className="text-xs text-slate-400 mt-1">{step.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
