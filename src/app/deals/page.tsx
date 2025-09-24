'use client';

import { Badge } from '@/components/ui/badge';
import { ProductCard } from '@/components/ui/product-card';
import { useBeauty } from '@/context/BeautyContext';

export default function DealsPage() {
  const { state } = useBeauty();
  const deals = state.products.filter((p) => p.isOnSale);

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold">Deals & Offers</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Grab limited-time discounts and best prices.
          </p>
        </div>
        <Badge className="hidden sm:inline-flex">Limited time</Badge>
      </header>

      {deals.length === 0 ? (
        <div className="rounded-lg border p-6 text-center">
          <p className="mb-4">No deals available right now.</p>
        </div>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {deals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      )}
    </div>
  );
}