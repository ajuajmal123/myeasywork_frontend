'use client';
import { useState } from 'react';
import { CheckCircle2, ShieldCheck, CreditCard } from 'lucide-react';
import { Button } from './Button';

interface RazorpayMockProps {
  amount: number;
  onSuccess: () => void;
  onClose: () => void;
}

export const RazorpayMock: React.FC<RazorpayMockProps> = ({ amount, onSuccess, onClose }) => {
  const [processing, setProcessing] = useState(false);

  const simulatePayment = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      onSuccess();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="bg-gradient-to-r from-[#000080] to-blue-800 p-6 text-white relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white">✕</button>
          <div className="flex items-center gap-2 mb-2">
            <CreditCard size={20} />
            <span className="font-bold tracking-widest text-sm">RAZORPAY TEST</span>
          </div>
          <div className="opacity-80 text-sm">Amount to pay</div>
          <div className="text-3xl font-extrabold mt-1">₹ {amount.toFixed(2)}</div>
        </div>

        <div className="p-6">
          <p className="text-sm text-gray-500 mb-6 text-center">
            This is a simulated Razorpay checkout environment. No real funds will be deducted.
          </p>

          <Button fullWidth onClick={simulatePayment} disabled={processing} className="relative">
            {processing ? 'Processing Securely...' : 'Pay with UPI / Card'}
          </Button>

          <div className="flex items-center justify-center gap-1 mt-6 text-gray-400 text-xs font-medium">
             <ShieldCheck size={14} /> 100% Secure Transaction
          </div>
        </div>
      </div>
    </div>
  );
};
