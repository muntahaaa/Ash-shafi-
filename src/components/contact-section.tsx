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
                  <p>
                    Google map location:{' '}
                    <a
                      href="https://maps.app.goo.gl/szvwv5w6SSLtaAJx7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black underline"
                    >
                      https://maps.app.goo.gl/szvwv5w6SSLtaAJx7
                    </a>
                  </p>
                </div>
              </div>
                <div className="flex items-start gap-4">
                {/* Facebook Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5 3.657 9.127 8.438 9.876v-6.987h-2.54v-2.889h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.261c-1.243 0-1.631.772-1.631 1.562v1.875h2.773l-.443 2.889h-2.33v6.987C18.343 21.127 22 17 22 12z"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  />
                </svg>
                <div>
                  <h4 className="font-semibold">Facebook</h4>
                  <a
                  href="https://www.facebook.com/share/171MTtVdjt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black underline"
                  >
                  facebook.com/ashshafimedicalcenter
                  </a>
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
