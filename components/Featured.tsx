import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Men's Fashion",
    image: "/categories/men-fashion.jpg",
  },
  {
    title: "Women's Fashion",
    image: "/categories/women-fashion.jpg",
  },
  {
    title: "Electronics",
    image: "/categories/electronics.jpg",
  },
  {
    title: "Home & Living",
    image: "/categories/home-living.jpg",
  },
  {
    title: "Beauty & Health",
    image: "/categories/beauty.jpg",
  },
  {
    title: "Sports & Outdoors",
    image: "/categories/sports.jpg",
  },
  {
    title: "Kids & Toys",
    image: "/categories/kids.jpg",
  },
  {
    title: "Accessories",
    image: "/categories/accessories.jpg",
  },
];

export default function FeaturedCategories() {
  return (
    <section className="px-6 py-12 bg-gray-50">
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-1">
          Featured Categories
        </h2>
        <p className="text-gray-500 text-sm md:text-sm">
          Explore our top categories handpicked for you
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <Link
            key={index}
            href={`/category/${cat.title.toLowerCase().replace(/ /g, "-")}`}
            className="group rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-transform duration-300 hover:-translate-y-1 bg-white"
          >
            <div className="relative w-full h-32 md:h-36">
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-base md:text-lg font-semibold text-gray-700">
                {cat.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
