import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactForm } from './contact-form';

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-headline text-primary">Contact Us</h2>
          <p className="text-lg text-foreground/80 mt-4 max-w-2xl mx-auto">
            We are here to help. Reach out to us for appointments, inquiries, or feedback.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
            <div>
              <h3 className="text-2xl font-headline font-semibold mb-4">Get in Touch</h3>
              <p className="text-foreground/80">
                Our team is ready to assist you. Please use the contact form for non-urgent matters. For emergencies, please call us directly.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p>2/5, 11.5 Pallabi, Mirpur, Dhaka-1216</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p>+880 1302718107</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p>ash.shafi.medicalcenter2025@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
             <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
