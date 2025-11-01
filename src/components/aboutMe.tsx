import React from "react";
import profilePic from "../assets/pic1.jpg";
import { FaGithub, FaLinkedin, FaInstagram ,FaMedium} from "react-icons/fa";

const AboutMe = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-10 bg-[#1A1A1A]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src={profilePic}
            alt="Sasuni Wijerathne"
            className="w-[100px] h-[100px] md:w-72 md:h-72 rounded-full object-cover border-4 shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Text Content */}
        <div className="text-right md:text-left max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-500">
            About Me
          </h2>
          <p className="text-gray-300 text-lg mb-4">
            I'm <strong>Sasuni Wijerathne</strong>, a dedicated Software Engineer passionate about developing innovative programs that boost efficiency and drive success. With a keen interest in AI and Machine Learning, I constantly explore cutting-edge technologies to expand my expertise.
          </p>
          <p className="text-gray-300 text-lg mb-4">
            Beyond coding, I enjoy blogging about technology trends and sharing insights on how AI and ML are shaping the future. When I'm not immersed in tech, I love exploring nature, reading, and finding inspiration in creativity.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <a
              href="#contact"
              className="bg-green-500 px-6 py-3 rounded-md font-medium hover:bg-green-600 transition"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              className="border border-green-500 px-6 py-3 rounded-md font-medium text-green-500 hover:bg-green-500 hover:text-white transition"
            >
              Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="mt-6 flex justify-center md:justify-start gap-6 text-2xl text-gray-300">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
              <FaMedium />
            </a>
            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;
