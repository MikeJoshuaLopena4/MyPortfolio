import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from './components/Navigation';
import { ThemeProvider } from './components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mike Joshua Lopena - Portfolio',
  description: 'Computer Engineer & Full-Stack Developer specializing in Cloud Computing, IoT, and Embedded Systems',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Navigation />
          <main className="md:pl-32">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}