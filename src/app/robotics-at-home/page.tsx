'use client';

import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true, amount: 0.3 }
};

export default function RoboticsAtHome() {
  return (
    <main className="w-full overflow-hidden text-black bg-white">

      {/* Hero */}
      <section className="w-full h-[60vh] bg-cover bg-center relative" style={{ backgroundImage: "url('/kits/kits-banner.jpg')" }}>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl sm:text-7xl font-extrabold text-white drop-shadow-lg text-center px-4">ROBOTICS AT HOME</h1>
        </div>
      </section>
      <WaveDivider fill="fill-blue-100" />

      {/* Instructions Section */}
      <section className="w-full bg-blue-100 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeInUp} className="bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">2023 Spring Camp Instructions</h2>
            <a
              href="https://drive.google.com/drive/folders/1YgyBaGCfqMxsofkoEzwSzBkKCVGv3Wvs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-indigo-700 font-semibold underline hover:text-indigo-900 transition"
            >
              Link to instructions
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