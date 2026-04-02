import React from 'react';

interface SkeletonProps {
  className?: string;
  type?: 'card' | 'circle' | 'text' | 'button';
}

export const Skeleton: React.FC<SkeletonProps> = ({ className = '', type = 'text' }) => {
  const base = "animate-pulse bg-gray-200";
  
  if (type === 'circle') return <div className={`${base} rounded-full ${className}`} />;
  if (type === 'card') return <div className={`${base} rounded-xl ${className}`} />;
  if (type === 'button') return <div className={`${base} rounded-lg h-12 w-full ${className}`} />;
  
  return <div className={`${base} rounded h-4 w-full ${className}`} />;
};
