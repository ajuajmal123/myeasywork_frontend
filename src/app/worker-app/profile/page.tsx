'use client';

import { MOCK_WORKERS } from '@/mock-data/workers';
import { MOCK_SERVICES } from '@/mock-data/services';
import { Button } from '@/components/ui/Button';
import { Camera, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function WorkerProfileSetup() {
  const worker = MOCK_WORKERS[0];
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="max-w-md md:max-w-2xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-[#000080] mb-6">Profile Details</h1>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 mb-6">
        <div className="flex flex-col items-center mb-6 focus-within:ring-2">
          <div className="relative w-24 h-24 mb-3">
            <img src={worker.avatar} alt="Avatar" className="w-24 h-24 rounded-full object-cover border-4 border-gray-100" />
            <button className="absolute bottom-0 right-0 bg-[#FF9933] text-white p-2 rounded-full shadow-lg">
              <Camera size={16} />
            </button>
          </div>
          <h2 className="font-bold text-lg">{worker.firstName} {worker.lastName}</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">About Me</label>
            <textarea 
              rows={3} 
              defaultValue={worker.about}
              className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:border-[#FF9933]"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Base Pricing (₹)</label>
            <div className="flex gap-4">
              <input 
                type="number" 
                defaultValue={worker.pricing.baseRate}
                className="flex-1 border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:border-[#FF9933]"
              />
              <select 
                defaultValue={worker.pricing.rateType}
                className="flex-1 bg-white border border-gray-300 rounded-lg p-3 text-sm focus:outline-none"
              >
                <option value="hourly">Per Hour</option>
                <option value="fixed">Fixed per job</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 mb-8">
        <h2 className="font-bold text-gray-900 mb-3">Skills & Categories</h2>
        <div className="grid gap-2">
          {MOCK_SERVICES.slice(0, 4).map(service => {
            const isSelected = worker.skills.find(s => s.id === service.id);
            return (
              <label key={service.id} className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                <input type="checkbox" defaultChecked={!!isSelected} className="w-5 h-5 accent-[#FF9933] mr-3" />
                <div>
                  <div className="font-bold text-sm">{service.name}</div>
                  <div className="text-xs text-gray-500">{service.category}</div>
                </div>
              </label>
            );
          })}
        </div>
      </div>

      <Button fullWidth onClick={handleSave}>
        {saved ? <span className="flex items-center"><CheckCircle size={18} className="mr-2"/> Saved Successfully</span> : 'Save Profile'}
      </Button>
    </div>
  );
}
