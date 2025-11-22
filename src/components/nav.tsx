import React from "react";
import logo from "../assets/favicon.png";


const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0D0D0D]/90 backdrop-blur-md text-white z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-10">
        {/* Logo Icon */}
        <a 
        href="#home">
          <img
            src={logo}
            alt="Sasuni Logo"
            className="w-10 h-10 transition duration-300 hover:filter hover:brightness-0 hover:invert hover:hue-rotate-90"
          />
        </a>



        <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
          <li><a href="#home" className="hover:text-green-500 transition">Home</a></li>
          <li><a href="#blog" className="hover:text-green-500 transition">Blog</a></li>
          <li><a href="#about" className="hover:text-green-500 transition">About Me</a></li>
          <li><a href="#projects" className="hover:text-green-500 transition">Projects</a></li>
          <li><a href="#hireme" className="hover:text-green-500 transition">Contact</a></li>
        </ul>

        <a
          href="#hireme"
          className="hidden md:inline-block bg-green-500 text-white px-5 py-2 rounded-md font-medium hover:bg-green-600 transition"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
