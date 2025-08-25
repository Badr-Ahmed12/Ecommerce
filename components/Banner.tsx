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
    img: 'https://images.unsplash.com/photo-1556740714-45c5f997537d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    title: 'Minimalist Fashion',
    subtitle: 'Timeless pieces. Modern style.',
    link: '/shop',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1564428654024-625a55e4b6e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    title: 'Back to Basics',
    subtitle: 'Clean cuts, neutral tones.',
    link: '/shop',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1514961013549-1a7c9a0e64da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    title: 'New Arrivals',
    subtitle: 'Explore the latest collection.',
    link: '/shop',
  },
]

export default function MinimalBanner() {
  return (
    <section className="relative w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        className="h-[320px] md:h-[500px]"
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
              <div className="absolute top-1/2 left-6 md:left-16 -translate-y-1/2 bg-white/80 p-6 md:p-10 rounded-lg backdrop-blur-md shadow-lg max-w-lg">
                <h2 className="text-2xl md:text-4xl font-light mb-2 text-black tracking-wide">
                  {item.title}
                </h2>
                <p className="text-sm md:text-lg text-gray-600 mb-6">
                  {item.subtitle}
                </p>
                <Link href={item.link}>
                  <span className="inline-block bg-black text-white hover:bg-white hover:text-black border border-black font-medium px-5 py-2.5 rounded-full transition-colors duration-300">
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
