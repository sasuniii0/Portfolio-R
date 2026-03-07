import React, { useState } from "react";
import resume from "../assets/Sasuni-WijerathneCV1-pic (1).pdf";
import.meta.env.VITE_SOMETHING
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";


const HireMe = () => {
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setNotification(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "ece9ddf5-1f42-4720-b07e-2f211bf60247" ); // Web3Forms key

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setNotification({ type: "success", message: "Your message has been sent successfully!" });
        form.reset();
      } else {
        setNotification({ type: "error", message: "Error: " + data.message });
      }
    } catch (err) {
      setNotification({ type: "error", message: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  };

      return (
      <section
        id="hireme"
        className="pt-30 pb-10 px-6 md:px-10 bg-[#0D0D0D] text-white"
      >
        {/* Centered Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-green-500 mb-4">
            Hire Me
          </h2>
          
        </div>

        {/* Main Grid Layout */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          {/* LEFT — Description + Buttons */}
        <div className="flex flex-col justify-start">
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-6">
            I'm always excited to collaborate on innovative projects and solve challenging problems.
            If you're looking for a passionate software engineer with expertise in AI, ML, and modern web development, let's get in touch!
          </p>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-green-500 mb-3">Contact</h3>
            <ul className="flex flex-col gap-3 text-gray-400">
              <li className="flex items-center gap-2"><FaEnvelope className="text-green-500" /> sasuniwijerathne@gmail.com</li>
              <li className="flex items-center gap-2"><FaMapMarkerAlt className="text-green-500" /> Colombo, Sri Lanka</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">

            <a
              href={resume}
              className="bg-green-500 px-6 py-3 rounded-md font-medium hover:bg-green-600 transition text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>

            <a
              href="#about"
              className="border border-green-500 px-6 py-3 rounded-md font-medium text-green-500 hover:bg-green-500 hover:text-white transition text-center"
            >
              Explore About Me
            </a>
          </div>

          
        </div>


          {/* RIGHT — CONTACT FORM */}
          <div>
            {notification && (
              <div
                className={`mb-6 p-4 rounded-md text-white ${
                  notification.type === "success" ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {notification.message}
              </div>
            )}

            <form
              id="contactForm"
              onSubmit={handleSubmit}
              className="bg-[#1A1A1A] p-8 rounded-lg shadow-lg flex flex-col gap-6"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="p-3 rounded-md bg-[#0D0D0D] border border-gray-700 text-white focus:outline-none focus:border-green-500"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="p-3 rounded-md bg-[#0D0D0D] border border-gray-700 text-white focus:outline-none focus:border-green-500"
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                className="p-3 rounded-md bg-[#0D0D0D] border border-gray-700 text-white focus:outline-none focus:border-green-500 resize-none h-32"
                required
              />

              <button
                type="submit"
                className={`bg-green-500 px-6 py-3 rounded-md font-medium hover:bg-green-600 transition ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    );

};

export default HireMe;
