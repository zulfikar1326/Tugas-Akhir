import React from 'react';
import { motion } from 'framer-motion';
import { slideVariants, slideTransition, containerVariants, itemVariants } from './shared';

export const Slide5: React.FC = () => {
  const literatures = [
    { no: 1, author: 'Nugroho dkk. (2023)', dataset: '4.201 ulasan', accuracy: '96.17%', weakness: 'F1 Netral = 0.00' },
    { no: 2, author: 'Rahman dkk. (2022)', dataset: '3.500 ulasan', accuracy: '95%', weakness: 'Recall rendah (44%)' },
    { no: 3, author: 'Bili dkk. (2022)', dataset: '219 ulasan', accuracy: '76.19%', weakness: 'Dataset sangat kecil' },
    { no: 4, author: 'Firman dkk. (2022)', dataset: '~2.000 ulasan', accuracy: '83.5%', weakness: 'Recall rendah (44%)' },
    { no: 5, author: 'Valentina dkk. (2022)', dataset: '~1.500 ulasan', accuracy: '96%', weakness: 'Recall Negatif 0.33' },
    { no: 6, author: 'Anindya dkk. (2022)', dataset: '~1.200 ulasan', accuracy: '92.89%', weakness: 'Netral F1 = 67%' },
    { no: 7, author: 'Putra dkk. (2019)', dataset: '~800 ulasan', accuracy: '86.81%', weakness: 'Kompleksitas tinggi' },
    { no: 8, author: 'Annisa dkk. (2021)', dataset: '~600 ulasan', accuracy: '70%', weakness: 'Netral F1 = 0.50' },
    { no: 9, author: 'Nurhasanah (2022)', dataset: '~1.200 ulasan', accuracy: '94%', weakness: 'Satu platform saja' },
    { no: 10, author: 'Sirait dkk. (2021)', dataset: '~900 ulasan', accuracy: '85%', weakness: 'Peningkatan hanya 4%' },
    { no: 11, author: 'Aditya dkk. (2022)', dataset: '~700 ulasan', accuracy: '98%', weakness: 'Dua kelas saja' },
    { no: 12, author: 'Ikrami dkk. (2024)', dataset: '~1.800 ulasan', accuracy: '89.29%', weakness: 'Tanpa optimasi' },
    { no: 13, author: 'Muthia dkk. (2023)', dataset: '~1.000 ulasan', accuracy: '98.67%', weakness: 'Pelabelan manual bias' },
    { no: 14, author: 'Subakti dkk. (2024)', dataset: '~2.500 ulasan', accuracy: '88.50%', weakness: 'Metode berbeda (NB)' },
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
      <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">📚 Tinjauan Pustaka</h2>
      <p className="text-sm md:text-base text-slate-400 border-l-4 border-sky-400 pl-4 mt-2 mb-4">Perbandingan dengan 14 Penelitian Terdahulu</p>

      <motion.div
        variants={containerVariants}
        animate="animate"
        className="flex flex-col gap-3 min-h-0"
      >
        <motion.div variants={itemVariants} className="glass-card bg-white/5 border border-white/5 p-4 rounded-2xl flex flex-col min-h-0 max-h-72 overflow-y-auto slide-scrollbar">
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-[10px] md:text-xs text-slate-400 uppercase tracking-widest">
                  <th className="py-2 px-3">No</th>
                  <th className="py-2 px-3">Peneliti (Tahun)</th>
                  <th className="py-2 px-3">Dataset</th>
                  <th className="py-2 px-3">Akurasi</th>
                  <th className="py-2 px-3">Kelemahan</th>
                </tr>
              </thead>
              <tbody>
                {literatures.map((lit, idx) => (
                  <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors text-xs text-slate-300">
                    <td className="py-1.5 px-3 font-semibold text-slate-500">{lit.no}</td>
                    <td className="py-1.5 px-3 font-bold text-white">{lit.author}</td>
                    <td className="py-1.5 px-3">{lit.dataset}</td>
                    <td className="py-1.5 px-3 text-sky-400 font-semibold">{lit.accuracy}</td>
                    <td className="py-1.5 px-3">
                      <span className={lit.weakness.includes('0.00') || lit.weakness.includes('0.33') ? 'text-red-400 font-semibold' : 'text-slate-400'}>
                        {lit.weakness}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="glass-card bg-amber-500/5 border-l-6 border-l-amber-500 border-white/5 p-3 rounded-r-2xl">
          <p className="text-amber-500 font-bold text-xs md:text-sm">⚡ Gap Penelitian:</p>
          <p className="text-[11px] md:text-xs text-slate-300 mt-1">
            Mayoritas studi menggunakan dataset &lt; 4.200 ulasan dan gagal mendeteksi sentimen negatif/netral (F1-Score 0.00 – 0.67). <span className="text-sky-400 font-semibold">Penelitian ini mengisi gap dengan dataset 77.828 ulasan</span> dan membandingkan pengaruh SMOTE secara eksplisit.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
