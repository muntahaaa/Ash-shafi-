"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import React, { useState, useEffect, useRef } from 'react';
import { doctors } from '@/data/doctors';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

// ===== Doctor Images Data =====
const doctorImages = [
  '/doctors/d1.jpeg',
  '/doctors/d2.jpeg',
  '/doctors/d3.jpeg',
  '/doctors/d4.jpeg',
  '/doctors/d5.jpeg',
  '/doctors/d6.jpeg',
  '/doctors/d7.jpeg',
  '/doctors/d8.jpeg',
  '/doctors/d9.jpeg',
  '/doctors/d10.jpeg',
  '/doctors/d11.jpeg',
  '/doctors/d12.jpeg',
];

// ===== Doctor Slideshow Component =====
function DoctorSlideshow() {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      handleNext();
    }, 4000);
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
      setIndex((prev) => (prev + 1) % doctorImages.length);
      setIsTransitioning(false);
    }, 300);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + doctorImages.length) % doctorImages.length);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div 
      className="relative w-full h-[380px] sm:h-[480px] md:h-[550px] lg:h-[600px] xl:h-[650px] overflow-hidden rounded-3xl shadow-2xl border border-primary/10 bg-slate-950 group"
      onMouseEnter={() => { if (timerRef.current) clearInterval(timerRef.current); }}
      onMouseLeave={resetTimer}
    >
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none" />

      {/* Slide Image Rendering */}
      <div className={`relative w-full h-full transition-opacity duration-300 ${isTransitioning ? 'opacity-30' : 'opacity-100'}`}>
        {/* Ambient blurred version in the background */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={doctorImages[index]}
            alt=""
            fill
            style={{ objectFit: 'cover' }}
            className="blur-2xl opacity-40 scale-105"
            priority
          />
        </div>
        
        {/* sharp contained image in foreground */}
        <div className="relative w-full h-full z-10">
          <Image
            src={doctorImages[index]}
            alt={`ডাক্তার প্রোফাইল ${index + 1}`}
            fill
            style={{ objectFit: 'contain' }}
            sizes="(max-width: 768px) 100vw, 45vw"
            priority
          />
        </div>
      </div>

      

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-primary hover:text-primary-foreground text-foreground rounded-full p-2.5 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-20 border border-primary/10"
        aria-label="Previous Doctor"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-primary hover:text-primary-foreground text-foreground rounded-full p-2.5 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-20 border border-primary/10"
        aria-label="Next Doctor"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}

// ===== Main ServicesSection Component =====
const ServicesSection = () => {
  const specialties = Object.keys(doctors);

  return (
    <section id="services" className="py-20 md:py-28 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16 max-w-3xl mx-auto animate-in fade-in duration-1000">
          <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase inline-block mb-3 border border-primary/20">
            আমাদের সেবা | Specialist Panel
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-headline tracking-tight text-foreground">
            আমাদের বিশেষজ্ঞ ডাক্তারগণ
          </h2>
          <div className="h-1.5 w-20 bg-primary rounded-full mx-auto mt-4" />
        </div>

        {/* Responsive Side-by-Side Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-7xl mx-auto mb-16">
          {/* Left Column: Specialty Accordions (7 Columns on Large Screens) */}
          <div className="w-full lg:col-span-7 space-y-4 order-2 lg:order-1 animate-in fade-in slide-in-from-left-8 duration-1000">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {specialties.map((specialty, index) => (
                <AccordionItem 
                  key={specialty} 
                  value={`item-${index}`} 
                  className="bg-card rounded-2xl border border-primary/10 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <AccordionTrigger className="px-6 py-5 hover:bg-primary/[0.03] text-left text-lg font-bold text-foreground">
                    {specialty}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2">
                    <div className="grid gap-4">
                      {doctors[specialty].map((doctor, dIndex) => (
                        <Card key={dIndex} className="border-l-4 border-primary bg-muted/30 shadow-none hover:bg-muted/50 transition-colors">
                          <CardContent className="p-5">
                            <h3 className="text-xl font-bold text-foreground mb-2">{doctor.name}</h3>
                            <p className="text-foreground/80 whitespace-pre-line text-sm leading-relaxed font-medium">
                              {doctor.description}
                            </p>
                            {doctor.time && (
                              <div className="mt-3 text-primary font-bold text-xs bg-primary/10 inline-block px-3.5 py-1.5 rounded-full border border-primary/20">
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
          </div>

          {/* Right Column: Doctor Profiles Slideshow (5 Columns on Large Screens) */}
          <div className="w-full lg:col-span-5 order-1 lg:order-2 animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            <div className="relative p-1 bg-gradient-to-tr from-primary/20 via-transparent to-primary/5 rounded-[32px]">
              <DoctorSlideshow />
            </div>
          </div>
        </div>

        {/* CTA Link to Test Packages */}
        <div className="flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          <div className="relative">
            <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/30 via-primary/50 to-primary/30 opacity-60 blur-xl animate-pulse" />
            <Link
              href="/tests"
              className="relative z-10 inline-block px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg hover:shadow-primary/20 transform transition duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/30"
            >
              ল্যাব টেস্ট এবং ফি সম্পর্কে বিস্তারিত জানতে এখানে ক্লিক করুন
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
