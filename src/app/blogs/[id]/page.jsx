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
              Keep it short and engaging.`,
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

const BlogDetails = ({ params }) => {
  const blog = blogs.find((b) => b.id === parseInt(params.id));

  if (!blog) {
    return <div className="text-center py-20">Blog not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Blog Image */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-96 object-cover rounded-lg mb-8"
      />

      {/* Blog Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#5BB7E6]">
        {blog.title}
      </h1>

      {/* Blog Content */}
      <p className="text-lg text-gray-700 leading-relaxed mb-8 whitespace-pre-line">
        {blog.content}
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        <Link
          href="/blogs"
          className="px-5 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
        >
          ← Back to Blogs
        </Link>
        <Link
          href="/donate"
          className="px-6 py-2 bg-[#5BB7E6] hover:bg-[#0085DD] text-white font-semibold rounded-lg"
        >
          Donate
        </Link>
      </div>
    </div>
  );
};

export default BlogDetails;
