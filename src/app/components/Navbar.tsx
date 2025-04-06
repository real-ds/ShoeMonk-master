'use client';
import Link from 'next/link';
import { Inter, Anton } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400'],
  display: 'swap',
});

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const Navbar = () => {
  return (
    <>
      {/* Placeholder div to prevent content from hiding behind fixed navbar */}
      <div className="h-16"></div>
      
      {/* Fixed Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md ${inter.className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href='/'></Link>
              
              <Image
                src="/images/ShoeMonk (11).png"
                alt="The ShoeMonk Logo"
                width={400}
                height={100}
                className="object-contain relative"
                priority
              />
            </div>
            
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-lg font-light text-gray-800 hover:text-gray-600 transition-colors">
                Home
              </Link>
              <Link href="/explore" className="text-lg font-light text-gray-800 hover:text-gray-600 transition-colors">
                Explore
              </Link>
              <Link href="/about" className="text-lg font-light text-gray-800 hover:text-gray-600 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-lg font-light text-gray-800 hover:text-gray-600 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar; 