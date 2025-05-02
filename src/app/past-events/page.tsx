
'use client';

import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true, amount: 0.3 }
};

export default function PastEvents() {
  return (
    <main className="w-full overflow-hidden text-black bg-white">

      {/* Hero */}
      <section className="w-full h-[60vh] bg-cover bg-center relative" style={{ backgroundImage: "url('/kits/kits-banner.jpg')" }}>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-5xl sm:text-7xl font-extrabold text-white drop-shadow-lg">PAST EVENTS</h1>
        </div>
      </section>
      <WaveDivider fill="fill-cyan-100" />

      {/* Past Events List */}
      <section className="w-full bg-cyan-100 py-20">
        <div className="max-w-5xl mx-auto px-4 space-y-10">
          {events.map((event, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              className="flex items-start gap-4 bg-white/80 rounded-xl shadow-md p-6 backdrop-blur-md"
            >
              <div className="w-20 text-center font-bold text-blue-700">
                <div className="text-xl">{event.month}</div>
                <div className="text-2xl">{event.day}</div>
              </div>
              <div>
                <h3 className="text-blue-700 font-semibold text-lg">{event.title}</h3>
                <p className="text-gray-800 text-sm mt-1">{event.description}</p>
              </div>
            </motion.div>
          ))}
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

const events = [
  {
    month: "July",
    day: "26",
    title: "SUMMER ROBOTICS CAMP 2021",
    description: "In this five day online camp, rising 5th and 6th graders were introduced to basic robotics through custom 3D-printed Arduino robot kits. Each student was provided with a robot kit, and students learned about the components of the kit and how to program a robot to perform various driving maneuvers."
  },
  {
    month: "Sep",
    day: "18",
    title: "FALL ROBOTICS CAMP 2021",
    description: "In this in-person camp, 4th through 6th graders were introduced to basic robotics through custom 3D-printed Arduino robot kits. During the camp, each student was provided with a robot kit, and students will learn about the components of the kit and how to program a robot to perform various driving maneuvers."
  },
  {
    month: "Jun",
    day: "22",
    title: "SUMMER NEW MEXICO CAMP 2022",
    description: "In this in-person camp at a Native American reservation in New Mexico, 4th through 6th graders were introduced to basic electrical engineering through Arduino kits. Free-of-charge, over 30 students learned in a course of 3 days the basics of programming and engineering."
  },
  {
    month: "Jan",
    day: "14",
    title: "SPRING ROBOTICS CAMP 2023",
    description: "In this camp, we unveiled our second kit iteration. Students in this 7-week camp learned to use the ultrasonic distance sensor and the light-dependent resistor to maneuver their robot through an obstacle course."
  }
];

function WaveDivider({ fill }: { fill: string }) {
  return (
    <div className="w-full overflow-hidden -mb-1">
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className={`w-full h-16 ${fill}`}>
        <path d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"></path>
      </svg>
    </div>
  );
}
