'use client';

import { ProductCard } from '@/components/ui/product-card';
import { useBeauty } from '@/context/BeautyContext';
import Link from 'next/link';

export default function BestSellersPage() {
  const { state } = useBeauty();
  const bestSellers = state.products.filter((p) => p.isBestSeller);

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-extrabold">Best Sellers</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Top-rated & trending products our customers love.
        </p>
      </header>

      {bestSellers.length === 0 ? (
        <div className="rounded-lg border p-6 text-center">
          <p className="mb-4">No best sellers found.</p>
          <Link href="/" className="text-sm underline">
            Browse all products
          </Link>
        </div>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      )}
    </div>
  );
}