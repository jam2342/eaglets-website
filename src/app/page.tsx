'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ParticlesBackground from './components/Particles';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true, amount: 0.3 }
};

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-gradient-to-br from-orange-400 to-orange-700 pt-8 overflow-hidden">
      <ParticlesBackground />

      {/* Fullscreen Banner Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full h-screen"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/Banner.jpg"
            alt="Team Eaglets Banner"
            fill
            className="object-cover w-full h-full"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-black/40 z-10" />

        <div className="absolute inset-0 z-20 flex items-center justify-center px-6">
          <div className="backdrop-blur-lg bg-white/30 border border-white/40 rounded-xl px-6 py-8 text-center shadow-md">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white drop-shadow">
              Eaglets: Robot Kits for Kids
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-white/90">
              {"Building the future of robotics, one line of code at a time."}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Intro Section */}
      <section className="w-full bg-gradient-to-br from-blue-50/60 to-blue-100/60">
        <div className="w-full max-w-7xl mx-auto py-20">
          <motion.div {...fadeInUp} className="bg-white/80 backdrop-blur-md rounded-3xl p-10 text-center shadow-xl mx-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-600 mb-6 leading-tight">
              STEP INTO THE WORLD OF ENGINEERING AND PROGRAMMING
            </h2>
            <p className="text-lg sm:text-xl text-gray-800 leading-relaxed mb-6">
              {"Eaglets: Robot Kits for Kids is a student-run organization that encourages children to explore engineering and technology through robot kits. Our organization was established by students from Allen High School's Eagle Robotics team, who designed 3D-printed robot kits and developed a curriculum aimed at teaching students the fundamentals of building and programming robots. Throughout the year, we host various events in order to provide students from all backgrounds with the opportunity to develop STEM skills."}
            </p>
            <motion.a
              href="#programs"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-4 px-8 py-3 text-lg font-bold text-blue-600 border-4 border-blue-500 rounded-full transition hover:bg-blue-100"
            >
              <a href="/programs">OUR PROGRAMS</a>
            </motion.a>
          </motion.div>
          <div className="w-full h-[2px] bg-blue-200 mt-16 rounded-full" />
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="w-full bg-gradient-to-br from-orange-50/60 to-orange-100/60">
        <div className="w-full max-w-7xl mx-auto py-20">
          <motion.div {...fadeInUp} className="bg-white/80 backdrop-blur-md rounded-3xl p-10 text-center shadow-xl mx-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-orange-500 mb-10">
              SPONSORS AND PARTNERS
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-12">
              <div className="flex flex-col items-center space-y-2">
                <Image src="/eaglerobotics-logo.png" alt="Eagle Robotics Logo" width={100} height={100} />
                <h3 className="text-lg font-semibold text-black">Eagle Robotics</h3>
                <p className="text-sm text-red-700 font-semibold">FRC Team 5417</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Image src="/home-depot-logo.webp" alt="The Home Depot" width={100} height={100} className="rounded-lg shadow" />
                <h3 className="text-lg font-semibold text-black">The Home Depot</h3>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Image src="/best-robotics-logo.png" alt="BEST Robotics Logo" width={100} height={100} />
                <h3 className="text-lg font-semibold text-black">BEST Robotics</h3>
              </div>
            </div>
          </motion.div>
          <div className="w-full h-[2px] bg-orange-200 mt-16 rounded-full" />
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="w-full bg-gradient-to-br from-indigo-50/60 to-indigo-100/60">
        <div className="w-full max-w-7xl mx-auto py-20">
          <motion.div {...fadeInUp} className="bg-white/80 backdrop-blur-md rounded-3xl p-10 text-center shadow-xl mx-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-6">Get Involved</h2>
            <p className="text-gray-800 text-lg mb-8">
              {"Join us in building the future. Whether you're a student, parent, sponsor, or mentor — there's a place for you at Eaglets."}
            </p>
            <a
              href="/join"
              className="inline-block px-8 py-3 text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition"
            >
              Join Us
            </a>
          </motion.div>
          <div className="w-full h-[2px] bg-indigo-200 mt-16 rounded-full" />
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="w-full bg-gradient-to-br from-yellow-50/60 to-yellow-100/60">
        <div className="w-full max-w-7xl mx-auto py-20">
          <motion.div {...fadeInUp} className="bg-white/80 backdrop-blur-md rounded-3xl p-10 text-center shadow-xl mx-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-6">Upcoming Events</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-10 rounded-full" />
            <ul className="space-y-6 text-center max-w-2xl mx-auto">
              <li className="flex items-center justify-center gap-3">
                <span className="text-2xl">📌</span>
                <p className="text-lg text-gray-800"><strong>May 27th-29th</strong> -Carrolton</p>
              </li>
              <li className="flex items-center justify-center gap-3">
                <span className="text-2xl">📌</span>
                <p className="text-lg text-gray-800"><strong>June 2nd-5th</strong> -Chillicothe</p>
              </li>
              <li className="flex items-center justify-center gap-3">
                <span className="text-2xl">📌</span>
                <p className="text-lg text-gray-800"><strong>June 16th-20th</strong> -Lancaster</p>
              </li>
              <li className="flex items-center justify-center gap-3">
                <span className="text-2xl">📌</span>
                <p className="text-lg text-gray-800"><strong>June 23rd-26th</strong> -Desoto</p>
              </li>
              <li className="flex items-center justify-center gap-3">
                <span className="text-2xl">📌</span>
                <p className="text-lg text-gray-800"><strong>June 23rd-26th</strong> -Harlandale</p>
              </li>
              <li className="flex items-center justify-center gap-3">
                <span className="text-2xl">📌</span>
                <p className="text-lg text-gray-800"><strong>July 7th-10th</strong> -El Paso</p>
              </li>
            </ul>
          </motion.div>
          <div className="w-full h-[2px] bg-yellow-200 mt-16 rounded-full" />
        </div>
      </section>
    </main>
  );
}
