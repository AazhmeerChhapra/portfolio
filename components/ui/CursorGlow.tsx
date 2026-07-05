'use client';

import { useEffect, useRef, useState } from 'react';

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Never mount the glow on touch/coarse-pointer devices: there is no
    // mouse to track, and leaving the 600px box at its default top-left
    // position would overflow narrow viewports and cause horizontal scroll.
    setEnabled(!window.matchMedia('(pointer: coarse)').matches);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;

    let raf = 0;
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let cx = tx;
    let cy = ty;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const loop = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      el.style.transform = `translate3d(${cx - 300}px, ${cy - 300}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 h-[600px] w-[600px] rounded-full opacity-25"
      style={{
        background:
          'radial-gradient(circle, rgba(77,141,255,0.25) 0%, rgba(139,92,246,0.12) 40%, transparent 70%)',
        filter: 'blur(40px)',
        transform: 'translate3d(-300px, -300px, 0)',
      }}
    />
  );
}
