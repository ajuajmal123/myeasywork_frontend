'use client';

import { MOCK_ORDERS } from '@/mock-data/orders';
import { Button } from '@/components/ui/Button';
import { MapPin, Calendar, Check, X } from 'lucide-react';
import { useState } from 'react';

export default function JobRequestsPage() {
  // Simulating pending requests locally
  const [requests, setRequests] = useState(MOCK_ORDERS.filter(o => o.status === 'pending'));

  const handleAction = (id: string) => {
    // Optimistic UI clear
    setRequests(current => current.filter(r => r.id !== id));
  };

  return (
    <div className="max-w-md md:max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-[#000080] mb-2">Job Requests</h1>
      <p className="text-gray-500 mb-6">New incoming booking calls</p>

      {requests.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl border border-dashed border-gray-300">
          <p className="text-gray-500 font-medium">You have no new requests right now.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {requests.map(req => {
            const date = new Date(req.date);
            return (
              <div key={req.id} className="bg-white rounded-xl p-5 shadow-[0_2px_10px_rgba(0,0,0,0.06)] border border-gray-100">
                <div className="flex justify-between items-start mb-4 border-b border-gray-100 pb-3">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{req.customerName}</h2>
                    <span className="text-sm font-medium text-[#FF9933]">{req.service.name}</span>
                  </div>
                  <div className="text-xl font-extrabold text-[#128807]">₹{req.amount}</div>
                </div>

                <div className="space-y-2 mb-5">
                  <div className="flex items-start text-gray-600 text-sm">
                    <MapPin size={18} className="mr-2 mt-0.5 text-gray-400" />
                    <span>{req.location} <br/><span className="text-xs text-blue-500">(2.4 km away)</span></span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Calendar size={18} className="mr-2 text-gray-400" />
                    <span>{date.toLocaleDateString()} at {date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button onClick={() => handleAction(req.id)} className="flex-1 py-3 px-4 rounded-lg font-bold flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-600 transition">
                    <X size={18} className="mr-1" /> Reject
                  </button>
                  <button onClick={() => handleAction(req.id)} className="flex-1 py-3 px-4 rounded-lg font-bold flex items-center justify-center bg-[#FF9933] text-white hover:bg-[#e68a2e] transition shadow-md">
                    <Check size={18} className="mr-1" /> Accept Job
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
