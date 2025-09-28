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
            For appointments and inquiries, please call us directly.
          </p>
          <div className="mt-4">
            <p className="font-medium">Phone: +880 1346-694684</p>
              <p className="font-medium">Phone: +880 1992-568186 </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}