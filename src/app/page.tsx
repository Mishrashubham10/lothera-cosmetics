'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Sparkles, Gift, TrendingUp, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { ProductCard } from '@/components/ui/product-card';
import { useBeauty, Product } from '@/context/BeautyContext';
import jeweleryImg from '@/assets/hero-jewelry.jpeg';

export default function HomePage() {
  const { state, dispatch } = useBeauty();

  const newArrivals = state.products.filter((product) => product.isNew);
  const deals = state.products.filter((product) => product.isOnSale);
  const bestSellers = state.products.filter((product) => product.isBestSeller);

  const handleAddToCart = (product: Product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const handleAddToWishlist = (product: Product) => {
    dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
  };

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      {/* <section className="relative overflow-hidden">
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-2xl">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Sparkles className="w-3 h-3 mr-1" />
              New Collection Available
            </Badge>

            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-foreground mb-6 leading-tight">
              Discover Your
              <span className="text-gradient-primary block">
                Natural Beauty
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Premium cosmetics and skincare products that enhance your natural
              radiance. From luxury foundations to rejuvenating serums, find
              everything needed for your beauty routine.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button
                  size="lg"
                  className="gradient-primary text-primary-foreground shadow-luxury hover:shadow-glow transition-bounce"
                >
                  Shop Collection
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>

              <Link href="/new-arrivals">
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:bg-primary hover:text-primary-foreground"
                >
                  View New Arrivals
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section> */}
      <section className="relative w-full h-[90vh] flex items-center bg-gradient-to-r from-[#e94057] to-[#f27121] overflow-hidden">
        {/* Background Jewelry Image with blur */}
        <div className="absolute inset-0">
          <Image
            src={jeweleryImg}
            alt="Luxury Jewelry"
            fill
            className="object-cover opacity-60 blur-sm"
            priority
          />
          {/* <div className="absolute inset-0 bg-gradient-to-r from-[#e94057]/90 to-[#f27121]/70" /> */}
        </div>

        {/* ================ CONTENT ON TOP OF BACKGROUND ============= */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-xl space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
              Luxury{' '}
              <span className="bg-gradient-to-r from-[#ff6a88] to-[#ffcc70] bg-clip-text text-transparent">
                Beauty
              </span>
              <br />
              Redefined
            </h1>
            <p className="text-lg text-gray-200">
              Discover our exclusive collection of premium cosmetics and
              handcrafted jewelry designed to enhance your natural elegance.
            </p>
            <div className="flex gap-4">
              <Link
                href="/new-arrivals"
                className="px-6 py-3 rounded-md bg-[#e94057] text-white font-semibold shadow-md hover:opacity-90 transition"
              >
                Shop New Arrivals
              </Link>
              <Link
                href="/products"
                className="px-6 py-3 rounded-md bg-white text-[#e94057] font-semibold shadow-md hover:bg-gray-100 transition"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =============== CATEGORIES =============== */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collection of premium beauty products across all
            categories.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {state.categories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.name.toLowerCase()}`}
              className="group beauty-card overflow-hidden aspect-square relative product-hover"
            >
              <div className="relative w-full h-full">
                <Image
                  src={category.image}
                  alt={category.name}
                  // width={300}
                  // height={300}
                  fill
                  className="object-cover transition-smooth group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-semibold text-lg mb-1">{category.name}</h3>
                <p className="text-sm opacity-90">
                  {category.productCount} products
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ================ NEW ARRIVALS =============== */}
      {newArrivals.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-6 h-6 text-primary" />
                  <Badge
                    variant="outline"
                    className="border-primary text-primary"
                  >
                    New
                  </Badge>
                </div>
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-2">
                  New Arrivals
                </h2>
                <p className="text-muted-foreground">
                  Discover the latest additions to our beauty collection.
                </p>
              </div>

              <Link href="/new-arrivals">
                <Button
                  variant="outline"
                  className="hover:bg-primary hover:text-primary-foreground"
                >
                  View All
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {newArrivals.slice(0, 4).map((product) => (
                <Link href={`/products/${product.id}`} key={product.id}>
                  <ProductCard
                    product={product}
                    onAddToCart={handleAddToCart}
                    onAddToWishlist={handleAddToWishlist}
                    className="animate-fade-in"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============== BEST SELLERS ============== */}
      {bestSellers.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-6 h-6 text-luxury" />
                  <Badge className="gradient-luxury text-luxury-foreground">
                    Trending
                  </Badge>
                </div>
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-2">
                  Best Sellers
                </h2>
                <p className="text-muted-foreground">
                  Our most loved products that customers cannot get enough of.
                </p>
              </div>

              <Link href="/best-sellers">
                <Button
                  variant="outline"
                  className="hover:bg-luxury hover:text-luxury-foreground"
                >
                  View All
                  <TrendingUp className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {bestSellers.slice(0, 4).map((product) => (
                <Link href={`/products/${product.id}`} key={product.id}>
                  <ProductCard
                    product={product}
                    onAddToCart={handleAddToCart}
                    onAddToWishlist={handleAddToWishlist}
                    className="animate-fade-in"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============= DEALS ============= */}
      {deals.length > 0 && (
        <section className="py-16 gradient-hero">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Gift className="w-6 h-6 text-destructive" />
                  <Badge variant="destructive">Limited Time Offer</Badge>
                </div>
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-2">
                  Special Deals
                </h2>
                <p className="text-muted-foreground">
                  Do not miss these amazing offers — limited time only!
                </p>
              </div>

              <Link href="/deals">
                <Button className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                  Shop Deals
                  <Gift className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {deals.slice(0, 4).map((product) => (
                <Link href={`/products/${product.id}`} key={product.id}>
                  <ProductCard
                    product={product}
                    onAddToCart={handleAddToCart}
                    onAddToWishlist={handleAddToWishlist}
                    className="animate-fade-in"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}