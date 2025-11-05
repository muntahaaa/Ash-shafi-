"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export function ContactForm() {
  return (
    <Card className="bg-white shadow-md">
      <CardContent className="p-6">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
          <p className="text-gray-600">
            অ্যাপয়েন্টমেন্ট ও জিজ্ঞাসার জন্য, অনুগ্রহ করে সরাসরি আমাদের কল করুন।
          </p>
          <div className="mt-4">
            {[
              { phone: '+880 1346-694684' },
              { phone: '+880 1992-568186' },
            ].map((branch, idx) => (
              <p key={idx} className="font-medium">
                <a href={`tel:${branch.phone.replace(/\s+/g, '')}`} className="text-blue-600 hover:underline">
                  {branch.phone}
                </a>
              </p>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}