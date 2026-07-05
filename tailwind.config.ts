import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        void: '#04040a',
        abyss: '#080812',
        panel: '#0c0c1a',
        neon: {
          blue: '#4d8dff',
          cyan: '#38e5ff',
          violet: '#8b5cf6',
          magenta: '#c26bff',
        },
        mist: '#9aa3c0',
        frost: '#e8ebf7',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      boxShadow: {
        'neon-blue': '0 0 24px rgba(77, 141, 255, 0.35), 0 0 64px rgba(77, 141, 255, 0.12)',
        'neon-violet': '0 0 24px rgba(139, 92, 246, 0.35), 0 0 64px rgba(139, 92, 246, 0.12)',
        glass: '0 8px 32px rgba(2, 4, 16, 0.6)',
      },
      backgroundImage: {
        'neon-gradient': 'linear-gradient(120deg, #4d8dff 0%, #8b5cf6 50%, #c26bff 100%)',
        'radial-fade': 'radial-gradient(ellipse at center, rgba(77,141,255,0.14) 0%, transparent 65%)',
      },
      animation: {
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 24s linear infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
