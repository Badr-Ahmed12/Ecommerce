"use client";
import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import Navbar from "@/components/Nav";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // هنا ممكن توصلها بـ API أو DB
    const dummyResults = [
      { id: 1, name: "Nike Air Zoom", price: "$120", image: "/shoe1.jpg" },
      { id: 2, name: "H&M Hoodie", price: "$45", image: "/hoodie.jpg" },
      { id: 3, name: "Adidas Ultraboost", price: "$150", image: "/shoe2.jpg" },
    ];
    setResults(dummyResults.filter(r => r.name.toLowerCase().includes(query.toLowerCase())));
  };

  return (
    <div>
   <Navbar />
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <div className="sticky top-0 bg-white shadow z-10 px-6 py-4 flex items-center justify-between">
        <form onSubmit={handleSearch} className="flex items-center w-full max-w-xl bg-gray-100 rounded-full px-4 py-2">
          <Search className="text-gray-500 w-5 h-5" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for products..."
            className="ml-3 w-full bg-transparent focus:outline-none"
          />
        </form>
        <button className="ml-4 flex items-center gap-2 rounded-full bg-black text-white px-4 py-2 hover:bg-gray-800 transition">
          <SlidersHorizontal size={16} />
          Filters
        </button>
      </div>

      {/* Results */}
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {results.length > 0 ? (
          results.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer overflow-hidden"
            >
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-gray-600">{item.price}</p>
                <button className="mt-3 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-20 text-gray-500">
            <Search size={48} className="mb-4 opacity-50" />
            <p className="text-lg">No results found. Try searching something else!</p>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}
