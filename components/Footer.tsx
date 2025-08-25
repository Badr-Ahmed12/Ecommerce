"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white text-black border-t border-gray-200 mt-16">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="font-semibold mb-4 uppercase tracking-wide">Clothora</h3>
          <p className="text-gray-600">
            Timeless fashion. Minimal design. Modern essentials for everyday life.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4 uppercase tracking-wide">Company</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-gray-600">About Us</Link></li>
            <li><Link href="/careers" className="hover:text-gray-600">Careers</Link></li>
            <li><Link href="/contact" className="hover:text-gray-600">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 uppercase tracking-wide">Shop</h3>
          <ul className="space-y-2">
            <li><Link href="/shop" className="hover:text-gray-600">All Products</Link></li>
            <li><Link href="/new" className="hover:text-gray-600">New Arrivals</Link></li>
            <li><Link href="/sale" className="hover:text-gray-600">Sale</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 uppercase tracking-wide">Help</h3>
          <ul className="space-y-2">
            <li><Link href="/help" className="hover:text-gray-600">Customer Service</Link></li>
            <li><Link href="/shipping" className="hover:text-gray-600">Shipping & Returns</Link></li>
            <li><Link href="/faq" className="hover:text-gray-600">FAQs</Link></li>
          </ul>
        </div>
      </div>

      {/* Logo & Legal */}
      <div className="border-t border-gray-200 py-6 text-center">
        <div className="flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="Clothora Logo"
            width={40}
            height={32}
            className="mr-2"
          />
          <span className="text-xl">Clothora</span>
        </div>
        <p className="text-xs text-gray-500">
          &copy; 2025 Clothora. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

