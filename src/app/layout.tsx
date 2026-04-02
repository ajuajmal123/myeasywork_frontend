import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AppHeader } from '../components/layout/AppHeader';
import { MobileBottomNav } from '../components/layout/MobileBottomNav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MyEasyWork',
  description: 'Hyperlocal Service Marketplace in India',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#F8F9FA] pb-20 lg:pb-0 text-[#1A1A1A]`}>
        <AppHeader />
        <main className="min-h-screen">
          {children}
        </main>
        <MobileBottomNav type="customer" />
      </body>
    </html>
  );
}
