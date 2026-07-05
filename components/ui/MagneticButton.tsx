'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
  href?: string;
  download?: boolean;
  variant?: 'primary' | 'ghost';
  className?: string;
  external?: boolean;
};

export default function MagneticButton({
  children,
  href = '#',
  download,
  variant = 'primary',
  className = '',
  external,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setOffset({ x: x * 0.3, y: y * 0.3 });
  };

  const base =
    'relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-body text-sm font-medium tracking-wide transition-colors duration-300 select-none';
  const styles =
    variant === 'primary'
      ? 'bg-neon-gradient text-void shadow-neon-violet hover:shadow-neon-blue'
      : 'glass text-frost hover:text-white glass-hover';

  return (
    <motion.a
      ref={ref}
      href={href}
      download={download}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`${base} ${styles} ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.4 }}
      whileTap={{ scale: 0.96 }}
    >
      {children}
    </motion.a>
  );
}
