"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Star } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    name: "Ahmed Ali",
    avatar: "",
    rating: 5,
    text: "Excellent service! The delivery was faster than expected and the product is of high quality.",
  },
  {
    name: "Sara Mohamed",
    avatar: "",
    rating: 4,
    text: "The experience was great, the prices are very reasonable and I will definitely shop again, God willing.",
  },
  {
    name: "Omar Khaled",
    avatar: "",
    rating: 5,
    text: "Best online store I've ever dealt with   Excellent customer service.",
  },
  {
    name: "Nourhan Tarek",
    avatar: "",
    rating: 4,
    text: "The products are original and the packaging is very good, and the discounts are amazing.",
  },
];

export default function CustomerReviews() {
  return (
    <section className="px-6 py-12 bg-gray-50">
      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 text-center mb-10">
        Customer Reviews
      </h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
      >
        {reviews.map((review, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white rounded-xl shadow-md p-6 h-full flex flex-col">
              {/* Avatar + Name */}
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  width={50}
                  height={50}
                  className="rounded-full border"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{review.name}</h3>
                  {/* Stars */}
                  <div className="flex">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        className={`w-4 h-4 ${
                          index < review.rating
                            ? "text-black fill-gray-900"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                "{review.text}"
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

