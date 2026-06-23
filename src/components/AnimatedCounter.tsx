import React, { useEffect, useState } from 'react';
import { useMotionValue, animate } from 'framer-motion';

interface AnimatedCounterProps {
  value: number; // e.g. 96.67
  duration?: number; // in seconds
  suffix?: string; // e.g. "%"
  decimals?: number; // e.g. 2
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 1.0,
  suffix = '',
  decimals = 2,
}) => {
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState('0' + suffix);

  useEffect(() => {
    count.set(0);
    const controls = animate(count, value, {
      duration: duration,
      ease: 'easeOut',
      onUpdate: (latest) => {
        setDisplayValue(latest.toFixed(decimals) + suffix);
      },
    });
    return () => controls.stop();
  }, [value, count, duration, decimals, suffix]);

  return <span>{displayValue}</span>;
};
