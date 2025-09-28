"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Mail, Phone, MapPin } from 'lucide-react';
import { Logo } from '@/components/logo';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#branches', label: 'Branches' },
  { href: '#services', label: 'Specialists' },
  { href: '#media', label: 'Media' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // set initial state
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="border-b hidden md:block bg-primary/20">
        <div className="container mx-auto px-4 flex justify-between items-center py-2 text-sm text-foreground/80 gap-8">
          <div className="flex items-center gap-6">
        <a href="ash.shafi.medicalcenter2025@gmail.com" className="flex items-center gap-2 hover:text-primary hover:scale-105 transition-all group">
          <div className="bg-primary/20 p-1.5 rounded-full group-hover:bg-primary/30 transition-colors">
            <Mail size={14} className="text-primary" />
          </div>
          <span>ash.shafi.medicalcenter2025@gmail.com</span>
        </a>
        <div className="flex-1 flex justify-center">
          <a href="tel:+8801302718107" className="flex items-center gap-2 hover:text-primary hover:scale-105 transition-all group">
            <div className="bg-primary/20 p-1.5 rounded-full group-hover:bg-primary/30 transition-colors">
              <Phone size={14} className="text-primary" />
            </div>
            <span>+8801346694684, +8801992568186 </span>
          </a>
        </div>
          </div>
          <div className="flex items-center gap-2 group">
        <div className="bg-primary/20 p-1.5 rounded-full group-hover:bg-primary/30 transition-colors">
          <MapPin size={14} className="text-primary" />
        </div>
        <span className="group-hover:text-primary transition-colors">2/5, 11.5 Pallabi Mirpur Dhaka-1216</span>
          </div>
        </div>
      </div>
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="hover-scale">
            <Logo className="text-foreground [&>svg]:text-primary" />
          </a>
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="relative px-4 py-2 text-lg font-medium text-foreground/80 hover:text-primary transition-all rounded-md hover:bg-primary/5 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-3/4"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="border border-primary/20 hover:bg-primary/5">
                  <Menu className="h-6 w-6 text-primary" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="border-r border-primary/20">
                <div className="flex flex-col gap-6 p-6">
                  <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>
                    <Logo className="text-foreground [&>svg]:text-primary" />
                  </a>
                  <div className="h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 my-2"></div>
                  <ul className="flex flex-col gap-4 mt-6">
                  {navLinks.map((link, index) => (
                    <li key={link.href} style={{ animationDelay: `${index * 100}ms` }} className="animate-in fade-in slide-in-from-left-8">
                      <a 
                        href={link.href} 
                        onClick={() => setIsMobileMenuOpen(false)} 
                        className="text-xl font-medium text-foreground hover:text-primary transition-colors flex items-center gap-2 py-2 px-3 rounded-md hover:bg-primary/5"
                      >
                        <div className="h-2 w-2 rounded-full bg-primary/40"></div>
                        {link.label}
                      </a>
                    </li>
                  ))}
                  </ul>
                  <div className="border-t pt-6 mt-6 flex flex-col gap-4 text-md text-foreground/80">
                    <a href="mailto:ash.shafi.medicalcenter2025@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                      <Mail size={16} />
                      <span>ash.shafi.medicalcenter2025@gmail.com</span>
                    </a>
                    <a href="tel:+8801346694684" className="flex items-center gap-2 hover:text-primary transition-colors">
                      <Phone size={16} />
                      <span>+8801346694684</span>
                    
                    </a>
                     <a href="tel:+8801992568186" className="flex items-center gap-2 hover:text-primary transition-colors">
                      <Phone size={16} />
                   
                       <span>+8801992568186</span>
                    </a>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>2/5, 11.5 Pallabi Mirpur Dhaka-1216</span>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
