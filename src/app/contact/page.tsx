'use client';

import { Mail, Instagram, Globe } from 'lucide-react';
import Image from 'next/image';
import ParticlesBackground from '../components/Particles';

export default function Contact() {
  return (
    <main className="relative w-full min-h-screen bg-gradient-to-br from-[#e8faff] to-[#d0e6ff] px-4 pt-32 pb-20 flex flex-col items-center justify-start overflow-hidden">

      {/* Background Effects */}
      <ParticlesBackground />

      {/* Header Section */}
      <section className="max-w-4xl w-full mb-12 text-center">
        <div className="relative bg-blue-700 text-white py-20 rounded-3xl shadow-xl bg-[url('/contact-bg.jpg')] bg-cover bg-center backdrop-blur-md">
          <h1 className="text-5xl sm:text-6xl font-extrabold drop-shadow-md">
            CONTACT US
          </h1>
        </div>

        <div className="mt-10 px-6 text-black text-xl font-semibold leading-relaxed">
          Do you have any questions, comments, or concerns? Reach out using one of the methods below, and we’ll respond as soon as possible.
        </div>
      </section>

      {/* Contact Info Cards */}
      <div className="w-full max-w-3xl flex flex-col gap-6 px-6">
        {/* Instagram */}
        <a
          href="https://instagram.com/eaglets.kits"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between bg-[#3d8ef5] text-white font-semibold px-6 py-5 rounded-full shadow-md hover:scale-[1.03] transition-transform duration-200"
        >
          <div>
            FOLLOW US ON INSTAGRAM FOR UPDATES.<br />
            <span className="underline font-bold">@eaglets.kits</span>
          </div>
          <Instagram className="w-8 h-8 ml-4" />
        </a>

        {/* Email */}
        <a
          href="mailto:eaglets.kits@gmail.com"
          className="flex items-center justify-between bg-[#3d8ef5] text-white font-semibold px-6 py-5 rounded-full shadow-md hover:scale-[1.03] transition-transform duration-200"
        >
          <div>
            QUESTIONS OR FEEDBACK? EMAIL US.<br />
            <span className="underline font-bold">eaglets.kits@gmail.com</span>
          </div>
          <Mail className="w-8 h-8 ml-4" />
        </a>

        {/* Eagle Robotics Website */}
        <a
          href="https://team5417.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between bg-[#3d8ef5] text-white font-semibold px-6 py-5 rounded-full shadow-md hover:scale-[1.03] transition-transform duration-200"
        >
          <div>
            LEARN MORE ABOUT OUR FRC TEAM, EAGLE ROBOTICS.<br />
            <span className="underline font-bold">team5417.com</span>
          </div>
          <Globe className="w-8 h-8 ml-4" />
        </a>
      </div>
    </main>
  );
}
