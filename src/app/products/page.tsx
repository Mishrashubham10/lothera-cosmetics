'use client';

import ProductsPageClient from '@/components/ProductPageClient';
import { Loader2Icon } from 'lucide-react';
import { Suspense } from 'react';

export default function ProductsPage() {
  return (
    <Suspense fallback={<Loader2Icon className="size-24" />}>
      <ProductsPageClient />
    </Suspense>
  );
}