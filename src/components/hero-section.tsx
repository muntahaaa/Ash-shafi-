"use client"

import React from 'react';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section id="home" className="w-full py-8 md:py-16 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container mx-auto px-4">
        {/* Header Text */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary font-headline mb-4">
            Ash-Shafi Medical Center in Pallabi, Mirpur
          </h1>
            <p className="text-xl md:text-2xl font-bold text-black max-w-2xl mx-auto px-4">
            বিশ্বস্ত চিকিৎসা, হৃদয় থেকে সেবা
            </p>
            <p className="mx-auto mt-4 max-w-3xl px-4 text-sm leading-6 text-foreground/75 md:text-base">
              Specialist doctor consultations, diagnostic tests and medical services for patients across Mirpur 11, Mirpur 11.5, Mirpur 12 and Pallabi, Dhaka.
            </p>
        </div>

        {/* Services List Image */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl shadow-2xl overflow-hidden bg-black/5 border border-primary/20 group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10"></div>
            <Image
              src="/header/Ash shai cover D.jpg"
              alt="Medical Services List"
              width={800}
              height={600}
              className="w-full h-auto brightness-105 group-hover:scale-105 transition-transform duration-700"
              priority
            />
           
          </div>
        </div>

       
      </div>
    </section>
  );
}
