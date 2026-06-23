"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { 
  ChevronLeft, 
  ChevronRight, 
  Users, 
  Activity, 
  ShieldCheck, 
  Heart, 
  ArrowRight,
  Sparkles,
  PhoneCall
} from 'lucide-react';

// ===== Slideshow Images Data =====
const slideshowImages = [
  { src: '/leaflet.jpg', label: 'আশ-শাফি লিফলেট', desc: 'আমাদের স্বাস্থ্য সেবা ও বিশেষ ছাড়সমূহ' },
  { src: '/header/location.jpg', label: 'আমাদের ভবন ও কমপ্লেক্স', desc: 'মিরপুর সাড়ে এগারো, ঢাকা' },
  { src: '/slideshow/front.jpg', label: 'মেডিকেল সেন্টার সম্মুখভাগ', desc: 'আশ-শাফি মেডিকেল সেন্টার ও ডায়াগনস্টিক' },
  { src: '/slideshow/reception-desk.jpg', label: 'অভ্যর্থনা ও হেল্প ডেস্ক', desc: 'আন্তরিক অভ্যর্থনা ও রোগীদের সার্বক্ষণিক গাইডেন্স' },
  { src: '/slideshow/patient.jpeg', label: 'বিশেষজ্ঞ পরামর্শ ও কেয়ার', desc: 'সুদক্ষ চিকিৎসকদের মাধ্যমে বিশ্বস্ত ও আন্তরিক চিকিৎসা সেবা' },
  { src: '/slideshow/lab1.jpeg', label: 'প্যাথলজি ল্যাবরেটরি', desc: 'অত্যাধুনিক ডায়াগনস্টিক ও ল্যাবরেটরি সরঞ্জাম' },
  { src: '/slideshow/lab2.jpeg', label: 'অটোমেটেড অ্যানালাইজার', desc: 'আন্তর্জাতিক মানের নির্ভুল টেস্টের নিশ্চয়তা' },
  { src: '/slideshow/lab3.jpeg', label: 'রিসার্চ ও কোয়ালিটি ল্যাব', desc: 'ডাবল-চেকিং সিস্টেমের মাধ্যমে শতভাগ নিখুঁত রিপোর্ট' },
  { src: '/slideshow/xray.jpg', label: 'ডিজিটাল এক্স-রে ইউনিট', desc: 'উচ্চ প্রযুক্তিসম্পন্ন ও দ্রুত এক্স-রে ডায়াগনস্টিকস' },
  { src: '/slideshow/lab11.jpeg', label: 'হেমাটোলজি অ্যানালাইজার', desc: 'সুইজারল্যান্ড ও জার্মান প্রযুক্তির উন্নত ল্যাব টেস্ট' },
  { src: '/slideshow/lab12.jpeg', label: 'বায়োকেমিস্ট্রি ইউনিট', desc: 'US-FDA সার্টিফাইড বায়ো-মেডিকেল টেস্ট' },
  { src: '/slideshow/opening.jpeg', label: 'আমাদের গ্র্যান্ড ওপেনিং', desc: 'উদ্বোধনী মুহূর্ত এবং আশ-শাফির পদযাত্রা' },
  { src: '/slideshow/meeting1.jpeg', label: 'চিকিৎসক ও স্টাফ মিটিং', desc: 'সেবার মান উন্নতকরণের লক্ষ্যে আলোচনা ও পরিকল্পনা' },
  { src: '/slideshow/meeting2.jpeg', label: 'টিম কো-অর্ডিনেশন', desc: 'রোগীদের সেবায় আমাদের টিমের যৌথ সমন্বয়' },
  { src: '/slideshow/meeting3.jpeg', label: 'স্টাফ ও ডিরেক্টর প্যানেল', desc: 'সবার জন্য উন্নত স্বাস্থ্য সেবা নিশ্চিতকরণে বদ্ধপরিকর' },
];

// ===== Slideshow Component =====
function AutoSlideshow() {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      handleNext();
    }, 4500);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % slideshowImages.length);
      setIsTransitioning(false);
    }, 300);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length);
      setIsTransitioning(false);
    }, 300);
  };

  const selectSlide = (targetIndex: number) => {
    if (targetIndex === index) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setIndex(targetIndex);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div 
      className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] xl:h-[650px] overflow-hidden rounded-3xl shadow-2xl border border-primary/10 bg-black group"
      onMouseEnter={() => { if (timerRef.current) clearInterval(timerRef.current); }}
      onMouseLeave={resetTimer}
    >
      {/* Background Decorative Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10 pointer-events-none" />

      {/* Image Render */}
      <div className={`relative w-full h-full transition-opacity duration-300 ${isTransitioning ? 'opacity-30' : 'opacity-100'}`}>
        {/* Blurred background for portrait/landscape aspect matching */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={slideshowImages[index].src}
            alt=""
            fill
            style={{ objectFit: 'cover' }}
            className="blur-2xl opacity-40 scale-105"
            priority
          />
        </div>
        
        {/* Main image - contained to show complete photo without cropping */}
        <div className="relative w-full h-full z-10">
          <Image
            src={slideshowImages[index].src}
            alt={slideshowImages[index].label}
            fill
            style={{ objectFit: 'contain' }}
            sizes="(max-width: 768px) 100vw, 55vw"
            priority
          />
        </div>
      </div>



      {/* Slide Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-primary hover:text-primary-foreground text-foreground rounded-full p-2.5 sm:p-3.5 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-20 border border-primary/10"
        aria-label="Previous Image"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-primary hover:text-primary-foreground text-foreground rounded-full p-2.5 sm:p-3.5 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-20 border border-primary/10"
        aria-label="Next Image"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      {/* Caption Overlay */}
      <div className="absolute bottom-6 left-6 right-6 z-20 text-white animate-in fade-in slide-in-from-bottom-2 duration-500">
        <span className="bg-primary/95 text-white text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">
          {slideshowImages[index].label}
        </span>
        <p className="text-sm sm:text-lg md:text-xl font-medium text-slate-150 drop-shadow-md">
          {slideshowImages[index].desc}
        </p>
      </div>
    </div>
  );
}

// ===== Main AboutSection Component =====
export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-background via-primary/[0.02] to-background">
      {/* Decorative Blob Shapes */}
      <div className="absolute top-1/4 -left-36 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 -right-36 w-80 h-80 bg-primary/800 opacity-[0.03] rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase inline-block mb-4 border border-primary/20">
            আমাদের পরিচয় | Who We Are
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-headline tracking-tight text-foreground mb-4">
            মানসম্মত সেবা ও <span className="bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">বিশ্বস্ত ডায়াগনস্টিকস</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-emerald-500 rounded-full mx-auto mb-6" />
          <p className="text-base sm:text-lg text-foreground/70 leading-relaxed font-medium">
            আশ-শাফি মেডিকেল সেন্টার ও কনসালটেশন সেবায় স্বাগতম। আধুনিক যন্ত্রপাতি ও বিশেষজ্ঞ চিকিৎসকদের সমন্বয়ে আমরা নিশ্চিত করছি সঠিক ও নির্ভরযোগ্য স্বাস্থ্য সেবা।
          </p>
        </div>

        {/* Top Segment: Gallery + Quick Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-24">
          {/* Gallery Column */}
          <div className="w-full lg:col-span-7 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="relative p-1 bg-gradient-to-tr from-primary/25 via-transparent to-primary/5 rounded-3xl">
              <AutoSlideshow />
            </div>
          </div>

          {/* Intro & Stats Column */}
          <div className="w-full lg:col-span-5 flex flex-col justify-center space-y-8 animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-primary font-headline">
                আপনার সুস্থতাই আমাদের মূল অঙ্গীকার
              </h3>
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed font-medium">
                অভিজ্ঞ চিকিৎসক দ্বারা সঠিক পরামর্শ ও মানসম্মত সেবা প্রদানে আমরা প্রতিশ্রুতিবদ্ধ। আমাদের লক্ষ্য হলো অত্যাধুনিক প্রযুক্তিসম্পন্ন যন্ত্রপাতি ও প্যাথলজি ল্যাবের সহায়তায় নির্ভুল ডায়াগনস্টিক সেবা এবং স্বাস্থ্যসচেতনতা সমাজের প্রতিটি স্তরে পৌঁছে দেওয়া।
              </p>
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                মিরপুর সাড়ে এগারোতে অবস্থিত আশ-শাফি মেডিকেল সেন্টার ও কনসালটেশন সেবা সব ধরনের মেডিকেল টেস্টের নির্ভরযোগ্য আস্থার প্রতীক।
              </p>
            </div>

            {/* Trust Stats Counter Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-muted/40 rounded-2xl border border-primary/5 hover:border-primary/10 transition-colors shadow-sm text-center">
                <span className="block text-3xl md:text-4xl font-extrabold text-primary font-mono tracking-tight mb-1">
                  ১৫+
                </span>
                <span className="text-xs sm:text-sm font-semibold text-foreground/70">
                  বিশেষজ্ঞ চিকিৎসক
                </span>
              </div>
              
              <div className="p-4 bg-muted/40 rounded-2xl border border-primary/5 hover:border-primary/10 transition-colors shadow-sm text-center">
                <span className="block text-3xl md:text-4xl font-extrabold text-primary font-mono tracking-tight mb-1">
                  ১০০%
                </span>
                <span className="text-xs sm:text-sm font-semibold text-foreground/70">
                  নির্ভুল রিপোর্ট
                </span>
              </div>

              <div className="p-4 bg-muted/40 rounded-2xl border border-primary/5 hover:border-primary/10 transition-colors shadow-sm text-center">
                <span className="block text-2xl sm:text-3xl font-extrabold text-primary tracking-tight mb-1">
                  সপ্তাহে ৭ দিন
                </span>
                <span className="text-xs sm:text-sm font-semibold text-foreground/70">
                  আন্তরিক সেবা
                </span>
              </div>

              <div className="p-4 bg-muted/40 rounded-2xl border border-primary/5 hover:border-primary/10 transition-colors shadow-sm text-center">
                <span className="block text-3xl md:text-4xl font-extrabold text-primary font-mono tracking-tight mb-1">
                  ১০০০+
                </span>
                <span className="text-xs sm:text-sm font-semibold text-foreground/70">
                  সুস্থ ও তৃপ্ত রোগী
                </span>
              </div>
            </div>

            {/* Quick Consultation CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/95 text-white font-semibold shadow-lg hover:shadow-primary/20 transition-all rounded-full px-8 py-6 text-base group">
                  <span>যোগাযোগ করুন</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1.5 transition-transform" />
                </Button>
              </a>
              <a href="tel:+8801346694684" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto hover:bg-primary/5 border-primary/30 text-primary font-semibold transition-all rounded-full px-8 py-6 text-base flex items-center justify-center gap-2">
                  <PhoneCall size={16} />
                  <span>কল করুন</span>
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Segment: "Why Choose Us" / Features Grid */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <span className="text-primary text-xs sm:text-sm font-bold tracking-wider uppercase bg-primary/10 px-4 py-1.5 rounded-full border border-primary/10 inline-block mb-3">
              আমাদের মূল বৈশিষ্ট্য
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-headline text-foreground">
              কেন আপনি আমাদের বেছে নেবেন?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Card 1: Expert Consultation */}
            <div className="group bg-card hover:bg-primary/[0.01] hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 p-6 rounded-2xl border border-primary/10 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="p-3 bg-primary/10 rounded-2xl w-fit group-hover:bg-primary group-hover:text-primary-foreground text-primary transition-all duration-300">
                  <Users className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  বিশেষজ্ঞ চিকিৎসক
                </h4>
                <p className="text-sm text-foreground/70 leading-relaxed font-medium">
                  দেশের অন্যতম অভিজ্ঞ ও বিশেষজ্ঞ চিকিৎসকদের সঠিক পরামর্শ ও নিবিড় সেবা। এছাড়া নবজাতক ও গর্ভবতী মায়েদের জন্য রয়েছে বিশেষ স্বাস্থ্য গাইডেন্স।
                </p>
              </div>
              <div className="mt-4 flex items-center text-xs font-bold text-primary group-hover:opacity-100 transition-opacity">
                <span>Ash Shafi Doctors</span>
              </div>
            </div>

            {/* Card 2: Certified Equipment */}
            <div className="group bg-card hover:bg-primary/[0.01] hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 p-6 rounded-2xl border border-primary/10 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="p-3 bg-primary/10 rounded-2xl w-fit group-hover:bg-primary group-hover:text-primary-foreground text-primary transition-all duration-300">
                  <Activity className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  আধুনিক প্রযুক্তি
                </h4>
                <p className="text-sm text-foreground/70 leading-relaxed font-medium">
                  সুইজারল্যান্ড, ফ্রান্স, জার্মানি ও কোরিয়ার প্রস্তুতকৃত EU/CE এবং US/FDA সার্টিফাইড যন্ত্রপাতি দ্বারা নির্ভুল প্যাথলজি, আল্ট্রাসাউন্ড, ইসিজি ও এক্স-রে।
                </p>
              </div>
              <div className="mt-4 flex items-center text-xs font-bold text-primary group-hover:opacity-100 transition-opacity">
                <span>International Standards</span>
              </div>
            </div>

            {/* Card 3: Standard Lab & Check */}
            <div className="group bg-card hover:bg-primary/[0.01] hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 p-6 rounded-2xl border border-primary/10 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="p-3 bg-primary/10 rounded-2xl w-fit group-hover:bg-primary group-hover:text-primary-foreground text-primary transition-all duration-300">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  নির্ভুল টেস্ট রিপোর্ট
                </h4>
                <p className="text-sm text-foreground/70 leading-relaxed font-medium">
                  আমাদের রয়েছে স্ট্যান্ডার্ড কোয়ালিটি কন্ট্রোল টেস্ট ল্যাবরেটরি এবং অভিজ্ঞ প্যাথলজিস্টদের মাধ্যমে রিপোর্টের ডাবল-চেকিং সিস্টেম।
                </p>
              </div>
              <div className="mt-4 flex items-center text-xs font-bold text-primary group-hover:opacity-100 transition-opacity">
                <span>Accurate Diagnostics</span>
              </div>
            </div>

            {/* Card 4: Affordable Package */}
            <div className="group bg-card hover:bg-primary/[0.01] hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 p-6 rounded-2xl border border-primary/10 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="p-3 bg-primary/10 rounded-2xl w-fit group-hover:bg-primary group-hover:text-primary-foreground text-primary transition-all duration-300">
                  <Heart className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  সাশ্রয়ী ও রোগী-বান্ধব
                </h4>
                <p className="text-sm text-foreground/70 leading-relaxed font-medium">
                  স্বচ্ছ ও সাশ্রয়ী মূল্যে পূর্ণাঙ্গ স্বাস্থ্য পরীক্ষা প্যাকেজ, রোগী ফিডব্যাক ট্র্যাকিং এবং দ্রুততম সময়ে উন্নত সেবা নিশ্চিতকরণের ব্যবস্থা।
                </p>
              </div>
              <div className="mt-4 flex items-center text-xs font-bold text-primary group-hover:opacity-100 transition-opacity">
                <span>Care From The Heart</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}