'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeading from '@/components/ui/SectionHeading';
import { experience, education, certifications } from '@/lib/data';

export default function Experience() {
  const lineRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (lineRef.current && wrapRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            transformOrigin: 'top center',
            scrollTrigger: {
              trigger: wrapRef.current,
              start: 'top 75%',
              end: 'bottom 60%',
              scrub: 0.6,
            },
          }
        );
      }
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
      <SectionHeading eyebrow="03 · Trajectory" title="From industrial control to frontier AI." />

      <div ref={wrapRef} className="relative">
        {/* neon spine */}
        <div className="absolute left-4 top-0 h-full w-px bg-white/10 md:left-1/2" />
        <div
          ref={lineRef}
          className="absolute left-4 top-0 h-full w-px bg-neon-gradient shadow-neon-blue md:left-1/2"
          style={{ transform: 'scaleY(0)', transformOrigin: 'top center' }}
        />

        <div className="space-y-16">
          {experience.map((job, i) => (
            <motion.article
              key={job.role}
              initial={{ opacity: 0, x: i % 2 === 0 ? 60 : -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className={`relative pl-12 md:w-[calc(50%-2.5rem)] md:pl-0 ${
                i % 2 === 0 ? 'md:ml-auto' : ''
              }`}
            >
              {/* node */}
              <span
                className={`absolute left-4 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-neon-blue shadow-neon-blue md:top-3 ${
                  i % 2 === 0 ? 'md:-left-10' : 'md:left-auto md:-right-10 md:translate-x-1/2'
                }`}
              />
              <div className="glass glass-hover rounded-2xl p-7 md:p-8">
                <span className="mb-3 inline-block rounded-full border border-neon-violet/40 bg-neon-violet/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-neon-magenta">
                  {job.tag}
                </span>
                <h3 className="font-display text-xl font-600 text-frost">{job.role}</h3>
                <p className="mt-1 text-sm text-neon-blue">
                  {job.company} · {job.location}
                </p>
                <p className="mt-1 font-mono text-xs tracking-widest text-mist">{job.period}</p>
                <ul className="mt-5 space-y-3">
                  {job.points.map((point, j) => (
                    <li key={j} className="flex gap-3 text-sm font-300 leading-relaxed text-mist">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neon-violet" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* education + certifications */}
      <div className="mt-24 grid gap-6 lg:grid-cols-3">
        {education.map((edu) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="glass glass-hover rounded-2xl p-7"
          >
            <p className="eyebrow mb-3 !text-neon-magenta">Education</p>
            <h3 className="font-display text-base font-600 leading-snug text-frost">
              {edu.degree}
            </h3>
            <p className="mt-2 text-sm text-neon-blue">{edu.institution}</p>
            <p className="mt-1 font-mono text-xs tracking-widest text-mist">{edu.period}</p>
            <p className="mt-3 text-sm font-300 text-mist">{edu.detail}</p>
            {edu.modules && (
              <p className="mt-3 text-xs font-300 leading-relaxed text-mist/70">{edu.modules}</p>
            )}
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="glass glass-hover rounded-2xl p-7"
        >
          <p className="eyebrow mb-3 !text-neon-magenta">Certifications</p>
          <ul className="space-y-3">
            {certifications.map((cert) => (
              <li key={cert} className="flex gap-3 text-sm font-300 leading-relaxed text-mist">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neon-blue" />
                {cert}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
