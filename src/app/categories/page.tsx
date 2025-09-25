'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useBeauty } from '@/context/BeautyContext';
import Link from 'next/link';
import Image from 'next/image';

export default function Categories() {
  const { state } = useBeauty();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-playfair font-bold text-gradient-primary mb-4">
            Shop by Category
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our curated collection of premium beauty products organized
            by category
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {state.categories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.name.toLowerCase()}`}
            >
              <Card className="beauty-card overflow-hidden product-hover group">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-playfair font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
                    {category.name}
                  </h3>
                  <Badge variant="outline" className="text-xs">
                    {category.productCount} Products
                  </Badge>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};