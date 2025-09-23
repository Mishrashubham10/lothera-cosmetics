'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Filter } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ProductCard } from '@/components/ui/product-card';
import { toast } from 'sonner';
import { useBeauty, Product, Category } from '@/context/BeautyContext';

export default function SingleCategory() {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const router = useRouter();
  const { state, dispatch } = useBeauty();
  const [sortBy, setSortBy] = useState<
    'default' | 'price-low' | 'price-high' | 'rating' | 'name'
  >('default');

  // ============ FIND CATEGORY BY SLUG ============
  const category: Category | undefined = state.categories.find(
    (c) => c.slug === categorySlug
  );

  // ============ HANDLE INVALID CATEGORY ============
  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
          <Button onClick={() => router.push('/categories')}>Back</Button>
        </div>
      </div>
    );
  }

  // ============ FILTER CATEGORY BY PROUDCT ============
  const categoryProducts: Product[] = state.products.filter(
    (p) => p.categorySlug === categorySlug
  );

  // ============ SORT PRODUCTS ============
  const sortedProducts = [...categoryProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  // ✅ Handlers
  const handleAddToCart = (product: Product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    toast.success(`${product.name} added to cart`);
  };

  const handleAddToWishlist = (product: Product) => {
    dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
    toast.success(`${product.name} added to wishlist`);
  };

  const handleQuickView = (product: Product) => {
    router.push(`/products/${product.id}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            variant="ghost"
            onClick={() => router.push('/categories')}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Categories
          </Button>

          {/* =============== HEADER =============== */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative mb-8"
            >
              <div className="aspect-[3/1] max-w-4xl mx-auto overflow-hidden rounded-lg beauty-card">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={1200}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h1 className="text-5xl font-playfair font-bold mb-4">
                      {category.name}
                    </h1>
                    <Badge variant="outline" className="text-white border-white">
                      {categoryProducts.length} Available Products
                    </Badge>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* =============== FILTER & SORT =============== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4"
          >
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                Showing {sortedProducts.length} products
              </span>
            </div>

            <Select
              value={sortBy}
              onValueChange={(value) =>
                setSortBy(value as 'default' | 'price-low' | 'price-high' | 'rating' | 'name')
              }
            >
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="name">Name A-Z</SelectItem>
              </SelectContent>
            </Select>
          </motion.div>

          {/* =============== PRODUCT GRID =============== */}
          {sortedProducts.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {sortedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProductCard
                    product={product}
                    onAddToCart={handleAddToCart}
                    onAddToWishlist={handleAddToWishlist}
                    onQuickView={handleQuickView}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center py-16"
            >
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No products found in this category
              </h3>
              <p className="text-muted-foreground">
                Check back soon for new products!
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}