import React from 'react';
import { motion } from 'framer-motion';
import { slideVariants, slideTransition, containerVariants, itemVariants } from './shared';
import { Globe, Shield, RefreshCw } from 'lucide-react';

export const Slide6: React.FC = () => {
  const news = [
    {
      icon: <RefreshCw className="w-8 h-8 text-emerald-400" />,
      number: '77.828',
      label: 'Data Ulasan',
      desc: '18x lebih besar dari rata-rata studi lain (<4.200 ulasan)',
      color: 'border-t-emerald-400'
    },
    {
      icon: <Globe className="w-8 h-8 text-sky-400" />,
      number: '30+',
      label: 'Kota / Kabupaten',
      desc: 'Cakupan seluruh Indonesia (Jawa, Sumatera, Kalimantan, Sulawesi, Papua, Bali, Nusa Tenggara, Maluku)',
      color: 'border-t-sky-400'
    },
    {
      icon: <Shield className="w-8 h-8 text-amber-400" />,
      number: 'A vs B',
      label: 'Perbandingan SMOTE',
      desc: 'Menguji secara eksplisit pengaruh SMOTE pada dataset relatif seimbang (rasio 3:1)',
      color: 'border-t-amber-400',
      highlight: true
    }
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
      <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">🚀 Kebaruan Penelitian</h2>
      <p className="text-sm md:text-base text-slate-400 border-l-4 border-sky-400 pl-4 mt-2 mb-4">Apa yang membedakan penelitian ini dari studi sebelumnya?</p>

      <motion.div
        variants={containerVariants}
        animate="animate"
        className="flex flex-col gap-3"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {news.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`glass-card p-5 rounded-b-2xl rounded-t-lg border border-white/5 border-t-6 flex flex-col items-center text-center justify-center ${item.color} ${
                item.highlight ? 'bg-amber-500/5' : 'bg-white/5'
              }`}
            >
              <div className="mb-2 bg-slate-900/50 p-2.5 rounded-full border border-white/5">{item.icon}</div>
              <span className="text-2xl md:text-3xl font-black text-white">{item.number}</span>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mt-1">{item.label}</span>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="bg-sky-500/5 border border-sky-500/10 p-3 rounded-2xl text-center text-xs text-slate-300"
        >
          ✅ <span className="text-sky-400 font-bold">Kontribusi Baru:</span> Studi pertama yang menguji SVM pada dataset ulasan ritel Indonesia berskala &gt;70.000 serta menganalisis dampak SMOTE terhadap recall kelas negatif.
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
