"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { useMemo, useState } from 'react';
import Image from 'next/image';
import { doctors } from '@/data/doctors';

import { PATHOLOGICAL_TESTS } from '@/data/tests';

export default function DoctorsPage() {
  const specialties = Object.keys(doctors);
  const [search, setSearch] = useState("");

  const filteredTests = useMemo(() => {
    return PATHOLOGICAL_TESTS.filter((test) => 
      test.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Contact Header */}
      <div className="sticky top-0 z-50 pt-1 pb-1 flex flex-col sm:flex-row items-center justify-center gap-2 bg-green-600 text-white px-4 shadow-md">
        <Image src="/Logo[2].png" alt="Ash Shafi Logo" width={50} height={50} className="w-10 h-10" />
        <span className="text-sm sm:text-base font-bold">সিরিয়াল দিতে কল করুন: </span>
        <div className="flex gap-4 text-sm sm:text-base font-mono">
          <a href="tel:+8801346694684" className="hover:underline">+8801346694684</a>
          <a href="tel:+8801992568186" className="hover:underline">+8801992568186</a>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Doctors Section */}
        <section className="mb-16">
          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-green-800">
            বিশেষজ্ঞ ডাক্তার এর তালিকা
          </h1>
          <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto space-y-4">
            {specialties.map((specialty, index) => (
              <AccordionItem key={specialty} value={`item-${index}`} className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:bg-green-50 text-left text-lg font-semibold">
                  {specialty}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid gap-4 mt-4">
                    {doctors[specialty].map((doctor, dIndex) => (
                      <Card key={dIndex} className="border-l-4 border-green-500 shadow-none">
                        <CardContent className="p-4">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                          <p className="text-gray-600 whitespace-pre-line text-sm leading-relaxed">
                            {doctor.description}
                          </p>
                          {doctor.time && (
                            <div className="mt-3 text-green-700 font-bold text-xs bg-green-50 inline-block px-3 py-1 rounded-full">
                              🕒 সময়: {doctor.time}
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Pathological Test Section */}
        <section className="mb-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-green-700 p-6 text-white text-center">
              <h2 className="text-2xl font-bold">ল্যাব টেস্ট রেট চার্ট (Pathological Tests)</h2>
              <p className="text-green-100 text-sm mt-1">আশু-শাফি মেডিকেল সেন্টার</p>
            </div>
            
            <div className="p-6">
              <div className="relative mb-6">
                <input 
                  type="text" 
                  placeholder="টেস্টের নাম দিয়ে খুঁজুন..." 
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <svg className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="border-b-2 border-gray-100">
                    <tr>
                      <th className="pb-4 font-bold text-gray-700">টেস্টের নাম (Test Name)</th>
                      <th className="pb-4 font-bold text-gray-700 text-right">ফি (Tk)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {filteredTests.map((test, i) => (
                      <tr key={i} className="hover:bg-green-50 transition-colors">
                        <td className="py-4 text-sm text-gray-600 pr-4">{test.name}</td>
                        <td className="py-4 text-sm font-bold text-green-600 text-right">৳{test.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {filteredTests.length === 0 && (
                  <p className="text-center py-10 text-gray-400 italic">দুঃখিত, কোনো টেস্ট পাওয়া যায়নি।</p>
                )}
              </div>
              
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-8 text-gray-800">আমাদের হেলথ প্যাকেজসমূহ</h2>
          <div className="inline-block bg-white p-2 rounded-2xl shadow-lg">
            <Image
              src="/packages.png"
              alt="Packages"
              width={800}
              height={500}
              className="rounded-xl w-full max-w-3xl h-auto"
            />
          </div>
        </section>
      </div>
    </div>
  );
}