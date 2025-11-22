import React from 'react';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image src="/Logo[2].png" alt="Ash Shafi Logo" width={60} height={60} />
      <span className="text-xl font-bold font-headline">
        Ash-Shafi Medical Center
      </span>
    </div>
  );
}
