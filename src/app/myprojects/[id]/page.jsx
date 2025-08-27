"use client";
import React from "react";
import { useParams } from "next/navigation";

// Dummy projects (same data as gallery)
const projects = Array.from({ length: 5 }, (_, i) => ({
  id: (i + 1).toString(),
  title: `Project ${i + 1}`,
  content: `This is the detailed description of project ${i + 1}. Replace this dummy text with actual information about the project.`,
  image: "/fake.jpg", // Replace with real images later
}));

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="px-8 md:px-20 py-12 text-center">
        <h2 className="text-2xl font-bold text-red-500">Project not found</h2>
      </div>
    );
  }

  return (
    <div className="px-8 md:px-20 py-12">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-80 object-cover rounded-lg shadow-lg mb-8"
      />
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-700 text-lg leading-relaxed">{project.content}</p>
    </div>
  );
};

export default ProjectDetails;
