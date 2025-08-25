"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Menu, X , User2 , SearchIcon } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white text-black sticky top-0 z-50 border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Clothora"
            width={40}
            height={40}
            className="object-contain cursor-pointer"
          />
          <span className="text-lg font-semibold tracking-widest uppercase">
            Clothora
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-sm tracking-wide font-medium">
          <Link href="/" className="hover:text-gray-600 transition-colors uppercase">
            Home
          </Link>
          <Link href="/shop" className="hover:text-gray-600 transition-colors uppercase">
            Shop
          </Link>
          <Link href="/about" className="hover:text-gray-600 transition-colors uppercase">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-600 transition-colors uppercase">
            Contact
          </Link>
        </nav>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {[
            { href: "/checkout", icon: ShoppingCart },
            { href: "/account", icon: User2 },
            { href: "/search", icon: SearchIcon },
          ].map(({ href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="relative flex items-center hover:bg-gray-200 p-1.5 rounded-full transition-colors"
            >
              <Icon className="h-6 w-6" />
            </Link>
          ))}

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex items-center text-black focus:outline-none"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-4 text-sm tracking-wide">
          <Link href="/" className="block hover:text-gray-600 uppercase">
            Home
          </Link>
          <Link href="/shop" className="block hover:text-gray-600 uppercase">
            Shop
          </Link>
          <Link href="/about" className="block hover:text-gray-600 uppercase">
            About
          </Link>
          <Link href="/contact" className="block hover:text-gray-600 uppercase">
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
