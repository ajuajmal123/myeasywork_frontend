import { MOCK_WORKERS } from '@/mock-data/workers';
import { Badge } from '@/components/ui/Badge';
import { StarRating } from '@/components/ui/StarRating';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowLeft, MapPin, CheckCircle } from 'lucide-react';
import { notFound } from 'next/navigation';
import React from 'react';

// Next.js 15+ Server Components require params to be evaluated
export default async function WorkerProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const worker = MOCK_WORKERS.find(w => w.id === id);
  
  if (!worker) return notFound();

  // Mock Work Gallery
  const mockImages = [
    'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&q=80',
    'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=300&q=80',
    'https://images.unsplash.com/photo-1542013936693-884638332954?w=300&q=80'
  ];

  return (
    <div className="max-w-md md:max-w-2xl mx-auto bg-[#F8F9FA] min-h-screen pb-24">
      {/* Header Overlay */}
      <div className="relative h-56 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1574360773950-8b9a5e84860f?w=800&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <Link href="/services" className="absolute top-4 left-4 bg-white/20 hover:bg-white/30 p-2.5 rounded-full backdrop-blur-md text-white transition-all shadow-sm">
          <ArrowLeft size={20} />
        </Link>
      </div>
      
      {/* Profile Card Info */}
      <div className="px-5 relative -mt-16">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-start mb-4">
            <img 
              src={worker.avatar} 
              alt="Profile" 
              className="w-24 h-24 rounded-2xl object-cover border-4 border-white shadow-md bg-white -mt-14"
            />
            <Badge status={worker.isAvailable ? 'available' : 'busy'}>
              {worker.isAvailable ? 'Available' : 'Busy'}
            </Badge>
          </div>

          <h1 className="text-3xl font-extrabold text-[#1A1A1A] leading-tight">
            {worker.firstName} {worker.lastName}
          </h1>
          
          <div className="flex items-center mt-2 text-gray-500">
            <MapPin size={16} className="mr-1 text-gray-400" />
            <span className="text-sm font-medium">{worker.distanceKm} km away from your location</span>
          </div>

          <div className="mt-5 flex items-center p-4 bg-orange-50/50 rounded-2xl border border-orange-100/50">
            <StarRating rating={worker.rating.average} size={24} />
            <div className="ml-4 border-l border-orange-200/50 pl-4">
              <div className="text-xl font-extrabold text-[#1A1A1A]">{worker.rating.average} <span className="text-sm text-gray-400 font-medium">/ 5</span></div>
              <div className="text-xs text-gray-500 uppercase tracking-wider font-bold mt-0.5">{worker.rating.count} Reviews</div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="mt-6">
          <h2 className="text-lg font-bold text-[#1A1A1A] mb-3 px-1">Past Work</h2>
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide px-1">
            {mockImages.map((img, i) => (
              <img key={i} src={img} className="w-40 h-32 object-cover rounded-2xl shadow-sm border border-gray-100 flex-shrink-0" alt="Work" />
            ))}
          </div>
        </div>

        <div className="mt-2 bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-[#1A1A1A] mb-2">About Partner</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">{worker.about}</p>

          <h2 className="text-lg font-bold text-[#1A1A1A] mb-3">Verified Skills</h2>
          <div className="flex flex-wrap gap-2">
            {worker.skills.map((skill) => (
              <div key={skill.id} className="flex items-center text-sm font-bold bg-[#F8F9FA] text-gray-700 px-4 py-2 rounded-xl border border-gray-200">
                <CheckCircle size={14} className="mr-2 text-[#128807]" /> {skill.name}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Floating Bottom Nav for Booking */}
      <div className="fixed bottom-0 left-0 w-full bg-white px-6 py-4 border-t border-gray-200 shadow-[0_-10px_20px_-5px_rgba(0,0,0,0.05)] md:static md:shadow-none md:mt-6 z-40">
        <div className="max-w-md md:max-w-2xl mx-auto flex items-center justify-between">
          <div>
            <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Service Base</div>
            <div className="text-2xl font-extrabold text-[#1A1A1A]">₹{worker.pricing.baseRate}</div>
          </div>
          <Link href={`/booking/${worker.id}`}>
            <Button size="lg" variant="primary" className="px-10 rounded-2xl shadow-lg border border-[#FF9933]/50" disabled={!worker.isAvailable}>
              {worker.isAvailable ? 'Proceed' : 'Not Available'}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
