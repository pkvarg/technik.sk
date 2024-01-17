import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });
const myFont = localFont({ src: './../fonts/Candara.ttf' });

export const metadata: Metadata = {
  title: 'Technik',
  description: 'Komorný orchester technik',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <Toaster />
        {children}
        <Footer />
      </body>
    </html>
  );
}
