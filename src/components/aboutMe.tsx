import profilePic from "../assets/pic2.jpg";
import resume from "../assets/CV - Sasuni  Wijerathne (1) (2).pdf";
import { FaGithub, FaLinkedin, FaInstagram, FaMedium, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-10 bg-[#1A1A1A] relative overflow-hidden">

      {/* Background Animated Shapes */}
      <div className="absolute top-10 left-1/4 w-36 h-36 bg-green-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-1/3 w-48 h-48 bg-green-700/30 rounded-full blur-3xl animate-floatSlow"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">

        {/* Profile Image with bounce & shadow */}
        <motion.div 
          className="flex-shrink-0"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src={profilePic}
            alt="Sasuni Wijerathne"
            className="w-[120px] h-[120px] md:w-72 md:h-72 rounded-full object-cover border-4 border-green-500 shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Text Content with staggered animation */}
        <motion.div 
          className="text-right md:text-left max-w-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { 
              opacity: 1, 
              x: 0,
              transition: { staggerChildren: 0.2 }
            },
          }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-green-500"
            variants={{ hidden: { x: 50, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { duration: 0.6 } } }}
          >
            About Me
          </motion.h2>

          <motion.p variants={{ hidden: { x: 50, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { duration: 0.6 } } }} className="text-gray-300 text-lg mb-4">
            I'm <strong>Sasuni Wijerathne</strong>, a dedicated Software Engineer passionate about developing innovative programs that boost efficiency and drive success. With a keen interest in AI and Machine Learning, I constantly explore cutting-edge technologies.
          </motion.p>

          <motion.p variants={{ hidden: { x: 50, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { duration: 0.6, delay: 0.1 } } }} className="text-gray-300 text-lg mb-4">
            Beyond coding, I enjoy blogging about technology trends and sharing insights on AI & ML. When I'm not immersed in tech, I love exploring nature, reading, and finding inspiration in creativity.
          </motion.p>

          {/* Buttons with hover scale */}
          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6, delay: 0.3 } } }} className="mt-6 flex justify-center md:justify-start gap-4">
            <motion.a whileHover={{ scale: 1.05 }} href="#contact" className="bg-green-500 px-6 py-3 rounded-md font-medium hover:bg-green-600 transition">
              Contact Me
            </motion.a>
            <motion.a whileHover={{ scale: 1.05 }} href={resume} className="border border-green-500 px-6 py-3 rounded-md font-medium text-green-500 hover:bg-green-500 hover:text-white transition">
              Resume
            </motion.a>
          </motion.div>

          {/* Social Icons with stagger fade-in */}
          <motion.div variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }} className="mt-6 flex justify-center md:justify-start gap-6 text-2xl text-gray-300">
            {[{
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/sasuni-wijerathne-a3b517311"
            },{
              icon: <FaGithub />,
              link: "https://github.com/sasuniii0"
            },{
              icon: <FaMedium />,
              link: "https://medium.com/@sasuniwijerathne"
            },{
              icon: <FaInstagram />,
              link: "https://www.instagram.com/sasunyyy.y?igsh=ZTNwanBtMWdwdzJk&utm_source=qr"
            },{
              icon: <FaFacebook />,
              link: "https://www.facebook.com/share/1D7FnhajhP/?mibextid=wwXIfr"
            }].map((item, i) => (
              <motion.a key={i} variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} whileHover={{ scale: 1.2, color: "#22c55e" }} href={item.link} target="_blank" rel="noopener noreferrer">
                {item.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Float Animation Keyframes */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          .animate-float { animation: float 4s ease-in-out infinite; }
          .animate-floatSlow { animation: float 8s ease-in-out infinite; }
        `}
      </style>
    </section>
  );
};

export default AboutMe;
