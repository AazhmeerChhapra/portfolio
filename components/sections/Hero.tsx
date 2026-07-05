'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from '@/components/ui/MagneticButton';
import { site } from '@/lib/data';

const HeroScene = dynamic(() => import('@/components/three/HeroScene'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="h-40 w-40 animate-pulse-slow rounded-full bg-neon-gradient opacity-20 blur-3xl" />
    </div>
  ),
});

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 32, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % site.roles.length),
      2800
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* 3D canvas */}
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      {/* grid + vignettes */}
      <div className="grid-overlay pointer-events-none absolute inset-0 z-[1]" />
      <div className="pointer-events-none absolute inset-0 z-[2] bg-radial-fade" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-48 bg-gradient-to-t from-void to-transparent" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
      >
        <motion.p variants={item} className="eyebrow mb-6">
          Cambridge, United Kingdom · Amazon AGI-DS
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-4xl font-700 leading-[1.05] tracking-tight text-frost sm:text-6xl md:text-7xl"
        >
          Aazhmeer
          <br />
          <span className="text-gradient">Chhapra</span>
        </motion.h1>

        <motion.div variants={item} className="mt-8 h-8 md:h-9">
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="font-mono text-sm uppercase tracking-[0.3em] text-neon-cyan md:text-base"
            >
              {site.roles[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-2xl text-base font-300 leading-relaxed text-mist md:text-lg"
        >
          {site.tagline}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <MagneticButton href="#projects">
            Explore my work
            <span aria-hidden>→</span>
          </MagneticButton>
          <MagneticButton href={site.cvPath} download variant="ghost">
            Download CV
            <span aria-hidden>↓</span>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex h-12 w-7 items-start justify-center rounded-full border border-mist/30 p-2"
        >
          <div className="h-2 w-1 rounded-full bg-neon-blue" />
        </motion.div>
      </motion.a>
    </section>
  );
}
