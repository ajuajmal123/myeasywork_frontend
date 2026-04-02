'use client';

import { MOCK_SERVICES } from '@/mock-data/services';
import { Button } from '@/components/ui/Button';
import { ShieldCheck, UploadCloud, Briefcase } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SetupWorkerPage() {
  const router = useRouter();
  const [kycLoaded, setKycLoaded] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F9FA] p-4 py-12">
      <div className="bg-white w-full max-w-xl rounded-3xl shadow-sm border border-gray-100 p-8">
        <div className="w-12 h-12 bg-orange-50 text-[#FF9933] rounded-2xl flex items-center justify-center mb-6">
          <Briefcase size={28} />
        </div>
        
        <h1 className="text-2xl font-extrabold text-[#1A1A1A] mb-2">Partner Setup & KYC</h1>
        <p className="text-gray-500 mb-8 text-sm">Select your expertise and upload verification to start earning.</p>

        {/* Form Group */}
        <div className="mb-6">
          <label className="block font-bold text-[#1A1A1A] mb-3">Primary Service Category</label>
          <div className="grid grid-cols-2 gap-3">
            {MOCK_SERVICES.map(s => (
              <label key={s.id} className="flex items-start p-3 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 focus-within:ring-2 ring-[#FF9933]">
                <input type="radio" name="category" className="w-5 h-5 accent-[#FF9933] mr-3 mt-0.5" />
                <div>
                  <div className="font-bold text-sm leading-tight text-gray-900">{s.name}</div>
                  <div className="text-[10px] text-gray-500 uppercase">{s.category}</div>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-6 border-b border-gray-100 pb-6">
          <label className="block font-bold text-[#1A1A1A] mb-3">Profile & Experience</label>
          <div className="space-y-4">
             <input type="text" placeholder="Full Address (Street, City, Pincode)" className="w-full bg-[#F8F9FA] rounded-2xl px-4 py-3 font-medium border border-transparent focus:outline-none focus:ring-2 focus:ring-[#FF9933]" />
             
             <div className="flex gap-4">
                <select defaultValue="" className="flex-1 bg-[#F8F9FA] text-gray-700 rounded-2xl px-4 py-3 font-medium border border-transparent focus:outline-none focus:ring-2 focus:ring-[#FF9933]">
                  <option value="" disabled>Qualification Level</option>
                  <option value="none">None / Self-Taught</option>
                  <option value="highschool">High School</option>
                  <option value="diploma">ITI / Diploma</option>
                  <option value="degree">Bachelors Degree</option>
                </select>

                <div className="flex-1 relative">
                  <input type="number" placeholder="Experience" className="w-full bg-[#F8F9FA] rounded-2xl py-3 pl-4 pr-12 font-medium border border-transparent focus:outline-none focus:ring-2 focus:ring-[#FF9933]" />
                  <span className="absolute text-gray-400 font-bold text-sm right-4 top-3.5">Yrs</span>
                </div>
             </div>
          </div>
        </div>

        <div className="mb-8 border-b border-gray-100 pb-6">
          <label className="block font-bold text-[#1A1A1A] mb-3">Expected Base Rate (Pricing)</label>
          <div className="flex gap-4">
             <input type="number" placeholder="Eg. 300" className="flex-1 bg-[#F8F9FA] rounded-2xl px-4 py-3 font-medium border border-transparent focus:outline-none focus:ring-2 focus:ring-[#FF9933]" />
             <select className="flex-1 bg-white border border-gray-200 text-gray-700 rounded-2xl px-4 py-3 font-medium outline-none">
               <option>Per Hour</option>
               <option>Per Job (Fixed)</option>
             </select>
          </div>
        </div>

        <div className="mb-8">
          <label className="block font-bold text-[#1A1A1A] mb-3">Govt ID Upload (Aadhar/PAN)</label>
          <div 
             className={`w-full border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition ${
               kycLoaded ? 'border-[#128807] bg-green-50' : 'border-gray-200 hover:bg-gray-50'
             }`}
             onClick={() => setKycLoaded(true)}
          >
             {kycLoaded ? (
               <div className="flex flex-col items-center text-[#128807]">
                 <ShieldCheck size={32} className="mb-2" />
                 <span className="font-bold">ID Captured Successfully</span>
               </div>
             ) : (
               <div className="flex flex-col items-center text-gray-400">
                 <UploadCloud size={32} className="mb-2" />
                 <span className="font-medium text-sm text-gray-600">Tap to upload Document</span>
                 <span className="text-xs mt-1">Must be extremely clear</span>
               </div>
             )}
          </div>
        </div>
        
        <Button disabled={!kycLoaded} fullWidth onClick={() => router.push('/worker-app')} size="lg">Submit Application</Button>
      </div>
    </div>
  );
}
