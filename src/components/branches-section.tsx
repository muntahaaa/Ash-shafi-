import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const branches = [
  {
    name: 'Ash-Shafi Medical Center',
    label: 'Main Branch',
    address: '2/5, 11.5 Pallabi, Mirpur, Dhaka-1216',
    phone: '+8801346694684',
    altPhone: '+8801992568186',
    mapUrl: 'https://maps.app.goo.gl/HDDKx5RYQjp3m3Xx7',
    image: '/entrance.png',
  },
  {
    name: 'Ash-Shafi Medical Center',
    label: 'Second Branch',
    address: 'House-56, Road-10, Block-D, Section-12, Pallabi, Dhaka, Bangladesh',
    phone: '+8801302718107',
    mapUrl: 'https://maps.app.goo.gl/wb19VtFE74UzaWSp8',
    image: '/entrance-2.jpg',
  },
];

export function BranchesSection() {
  return (
    <section id="branches" className="py-24 bg-gradient-to-b from-primary/[0.03] via-background to-primary/[0.03]">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase inline-block mb-3">
            Locations
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-4 tracking-tight">
            Our Branches
          </h2>
          <p className="text-lg text-foreground/80 mt-4 max-w-2xl mx-auto">
            Find an Ash Shafi Medical Center near you. We are conveniently located to serve you better.
          </p>
        </div>

        {/* Branches Grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {branches.map((branch, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border border-primary/10 bg-card hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-500 rounded-3xl group animate-in fade-in zoom-in-95" 
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Branch Image with Overlay Label */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={branch.image}
                  alt={`${branch.name} ${branch.label}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground font-bold text-[10px] tracking-widest uppercase px-3.5 py-1.5 rounded-full shadow-md">
                  {branch.label}
                </span>
              </div>

              {/* Card Header */}
              <CardHeader className="pb-2 pt-6">
                <CardTitle className="font-headline text-2xl font-bold text-foreground">
                  {branch.name}
                </CardTitle>
              </CardHeader>
              
              {/* Card Body */}
              <CardContent className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-3 text-sm text-foreground/85 leading-relaxed min-h-[48px]">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>{branch.address}</span>
                </div>

                {/* Dialer buttons */}
                <div className="space-y-3">
                  <span className="font-bold text-[10px] text-primary/60 tracking-wider uppercase block">Contact Booking Serial</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <a 
                      href={`tel:${branch.phone}`}
                      className="inline-flex items-center justify-center gap-2 bg-primary/5 hover:bg-primary text-primary hover:text-white border border-primary/10 px-3 py-2.5 rounded-xl font-mono font-bold text-xs sm:text-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                    >
                      <Phone className="h-3.5 w-3.5 shrink-0" />
                      <span>{branch.phone}</span>
                    </a>
                    {branch.altPhone ? (
                      <a 
                        href={`tel:${branch.altPhone}`}
                        className="inline-flex items-center justify-center gap-2 bg-primary/5 hover:bg-primary text-primary hover:text-white border border-primary/10 px-3 py-2.5 rounded-xl font-mono font-bold text-xs sm:text-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                      >
                        <Phone className="h-3.5 w-3.5 shrink-0" />
                        <span>{branch.altPhone}</span>
                      </a>
                    ) : (
                      <div className="hidden sm:block"></div>
                    )}
                  </div>
                </div>

                {/* Google Maps Actions */}
                <div className="pt-2 border-t border-primary/5">
                  <a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/95 px-4 py-3 rounded-xl text-sm font-bold shadow-md hover:shadow-lg hover:shadow-primary/15 transition-all duration-300 inline-flex items-center justify-center gap-2 group/btn"
                  >
                    <MapPin className="h-4 w-4 text-primary-foreground group-hover/btn:animate-bounce" />
                    <span>View Directions on Google Maps</span>
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
