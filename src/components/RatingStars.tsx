'use client';

import { Star } from 'lucide-react';

interface RatingStarsProps {
  rating: number;
  className?: string;
}

export const RatingStars: React.FC<RatingStarsProps> = ({
  rating,
  className,
}) => {
  return (
    <div className={`flex items-center ${className || ''}`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < Math.floor(rating)
              ? 'fill-primary text-primary'
              : 'text-muted-foreground/40'
          }`}
        />
      ))}
    </div>
  );
};