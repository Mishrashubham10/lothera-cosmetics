'use client';

import { ProductCard } from '@/components/ui/product-card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useBeauty } from '@/context/BeautyContext';
import Link from 'next/link';
import { useMemo, useState } from 'react';

export default function NewArrivalsPage() {
  const { state } = useBeauty();
  const newArrivals = state.products.filter((p) => p.isNew);

  const [sort, setSort] = useState<'newest' | 'price-desc' | 'price-asc'>(
    'newest'
  );

  const sorted = useMemo(() => {
    const copy = [...newArrivals];
    if (sort === 'price-desc') return copy.sort((a, b) => b.price - a.price);
    if (sort === 'price-asc') return copy.sort((a, b) => a.price - b.price);
    return copy;
  }, [newArrivals, sort]);

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold">New Arrivals</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Freshly added products — shop the latest.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <label className="text-sm text-muted-foreground hidden sm:inline">
            Sort
          </label>
          <Select
            onValueChange={(v) =>
              setSort(v as 'newest' | 'price-desc' | 'price-asc')
            }
            defaultValue="newest"
          >
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Sort" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </header>

      {sorted.length === 0 ? (
        <div className="rounded-lg border p-6 text-center">
          <p className="mb-4">No new arrivals at the moment.</p>
        </div>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sorted.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id}>
              <ProductCard product={product} />
            </Link>
          ))}
        </section>
      )}
    </div>
  );
}
