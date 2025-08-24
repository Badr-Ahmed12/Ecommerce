'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const bannerData = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1556740714-45c5f997537d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    title: 'Shop the Latest Deals',
    subtitle: 'Up to 70% off on electronics & more',
    link: 'https://www.amazon.com/deals/',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1564428654024-625a55e4b6e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    title: 'Back to School Offers',
    subtitle: 'Get supplies with amazing discounts',
    link: 'https://www.amazon.com/school',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1514961013549-1a7c9a0e64da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    title: 'Your Favorite Brands',
    subtitle: 'All in one place. Exclusive online prices.',
    link: 'https://www.amazon.com/brands',
  },
]

export default function AmazonBanner() {
  return (
    <section className="relative w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        className="h-[300px] md:h-[450px]"
      >
        {bannerData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative w-full h-full">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-1/2 left-6 md:left-12 -translate-y-1/2 bg-white/80 p-6 md:p-8 rounded-xl backdrop-blur-md shadow-xl max-w-md">
                <h2 className="text-xl md:text-3xl font-bold mb-2 text-black">
                  {item.title}
                </h2>
                <p className="text-sm md:text-base text-gray-700 mb-4">
                  {item.subtitle}
                </p>
                <Link href={item.link}>
                  <span className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded transition duration-200">
                    Shop Now
                  </span>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
