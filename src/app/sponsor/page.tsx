'use client';
/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true, amount: 0.3 }
};

export default function sponsor() {
  return (
    <main className="w-full overflow-hidden text-black bg-white">

      {/* Hero */}
      <section className="w-full h-[60vh] bg-cover bg-center relative" style={{ backgroundImage: "url('/kits/kits-banner.jpg')" }}>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-5xl sm:text-7xl font-extrabold text-white drop-shadow-lg">BECOME A SPONSOR</h1>
        </div>
      </section>
      <WaveDivider fill="fill-orange-100" />

      {/* Sponsor Content */}
      <section className="w-full bg-orange-100 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div {...fadeInUp} className="bg-white/80 backdrop-blur-md p-10 text-center rounded-3xl shadow-xl">
            <h2 className="text-3xl font-bold text-orange-600 mb-4">Support Future Engineers</h2>
            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              By sponsoring Eaglets, you're not just supporting a robotics team — you're investing in the future of education, engineering, and youth leadership.
              Your contributions help us provide affordable robotics kits, host educational events, and reach more students from underserved communities.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              We gratefully accept support in the form of funding, tools, materials, or outreach collaboration. Sponsoring Eaglets is a meaningful way to give back
              and get involved in the development of young STEM minds.
            </p>
            <a href="mailto:eaglets.kits@gmail.com" className="inline-block px-8 py-3 text-lg font-bold text-white bg-orange-600 rounded-full hover:bg-orange-700 transition">
              CONTACT US TO SPONSOR
            </a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdMSy_ejC85Gc2rzCqBhpPWYNX-zrbAJ-RY4JQm0zgAMVpA2Q/viewform"  className="inline-block px-8 py-3 text-lg font-bold text-white bg-orange-600 rounded-full hover:bg-orange-700 transition">
              OR FILL THIS FORM OUT
            </a>
          </motion.div>
        </div>
      </section>

    </main>
  );
}

function WaveDivider({ fill }: { fill: string }) {
  return (
    <div className="w-full overflow-hidden -mb-1">
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className={`w-full h-16 ${fill}`}>
        <path d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"></path>
      </svg>
    </div>
  );
}