import { FaLinkedin, FaGithub,FaInstagram,FaFacebook, FaMedium, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

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
            <a href="www.linkedin.com/in/sasuni-wijerathne-a3b517311" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
              <FaLinkedin />
            </a>
            <a href="https://github.com/sasuniii0" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
              <FaGithub />
            </a>
            <a href="https://medium.com/@sasuniwijerathne" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
              <FaMedium />
            </a>
            <a href="https://www.instagram.com/sasunyyy.y?igsh=ZTNwanBtMWdwdzJk&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/share/1D7FnhajhP/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
              <FaFacebook/>
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
            <li className="flex items-center gap-2"><FaEnvelope className="text-green-500" /> sasuniwijerathne@gmail.com</li>
            <li className="flex items-center gap-2"><FaMapMarkerAlt className="text-green-500" /> Colombo, Sri Lanka</li>
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
