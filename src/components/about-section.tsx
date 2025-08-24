import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-r from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-3">Who We Are</span>
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-4">About Ash Shafi Medical Center</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full -z-10"></div>
              <Image
                src="/leaflet.jpg"
                alt="Doctors consulting"
                width={600}
                height={700}
                className="rounded-lg shadow-xl border border-primary/10 hover:scale-[1.02] transition-transform duration-500"
                data-ai-hint="doctors talking"
              />
            </div>
            </div>
          <div className="animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
            <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-primary/10">
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Welcome to Ash Shafi Medical Center, where your health is our priority. We are a leading healthcare provider, committed to delivering exceptional medical care with a compassionate touch. Our mission is to promote wellness and provide comprehensive health services to our community.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 group">
                  <CheckCircle className="text-primary h-6 w-6 mt-1 group-hover:scale-110 transition-transform" />
                  <span className="text-lg">Experienced and board-certified specialists providing expert care.</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <CheckCircle className="text-primary h-6 w-6 mt-1 group-hover:scale-110 transition-transform" />
                  <span className="text-lg">Advanced medical technology and state-of-the-art facilities for accurate diagnosis.</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <CheckCircle className="text-primary h-6 w-6 mt-1 group-hover:scale-110 transition-transform" />
                  <span className="text-lg">Patient-centered approach to healthcare with personalized treatment plans.</span>
                </li>
              </ul>
              <a href="#contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-primary/30 transition-all duration-300">Get In Touch</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
