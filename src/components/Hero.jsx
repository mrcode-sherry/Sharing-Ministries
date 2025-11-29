import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className="relative w-full h-screen md:h-[120vh]">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/video/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>

      {/* Text Content */}
      <div className="relative z-20 flex items-center justify-center md:justify-start h-full px-6 md:px-20">
        <div className="text-white max-w-3xl space-y-3 sm:space-y-4 md:space-y-6 text-center md:text-left">
          {/* Small Heading */}
          <h3 className="text-base sm:text-lg md:text-2xl font-medium text-gray-100 tracking-wide">
            Empowering Communities Together
          </h3>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            Welcome to Our Website
          </h1>

          {/* Paragraph */}
          <p className="text-sm sm:text-base md:text-2xl leading-relaxed text-gray-100">
            This is a responsive hero section with a fullscreen video background and overlay. 
            Explore our work, join our mission, and be part of something impactful.
          </p>

          {/* Button */}
          <div className="pt-2">
            <Link href="/ministries">
            <button className="px-6 py-3 sm:px-7 sm:py-3 md:px-8 md:py-4 bg-[#5BB7E6] hover:bg-[#0085DD] text-white font-semibold rounded-lg text-sm sm:text-base md:text-lg transition duration-300 shadow-lg cursor-pointer">
              Explore Ministries
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
