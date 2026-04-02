import { MOCK_ORDERS } from '@/mock-data/orders';
import { Badge } from '@/components/ui/Badge';
import { Calendar, Hammer } from 'lucide-react';
import Link from 'next/link';

export default function OrdersPage() {
  // Sort by date descending
  const sortedOrders = [...MOCK_ORDERS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="max-w-md md:max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-[#000080] mb-6">My Bookings</h1>

      {sortedOrders.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 mb-4">You have no booking history.</p>
          <Link href="/services" className="text-[#FF9933] font-bold">Find a Worker</Link>
        </div>
      ) : (
        <div className="space-y-4">
          {sortedOrders.map((order) => {
            const date = new Date(order.date);
            return (
              <div key={order.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                <div className="flex justify-between items-start mb-3">
                  <Badge status={order.status as any} />
                  <div className="text-sm font-bold text-gray-900">₹{order.amount}</div>
                </div>

                <div className="flex items-center gap-3 mb-3 pb-3 border-b border-gray-100">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <img src={order.worker.avatar} alt="worker" className="w-12 h-12 rounded-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{order.worker.firstName} {order.worker.lastName}</h3>
                    <p className="text-xs text-gray-500 flex items-center mt-0.5">
                      <Hammer size={12} className="mr-1" /> {order.service.name}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2 text-gray-400" />
                    <span>{date.toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: 'numeric'})} at {date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit'})}</span>
                  </div>
                </div>
                
                {order.status === 'completed' && (
                  <button className="w-full mt-4 py-2 border border-[#FF9933] text-[#FF9933] rounded-lg text-sm font-bold hover:bg-orange-50 transition-colors">
                    Leave a Review
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
