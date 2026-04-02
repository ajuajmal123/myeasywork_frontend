'use client';

import { MOCK_WORKERS } from '@/mock-data/workers';
import { MOCK_ORDERS } from '@/mock-data/orders';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Activity, IndianRupee, HandCoins, QrCode } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function WorkerDashboardPage() {
  const [showQr, setShowQr] = useState(false);
  const worker = MOCK_WORKERS.find(w => w.id === 'w_101');
  const activeJobs = MOCK_ORDERS.filter(o => o.worker.id === 'w_101' && o.status !== 'completed');
  
  if (!worker) return null;

  return (
    <div className="max-w-md md:max-w-4xl mx-auto px-4 py-6 bg-[#F8F9FA] min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-extrabold text-[#1A1A1A]">Partner Hub</h1>
          <p className="text-gray-500 text-sm">Welcome back, {worker.firstName}</p>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Status</span>
          <div className="flex items-center bg-white border border-gray-100 rounded-full px-3 py-1.5 shadow-sm">
            <span className={`h-2.5 w-2.5 rounded-full mr-2 ${worker.isAvailable ? 'bg-[#128807] shadow-[0_0_8px_#128807]' : 'bg-red-500'}`}></span>
            <span className="text-xs font-bold">{worker.isAvailable ? 'Online' : 'Offline'}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-5">
        <div className="bg-[#000080] text-white rounded-3xl p-5 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 blur-xl"></div>
          <div className="flex items-center text-xs font-medium text-blue-200 mb-2 relative z-10">
            <IndianRupee size={14} className="mr-1" /> Today's Earning
          </div>
          <div className="text-3xl font-extrabold relative z-10">₹1,250</div>
        </div>
        
        <div className="bg-white border border-gray-100 rounded-3xl p-5 shadow-sm flex flex-col justify-center">
          <div className="flex items-center text-xs font-medium text-gray-500 mb-2">
            <HandCoins size={14} className="mr-1 text-[#FF9933]" /> Monthly Total
          </div>
          <div className="text-2xl font-extrabold text-[#1A1A1A]">₹14,500</div>
        </div>
      </div>

      <Button onClick={() => setShowQr(true)} variant="outline" fullWidth className="mb-8 border-[#000080]/20 text-[#000080] bg-white rounded-2xl">
        <QrCode size={18} className="mr-2" /> Show Digital ID Card
      </Button>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-[#1A1A1A] flex items-center">
            <Activity size={20} className="mr-2 text-[#FF9933]" /> Active Jobs <span className="ml-2 bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded-full">{activeJobs.length}</span>
          </h2>
          <Link href="/worker-app/jobs" className="text-sm font-bold text-[#000080]">View All</Link>
        </div>
        
        <div className="space-y-4">
          {activeJobs.map(job => (
            <div key={job.id} className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition">
              <div className="flex justify-between items-start mb-3">
                <Badge status={job.status as any} />
                <span className="font-extrabold text-[#128807] text-lg">₹{job.amount}</span>
              </div>
              <h3 className="font-bold text-[#1A1A1A] text-lg leading-tight mb-1">{job.customerName}</h3>
              <p className="text-gray-500 text-xs mb-4">Service Required: <span className="font-medium text-gray-700">{job.service.name}</span></p>
              
              <div className="flex gap-2">
                <Button size="sm" fullWidth className="bg-[#128807] hover:bg-green-700 shadow-sm rounded-xl">Complete</Button>
                <Button size="sm" variant="outline" fullWidth className="rounded-xl border-gray-200">Call</Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showQr && (
         <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-6 backdrop-blur-sm">
           <div className="bg-white rounded-3xl shadow-xl w-full max-w-xs overflow-hidden animate-in zoom-in">
             <div className="bg-[#000080] p-4 text-center text-white relative">
               <button onClick={() => setShowQr(false)} className="absolute right-4 text-white/50 hover:text-white">✕</button>
               <h3 className="font-bold tracking-widest text-sm uppercase">Verified Partner</h3>
             </div>
             <div className="p-6 flex flex-col items-center">
                <img src={worker.avatar} className="w-20 h-20 rounded-full object-cover border-4 border-gray-50 mb-3" alt="avatar" />
                <h2 className="text-xl font-extrabold text-[#1A1A1A]">{worker.firstName} {worker.lastName}</h2>
                <div className="text-sm text-gray-500 mb-6">ID: MEW-104928</div>
                
                {/* Dummy QR visualization */}
                <div className="w-48 h-48 bg-gray-100 rounded-xl flex items-center justify-center p-3">
                  <img src="https://api.iconify.design/lucide:qr-code.svg?width=100%25&height=100%25" alt="QR" className="opacity-80" />
                </div>
                <p className="text-xs text-gray-400 mt-4 text-center">Scan to verify booking credentials securely.</p>
             </div>
           </div>
         </div>
      )}
    </div>
  );
}
