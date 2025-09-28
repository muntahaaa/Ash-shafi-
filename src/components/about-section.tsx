"use client";
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

function SlideshowImages() {
  const images = [
    { src: '/leaflet.jpg', alt: 'Medical Center Leaflet' },
    { src: '/header/location.jpg', alt: 'Medical Center Location' }
  ];
  const [index, setIndex] = React.useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-full group">
      <Image
        src={images[index].src}
        alt={images[index].alt}
        fill
        style={{ objectFit: 'contain', transition: 'opacity 0.5s' }}
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />
      
      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-10"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-10"
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>

      {/* Image Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index ? 'bg-primary' : 'bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-r from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-3">Who We Are</span>
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-4">About Ash Shafi Medical Center</h2>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Large Image Section */}
          <div className="w-full lg:w-4/6 animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/20 rounded-full -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-primary/10 rounded-full -z-10"></div>
              {/* Large slideshow */}
              <div className="relative w-full h-[500px] md:h-[650px] lg:h-[750px] overflow-hidden rounded-2xl shadow-2xl border border-primary/10">
                <SlideshowImages />
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="w-full lg:w-2/6 animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-primary/20 h-fit sticky top-8">
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed font-medium">
                আশ-শাফি মেডিকেল সেন্টারে আপনাকে স্বাগতম। আপনার সুস্থতাই আমাদের অঙ্গীকার। 
                অভিজ্ঞ চিকিৎসক দ্বারা সঠিক পরামর্শ ও মানসম্মত সেবা প্রদানে আমরা প্রতিশ্রুতিবদ্ধ। 
                আমাদের লক্ষ্য হলো আধুনিক চিকিৎসা সেবা ও স্বাস্থ্যসচেতনতা ছড়িয়ে দেওয়া।
              </p>
              
              <div className="space-y-6 mb-8">
                <h3 className="text-2xl font-bold text-primary mb-4">আমাদের সেবাসমূহ</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 group">
                    <CheckCircle className="text-primary h-6 w-6 mt-1 group-hover:scale-110 transition-transform flex-shrink-0" />
                    <span className="text-base leading-relaxed">অভিজ্ঞ ও বিশেষজ্ঞ চিকিৎসকের সেবা।</span>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <CheckCircle className="text-primary h-6 w-6 mt-1 group-hover:scale-110 transition-transform flex-shrink-0" />
                    <span className="text-base leading-relaxed">প্যাথলজি, এক্স-রে ও আল্ট্রাসনোগ্রাফি পরীক্ষার সুবিধা।</span>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <CheckCircle className="text-primary h-6 w-6 mt-1 group-hover:scale-110 transition-transform flex-shrink-0" />
                    <span className="text-base leading-relaxed">নবজাতক ও গর্ভবতী মায়েদের বিশেষ স্বাস্থ্য পরামর্শ।</span>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <CheckCircle className="text-primary h-6 w-6 mt-1 group-hover:scale-110 transition-transform flex-shrink-0" />
                    <span className="text-base leading-relaxed">পরিবারের সকল সদস্যের জন্য স্বাস্থ্য পরীক্ষা ও পরামর্শ।</span>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <CheckCircle className="text-primary h-6 w-6 mt-1 group-hover:scale-110 transition-transform flex-shrink-0" />
                    <span className="text-base leading-relaxed">সাশ্রয়ী মূল্যে পূর্ণ স্বাস্থ্য চেকআপ প্যাকেজ।</span>
                  </li>
                </ul>
              </div>
              
              <a href="#contact" className="block">
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-primary/30 transition-all duration-300 text-lg py-6">
                  যোগাযোগ করুন
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}