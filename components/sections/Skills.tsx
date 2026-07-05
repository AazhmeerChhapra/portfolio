'use client';

import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { skillGroups } from '@/lib/data';

const icons: Record<string, React.ReactNode> = {
  brain: (
    <path d="M12 3a4 4 0 0 0-4 4v.5A3.5 3.5 0 0 0 5 11a3.5 3.5 0 0 0 1.2 6.6A4 4 0 0 0 12 21a4 4 0 0 0 5.8-3.4A3.5 3.5 0 0 0 19 11a3.5 3.5 0 0 0-3-3.5V7a4 4 0 0 0-4-4Z" />
  ),
  chat: (
    <path d="M4 5h16v11H8l-4 4V5Zm4 4h8M8 12h5" />
  ),
  wave: <path d="M2 12c2-6 4-6 6 0s4 6 6 0 4-6 6 0" />,
  eye: (
    <>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  cloud: <path d="M6 18a4 4 0 0 1 0-8 6 6 0 0 1 11.3-1.9A4.5 4.5 0 0 1 17.5 18H6Z" />,
  data: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </>
  ),
  code: <path d="m8 6-6 6 6 6m8-12 6 6-6 6M14 4l-4 16" />,
  tools: <path d="M14.7 6.3a4 4 0 0 0-5.6 5L4 16.4V20h3.6l5.1-5.1a4 4 0 0 0 5-5.6l-2.9 2.9-2.1-2.1 2.9-2.8Z" />,
};

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
      <div className="pointer-events-none absolute -right-40 top-40 h-96 w-96 rounded-full bg-neon-blue/10 blur-[120px]" />

      <SectionHeading eyebrow="02 · Capability" title="A full-stack AI arsenal." />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: (i % 4) * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="glass glass-hover group rounded-2xl p-6"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-neon-blue/10 text-neon-blue transition-colors group-hover:bg-neon-violet/15 group-hover:text-neon-violet">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                {icons[group.icon]}
              </svg>
            </div>
            <h3 className="mb-4 font-display text-sm font-600 leading-snug text-frost">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] tracking-wide text-mist transition-colors group-hover:border-neon-blue/25"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
