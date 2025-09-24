'use client';

import { useState } from 'react';
import { Heart, Eye, ShoppingBag, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Product } from '@/context/BeautyContext';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onAddToWishlist?: (product: Product) => void;
  onQuickView?: (product: Product) => void;
  className?: string;
}

export const ProductCard = ({
  product,
  onAddToCart,
  onAddToWishlist,
  onQuickView,
  className,
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted);
    onAddToWishlist?.(product);
  };

  const discountPercentage = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  return (
    <Card
      className={cn(
        'overflow-hidden cursor-pointer m-0 p-0 transition-smooth hover:shadow-xl',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ================= IMG WRAPPER ================= */}
      <div className="relative w-full aspect-square bg-muted overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* ================= BADGES ================= */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <Badge className="bg-accent/90 text-accent-foreground backdrop-blur-sm shadow-md">
              New
            </Badge>
          )}
          {product.isOnSale && discountPercentage > 0 && (
            <Badge className="bg-destructive/90 text-destructive-foreground backdrop-blur-sm shadow-md">
              -{discountPercentage}%
            </Badge>
          )}
          {product.isBestSeller && (
            <Badge className="shadow-md">
              Best Seller
            </Badge>
          )}
        </div>

        <div
          className={cn(
            'absolute top-3 right-3 flex flex-col gap-2 transition-all',
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
          )}
        >
          <Button
            variant="outline"
            size="icon"
            className="w-9 h-9 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-primary hover:text-primary-foreground"
            onClick={(e) => {
              e.stopPropagation();
              handleWishlistToggle();
            }}
          >
            <Heart
              className={cn(
                'w-4 h-4',
                isWishlisted ? 'fill-current text-destructive' : ''
              )}
            />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="w-9 h-9 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-primary hover:text-primary-foreground"
            onClick={(e) => {
              e.stopPropagation();
              onQuickView?.(product);
            }}
          >
            <Eye className="w-4 h-4" />
          </Button>
        </div>

        {/* ================= ADD TO CART ================= */}
        <div
          className={cn(
            'absolute bottom-3 left-3 right-3 transition-all',
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          )}
        >
          <Button
            className="w-full bg-gradient-to-r from-[#e94057]/95 to-[#f27121]/95 text-primary-foreground shadow-md"
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart?.(product);
            }}
          >
            <ShoppingBag className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <CardContent className="p-4 space-y-2">
        <p className="text-sm text-muted-foreground font-medium">
          {product.brand}
        </p>

        <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-smooth">
          {product.name}
        </h3>

        {/* ================= RATING ================= */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  'w-3 h-3',
                  i < Math.floor(product.rating)
                    ? 'fill-primary text-primary'
                    : 'text-muted-foreground/40'
                )}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* ================= PRICE ================= */}
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-foreground">
            ₹{product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ₹{product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
