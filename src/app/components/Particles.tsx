'use client';

import Image from 'next/image';

export default function ParticlesBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Floating icons */}
      <div className="absolute top-10 left-10 animate-float-slow opacity-30">
        <Image src="/Logo.png" alt="Robot Icon" width={50} height={50} />
      </div>
      <div className="absolute top-1/3 right-12 animate-float-medium opacity-40">
        <Image src="/Logo.png" alt="Robot Icon" width={40} height={40} />
      </div>
      <div className="absolute bottom-20 left-1/4 animate-float-fast opacity-30">
        <Image src="/Logo.png" alt="Robot Icon" width={30} height={30} />
      </div>
      <div className="absolute bottom-10 right-20 animate-float-medium opacity-20">
        <Image src="/Logo.png" alt="Robot Icon" width={45} height={45} />
      </div>
    </div>
  );
}
