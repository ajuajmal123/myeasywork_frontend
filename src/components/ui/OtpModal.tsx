'use client';

import { useState } from 'react';
import { Button } from './Button';
import { Smartphone } from 'lucide-react';

interface OtpModalProps {
  onValidated: () => void;
  onClose: () => void;
}

export const OtpModal: React.FC<OtpModalProps> = ({ onValidated, onClose }) => {
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [loading, setLoading] = useState(false);

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length < 10) return;
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
    // Auto submit if full
    if (index === 3 && val) {
      verifyOtp();
    }
  };

  const verifyOtp = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onValidated();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center sm:p-4 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white w-full sm:max-w-md rounded-t-2xl sm:rounded-2xl shadow-xl overflow-hidden animate-in slide-in-from-bottom-10 sm:slide-in-from-bottom-0">
        <div className="p-6 relative">
          <button onClick={onClose} className="absolute right-6 top-6 text-gray-400 hover:text-gray-900 font-bold">✕</button>
          
          <div className="w-12 h-12 bg-orange-50 text-[#FF9933] rounded-full flex items-center justify-center mb-4">
            <Smartphone size={24} />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {step === 'phone' ? 'Login or Sign up' : 'Enter Verification Code'}
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            {step === 'phone' ? 'We need your mobile number to secure your booking.' : `We sent a 4-digit code to +91 ${phone}`}
          </p>

          {step === 'phone' ? (
            <form onSubmit={handlePhoneSubmit}>
              <div className="relative mb-6">
                <span className="absolute left-4 top-3.5 text-gray-500 font-medium">+91</span>
                <input 
                  type="tel" 
                  maxLength={10} 
                  autoFocus
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  className="w-full border border-gray-300 rounded-xl py-3 pl-12 pr-4 text-lg font-bold tracking-wider focus:border-[#FF9933] focus:ring-1 focus:ring-[#FF9933] outline-none"
                  placeholder="99999 99999"
                />
              </div>
              <Button fullWidth disabled={loading || phone.length < 10}>{loading ? 'Sending OTP...' : 'Continue'}</Button>
            </form>
          ) : (
            <div>
              <div className="flex gap-3 justify-center mb-8">
                {otp.map((digit, i) => (
                  <input
                    key={i}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(i, e.target.value)}
                    autoFocus={i === 0}
                    className="w-14 h-16 text-center text-2xl font-bold border border-gray-300 rounded-xl focus:border-[#000080] focus:ring-1 focus:ring-[#000080] outline-none"
                  />
                ))}
              </div>
              <Button fullWidth onClick={verifyOtp} disabled={loading || otp.join('').length < 4}>
                {loading ? 'Verifying...' : 'Verify & Proceed'}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
