import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black via-[#111] to-[#1a1a1a] border-t border-gray-800 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* ============== BRAND ============== */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-12 h-12 gradient-primary rounded-full flex items-center justify-center shadow-md shadow-[#e94057]/20">
                <Image
                  src="/logo/gis.webp"
                  alt="Logo"
                  fill
                  className="object-cover py-1 px-1 rounded-full border border-gray-700"
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#e94057] to-[#f27121] bg-clip-text text-transparent">
                Lothera
              </span>
            </Link>
            <p className="text-gray-400">
              Discover luxury cosmetics and jewelry that enhance your natural
              beauty.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-[#e94057] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#e94057] transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#e94057] transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#e94057] transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/new-arrivals"
                  className="text-gray-400 hover:text-[#f27121] transition-colors"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="/category/makeup"
                  className="text-gray-400 hover:text-[#f27121] transition-colors"
                >
                  Makeup
                </Link>
              </li>
              <li>
                <Link
                  href="/category/skincare"
                  className="text-gray-400 hover:text-[#f27121] transition-colors"
                >
                  Skincare
                </Link>
              </li>
              <li>
                <Link
                  href="/category/jewelry"
                  className="text-gray-400 hover:text-[#f27121] transition-colors"
                >
                  Jewelry
                </Link>
              </li>
            </ul>
          </div>

          {/* ============== CUSTOMER CARE ============== */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Customer Care</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-[#f27121] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-gray-400 hover:text-[#f27121] transition-colors"
                >
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="text-gray-400 hover:text-[#f27121] transition-colors"
                >
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link
                  href="/size-guide"
                  className="text-gray-400 hover:text-[#f27121] transition-colors"
                >
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* ============== COMPANY ============== */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-[#f27121] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-400 hover:text-[#f27121] transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-[#f27121] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-[#f27121] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500">
            © 2024 LuxeBeauty. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}