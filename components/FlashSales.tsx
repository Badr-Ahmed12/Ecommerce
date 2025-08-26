"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const flashDeals = [
  {
    title: "Wireless Earbuds",
    price: "EGP 799",
    oldPrice: "EGP 1,099",
    image: "/products/earbuds.jpg",
  },
  {
    title: "Gaming Mouse",
    price: "EGP 399",
    oldPrice: "EGP 599",
    image: "/products/mouse.jpg",
  },
  {
    title: "Smart TV 43”",
    price: "EGP 6,499",
    oldPrice: "EGP 7,999",
    image: "/products/tv.jpg",
  },
  {
    title: "Air Fryer",
    price: "EGP 1,999",
    oldPrice: "EGP 2,499",
    image: "/products/airfryer.jpg",
  },
  {
    title: "Power Bank 20000mAh",
    price: "EGP 499",
    oldPrice: "EGP 699",
    image: "/products/powerbank.jpg",
  },
];

export default function FlashSale() {
  return (
    <section className="px-6 py-10 bg-gradient-to-r  text-black">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-4xl md:text-3xl font-extrabold flex items-center gap-2 mx-auto">
            Flash Sale
        </h2>
        <div className="bg-black text-white px-3 py-1 rounded text-sm font-bold">
          Ends in 02:15:43
        </div>
      </div>

      {/* Slider */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={16}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
      >
        {flashDeals.map((product, i) => (
          <SwiperSlide key={i}>
            <Link
              href={`/product/${product.title.toLowerCase().replace(/ /g, "-")}`}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-transform hover:-translate-y-1"
            >
              <div className="relative w-full h-32 md:h-40">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3 text-center">
                <h3 className="text-sm font-semibold text-gray-700 line-clamp-2">
                  {product.title}
                </h3>
                <div className="mt-2">
                  <span className="text-lg font-bold">
                    {product.price}
                  </span>
                  <span className="ml-2 text-xs line-through text-gray-500">
                    {product.oldPrice}
                  </span>
                </div>
                <span className="inline-block mt-3  px-3 py-1 rounded-full text-xs font-bold text-black transition">
                  Shop Now
                </span>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
