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
  { href: '#services', label: 'Specialists' },
  { href: '#branches', label: 'Branches' },
  { href: '#media', label: 'Media' },
  { href: '#contact', label: 'Contact' },
];

export function Footer() {
  return (
   <footer>
      <div className="bg-primary/10 py-4">
        <div className="container mx-auto px-4 text-center text-sm text-foreground/70">
          <p>&copy; {new Date().getFullYear()} Ash Shafi Medical Center. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
