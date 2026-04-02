import React from 'react';

interface BadgeProps {
  status: 'pending' | 'ongoing' | 'completed' | 'available' | 'busy' | 'cancelled';
  children?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ status, children }) => {
  const variantStyles = {
    pending: 'bg-orange-50 text-orange-700',
    ongoing: 'bg-blue-50 text-blue-700',
    completed: 'bg-green-50 text-green-700',
    available: 'bg-green-100 text-green-800',
    busy: 'bg-red-50 text-red-700',
    cancelled: 'bg-gray-100 text-gray-700',
  };

  return (
    <span className={`px-2.5 py-1 rounded-md text-[11px] font-extrabold uppercase tracking-wider ${variantStyles[status]}`}>
      {children || status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};
