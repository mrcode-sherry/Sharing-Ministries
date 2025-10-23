'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false); // controls mounting of overlay + drawer
  const [isOpen, setIsOpen] = useState(false); // controls animation state
  const closeTimeout = useRef(null);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Ministries', href: '/ministries' },
    { name: 'Contact', href: '/contact' },
  ];

  const openMenu = () => {
    // mount first, then trigger animate-on
    setIsMounted(true);
    // small delay to ensure initial classes applied before toggling open (for CSS transition)
    window.setTimeout(() => setIsOpen(true), 20);
  };

  const closeMenu = () => {
    // start closing animation
    setIsOpen(false);
    // after animation finishes, unmount
    if (closeTimeout.current) window.clearTimeout(closeTimeout.current);
    closeTimeout.current = window.setTimeout(() => {
      setIsMounted(false);
    }, 500); // match transition duration
  };

  // cleanup on unmount
  useEffect(() => {
    return () => {
      if (closeTimeout.current) window.clearTimeout(closeTimeout.current);
    };
  }, []);

  return (
    <nav className="bg-white shadow-md sticky top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-8 py-2 md:px-10">
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

          {/* Center: Links (Desktop) */}
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

          {/* Right: Donation button (Desktop) */}
          <div className="hidden md:block">
            <Link
              href="/donate"
              className="bg-[#5BB7E6] hover:bg-[#0085DD] text-white px-5 py-2 rounded-lg font-semibold transition-colors duration-300"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button - only show when drawer is not mounted */}
          <div className="md:hidden flex items-center">
            {!isMounted && (
              <button className='text-black' onClick={openMenu} aria-label="Open menu">
                <Menu size={28} className='text-black'/>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Drawer + Overlay (mounted while open or animating) */}
      {isMounted && (
        <div className="fixed inset-0 z-[9999]">
          {/* Overlay */}
          <div
            className={`fixed inset-0 bg-black transition-opacity duration-500 ${
              isOpen ? 'opacity-70 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
            onClick={closeMenu}
          />

          {/* Sidebar Drawer */}
          <aside
            className={`relative bg-white w-[70%] h-screen shadow-lg transform transition-transform duration-500 z-[10000] ${
              isOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            {/* Drawer Header (logo + name) */}
            <div className="flex items-center justify-between px-6 py-5 border-b">
              <Link href="/" onClick={closeMenu} className="flex items-center space-x-3">
                <img
                  src="/logo/ministries-logo.png"
                  alt="JSM Logo"
                  className="h-12 w-12 rounded-full"
                />
                <span className="font-bold text-xl text-black tracking-wide">JSM</span>
              </Link>

              {/* Close Button (only inside drawer) */}
              <button
                onClick={closeMenu}
                aria-label="Close menu"
                className="text-gray-700"
              >
                <X size={28} />
              </button>
            </div>

            {/* Nav Links */}
            <div className="px-6 py-8 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="block px-3 py-3 rounded-md text-gray-700 font-medium transition-all duration-300 hover:text-white hover:bg-[#5BB7E6]"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="/donate"
                onClick={closeMenu}
                className="block px-3 py-3 rounded-md bg-[#5BB7E6] text-white hover:bg-[#0085DD] font-semibold transition-colors duration-300 text-center"
              >
                Donate
              </Link>
            </div>
          </aside>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
