'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Mail, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-white/10 backdrop-blur-md border-t border-white/10 text-white px-4 pt-8 pb-6">
      {/* Info Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 text-sm">
        
        {/* ABOUT */}
        <div>
          <h4 className="font-bold mb-2 text-base">ABOUT</h4>
          <ul className="space-y-1 text-white/80 text-sm">
            <li><Link href="/programs">Our Programs</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><a href="https://team5417.com" target="_blank" rel="noopener noreferrer">Eagle Robotics</a></li>
          </ul>
        </div>

        {/* JOIN US */}
        <div>
          <h4 className="font-bold mb-2 text-base">JOIN US</h4>
          <ul className="space-y-1 text-white/80 text-sm">
            <li><Link href="/join">Become a Volunteer</Link></li>
            <li><Link href="/sponsor">Become a Sponsor</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-bold mb-2 text-base">CONTACT US</h4>
          <p className="text-white/80 text-sm">
            <a href="mailto:eaglets.kits@gmail.com">eaglets.kits@gmail.com</a>
          </p>
          <p className="text-white/80 text-sm">
            <a href="https://instagram.com/eaglets.kits" target="_blank" rel="noopener noreferrer">
              @eaglets.kits
            </a>
          </p>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex flex-col items-center lg:items-end justify-center space-y-2">
          <div className="flex space-x-4">
            <a href="mailto:eaglets.kits@gmail.com">
              <Mail className="w-5 h-5 text-white hover:text-blue-400 transition" />
            </a>
            <a href="https://instagram.com/eaglets.kits" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 text-white hover:text-pink-500 transition" />
            </a>
          </div>
          <p className="text-xs text-white/70 text-center lg:text-right">
            Eaglets: Robot Kits for Kids
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 my-4" />

      {/* Logo and Copyright */}
      <div className="flex flex-col items-center space-y-2 text-white/70 text-xs">
        <Image
          src="/Logo.png"
          alt="Eaglets Logo"
          width={30}
          height={30}
        />
        <p>© 2025 Team 5417 EAGLETS, Jamal Mammadzada. All rights reserved.</p>
      </div>
    </footer>
  );
}
