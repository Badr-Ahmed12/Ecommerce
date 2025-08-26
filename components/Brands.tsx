"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const brands = [
  { name: "Brand 1", logo: "https://logoipsum.com/logo/logo-1.svg" },
  { name: "Brand 2", logo: "https://logoipsum.com/logo/logo-2.svg" },
  { name: "Brand 3", logo: "https://logoipsum.com/logo/logo-3.svg" },
  { name: "Brand 4", logo: "https://logoipsum.com/logo/logo-4.svg" },
  { name: "Brand 5", logo: "https://logoipsum.com/logo/logo-5.svg" },
  { name: "Brand 6", logo: "https://logoipsum.com/logo/logo-6.svg" },
  { name: "Brand 7", logo: "https://logoipsum.com/logo/logo-7.svg" },
  { name: "Brand 8", logo: "https://logoipsum.com/logo/logo-8.svg" },
];

export default function BrandsSlider() {
  return (
    <section className="px-6 py-10 bg-white">
      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 text-center mb-8">
        Our Brands
      </h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        loop={true}
        className="flex items-center"
      >
        {brands.map((brand, i) => (
          <SwiperSlide key={i} className="flex justify-center">
            <div className="w-28 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition duration-300">
              <Image
                src={brand.logo}
                alt={brand.name}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
