'use client';

import { MOCK_WORKERS } from '@/mock-data/workers';
import { Button } from '@/components/ui/Button';
import { OtpModal } from '@/components/ui/OtpModal';
import { RazorpayMock } from '@/components/ui/RazorpayMock';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { notFound, useParams } from 'next/navigation';
import { useState } from 'react';

export default function BookingPage() {
  const params = useParams();
  const workerId = params.workerId as string;
  const worker = MOCK_WORKERS.find(w => w.id === workerId);
  
  const [date, setDate] = useState('Today');
  const [time, setTime] = useState('10:00 AM');
  
  // High-End UI States
  const [showOtp, setShowOtp] = useState(false);
  const [authorized, setAuthorized] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!worker) return notFound();

  // If fully completed
  if (success) {
    return (
      <div className="max-w-md mx-auto px-4 py-16 text-center min-h-[80vh] flex flex-col justify-center items-center">
        <CheckCircle2 size={72} className="text-[#128807] mb-6 animate-in zoom-in" />
        <h1 className="text-3xl font-extrabold text-[#1A1A1A] mb-3">Booking Confirmed!</h1>
        <p className="text-gray-500 mb-8 border border-gray-100 bg-white p-4 rounded-2xl shadow-sm">
          <span className="font-bold text-gray-900">{worker.firstName}</span> will arrive at your location <br/>
          <span className="font-extrabold text-[#FF9933]">{date} at {time}</span>.
        </p>
        <Link href="/orders" className="w-full">
          <Button fullWidth size="lg">Track My Order</Button>
        </Link>
      </div>
    );
  }

  const handleCheckoutClick = () => {
    if (!authorized) {
      setShowOtp(true);
    } else {
      setShowPayment(true);
    }
  };

  return (
    <div className="max-w-md md:max-w-xl mx-auto bg-[#F8F9FA] min-h-screen pb-6">
      <div className="bg-white p-4 border-b border-gray-100 flex items-center shadow-sm sticky top-0 z-10">
        <Link href={`/worker/${worker.id}`} className="mr-4 p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition">
          <ArrowLeft size={20} className="text-[#1A1A1A]" />
        </Link>
        <h1 className="text-lg font-bold text-[#1A1A1A]">Schedule Service</h1>
      </div>
      
      <div className="p-4">
        {/* Worker Snapshot */}
        <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-4 flex gap-4 mb-6">
          <img src={worker.avatar} alt="Worker" className="w-16 h-16 rounded-xl object-cover" />
          <div className="flex-1">
            <div className="font-bold text-lg leading-tight">{worker.firstName} {worker.lastName}</div>
            <div className="text-sm text-gray-500 mb-1">Distance: {worker.distanceKm} km</div>
            <div className="font-extrabold text-[#FF9933] text-lg">₹{worker.pricing.baseRate} <span className="text-xs text-gray-400 font-medium">base</span></div>
          </div>
        </div>

        {/* Date Selection */}
        <h2 className="font-bold mb-3 text-[#1A1A1A] px-1">Select Date</h2>
        <div className="flex gap-3 mb-6 overflow-x-auto pb-2 scrollbar-hide px-1">
          {['Today', 'Tomorrow', 'Apr 05', 'Apr 06'].map(d => (
            <button 
              key={d}
              onClick={() => setDate(d)}
              className={`flex-shrink-0 px-5 py-3 rounded-xl border-2 font-bold transition-all ${
                date === d 
                  ? 'border-[#000080] bg-[#e6e6fa]/30 text-[#000080] shadow-sm' 
                  : 'border-transparent bg-white text-gray-600 hover:border-gray-200'
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        <h2 className="font-bold mb-3 text-[#1A1A1A] px-1">Select Time</h2>
        <div className="grid grid-cols-3 gap-3 mb-8 px-1">
          {['10:00 AM', '11:30 AM', '01:00 PM', '03:00 PM', '05:00 PM'].map(t => (
            <button 
              key={t}
              onClick={() => setTime(t)}
              className={`py-3 rounded-xl border-2 text-sm font-bold transition-all ${
                time === t 
                  ? 'border-[#000080] bg-[#e6e6fa]/30 text-[#000080] shadow-sm' 
                  : 'border-transparent bg-white text-gray-600 hover:border-gray-200'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mb-8 px-1">
           <label className="block font-bold mb-2 text-[#1A1A1A]">Booking Address</label>
           <textarea 
             className="w-full bg-white border border-transparent shadow-sm rounded-2xl p-4 font-medium text-gray-700 focus:outline-none focus:border-[#FF9933] focus:ring-1 focus:ring-[#FF9933]" 
             rows={3} 
             placeholder="Add instructions (e.g. Near metro station)..." 
             defaultValue="12, Residency Road, Bangalore District"
           />
        </div>

        {/* Checkout Footer block */}
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm mb-4">
           <div className="flex justify-between items-center mb-4">
             <span className="text-gray-500 font-medium">Estimated Base</span>
             <span className="font-extrabold text-xl text-[#1A1A1A]">₹{worker.pricing.baseRate}</span>
           </div>
           <Button fullWidth size="lg" onClick={handleCheckoutClick}>
             {authorized ? 'Proceed to Payment' : 'Login & Book'}
           </Button>
        </div>
      </div>

      {/* Conditional Modals */}
      {showOtp && (
        <OtpModal 
          onClose={() => setShowOtp(false)} 
          onValidated={() => {
            setShowOtp(false);
            setAuthorized(true);
            setTimeout(() => setShowPayment(true), 300); // Trigger payment right after UX finishes
          }} 
        />
      )}

      {showPayment && (
        <RazorpayMock 
          amount={worker.pricing.baseRate} 
          onClose={() => setShowPayment(false)}
          onSuccess={() => {
             setShowPayment(false);
             setSuccess(true);
          }}
        />
      )}

    </div>
  );
}
