// components/OffersGrid.tsx
import Image from "next/image";

const offers = [
  {
    title: "Discounts and Interest-Free Installments",
    image: "/offers/finance.png",
  },
  {
    title: "Coupons and Limited-Time Discounts",
    image: "/offers/coupon.png",
  },
  {
    title: "Try Before You Buy Offers",
    image: "/offers/box-offer.png",
  },
  {
    title: "Not Subscribed Yet? Subscribe and Benefit",
    image: "/offers/subscribe.png",
  },
  {
    title: "Electronics Up to 50% Off",
    image: "/offers/electronics.png",
  },
  {
    title: "Summer Fun! Everything Under 50 Pounds",
    image: "/offers/summer-fun.png",
  },
  {
    title: "Beauty and Fragrances at Marriot",
    image: "/offers/beauty.png",
  },
  {
    title: "Women's Fashion at the Best Prices",
    image: "/offers/fashion.png",
  },
];

export default function OffersGrid() {
  return (
    <section className="px-6 py-10 bg-white">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        Discover Today's Offers
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {offers.map((offer, idx) => (
          <div
            key={idx}
            className="bg-gray-100 rounded-lg shadow-md overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer"
          >
            <div className="relative w-full h-40">
              <Image
                src={offer.image}
                alt={offer.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-700 text-center">
                {offer.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

