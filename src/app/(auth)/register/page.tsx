'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Briefcase, UserCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [role, setRole] = useState<'employer' | 'worker'>('employer');
  const router = useRouter();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === 'employer') {
       router.push('/setup-employer');
    } else {
       router.push('/setup-worker');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F9FA] p-4">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-sm border border-gray-100 p-8">
        <h1 className="text-3xl font-extrabold text-[#1A1A1A] mb-2">Create Account</h1>
        <p className="text-gray-500 mb-8">Are you looking to hire or earn?</p>

        <div className="flex gap-4 mb-8">
          <button 
            onClick={() => setRole('employer')}
            className={`flex-1 flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all ${
              role === 'employer' ? 'border-[#000080] bg-blue-50 text-[#000080]' : 'border-gray-100 bg-white text-gray-400 hover:border-gray-200'
            }`}
          >
            <UserCircle size={32} className="mb-2" />
            <span className="font-bold">Hire</span>
            <span className="text-[10px] opacity-70">Employer</span>
          </button>

          <button 
            onClick={() => setRole('worker')}
            className={`flex-1 flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all ${
              role === 'worker' ? 'border-[#FF9933] bg-orange-50 text-[#FF9933]' : 'border-gray-100 bg-white text-gray-400 hover:border-gray-200'
            }`}
          >
            <Briefcase size={32} className="mb-2" />
            <span className="font-bold">Earn</span>
            <span className="text-[10px] opacity-70">Partner</span>
          </button>
        </div>

        <form onSubmit={handleRegister}>
          <div className="space-y-4 mb-8">
            <input 
              type="text" 
              required
              className="w-full bg-[#F8F9FA] rounded-2xl py-4 px-4 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-[#000080] transition border border-transparent"
              placeholder="Full Name"
            />
            <div className="relative">
              <span className="absolute left-4 top-4 text-gray-500 font-bold">+91</span>
              <input 
                type="tel" 
                maxLength={10}
                required
                className="w-full bg-[#F8F9FA] rounded-2xl py-4 pl-14 pr-4 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-[#000080] transition border border-transparent"
                placeholder="Mobile Number"
              />
            </div>
          </div>
          <Button fullWidth size="lg">Continue Setup →</Button>
        </form>

        <div className="mt-8 text-center text-sm font-medium text-gray-500">
          Already have an account? <Link href="/login" className="text-[#000080] hover:text-[#FF9933] transition">Sign in</Link>
        </div>
      </div>
    </div>
  );
}
