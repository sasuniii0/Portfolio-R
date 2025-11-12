import { useState } from "react";
import { motion } from "framer-motion";
import { FaJava, FaPython, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDatabase, FaGitAlt, FaDocker } from "react-icons/fa";
import { SiSpringboot, SiTailwindcss, SiJavascript, SiMongodb } from "react-icons/si";
import { MdSchool } from "react-icons/md";
import iit from "../assets/iit.jpg"
import kodekamp  from "../assets/kodekloud.png"
import ibm from "../assets/ibm.png"
interface EduItem {
  title: string;
  subtitle: string;
  category: "Education" | "Certifications";
  extra?: string;
  img?: string; 
}

const educationList: EduItem[] = [
  { title: "Gothami Girls School, Colombo 10", subtitle: "Completed foundational studies with strong academic performance", category: "Education" },
  { title: "St. Paul’s Girls School, Colombo 3", subtitle: "Advanced Level studies focusing on Science & Technology streams", category: "Education" },
  { title: "IJSE Campus, Panadura", subtitle: "Undergraduate in Software Engineering", extra: "Specialized in AI & Machine Learning courses", category: "Education" },
  { title: "IMBS Green Campus", subtitle: "Information Technology Certification", extra: "Practical training in software development & IT solutions", category: "Education" },
  { title: "British Council", subtitle: "Professional Development Courses", extra: "Courses in communication, leadership & career growth", category: "Education" },
];

const certificationList: EduItem[] = [
  {
    title: "IIT Certification",
    subtitle: "24-hour Hackathon Program",
    category: "Certifications",
    img: iit,
  },
  {
    title: "KodeCamp AI Course",
    subtitle: "Free 1-week AI Workshop",
    category: "Certifications",
    img: kodekamp,
  },
  {
    title: "IBM Certificate",
    subtitle: "Introduction to Data Concepts",
    category: "Certifications",
    img: ibm,
  },
];


const skills = [
  { name: "Java", icon: <FaJava /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: "Python", icon: <FaPython /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "SQL", icon: <FaDatabase /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "AI & ML", icon: null },
];

const categories = ["Education", "Certifications"];

const SkillsEducation: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<"Education" | "Certifications">("Education");

  const allItems = [...educationList, ...certificationList];
  const filteredItems = allItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="skills-education" className="py-20 px-6 md:px-10 bg-[#0D0D0D] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-green-500 mb-12">Skills, Education & Certifications</h2>

        {/* Skills Badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.2, rotate: 5, boxShadow: "0px 0px 15px #22c55e" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full font-medium cursor-pointer shadow-lg"
            >
              {skill.icon} {skill.name}
            </motion.div>
          ))}
        </motion.div>

        {/* Category Tabs - Professional style */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat as "Education" | "Certifications")}
              className={`
                px-6 py-2 rounded-full font-medium transition-all
                ${
                  selectedCategory === cat
                    ? "bg-green-500 text-black shadow-xl transform scale-105"
                    : "bg-gray-800 text-gray-300 hover:bg-green-500 hover:text-black hover:shadow-lg"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {filteredItems.map((item, i) => (
            <motion.div
              key={i}
              className="bg-[#1A1A1A] p-6 rounded-xl shadow-lg border-l-4 border-green-500 flex flex-col gap-3 w-[320px] transition-transform duration-300"
              whileHover={{ translateY: -8, scale: 1.05, boxShadow: "0px 10px 20px rgba(34,197,94,0.5)" }}
            >
              <MdSchool className="text-green-500 text-3xl mb-2" />
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-gray-300">{item.subtitle}</p>
              {item.extra && <p className="text-gray-400 text-sm">{item.extra}</p>}
              {item.img && (
                <motion.img
                  src={item.img}
                  alt={item.title}
                  className="mt-4 w-full h-40 object-contain rounded-lg shadow-md"
                  whileHover={{ scale: 1.07, boxShadow: "0px 8px 20px rgba(34,197,94,0.4)" }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Call-to-action for more certificates */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Curious to see more of my academic accomplishments and certifications? Check out my{" "}
            <a
              href="https://www.linkedin.com/in/sasuni-wijerathne-a3b517311"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:underline transition"
            >
              LinkedIn
            </a>.
          </p>
        </div>

      </div>
    </section>
  );
};

export default SkillsEducation;
