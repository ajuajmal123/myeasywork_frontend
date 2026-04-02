import { MOCK_WORKERS } from '@/mock-data/workers';
import { Badge } from '@/components/ui/Badge';

export default function AdminUsers() {
  return (
    <div className="p-6 md:p-12 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-[#000080] mb-6">System Users (Workers)</h1>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-[#000080] text-white text-sm">
            <tr>
              <th className="p-4 font-medium">Name</th>
              <th className="p-4 font-medium">Rating</th>
              <th className="p-4 font-medium">Rate</th>
              <th className="p-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {MOCK_WORKERS.map(w => (
              <tr key={w.id}>
                <td className="p-4 flex items-center gap-3">
                  <img src={w.avatar} alt="avatar" className="w-8 h-8 rounded-full object-cover" />
                  <span className="font-bold text-gray-900">{w.firstName} {w.lastName}</span>
                </td>
                <td className="p-4 text-gray-600 font-medium">{w.rating.average} ({w.rating.count})</td>
                <td className="p-4 text-gray-600 font-medium">₹{w.pricing.baseRate}</td>
                <td className="p-4"><Badge status={w.isAvailable ? 'available' : 'busy'}>{w.isAvailable ? 'Active' : 'Offline'}</Badge></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
