'use client';

import Image from 'next/image';
import ParticlesBackground from '@/app/components/Particles';

const alumniData = [
  {
    year: '2023',
    members: [
      {
        name: 'Hannah X',
        role: 'Co-founder & Vice President',
        bio: 'Built the team from the ground up while discovering a passion for circuits and public speaking. Now an electrical engineering major and Peer Instructor at Georgia Tech’s ECE makerspace.',
      },
      {
        name: 'Jenny',
        role: 'President (2022–2023)',
        bio: 'Led Eaglets from a scrappy startup to a structured program. Gained leadership and teaching skills that she now applies as a CS course TA at Stanford.',
      },
    ],
  },
];


export default function AlumniPage() {
  return (
    <main className="relative w-full min-h-screen bg-gradient-to-br from-[#fff6e8] to-[#ffe5dc] px-4 pt-32 pb-20 flex flex-col items-center overflow-hidden">
      <ParticlesBackground />

      {/* Header */}
      <section className="max-w-4xl w-full mb-12 text-center">
        <div className="relative bg-orange-600 text-white py-20 rounded-3xl shadow-xl bg-[url('/contact-bg.jpg')] bg-cover bg-center backdrop-blur-md">
          <h1 className="text-5xl sm:text-6xl font-extrabold drop-shadow-md">
            EAGLETS ALUMNI
          </h1>
        </div>

        <p className="mt-10 px-6 text-black text-xl font-medium leading-relaxed">
          Celebrating the students who helped shape our legacy. Our alumni have gone on to pursue excellence in engineering, education, and beyond.
        </p>
      </section>

      {/* Alumni Sections */}
      <div className="w-full max-w-5xl space-y-16">
        {alumniData.map((yearGroup) => (
          <section key={yearGroup.year} className="bg-white/80 backdrop-blur-md rounded-3xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-orange-600 mb-6">{yearGroup.year}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {yearGroup.members.map((alum, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <Image
                    src="/avatar-placeholder.png"
                    alt={alum.name}
                    width={64}
                    height={64}
                    className="rounded-full bg-gray-200 object-cover mt-1"
                  />
                  <div>
                    <p className="text-lg font-semibold text-gray-800">{alum.name}</p>
                    <p className="text-sm text-gray-600 italic">{alum.role}</p>
                    <p className="text-sm text-gray-700 mt-2">{alum.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
