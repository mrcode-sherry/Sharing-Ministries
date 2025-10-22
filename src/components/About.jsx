import React from 'react'

const About = () => {
    return (
        <div className="px-8 md:px-20 py-12 bg-white">
            {/* Section Heading */}
            <div className="text-center mb-12">
                <p className="text-[#5BB7E6] uppercase tracking-widest text-[18px] font-bold">
                    About Us
                </p>
                <h2 className="text-2xl md:text-[40px] w-full md:w-[600px] mx-auto font-semibold text-black mt-2">
                    Explore our impactful Ministries around the world
                </h2>

                {/* Decorative underline */}
                <div className="flex justify-center mt-4">
                    <span className="w-8 h-1 bg-[#5BB7E6] rounded-full mx-1"></span>
                    <span className="w-4 h-1 bg-[#5BB7E6] rounded-full mx-1"></span>
                </div>
            </div>

            {/* OUR VISION */}
            <div className="mb-12">
                <h3 className="text-2xl font-semibold text-black mb-4">OUR VISION</h3>
                <p className="text-gray-600 text-lg tracking-wide leading-relaxed">
                    At Jesus Sharing Ministries, our heart beats with a passion to see lives transformed by the love of Jesus Christ. 
                    Our vision is to reach the unreached and bring hope, joy, and freedom to those who have never experienced the Good News. 
                    We believe that no one is too far, too poor, or too broken for God’s grace to reach.
                    <br /><br />
                    We go where many will not go—into villages, streets, and communities where the name of Jesus is rarely heard. 
                    Our calling is to meet people right where they are, sharing the message of salvation and demonstrating God’s love 
                    through both words and actions. Whether under open skies, in small homes, or in gathering places, we proclaim the 
                    Gospel and watch hearts open to the truth.
                    <br /><br />
                    Our mission is not just about preaching; it is about touching every aspect of life. We care for the physical needs 
                    of the poor by providing food for hungry families and offering medical help to those who cannot afford it. 
                    We create safe spaces for children—especially those forced into labor—where they can laugh, learn, and know 
                    they are loved. We stand with entire communities, praying with them, encouraging them, and helping them see 
                    a future filled with God’s promises.
                    <br /><br />
                    Everything we do is driven by one purpose: to be the hands and feet of Jesus in a world that desperately needs Him. 
                    With every smile, prayer, and act of kindness, we seek to reflect the heart of our Savior and to remind people 
                    that they are not forgotten—God sees them, loves them, and has a plan for their lives.
                </p>
            </div>

            {/* Statement of Faith */}
            <div>
                <h3 className="text-2xl font-semibold text-black mb-4">
                    Statement of Faith - What we "Believe" In
                </h3>
                <p className="text-gray-600 text-lg tracking-wide leading-relaxed">
                    Our mission is not just about preaching; it is about touching every aspect of life. 
                    We care for the physical needs of the poor by providing food for hungry families and 
                    offering medical help to those who cannot afford it. We create safe spaces for children—
                    especially those forced into labor—where they can laugh, learn, and know they are loved. 
                    We stand with entire communities, praying with them, encouraging them, and helping them 
                    see a future filled with God’s promises.
                    <br /><br />
                    Everything we do is driven by one purpose: to be the hands and feet of Jesus in a world 
                    that desperately needs Him. With every smile, prayer, and act of kindness, we seek to 
                    reflect the heart of our Savior and to remind people that they are not forgotten—God sees them, 
                    loves them, and has a plan for their lives.
                </p>
            </div>
        </div>
    )
}

export default About
