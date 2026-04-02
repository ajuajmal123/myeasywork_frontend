'use client';

import { Button } from '@/components/ui/Button';
import { MapPin, Home } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function SetupEmployerPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F9FA] p-4">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-sm border border-gray-100 p-8">
        <div className="w-12 h-12 bg-blue-50 text-[#000080] rounded-2xl flex items-center justify-center mb-6">
          <Home size={28} />
        </div>
        
        <h1 className="text-2xl font-extrabold text-[#1A1A1A] mb-2">Setup Your Profile</h1>
        <p className="text-gray-500 mb-8 text-sm">Save your default home address to quickly book services.</p>

        <div className="space-y-4 mb-8">
           <button className="w-full flex items-center justify-center gap-2 bg-[#F8F9FA] text-[#000080] rounded-2xl py-4 font-bold border border-gray-100 hover:bg-gray-100 transition">
             <MapPin size={20} /> Use Current Location
           </button>
           
           <div className="text-center text-xs text-gray-400 font-bold uppercase tracking-widest my-2">OR ENTER MANUAL</div>

           <textarea 
             required
             rows={3}
             className="w-full bg-[#F8F9FA] rounded-2xl py-4 px-4 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#000080] transition border border-transparent"
             placeholder="House No, Street, Landmark..."
           />
           <input 
              type="text" 
              required
              className="w-full bg-[#F8F9FA] rounded-2xl py-4 px-4 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#000080] transition border border-transparent"
              placeholder="City / Pincode"
            />
        </div>
        
        <Button fullWidth onClick={() => router.push('/services')} size="lg">Save & Find Services</Button>
      </div>
    </div>
  );
}
