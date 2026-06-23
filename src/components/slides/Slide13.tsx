import React from 'react';
import { motion } from 'framer-motion';
import { slideVariants, slideTransition, containerVariants, itemVariants } from './shared';

interface MatrixProps {
  title: string;
  data: {
    neg: number[];
    net: number[];
    pos: number[];
  };
  accuracy: string;
  isSmote?: boolean;
}

const Matrix: React.FC<MatrixProps> = ({ title, data, accuracy, isSmote }) => {
  return (
    <div className="flex flex-col items-center">
      <h4 className={`text-xs md:text-sm font-bold mb-2.5 ${isSmote ? 'text-amber-400' : 'text-slate-300'}`}>{title}</h4>
      <div className="grid grid-cols-4 gap-1.5 max-w-[280px] md:max-w-[300px] w-full text-center text-[10px] md:text-xs font-semibold">
        {/* Row 0: Headers */}
        <div />
        <div className="text-red-400 py-1 font-bold">Pred Neg</div>
        <div className="text-slate-400 py-1 font-bold">Pred Net</div>
        <div className="text-emerald-400 py-1 font-bold">Pred Pos</div>

        {/* Row 1: Neg */}
        <div className="text-red-400 font-bold self-center pr-1 text-right">Neg</div>
        <div className="bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 py-2 rounded-lg font-bold">{data.neg[0]}</div>
        <div className="bg-red-500/15 border border-red-500/20 text-red-400 py-2 rounded-lg">{data.neg[1]}</div>
        <div className="bg-white/5 border border-white/5 text-slate-600 py-2 rounded-lg">{data.neg[2]}</div>

        {/* Row 2: Net */}
        <div className="text-slate-400 font-bold self-center pr-1 text-right">Net</div>
        <div className="bg-red-500/15 border border-red-500/20 text-red-400 py-2 rounded-lg">{data.net[0]}</div>
        <div className="bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 py-2 rounded-lg font-bold">{data.net[1]}</div>
        <div className="bg-amber-500/10 border border-amber-500/15 text-amber-400 py-2 rounded-lg">{data.net[2]}</div>

        {/* Row 3: Pos */}
        <div className="text-emerald-400 font-bold self-center pr-1 text-right">Pos</div>
        <div className="bg-white/5 border border-white/5 text-slate-600 py-2 rounded-lg">{data.pos[0]}</div>
        <div className="bg-amber-500/10 border border-amber-500/15 text-amber-400 py-2 rounded-lg">{data.pos[1]}</div>
        <div className="bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 py-2 rounded-lg font-bold">{data.pos[2]}</div>
      </div>
      <span className="text-[10px] text-slate-500 mt-2.5">Akurasi: {accuracy}</span>
    </div>
  );
};

export const Slide13: React.FC = () => {
  return (
    <motion.div
      variants={slideVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={slideTransition}
      className="flex flex-col justify-center h-full max-w-6xl mx-auto px-4"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">📊 Confusion Matrix</h2>
      <p className="text-sm md:text-base text-slate-400 border-l-4 border-sky-400 pl-4 mt-2 mb-4">Pola kesalahan klasifikasi Skenario A vs B</p>

      <motion.div
        variants={containerVariants}
        animate="animate"
        className="flex flex-col gap-3"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/5 border border-white/5 p-4 rounded-2xl">
          <motion.div variants={itemVariants}>
            <Matrix
              title="Skenario A (Tanpa SMOTE)"
              data={{
                neg: [2096, 116, 0],
                net: [72, 7301, 227],
                pos: [2, 64, 5513],
              }}
              accuracy="96.67%"
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Matrix
              title="Skenario B (Dengan SMOTE)"
              data={{
                neg: [2150, 62, 0],
                net: [115, 7227, 258],
                pos: [3, 64, 5512],
              }}
              accuracy="96.72%"
              isSmote={true}
            />
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="text-[10px] md:text-xs text-slate-400 bg-amber-500/5 border border-amber-500/10 py-2 px-4 rounded-xl">
          ⚠️ <span className="text-amber-400 font-bold">Insight:</span> Setelah SMOTE, data Netral yang terprediksi Negatif meningkat (<span className="text-red-400 font-bold">72 → 115</span>). Hal ini merupakan konsekuensi dari peningkatan sensitivitas model terhadap sentimen negatif (Recall naik, Precision sedikit turun).
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
