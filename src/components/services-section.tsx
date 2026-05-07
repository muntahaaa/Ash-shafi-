import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import React from 'react';
import { doctors } from '@/app/doctors/page';

const ServicesSection = () => {
  const specialties = Object.keys(doctors);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">আমাদের বিশেষজ্ঞ ডাক্তারগণ</h2>
        <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto space-y-4">
          {specialties.map((specialty, index) => (
            <AccordionItem key={specialty} value={`item-${index}`} className="bg-white rounded-lg shadow-sm">
              <AccordionTrigger className="px-6 py-4 text-lg font-semibold text-left hover:text-green-600">
                {specialty}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  {doctors[specialty].map((doctor, dIndex) => (
                    <Card key={dIndex} className="border-l-4 border-green-500">
                      <CardContent className="p-4">
                        <h3 className="text-xl font-semibold mb-1">{doctor.name}</h3>
                        <p className="text-gray-700 whitespace-pre-line mb-2">{doctor.description}</p>
                        {doctor.time && (
                          <p className="text-green-600 font-medium">সময়: {doctor.time}</p>
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
        <a
          href="https://res.cloudinary.com/dz8e6wjnx/image/upload/v1762366861/lab_test_fee_page-0001_kqtssu.jpg"
          role="button"
          aria-label="অ্যাপয়েন্টমেন্ট বুক করুন"
          className="relative z-10 inline-block px-8 py-3 bg-green-600 text-white font-semibold rounded-full shadow-lg transform transition duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300"
        >
          ল্যাব টেস্ট এবং ফি সম্পর্কে বিস্তারিত জানতে এখানে ক্লিক করুন
        </a>
      </div>
    </div>
      </div>
    </section>
    
  );
};

export default ServicesSection;
