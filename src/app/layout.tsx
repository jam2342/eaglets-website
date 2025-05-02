import './globals.css';
import type { Metadata } from 'next';
import Header from './components/header';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'EAGLETS',
  description: 'Official robotics team site',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gradient-to-br from-black to-black text-black overflow-x-hidden">
        {/* Sticky Header */}
        <Header />

        {/* Expandable Main Content */}
        <main className="flex-grow pt-20">
          {children}
        </main>

        {/* Footer Stays at Bottom */}
        <Footer />
      </body>
    </html>
  );
}
