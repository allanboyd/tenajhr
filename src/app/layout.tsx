import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Janet Mathenge — People & Culture',
  description:
    'People & Culture partner to startups and scaling organizations across Africa and globally. HR systems that bring structure, clarity, and consistency.',
  keywords: ['HR Consultant', 'People & Culture', 'Kenya', 'Startup HR', 'HR Systems', 'Talent Acquisition'],
  openGraph: {
    title: 'Janet Mathenge — People & Culture',
    description: 'Building HR systems that bring structure, clarity, and consistency.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${dmSans.variable}`}>{children}</body>
    </html>
  );
}
