import type { Variants } from 'framer-motion';

export const slideVariants: Variants = {
  initial: { opacity: 0, scale: 0.95, y: 10 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.92, y: -10 },
};

export const slideTransition = {
  duration: 0.5,
  ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // easeOutExpo
};

export const containerVariants: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const itemVariants: Variants = {
  initial: { opacity: 0, y: 15, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
};
