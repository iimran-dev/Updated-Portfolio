import './globals.css';
import { ThemeProvider } from '../components/ThemeProvider';
import SmoothScroll from '../components/SmoothScroll';

export const metadata = {
  title: 'Imran - Frontend Developer & Graphic Designer',
  description: 'Portfolio of Imran - Frontend Developer & Graphic Designer. Turning ideas into responsive, high-performance interfaces.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
