"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#232f3e] text-white text-sm mt-16">
      {/* Top Button */}
      <button
        className="text-center py-4 border-b border-gray-600 hover:underline cursor-pointer w-full"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Back to top
      </button>

      {/* Main Links Grid */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-600">
        <FooterColumn
          title="Get to Know Us"
          links={["About Us", "Careers", "Amazon Science"]}
        />
        <FooterColumn
          title="Shop with Us"
          links={["Your Account", "Your Orders", "Your Cart", "Your Lists"]}
        />
        <FooterColumn
          title="Make Money with Us"
          links={[
            "Sell on Amazon",
            "Sell Under Amazon Accelerator",
            "Fulfillment by Amazon",
            "Supply to Amazon",
          ]}
        />
        <FooterColumn
          title="Let Us Help You"
          links={[
            "Help",
            "Shipping & Delivery",
            "Returns & Replacements",
            "Amazon App Download",
          ]}
        />
      </div>

      {/* Language & Country */}
      <div className="text-center py-6 space-y-4">
     
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon Logo"
          width={100}
          height={30}
          className="mx-auto"
        />
      </div>

      {/* Bottom Legal */}
      <div className="bg-[#131a22] text-gray-400 text-center py-4 text-xs space-y-1">
        <p>
          Conditions of Use &nbsp;|&nbsp; Privacy Notice &nbsp;|&nbsp; Interest-Based Ads
        </p>
        <p>&copy; 1996–2025, Amazon.com, Inc. or its affiliates</p>
      </div>
    </footer>
  );
}

// ========== Subcomponent for Column ==========
type FooterColumnProps = {
  title: string;
  links: string[];
};

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="font-bold mb-3">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index} className="hover:underline cursor-pointer">
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}
