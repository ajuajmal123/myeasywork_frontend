import { MOCK_WORKERS } from '@/mock-data/workers';
import { MOCK_ORDERS } from '@/mock-data/orders';
import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <div className="p-6 md:p-12 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-[#000080]">MyEasyWork Admin</h1>
        <p className="text-gray-600">Platform overview and management.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Total Workers</div>
          <div className="text-4xl font-extrabold text-[#FF9933]">{MOCK_WORKERS.length}</div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Active Jobs</div>
          <div className="text-4xl font-extrabold text-[#000080]">
            {MOCK_ORDERS.filter(o => o.status !== 'completed').length}
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Platform Fees (15%)</div>
          <div className="text-4xl font-extrabold text-[#128807]">₹820</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-[#000080] px-4 py-3 text-white font-bold flex justify-between">
            <span>Pending KYC Approvals</span>
            <Link href="/admin/kyc" className="text-xs bg-white text-[#000080] px-2 py-1 rounded">View All</Link>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between p-3 border-b border-gray-100 last:border-0">
               <div>
                 <div className="font-bold">Rahul Malhotra</div>
                 <div className="text-sm text-gray-500">Submitted ID Proof</div>
               </div>
               <button className="text-sm font-bold text-[#FF9933]">Review</button>
            </div>
            <div className="flex items-center justify-between p-3 border-b border-gray-100 last:border-0">
               <div>
                 <div className="font-bold">Arjun K.</div>
                 <div className="text-sm text-gray-500">Submitted Police Clearance</div>
               </div>
               <button className="text-sm font-bold text-[#FF9933]">Review</button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-[#000080] px-4 py-3 text-white font-bold flex justify-between">
            <span>Recent Completed Orders</span>
          </div>
          <div className="p-4">
             {MOCK_ORDERS.filter(o => o.status === 'completed').map(o => (
               <div key={o.id} className="flex justify-between items-center py-2 border-b border-gray-100">
                 <div>
                   <div className="text-sm font-bold">{o.customerName} → {o.worker.firstName}</div>
                   <div className="text-xs text-gray-500">{o.service.name}</div>
                 </div>
                 <div className="text-sm font-bold text-[#128807]">₹{o.amount}</div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}
