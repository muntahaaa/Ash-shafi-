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
                  href="https://www.facebook.com/share/1CyYXKVfvm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black underline"
                  >
                  facebook.com/ashshafimedicalcenterbd
                  </a>
                </div>
                </div>

                <div className="flex items-start gap-4">
                {/* WhatsApp Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary mt-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.729-1.45L0 24zm6.59-4.846c1.6.95 3.488 1.45 5.421 1.451 5.353 0 9.709-4.347 9.711-9.711.002-2.599-1.01-5.043-2.853-6.886-1.843-1.842-4.289-2.856-6.886-2.856-5.356 0-9.712 4.346-9.713 9.711-.001 1.962.51 3.878 1.478 5.57l-.968 3.535 3.61-.947zm11.238-6.163c-.301-.15-1.782-.88-2.056-.98-.275-.1-.475-.15-.675.15-.2.3-.775.98-.95 1.18-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.485-.89-.795-1.492-1.777-1.667-2.077-.175-.3-.018-.462.13-.61.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.589-.48-.51-.675-.52-.175-.01-.375-.01-.575-.01-.2 0-.525.075-.8 1.05-.275.98-1.05 1.05-1.075 2.1-.025 1.05.775 2.075.875 2.225.1.15 1.525 2.33 3.69 3.265.515.223.916.356 1.23.456.52.165 1 .141 1.375.086.42-.062 1.298-.53 1.479-1.042.18-.513.18-.953.125-1.042-.05-.09-.2-.15-.5-.3z"/>
                </svg>
                <div>
                  <h4 className="font-semibold">WhatsApp</h4>
                  <div className="flex flex-col gap-1">
                    
                    <a
                      href="https://wa.me/8801992568186"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black underline hover:text-green-600 transition-colors"
                    >
                      Chat on WhatsApp (Serial Booking: +8801992568186)
                    </a>
                  </div>
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
