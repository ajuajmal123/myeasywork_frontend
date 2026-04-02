import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  count?: number;
  size?: number;
}

export const StarRating: React.FC<StarRatingProps> = ({ rating, count, size = 16 }) => {
  const roundedRating = Math.round(rating * 2) / 2; // nearest 0.5
  
  return (
    <div className="flex items-center space-x-1">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={size}
            className={`${
              star <= roundedRating
                ? 'text-yellow-400 fill-yellow-400'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      {count !== undefined && (
        <span className="text-sm font-medium text-gray-600 ml-1">
          {rating.toFixed(1)} ({count})
        </span>
      )}
    </div>
  );
};
