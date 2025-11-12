import { motion, useScroll, useTransform } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import resume from "../assets/CV - Sasuni  Wijerathne (1) (2).pdf";

const Hero: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <motion.section
      id="home"
      style={{ scale, opacity }}
      className="min-h-screen flex flex-col justify-center items-center text-center bg-[#0D0D0D] text-white relative overflow-hidden"
    >
      {/* Background Glow Orbs */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-green-400/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-700/30 blur-3xl rounded-full animate-float"></div>

      {/* Floating Sparkles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-green-500/70 rounded-full animate-float"
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        ></div>
      ))}

      <style>
        {`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-10px) translateX(5px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        `}
      </style>

      <motion.div
        className="z-10 mt-10 px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="uppercase tracking-widest text-gray-400 text-sm mb-2">
          <Typewriter
            words={[
              "Software Engineer",
              "Exploring the World of AI & ML",
              "Blogger & Tech Enthusiast",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1200}
          />
        </p>

        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Hello, I’m <span className="text-green-500">Sasuni Wijerathne</span>
        </motion.h1>

        <motion.p
          className="text-gray-400 text-lg max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          I’m passionate about crafting smart, efficient solutions and learning how AI and ML shape the future of technology.
        </motion.p>

        <motion.div
          className="mt-8 flex space-x-4 justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <a
            href="#hireme"
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
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
