import React from "react";
import { FaGithub, FaProjectDiagram } from "react-icons/fa";

const projects = [
  {
    title: "Bloggo",
    description: "A personal blog platform where users can create, explore, and share articles. Built with Java, Springboot, and AI Intergration.",
    link: "https://github.com/sasuniii0/Bloggo",
  },
  {
    title: "POS System",
    description: "A Single Page Application Point of Sale system to manage sales, products, and inventory efficiently.",
    link: "https://github.com/sasuniii0/Cleva-POS-MVC",
  },
  {
    title: "Complaint Management System",
    description: "A system to log, track, and resolve complaints efficiently with user-friendly dashboards and admin management.",
    link: "https://github.com/sasuniii0/CMS",
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto py-20 px-6 md:px-10 bg-[#0D0D0D] text-white"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-green-500 mb-4">
          My Projects
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A selection of projects I’ve worked on to enhance my skills in software engineering, web development, and system design.
        </p>
      </div>

            {/* Projects Cards */}
        <div className="flex flex-nowrap justify-center gap-8 overflow-x-auto py-4">
        {projects.map((project, index) => (
            <div
            key={index}
            className="bg-[#1A1A1A] p-6 rounded-xl shadow-lg flex flex-col gap-4 min-w-[300px] max-w-sm hover:shadow-2xl transition-transform duration-300"
            >
            <div className="flex items-center gap-3">
                <FaProjectDiagram className="text-green-500 text-3xl flex-shrink-0" />
                <h3 className="text-xl md:text-2xl font-bold">{project.title}</h3>
            </div>
            <p className="text-gray-300">{project.description}</p>
            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center justify-center gap-2 bg-green-500 text-black font-medium px-4 py-2 rounded-md hover:bg-green-600 transition"
            >
                <FaGithub /> View on GitHub
            </a>
            </div>
        ))}
        </div>


      {/* Explore More Button */}
      <div className="text-center mt-12">
        <a
          href="https://github.com/sasuniii0"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 px-6 py-3 rounded-md font-medium hover:bg-green-600 transition"
        >
          Explore Latest Projects on GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;
