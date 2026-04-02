'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Smartphone, UserCircle, Briefcase } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [phone, setPhone] = useState('');
  const [step, setStep] = useState<'phone'|'otp'|'demo-select'>('phone');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [loading, setLoading] = useState(false);

  const requestOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep('otp');
    }, 1000);
  };

  const handleOtpChange = (index: number, val: string) => {
    if (val.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = val;
    setOtp(newOtp);
    
    if (val && index < 3) {
      const nextInput = document.getElementById(`login-otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`login-otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const verifyOtp = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (phone === '7994106680') {
         setStep('demo-select');
      } else {
         router.push('/services');
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F9FA] p-4">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-sm border border-gray-100 p-8">
        <div className="w-14 h-14 bg-orange-50 text-[#FF9933] rounded-2xl flex items-center justify-center mb-6">
          <Smartphone size={28} />
        </div>
        
        <h1 className="text-3xl font-extrabold text-[#1A1A1A] mb-2">
          {step === 'demo-select' ? 'Demo Access' : 'Welcome back'}
        </h1>
        <p className="text-gray-500 mb-8">
          {step === 'phone' && 'Enter your mobile number to access your account.'}
          {step === 'otp' && 'Enter the 4-digit code sent to your phone.'}
          {step === 'demo-select' && 'Select which setup profile you would like to demo with this account.'}
        </p>

        {step === 'phone' && (
          <form onSubmit={requestOtp}>
            <div className="relative mb-6">
              <span className="absolute left-4 top-4 text-gray-500 font-bold">+91</span>
              <input 
                type="tel" 
                maxLength={10}
                required
                value={phone}
                onChange={e => setPhone(e.target.value.replace(/\D/g, ''))}
                className="w-full bg-[#F8F9FA] rounded-2xl py-4 pl-14 pr-4 font-bold text-lg focus:outline-none focus:ring-2 focus:ring-[#FF9933] transition border border-transparent focus:border-[#FF9933]"
                placeholder="Mobile Number"
              />
            </div>
            <Button fullWidth size="lg" disabled={loading || phone.length < 10}>
              {loading ? 'Sending OTP...' : 'Get OTP'}
            </Button>
          </form>
        )}

        {step === 'otp' && (
          <div>
            <div className="flex gap-4 justify-between mb-8">
              {otp.map((d, i) => (
                <input
                  key={i}
                  id={`login-otp-${i}`}
                  type="text"
                  maxLength={1}
                  value={d}
                  autoFocus={i === 0}
                  onChange={(e) => handleOtpChange(i, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  className="w-16 h-16 bg-[#F8F9FA] rounded-2xl text-center text-2xl font-extrabold focus:outline-none focus:ring-2 focus:ring-[#FF9933] border border-transparent focus:border-[#FF9933]"
                />
              ))}
            </div>
            <Button fullWidth size="lg" onClick={verifyOtp} disabled={loading || otp.join('').length < 4}>
              {loading ? 'Verifying...' : 'Secure Login'}
            </Button>
          </div>
        )}

        {step === 'demo-select' && (
          <div className="flex gap-4 mb-4">
            <button 
              onClick={() => router.push('/setup-employer')}
              className="flex-1 flex flex-col items-center justify-center p-4 rounded-2xl border-2 border-[#000080] bg-blue-50 text-[#000080] hover:bg-blue-100 transition-all font-bold"
            >
              <UserCircle size={32} className="mb-2" /> Show Customer
            </button>
            <button 
              onClick={() => router.push('/setup-worker')}
              className="flex-1 flex flex-col items-center justify-center p-4 rounded-2xl border-2 border-[#FF9933] bg-orange-50 text-[#FF9933] hover:bg-orange-100 transition-all font-bold"
            >
              <Briefcase size={32} className="mb-2" /> Show Partner
            </button>
          </div>
        )}

        <div className="mt-8 text-center text-sm font-medium text-gray-500">
          New to MyEasyWork? <Link href="/register" className="text-[#000080] hover:text-[#FF9933] transition">Create an account</Link>
        </div>
      </div>
    </div>
  );
}
