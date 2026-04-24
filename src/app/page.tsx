import Link from 'next/link';
import { Search, MapPin, ShieldCheck, Star, Award, ShieldAlert, BadgeCheck } from 'lucide-react';

const SERVICE_CATEGORIES = [
  { id: 'c1', name: 'CONSTRUCTION', iconUrl: 'https://api.iconify.design/lucide:hard-hat.svg?color=%23D4AF37' },
  { id: 'c2', name: 'HOME SERVICES', iconUrl: 'https://api.iconify.design/lucide:home.svg?color=%23D4AF37' },
  { id: 'c3', name: 'AGRICULTURE', iconUrl: 'https://api.iconify.design/lucide:tractor.svg?color=%23D4AF37' },
  { id: 'c4', name: 'MECHANIC', iconUrl: 'https://api.iconify.design/lucide:wrench.svg?color=%23D4AF37' },
  { id: 'c5', name: 'DRIVER', iconUrl: 'https://api.iconify.design/lucide:car.svg?color=%23D4AF37' },
  { id: 'c6', name: 'ELECTRICIAN', iconUrl: 'https://api.iconify.design/lucide:zap.svg?color=%23D4AF37' },
  { id: 'c7', name: 'PLUMBER', iconUrl: 'https://api.iconify.design/lucide:droplet.svg?color=%23D4AF37' },
  { id: 'c8', name: 'HOME NURSE', iconUrl: 'https://api.iconify.design/lucide:heart-pulse.svg?color=%23D4AF37' },
  { id: 'c9', name: 'IT SERVICES', iconUrl: 'https://api.iconify.design/lucide:laptop.svg?color=%23D4AF37' },
  { id: 'c10', name: 'GRAPHIC DESIGNER', iconUrl: 'https://api.iconify.design/lucide:pen-tool.svg?color=%23D4AF37' },
  { id: 'c11', name: 'ACCOUNTANT', iconUrl: 'https://api.iconify.design/lucide:calculator.svg?color=%23D4AF37' },
  { id: 'c12', name: 'SECURITY', iconUrl: 'https://api.iconify.design/lucide:shield.svg?color=%23D4AF37' },
];

const PROS = [
  { id: 'p1', name: 'RAJESH', role: 'ELECTRICIAN', rating: '4.9', area: 'Indiranagar', img: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&q=80&w=100&h=100' },
  { id: 'p2', name: 'PRIYA', role: 'HOME NURSE', rating: '4.8', area: 'Indiranagar', img: 'https://images.unsplash.com/photo-1594824436998-ddedefa28bca?auto=format&fit=crop&q=80&w=100&h=100' },
  { id: 'p3', name: 'AMIT', role: 'DRIVER', rating: '4.9', area: 'Location, Indiranagar', img: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=100&h=100' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#001F3F] pb-12 flex flex-col items-center pt-8">
      
      {/* Centered Main Container */}
      <div className="w-full max-w-6xl px-6 flex flex-col items-center">
        
        {/* Core Gold Logo representation for the dashboard */}
        <div className="mb-6 flex flex-col items-center justify-center">
             {/* Replace with the precise gold cog logo if available, using a placeholder styling for now */}
            <div className="w-16 h-16 rounded-full gold-gradient shadow-[0_0_15px_rgba(212,175,55,0.4)] flex justify-center items-center mb-2 border border-[#001F3F]">
                <Award size={36} className="text-[#001F3F]" />
            </div>
            <div className="h-1 w-24 gold-gradient rounded-full"></div>
        </div>

        {/* Dashboard Title */}
        <h1 className="text-[#D4AF37] font-semibold text-lg tracking-widest mb-6">
          CUSTOMER DASHBOARD - FIND SERVICES <span className="text-[#D4AF37]/70 text-sm">(CUSTOMER DASHBOARD - FIND SERVICES)</span>
        </h1>

        {/* Search Bar */}
        <div className="w-full relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]" size={20} />
          <input 
            type="text" 
            placeholder="Search for services, professionals, or locations... (e.g., Electrician, Mason, Indiranagar)" 
            className="w-full bg-[#001F3F] border border-[#D4AF37] rounded-md py-3 px-4 pl-12 text-[#D4AF37] placeholder-[#D4AF37]/50 focus:outline-none focus:ring-1 focus:ring-[#F9E27E] shadow-[inset_0_0_8px_rgba(0,0,0,0.5)] transition-all"
          />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-10 w-full">
          {SERVICE_CATEGORIES.map((cat) => (
            <Link 
              href={`/services?category=${cat.id}`} 
              key={cat.id}
              className="flex flex-col items-center justify-center p-4 bg-[#00142D] rounded-lg border border-[#D4AF37]/60 hover:border-[#F9E27E] hover:bg-[#00244d] transition-all hover:-translate-y-1 shadow-md group h-28"
            >
              <div className="mb-3 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-transform">
                <img src={cat.iconUrl} className="w-10 h-10 drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]" alt={cat.name} />
              </div>
              <span className="text-[10px] font-bold tracking-wider text-[#D4AF37] text-center uppercase">{cat.name}</span>
            </Link>
          ))}
        </div>

        {/* Featured Section Header */}
        <div className="w-full flex justify-start items-center mb-4">
          <h2 className="text-[#D4AF37] font-semibold text-sm tracking-widest uppercase">
            Featured Professionals Near You <span className="text-[#D4AF37]/70 text-xs">(FEATURED PROFESSIONALS NEAR YOU)</span>
          </h2>
        </div>

        {/* Bottom Split Section */}
        <div className="w-full flex flex-col lg:flex-row gap-4 mb-10">
          
          {/* Professionals List */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-[#00142D] border border-[#D4AF37]/60 rounded-lg">
             {PROS.map((pro) => (
               <div key={pro.id} className="flex gap-3 bg-[#001F3F] border border-[#D4AF37]/40 rounded p-3 hover:border-[#D4AF37] transition-colors overflow-hidden relative">
                 <img src={pro.img} alt={pro.name} className="w-14 h-14 object-cover rounded shadow-sm border border-[#D4AF37]/30"/>
                 <div className="flex flex-col justify-center w-full">
                   <div className="flex items-center text-[#D4AF37] text-xs font-bold uppercase truncate pr-5">
                     {pro.name} - {pro.role}
                   </div>
                   <div className="flex items-center text-[#F9E27E] text-xs mb-1">
                     <Star size={10} className="fill-[#F9E27E] mr-1" /> {pro.rating}
                     <BadgeCheck size={12} className="ml-1 text-blue-400" />
                   </div>
                   <div className="flex items-center text-[#D4AF37]/70 text-[10px] mb-2 truncate">
                     <MapPin size={10} className="mr-1" /> {pro.area}
                   </div>
                   <button className="gold-gradient text-[#001F3F] text-[10px] font-bold py-1 px-3 rounded shadow hover:scale-105 transition-transform self-start">
                     Book Now
                   </button>
                 </div>
               </div>
             ))}
          </div>

          {/* Legal Support Widget */}
          <div className="lg:w-48 bg-[#00142D] border border-[#D4AF37]/60 rounded-lg flex flex-col items-center justify-center p-6 hover:bg-[#00244d] transition-colors cursor-pointer group">
             <div className="w-16 h-16 rounded-lg gold-gradient/10 border border-[#D4AF37] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
               <ShieldAlert size={32} className="text-[#D4AF37]" />
             </div>
             <span className="text-[#D4AF37] text-xs font-bold text-center uppercase tracking-wider">
               Legal Support<br/><span className="text-[9px] text-[#D4AF37]/70">(LEGAL SUPPORT)</span>
             </span>
          </div>

        </div>

        {/* Footer Links */}
        <div className="w-full border-t border-[#D4AF37]/20 pt-4 flex flex-col items-center">
            <div className="flex flex-wrap justify-center gap-4 text-xs font-medium text-[#D4AF37]/80 mb-2">
              <Link href="#" className="hover:text-[#F9E27E] transition-colors">Terms of Service</Link>
              <span className="text-[#D4AF37]/30">|</span>
              <Link href="#" className="hover:text-[#F9E27E] transition-colors">Privacy Policy</Link>
              <span className="text-[#D4AF37]/30">|</span>
              <Link href="#" className="hover:text-[#F9E27E] transition-colors">Payment Options</Link>
              <span className="text-[#D4AF37]/30">|</span>
              <Link href="#" className="hover:text-[#F9E27E] transition-colors">Customer Support</Link>
              <span className="text-[#D4AF37]/30">|</span>
              <Link href="#" className="hover:text-[#F9E27E] transition-colors">Booking Cancellation & Refund Policy</Link>
            </div>
            <div className="text-[10px] text-[#D4AF37]/50 text-center">
              Verified Professionals. Secured Bookings. MyEasyWork - 2026 (Verified Professionals, Secured Bookings. MyEasyWork - 2026)
            </div>
        </div>

      </div>
    </div>
  );
}
