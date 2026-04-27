import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div style={{ lineHeight: 0, fontSize: 0 }} className="w-full md:h-screen md:overflow-hidden">
      <div style={{ lineHeight: 0, fontSize: 0 }} className="relative w-full md:h-full">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{ display: 'block', lineHeight: 0, fontSize: 0 }}
          className="w-full md:absolute md:top-0 md:left-0 md:w-full md:h-full md:object-cover z-0"
        >
          <source src="/video/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay - hidden on mobile, visible on md+ */}
        <div className="hidden md:block absolute inset-0 bg-black/40 z-10"></div>
      </div>
    </div>
  )
}

export default Hero