import { FaLinkedin, FaGithub, FaTwitter, FaMedium, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray text-gray-300 py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-0 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* About / Logo */}
        <div>
          <h2 className="text-2xl font-bold text-green-500 mb-3">Sasuni Wijerathne</h2>
          <p className="text-gray-400 mb-4">
            Software Engineer | AI & ML Enthusiast | Blogger. Exploring technology to create efficient and innovative solutions.
          </p>
          <div className="flex gap-4 text-2xl mt-2">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
              <FaLinkedin />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
              <FaGithub />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
              <FaTwitter />
            </a>
            <a href="https://medium.com/@yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
              <FaMedium />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-green-500 mb-3">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            <li><a href="#home" className="hover:text-green-500 transition">Home</a></li>
            <li><a href="#about" className="hover:text-green-500 transition">About Me</a></li>
            <li><a href="#skills" className="hover:text-green-500 transition">Skills</a></li>
            <li><a href="#blog" className="hover:text-green-500 transition">Blog</a></li>
            <li><a href="#contact" className="hover:text-green-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold text-green-500 mb-3">Contact</h3>
          <ul className="flex flex-col gap-3 text-gray-400">
            <li className="flex items-center gap-2"><FaEnvelope className="text-green-500" /> sasuni.email@example.com</li>
            <li className="flex items-center gap-2"><FaPhoneAlt className="text-green-500" /> +94 7X XXX XXXX</li>
            <li className="flex items-center gap-2"><FaMapMarkerAlt className="text-green-500" /> Panadura, Sri Lanka</li>
          </ul>
        </div>

        {/* Newsletter / CTA */}
        <div>
          <h3 className="text-xl font-bold text-green-500 mb-3">Stay Updated</h3>
          <p className="text-gray-400 mb-4">
            Subscribe to get the latest insights on AI, ML, and software development.
          </p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-md bg-gray-900 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:border-green-500"
            />
            <button
              type="submit"
              className="bg-green-500 text-black py-3 rounded-md font-medium hover:bg-green-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      <hr className="my-10 border-gray-700" />

      <div className="text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Sasuni Wijerathne. All rights reserved. 
      </div>
    </footer>
  );
};

export default Footer;
