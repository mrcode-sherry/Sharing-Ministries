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
        {/* Contact Form */}
        <div className="bg-gray-100 shadow-lg rounded-xl p-8">
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-none focus:ring-[#5BB7E6] text-gray-800"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-none focus:ring-[#5BB7E6] text-gray-800"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-gray-700 font-medium mb-2"
              >
                Phone
              </label>
              <input
                type="text"
                id="phone"
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-none focus:ring-[#5BB7E6] text-gray-800"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Write your message"
                rows="4"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-none focus:ring-[#5BB7E6] text-gray-800"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full cursor-pointer bg-[#5BB7E6] hover:bg-[#0085DD] text-white font-semibold py-3 rounded-lg transition duration-300 text-lg"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-gray-100 shadow-lg rounded-xl p-8 space-y-8">
          {/* Location */}
          <div>
            <h1 className="text-2xl text-center font-semibold text-black mb-4"> Contact Information </h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-dashed border-[#5BB7E6]">
              <MapPin className="w-6 h-6 text-[#5BB7E6]" />
            </div>
            <div>
              <p className="font-semibold text-black">Our Location</p>
              <p className="text-gray-600">123 Street, Lahore, Pakistan</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-dashed border-[#5BB7E6]">
              <Mail className="w-6 h-6 text-[#5BB7E6]" />
            </div>
            <div>
              <p className="font-semibold text-black">Send Us Mail</p>
              <p className="text-gray-600">info@example.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-dashed border-[#5BB7E6]">
              <Phone className="w-6 h-6 text-[#5BB7E6]" />
            </div>
            <div>
              <p className="font-semibold text-black">Call Us</p>
              <p className="text-gray-600">+92 300 1234567</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
