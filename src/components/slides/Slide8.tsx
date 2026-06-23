import React from 'react';
import { motion } from 'framer-motion';
import { slideVariants, slideTransition, containerVariants, itemVariants } from './shared';
import { DonutChart } from '../DonutChart';

export const Slide8: React.FC = () => {
  return (
    <motion.div
      variants={slideVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={slideTransition}
      className="flex flex-col justify-center h-full max-w-6xl mx-auto px-4"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">📊 Distribusi Sentimen</h2>
      <p className="text-sm md:text-base text-slate-400 border-l-4 border-sky-400 pl-4 mt-2 mb-4">Sebaran data setelah pelabelan otomatis (76.951 ulasan)</p>

      <motion.div
        variants={containerVariants}
        animate="animate"
        className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
      >
        <motion.div variants={itemVariants} className="flex justify-center">
          <DonutChart />
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col gap-2">
          <div className="flex items-center gap-3 bg-white/5 border border-white/5 p-3 rounded-xl">
            <span className="w-3.5 h-3.5 bg-slate-400 rounded-md shrink-0" />
            <div>
              <span className="font-bold text-white text-xs md:text-sm">Netral</span>
              <span className="text-[9px] text-slate-400 ml-1.5 uppercase font-semibold">Mayoritas</span>
            </div>
            <div className="ml-auto flex items-baseline gap-1.5">
              <span className="font-black text-white text-sm md:text-base">38.000</span>
              <span className="text-[10px] text-slate-400 font-bold">49.38%</span>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/5 border border-white/5 p-3 rounded-xl">
            <span className="w-3.5 h-3.5 bg-emerald-400 rounded-md shrink-0" />
            <span className="font-bold text-white text-xs md:text-sm">Positif</span>
            <div className="ml-auto flex items-baseline gap-1.5">
              <span className="font-black text-white text-sm md:text-base">27.896</span>
              <span className="text-[10px] text-slate-400 font-bold">36.25%</span>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/5 border border-white/5 border-l-4 border-l-red-400 p-3 rounded-r-xl">
            <span className="w-3.5 h-3.5 bg-red-400 rounded-md shrink-0" />
            <div>
              <span className="font-bold text-white text-xs md:text-sm">Negatif</span>
              <span className="text-[9px] text-amber-400 ml-1.5 uppercase font-semibold">Minoritas</span>
            </div>
            <div className="ml-auto flex items-baseline gap-1.5">
              <span className="font-black text-white text-sm md:text-base">11.055</span>
              <span className="text-[10px] text-slate-400 font-bold">14.37%</span>
            </div>
          </div>

          <div className="p-2.5 bg-amber-500/10 border border-amber-500/20 rounded-xl mt-1">
            <p className="text-[10px] md:text-xs text-amber-400 text-center font-medium">
              ✅ Rasio ketimpangan moderat (3:1) → Tidak seekstrem penelitian lain (10:1)
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
