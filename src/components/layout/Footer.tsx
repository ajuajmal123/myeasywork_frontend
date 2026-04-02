import Link from 'next/link';
import { Globe, Mail, MessageSquare, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 mt-auto pt-10 pb-28 lg:pb-12 px-6">
      <div className="max-w-md md:max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <h3 className="font-extrabold text-[#000080] text-xl tracking-tight mb-4">MyEasy<span className="text-[#FF9933]">Work</span></h3>
            <p className="text-gray-500 text-sm mb-4 leading-relaxed">
              India's fastest growing hyperlocal service marketplace. Trusted by thousands for transparent, highly-verified everyday utility work.
            </p>
            <div className="flex space-x-4 text-gray-400">
              <a href="#" className="hover:text-[#000080] transition"><Globe size={18} /></a>
              <a href="#" className="hover:text-[#000080] transition"><MessageSquare size={18} /></a>
              <a href="#" className="hover:text-[#FF9933] transition"><Phone size={18} /></a>
              <a href="#" className="hover:text-red-600 transition"><Mail size={18} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-[#1A1A1A] mb-4">Customers</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/services" className="hover:text-[#FF9933] transition">Find Services</Link></li>
              <li><Link href="/login" className="hover:text-[#FF9933] transition">My Bookings</Link></li>
              <li><Link href="#" className="hover:text-[#FF9933] transition">UC Secure Guarantee</Link></li>
              <li><Link href="#" className="hover:text-[#FF9933] transition">Support Center</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#1A1A1A] mb-4">Partners</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/register" className="hover:text-[#FF9933] transition">Join as a Professional</Link></li>
              <li><Link href="/login" className="hover:text-[#FF9933] transition">Partner Dashboard</Link></li>
              <li><Link href="#" className="hover:text-[#FF9933] transition">Training & Standards</Link></li>
              <li><Link href="#" className="hover:text-[#FF9933] transition">Payout Structure</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#1A1A1A] mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="#" className="hover:text-[#FF9933] transition">Terms & Conditions</Link></li>
              <li><Link href="#" className="hover:text-[#FF9933] transition">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-[#FF9933] transition">Anti-Discrimination</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© {new Date().getFullYear()} MyEasyWork Technologies Pvt Ltd. All Rights Reserved.</p>
          <div className="mt-2 md:mt-0 font-medium">
            <span className="animate-pulse mr-1">⚡</span> Built for India, in India.
          </div>
        </div>
      </div>
    </footer>
  );
};
