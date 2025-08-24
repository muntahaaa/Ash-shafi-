"use client"

import React from 'react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
const slides = [
  {
  image: '/cover.jpg',
   hint: 'doctor smiling',
  },
  {
  image: '/intro-2.png',
   hint: 'doctor smiling',
  },
  {
   image: '/entrance.jpg',
   hint: 'doctor smiling',
  },
  
  {
   image: '/entrance-2.jpg',
   hint: 'medical team',
  },
];

export function HeroSection() {
  return (
   <section id="home" className="w-full py-8 md:py-16 bg-gradient-to-b from-primary/5 to-transparent">
    <div className="container mx-auto px-4">
      <div className="text-center mb-8 animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary font-headline mb-4">Welcome to Ash Shafi Medical Center</h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">Your trusted partner in healthcare, providing compassionate services with cutting-edge technology</p>
      </div>
      <Carousel
        className="w-full"
        opts={{ loop: true }}
      >
        <CarouselContent>
         {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="relative h-[40vh] md:h-[70vh] w-full flex items-center justify-center">
             <div className="rounded-2xl shadow-2xl overflow-hidden w-[95vw] max-w-[800px] h-full flex items-center justify-center bg-black/5 border border-primary/20">
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
              <Image
                src={slide.image}
                alt={slide.hint}
                fill
                style={{ objectFit: 'cover' }}
                className="brightness-105 hover:scale-105 transition-transform duration-700"
                data-ai-hint={slide.hint}
                priority={index === 0}
              />
             </div>
            </div>
          </CarouselItem>
         ))}
        </CarouselContent>
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
          <CarouselPrevious className="relative mr-2 bg-primary/10 hover:bg-primary/30 text-primary" />
          <CarouselNext className="relative ml-2 bg-primary/10 hover:bg-primary/30 text-primary" />
        </div>
      </Carousel>
    </div>
   </section>
  );
}
