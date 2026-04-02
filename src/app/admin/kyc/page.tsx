import { Badge } from '@/components/ui/Badge';

export default function AdminKYC() {
  const pending = [
    { id: 1, name: 'Rahul Malhotra', docType: 'Aadhar Card', date: 'Oct 10, 2026' },
    { id: 2, name: 'Arjun K.', docType: 'Police Verification', date: 'Oct 11, 2026' },
    { id: 3, name: 'Santosh Y.', docType: 'Voter ID', date: 'Oct 12, 2026' },
  ];

  return (
    <div className="p-6 md:p-12 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-[#000080] mb-6">KYC Approvals</h1>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-gray-500 text-sm">
            <tr>
              <th className="p-4 font-medium">Worker Name</th>
              <th className="p-4 font-medium">Document Type</th>
              <th className="p-4 font-medium">Submitted</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {pending.map(p => (
              <tr key={p.id}>
                <td className="p-4 font-bold text-gray-900">{p.name}</td>
                <td className="p-4 text-gray-600">{p.docType}</td>
                <td className="p-4 text-gray-600 text-sm">{p.date}</td>
                <td className="p-4"><Badge status="pending">Under Review</Badge></td>
                <td className="p-4 text-right">
                  <button className="text-blue-600 font-bold hover:underline text-sm mr-4">View Doc</button>
                  <button className="text-[#128807] font-bold hover:underline text-sm">Approve</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
