"use client";
import React from "react";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "Lasting out end article express fortune demands own charmed",
    excerpt: `A short intro of this blog goes here for preview purpose. 
              It gives readers a quick glimpse of what they’ll learn. 
              This is still dummy text, but you can replace it later.`,
    content:
      "Full blog content for Blog 1. Here you can write a longer article that explains the topic in detail. This is only dummy data so you can replace it with real content later.",
    image: "/fake.jpg",
  },
  {
    id: 2,
    title: "Surprise steepest recurred landlord mr wandered",
    excerpt: `Quick intro for this dummy blog to show on preview. 
              You can expand more on what readers can expect here. 
              Keep it short and engaging`,
    content:
      "Full blog content for Blog 2. This should be detailed and structured properly when you write real blogs. Currently, it's placeholder text.",
    image: "/fake.jpg",
  },
  {
    id: 3,
    title: "Old insipidity motionless continuing law shy partiality",
    excerpt: `Another short intro for preview of the blog post. 
              This should provide enough context to spark curiosity. 
              Add a couple of lines to make it feel natural.`,
    content:
      "Full blog content for Blog 3. Replace with your actual post later. Works with the dynamic route system.",
    image: "/fake.jpg",
  },
  {
    id: 4,
    title: "Communities growing stronger together every day",
    excerpt: `Short summary of this blog entry goes here. 
              It should highlight the main message in just a few lines. 
              Keep it clean and easy to skim.`,
    content:
      "Full blog content for Blog 4. This will be used to display when a user clicks the blog. Replace with your real text.",
    image: "/fake.jpg",
  },
  {
    id: 5,
    title: "Education is the foundation for better tomorrows",
    excerpt: `A small intro for this educational blog post. 
              Inspire readers with a couple of engaging lines. 
              This gives them a reason to continue reading.`,
    content:
      "Full blog content for Blog 5. This article should encourage readers and can be styled later.",
    image: "/fake.jpg",
  },
];

const Blogs = () => {
  return (
    <div className="px-8 md:px-20 py-12">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <p className="text-[#5BB7E6] uppercase tracking-widest text-[18px] font-bold">
          Our Blogs
        </p>
        <h2 className="text-2xl md:text-[40px] w-full md:w-[600px] mx-auto font-semibold text-black mt-2">
          Read inspiring stories, thoughts, and ideas
        </h2>

        {/* Decorative underline */}
        <div className="flex justify-center mt-4">
          <span className="w-8 h-1 bg-[#5BB7E6] rounded-full mx-1"></span>
          <span className="w-4 h-1 bg-[#5BB7E6] rounded-full mx-1"></span>
        </div>
      </div>

      {/* Blogs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <Link
            key={blog.id}
            href={`/blogs/${blog.id}`}
            className="block bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>

              {/* Show only 2 lines of description */}
              <p className="text-gray-600 mb-6 line-clamp-2">{blog.excerpt}</p>

              <div className="flex justify-between items-center">
                <button className="px-4 py-2 border border-[#0085DD] duration-300 cursor-pointer hover:bg-[#0085DD] text-black hover:text-white rounded-lg text-sm">
                  Read More
                </button>

                {/* Donate button wrapped in div so it doesn't trigger parent Link */}
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="z-20 relative"
                >
                  <Link
                    href="/donate"
                    className="px-4 py-2 bg-[#5BB7E6] hover:bg-[#0085DD] text-white rounded-lg text-sm"
                  >
                    Donate
                  </Link>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination (only if blogs > 9) */}
      {blogs.length > 9 && (
        <div className="flex justify-center mt-10 space-x-4">
          <button className="px-4 py-2 bg-gray-200 rounded-lg">Prev</button>
          <button className="px-4 py-2 bg-[#5BB7E6] text-white rounded-lg">
            1
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded-lg">Next</button>
        </div>
      )}
    </div>
  );
};

export default Blogs;
