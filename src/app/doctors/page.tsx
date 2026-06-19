"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { useMemo, useState, useEffect } from 'react';
import Image from 'next/image';
import { MapPin, Mail } from 'lucide-react';
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
      <div className="sticky top-0 z-50 bg-gradient-to-r from-green-700 via-green-600 to-green-700 text-white px-4 py-2.5 shadow-lg border-b border-green-500/20 backdrop-blur-md">
        <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-3">
          {/* Logo & Booking Title */}
          <div className="flex items-center gap-3">
            <Image src="/Logo[2].png" alt="Ash Shafi Logo" width={40} height={40} className="w-9 h-9 brightness-110 drop-shadow-sm shrink-0" />
            <span className="text-sm sm:text-base font-bold leading-tight">সিরিয়াল দিতে সরাসরি কল করুন:</span>
          </div>

          {/* Booking Numbers & Map Locations Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {/* Main Branch Badge */}
            <div className="flex flex-wrap items-center gap-1.5 bg-white/10 hover:bg-white/15 px-3 py-1.5 rounded-full border border-white/10 transition-all group">
              <span className="font-bold text-[10px] text-green-100 tracking-wider uppercase">Main Branch:</span>
              <a href="tel:+8801346694684" className="hover:text-green-300 font-bold font-mono text-xs sm:text-sm hover:underline transition-colors">+8801346694684</a>
              <span className="text-white/20 mx-0.5">|</span>
              <a href="tel:+8801992568186" className="hover:text-green-300 font-bold font-mono text-xs sm:text-sm hover:underline transition-colors">+8801992568186</a>
            </div>

            {/* Second Branch Badge */}
            <div className="flex items-center gap-1.5 bg-white/10 hover:bg-white/15 px-3 py-1.5 rounded-full border border-white/10 transition-all group">
              <span className="font-bold text-[10px] text-green-100 tracking-wider uppercase">2nd Branch:</span>
              <a href="tel:+8801302718107" className="hover:text-green-300 font-bold font-mono text-xs sm:text-sm hover:underline transition-colors">+8801302718107</a>
            </div>

            {/* Location Navigation Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <a 
                href="https://maps.app.goo.gl/HDDKx5RYQjp3m3Xx7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-1.5 bg-white/10 hover:bg-white/25 px-3 py-1.5 rounded-full border border-white/10 transition-all group text-[11px] sm:text-xs font-semibold"
              >
                <MapPin size={13} className="text-green-200 group-hover:scale-110 transition-transform" />
                <span>Main: 2/5, 11.5 Pallabi Mirpur Dhaka</span>
              </a>
              <a 
                href="https://maps.app.goo.gl/wb19VtFE74UzaWSp8" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-1.5 bg-white/10 hover:bg-white/25 px-3 py-1.5 rounded-full border border-white/10 transition-all group text-[11px] sm:text-xs font-semibold"
              >
                <MapPin size={13} className="text-green-200 group-hover:scale-110 transition-transform" />
                <span>2nd: House-56, Rd-10, Sec-12, Pallabi, Mirpur, Dhaka</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Doctors Section */}
        <section className="mb-16">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-2 text-green-900">
            Ash-Shafi Medical Center
          </h1>
          <p className="text-center italic text-green-700 font-semibold text-sm sm:text-base mb-5 tracking-wide">
            "বিশ্বস্ত চিকিৎসা, হৃদয় থেকে সেবা"
          </p>
          <div className="w-16 h-1 bg-green-500/20 mx-auto mb-6 rounded-full"></div>
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-8 text-green-800">
            বিশেষজ্ঞ ডাক্তার এর তালিকা
          </h3>
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

      <footer id="doctors-footer" className="mt-24 bg-gradient-to-br from-green-950 to-green-900 text-white py-16 border-t border-green-800">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            {/* Left Column: Locations & Contact info */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold font-headline border-b border-green-800/60 pb-2">আমাদের শাখাসমূহ (Locations)</h3>
              
              {/* Main Branch Address */}
              <div className="flex items-start gap-3.5 text-green-100/90 group">
                <div className="bg-white/10 p-2.5 rounded-full text-green-300 shrink-0 group-hover:bg-white/20 transition-all duration-300 mt-1">
                  <MapPin size={16} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-white text-sm">Main Branch Address</h4>
                  <p className="text-sm">2/5, 11.5 Pallabi, Mirpur, Dhaka-1216</p>
                  <a
                    href="https://maps.app.goo.gl/HDDKx5RYQjp3m3Xx7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-green-300 hover:text-white underline transition-colors block pt-0.5"
                  >
                    View on Google Maps ↗
                  </a>
                </div>
              </div>

              {/* Second Branch Address */}
              <div className="flex items-start gap-3.5 text-green-100/90 group">
                <div className="bg-white/10 p-2.5 rounded-full text-green-300 shrink-0 group-hover:bg-white/20 transition-all duration-300 mt-1">
                  <MapPin size={16} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-white text-sm">Second Branch Address</h4>
                  <p className="text-sm">House-56, Road-10, Block-D, Section-12, Pallabi, Dhaka</p>
                  <a
                    href="https://maps.app.goo.gl/wb19VtFE74UzaWSp8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-green-300 hover:text-white underline transition-colors block pt-0.5"
                  >
                    View on Google Maps ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Socials & Support */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold font-headline border-b border-green-800/60 pb-2">সামাজিক যোগাযোগ ও অনলাইন বুকিং</h3>
              
              {/* WhatsApp */}
              <div className="flex items-start gap-3.5 text-green-100/90 group">
                <div className="bg-white/10 p-2.5 rounded-full text-green-300 shrink-0 group-hover:bg-white/20 transition-all duration-300 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.729-1.45L0 24zm6.59-4.846c1.6.95 3.488 1.45 5.421 1.451 5.353 0 9.709-4.347 9.711-9.711.002-2.599-1.01-5.043-2.853-6.886-1.843-1.842-4.289-2.856-6.886-2.856-5.356 0-9.712 4.346-9.713 9.711-.001 1.962.51 3.878 1.478 5.57l-.968 3.535 3.61-.947zm11.238-6.163c-.301-.15-1.782-.88-2.056-.98-.275-.1-.475-.15-.675.15-.2.3-.775.98-.95 1.18-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.485-.89-.795-1.492-1.777-1.667-2.077-.175-.3-.018-.462.13-.61.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.589-.48-.51-.675-.52-.175-.01-.375-.01-.575-.01-.2 0-.525.075-.8 1.05-.275.98-1.05 1.05-1.075 2.1-.025 1.05.775 2.075.875 2.225.1.15 1.525 2.33 3.69 3.265.515.223.916.356 1.23.456.52.165 1 .141 1.375.086.42-.062 1.298-.53 1.479-1.042.18-.513.18-.953.125-1.042-.05-.09-.2-.15-.5-.3z"/>
                  </svg>
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-white text-sm">WhatsApp</h4>
                  <a
                    href="https://wa.me/8801992568186"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline text-green-300 hover:text-white transition-colors block"
                  >
                    Chat on WhatsApp (Serial Booking: +8801992568186)
                  </a>
                </div>
              </div>

              {/* Facebook */}
              <div className="flex items-start gap-3.5 text-green-100/90 group">
                <div className="bg-white/10 p-2.5 rounded-full text-green-300 shrink-0 group-hover:bg-white/20 transition-all duration-300 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5 3.657 9.127 8.438 9.876v-6.987h-2.54v-2.889h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.261c-1.243 0-1.631.772-1.631 1.562v1.875h2.773l-.443 2.889h-2.33v6.987C18.343 21.127 22 17 22 12z"/>
                  </svg>
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-white text-sm">Facebook</h4>
                  <a
                    href="https://www.facebook.com/share/1CyYXKVfvm/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline text-green-300 hover:text-white transition-colors block break-all"
                  >
                    facebook.com/ashshafimedicalcenterbd
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5 text-green-100/90 group">
                <div className="bg-white/10 p-2.5 rounded-full text-green-300 shrink-0 group-hover:bg-white/20 transition-all duration-300 mt-1">
                  <Mail size={16} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-white text-sm">Email Address</h4>
                  <a 
                    href="mailto:ash.shafi.medicalcenter2025@gmail.com"
                    className="text-sm underline text-green-300 hover:text-white transition-colors block break-all"
                  >
                    ash.shafi.medicalcenter2025@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-green-800/60 pt-8 text-center text-xs text-green-300/80">
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