'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeading from '@/components/ui/SectionHeading';
import { about } from '@/lib/data';

export default function About() {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.stat-card').forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 60 + i * 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 88%' },
          }
        );
      });
    }, statsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-neon-violet/10 blur-[120px]" />

      <SectionHeading eyebrow="01 · About" title={about.headline} />

      <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-6">
          {about.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="text-base font-300 leading-relaxed text-mist md:text-lg"
            >
              {p}
            </motion.p>
          ))}
        </div>

        <div ref={statsRef} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {about.stats.map((s) => (
            <div key={s.label} className="stat-card glass glass-hover rounded-2xl p-6">
              <p className="font-display text-3xl font-700 text-gradient md:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm leading-snug text-mist">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
