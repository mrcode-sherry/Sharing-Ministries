"use client";
import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-8 py-16 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
        
        {/* 1️⃣ Logo & Description */}
        <div>
          <div className="flex items-center space-x-3">
            <img
              src="/logo/ministries-logo.png"
              alt="JSM Logo"
              className="h-16 w-16 rounded-full"
            />
            <span className="text-3xl font-bold text-white">JSM</span>
          </div>
          <p className="mt-4 text-base leading-relaxed">
            Jesus Sharing Ministries is dedicated to spreading love, hope, and faith. 
            Together, we serve communities and bring positive change.
          </p>
          <div className="flex space-x-5 mt-5">
            <Link href="https://facebook.com" target="_blank" 
              className="text-gray-300 hover:text-[#0085DD] transition-colors">
              <Facebook size={22} />
            </Link>
            <Link href="https://twitter.com" target="_blank" 
              className="text-gray-300 hover:text-[#0085DD] transition-colors">
              <Twitter size={22} />
            </Link>
            <Link href="https://instagram.com" target="_blank" 
              className="text-gray-300 hover:text-[#0085DD] transition-colors">
              <Instagram size={22} />
            </Link>
          </div>
        </div>

        {/* 2️⃣ Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">Contact</h3>
          <ul className="space-y-5 text-base">
            <li>
              <Link 
                href="/contact" 
                className="relative inline-block hover:text-[#0085DD] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#0085DD] hover:after:w-full after:transition-all after:duration-500"
              >
                Contact Page
              </Link>
            </li>
            <li>
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="mt-0.5 text-[#5BB7E6]" />
                <div>
                  <span className="font-semibold text-white block">Address:</span>
                  <span>5919 Trussville Crossings Pkwy, Birmingham AL 35235</span>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-start space-x-3">
                <Mail size={20} className="mt-0.5 text-[#5BB7E6]" />
                <div>
                  <span className="font-semibold text-white block">Email:</span>
                  <Link 
                    href="mailto:info@validtheme.com" 
                    className="relative inline-block hover:text-[#0085DD] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#0085DD] hover:after:w-full after:transition-all after:duration-500"
                  >
                    info@validtheme.com
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-start space-x-3">
                <Phone size={20} className="mt-0.5 text-[#5BB7E6]" />
                <div>
                  <span className="font-semibold text-white block">Phone:</span>
                  <Link 
                    href="tel:+12334598768" 
                    className="relative inline-block hover:text-[#0085DD] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#0085DD] hover:after:w-full after:transition-all after:duration-500"
                  >
                    +123 34598768
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* 3️⃣ Explore Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">Explore</h3>
          <ul className="space-y-3 text-base">
            {[
              { name: "Home", link: "/" },
              { name: "About", link: "/about" },
              { name: "Ministries", link: "/ministries" },
              { name: "Contact", link: "/contact" },
              { name: "Donate", link: "/donate" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  className="relative inline-block hover:text-[#0085DD] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#0085DD] hover:after:w-full after:transition-all after:duration-500"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 4️⃣ Donate Section */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">Support Us</h3>
          <p className="text-base mb-6 leading-relaxed">
            Your support helps us continue our mission. Every donation makes a difference.
          </p>
          <Link 
            href="/donate" 
            className="inline-block bg-[#0085DD] text-white font-medium px-6 py-3 rounded-lg shadow transition-transform duration-300 hover:scale-105"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
