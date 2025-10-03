import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Ear, Venus, Stethoscope, Syringe, FlaskConical, Bone, Microscope, HeartPulse } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const services = [
  {
   
    title: 'Dr. Nahid Farhana Chowdhury',
    description: (
      <span>
        MBBS (Dhaka)
        FCGP, CCD (BIRDM, DMU)<br />
        <span className="text-green-600 font-bold">
          Consultant<br />
        </span>
        Family Medicine and Diabetes Specialist<br />
        Former Clinic In-Charge: Surjer Hashi Clinic
      </span>
    ),
    // icon: (
    //   <Image
    //     src="/doctors/Nahid.jpg"
    //     alt="Dr. Nahid Farhana Chowdhury"
    //     width={80}
    //     height={80}
    //     className="rounded-full mx-auto mb-4 object-cover"
    //   />
    // ),
  },
  {
   
    title: 'Dr. Mostak Ahmed',
    description: (
      <span>
        MBBS, FCPS (Surgery)<br />
        <span className="text-green-600 font-bold">
          General Laparoscopic, Hernia,
          Breast & Trauma Surgery Specialist<br />
        </span>
        Dhaka Medical College<br />
       
      </span>
    ),
  },
  {

    title: 'Dr. Md. Masud Rana',
    description: (
      <span>
        MBBS (Dhaka), PGT (Child Medicine), PGPN <br />
        Postgraduate Certificate in Pediatric Nutrition<br />
        CCCD (Heart Foundation), CCD (BIRDEM)<br />
        <span className="text-green-600 font-bold">
          (Experience in Child and adult Medicine)<br />
          Ex Senior Medical Officer<br />

        </span>
        SMO Institute of Child Health (ICH) & Shishu Foundation Hospital<br />
      </span>
    ),
  },
  {
 
    title: 'Dr. Al Mahmood Appolo',
    description: (
      <span>

        MBBS (DMC),
        BCS (Health), MD (Gastroenterology)<br />
        <span className="text-green-600 font-bold">
          Gastroenterology & Liver Disease Specialist Consultant, Gastroenterology<br />
        </span>
        National Gastroliver Institute & Hospital
      </span>
    ),
  },
  {
 
    title: 'Dr. Md. Tanzir Anwar',
    description: (
      <span>

        MBBS, BCS (Health), FCGP, CCD (BIRDEM)
        C-CARD (National Heart Foundation)
        CCD (ICDDRB)<br />
        <span className="text-green-600 font-bold">
          Internal Medicine and Diabetes Specialist<br />
        </span>
        MD (Internal Medicine) (On Course)<br />
        Institute of Public Health Nutrition, Dhaka
      </span>
    ),
  },
  {
 
    title: 'Dr. Sadia Tabassum',
    description: (
      <span>

        MBBS, BCS (Health),
        FCPS (Pediatrics)<br />
        <span className="text-green-600 font-bold">
          Newborn & Child Specialist
          Consultant (Pediatrics Department)<br />
        </span>
        Shaheed Suhrawardy Medical College Hospital
      </span>
    ),
  },
  {
 
    title: 'Dr. Farhana Mithila',
    description: (
      <span>
        MBBS, FCPS<br />
        Gynae & Obs Specialist<br />
        <span className="text-green-600 font-bold">
          Laparoscopic Surgeon<br />
        </span>
        Higher Training in Infertility<br />
        Dhaka Medical College & Hospital
      </span>
    ),
  },
  {

    title: 'Dr. Rahat Tanvir Anwar',
    description: (
      <span>

        MBBS (Dhaka Medical College),
        BCS (Health),
        MCPS, FCPS ENT & Head-Neck Surgery<br />
        <span className="text-green-600 font-bold">
          Specialist in Ear, Nose, and Throat Diseases;
          Microscopic, Endoscopic &amp; Head-Neck Surgeon<br />
          National Institute of ENT, Tejgaon, Dhaka<br />
        </span>
        Received advanced training in Endoscopic Nasal Surgery (Changi General Hospital, Singapore)<br />
        Received advanced training in Microscopic Ear Surgery
      </span>
    ),
  },
  {
 
    title: 'Dr. Mohammad Moshiur Rahman',
    description: (
      <span >
        MBBS, (CMC), MS (Orthopedics)<br />
        Pediatric Orthopedics and Spine Specialist & Surgeon<br />
        <span className="text-green-600 font-bold">
          Associate Professor & Unit Chief<br />
          Orthopaedic Surgery Unit<br />
        </span>
        Bangladesh Medical University (PG Hospital)
      </span>
    ),
  },
  {
 
    title: 'Dr. Babu Ram Mandal',
    description: (
      <span>
        MBBS (DMC), BCS (Health)<br />
        MD (Dermatology) Course<br />
        <span className="text-green-600 font-bold">
          Dermatology Specialist<br />
        </span>
        Bangladesh Medical University
        (PG Hospital) Dhaka
      </span>
    ),
  },
  {
   
    title: 'Dr. Md. Jubayer Chowdhury',
    description: (
      <span>
        MBBS, CCD (BIRDEM), MPh<br />
        <span className="text-green-600 font-bold">
         Consultant(Public Health) and Diabetologist <br />
        </span>
        Lab Aid Cardiac Hospital<br />
       
      </span>
    ),
  },
  {
   
    title: 'Dr. Shamshad Jahan Sumu',
    description: (
      <span>
        MBBS(Dhaka), BCS(Health), CMED(BIRDEM), M.Phil.(Microbiology)<br />
        <span className="text-green-600 font-bold">
          Assistant Professor (Microbiology)<br />
        </span>
         Shaheed Suhrawardy Medical College Hospital<br />
       
      </span>
    ),
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-3">Our Specialties</span>
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-4">Our Services and Specialists</h2>
          <p className="text-lg text-foreground/80 mt-4 max-w-3xl mx-auto">
            We offer a wide range of medical services to meet the needs of our patients, using the latest technology and treatments.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center border border-primary/10 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-500 animate-in fade-in zoom-in-95 group overflow-hidden" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader className="pb-2">
               {/* <div className="flex items-center justify-center mb-4 bg-primary/5 w-20 h-20 rounded-full mx-auto group-hover:bg-primary/20 transition-colors duration-300">
                  {service.icon}
                </div> */}
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
