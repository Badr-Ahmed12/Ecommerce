"use client";

import Navbar from "@/components/Nav";
import React, { useState } from "react";

// Simple mock auth state
export default function ProfilePage() {
  const [user, setUser] = useState<{
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    country: string;
  } | null>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
  });

  function handleLogout(e:React.FormEvent) {
    e.preventDefault();
    setUser(null);
    setForm({
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      country: "",
    });
  }


  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setUser({ ...form });
  }

  if (!user) {

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
          <h1 className="text-2xl font-semibold mb-6 text-center">Create your profile</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">City</label>
                <input
                  type="text"
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Country</label>
                <input
                  type="text"
                  value={form.country}
                  onChange={(e) => setForm({ ...form, country: e.target.value })}
                  className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-black py-2 px-4 text-white font-medium hover:bg-gray-900"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-black px-8 py-6">
            <h1 className="text-3xl font-bold text-white">Profile</h1>
            <p className="text-gray-300 text-sm mt-1">Manage your personal information</p>
          </div>

          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="text-xl font-semibold text-gray-900">{user.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-xl font-semibold text-gray-900">{user.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="text-xl font-semibold text-gray-900">{user.phone}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-500">Address</p>
                <p className="text-xl font-semibold text-gray-900">{user.address}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">City</p>
                <p className="text-xl font-semibold text-gray-900">{user.city}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Country</p>
                <p className="text-xl font-semibold text-gray-900">{user.country}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 px-8 py-6 flex justify-end gap-4 ">
            <button
              onClick={() => setUser(null)}
              className="rounded-lg cursor-pointer bg-gray-100 px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 transition"
            >
              Edit Profile
            </button>
            <button
              className="rounded-lg cursor-pointer bg-black px-6 py-2 text-sm font-medium text-white hover:bg-gray-900 transition"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
