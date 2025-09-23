'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#e94057] to-[#f27121] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Luxury{' '}
            <span className="bg-gradient-to-r from-[#ff6a88] to-[#ffcc70] bg-clip-text text-transparent">
              Beauty
            </span>
            <br />
            Redefined
          </h1>
          <p className="text-lg text-gray-200 max-w-lg">
            Discover our exclusive collection of premium cosmetics and
            handcrafted jewelry designed to enhance your natural elegance.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 rounded-md bg-[#e94057] text-white font-semibold shadow-md hover:opacity-90 transition">
              Shop New Arrivals
            </button>
            <button className="px-6 py-3 rounded-md bg-white text-[#e94057] font-semibold shadow-md hover:bg-gray-100 transition">
              Explore Jewelry
            </button>
          </div>
        </div>

        {/* Right Image */}
        <motion.div
          className="relative flex justify-center md:justify-end"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Image
            src="/jewelry.png"
            alt="Luxury Jewelry"
            width={500}
            height={500}
            className="rounded-lg object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}