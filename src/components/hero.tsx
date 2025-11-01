import React from "react";
import resume from "../assets/CV - Sasuni  Wijerathne (1) (2).pdf"

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-[#0D0D0D] text-white relative overflow-hidden"
    >
      {/* Lively floating shapes — green & black aesthetic */}
<div className="absolute top-20 left-16 w-6 h-6 bg-green-400 rounded-full opacity-80 animate-bounce shadow-[0_0_20px_#22c55e] hover:scale-125 transition-transform duration-500"></div>

<div className="absolute top-1/3 right-12 w-10 h-10 bg-gray-900 rounded-xl opacity-70 animate-pulse shadow-[0_0_25px_#14532d] hover:rotate-12 hover:scale-110 transition-transform duration-500"></div>

<div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-green-700 rounded-full opacity-80 animate-bounce shadow-[0_0_30px_#22c55e] hover:scale-125 transition-transform duration-500"></div>

<div className="absolute top-1/2 left-14 w-6 h-6 bg-gray-800 rounded-sm opacity-70 animate-pulse shadow-[0_0_20px_#16a34a] hover:scale-125 transition-transform duration-500"></div>

<div className="absolute top-12 right-1/3 w-8 h-8 bg-green-300 rounded-full opacity-90 animate-bounce shadow-[0_0_25px_#22c55e] hover:scale-125 transition-transform duration-500"></div>

<div className="absolute top-1/4 left-1/2 w-5 h-5 bg-gray-900 rounded-full opacity-60 animate-ping shadow-[0_0_20px_#14532d] hover:scale-120 transition-transform duration-500"></div>

<div className="absolute top-1/5 left-1/4 w-5 h-5 bg-gray-900 rounded-full opacity-60 animate-ping shadow-[0_0_20px_#14532d] hover:scale-120 transition-transform duration-500"></div>

<div className="absolute top-1/6 left-1/6 w-5 h-5 bg-gray-900 rounded-full opacity-60 animate-ping shadow-[0_0_20px_#14532d] hover:scale-120 transition-transform duration-500"></div>

<div className="absolute bottom-1/6 left-2/3 w-7 h-7 bg-green-600 rounded-full opacity-75 animate-float shadow-[0_0_25px_#22c55e] hover:scale-115 transition-transform duration-500"></div>

<div className="absolute top-1/3 left-2/5 w-8 h-8 bg-gray-800 rounded-full opacity-70 animate-float shadow-[0_0_20px_#14532d] hover:scale-115 transition-transform duration-500"></div>

{/* Optional: add keyframes in your CSS for float effect */}
<style>
{`
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}
.animate-float { animation: float 4s ease-in-out infinite; }

@keyframes spin-slow {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.animate-spin-slow { animation: spin-slow 10s linear infinite; }
`}
</style>


      {/* Hero Content */}
      <div className="z-10 mt-10 px-6">
        <p className="uppercase tracking-widest text-gray-400 text-sm mb-2">
            Software Engineer | Exploring the World of AI & ML | Blogger
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hello, I’m <span className="text-green-500">Sasuni Wijerathne</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
            I’m passionate about crafting smart, efficient solutions and learning how AI and ML shape the future of technology.
        </p>

        <div className="mt-8 flex space-x-4 justify-center">
          <a
            href="#chireme"
            className="bg-green-500 px-6 py-3 rounded-md font-medium hover:bg-green-600 transition"
          >
            Hire Me
          </a>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-green-500 px-6 py-3 rounded-md font-medium text-green-500 hover:bg-green-500 hover:text-white transition"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
