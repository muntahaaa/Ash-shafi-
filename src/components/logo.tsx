import React from 'react';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image src="/logo.png" alt="Ash Shafi Logo" width={32} height={32} />
      <span className="text-xl font-bold font-headline">
        Ash-Shafi Medical Center
      </span>
    </div>
  );
}
