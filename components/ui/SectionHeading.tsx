'use client';

import { motion } from 'framer-motion';

export default function SectionHeading({
  eyebrow,
  title,
  align = 'left',
}: {
  eyebrow: string;
  title: string;
  align?: 'left' | 'center';
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-14 md:mb-20 ${align === 'center' ? 'text-center' : ''}`}
    >
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="font-display text-3xl md:text-5xl font-600 leading-tight text-frost">
        {title}
      </h2>
      <div
        className={`mt-6 h-px w-24 bg-neon-gradient ${align === 'center' ? 'mx-auto' : ''}`}
      />
    </motion.div>
  );
}
