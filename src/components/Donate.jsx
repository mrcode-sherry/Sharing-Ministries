import React from 'react'

const Donate = () => {
  return (
    <div className="px-8 md:px-20 py-12">
            {/* Section Heading */}
            <div className="text-center mb-12">
                <p className="text-[#5BB7E6] uppercase tracking-widest text-[18px] font-bold">
                    Donate Us
                </p>
                <h2 className="text-2xl md:text-[40px] w-full md:w-[600px] mx-auto font-semibold text-black mt-2">
                    Explore our impactful Minsitries around the world
                </h2>

                {/* Decorative underline */}
                <div className="flex justify-center mt-4">
                    <span className="w-8 h-1 bg-[#5BB7E6] rounded-full mx-1"></span>
                    <span className="w-4 h-1 bg-[#5BB7E6] rounded-full mx-1"></span>
                </div>
            </div>
        </div>
  )
}

export default Donate
