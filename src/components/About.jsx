import React from 'react'

const About = () => {
    return (
        <div className="px-8 md:px-20 py-12 bg-white">
            {/* Section Heading */}
            <div className="text-center mb-12">
                <p className="text-[#5BB7E6] uppercase tracking-widest text-[18px] font-bold">
                    About Us
                </p>
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
                    We believe that no one is too far, too poor, or too broken for God's grace to reach.
                    <br /><br />
                    We go where many will not go—into villages, streets, and communities where the name of Jesus is rarely heard. 
                    Our calling is to meet people right where they are, sharing the message of salvation and demonstrating God's love 
                    through both words and actions. Whether under open skies, in small homes, or in gathering places, we proclaim the 
                    Gospel and watch hearts open to the truth.
                    <br /><br />
                    Our mission is not just about preaching; it is about touching every aspect of life. We care for the physical needs 
                    of the poor by providing food for hungry families and offering medical help to those who cannot afford it. 
                    We create safe spaces for children—especially those forced into labor—where they can laugh, learn, and know 
                    they are loved. We stand with entire communities, praying with them, encouraging them, and helping them see 
                    a future filled with God's promises.
                    <br /><br />
                    Everything we do is driven by one purpose: to be the hands and feet of Jesus in a world that desperately needs Him. 
                    With every smile, prayer, and act of kindness, we seek to reflect the heart of our Savior and to remind people 
                    that they are not forgotten—God sees them, loves them, and has a plan for their lives.
                </p>
            </div>

            {/* LEADERSHIP SECTION */}
            <div className="mb-12 bg-gray-50 rounded-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left Side - Text Content */}
                    <div>
                        <h3 className="text-2xl md:text-3xl font-semibold text-black mb-4 leading-tight">
                            Amir Ejaz and Huma Amir
                        </h3>
                        <div className="mb-4">
                            <p className="text-[#5BB7E6] text-lg font-semibold">
                                Senior Pastor, Founder & Chairman
                            </p>
                            <p className="text-gray-600 text-lg">
                                Jesus Sharing Ministries Pakistan
                            </p>
                        </div>
                        
                        {/* Decorative underline */}
                        <div className="flex mt-4">
                            <span className="w-8 h-1 bg-[#5BB7E6] rounded-full mr-2"></span>
                            <span className="w-4 h-1 bg-[#5BB7E6] rounded-full"></span>
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="flex justify-center">
                        <div className="relative">
                            <img
                                src="/amir-huma.jpg"
                                alt="Amir Ejaz and Huma Amir"
                                className="w-full max-w-md h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Statement of Faith */}
            <div className="mb-12">
                <h3 className="text-2xl font-semibold text-black mb-4">
                    Statement of Faith - What we "Believe" In
                </h3>
                <p className="text-gray-600 text-lg tracking-wide leading-relaxed">
                    At Jesus Sharing Ministries, we stand firmly on the unchanging truth of God's Word and are devoted to proclaiming the Gospel of Jesus Christ with boldness, love, and compassion. Our foundation is rooted in a deep relationship with God and a passion to see lives transformed through His power. We are committed to living out our faith in a way that reflects the heart of Jesus—reaching the lost, serving the broken, and bringing hope to every community. We believe:
                    <br /><br />
                    <strong>1. The Word of God</strong><br />
                    We believe that the Bible is the inspired, infallible, and authoritative Word of God, revealing His will, truth, and plan for humanity.
                    <br /><br />
                    <strong>2. The Trinity</strong><br />
                    We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit—equal in power and glory.
                    <br /><br />
                    <strong>3. Jesus Christ</strong><br />
                    We believe that Jesus Christ is the Son of God, fully God and fully man. He was born of a virgin, lived a sinless life, performed miracles, died on the cross for our sins, and rose again on the third day. He is the only way to salvation.
                    <br /><br />
                    <strong>4. Salvation</strong><br />
                    We believe that salvation is a gift of God's grace, received through faith in Jesus Christ. It is not by works, but by believing in His death and resurrection that we are forgiven and made new.
                    <br /><br />
                    <strong>5. The Holy Spirit</strong><br />
                    We believe in the power and presence of the Holy Spirit, who dwells within believers, guides them into truth, empowers them for ministry, and produces spiritual growth and transformation.
                    <br /><br />
                    <strong>6. The Church</strong><br />
                    We believe the Church is the body of Christ, called to worship God, share the Gospel, disciple believers, and serve others in love and unity.
                    <br /><br />
                    <strong>7. Love and Mission</strong><br />
                    We believe in fulfilling the Great Commission by reaching the unreached, sharing the love of Jesus, and bringing hope, freedom, and restoration to all people.
                    <br /><br />
                    <strong>8. Eternal Life</strong><br />
                    We believe in the resurrection of the dead, eternal life for those who believe in Christ, and eternal separation from God for those who reject Him.
                    <br /><br />
                    <strong>Our Heart</strong><br />
                    At Jesus Sharing Ministries, we are committed to sharing Jesus with the world through love, relationship, and the power of the Gospel—so that lives may be transformed and people may walk in true freedom.
                </p>
            </div>

            {/* SHAROON SHAHZAD SECTION */}
            <div className="mb-12 bg-gray-50 rounded-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left Side - Text Content */}
                    <div>
                        <h3 className="text-2xl md:text-3xl font-semibold text-black mb-4 leading-tight">
                            Sharoon Shahzad
                        </h3>
                        <div className="mb-4">
                            <p className="text-[#5BB7E6] text-lg font-semibold">
                                Evangelist & Vice-Chairman
                            </p>
                            <p className="text-gray-600 text-lg">
                                Jesus Sharing Ministries Pakistan
                            </p>
                        </div>
                        
                        {/* Decorative underline */}
                        <div className="flex mt-4">
                            <span className="w-8 h-1 bg-[#5BB7E6] rounded-full mr-2"></span>
                            <span className="w-4 h-1 bg-[#5BB7E6] rounded-full"></span>
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="flex justify-center">
                        <div className="relative">
                            <img
                                src="/sharoon-shahzad.jpg"
                                alt="Sharoon Shahzad"
                                className="w-full max-w-md h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* PRAYER SECTION */}
            <div className="mb-12 text-center bg-gradient-to-r from-[#5BB7E6] to-[#0085DD] text-white rounded-lg p-8">
                <h3 className="text-2xl md:text-3xl font-semibold mb-6">Prayer</h3>
                
                {/* Decorative underline */}
                <div className="flex justify-center mb-8">
                    <span className="w-8 h-1 bg-white rounded-full mx-1"></span>
                    <span className="w-4 h-1 bg-white rounded-full mx-1"></span>
                </div>

                <div className="max-w-4xl mx-auto">
                    <p className="text-lg leading-relaxed italic">
                        Heavenly Father,
                        <br /><br />
                        We come before You with humble hearts, full of gratitude for Your endless love and mercy. Thank You for sending Your Son, Jesus Christ, to bring us salvation, hope, and new life.
                        <br /><br />
                        Lord, we surrender ourselves to You. Fill us with Your Holy Spirit and guide us in Your truth. Help us to walk in faith, to live in obedience, and to reflect Your love in everything we do.
                        <br /><br />
                        Use us, O God, as vessels of Your grace. Let our lives be a testimony of Your power and goodness. Give us boldness to share the Gospel, compassion to serve the broken, and wisdom to reach those who are lost.
                        <br /><br />
                        Bless Jesus Sharing Ministries, that it may be a light in the darkness and a source of hope to many. Open doors for Your work, connect us with the right people, and provide every need according to Your riches in glory.
                        <br /><br />
                        May Your Kingdom come and Your will be done in our lives, our communities, and throughout the world.
                        <br /><br />
                        In the mighty name of Jesus Christ, we pray,
                        <br /><br />
                        <strong>Amen.</strong>
                    </p>
                </div>
            </div>

            {/* SHAN MANZOOR SECTION */}
            <div className="bg-gray-50 rounded-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left Side - Text Content */}
                    <div>
                        <h3 className="text-2xl md:text-3xl font-semibold text-black mb-4 leading-tight">
                            Shan Manzoor
                        </h3>
                        <div className="mb-4">
                            <p className="text-[#5BB7E6] text-lg font-semibold">
                                Evangelist & Secretary
                            </p>
                            <p className="text-gray-600 text-lg">
                                Jesus Sharing Ministries Pakistan
                            </p>
                        </div>
                        
                        {/* Decorative underline */}
                        <div className="flex mt-4">
                            <span className="w-8 h-1 bg-[#5BB7E6] rounded-full mr-2"></span>
                            <span className="w-4 h-1 bg-[#5BB7E6] rounded-full"></span>
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="flex justify-center">
                        <div className="relative">
                            <img
                                src="/shan-manzoor.jpg"
                                alt="Shan Manzoor"
                                className="w-full max-w-md h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About