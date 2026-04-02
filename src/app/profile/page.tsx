import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { UserCircle, Settings, HelpCircle, FileText } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="max-w-md md:max-w-2xl mx-auto px-4 py-8 bg-[#F8F9FA] min-h-screen">
      <h1 className="text-3xl font-extrabold text-[#1A1A1A] mb-8">My Profile</h1>
      
      {/* Login required block */}
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 mb-8 text-center flex flex-col items-center">
        <div className="w-20 h-20 bg-blue-50 text-[#000080] rounded-full flex items-center justify-center mb-4">
          <UserCircle size={40} />
        </div>
        <h2 className="text-xl font-bold text-[#1A1A1A] mb-2">You are not logged in</h2>
        <p className="text-gray-500 text-sm mb-6 max-w-[250px]">
          Login or create an account to view your past bookings, manage addresses, and contact support.
        </p>
        
        <Link href="/login" className="w-full sm:w-auto">
          <Button fullWidth size="lg" className="px-10 rounded-2xl">Login / Sign up</Button>
        </Link>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <button className="w-full flex items-center justify-between p-4 border-b border-gray-50 hover:bg-gray-50 transition active:bg-gray-100">
          <div className="flex items-center text-gray-700 font-bold">
            <Settings size={20} className="mr-4 text-gray-400" /> Account Settings
          </div>
        </button>
        <button className="w-full flex items-center justify-between p-4 border-b border-gray-50 hover:bg-gray-50 transition active:bg-gray-100">
          <div className="flex items-center text-gray-700 font-bold">
            <HelpCircle size={20} className="mr-4 text-gray-400" /> Help & Support
          </div>
        </button>
        <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition active:bg-gray-100">
          <div className="flex items-center text-gray-700 font-bold">
            <FileText size={20} className="mr-4 text-gray-400" /> About MyEasyWork
          </div>
        </button>
      </div>
    </div>
  );
}
