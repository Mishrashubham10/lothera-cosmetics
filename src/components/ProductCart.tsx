import { Heart, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
}

const ProductCard = ({
  name,
  price,
  originalPrice,
  image,
  category,
  isNew,
}: ProductCardProps) => {
  return (
    <Card className="group elegant-hover overflow-hidden border-0 bg-gradient-to-b from-luxury-cream to-card shadow-lg">
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <div className="w-full h-64 ">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          {isNew && (
            <span className="absolute top-3 left-3 bg-primary text-primary-foreground px-2 py-1 text-xs font-semibold rounded">
              NEW
            </span>
          )}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              variant="secondary"
              size="icon"
              className="h-8 w-8 rounded-full shadow-lg"
            >
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="p-4 space-y-3">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">
              {category}
            </p>
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
              {name}
            </h3>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-primary">${price}</span>
              {originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ${originalPrice}
                </span>
              )}
            </div>
            <Button
              size="sm"
              className="bg-gradient-to-r from-deep-rose to-rose-gold hover:shadow-lg transition-all"
            >
              <ShoppingBag className="h-4 w-4 mr-1" />
              Add
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;