import React from 'react'

const Hero = () => {
  return (
    <div className="relative w-full h-[120vh]">
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
      <div className="absolute top-0 left-0 w-full h-full bg-black/80 z-10"></div>

      {/* Text Content */}
      <div className="relative z-20 flex items-center h-full px-8 md:px-20">
        <div className="text-white max-w-3xl space-y-4 sm:space-y-6">
          {/* Small Heading */}
          <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-200 tracking-wide">
            Empowering Communities Together
          </h3>

          {/* Main Heading */}
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold whitespace-nowrap">
            Welcome to Our Website
          </h1>

          {/* Paragraph */}
          <p className="text-base sm:text-lg md:text-2xl leading-relaxed">
            This is a responsive hero section with a fullscreen video background and overlay. 
            Explore our work, join our mission, and be part of something impactful.
          </p>

          {/* Button */}
          <div>
            <button className="px-5 py-2 sm:px-6 sm:py-3 bg-[#5BB7E6] hover:bg-[#0085DD] text-white font-semibold rounded-lg text-base sm:text-lg transition duration-300 shadow-lg cursor-pointer w-auto sm:w-auto">
              Explore Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
