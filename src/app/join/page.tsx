'use client';

import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true, amount: 0.3 }
};

export default function join() {
  return (
    <main className="w-full overflow-hidden text-black bg-white">

      {/* Hero */}
      <section className="w-full h-[60vh] bg-cover bg-center relative" style={{ backgroundImage: "url('/kits/kits-banner.jpg')" }}>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-5xl sm:text-7xl font-extrabold text-white drop-shadow-lg">JOIN US</h1>
        </div>
      </section>
      <WaveDivider fill="fill-sky-100" />

      {/* Why Join */}
      <section className="w-full bg-sky-100 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div {...fadeInUp} className="bg-white/80 backdrop-blur-md p-10 text-center rounded-3xl shadow-xl">
            <h2 className="text-3xl font-bold text-sky-700 mb-4">Why Join Eaglets?</h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              Whether you're a student, parent, or educator, joining Eaglets means being part of a growing movement that empowers kids through hands-on robotics.
              Help us build a stronger STEM foundation in your community by participating in our camps, supporting our initiatives, or simply spreading the word.
            </p>
          </motion.div>
        </div>
        <WaveDivider fill="fill-yellow-100" />
      </section>

      {/* Become a Volunteer */}
      <section className="w-full bg-yellow-100 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div {...fadeInUp} className="bg-white/80 backdrop-blur-md p-10 text-center rounded-3xl shadow-xl">
            <h2 className="text-3xl font-bold text-yellow-700 mb-4">Become a Volunteer</h2>
            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              Volunteers are the heart of Eaglets. Whether you're a high school student, college mentor, or industry professional, your time and talent can make a big difference.
              From teaching kids during camps to helping with 3D printing and curriculum design, there's a place for everyone.
            </p>
            <a href="mailto:eaglets.kits@gmail.com" className="inline-block px-8 py-3 text-lg font-bold text-white bg-yellow-600 rounded-full hover:bg-yellow-700 transition">
              SIGN UP TO VOLUNTEER
            </a>
          </motion.div>
        </div>
        <WaveDivider fill="fill-indigo-100" />
      </section>

      {/* CTA */}
      <section className="w-full bg-indigo-100 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div {...fadeInUp} className="bg-white/80 backdrop-blur-md p-10 text-center rounded-3xl shadow-xl">
            <h2 className="text-2xl font-bold text-indigo-700 mb-6">LEARN MORE ABOUT OUR ROBOTICS PROGRAMS</h2>
            <a href="/programs" className="inline-block px-8 py-3 text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition">
              SEE OUR PROGRAMS
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