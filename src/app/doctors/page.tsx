"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { useMemo, useState, useEffect } from 'react';
import Image from 'next/image';
import { doctors } from '@/data/doctors';

import { PATHOLOGICAL_TESTS } from '@/data/tests';

export default function DoctorsPage() {
  const specialties = Object.keys(doctors);
  const [search, setSearch] = useState("");
  const [showScrollButton, setShowScrollButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide the floating button when we are close to the footer/bottom of the page
      const threshold = 150; // px from bottom
      const scrolledToBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - threshold;
      setShowScrollButton(!scrolledToBottom);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

      <footer id="doctors-footer" className="mt-16 bg-green-900 text-white py-12 border-t border-green-800">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-2">যোগাযোগ ও আমাদের ঠিকানা</h3>
              <div className="flex items-start gap-3 text-green-100">
                <span className="mt-1">📍</span>
                <div>
                  <h4 className="font-semibold text-white">ঠিকানা (Address)</h4>
                  <p className="text-sm">2/5, 11.5 Pallabi, Mirpur, Dhaka-1216</p>
                  <p className="text-xs text-green-200 mt-1">
                    Google map location:{' '}
                    <a
                      href="https://maps.app.goo.gl/szvwv5w6SSLtaAJx7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-white hover:text-green-300 transition-colors"
                    >
                      https://maps.app.goo.gl/szvwv5w6SSLtaAJx7
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 text-green-100">
                <span className="mt-1">✉️</span>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <p className="text-sm">ash.shafi.medicalcenter2025@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-2">সামাজিক যোগাযোগ ও বুকিং</h3>
              
              <div className="flex items-start gap-3 text-green-100">
                <span className="mt-1">🌐</span>
                <div>
                  <h4 className="font-semibold text-white">Facebook</h4>
                  <a
                    href="https://www.facebook.com/share/1CyYXKVfvm/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline text-white hover:text-green-300 transition-colors"
                  >
                    facebook.com/ashshafimedicalcenterbd
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-green-100">
                <span className="mt-1">💬</span>
                <div>
                  <h4 className="font-semibold text-white">WhatsApp</h4>
                  <a
                    href="https://wa.me/8801992568186"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline text-white hover:text-green-300 transition-colors"
                  >
                    Chat on WhatsApp (Serial Booking: +8801992568186)
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-green-800/60 pt-6 text-center text-xs text-green-300">
            <p>&copy; {new Date().getFullYear()} Ash Shafi Medical Center. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Pinned Contact Button */}
      <div 
        onClick={() => document.getElementById('doctors-footer')?.scrollIntoView({ behavior: 'smooth' })}
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 cursor-pointer transition-all duration-300 font-bold select-none border border-green-500/30 hover:scale-105 active:scale-95 hover:shadow-green-500/20 text-sm sm:text-base ${
          showScrollButton ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <span>যোগাযোগ ও আমাদের ঠিকানা</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 animate-bounce" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          strokeWidth={3}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}