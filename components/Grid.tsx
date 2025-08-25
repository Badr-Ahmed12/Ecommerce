import Image from "next/image";
import Link from "next/link";
import {
  CreditCard,
  Tag,
  Package,
  UserPlus,
  Smartphone,
  Sun,
  Sparkles,
  Shirt,
  ArrowRight,
} from "lucide-react";

const offers = [
  {
    title: "Installments & 0% Interest Offers",
    image: "/offers/finance.png",
    icon: <CreditCard className="w-6 h-6 text-gray-700" />,
  },
  {
    title: "Limited-Time Coupons & Discounts",
    image: "/offers/coupon.png",
    icon: <Tag className="w-6 h-6 text-gray-700" />,
  },
  {
    title: "Try Before You Buy Deals",
    image: "/offers/box-offer.png",
    icon: <Package className="w-6 h-6 text-gray-700" />,
  },
  {
    title: "Not a Member Yet? Subscribe & Save",
    image: "/offers/subscribe.png",
    icon: <UserPlus className="w-6 h-6 text-gray-700" />,
  },
  {
    title: "Electronics Up to 50% Off",
    image: "/offers/electronics.png",
    icon: <Smartphone className="w-6 h-6 text-gray-700" />,
  },
  {
    title: "Summer Fun Under EGP 50",
    image: "/offers/summer-fun.png",
    icon: <Sun className="w-6 h-6 text-gray-700" />,
  },
  {
    title: "Beauty & Perfume Deals",
    image: "/offers/beauty.png",
    icon: <Sparkles className="w-6 h-6 text-gray-700" />,
  },
  {
    title: "Women's Fashion for Less",
    image: "/offers/fashion.png",
    icon: <Shirt className="w-6 h-6 text-gray-700" />,
  },
];

export default function OffersGrid() {
  return (
    <section className="px-6 py-16 bg-gray-50">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">
          Today&apos;s Top Deals
        </h2>
        <p className="text-gray-500 text-sm md:text-base">
          Handpicked offers curated just for you
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="group rounded-2xl bg-white shadow-sm hover:shadow-lg border border-gray-200 transition-transform duration-300 hover:-translate-y-2 overflow-hidden"
          >
            <div className="relative w-full h-44">
              <Image
                src={offer.image}
                alt={offer.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>

            <div className="p-6 text-center space-y-4">
              <div className="flex justify-center">{offer.icon}</div>
              <h3 className="text-base md:text-lg font-semibold text-gray-700 line-clamp-2">
                {offer.title}
              </h3>

              <Link
                href={`/deals/${offer.title
                  .toLowerCase()
                  .replace(/ /g, "-")}`}
                className="mt-2 text-sm bg-black text-white font-medium px-5 py-2 inline-flex items-center justify-center rounded-full transition hover:bg-gray-800 active:scale-95"
              >
                Shop Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
