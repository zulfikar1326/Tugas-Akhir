import React from 'react';
import { motion } from 'framer-motion';

export const DonutChart: React.FC = () => {
  const circumference = 289.02; // 2 * Math.PI * 46

  // Percentages
  const netralPct = 49.38;
  const positifPct = 36.25;
  const negatifPct = 14.37;

  // Lengths
  const netralLen = (netralPct / 100) * circumference;
  const positifLen = (positifPct / 100) * circumference;
  const negatifLen = (negatifPct / 100) * circumference;

  // Cumulative offsets (to start each segment where the previous one ended)
  const netralOffset = 0;
  const positifOffset = netralLen;
  const negatifOffset = netralLen + positifLen;

  // Framer Motion transition
  const transition = {
    duration: 1.2,
    ease: 'easeOut' as const,
  };

  return (
    <div className="w-56 h-56 md:w-48 md:h-48 relative mx-auto">
      <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
        {/* Background track */}
        <circle
          cx="60"
          cy="60"
          r="46"
          fill="none"
          stroke="rgba(255, 255, 255, 0.05)"
          strokeWidth="12"
        />

        {/* Netral segment */}
        <motion.circle
          cx="60"
          cy="60"
          r="46"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="12"
          strokeDasharray={`${netralLen} ${circumference}`}
          initial={{ strokeDashoffset: netralLen }}
          animate={{ strokeDashoffset: 0 }}
          transition={transition}
          style={{ transformOrigin: '60px 60px', rotate: `${(netralOffset / circumference) * 360}deg` }}
        />

        {/* Positif segment */}
        <motion.circle
          cx="60"
          cy="60"
          r="46"
          fill="none"
          stroke="#4ade80"
          strokeWidth="12"
          strokeDasharray={`${positifLen} ${circumference}`}
          initial={{ strokeDashoffset: positifLen }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ ...transition, delay: 0.2 }}
          style={{ transformOrigin: '60px 60px', rotate: `${(positifOffset / circumference) * 360}deg` }}
        />

        {/* Negatif segment */}
        <motion.circle
          cx="60"
          cy="60"
          r="46"
          fill="none"
          stroke="#f87171"
          strokeWidth="12"
          strokeDasharray={`${negatifLen} ${circumference}`}
          initial={{ strokeDashoffset: negatifLen }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ ...transition, delay: 0.4 }}
          style={{ transformOrigin: '60px 60px', rotate: `${(negatifOffset / circumference) * 360}deg` }}
        />
      </svg>
      {/* Central label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-2xl font-extrabold text-white tracking-tight">76.951</span>
        <span className="text-xs text-slate-400 uppercase tracking-widest font-semibold mt-0.5">Total Ulasan</span>
      </div>
    </div>
  );
};
