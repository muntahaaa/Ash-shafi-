"use client";

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { doctors } from '@/data/doctors';
import { getDoctorSlug } from '@/data/doctor-profiles';

/** Shared doctor directory used on both the homepage and /doctors. */
export function DoctorListPanel() {
  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      {Object.keys(doctors).map((specialty, index) => (
        <AccordionItem
          key={specialty}
          value={`doctor-specialty-${index}`}
          className="overflow-hidden rounded-2xl border border-green-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
        >
          <AccordionTrigger className="px-6 py-5 text-left text-lg font-bold text-gray-900 hover:bg-green-50">
            {specialty}
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6 pt-2">
            <div className="grid gap-4">
              {doctors[specialty].map((doctor, doctorIndex) => {
                const slug = getDoctorSlug(doctor.name);
                return (
                  <Card key={`${doctor.name}-${doctorIndex}`} className="border-l-4 border-green-600 bg-gray-50/50 shadow-none transition-colors hover:bg-green-50/50">
                    <CardContent className="p-5">
                      <h3 className="mb-2 text-xl font-bold text-gray-900">
                        {slug ? <Link href={`/doctors/${slug}`} className="hover:text-green-700 hover:underline">{doctor.name}</Link> : doctor.name}
                      </h3>
                      <p className="whitespace-pre-line text-sm font-medium leading-relaxed text-gray-600">{doctor.description}</p>
                      {doctor.time && (
                        <div className="mt-3 inline-block rounded-full border border-green-200 bg-green-50 px-3.5 py-1.5 text-xs font-bold text-green-700">
                          🕒 সময়: {doctor.time}
                        </div>
                      )}
                      {slug && (
                        <div className="mt-4">
                          <Link href={`/doctors/${slug}`} className="inline-flex items-center justify-center rounded-lg bg-green-700 px-4 py-2 text-sm font-bold text-white shadow-sm transition-colors hover:bg-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2">
                            ডাক্তার প্রোফাইল দেখুন
                            <ChevronRight className="ml-1.5 h-4 w-4" aria-hidden="true" />
                          </Link>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
