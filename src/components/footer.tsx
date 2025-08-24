import { Logo } from '@/components/logo';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import React from 'react';

const socialLinks = [
  { icon: <Facebook />, href: '#', name: 'Facebook' },
  { icon: <Twitter />, href: '#', name: 'Twitter' },
  { icon: <Instagram />, href: '#', name: 'Instagram' },
  { icon: <Linkedin />, href: '#', name: 'LinkedIn' },
];

const quickLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Services' },
  { href: '#branches', label: 'Branches' },
  { href: '#media', label: 'Media' },
  { href: '#contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="bg-primary/20 text-primary">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <a href="#home">
              <Logo className="text-primary" />
            </a>
            <p className="mt-4 max-w-md text-foreground/80">
              Your trusted partner in health and wellness. We provide compassionate care with cutting-edge medical technology.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-headline font-semibold text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-foreground/80 hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>

            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/171MTtVdjt/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="flex items-center space-x-2 text-foreground/80 hover:text-primary transition-colors"
              >
                <Facebook className="h-6 w-6" />
                <span className="font-bold">Follow us on Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary/10 py-4">
        <div className="container mx-auto px-4 text-center text-sm text-foreground/70">
          <p>&copy; {new Date().getFullYear()} Ash Shafi Medical Center. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
