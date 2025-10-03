import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const branches = [
  {
    name: 'Ash-Shafi Medical Center (Main Branch)',
    address: '2/5, 11.5 Pallabi Mirpur Dhaka-1216',
    phone: '+8801346694684',
    mapUrl: 'https://maps.app.goo.gl/bzadCceZACr9MhCG6',
    image: '/entrance.png',
  },
  {
    name: 'Ash-Shafi Medical Center (Second Branch)',
    address: 'House-56, Road-10, Block-D, Section-12, Pallabi, Dhaka, Bangladesh',
    phone: '+8801302718107',
    mapUrl: 'https://maps.app.goo.gl/zkqJwivz6Dnkk8ve6?g_st=aw',
    image: '/entrance-2.jpg',
  },
];

export function BranchesSection() {
  return (
    <section id="branches" className="py-24 bg-gradient-to-tl from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-3">Locations</span>
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-4">Our Branches</h2>
          <p className="text-lg text-foreground/80 mt-4 max-w-2xl mx-auto">
            Find an Ash Shafi Medical Center near you. We are conveniently located to serve you better.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {branches.map((branch, index) => (
            <Card key={index} className="overflow-hidden border border-primary/10 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-500 animate-in fade-in zoom-in-95 group" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="bg-primary/5 h-2 w-full group-hover:bg-primary transition-colors duration-500"></div>
              
              {/* Branch Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={branch.image}
                  alt={`${branch.name} entrance`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-lg">{branch.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3 border-l-2 border-primary/20 pl-4 py-2">
                  <p className="text-foreground/80">{branch.address}</p>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <a
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary/10 hover:bg-primary hover:text-white text-primary px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 inline-flex items-center gap-2"
                  >
                  <MapPin className="h-4 w-4" />
                  View on Google Maps
                  </a>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <Phone className="h-5 w-5 text-primary" />
                    <a href={`tel:${branch.phone}`} className="text-primary hover:underline">
                    {branch.phone}
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
