"use client";

import Navbar from "@/components/Nav";
import React, { useMemo, useState } from "react";

type CartItem = {
  id: string;
  name: string;
  price: number;
  color?: string;
  size?: string;
  qty: number;
  image?: string;
};

export default function Checkout() {
  const [items, setItems] = useState<CartItem[]>([
    {
      id: "sku-1",
      name: "Classic Runner Sneakers",
      price: 129.99,
      color: "White / Black",
      size: "42",
      qty: 1,
      image: "https://picsum.photos/seed/sneaker/420/320",
    },
    {
      id: "sku-2",
      name: "Everyday Tee",
      price: 29.5,
      color: "Black",
      size: "M",
      qty: 2,
      image: "https://picsum.photos/seed/tee/420/320",
    },
  ]);

  const subtotal = useMemo(
    () => items.reduce((s, it) => s + it.price * it.qty, 0),
    [items]
  );

  function updateQty(id: string, qty: number) {
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, qty: Math.max(1, qty) } : it))
    );
  }

  function removeItem(id: string) {
    setItems((prev) => prev.filter((it) => it.id !== id));
  }

  function clearCart() {
    setItems([]);
  }

  return (
    <div>
    <Navbar />
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Cart</h1>
          <div className="text-sm text-gray-600">{items.length} items</div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart list */}
          <div className="lg:col-span-2">
            <div className="rounded-lg bg-white shadow-sm divide-y">
              {items.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  سلة المشتريات فاضية — ضيف شوية حاجات حلوة 👍
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 items-center hover:bg-gray-50 transition"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-28 w-36 rounded-md object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-md font-medium">{item.name}</h3>
                          <p className="text-sm text-gray-500">
                            {item.color} • Size {item.size}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-semibold">${item.price.toFixed(2)}</div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="mt-2 text-xs text-red-600 hover:underline"
                          >
                            Remove
                          </button>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center gap-3">
                        <div className="flex items-center rounded-md border w-max">
                          <button
                            aria-label="decrease"
                            onClick={() => updateQty(item.id, item.qty - 1)}
                            className="px-3 py-1 text-lg"
                          >
                            −
                          </button>
                          <div className="px-4 text-sm w-12 text-center">{item.qty}</div>
                          <button
                            aria-label="increase"
                            onClick={() => updateQty(item.id, item.qty + 1)}
                            className="px-3 py-1 text-lg"
                          >
                            +
                          </button>
                        </div>

                        <div className="text-sm text-gray-500">Total: <span className="font-medium text-gray-800">${(item.price * item.qty).toFixed(2)}</span></div>

                        <div className="ml-auto text-xs text-gray-400">SKU: {item.id}</div>
                      </div>
                    </div>
                  </div>
                ))
              )}

              {/* footer actions */}
              {items.length > 0 && (
                <div className="p-4 flex items-center justify-between bg-gray-50 rounded-b-lg">
                  <button
                    onClick={clearCart}
                    className="text-sm text-red-600 hover:underline"
                  >
                    Clear cart
                  </button>
                  <div className="text-sm text-gray-600">Want to save for later? Use wishlist ✨</div>
                </div>
              )}
            </div>
          </div>

          {/* Summary */}
          <aside className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Order summary</h2>
            <div className="mt-4 space-y-3">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Taxes</span>
                <span>—</span>
              </div>
              <div className=" pt-3 flex justify-between items-center">
                <div>
                  <div className="text-sm text-gray-500">Estimated total</div>
                  <div className="text-xl font-bold">${subtotal.toFixed(2)}</div>
                </div>
                <button
                  disabled={items.length === 0}
                  className={`ml-4 inline-flex items-center rounded-md px-4 py-2 text-white font-medium shadow-sm focus:outline-none ${
                    items.length === 0 ? "bg-gray-300 cursor-not-allowed" : "bg-black hover:bg-gray-900"
                  }`}
                >
                  Checkout
                </button>
              </div>
            </div>

            <div className="mt-6 text-xs text-gray-400">
              Secure payment • Free returns within 30 days
            </div>
          </aside>
        </div>

        {/* mobile sticky checkout */}
        <div className="fixed left-0 right-0 bottom-4 px-4 sm:px-6 lg:hidden">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-lg bg-white p-3 shadow flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-500">{items.length} items</div>
                <div className="font-semibold">${subtotal.toFixed(2)}</div>
              </div>
              <button
                disabled={items.length === 0}
                className={`ml-4 inline-flex items-center rounded-md px-4 py-2 text-white font-medium ${
                  items.length === 0 ? "bg-gray-300 cursor-not-allowed" : "bg-black"
                }`}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

