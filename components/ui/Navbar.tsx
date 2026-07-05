'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { site } from '@/lib/data';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#research', label: 'Research' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav
        className={`mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 md:px-8 ${
          scrolled ? 'glass mx-4 md:mx-auto' : 'mx-4 md:mx-auto'
        }`}
        aria-label="Primary"
      >
        <a href="#top" className="font-display text-sm font-700 tracking-widest text-frost">
          AC<span className="text-neon-blue">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-xs uppercase tracking-[0.2em] text-mist transition-colors hover:text-neon-blue"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={site.cvPath}
              download
              className="rounded-full border border-neon-blue/40 px-5 py-2 font-mono text-xs uppercase tracking-[0.2em] text-neon-blue transition-all hover:bg-neon-blue/10 hover:shadow-neon-blue"
            >
              CV ↓
            </a>
          </li>
        </ul>

        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span
            className={`h-px w-6 bg-frost transition-transform ${open ? 'translate-y-[3.5px] rotate-45' : ''}`}
          />
          <span
            className={`h-px w-6 bg-frost transition-transform ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="glass mx-4 mt-2 rounded-2xl p-6 md:hidden"
          >
            <ul className="flex flex-col gap-5">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-mono text-sm uppercase tracking-[0.2em] text-mist hover:text-neon-blue"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={site.cvPath}
                  download
                  className="font-mono text-sm uppercase tracking-[0.2em] text-neon-blue"
                >
                  Download CV ↓
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
