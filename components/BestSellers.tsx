import Image from "next/image";
import Link from "next/link";

const bestSellers = [
  {
    title: "Wireless Headphones",
    price: "EGP 1,299",
    image: "/products/headphones.jpg",
  },
  {
    title: "Smartwatch Series 6",
    price: "EGP 2,499",
    image: "/products/smartwatch.jpg",
  },
  {
    title: "Leather Backpack",
    price: "EGP 899",
    image: "/products/backpack.jpg",
  },
  {
    title: "Running Shoes",
    price: "EGP 1,199",
    image: "/products/shoes.jpg",
  },
  {
    title: "Sunglasses",
    price: "EGP 499",
    image: "/products/sunglasses.jpg",
  },
  {
    title: "Bluetooth Speaker",
    price: "EGP 699",
    image: "/products/speaker.jpg",
  },
];

export default function BestSellers() {
  return (
    <section className="px-6 py-16 bg-white">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">
          Best Sellers
        </h2>
        <p className="text-gray-500 text-sm md:text-base">
          Our most loved products by customers
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {bestSellers.map((product, index) => (
          <Link
            key={index}
            href={`/product/${product.title.toLowerCase().replace(/ /g, "-")}`}
            className="group rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-transform duration-300 hover:-translate-y-2 bg-white"
          >
            <div className="relative w-full h-40 md:h-44">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-4 text-center space-y-2">
              <h3 className="text-base md:text-lg font-semibold text-gray-700 line-clamp-2">
                {product.title}
              </h3>
              <p className="text-gray-900 font-bold">{product.price}</p>
              <span className="inline-block mt-2 bg-black text-white font-medium px-4 py-2 rounded-full transition hover:bg-gray-800 active:scale-95">
                Shop Now
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
