import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaJava, FaPython, FaReact, FaNodeJs, FaHtml5, FaCss3Alt,
  FaDatabase, FaGitAlt, FaDocker, FaAws, FaMobile,
} from "react-icons/fa";
import {
  SiSpringboot, SiTailwindcss, SiJavascript, SiMongodb,
  SiTypescript, SiNextdotjs, SiKubernetes, SiExpress,
  SiMysql, SiFirebase, SiPostman, SiFigma, SiSwagger,
  SiBootstrap, SiRedux, SiFlask, SiNginx, SiAngular,
  SiDotnet, SiRedis, SiSpring, SiPostgresql, SiRabbitmq, SiPytorch,
  SiStreamlit, SiGooglecloud,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { MdSchool, MdWorkspacePremium } from "react-icons/md";
import { BiBrain } from "react-icons/bi";
import {
  HiOutlineAcademicCap, HiOutlineBadgeCheck, HiOutlineLightningBolt,
} from "react-icons/hi";
import { RiMedalLine, RiQuillPenLine, RiTeamLine } from "react-icons/ri";
import { HiArrowUpRight } from "react-icons/hi2";
import { Reveal, SectionHeader } from "./ui";
import iit from "../assets/iit.jpg";
import kodekamp from "../assets/kodecloud.jpg";
import ibm from "../assets/ibm.png";

/* ══════════════════════════════════════════════
   DATA
══════════════════════════════════════════════ */
interface EduItem {
  title: string; subtitle: string;
  category: "Education" | "Certifications" | "Achievements";
  extra?: string; img?: string; year?: string; icon?: React.ReactNode;
}

const educationList: EduItem[] = [
  { title: "Institute of Software Engineering (IJSE)", subtitle: "Higher National Diploma (HND) in Software Engineering", category: "Education", extra: "Specializing in Full-Stack, Mobile & AI/ML Engineering", year: "2024 – Present", icon: <MdSchool /> },
  { title: "IJSE – Certified AI & ML Engineer (CAME)", subtitle: "Certified AI & Machine Learning Engineer Program", category: "Education", extra: "Hands-on ML model development, data analysis, and AI integration", year: "2025 – Present", icon: <BiBrain /> },
  { title: "St. Paul's Milagiriya, Colombo 03", subtitle: "G.C.E. Advanced Level – Mathematics Stream (IT)", category: "Education", year: "2023", icon: <HiOutlineAcademicCap /> },
  { title: "IMBS Green Campus", subtitle: "Information Technology Certification", extra: "Practical training in software development & IT solutions", category: "Education", icon: <HiOutlineBadgeCheck /> },
  { title: "British Council", subtitle: "Professional Development Courses", extra: "Communication, leadership & career growth", category: "Education", icon: <HiOutlineLightningBolt /> },
];
const certificationList: EduItem[] = [
  { title: "IIT Certification", subtitle: "CodeRally 6.0 Hackathon – Competitive Programmer", category: "Certifications", img: iit, year: "2025", icon: <MdWorkspacePremium /> },
  { title: "KodeCamp AI Course", subtitle: "Free 1-week AI Workshop", category: "Certifications", img: kodekamp, icon: <BiBrain /> },
  { title: "IBM Certificate", subtitle: "Introduction to Data Concepts", category: "Certifications", img: ibm, icon: <HiOutlineBadgeCheck /> },
];
const achievementList: EduItem[] = [
  { title: "Hackathon Winner – 1st Place", subtitle: "GENESYS Hackathon, Team CodeHub, IJSE (20+ teams)", category: "Achievements", year: "2024", icon: <RiMedalLine /> },
  { title: "Secretary – IJSE Student Committee", subtitle: "Managed 15+ events, led 60+ students", category: "Achievements", year: "2026", icon: <RiTeamLine /> },
  { title: "Vice Secretary – IJSE Student Committee", subtitle: "Campus leadership & student representation", category: "Achievements", year: "2025", icon: <RiTeamLine /> },
  { title: "Technical Writer on Medium", subtitle: "Published 10+ articles on AI, ML & software development", category: "Achievements", year: "2024–Present", icon: <RiQuillPenLine /> },
];

const skillCategories = [
  { label: "Languages",      skills: [{ name: "Java", icon: <FaJava /> }, { name: "Python", icon: <FaPython /> }, { name: "JavaScript", icon: <SiJavascript /> }, { name: "TypeScript", icon: <SiTypescript /> }, { name: "SQL", icon: <FaDatabase /> }, { name: "HTML5", icon: <FaHtml5 /> }, { name: "CSS3", icon: <FaCss3Alt /> }] },
  { label: "Frontend",       skills: [{ name: "React.js", icon: <FaReact /> }, { name: "Next.js", icon: <SiNextdotjs /> }, { name: "Angular", icon: <SiAngular /> }, { name: "Redux", icon: <SiRedux /> }, { name: "Tailwind", icon: <SiTailwindcss /> }, { name: "Bootstrap", icon: <SiBootstrap /> }] },
  { label: "Mobile",         skills: [{ name: "React Native", icon: <FaReact /> }, { name: "Expo", icon: <FaMobile /> }, { name: "Android", icon: <FaMobile /> }] },
  { label: "Backend",        skills: [{ name: "Spring Boot", icon: <SiSpringboot /> }, { name: "Spring Cloud", icon: <SiSpring /> }, { name: ".NET", icon: <SiDotnet /> }, { name: "Node.js", icon: <FaNodeJs /> }, { name: "Express", icon: <SiExpress /> }, { name: "Flask", icon: <SiFlask /> }, { name: "RabbitMQ", icon: <SiRabbitmq /> }, { name: "REST APIs", icon: <SiSwagger /> }] },
  { label: "Databases",      skills: [{ name: "MySQL", icon: <SiMysql /> }, { name: "PostgreSQL", icon: <SiPostgresql /> }, { name: "MongoDB", icon: <SiMongodb /> }, { name: "Redis", icon: <SiRedis /> }, { name: "Firebase", icon: <SiFirebase /> }] },
  { label: "AI & ML",        skills: [{ name: "OpenAI API", icon: <BiBrain /> }, { name: "Google Gen AI", icon: <BiBrain /> }, { name: "Scikit-learn", icon: <BiBrain /> }, { name: "PyTorch", icon: <SiPytorch /> }, { name: "Streamlit", icon: <SiStreamlit /> }, { name: "Pandas", icon: <FaPython /> }, { name: "NumPy", icon: <FaPython /> }] },
  { label: "DevOps & Cloud", skills: [{ name: "Docker", icon: <FaDocker /> }, { name: "Kubernetes", icon: <SiKubernetes /> }, { name: "AWS", icon: <FaAws /> }, { name: "Google Cloud", icon: <SiGooglecloud /> }, { name: "Azure", icon: <VscAzure /> }, { name: "GitHub Actions", icon: <FaGitAlt /> }, { name: "Nginx", icon: <SiNginx /> }] },
  { label: "Tools",          skills: [{ name: "Git", icon: <FaGitAlt /> }, { name: "Postman", icon: <SiPostman /> }, { name: "Figma", icon: <SiFigma /> }, { name: "Swagger", icon: <SiSwagger /> }] },
];

const tabs = ["Education", "Certifications", "Achievements"] as const;
type Tab = (typeof tabs)[number];
const tabIcons: Record<Tab, React.ReactNode> = {
  Education: <HiOutlineAcademicCap />,
  Certifications: <MdWorkspacePremium />,
  Achievements: <RiMedalLine />,
};


const totalSkills = skillCategories.reduce((a, c) => a + c.skills.length, 0);

/* ══════════════════════════════════════════════
   MAIN SECTION
══════════════════════════════════════════════ */
const SkillsEducation: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<Tab>("Education");
  const allItems = [...educationList, ...certificationList, ...achievementList];
  const filteredItems = allItems.filter(item => item.category === selectedTab);

  return (
    <section id="skills-education" className="l-section">
      <div className="l-container">

        <SectionHeader
          num="04"
          label="Skills & Education"
          title={<>A toolkit for every<br className="hidden sm:block" /> layer of the stack.</>}
          lead={`${totalSkills} technologies across ${skillCategories.length} disciplines — and 3+ years of learning, building and shipping.`}
        />

        {/* ── Tech stack grid ── */}
        <Reveal>
          <div className="l-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {skillCategories.map(cat => (
              <div key={cat.label} className="p-6 flex flex-col gap-4 transition-colors duration-200 hover:!bg-[var(--bg-elevated)]">
                <div className="flex items-center justify-between">
                  <h3 className="text-[14px] font-medium" style={{ color: "var(--text-1)" }}>{cat.label}</h3>
                  <span className="l-mono text-[11px]" style={{ color: "var(--text-4)" }}>
                    {String(cat.skills.length).padStart(2, "0")}
                  </span>
                </div>
                <ul className="flex flex-wrap gap-1.5">
                  {cat.skills.map(skill => (
                    <li key={skill.name} className="l-tag gap-1.5 !h-7 !text-[12.5px]" style={{ color: "var(--text-2)" }}>
                      <span className="text-[13px]" style={{ color: "var(--text-3)" }}>{skill.icon}</span>
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ── Journey ── */}
        <div className="mt-24 grid md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] gap-10 md:gap-16">
          <Reveal>
            <h3 className="text-2xl font-semibold tracking-[-0.02em] l-gradient-text">Journey</h3>
            <p className="l-body mt-3 max-w-xs">
              Education, certifications and milestones that shaped how I build.
            </p>

            {/* segmented control */}
            <div className="inline-flex flex-wrap mt-8 p-1 rounded-[10px] gap-1"
              style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)" }}
              role="tablist">
              {tabs.map(tab => (
                <button key={tab} role="tab" aria-selected={selectedTab === tab}
                  onClick={() => setSelectedTab(tab)}
                  className="relative flex items-center gap-1.5 h-8 px-3 rounded-md text-[13px] font-medium transition-colors duration-150"
                  style={{ color: selectedTab === tab ? "var(--text-1)" : "var(--text-3)" }}>
                  {selectedTab === tab && (
                    <motion.span layoutId="journeyTab" className="absolute inset-0 rounded-md"
                      style={{ background: "rgba(255,255,255,0.08)", border: "1px solid var(--border)" }}
                      transition={{ type: "spring", stiffness: 500, damping: 40 }} />
                  )}
                  <span className="relative">{tabIcons[tab]}</span>
                  <span className="relative">{tab}</span>
                </button>
              ))}
            </div>

            <a href="https://www.linkedin.com/in/sasuni-wijerathne-a3b517311" target="_blank" rel="noopener noreferrer"
              className="l-link inline-flex items-center gap-1.5 text-[13px] mt-8">
              View full profile on LinkedIn <HiArrowUpRight />
            </a>
          </Reveal>

          <AnimatePresence mode="wait">
            <motion.ul key={selectedTab}
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col" style={{ borderTop: "1px solid var(--border)" }}>
              {filteredItems.map(item => (
                <li key={item.title} className="flex gap-4 py-5" style={{ borderBottom: "1px solid var(--border)" }}>
                  <div className="w-9 h-9 rounded-lg shrink-0 flex items-center justify-center text-[17px]"
                    style={{ border: "1px solid var(--border-strong)", color: "var(--text-2)", background: "rgba(255,255,255,0.03)" }}>
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h4 className="text-[15px] font-medium tracking-[-0.01em]" style={{ color: "var(--text-1)" }}>{item.title}</h4>
                      {item.year && <span className="l-mono text-[12px]" style={{ color: "var(--text-4)" }}>{item.year}</span>}
                    </div>
                    <p className="text-[14px] mt-1" style={{ color: "var(--text-2)" }}>{item.subtitle}</p>
                    {item.extra && <p className="text-[13.5px] mt-1" style={{ color: "var(--text-3)" }}>{item.extra}</p>}
                    {item.img && (
                      <a href={item.img} target="_blank" rel="noopener noreferrer"
                        className="block mt-4 w-full max-w-xs overflow-hidden rounded-lg transition-colors"
                        style={{ border: "1px solid var(--border)", background: "var(--bg-elevated)" }}>
                        <img src={item.img} alt={item.title} className="w-full h-36 object-contain p-3" loading="lazy" />
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default SkillsEducation;
