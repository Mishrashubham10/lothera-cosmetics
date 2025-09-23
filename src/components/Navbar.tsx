'use client';

import { useState } from 'react';
import { Search, ShoppingBag, Heart, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { notFound, usePathname } from 'next/navigation';
import { useBeauty } from '@/context/BeautyContext';
import Image from 'next/image';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { state } = useBeauty();
  const pathname = usePathname();
  const [query, setQuery] = useState('');

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Categories', href: '/categories' },
    { name: 'Products', href: '/products' },
    { name: 'New Arrivals', href: '/new-arrivals' },
    { name: 'Deals', href: '/deals' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => pathname === path;

  const cartItemsCount = state.cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // FOR GLOBAL SEARCH
  const filteredProducts = state.products.filter((p) => {
    return p.name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <header className="bg-gradient-to-r from-[#e94057]/95 to-[#f27121]/95 backdrop-blur-sm sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        {/* =========== TOP BAR ========== */}
        <div className="flex items-center justify-between py-4">
          {/* ========== LOGO =========== */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-12 h-12 rounded-full flex items-center justify-center bg-white/10 border border-white/30">
              <Image
                src="/logo/gis.webp"
                alt="Logo"
                fill
                className="object-cover p-1 rounded-full"
              />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-[#ff6a88] to-[#ffcc70] bg-clip-text text-transparent">
              Lothera
            </span>
          </Link>

          {/* ============ DESKTOP NAVIGATION ============= */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition hover:text-yellow-300 text-white',
                  isActive(item.href)
                    ? 'text-yellow-300 font-semibold'
                    : 'opacity-90'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* ========== SEARCH & ACTIONS ========== */}
          <div className="flex items-center space-x-4">
            {/* ========= SEARCH BAR ========== */}
            <div className="hidden md:flex items-center relative">
              <Search className="w-4 h-4 absolute left-3 text-white/70" />
              <Input
                placeholder="Search products..."
                className="pl-10 w-64 bg-white/10 text-white placeholder:text-white/70 border-white/30 focus:border-yellow-300"
                value={query}
                onChange={(e)=>setQuery(e.target.value)}
              />
            </div>

            {/* ============ ACTIONS BUTTONS ============== */}
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className="relative text-white hover:bg-white/10"
              >
                <Heart className="w-5 h-5" />
                {state.wishlist.length > 0 && (
                  <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-gradient-to-r from-[#e94057] to-[#f27121] text-white text-xs">
                    {state.wishlist.length}
                  </Badge>
                )}
              </Button>

              <Link href="/cart">
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative text-white hover:bg-white/10"
                >
                  <ShoppingBag className="w-5 h-5" />
                  {cartItemsCount > 0 && (
                    <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-gradient-to-r from-[#e94057] to-[#f27121] text-white text-xs">
                      {cartItemsCount}
                    </Badge>
                  )}
                </Button>
              </Link>

              {state.isAuthenticated ? (
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10"
                >
                  <User className="w-5 h-5" />
                </Button>
              ) : (
                <Link href="/login">
                  <Button className="bg-white text-[#e94057] hover:bg-gray-100 px-4 py-2">
                    Sign In
                  </Button>
                </Link>
              )}

              {/* ============ MOBILE MENU ============ */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* ============ MOBILE NAV ============ */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-white/20 py-4 bg-gradient-to-r from-[#e94057] to-[#f27121]">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium px-4 py-2 rounded-lg text-white transition',
                    isActive(item.href)
                      ? 'bg-white/20 text-yellow-300 font-semibold'
                      : 'hover:bg-white/10'
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* ============ MOBILE SEARCH ============ */}
              <div className="px-4">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70" />
                  <Input
                    placeholder="Search products..."
                    className="pl-10 bg-white/10 border-white/30 text-white placeholder:text-white/70"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* ============ SEARCH RESULTS ============= */}
      {query &&
        (filteredProducts.length > 0
          ? filteredProducts.map((p) => (
              <Link
                key={p.id}
                href={`/product/${p.id}`} // adjust route
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => setQuery('')}
              >
                {p.name}
              </Link>
            ))
          : notFound())}
    </header>
  );
};

export default Navbar;