'use client';

import { motion } from 'framer-motion';
import MagneticButton from '@/components/ui/MagneticButton';
import { site } from '@/lib/data';

const channels = [
  {
    label: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
    external: false,
  },
  {
    label: 'Phone',
    value: site.phone,
    href: `tel:${site.phone.replace(/\s/g, '')}`,
    external: false,
  },
  {
    label: 'GitHub',
    value: 'View repositories',
    href: site.github,
    external: true,
  },
  {
    label: 'LinkedIn',
    value: 'Connect professionally',
    href: site.linkedin,
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[500px] bg-radial-fade" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="glass relative overflow-hidden rounded-[2rem] p-8 text-center md:p-16"
      >
        <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-full bg-neon-violet/15 blur-[100px]" />

        <p className="eyebrow mb-5">06 · Contact</p>
        <h2 className="font-display text-3xl font-700 leading-tight text-frost md:text-5xl">
          Let&apos;s build something
          <br />
          <span className="text-gradient">intelligent together.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base font-300 leading-relaxed text-mist">
          Open to AI engineering roles, research collaborations, and projects at the
          intersection of generative AI, healthcare, and industrial systems. Based in{' '}
          {site.location}.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((ch, i) => (
            <motion.a
              key={ch.label}
              href={ch.href}
              target={ch.external ? '_blank' : undefined}
              rel={ch.external ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass glass-hover rounded-2xl p-5 text-left"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-neon-blue">
                {ch.label}
              </p>
              <p className="mt-2 truncate text-sm text-frost">{ch.value}</p>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <MagneticButton href={`mailto:${site.email}`}>
            Start a conversation <span aria-hidden>→</span>
          </MagneticButton>
          <MagneticButton href={site.cvPath} download variant="ghost">
            Download CV <span aria-hidden>↓</span>
          </MagneticButton>
        </div>
      </motion.div>

      <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-center sm:flex-row sm:text-left">
        <p className="font-mono text-xs tracking-widest text-mist/60">
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="font-mono text-xs tracking-widest text-mist/60">
          Generative AI Researcher · AI Engineer · Industrial Automation Engineer
        </p>
      </footer>
    </section>
  );
}
