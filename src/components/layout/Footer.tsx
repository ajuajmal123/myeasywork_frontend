import Link from 'next/link';
import { Globe, Mail, MessageSquare, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#00142D] border-t border-[#D4AF37]/20 mt-auto pt-10 pb-28 lg:pb-12 px-6 shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <h3 className="font-extrabold text-[#D4AF37] text-xl tracking-tight mb-4 uppercase" style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.8)"}}>
              MyEasy<span className="text-white">Work</span>
            </h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              India's premium hyperlocal service marketplace. Trusted by thousands for transparent, highly-verified professional everyday utility work.
            </p>
            <div className="flex space-x-4 text-[#D4AF37]/70">
              <a href="#" className="hover:text-[#F9E27E] transition hover:scale-110"><Globe size={18} /></a>
              <a href="#" className="hover:text-[#F9E27E] transition hover:scale-110"><MessageSquare size={18} /></a>
              <a href="#" className="hover:text-[#F9E27E] transition hover:scale-110"><Phone size={18} /></a>
              <a href="#" className="hover:text-[#F9E27E] transition hover:scale-110"><Mail size={18} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-[#D4AF37] mb-4 uppercase tracking-wider text-sm">Customers</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/services" className="hover:text-[#F9E27E] transition">Find Services</Link></li>
              <li><Link href="/login" className="hover:text-[#F9E27E] transition">My Bookings</Link></li>
              <li><Link href="#" className="hover:text-[#F9E27E] transition">Premium Security Guarantee</Link></li>
              <li><Link href="#" className="hover:text-[#F9E27E] transition">Support Center</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#D4AF37] mb-4 uppercase tracking-wider text-sm">Partners</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/register" className="hover:text-[#F9E27E] transition">Join as a Professional</Link></li>
              <li><Link href="/login" className="hover:text-[#F9E27E] transition">Partner Dashboard</Link></li>
              <li><Link href="#" className="hover:text-[#F9E27E] transition">Training & Standards</Link></li>
              <li><Link href="#" className="hover:text-[#F9E27E] transition">Payout Structure</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#D4AF37] mb-4 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-[#F9E27E] transition">Terms & Conditions</Link></li>
              <li><Link href="#" className="hover:text-[#F9E27E] transition">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-[#F9E27E] transition">Anti-Discrimination</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#D4AF37]/20 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-[#D4AF37]/60">
          <p>© {new Date().getFullYear()} MyEasyWork Technologies Pvt Ltd. All Rights Reserved.</p>
          <div className="mt-2 md:mt-0 font-medium tracking-wide">
            <span className="text-[#D4AF37] mr-1">★</span> Premium Verified Services
          </div>
        </div>
      </div>
    </footer>
  );
};
