"use client";
import React from "react";
import Link from "next/link";

// Dummy 45 projects
const projects = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  title: `Project ${i + 1}`,
  excerpt: `This is a short description of project ${i + 1}. Replace it with real data later.`,
  image: "/fake.jpg", // Replace with your real image path
}));

const Projects = () => {
  return (
    <div className="px-8 md:px-20 py-12">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <p className="text-[#5BB7E6] uppercase tracking-widest text-[18px] font-bold">
          Our Projects
        </p>
        <h2 className="text-2xl md:text-[40px] w-full md:w-[600px] mx-auto font-semibold text-black mt-2">
          Explore our impactful projects around the world
        </h2>

        {/* Decorative underline */}
        <div className="flex justify-center mt-4">
          <span className="w-8 h-1 bg-[#5BB7E6] rounded-full mx-1"></span>
          <span className="w-4 h-1 bg-[#5BB7E6] rounded-full mx-1"></span>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/myprojects/${project.id}`}
            className="block bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-6 line-clamp-2">
                {project.excerpt}
              </p>
              <span className="px-4 py-2 border border-[#0085DD] duration-300 cursor-pointer hover:bg-[#0085DD] text-black hover:text-white rounded-lg text-sm inline-block">
                View Project
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
