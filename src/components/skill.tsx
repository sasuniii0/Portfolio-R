import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaJava, FaPython, FaReact, FaNodeJs, FaHtml5, FaCss3Alt,
  FaDatabase, FaGitAlt, FaDocker, FaAws, FaMobile
} from "react-icons/fa";
import {
  SiSpringboot, SiTailwindcss, SiJavascript, SiMongodb,
  SiTypescript, SiNextdotjs, SiKubernetes, SiExpress,
  SiMysql, SiFirebase, SiPostman, SiFigma, SiSwagger,
  SiBootstrap, SiRedux, SiFlask, SiNginx
} from "react-icons/si";
import { MdSchool, MdWorkspacePremium } from "react-icons/md";
import { BiBrain } from "react-icons/bi";
import iit from "../assets/iit.jpg";
import kodekamp from "../assets/kodekloud.png";
import ibm from "../assets/ibm.png";

interface EduItem {
  title: string;
  subtitle: string;
  category: "Education" | "Certifications" | "Achievements";
  extra?: string;
  img?: string;
  year?: string;
}

const educationList: EduItem[] = [
  {
    title: "Institute of Software Engineering (IJSE)",
    subtitle: "Higher National Diploma (HND) in Software Engineering",
    category: "Education",
    extra: "Specializing in Full-Stack, Mobile & AI/ML Engineering",
    year: "2024 – Present",
  },
  {
    title: "IJSE – Certified AI & ML Engineer (CAME)",
    subtitle: "Certified AI & Machine Learning Engineer Program",
    category: "Education",
    extra: "Hands-on ML model development, data analysis, and AI integration",
    year: "2025 – Present",
  },
  {
    title: "St. Paul's Milagiriya, Colombo 03",
    subtitle: "G.C.E. Advanced Level – Mathematics Stream (IT)",
    category: "Education",
    year: "2023",
  },
  {
    title: "IMBS Green Campus",
    subtitle: "Information Technology Certification",
    extra: "Practical training in software development & IT solutions",
    category: "Education",
  },
  {
    title: "British Council",
    subtitle: "Professional Development Courses",
    extra: "Communication, leadership & career growth",
    category: "Education",
  },
];

const certificationList: EduItem[] = [
  {
    title: "IIT Certification",
    subtitle: "CodeRally 6.0 Hackathon – Competitive Programmer",
    category: "Certifications",
    img: iit,
    year: "2025",
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

const achievementList: EduItem[] = [
  {
    title: "🏆 Hackathon Winner – 1st Place",
    subtitle: "GENESYS Hackathon, Team CodeHub, IJSE (20+ teams)",
    category: "Achievements",
    year: "2024",
  },
  {
    title: "📋 Secretary – IJSE Student Committee",
    subtitle: "Managed 15+ events, led 60+ students",
    category: "Achievements",
    year: "2026",
  },
  {
    title: "📝 Vice Secretary – IJSE Student Committee",
    subtitle: "Campus leadership & student representation",
    category: "Achievements",
    year: "2025",
  },
  {
    title: "✍️ Technical Writer on Medium",
    subtitle: "Published 10+ articles on AI, ML & software development",
    category: "Achievements",
    year: "2024–Present",
  },
];

const skillCategories = [
  {
    label: "Languages",
    color: "from-green-600 to-emerald-400",
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <FaPython /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "SQL", icon: <FaDatabase /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
    ],
  },
  {
    label: "Frontend",
    color: "from-teal-600 to-green-400",
    skills: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
    ],
  },
  {
    label: "Mobile",
    color: "from-green-500 to-lime-400",
    skills: [
      { name: "React Native", icon: <FaMobile /> },
      { name: "Expo", icon: <FaMobile /> },
      { name: "Android Dev", icon: <FaMobile /> },
    ],
  },
  {
    label: "Backend",
    color: "from-emerald-700 to-green-500",
    skills: [
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "REST APIs", icon: <SiSwagger /> },
    ],
  },
  {
    label: "Databases",
    color: "from-green-600 to-teal-400",
    skills: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  },
  {
    label: "AI & ML",
    color: "from-lime-600 to-green-400",
    skills: [
      { name: "OpenAI API", icon: <BiBrain /> },
      { name: "Google Gen AI", icon: <BiBrain /> },
      { name: "Scikit-learn", icon: <BiBrain /> },
      { name: "Pandas", icon: <FaPython /> },
      { name: "NumPy", icon: <FaPython /> },
    ],
  },
  {
    label: "DevOps & Cloud",
    color: "from-green-700 to-emerald-500",
    skills: [
      { name: "Docker", icon: <FaDocker /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "AWS", icon: <FaAws /> },
      { name: "GitHub Actions", icon: <FaGitAlt /> },
      { name: "Nginx", icon: <SiNginx /> },
    ],
  },
  {
    label: "Tools",
    color: "from-teal-500 to-green-300",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Figma", icon: <SiFigma /> },
      { name: "Swagger", icon: <SiSwagger /> },
    ],
  },
];

const tabs = ["Education", "Certifications", "Achievements"] as const;
type Tab = (typeof tabs)[number];

const SkillsEducation: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<Tab>("Education");

  const allItems = [...educationList, ...certificationList, ...achievementList];
  const filteredItems = allItems.filter((item) => item.category === selectedTab);

  return (
    <section id="skills-education" className="py-24 px-6 md:px-10 bg-[#0D0D0D] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-green-500 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills, Education & Certifications
        </motion.h2>
        <motion.p
          className="text-gray-400 mb-14 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          A comprehensive overview of my technical stack, academic journey, and achievements.
        </motion.p>

        {/* Skill Category Groups */}
        <div className="space-y-8 mb-20 text-left">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.07, duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className={`text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${cat.color} bg-clip-text text-transparent`}>
                  {cat.label}
                </span>
                <div className="flex-1 h-px bg-gray-800" />
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={si}
                    whileHover={{ scale: 1.1, boxShadow: "0 0 12px #22c55e88" }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-center gap-1.5 bg-[#1A1A1A] border border-gray-700 hover:border-green-500 text-gray-200 px-3 py-1.5 rounded-full text-sm font-medium cursor-default transition-colors duration-200"
                  >
                    <span className="text-green-500">{skill.icon}</span>
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedTab === tab
                  ? "bg-green-500 text-black shadow-lg shadow-green-500/30 scale-105"
                  : "bg-[#1A1A1A] border border-gray-700 text-gray-300 hover:border-green-500 hover:text-green-400"
              }`}
            >
              {tab === "Education" && "🎓 "}
              {tab === "Certifications" && "📜 "}
              {tab === "Achievements" && "🏆 "}
              {tab}
            </button>
          ))}
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab}
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            {filteredItems.map((item, i) => (
              <motion.div
                key={i}
                className="bg-[#1A1A1A] p-6 rounded-xl shadow-lg border border-gray-800 hover:border-green-500/50 flex flex-col gap-2 w-[300px] transition-all duration-300"
                whileHover={{ translateY: -6, boxShadow: "0px 12px 30px rgba(34,197,94,0.25)" }}
              >
                <div className="flex items-start justify-between gap-2">
                  {selectedTab === "Education" && <MdSchool className="text-green-500 text-2xl mt-0.5 flex-shrink-0" />}
                  {selectedTab === "Certifications" && <MdWorkspacePremium className="text-green-500 text-2xl mt-0.5 flex-shrink-0" />}
                  {selectedTab === "Achievements" && <span className="text-xl flex-shrink-0">🏅</span>}
                  {item.year && (
                    <span className="text-xs text-green-500 font-mono bg-green-500/10 px-2 py-0.5 rounded-full whitespace-nowrap">
                      {item.year}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.subtitle}</p>
                {item.extra && <p className="text-gray-500 text-xs">{item.extra}</p>}
                {item.img && (
                  <motion.img
                    src={item.img}
                    alt={item.title}
                    className="mt-3 w-full h-36 object-contain rounded-lg bg-[#0D0D0D] p-2"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm">
            See more on my{" "}
            <a
              href="https://www.linkedin.com/in/sasuni-wijerathne-a3b517311"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:underline"
            >
              LinkedIn profile →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsEducation;