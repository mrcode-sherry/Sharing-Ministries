'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Ministries', href: '/ministries' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-2 md:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Left: Logo + Name (Home Link) */}
          <Link href="/" className="flex justify-center items-center">
            <img
              src="/logo/ministries-logo.png"
              alt="JSM Logo"
              className="h-24 w-24 -ml-4 rounded-full -mr-2"
            />
            <span className="font-bold text-3xl text-black tracking-wide">
              JSM
            </span>
          </Link>

          {/* Center: Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-gray-700 font-semibold text-lg transition-colors duration-500 hover:text-[#0085DD] group"
              >
                {link.name}
                {/* Animated underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#0085DD] transition-all duration-500 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Right: Donation button */}
          <div className="hidden md:block">
            <Link
              href="/donate"
              className="bg-[#5BB7E6] hover:bg-[#0085DD] text-white px-5 py-2 rounded-lg font-semibold transition-colors duration-300"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-gray-700 font-medium transition-all duration-500 hover:text-white hover:bg-[#5BB7E6]"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/donate"
              className="block px-3 py-2 rounded-md bg-[#5BB7E6] text-white hover:bg-[#0085DD] font-semibold transition-colors duration-500"
              onClick={() => setIsOpen(false)}
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
