import Link from 'next/link';
import { Search, ChevronRight, MapPin, ShieldCheck, Star } from 'lucide-react';
import { MOCK_SERVICES } from '@/mock-data/services';

const getIconUrl = (name: string) => {
  switch (name) {
    case 'Wrench': return 'https://api.iconify.design/lucide:wrench.svg?color=%23FF9933';
    case 'Zap': return 'https://api.iconify.design/lucide:zap.svg?color=%23FF9933';
    case 'ThermostatSnowflake': return 'https://api.iconify.design/lucide:snowflake.svg?color=%23FF9933';
    case 'Sparkles': return 'https://api.iconify.design/lucide:sparkles.svg?color=%23FF9933';
    case 'Hammer': return 'https://api.iconify.design/lucide:hammer.svg?color=%23FF9933';
    case 'Paintbrush': return 'https://api.iconify.design/lucide:paintbrush.svg?color=%23FF9933';
    case 'MonitorSmartphone': return 'https://api.iconify.design/lucide:monitor-smartphone.svg?color=%23FF9933';
    case 'Ticket': return 'https://api.iconify.design/lucide:ticket.svg?color=%23FF9933';
    default: return 'https://api.iconify.design/lucide:tool.svg?color=%23FF9933';
  }
};

export default function Home() {
  return (
    <div className="max-w-md md:max-w-4xl mx-auto pb-8">
      {/* Search Header Banner */}
      <div className="bg-white px-4 pt-6 pb-6 rounded-b-3xl shadow-sm mb-6 border-b border-gray-100">
        <h1 className="text-3xl font-extrabold text-[#1A1A1A] mb-1">Services <br/> at your door</h1>
        <p className="text-gray-500 mb-4 text-sm">Transparent pricing, trusted professionals.</p>
        <div className="mb-6 space-y-1 border-l-2 border-[#FF9933] pl-3">
          <p className="text-xs font-medium text-gray-600">रोजगार बढ़ेगा, देश बढ़ेगा।</p>
          <p className="text-xs font-medium text-gray-600">Empowering Workers, Building the Nation.</p>
          <p className="text-xs font-medium text-gray-600">തൊഴിലിലൂടെ മുന്നോട്ട്, നാടിന്റെ കരുത്ത്.</p>
        </div>
        
        <div className="relative mb-2">
          <input 
            type="text" 
            placeholder="Search for 'electrician' or 'repair'..." 
            className="w-full bg-[#F8F9FA] text-[#1A1A1A] font-medium rounded-2xl py-4 px-4 pl-12 focus:outline-none border border-transparent focus:border-[#FF9933] shadow-inner transition-colors"
          />
          <Search className="absolute left-4 top-4 text-gray-400" size={24} />
        </div>
      </div>

      <div className="px-4">
        {/* Horizontal Nav Promos */}
        <div className="flex gap-4 overflow-x-auto pb-4 mb-4 scrollbar-hide">
          <div className="bg-gradient-to-r from-blue-50 to-[#E6E6FF] flex-shrink-0 w-64 rounded-2xl p-4 border border-blue-100">
             <div className="flex items-center gap-2 mb-2 text-[#000080]">
               <ShieldCheck size={20} /> <span className="font-bold text-sm">UC Secure</span>
             </div>
             <p className="text-xs text-[#000080]/80">100% background checked professionals for your safety.</p>
          </div>
          <div className="bg-gradient-to-r from-orange-50 to-[#FFF0E6] flex-shrink-0 w-64 rounded-2xl p-4 border border-orange-100">
             <div className="flex items-center gap-2 mb-2 text-[#FF9933]">
               <Star size={20} className="fill-[#FF9933]" /> <span className="font-bold text-sm">Top Rated</span>
             </div>
             <p className="text-xs text-orange-900/80">Discover partners maintaining above a 4.5+ star rating.</p>
          </div>
        </div>

        <div className="flex justify-between items-end mb-4">
          <h2 className="text-xl font-extrabold text-[#1A1A1A]">Popular Categories</h2>
          <Link href="/services" className="text-sm font-bold text-[#000080] flex items-center">See All <ChevronRight size={16}/></Link>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-8">
          {MOCK_SERVICES.map((service) => (
            <Link 
              href={`/services?category=${service.id}`} 
              key={service.id}
              className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100/50 hover:bg-gray-50 transition-all active:scale-95"
            >
              <div className="w-12 h-12 bg-orange-50/50 rounded-full flex items-center justify-center mb-3">
                <img src={getIconUrl(service.icon)} className="w-6 h-6" alt={service.name} />
              </div>
              <span className="text-[11px] font-bold text-center text-gray-700 leading-tight">{service.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
