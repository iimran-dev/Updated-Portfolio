import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import SmoothScroll from '../components/SmoothScroll';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata = {
  title: 'Imran — Product Designer & Frontend Engineer',
  description: 'Independent portfolio of Imran. Designing and engineering thoughtful digital products, design systems, and modern web applications with strategic clarity and production precision.',
  keywords: [
    'Product Designer',
    'Frontend Engineer',
    'UI/UX Design',
    'Next.js',
    'React',
    'Design Systems',
    'TypeScript',
  ],
  authors: [{ name: 'Imran' }],
  creator: 'Imran',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Imran — Product Designer & Frontend Engineer',
    description: 'Designing and engineering thoughtful digital products with strategic clarity and production precision.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Imran Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Imran — Product Designer & Frontend Engineer',
    description: 'Designing and engineering thoughtful digital products with strategic clarity and production precision.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={plusJakarta.variable} suppressHydrationWarning>
      <body className="bg-[#F7F7F5] text-[#111111] antialiased selection:bg-[#111111] selection:text-[#F7F7F5]">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
