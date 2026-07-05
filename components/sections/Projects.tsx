'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import { projects, type Project } from '@/lib/data';

const accentMap = {
  blue: {
    text: 'text-neon-blue',
    border: 'border-neon-blue/40',
    bg: 'bg-neon-blue/10',
    glow: 'from-neon-blue/20',
  },
  violet: {
    text: 'text-neon-violet',
    border: 'border-neon-violet/40',
    bg: 'bg-neon-violet/10',
    glow: 'from-neon-violet/20',
  },
  magenta: {
    text: 'text-neon-magenta',
    border: 'border-neon-magenta/40',
    bg: 'bg-neon-magenta/10',
    glow: 'from-neon-magenta/20',
  },
} as const;

function ProjectVisual({ project }: { project: Project }) {
  // Abstract generative SVG visual, unique per accent
  const hue =
    project.accent === 'blue' ? '#4d8dff' : project.accent === 'violet' ? '#8b5cf6' : '#c26bff';
  return (
    <div className="relative flex h-full min-h-[220px] items-center justify-center overflow-hidden rounded-xl bg-abyss">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(circle at 30% 40%, ${hue}33 0%, transparent 55%), radial-gradient(circle at 75% 70%, ${hue}22 0%, transparent 50%)`,
        }}
      />
      <svg viewBox="0 0 400 300" className="relative h-full w-full" aria-hidden>
        <defs>
          <linearGradient id={`g-${project.accent}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={hue} stopOpacity="0.9" />
            <stop offset="100%" stopColor={hue} stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {/* network motif */}
        {Array.from({ length: 14 }).map((_, i) => {
          const x1 = 40 + ((i * 67) % 320);
          const y1 = 40 + ((i * 91) % 220);
          const x2 = 40 + (((i + 5) * 53) % 320);
          const y2 = 40 + (((i + 3) * 79) % 220);
          return (
            <g key={i}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={hue} strokeOpacity="0.18" />
              <circle cx={x1} cy={y1} r="3.5" fill={`url(#g-${project.accent})`}>
                <animate
                  attributeName="r"
                  values="3;5;3"
                  dur={`${2.4 + (i % 4) * 0.5}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          );
        })}
        <circle
          cx="200"
          cy="150"
          r="52"
          fill="none"
          stroke={hue}
          strokeOpacity="0.55"
          strokeDasharray="4 7"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 200 150"
            to="360 200 150"
            dur="26s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="200" cy="150" r="26" fill={`url(#g-${project.accent})`} fillOpacity="0.35" />
        <text
          x="200"
          y="156"
          textAnchor="middle"
          fill={hue}
          fontSize="15"
          fontFamily="monospace"
          letterSpacing="3"
        >
          {project.title.slice(0, 2).toUpperCase()}
        </text>
      </svg>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const accent = accentMap[project.accent];
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="glass glass-hover relative overflow-hidden rounded-3xl p-7 md:p-10"
    >
      <div
        className={`pointer-events-none absolute -top-32 h-64 w-64 rounded-full bg-gradient-to-b ${accent.glow} to-transparent blur-[80px] ${
          index % 2 === 0 ? '-right-20' : '-left-20'
        }`}
      />

      <div
        className={`grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-12 ${
          index % 2 === 1 ? 'lg:[direction:rtl]' : ''
        }`}
      >
        <div className="lg:[direction:ltr]">
          <div className="mb-2 flex flex-wrap items-center gap-3">
            <span className={`font-mono text-xs tracking-[0.3em] ${accent.text}`}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="font-mono text-xs tracking-widest text-mist">{project.period}</span>
          </div>
          <h3 className="font-display text-2xl font-700 text-frost md:text-3xl">
            {project.title}
          </h3>
          <p className={`mt-1 text-sm font-500 ${accent.text}`}>{project.subtitle}</p>

          <div className="mt-7 space-y-6">
            <div>
              <p className="eyebrow mb-2 !text-[10px]">The problem</p>
              <p className="text-sm font-300 leading-relaxed text-mist">{project.problem}</p>
            </div>

            <div>
              <p className="eyebrow mb-2 !text-[10px]">My contribution</p>
              <ul className="space-y-2.5">
                {project.contribution.map((c, i) => (
                  <li key={i} className="flex gap-3 text-sm font-300 leading-relaxed text-mist">
                    <span className={`mt-2 h-1 w-1 shrink-0 rounded-full ${accent.bg} ${accent.border} border`} />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="eyebrow mb-2 !text-[10px]">Results</p>
              <ul className="space-y-2.5">
                {project.results.map((r, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-frost/90">
                    <span aria-hidden className={accent.text}>▸</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:[direction:ltr]">
          <motion.div style={{ y }} className="flex-1">
            <ProjectVisual project={project} />
          </motion.div>
          <div>
            <p className="eyebrow mb-3 !text-[10px]">Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className={`rounded-full border ${accent.border} ${accent.bg} px-3 py-1.5 font-mono text-[11px] tracking-wide ${accent.text}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-neon-magenta/10 blur-[120px]" />

      <SectionHeading eyebrow="04 · Featured Work" title="Projects with measurable outcomes." />

      <div className="space-y-10">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
