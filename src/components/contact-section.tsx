import { Mail, Phone, MapPin, MessageSquare, Globe } from 'lucide-react';
import { ContactForm } from './contact-form';

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background via-primary/[0.03] to-background">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase inline-block mb-3">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary tracking-tight">
            Contact Us
          </h2>
          <p className="text-lg text-foreground/80 mt-4 max-w-2xl mx-auto">
            We are here to help. Reach out to us for appointments, inquiries, or feedback.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Cards (7 cols on large screens) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-headline font-bold text-foreground mb-4">
              Our Locations & Channels
            </h3>
            
            {/* Main Branch Card */}
            <div className="border border-primary/10 bg-card/65 backdrop-blur-sm p-6 rounded-2xl hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 group flex gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-2xl h-12 w-12 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <MapPin className="h-6 w-6 group-hover:scale-110 transition-transform" />
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">Main Branch Address</h4>
                <p className="text-foreground/80 text-sm leading-relaxed">Main Branch: 2/5, 11.5 Pallabi, Mirpur, Dhaka-1216</p>
                <a
                  href="https://maps.app.goo.gl/HDDKx5RYQjp3m3Xx7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline pt-1"
                >
                  <span>View on Google Maps</span>
                  <span className="text-[10px]">↗</span>
                </a>
              </div>
            </div>

            {/* Second Branch Card */}
            <div className="border border-primary/10 bg-card/65 backdrop-blur-sm p-6 rounded-2xl hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 group flex gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-2xl h-12 w-12 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <MapPin className="h-6 w-6 group-hover:scale-110 transition-transform" />
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">Second Branch Address</h4>
                <p className="text-foreground/80 text-sm leading-relaxed">2nd Branch: House-56, Road-10, Block-D, Pallabi, Mirpur, Dhaka-1216</p>
                <a
                  href="https://maps.app.goo.gl/wb19VtFE74UzaWSp8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline pt-1"
                >
                  <span>View on Google Maps</span>
                  <span className="text-[10px]">↗</span>
                </a>
              </div>
            </div>

            {/* Digital Channels Grid (Facebook, WhatsApp, Email) */}
            <div className="grid sm:grid-cols-2 gap-6 pt-2">
              {/* WhatsApp Card */}
              <div className="border border-primary/10 bg-card/65 backdrop-blur-sm p-5 rounded-2xl hover:shadow-md hover:border-green-500/20 transition-all group flex flex-col justify-between">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 text-green-600 p-3 rounded-xl shrink-0 group-hover:bg-green-600 group-hover:text-white transition-all">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-foreground">WhatsApp Channel</h4>
                    <p className="text-xs text-foreground/70 mt-1">Direct Chat & Booking</p>
                  </div>
                </div>
                <a
                  href="https://wa.me/8801992568186"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-xs font-bold text-green-600 hover:text-green-700 hover:underline inline-flex items-center gap-1"
                >
                  <span>Chat: +8801992568186</span>
                  <span>↗</span>
                </a>
              </div>

              {/* Facebook Card */}
              <div className="border border-primary/10 bg-card/65 backdrop-blur-sm p-5 rounded-2xl hover:shadow-md hover:border-blue-500/20 transition-all group flex flex-col justify-between">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-xl shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-foreground">Facebook Page</h4>
                    <p className="text-xs text-foreground/70 mt-1">Latest Updates & News</p>
                  </div>
                </div>
                <a
                  href="https://www.facebook.com/share/1CyYXKVfvm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline inline-flex items-center gap-1 break-all"
                >
                  <span>facebook.com/ashshafimedicalcenterbd</span>
                  <span>↗</span>
                </a>
              </div>

              {/* Email Card - Spans full width on mobile/grid */}
              <div className="border border-primary/10 bg-card/65 backdrop-blur-sm p-5 rounded-2xl hover:shadow-md hover:border-primary/20 transition-all group sm:col-span-2 flex items-center gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-xl shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-foreground">Email Support</h4>
                  <a href="mailto:ash.shafi.medicalcenter2025@gmail.com" className="text-xs font-semibold text-foreground/80 hover:text-primary hover:underline break-all">
                    ash.shafi.medicalcenter2025@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Appointment Booking (5 cols on large screens) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="space-y-6">
              <h3 className="text-2xl font-headline font-bold text-foreground mb-4">
                Book Appointment
              </h3>
              <div className="animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
