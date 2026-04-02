'use client';

import { Button } from '@/components/ui/Button';
import { ArrowDownRight, ArrowUpRight, HelpCircle } from 'lucide-react';
import { useState } from 'react';

const MOCK_TRANSACTIONS = [
  { id: 'tx_1', type: 'earning', gross: 350, get commission() { return parseInt((this.gross * 0.15).toFixed(0)); }, get net() { return this.gross - this.commission; }, date: '2026-04-03', text: 'Plumbing Service - Vikram S.' },
  { id: 'tx_2', type: 'earning', gross: 500, get commission() { return parseInt((this.gross * 0.15).toFixed(0)); }, get net() { return this.gross - this.commission; }, date: '2026-04-02', text: 'AC Servicing - Amit P.' },
  { id: 'tx_3', type: 'withdrawal', net: 1200, date: '2026-04-01', text: 'Bank Transfer (HDFC x4421)' },
];

export default function WorkerWalletPage() {
  const [withdrawing, setWithdrawing] = useState(false);
  const [success, setSuccess] = useState(false);

  const withdraw = () => {
    setWithdrawing(true);
    setTimeout(() => {
      setWithdrawing(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="max-w-md md:max-w-4xl mx-auto px-4 py-6 bg-[#F8F9FA] min-h-screen">
      <h1 className="text-2xl font-extrabold text-[#1A1A1A] mb-6">My Wallet</h1>

      <div className="bg-[#000080] text-white rounded-3xl p-6 shadow-xl mb-6 relative overflow-hidden">
        <div className="absolute opacity-5 right-[-30px] top-[-30px] scale-150 pointer-events-none">
          <svg viewBox="0 0 24 24" fill="currentColor" width="180" height="180"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>
        </div>
        <p className="text-blue-200 text-[11px] font-bold uppercase tracking-wider mb-1 relative z-10">Available Payout</p>
        <h2 className="text-5xl font-extrabold mb-6 relative z-10 tracking-tight">₹3,450</h2>
        
        <Button 
          variant="primary" 
          fullWidth 
          onClick={withdraw} 
          disabled={withdrawing || success}
          className="relative z-10 bg-white text-[#000080] hover:bg-gray-100 rounded-2xl shadow-[0_4px_14px_0_rgba(255,255,255,0.39)]"
        >
          {withdrawing ? 'Processing...' : success ? 'Transfer Initiated!' : 'Withdraw to Bank'}
        </Button>
      </div>

      <div className="flex justify-between items-end mb-4">
        <h3 className="font-bold text-[#1A1A1A]">Payout History</h3>
        <span className="text-xs text-gray-400 flex items-center cursor-pointer hover:text-[#000080]"><HelpCircle size={14} className="mr-1"/> Platform Fee: 15%</span>
      </div>
      
      <div className="space-y-3">
        {MOCK_TRANSACTIONS.map(tx => (
          <div key={tx.id} className="p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${
                  tx.type === 'earning' ? 'bg-green-50 text-[#128807]' : 'bg-gray-100 text-gray-600'
                }`}>
                  {tx.type === 'earning' ? <ArrowDownRight size={20} /> : <ArrowUpRight size={20} />}
                </div>
                <div>
                  <p className="font-bold text-sm text-[#1A1A1A]">{tx.text}</p>
                  <p className="text-[11px] text-gray-500 font-medium">{tx.date}</p>
                </div>
              </div>
              <div className={`font-extrabold text-right ${tx.type === 'earning' ? 'text-[#128807]' : 'text-[#1A1A1A]'}`}>
                {tx.type === 'earning' ? '+' : '-'}₹{tx.net}
              </div>
            </div>

            {/* Commission Breakdown strictly required by prompt */}
            {tx.type === 'earning' && (
              <div className="ml-13 pl-4 border-l-2 border-gray-100 mt-2 text-[11px]">
                  <div className="flex justify-between text-gray-500 mb-0.5">
                    <span>Job Value (Gross)</span>
                    <span>₹{tx.gross}</span>
                  </div>
                  <div className="flex justify-between text-red-400 font-medium">
                    <span>Platform Fee (15%)</span>
                    <span>-₹{tx.commission}</span>
                  </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
