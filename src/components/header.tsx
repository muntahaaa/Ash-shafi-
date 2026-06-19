"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Mail, Phone, MapPin, Calendar } from 'lucide-react';
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
    <header className={`sticky top-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-primary/10 py-1' : 'bg-transparent py-3'}`}>
      {/* Top Bar Info (Desktop) */}
      <div className={`border-b border-primary/10 hidden md:block bg-gradient-to-r from-primary/[0.06] via-primary/[0.02] to-primary/[0.06] transition-all duration-500 ${isScrolled ? 'h-0 overflow-hidden opacity-0 border-none' : 'py-2.5'}`}>
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center gap-y-2 gap-x-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {/* Email Address Link */}
            <a href="mailto:ash.shafi.medicalcenter2025@gmail.com" className="flex items-center gap-2 text-xs lg:text-sm text-foreground/80 hover:text-primary hover:scale-[1.02] transition-all group">
              <div className="bg-primary/10 p-1.5 rounded-full group-hover:bg-primary/20 transition-colors">
                <Mail size={13} className="text-primary" />
              </div>
              <span className="break-all font-medium">ash.shafi.medicalcenter2025@gmail.com</span>
            </a>

            {/* Separately Dialable Phone Numbers inside Capsule Badges */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Main Branch Phone Numbers */}
              <div className="flex items-center gap-1.5 bg-primary/5 hover:bg-primary/10 px-3 py-1 rounded-full border border-primary/10 hover:border-primary/20 transition-all group">
                <Phone size={12} className="text-primary group-hover:scale-110 transition-transform" />
                <span className="font-bold text-[10px] text-primary tracking-wider uppercase">Main:</span>
                <a href="tel:+8801346694684" className="hover:text-primary hover:underline font-semibold font-mono text-[11px] lg:text-xs transition-colors">+8801346694684</a>
                <span className="text-foreground/20 mx-0.5">|</span>
                <a href="tel:+8801992568186" className="hover:text-primary hover:underline font-semibold font-mono text-[11px] lg:text-xs transition-colors">+8801992568186</a>
              </div>

              {/* Second Branch Phone Number */}
              <div className="flex items-center gap-1.5 bg-primary/5 hover:bg-primary/10 px-3 py-1 rounded-full border border-primary/10 hover:border-primary/20 transition-all group">
                <Phone size={12} className="text-primary group-hover:scale-110 transition-transform" />
                <span className="font-bold text-[10px] text-primary tracking-wider uppercase">2nd Branch:</span>
                <a href="tel:+8801302718107" className="hover:text-primary hover:underline font-semibold font-mono text-[11px] lg:text-xs transition-colors">+8801302718107</a>
              </div>
            </div>
          </div>

          {/* Addresses */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <a 
              href="https://maps.app.goo.gl/HDDKx5RYQjp3m3Xx7" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 group hover:text-primary transition-colors"
            >
              <div className="bg-primary/10 p-1.5 rounded-full group-hover:bg-primary/20 transition-colors">
                <MapPin size={13} className="text-primary group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-xs text-foreground/80 font-medium transition-colors">Main: 2/5, 11.5 Pallabi Mirpur Dhaka</span>
            </a>
            <a 
              href="https://maps.app.goo.gl/wb19VtFE74UzaWSp8" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 group hover:text-primary transition-colors"
            >
              <div className="bg-primary/10 p-1.5 rounded-full group-hover:bg-primary/20 transition-colors">
                <MapPin size={13} className="text-primary group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-xs text-foreground/80 font-medium transition-colors">2nd: House-56, Road-10, Block-D, Pallabi, Dhaka</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <nav className="container mx-auto px-4 transition-all duration-300">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="hover-scale flex items-center">
            <Logo className="text-foreground [&>svg]:text-primary" />
          </a>

          {/* Desktop Navigation & CTA Button */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-1 bg-muted/40 p-1 rounded-full border border-primary/5">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  className="relative px-4 py-2 text-sm font-semibold text-foreground/70 hover:text-primary rounded-full hover:bg-background transition-all duration-300 hover:shadow-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            {/* Book Appointment CTA Button */}
            <a 
              href="#contact" 
              className="bg-primary text-primary-foreground hover:bg-primary/95 hover:scale-[1.03] active:scale-[0.97] px-5 py-2.5 rounded-full text-sm font-bold shadow-md hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 flex items-center gap-2 group"
            >
              <Calendar size={15} />
              <span>Book Appointment</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-300">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>

          {/* Mobile Actions (Phone & Hamburger) */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Direct Dial Floating Icon for instant mobile UX */}
            <a 
              href="tel:+8801346694684" 
              className="bg-primary text-primary-foreground p-2.5 rounded-full shadow-md active:scale-90 transition-all mr-1 animate-pulse-gentle flex items-center justify-center" 
              aria-label="Call Main Branch"
            >
              <Phone size={18} className="animate-wiggle" />
            </a>

            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="border border-primary/20 hover:bg-primary/5 h-10 w-10 rounded-full flex items-center justify-center transition-colors">
                  <Menu className="h-5 w-5 text-primary" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="border-r border-primary/10 bg-background/98 backdrop-blur-md w-[310px] sm:w-[360px] p-0 flex flex-col h-full shadow-2xl">
                {/* Drawer Body */}
                <div className="flex flex-col h-full p-6 justify-between overflow-y-auto">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between pb-4 border-b border-primary/10">
                      <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>
                        <Logo className="text-foreground [&>svg]:text-primary" />
                      </a>
                    </div>

                    {/* Nav Links list */}
                    <nav className="flex flex-col gap-1.5">
                      {navLinks.map((link, index) => (
                        <div 
                          key={link.href} 
                          style={{ animationDelay: `${index * 80}ms` }} 
                          className="animate-in fade-in slide-in-from-left-6 duration-300"
                        >
                          <a 
                            href={link.href} 
                            onClick={() => setIsMobileMenuOpen(false)} 
                            className="text-base font-semibold text-foreground/80 hover:text-primary transition-all flex items-center justify-between py-3 px-4 rounded-2xl hover:bg-primary/5 group"
                          >
                            <div className="flex items-center gap-3">
                              <div className="h-2 w-2 rounded-full bg-primary/40 group-hover:bg-primary group-hover:scale-125 transition-all"></div>
                              <span>{link.label}</span>
                            </div>
                            <span className="text-primary opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 font-bold">→</span>
                          </a>
                        </div>
                      ))}
                    </nav>
                  </div>

                  {/* Drawer Footer / Contact Info */}
                  <div className="border-t border-primary/10 pt-6 space-y-5">
                    <a href="mailto:ash.shafi.medicalcenter2025@gmail.com" className="flex items-center gap-3 text-sm text-foreground/80 hover:text-primary transition-colors group">
                      <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                        <Mail size={15} className="text-primary" />
                      </div>
                      <span className="break-all font-medium">ash.shafi.medicalcenter2025@gmail.com</span>
                    </a>
                    
                    {/* Phone Section */}
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <span className="font-bold text-xs text-primary/60 tracking-wider uppercase block">Main Branch:</span>
                        <div className="grid grid-cols-1 gap-2 pl-2">
                          <a href="tel:+8801346694684" className="flex items-center gap-2.5 text-sm font-semibold text-foreground/80 hover:text-primary transition-colors hover:translate-x-0.5 duration-200">
                            <Phone size={14} className="text-primary" />
                            <span className="font-mono">+8801346694684</span>
                          </a>
                          <a href="tel:+8801992568186" className="flex items-center gap-2.5 text-sm font-semibold text-foreground/80 hover:text-primary transition-colors hover:translate-x-0.5 duration-200">
                            <Phone size={14} className="text-primary" />
                            <span className="font-mono">+8801992568186</span>
                          </a>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <span className="font-bold text-xs text-primary/60 tracking-wider uppercase block">Second Branch:</span>
                        <div className="pl-2">
                          <a href="tel:+8801302718107" className="flex items-center gap-2.5 text-sm font-semibold text-foreground/80 hover:text-primary transition-colors hover:translate-x-0.5 duration-200">
                            <Phone size={14} className="text-primary" />
                            <span className="font-mono">+8801302718107</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    {/* Location Section */}
                    <div className="flex flex-col gap-3 pt-3 border-t border-primary/5">
                      <a 
                        href="https://maps.app.goo.gl/HDDKx5RYQjp3m3Xx7" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-start gap-3 hover:text-primary transition-colors group"
                      >
                        <MapPin size={15} className="mt-0.5 shrink-0 text-primary group-hover:scale-110 transition-transform" />
                        <div>
                          <span className="font-bold text-[10px] text-primary/60 tracking-wider uppercase block">Main Branch Address</span>
                          <span className="text-xs text-foreground/70 font-medium group-hover:underline">2/5, 11.5 Pallabi Mirpur Dhaka-1216</span>
                        </div>
                      </a>
                      <a 
                        href="https://maps.app.goo.gl/wb19VtFE74UzaWSp8" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-start gap-3 hover:text-primary transition-colors group"
                      >
                        <MapPin size={15} className="mt-0.5 shrink-0 text-primary group-hover:scale-110 transition-transform" />
                        <div>
                          <span className="font-bold text-[10px] text-primary/60 tracking-wider uppercase block">Second Branch Address</span>
                          <span className="text-xs text-foreground/70 font-medium group-hover:underline">House-56, Road-10, Block-D, Section-12, Pallabi, Dhaka</span>
                        </div>
                      </a>
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
