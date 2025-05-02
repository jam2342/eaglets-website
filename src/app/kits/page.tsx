'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true, amount: 0.3 }
};

export default function Kits() {
  return (
    <main className="w-full overflow-hidden text-black bg-white">

      {/* Hero */}
      <section className="w-full h-[60vh] bg-cover bg-center relative" style={{ backgroundImage: "url('/kits/kits-banner.jpg')" }}>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-5xl sm:text-7xl font-extrabold text-white drop-shadow-lg">ABOUT THE KITS</h1>
        </div>
      </section>
      <WaveDivider fill="fill-cyan-100" />

      {/* Overview Section */}
      <section className="w-full bg-cyan-100 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div {...fadeInUp} className="bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-xl text-center">
            <p className="text-lg text-gray-800 leading-relaxed">
              Created by students from Allen High School’s FIRST Robotics Competition (FRC) team, our robot kits are designed to be beginner-friendly and adaptable.
              We use 3D-printing technology and wood laser cutting to create the majority of our kit components, allowing our kits to be economical compared to existing robot kits on the market.
              Each robot is powered by a Raspberry Pi microcontroller and is capable of driving autonomously.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed mt-6">
              Our kits are designed so that students can not only explore how to program robots, but also learn how robots are constructed.
            </p>
          </motion.div>
        </div>
        <WaveDivider fill="fill-sky-100" />
      </section>

      {/* Kit Versions */}
      <section className="w-full bg-sky-100 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">Kit Versions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
              {['v1', 'v2', 'v3'].map((version, index) => (
                <div key={version} className="bg-white/80 rounded-2xl p-6 shadow-md backdrop-blur">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">V{index + 1}</h3>
                  <Image
                    src={`/kits/${version}.jpg`}
                    alt={`Eaglets Kit ${version.toUpperCase()}`}
                    width={300}
                    height={200}
                    className="w-full h-auto rounded-lg object-contain"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <WaveDivider fill="fill-indigo-100" />
      </section>

      {/* CTA Section */}
      <section className="w-full bg-indigo-100 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div {...fadeInUp} className="bg-white/80 backdrop-blur-md p-10 rounded-3xl text-center shadow-xl">
            <h2 className="text-2xl font-bold text-indigo-700 mb-6">INTERESTED IN OUR KITS? CHECK OUT OUR PROGRAMS.</h2>
            <a href="/programs" className="inline-block px-8 py-3 text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition">
              OUR PROGRAMS
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