'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true, amount: 0.3 }
};

export default function About() {
  return (
    <main className="w-full overflow-hidden bg-white text-black">

      {/* Hero Section */}
      <section className="w-full h-[60vh] bg-cover bg-center relative" style={{ backgroundImage: "url('/banner-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-5xl sm:text-7xl font-extrabold text-white drop-shadow-lg">ABOUT US</h1>
        </div>
      </section>
      <WaveDivider fill="fill-blue-100" />

      {/* Mission / Who We Are */}
      <section className="w-full bg-blue-100 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div {...fadeInUp} className="bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-xl text-center">
            <p className="text-lg text-gray-800 leading-relaxed">
              <strong>Eaglets: Robot Kits for Kids</strong> is a student-run organization that encourages children to explore engineering and technology through robot kits. Our organization was established by students from Allen High School’s FIRST Robotics Competition (FRC) team. These members designed custom 3D-printed robot kits and developed a curriculum aimed at teaching students the fundamentals of building and programming robots.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed mt-6">
              Throughout the year, we host various events in order to provide students from all backgrounds with the opportunity to develop hands-on experience with robotics. These events include annual summer camps, robotics nights at local elementary schools, and community workshops.
            </p>
          </motion.div>
        </div>
        <WaveDivider fill="fill-orange-100" />
      </section>

      {/* Our Story Section */}
      <section className="w-full bg-orange-100 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div {...fadeInUp} className="bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-xl text-center">
            <h2 className="text-3xl font-bold text-orange-600 mb-4">Our Story</h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              What started as a local outreach initiative by students passionate about STEM education quickly evolved into a full-fledged program for kids. With the help of school mentors, donated materials, and creative 3D-printed parts, we began developing hands-on robotics kits that are safe, engaging, and educational. Today, our mission remains the same — empower the next generation through accessible robotics education.
            </p>
          </motion.div>
        </div>
        <WaveDivider fill="fill-indigo-100" />
      </section>

      {/* Leadership / Team Summary */}
      <section className="w-full bg-indigo-100 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div {...fadeInUp} className="bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-xl text-center">
            <h2 className="text-3xl font-bold text-indigo-600 mb-4">Our Leadership</h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              Our organization is entirely student-run and student-led. Every program, kit, and event is developed, managed, and delivered by passionate high school students. We believe in peer-driven leadership, giving students a platform to lead teams, teach younger learners, and contribute directly to our growing impact.
            </p>
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