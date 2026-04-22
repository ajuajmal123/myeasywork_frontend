'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Menu, Briefcase } from 'lucide-react';
import { usePathname } from 'next/navigation';

export const AppHeader: React.FC = () => {
  const pathname = usePathname();
  const isWorker = pathname?.startsWith('/worker-app');

  return (
    <header className="sticky top-0 z-40 w-full bg-[#000080] text-white shadow-md">
      <div className="flex h-16 items-center px-4 md:px-6">
        <Link href={isWorker ? '/worker-app' : '/'} className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <img src="/logo.jpeg" alt="MyEasyWork.in Logo" className="h-10 w-auto bg-white p-1 rounded-md" />
          {isWorker && <Badge>Partner</Badge>}
        </Link>

        {/* Location Display (Customer) */}
        {!isWorker && (
          <div className="ml-6 hidden md:flex items-center text-sm font-medium bg-[#1a1a99] px-3 py-1.5 rounded-md cursor-pointer hover:bg-[#3333b3] transition-colors">
            <MapPin size={16} className="mr-1.5 text-[#FF9933]" />
            <span className="truncate max-w-[150px]">Indiranagar, BLR</span>
          </div>
        )}

        {/* Right side navigation */}
        <div className="ml-auto flex items-center space-x-4">
          <div className="hidden lg:flex items-center space-x-6 mr-6">
            {!isWorker ? (
              <>
                <Link href="/services" className="text-sm font-medium hover:text-[#FF9933] transition-colors">Find a Service</Link>
                <Link href="/login" className="text-sm font-medium hover:text-[#FF9933] transition-colors">Login / My Bookings</Link>
                <Link href="/register" className="text-sm font-bold text-[#FF9933] flex items-center bg-orange-50/10 px-3 py-1.5 rounded-xl border border-[#FF9933]/30"><Briefcase size={16} className="mr-1.5"/> Earn with Us</Link>
              </>
            ) : (
              <>
                <Link href="/worker-app/jobs" className="text-sm font-medium hover:text-[#FF9933] transition-colors">Job Requests</Link>
                <Link href="/worker-app/wallet" className="text-sm font-medium hover:text-[#FF9933] transition-colors">Wallet</Link>
                <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Switch Profile</Link>
              </>
            )}
          </div>
          
          {/* Avatar / Profile */}
          <div className="h-8 w-8 rounded-full bg-[#FF9933] flex items-center justify-center text-sm font-bold overflow-hidden border border-white">
            {isWorker ? 'RK' : 'VS'}
          </div>
        </div>
      </div>
    </header>
  );
};

// Local badge definition just for the AppHeader's "Partner" tag to keep imports simple
const Badge = ({children}: {children: React.ReactNode}) => (
    <span className="ml-2 px-1.5 py-0.5 rounded text-[10px] uppercase font-bold bg-[#FF9933] text-white tracking-wider">
        {children}
    </span>
);
