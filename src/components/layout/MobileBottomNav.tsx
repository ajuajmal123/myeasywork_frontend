'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, ClipboardList, Wallet, UserCircle } from 'lucide-react';

interface MobileBottomNavProps {
  type: 'customer' | 'worker';
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ type }) => {
  const pathname = usePathname();

  const customerLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: Search },
    { name: 'Orders', href: '/orders', icon: ClipboardList },
    { name: 'Profile', href: '/profile', icon: UserCircle },
  ];

  const workerLinks = [
    { name: 'Dashboard', href: '/worker-app', icon: Home },
    { name: 'Jobs', href: '/worker-app/jobs', icon: ClipboardList },
    { name: 'Wallet', href: '/worker-app/wallet', icon: Wallet },
    { name: 'Profile', href: '/worker-app/profile', icon: UserCircle },
  ];

  const links = type === 'customer' ? customerLinks : workerLinks;

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 lg:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href || (pathname?.startsWith(link.href) && link.href !== '/');
          
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`inline-flex flex-col items-center justify-center px-5 flex-1 group ${
                isActive ? 'text-[#000080]' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              <Icon size={24} className={`mb-1 ${isActive ? 'stroke-2' : 'stroke-[1.5]'}`} />
              <span className="text-[10px]">{link.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
