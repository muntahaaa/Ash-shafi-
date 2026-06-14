"use client";

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PATHOLOGICAL_TESTS } from '@/data/tests';

export default function TestsPage() {
  const [search, setSearch] = useState("");

  const filteredTests = useMemo(() => {
    return PATHOLOGICAL_TESTS.filter((test) => 
      test.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Contact & Navigation Header */}
      <div className="sticky top-0 z-50 pt-2 pb-2 flex flex-col sm:flex-row items-center justify-between bg-green-700 text-white px-6 shadow-lg">
        <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <Image src="/Logo[2].png" alt="Ash Shafi Logo" width={50} height={50} className="w-10 h-10 object-contain" />
          <span className="font-bold text-lg hidden sm:inline">আশ্-শাফি মেডিকেল সেন্টার</span>
        </Link>
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 mt-2 sm:mt-0">
          <div className="text-sm font-semibold">
            সিরিয়াল দিতে কল করুন: 
            <span className="font-mono ml-2">
              <a href="tel:+8801346694684" className="hover:underline">+8801346694684</a>, 
              <a href="tel:+8801992568186" className="hover:underline ml-1">+8801992568186</a>
            </span>
          </div>
          <Link 
            href="/"
            className="text-xs bg-white text-green-700 font-bold px-4 py-1.5 rounded-full hover:bg-green-50 transition-colors shadow-sm"
          >
            🏠 হোম পেজে ফিরে যান
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Page Title & Intro */}
        <div className="text-center mb-12">
          <h1 id="page-title" className="text-3xl sm:text-4xl font-extrabold text-green-800 mb-3">
            ল্যাব টেস্ট ও ফি তালিকা
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            আশ্-শাফি মেডিকেল সেন্টারে আধুনিক প্রযুক্তির মাধ্যমে সকল প্রকার প্যাথলজিক্যাল টেস্ট অত্যন্ত নির্ভুলভাবে সম্পন্ন করা হয়। নিচে আমাদের নিয়মিত টেস্ট ও তার ফিসমূহ দেয়া হলো।
          </p>
        </div>

        {/* Pathological Test Section */}
        <section className="mb-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-green-700 to-green-600 p-6 text-white text-center">
              <h2 className="text-2xl font-bold">ল্যাব টেস্ট রেট চার্ট (Pathological Tests)</h2>
              <p className="text-green-100 text-sm mt-1">আশ্-শাফি মেডিকেল সেন্টার</p>
            </div>
            
            <div className="p-6">
              {/* Search Box */}
              <div className="relative mb-6">
                <input 
                  id="test-search-input"
                  type="text" 
                  placeholder="টেস্টের নাম দিয়ে খুঁজুন (যেমন: CBC, FBS, Dengue)..." 
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all shadow-sm"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <svg className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {/* Table */}
              <div className="overflow-x-auto rounded-lg border border-gray-100">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100">
                      <th className="py-4 px-6 font-bold text-gray-700">টেস্টের নাম (Test Name)</th>
                      <th className="py-4 px-6 font-bold text-gray-700 text-right">ফি (Tk)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredTests.map((test, i) => (
                      <tr key={i} className="hover:bg-green-50/50 transition-colors">
                        <td className="py-4 px-6 text-sm text-gray-600 font-medium">{test.name}</td>
                        <td className="py-4 px-6 text-sm font-bold text-green-600 text-right">৳{test.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {filteredTests.length === 0 && (
                  <div className="text-center py-12 text-gray-400 bg-gray-50">
                    <p className="italic mb-2">দুঃখিত, আপনার খোঁজা টেস্টটি পাওয়া যায়নি।</p>
                    <p className="text-xs">সরাসরি তথ্যের জন্য আমাদের কল করতে পারেন।</p>
                  </div>
                )}
              </div>
              
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="text-center max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-gray-800">আমাদের হেলথ প্যাকেজসমূহ</h2>
          <div className="inline-block bg-white p-4 rounded-2xl shadow-xl border border-gray-100">
            <Image
              src="/packages.png"
              alt="Packages"
              width={800}
              height={500}
              className="rounded-xl w-full max-w-3xl h-auto"
              priority
            />
          </div>
        </section>
      </div>
    </div>
  );
}
