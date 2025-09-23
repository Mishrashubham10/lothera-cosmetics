'use client';

import { Plus, Minus } from 'lucide-react';
import { Button } from './ui/button';

interface QuantitySelectorProps {
  quantity: number;
  setQuantity: (q: number) => void;
}

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  setQuantity,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Button
        variant="outline"
        size="icon"
        className="w-8 h-8"
        onClick={() => setQuantity(Math.max(1, quantity - 1))}
      >
        <Minus className="w-3 h-3" />
      </Button>
      <span className="w-8 text-center text-sm font-medium">{quantity}</span>
      <Button
        variant="outline"
        size="icon"
        className="w-8 h-8"
        onClick={() => setQuantity(quantity + 1)}
      >
        <Plus className="w-3 h-3" />
      </Button>
    </div>
  );
};