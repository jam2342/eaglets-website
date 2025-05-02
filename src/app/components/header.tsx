
'use client';
/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<null | string>(null);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
        {/* Logo + Title */}
        <div className="flex items-center gap-4">
          <Image src="/Logo.png" alt="Eaglets Logo" width={48} height={48} className="object-contain" />
          <h1 className="text-3xl font-bold text-black">
            <Link href="/" className="hover:text-blue-600 transition-colors duration-200">
              EAGLETS
            </Link>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-12 text-xl font-semibold text-black">
          {[
            { label: 'ABOUT', items: [{ href: '/about', text: 'About Us' }, { href: '/kits', text: 'About the Kits' }] },
            { label: 'PROGRAMS', items: [{ href: '/programs', text: 'Our Programs' }, { href: '/past-events', text: 'Past Events' }] },
            { label: 'JOIN', items: [{ href: '/join', text: 'Become a Volunteer' }, { href: '/sponsor', text: 'Become a Sponsor' }] },
            { label: 'RESOURCES', items: [
              { href: '/robotics-at-home', text: 'Robotics at Home' },
              { href: '/gallery', text: 'Gallery' }
            ]}
          ].map(({ label, items }) => (
            <div key={label} className="relative group">
              <button className="flex items-center gap-1 hover:text-blue-600 transition-colors duration-200">
                {label} <ChevronDown size={24} />
              </button>
              <div className="absolute top-full mt-2 w-60 bg-blue-500/90 rounded-md shadow-md text-white z-50
                              opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                              transition-all duration-300 ease-out">
                {items.map(({ href, text }) => (
                  <Link key={href} href={href} className="block px-5 py-3 text-base hover:bg-blue-600/90 rounded">
                    {text}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <Link href="/contact" className="hover:text-blue-600 transition-colors duration-200">
            CONTACT
          </Link>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            className="relative w-8 h-8 flex flex-col justify-between items-center group"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span
              className={`block h-[2px] w-full bg-black transition-transform duration-300 ${
                mobileOpen ? 'rotate-45 translate-y-[9px]' : ''
              }`}
            />
            <span
              className={`block h-[2px] w-full bg-black transition-all duration-300 ${
                mobileOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block h-[2px] w-full bg-black transition-transform duration-300 ${
                mobileOpen ? '-rotate-45 -translate-y-[9px]' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-full right-0 w-full bg-white z-50 shadow-xl transition-transform duration-500 ease-in-out transform ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="px-6 py-6 space-y-4 text-lg text-black max-h-fit overflow-hidden">
          <Link
            href="/"
            className="block font-bold text-blue-600 border-l-4 border-blue-500 pl-3 py-2"
          >
            HOME
          </Link>

          {[
            {
              id: 'about',
              label: 'ABOUT',
              links: [
                { href: '/about', text: 'About Us' },
                { href: '/kits', text: 'About the Kits' },
              ],
            },
            {
              id: 'programs',
              label: 'PROGRAMS',
              links: [
                { href: '/programs', text: 'Our Programs' },
                { href: '/past-events', text: 'Past Events' },
              ],
            },
            {
              id: 'join',
              label: 'JOIN',
              links: [
                { href: '/join', text: 'Become a Volunteer' },
                { href: '/sponsor', text: 'Become a Sponsor' },
              ],
            },
            {
              id: 'resources',
              label: 'RESOURCES',
              links: [
                { href: '/robotics-at-home', text: 'Robotics at Home' },
                { href: '/gallery', text: 'Gallery' },
              ],
            },
          ].map(({ id, label, links }) => (
            <div key={id}>
              <button
                onClick={() => setOpenSection(prev => (prev === id ? null : id))}
                className="w-full flex justify-between items-center font-bold py-2"
              >
                <span>{label}</span>
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openSection === id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openSection === id
                    ? 'max-h-60 opacity-100'
                    : 'max-h-0 opacity-0'
                } ml-2 space-y-2 text-base text-white bg-blue-500/90 px-4 py-2 rounded-md shadow`}
              >
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block hover:bg-blue-600/90 rounded-md px-2 py-2"
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <Link
            href="/contact"
            className="block font-bold py-2 hover:text-blue-600"
          >
            CONTACT
          </Link>
        </div>
      </div>
    </header>
  );
}
