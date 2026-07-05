'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { research } from '@/lib/data';

export default function Research() {
  return (
    <section id="research" className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-neon-violet/10 blur-[120px]" />

      <SectionHeading eyebrow="05 · Research" title={research.headline} />

      <div className="grid gap-6 md:grid-cols-2">
        {research.items.map((item, i) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="glass glass-hover group relative overflow-hidden rounded-3xl p-8 md:p-10"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-neon-blue/10 blur-[60px] transition-opacity group-hover:opacity-100" />

            <span className="mb-5 inline-block rounded-full border border-neon-cyan/30 bg-neon-cyan/5 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-neon-cyan">
              {item.status}
            </span>
            <h3 className="font-display text-xl font-600 leading-snug text-frost md:text-2xl">
              {item.title}
            </h3>
            <p className="mt-5 text-sm font-300 leading-relaxed text-mist">{item.description}</p>
            <p className="mt-6 font-mono text-xs tracking-widest text-mist/60">{item.venue}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
