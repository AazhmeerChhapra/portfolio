import type { Metadata, Viewport } from 'next';
import { Unbounded, Sora, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { site } from '@/lib/data';

const display = Unbounded({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
});

const body = Sora({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600'],
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
});

const title = `${site.name} — Generative AI Researcher · AI Engineer · Industrial Automation Engineer`;
const description =
  'Portfolio of Aazhmeer Chhapra, an AI Engineer in Cambridge, UK building reliable, interpretable AI systems — deep learning, generative AI, RAG, clinical ML pipelines, and industrial automation. MSc Artificial Intelligence (Distinction) at Anglia Ruskin University · Amazon AGI-DS.';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s — ${site.name}`,
  },
  description,
  keywords: [
    'AI Engineer',
    'Generative AI Researcher',
    'Machine Learning Engineer',
    'Industrial Automation Engineer',
    'Aazhmeer Chhapra',
    'Cambridge UK',
    'Deep Learning',
    'LLM',
    'RAG',
    'LangChain',
    'PyTorch',
    'TensorFlow',
    'NLP',
    'Computer Vision',
    'AWS',
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: site.url,
    title,
    description,
    siteName: site.name,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#04040a',
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  jobTitle: 'Artificial Intelligence Engineer',
  email: `mailto:${site.email}`,
  telephone: site.phone,
  url: site.url,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cambridge',
    addressCountry: 'GB',
  },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Anglia Ruskin University' },
    { '@type': 'CollegeOrUniversity', name: 'COMSATS University Islamabad' },
  ],
  worksFor: { '@type': 'Organization', name: 'Amazon AGI-DS' },
  knowsAbout: [
    'Machine Learning',
    'Deep Learning',
    'Generative AI',
    'Natural Language Processing',
    'Computer Vision',
    'Industrial Automation',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
