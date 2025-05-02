'use client';

import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true, amount: 0.3 }
};

export default function Programs() {
  return (
    <main className="w-full overflow-hidden text-black bg-white">

      {/* Hero */}
      <section className="w-full h-[60vh] bg-cover bg-center relative" style={{ backgroundImage: "url('/kits/kits-banner.jpg')" }}>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-5xl sm:text-7xl font-extrabold text-white drop-shadow-lg">PROGRAMS</h1>
        </div>
      </section>
      <WaveDivider fill="fill-cyan-100" />

      {/* Winter Camp */}
      <section className="w-full bg-cyan-100 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div {...fadeInUp} className="bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-xl">
            <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">2026 WINTER CAMP</h2>
            <p className="text-gray-800 leading-relaxed">
              Join us in our 2026 winter camp, where we will unveil the 3rd iteration of our kit.
              The new kit will feature an upgraded distance sensor, better line following, and gesture/color detection,
              which students will learn to program over a span of 7 weeks.
            </p>
            <p className="mt-4 text-gray-800 font-semibold">
              Dates: Every Saturday from January 13 to February 24, 10:00 AM – 12:00 PM<br />
              Cost: $60<br />
              Location: AISD STEAM Center Makerspace
            </p>
            <div className="text-center mt-6">
              <a href="/join" className="px-6 py-2 text-blue-600 font-bold border-2 border-blue-500 rounded-full hover:bg-blue-100 transition">REGISTER</a>
            </div>
          </motion.div>
        </div>
        <WaveDivider fill="fill-yellow-100" />
      </section>

      {/* Summer Camp */}
      <section className="w-full bg-yellow-100 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div {...fadeInUp} className="bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-xl">
            <h2 className="text-2xl font-bold text-center text-yellow-600 mb-4">2025 SUMMER CAMP</h2>
            <p className="text-gray-800 leading-relaxed">
              Our summer camp is an exciting opportunity for students to dive into robotics during the school break.
              Campers will work with our Eaglets kits to learn programming, teamwork, and problem-solving in a fun, hands-on environment.
            </p>
            <p className="mt-4 text-gray-800 font-semibold">
              Dates: July 8 to July 26, Monday–Friday, 9:00 AM – 12:00 PM<br />
              Cost: $75<br />
              Location: Allen High School Tech Lab
            </p>
            <div className="text-center mt-6">
              <a href="/join" className="px-6 py-2 text-yellow-700 font-bold border-2 border-yellow-600 rounded-full hover:bg-yellow-100 transition">REGISTER</a>
            </div>
          </motion.div>
        </div>
        <WaveDivider fill="fill-indigo-100" />
      </section>

      {/* CTA Section */}
      <section className="w-full bg-indigo-100 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div {...fadeInUp} className="bg-white/80 backdrop-blur-md p-10 text-center rounded-3xl shadow-xl">
            <h2 className="text-2xl font-bold text-indigo-700 mb-6">LEARN MORE ABOUT THE ROBOT KITS</h2>
            <a href="/kits" className="inline-block px-8 py-3 text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition">
              ABOUT THE KITS
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