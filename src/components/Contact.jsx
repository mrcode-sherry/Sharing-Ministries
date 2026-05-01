import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="px-8 md:px-20 py-12 bg-white">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <p className="text-[#5BB7E6] uppercase tracking-widest text-[18px] font-bold">
          Contact Us
        </p>
        <h2 className="text-2xl md:text-[40px] w-full md:w-[600px] mx-auto font-semibold text-black mt-2">
          Get in Touch With Us
        </h2>

        {/* Decorative underline */}
        <div className="flex justify-center mt-4">
          <span className="w-8 h-1 bg-[#5BB7E6] rounded-full mx-1"></span>
          <span className="w-4 h-1 bg-[#5BB7E6] rounded-full mx-1"></span>
        </div>
      </div>

      {/* Contact Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info - Left Side */}
        <div className="bg-gray-100 shadow-lg rounded-xl p-8 space-y-8">
          <div>
            <h1 className="text-2xl text-center font-semibold text-black mb-6">Contact Information</h1>
          </div>
          
          {/* Location */}
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-dashed border-[#5BB7E6] flex-shrink-0">
              <MapPin size={24} className="text-[#5BB7E6]" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-black">Our Location</p>
              <p className="text-gray-600 break-words text-sm md:text-base">Street # 3, block-A, barkat Pura, mohalla Waris Pura, Faisalabad, Pakistan.</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-dashed border-[#5BB7E6] flex-shrink-0">
              <Mail size={24} className="text-[#5BB7E6]" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-black">Send Us Mail</p>
              <div className="space-y-1">
                <a href="mailto:Jabneeamir@gmail.com" className="text-[#5BB7E6] hover:text-[#0085DD] transition-colors block break-all text-sm md:text-base">
                  Jabneeamir@gmail.com
                </a>
                <a href="mailto:evangelistsharoonshahzad@gmail.com" className="text-[#5BB7E6] hover:text-[#0085DD] transition-colors block break-all text-sm md:text-base">
                  evangelistsharoonshahzad@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-dashed border-[#5BB7E6] flex-shrink-0">
              <Phone size={24} className="text-[#5BB7E6]" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-black">Call Us</p>
              <div className="space-y-1">
                <a href="tel:+923338362483" className="text-[#5BB7E6] hover:text-[#0085DD] transition-colors block text-sm md:text-base">
                  +92 333 8362483
                </a>
                <a href="tel:+923046325687" className="text-[#5BB7E6] hover:text-[#0085DD] transition-colors block text-sm md:text-base">
                  +92 304 6325687
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Image & Description - Right Side */}
        <div className="bg-gray-100 shadow-lg rounded-xl p-8 flex flex-col justify-center items-center text-center">
          <img
            src="/contact-image.jpg"
            alt="Contact Us"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <h3 className="text-xl font-semibold text-black mb-4">Get In Touch</h3>
          <p className="text-gray-600 leading-relaxed">
            We would love to hear from you! Whether you have questions about our ministries, 
            want to get involved, or need prayer support, don't hesitate to reach out. 
            Our team is here to serve and connect with you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
