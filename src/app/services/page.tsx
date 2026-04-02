'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MOCK_WORKERS } from '@/mock-data/workers';
import { Badge } from '@/components/ui/Badge';
import { StarRating } from '@/components/ui/StarRating';
import { Button } from '@/components/ui/Button';
import { Skeleton } from '@/components/ui/Skeleton';
import { SlidersHorizontal, MapPin } from 'lucide-react';

export default function ServicesPage() {
  const [loading, setLoading] = useState(true);

  // Fake loading to render skeletons for perception
  useEffect(() => {
    setTimeout(() => setLoading(false), 800);
  }, []);

  return (
    <div className="max-w-md md:max-w-4xl mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-4">
         <h1 className="text-2xl font-extrabold text-[#1A1A1A]">Workers near you</h1>
         <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100">
           <SlidersHorizontal size={18} className="text-gray-500" />
         </div>
      </div>
      
      {/* Interactive Filter Pills */}
      <div className="flex space-x-2 overflow-x-auto pb-1 mb-6 scrollbar-hide">
        <button className="px-4 py-1.5 rounded-full text-xs font-bold bg-[#000080] text-white whitespace-nowrap">All Categories</button>
        <button className="px-4 py-1.5 rounded-full text-xs font-bold bg-white border border-gray-200 text-gray-700 whitespace-nowrap shadow-sm hover:bg-gray-50">Sort: Nearest</button>
        <button className="px-4 py-1.5 rounded-full text-xs font-bold bg-white border border-gray-200 text-gray-700 whitespace-nowrap shadow-sm hover:bg-gray-50">Top Rated</button>
        <button className="px-4 py-1.5 rounded-full text-xs font-bold bg-white border border-gray-200 text-gray-700 whitespace-nowrap shadow-sm hover:bg-gray-50">Price: Low to High</button>
      </div>

      <div className="space-y-4">
        {loading ? (
          [1,2,3].map(i => (
            <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex gap-4">
              <Skeleton type="circle" className="w-16 h-16 flex-shrink-0" />
              <div className="flex-1 w-full space-y-2 py-1">
                <Skeleton className="w-[120px]" />
                <Skeleton className="w-[200px]" />
                <div className="flex justify-between items-end mt-4">
                   <Skeleton className="w-[60px]" />
                   <Skeleton type="button" className="w-[80px] h-8" />
                </div>
              </div>
            </div>
          ))
        ) : (
          MOCK_WORKERS.map((worker) => (
            <div key={worker.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col hover:border-gray-300 transition-colors">
              <div className="flex items-start gap-4">
                <div className="relative flex-shrink-0">
                  <img 
                    src={worker.avatar} 
                    alt={worker.firstName} 
                    className="w-16 h-16 rounded-2xl object-cover border border-gray-100 shadow-sm"
                  />
                  {worker.isAvailable && (
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#128807] rounded-full border-2 border-white"></div>
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-lg text-gray-900 leading-tight">{worker.firstName} {worker.lastName}</h3>
                  </div>
                  
                  <div className="flex items-center text-xs text-gray-500 mt-1 mb-2">
                    <StarRating rating={worker.rating.average} count={worker.rating.count} size={14} />
                    <span className="mx-2">•</span>
                    <span className="flex items-center"><MapPin size={12} className="mr-0.5 text-gray-400" /> {worker.distanceKm} km</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {worker.skills.map(s => (
                      <span key={s.id} className="text-[10px] bg-[#F8F9FA] px-2 py-1 rounded-md text-gray-600 font-bold border border-gray-100">
                        {s.name}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-end border-t border-gray-100 pt-3 mt-1">
                     <div>
                      <div className="text-xl font-extrabold text-[#1A1A1A]">₹{worker.pricing.baseRate}</div>
                      <div className="text-[10px] text-gray-400 uppercase tracking-wide font-bold">per {worker.pricing.rateType === 'hourly' ? 'hour' : 'job'}</div>
                    </div>
                    <Link href={`/worker/${worker.id}`}>
                      <Button size="sm" variant="primary" className="shadow-none min-w-[90px] text-sm">Book</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
