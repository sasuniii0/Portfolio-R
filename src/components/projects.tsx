import React from "react";
import { FaGithub, FaProjectDiagram, FaYoutube, FaBrain, FaHome } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "PropertyPulse",
    subtitle: "AI-Powered Real Estate Platform",
    description:
      "Full-stack real estate web app managing 100+ listings with AI market analysis, automated price prediction, and AI-generated descriptions using OpenAI & Google Generative AI.",
    tags: ["React.js", "TypeScript", "Node.js", "MongoDB", "OpenAI API", "Stripe", "Docker"],
    link: "https://github.com/sasuniii0",
    video: null,
    icon: <FaHome className="text-green-500 text-2xl" />,
    period: "Dec 2025 – Jan 2026",
  },
  {
    title: "Patient Risk Stratification",
    subtitle: "ML Classification System",
    description:
      "Supervised ML model achieving 85% accuracy in identifying high-risk diabetic patients for 30-day readmissions, with the Vitality Complexity Index (VCI) scoring algorithm.",
    tags: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "NLP"],
    link: "https://github.com/sasuniii0",
    video: null,
    icon: <FaBrain className="text-green-500 text-2xl" />,
    period: "Dec 2025 – Feb 2026",
  },
  {
    title: "Bloggo",
    subtitle: "Enterprise Membership Blogging Platform",
    description:
      "Scalable backend with tiered membership plans, secure authentication, AI-powered content generation via OpenAI API, and real-time WebSocket communication.",
    tags: ["Java", "Spring Boot", "Spring Security", "MySQL", "JWT", "OAuth2", "Swagger"],
    link: "https://github.com/sasuniii0/Bloggo",
    video: "https://youtu.be/oEVcOOsodZY?si=R1SZXm24iPqlYay2",
    icon: <FaProjectDiagram className="text-green-500 text-2xl" />,
    period: "Aug – Sep 2025",
  },
  {
    title: "VidsnapAI",
    subtitle: "Intelligent Automated Video Generator",
    description:
      "End-to-end AI video generation pipeline with ElevenLabs text-to-speech, automated script generation, FFmpeg media workflows, and Flask REST API — 99% uptime.",
    tags: ["Python", "Flask", "FFmpeg", "ElevenLabs API", "Docker", "JavaScript"],
    link: "https://github.com/sasuniii0/VidSnapAI",
    video: "https://youtu.be/bkRM5XKMNbw?si=RJEn7h67Ix3NNqDm",
    icon: <FaBrain className="text-green-500 text-2xl" />,
    period: "Aug – Sep 2025",
  },
  {
    title: "Complaint Management System",
    subtitle: "Full-Stack Tracking Platform",
    description:
      "System to log, track, and resolve complaints efficiently with user-friendly dashboards and admin management panels.",
    tags: ["Java", "Spring Boot", "React", "MySQL"],
    link: "https://github.com/sasuniii0/CMS",
    video: "https://youtu.be/UdV75sCIM1I?si=RZYS5zYmZ2u66JHN",
    icon: <FaProjectDiagram className="text-green-500 text-2xl" />,
    period: "2025",
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto pt-28 pb-16 px-6 md:px-10 bg-[#0D0D0D] text-white"
    >
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-green-500 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>
        <motion.p
          className="text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Production-ready applications spanning full-stack web, AI/ML, mobile, and backend engineering.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ translateY: -6, boxShadow: "0px 12px 30px rgba(34,197,94,0.2)" }}
            className="bg-[#1A1A1A] p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-green-500/50 flex flex-col gap-4 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {project.icon}
                <div>
                  <h3 className="text-lg font-bold text-white leading-tight">{project.title}</h3>
                  <p className="text-green-500 text-xs font-medium">{project.subtitle}</p>
                </div>
              </div>
              <span className="text-xs text-gray-500 font-mono whitespace-nowrap">{project.period}</span>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, ti) => (
                <span
                  key={ti}
                  className="text-xs bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-auto flex flex-col gap-2">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 text-black font-medium px-4 py-2 rounded-lg hover:bg-green-600 transition text-sm"
              >
                <FaGithub /> View on GitHub
              </a>
              {project.video && (
                <a
                  href={project.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white text-black font-medium px-4 py-2 rounded-lg hover:bg-gray-200 transition text-sm"
                >
                  <FaYoutube className="text-red-600" /> Watch Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="https://github.com/sasuniii0"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 px-6 py-3 rounded-md font-medium hover:bg-green-600 transition"
        >
          Explore All Projects on GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;