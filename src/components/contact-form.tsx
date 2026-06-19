"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Calendar, Clock } from 'lucide-react';

export function ContactForm() {
  return (
    <Card className="overflow-hidden border border-primary/15 bg-card/70 backdrop-blur-md shadow-xl shadow-primary/5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 rounded-3xl">
      {/* Top accent bar */}
      <div className="bg-gradient-to-r from-primary/40 via-primary to-primary/40 h-2 w-full"></div>
      
      <CardHeader className="text-center pb-2 pt-6">
        <div className="mx-auto bg-primary/10 p-3.5 rounded-full w-fit mb-3 text-primary animate-pulse-gentle">
          <Calendar className="h-6 w-6" />
        </div>
        <CardTitle className="font-headline text-2xl font-bold text-foreground">
          Direct Booking
        </CardTitle>
        <p className="text-sm text-foreground/80 font-medium pt-2 px-2 leading-relaxed">
          অ্যাপয়েন্টমেন্ট বা যেকোনো অনুসন্ধানের জন্য অনুগ্রহ করে সরাসরি আমাদের ফোন করুন।
        </p>
      </CardHeader>
      
      <CardContent className="p-6 pt-4 space-y-6">
        {/* Main Branch Numbers */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-bold text-xs text-primary uppercase tracking-wider">Main Branch Serial</span>
            <span className="h-0.5 bg-primary/10 flex-grow ml-3"></span>
          </div>
          <div className="grid gap-3">
            <a 
              href="tel:+8801346694684" 
              className="flex items-center justify-between bg-primary/5 hover:bg-primary text-foreground hover:text-white border border-primary/10 hover:border-primary px-4 py-3 rounded-xl transition-all duration-300 font-mono font-bold text-sm md:text-base hover:scale-[1.02] active:scale-[0.98] group"
            >
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-primary group-hover:text-white transition-colors" />
                <span>+8801346694684</span>
              </div>
              <span className="text-[10px] bg-primary/15 group-hover:bg-white/20 text-primary group-hover:text-white px-2 py-0.5 rounded-full tracking-wide">CALL NOW</span>
            </a>
            <a 
              href="tel:+8801992568186" 
              className="flex items-center justify-between bg-primary/5 hover:bg-primary text-foreground hover:text-white border border-primary/10 hover:border-primary px-4 py-3 rounded-xl transition-all duration-300 font-mono font-bold text-sm md:text-base hover:scale-[1.02] active:scale-[0.98] group"
            >
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-primary group-hover:text-white transition-colors" />
                <span>+8801992568186</span>
              </div>
              <span className="text-[10px] bg-primary/15 group-hover:bg-white/20 text-primary group-hover:text-white px-2 py-0.5 rounded-full tracking-wide">CALL NOW</span>
            </a>
          </div>
        </div>

        {/* Second Branch Number */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <span className="font-bold text-xs text-primary uppercase tracking-wider">Second Branch Serial</span>
            <span className="h-0.5 bg-primary/10 flex-grow ml-3"></span>
          </div>
          <a 
            href="tel:+8801302718107" 
            className="flex items-center justify-between bg-primary/5 hover:bg-primary text-foreground hover:text-white border border-primary/10 hover:border-primary px-4 py-3 rounded-xl transition-all duration-300 font-mono font-bold text-sm md:text-base hover:scale-[1.02] active:scale-[0.98] group"
          >
            <div className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 text-primary group-hover:text-white transition-colors" />
              <span>+8801302718107</span>
            </div>
            <span className="text-[10px] bg-primary/15 group-hover:bg-white/20 text-primary group-hover:text-white px-2 py-0.5 rounded-full tracking-wide">CALL NOW</span>
          </a>
        </div>

        {/* Operating Hours Note */}
        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-4 flex gap-3 text-xs leading-relaxed text-foreground/80">
          <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-foreground block mb-0.5">Clinic Hours (সেবার সময়):</span>
            <span>সকাল ৮:০০ - রাত ১০:০০ পর্যন্ত (প্রতিদিন খোলা)</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}