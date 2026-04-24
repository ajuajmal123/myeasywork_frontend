'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Menu, Briefcase } from 'lucide-react';
import { usePathname } from 'next/navigation';

export const AppHeader: React.FC = () => {
  const pathname = usePathname();
  const isWorker = pathname?.startsWith('/worker-app');

  return (
    <header className="sticky top-0 z-40 w-full bg-[#001F3F] text-white shadow-[0_4px_20px_rgba(0,0,0,0.5)] border-b border-[#D4AF37]/20">
      <div className="flex h-16 items-center px-4 md:px-8 max-w-7xl mx-auto">
        <Link href={isWorker ? '/worker-app' : '/'} className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <div className="flex items-center gap-2">
			  {/* Text logo fallback if image is just standard */}
              <div className="text-[#D4AF37] font-extrabold text-2xl tracking-wider uppercase" style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.5)"}}>
                MyEasy<span className="text-white">Work</span>
              </div>
          </div>
          {isWorker && <Badge>Partner</Badge>}
        </Link>

        {/* Location Display (Customer) */}
        {!isWorker && (
          <div className="ml-8 hidden md:flex items-center text-sm font-medium bg-[#ffffff0a] border border-[#D4AF37]/30 px-4 py-2 rounded-lg cursor-pointer hover:bg-[#ffffff15] transition-colors shadow-inner">
            <MapPin size={16} className="mr-2 text-[#D4AF37]" />
            <span className="truncate max-w-[200px] text-gray-200">Indiranagar, BLR</span>
          </div>
        )}

        {/* Right side navigation */}
        <div className="ml-auto flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-6 mr-6">
            {!isWorker ? (
              <>
                <Link href="/services" className="text-sm font-medium text-gray-300 hover:text-[#D4AF37] transition-colors">Find a Service</Link>
                <Link href="/login" className="text-sm font-medium text-gray-300 hover:text-[#D4AF37] transition-colors">Login / My Bookings</Link>
                <Link href="/register" className="text-sm font-bold text-[#001F3F] flex items-center gold-gradient px-5 py-2 rounded-md hover:opacity-90 transition-opacity shadow-[0_0_10px_rgba(212,175,55,0.3)]"><Briefcase size={16} className="mr-2"/> Earn with Us</Link>
              </>
            ) : (
              <>
                <Link href="/worker-app/jobs" className="text-sm font-medium hover:text-[#D4AF37] transition-colors">Job Requests</Link>
                <Link href="/worker-app/wallet" className="text-sm font-medium hover:text-[#D4AF37] transition-colors">Wallet</Link>
                <Link href="/" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Switch Profile</Link>
              </>
            )}
          </div>
          
          {/* Avatar / Profile */}
          <div className="h-9 w-9 rounded-full gold-gradient flex items-center justify-center text-sm font-bold overflow-hidden border-2 border-[#D4AF37] text-[#001F3F] shadow-[0_0_8px_rgba(212,175,55,0.5)] cursor-pointer hover:scale-105 transition-transform">
            {isWorker ? 'RK' : 'VS'}
          </div>
        </div>
      </div>
    </header>
  );
};

const Badge = ({children}: {children: React.ReactNode}) => (
    <span className="ml-2 px-2 py-0.5 rounded text-[10px] uppercase font-bold gold-gradient text-[#001F3F] tracking-wider shadow-sm">
        {children}
    </span>
);
