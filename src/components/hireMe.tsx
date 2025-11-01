import React from "react";
import resume from "../assets/CV - Sasuni  Wijerathne (1) (2).pdf"

const HireMe = () => {
  return (
    <section id="hireme" className="py-20 px-6 md:px-10 bg-[#0D0D0D] text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-green-500 mb-6">
          Hire Me
        </h2>
        <p className="text-gray-300 text-lg mb-8">
          I'm always excited to collaborate on innovative projects and solve challenging problems.  
          If you're looking for a passionate software engineer with expertise in AI, ML, and modern web development, let's get in touch!
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
          <a
            href={resume}
            className="bg-green-500 px-6 py-3 rounded-md font-medium hover:bg-green-600 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
          <a
            href="mailto:sasuniwijerathne@gmail.com"
            className="border border-green-500 px-6 py-3 rounded-md font-medium text-green-500 hover:bg-green-500 hover:text-white transition"
          >
            Email Me
          </a>
        </div>

        {/* Contact Form */}
        <form
            className="bg-[#1A1A1A] p-8 rounded-lg shadow-lg max-w-2xl mx-auto flex flex-col gap-6"
            onSubmit={(e) => {
            e.preventDefault(); // prevent page reload
            alert("Message sent successfully!"); // show alert
            (e.target as HTMLFormElement).reset(); // optional: reset form
        }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-md bg-[#0D0D0D] border border-gray-700 text-white focus:outline-none focus:border-green-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-md bg-[#0D0D0D] border border-gray-700 text-white focus:outline-none focus:border-green-500"
          />
          <textarea
            placeholder="Your Message"
            className="p-3 rounded-md bg-[#0D0D0D] border border-gray-700 text-white focus:outline-none focus:border-green-500 resize-none h-32"
          />
          <button
            type="submit"
            className="bg-green-500 px-6 py-3 rounded-md font-medium hover:bg-green-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default HireMe;
