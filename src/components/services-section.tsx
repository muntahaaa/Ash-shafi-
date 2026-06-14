import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import React from 'react';
import { doctors } from '@/data/doctors';
import Link from 'next/link';


const ServicesSection = () => {
  const specialties = Object.keys(doctors);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">আমাদের বিশেষজ্ঞ ডাক্তারগণ</h2>
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
        <div className="mt-8 flex justify-center">
      <div className="relative">
        <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-green-300 via-green-400 to-green-500 opacity-60 blur-xl animate-pulse" />
        <Link
          href="/tests"
          className="relative z-10 inline-block px-8 py-3 bg-green-600 text-white font-semibold rounded-full shadow-lg transform transition duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300"
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
