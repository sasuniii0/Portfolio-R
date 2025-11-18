import React, { useState } from "react";
import resume from "../assets/CV - Sasuni  Wijerathne (1) (2).pdf";
import.meta.env.VITE_SOMETHING

const api = import.meta.env.REACT_APP_WEB3FORMS_KEY;


const HireMe = () => {
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setNotification(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", api ); // Web3Forms key

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
    <section id="hireme" className="py-20 px-6 md:px-10 bg-[#0D0D0D] text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-green-500 mb-6">
          Hire Me
        </h2>
        <p className="text-gray-300 text-lg mb-8">
          I'm always excited to collaborate on innovative projects and solve challenging problems.
          If you're looking for a passionate software engineer with expertise in AI, ML, and modern web development, let's get in touch!
        </p>

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

        {notification && (
          <div
            className={`mb-6 max-w-2xl mx-auto p-4 rounded-md text-white ${
              notification.type === "success" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {notification.message}
          </div>
        )}

        <form
          id="contactForm"
          onSubmit={handleSubmit}
          className="bg-[#1A1A1A] p-8 rounded-lg shadow-lg max-w-2xl mx-auto flex flex-col gap-6"
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
    </section>
  );
};

export default HireMe;
