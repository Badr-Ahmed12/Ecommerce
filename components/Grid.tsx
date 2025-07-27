import Image from "next/image";
import {
  CreditCard,
  Tag,
  Package,
  UserPlus,
  Smartphone,
  Sun,
  Sparkles,
  Shirt,
} from "lucide-react";

const offers = [
  {
    title: "Installments & 0% Interest Offers",
    image: "/offers/finance.png",
    icon: <CreditCard className="w-6 h-6 text-amazon-blue" />,
  },
  {
    title: "Limited-Time Coupons & Discounts",
    image: "/offers/coupon.png",
    icon: <Tag className="w-6 h-6 text-amazon-blue" />,
  },
  {
    title: "Try Before You Buy Deals",
    image: "/offers/box-offer.png",
    icon: <Package className="w-6 h-6 text-amazon-blue" />,
  },
  {
    title: "Not a Member Yet? Subscribe & Save",
    image: "/offers/subscribe.png",
    icon: <UserPlus className="w-6 h-6 text-amazon-blue" />,
  },
  {
    title: "Electronics Up to 50% Off",
    image: "/offers/electronics.png",
    icon: <Smartphone className="w-6 h-6 text-amazon-blue" />,
  },
  {
    title: "Summer Fun Under EGP 50",
    image: "/offers/summer-fun.png",
    icon: <Sun className="w-6 h-6 text-amazon-blue" />,
  },
  {
    title: "Beauty & Perfume Deals",
    image: "/offers/beauty.png",
    icon: <Sparkles className="w-6 h-6 text-amazon-blue" />,
  },
  {
    title: "Women's Fashion for Less",
    image: "/offers/fashion.png",
    icon: <Shirt className="w-6 h-6 text-amazon-blue" />,
  },
];

export default function OffersGrid() {
  return (
    <section className="px-6 py-12 bg-white">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
        🔥 Today's Top Deals
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="group rounded-xl shadow-md hover:shadow-xl bg-white overflow-hidden transition-all duration-300 border border-gray-200"
          >
            {/* الصورة */}
            <div className="relative w-full h-44">
              <Image
                src={offer.image}
                alt={offer.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>

            {/* المحتوى */}
            <div className="p-4 text-center space-y-3">
              <div className="flex justify-center">{offer.icon}</div>
              <h3 className="text-lg font-bold text-gray-700 line-clamp-2">
                {offer.title}
              </h3>

              <button className="mt-2 text-sm bg-yellow-400 text-black font-semibold px-4 py-2 rounded-full hover:bg-yellow-700 transition">
                Shop Now 
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
