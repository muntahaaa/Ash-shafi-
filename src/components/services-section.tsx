import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Ear,Venus,Stethoscope, Syringe, FlaskConical, Bone, Microscope,HeartPulse } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const services = [
  {
    icon: <Stethoscope className="h-12 w-12 text-black" />,
    title: 'General Medicine',
    description: 'Comprehensive primary care for all ages, focusing on prevention and treatment of common illnesses.',
  },
  {
    icon: <HeartPulse className="h-12 w-12 text-black" />,
    title: 'Cardiology',
    description: 'Expert care for your heart, including diagnosis, treatment, and prevention of cardiovascular diseases.',
  },
  {
    icon: <Syringe className="h-12 w-12 text-black" />,
    title: 'Dermatology',
    description: 'Specialized treatment for skin, hair, and nail conditions with advanced dermatological solutions.',
  },
  {
    icon: <FlaskConical className="h-12 w-12 text-black" />,
    title: 'Laboratory Services',
    description: 'Accurate and timely diagnostic testing with our state-of-the-art laboratory facilities.',
  },
  {
    icon: <Bone className="h-12 w-12 text-black" />,
    title: 'Orthopedics',
    description: 'Treatment for musculoskeletal issues, including bones, joints, ligaments, tendons, and muscles.',
  },
  {
    icon: <Microscope className="h-12 w-12 text-black" />,
    title: 'Pathology',
    description: 'Detailed examination of tissues and fluids to diagnose diseases and guide treatment plans.',
  },
  {
    icon: (
      <Image
        src="/gynae.jpg"
        alt="Gynae"
        width={48}
        height={48}
        className="h-12 w-12 object-contain mx-auto"
      />
    ),
    title: 'Gynae and Obstretics',
    description: 'Comprehensive care for women’s health, pregnancy, childbirth, and reproductive system disorders.',
  },
  {
    icon: (
      <Image
        src="/ENT.jpg"
        alt="ENT"
        width={48}
        height={48}
        className="h-12 w-12 object-contain mx-auto"
      />
    ),
    title: 'Otolaryngology',
    description: 'Diagnosis and treatment of ear, nose, and throat disorders for all age groups.',
  },
  {
    icon: (
      <Image
        src="/baby.jpg"
        alt="Baby"
        width={48}
        height={48}
        className="h-12 w-12 object-contain mx-auto"
      />
    ),
    title: 'Paediatric',
    description: 'Specialized medical care for newborns, infants, and children, including treatment of childhood illnesses and developmental concerns.',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-3">Our Specialties</span>
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-4">Our Services</h2>
          <p className="text-lg text-foreground/80 mt-4 max-w-3xl mx-auto">
            We offer a wide range of medical services to meet the needs of our patients, using the latest technology and treatments.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center border border-primary/10 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-500 animate-in fade-in zoom-in-95 group overflow-hidden" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-center mb-4 bg-primary/5 w-20 h-20 rounded-full mx-auto group-hover:bg-primary/20 transition-colors duration-300">
                  {service.icon}
                </div>
                <CardTitle className="font-headline mt-4 group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
