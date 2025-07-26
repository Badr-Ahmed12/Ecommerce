"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, Menu, Search, X } from 'lucide-react';

export default function AmazonNavbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white text-black sticky top-0 z-50 shadow-md">
      <div className="flex items-center justify-between px-4 py-3 gap-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/amazon-logo.png"
              alt="Amazon"
              width={100}
              height={30}
              className="object-contain cursor-pointer"
            />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden flex items-center text-black focus:outline-none"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Search (desktop only) */}
        <div className="hidden lg:flex items-center bg-white rounded-md overflow-hidden flex-grow max-w-2xl shadow-sm">
          <select className="bg-gray-100 text-black px-2 py-2 text-sm outline-none border-r border-gray-300">
            <option>All</option>
            <option>Books</option>
            <option>Electronics</option>
            <option>Clothing</option>
          </select>
          <input
            className="flex-grow px-4 py-2 text-black outline-none text-sm placeholder:text-gray-500"
            type="text"
            placeholder="Search Amazon..."
          />
          <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 flex items-center justify-center">
            <Search className="text-black h-5 w-5" />
          </button>
        </div>

        {/* Right side */}
        <div className="hidden sm:flex items-center space-x-4 sm:space-x-6 text-xs md:text-sm">
          <Link href="/account" className="flex flex-col items-start cursor-pointer hover:underline">
            <span className="text-gray-600">Hello, Sign in</span>
            <span className="font-bold text-black">Account & Lists</span>
          </Link>
          <Link href="/orders" className="flex flex-col items-start cursor-pointer hover:underline">
            <span className="text-gray-600">Returns</span>
            <span className="font-bold text-black">& Orders</span>
          </Link>
          <Link href="/checkout" className="relative flex items-center group">
            <ShoppingCart className="h-7 w-7 group-hover:text-yellow-400 transition-colors" />
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
              2
            </span>
            <span className="ml-2 hidden md:inline font-bold group-hover:underline">Cart</span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="bg-white px-4 py-4 lg:hidden space-y-3 text-sm">
          <Link href="#" className="block hover:text-yellow-400">All</Link>
          <Link href="#" className="block hover:text-yellow-400">Today's Deals</Link>
          <Link href="#" className="block hover:text-yellow-400">Customer Service</Link>
          <Link href="#" className="block hover:text-yellow-400">Gift Cards</Link>
          <Link href="#" className="block hover:text-yellow-400">Registry</Link>
          <Link href="#" className="block hover:text-yellow-400">Sell</Link>
        </div>
      )}
    </header>
  );
}
