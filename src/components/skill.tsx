import { useState, useRef } from "react";
import { motion, AnimatePresence, useAnimationFrame } from "framer-motion";
import {
  FaJava, FaPython, FaReact, FaNodeJs, FaHtml5, FaCss3Alt,
  FaDatabase, FaGitAlt, FaDocker, FaAws, FaMobile,
} from "react-icons/fa";
import {
  SiSpringboot, SiTailwindcss, SiJavascript, SiMongodb,
  SiTypescript, SiNextdotjs, SiKubernetes, SiExpress,
  SiMysql, SiFirebase, SiPostman, SiFigma, SiSwagger,
  SiBootstrap, SiRedux, SiFlask, SiNginx, SiAngular,
  SiDotnet, SiRedis,
} from "react-icons/si";
import { MdSchool, MdWorkspacePremium } from "react-icons/md";
import { BiBrain } from "react-icons/bi";
import {
  HiOutlineAcademicCap, HiOutlineBadgeCheck, HiOutlineLightningBolt,
} from "react-icons/hi";
import { RiMedalLine, RiQuillPenLine, RiTeamLine } from "react-icons/ri";
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
  { label: "Languages",      color: "#22c55e", skills: [{ name: "Java", icon: <FaJava /> }, { name: "Python", icon: <FaPython /> }, { name: "JavaScript", icon: <SiJavascript /> }, { name: "TypeScript", icon: <SiTypescript /> }, { name: "SQL", icon: <FaDatabase /> }, { name: "HTML5", icon: <FaHtml5 /> }, { name: "CSS3", icon: <FaCss3Alt /> }] },
  { label: "Frontend",       color: "#34d399", skills: [{ name: "React.js", icon: <FaReact /> }, { name: "Next.js", icon: <SiNextdotjs /> }, { name: "Angular", icon: <SiAngular /> }, { name: "Redux", icon: <SiRedux /> }, { name: "Tailwind", icon: <SiTailwindcss /> }, { name: "Bootstrap", icon: <SiBootstrap /> }] },
  { label: "Mobile",         color: "#4ade80", skills: [{ name: "React Native", icon: <FaReact /> }, { name: "Expo", icon: <FaMobile /> }, { name: "Android", icon: <FaMobile /> }] },
  { label: "Backend",        color: "#16a34a", skills: [{ name: "Spring Boot", icon: <SiSpringboot /> }, { name: ".NET", icon: <SiDotnet /> }, { name: "Node.js", icon: <FaNodeJs /> }, { name: "Express", icon: <SiExpress /> }, { name: "Flask", icon: <SiFlask /> }, { name: "REST APIs", icon: <SiSwagger /> }] },
  { label: "Databases",      color: "#86efac", skills: [{ name: "MySQL", icon: <SiMysql /> }, { name: "MongoDB", icon: <SiMongodb /> }, { name: "Redis", icon: <SiRedis /> }, { name: "Firebase", icon: <SiFirebase /> }] },
  { label: "AI & ML",        color: "#bbf7d0", skills: [{ name: "OpenAI API", icon: <BiBrain /> }, { name: "Google Gen AI", icon: <BiBrain /> }, { name: "Scikit-learn", icon: <BiBrain /> }, { name: "Pandas", icon: <FaPython /> }, { name: "NumPy", icon: <FaPython /> }] },
  { label: "DevOps & Cloud", color: "#15803d", skills: [{ name: "Docker", icon: <FaDocker /> }, { name: "Kubernetes", icon: <SiKubernetes /> }, { name: "AWS", icon: <FaAws /> }, { name: "GitHub Actions", icon: <FaGitAlt /> }, { name: "Nginx", icon: <SiNginx /> }] },
  { label: "Tools",          color: "#6ee7b7", skills: [{ name: "Git", icon: <FaGitAlt /> }, { name: "Postman", icon: <SiPostman /> }, { name: "Figma", icon: <SiFigma /> }, { name: "Swagger", icon: <SiSwagger /> }] },
];

const tabs = ["Education", "Certifications", "Achievements"] as const;
type Tab = (typeof tabs)[number];
const tabIcons: Record<Tab, React.ReactNode> = {
  Education: <HiOutlineAcademicCap />,
  Certifications: <MdWorkspacePremium />,
  Achievements: <RiMedalLine />,
};

/* ══════════════════════════════════════════════
   FLOATING PARTICLE NODE
══════════════════════════════════════════════ */
interface NodeData {
  id: string; name: string; icon: React.ReactNode;
  x: number; y: number; vx: number; vy: number;
  size: number; color: string; catIdx: number;
}

function seededRandom(seed: number) {
  const x = Math.sin(seed + 1) * 43758.5453123;
  return x - Math.floor(x);
}

function buildNodes(W: number, H: number): NodeData[] {
  const nodes: NodeData[] = [];
  let idx = 0;
  skillCategories.forEach((cat, ci) => {
    cat.skills.forEach((skill) => {
      const r = seededRandom(idx * 7 + 3);
      const r2 = seededRandom(idx * 13 + 5);
      const r3 = seededRandom(idx * 17 + 2);
      const r4 = seededRandom(idx * 23 + 9);
      nodes.push({
        id: `${ci}-${skill.name}`,
        name: skill.name, icon: skill.icon,
        x: 60 + r * (W - 120),
        y: 40 + r2 * (H - 80),
        vx: (r3 - 0.5) * 0.35,
        vy: (r4 - 0.5) * 0.35,
        size: 42 + r * 14,
        color: cat.color,
        catIdx: ci,
      });
      idx++;
    });
  });
  return nodes;
}

/* ══════════════════════════════════════════════
   CONSTELLATION CANVAS
══════════════════════════════════════════════ */
const ConstellationSkills: React.FC = () => {
  const W = 760, H = 420;
  const nodesRef = useRef<NodeData[]>(buildNodes(W, H));
  const [renderTick, setRenderTick] = useState(0);
  const [hoveredCat, setHoveredCat] = useState<number | null>(null);
  const [activeCat, setActiveCat] = useState<number | null>(null);
  const [tooltip, setTooltip] = useState<{ node: NodeData; mx: number; my: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  console.log(renderTick);
  

  // Physics tick
  useAnimationFrame(() => {
    const nodes = nodesRef.current;
    for (const n of nodes) {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 30)      { n.x = 30;      n.vx *= -1; }
      if (n.x > W - 30)  { n.x = W - 30;  n.vx *= -1; }
      if (n.y < 20)      { n.y = 20;      n.vy *= -1; }
      if (n.y > H - 20)  { n.y = H - 20;  n.vy *= -1; }
    }
    setRenderTick(t => t + 1);
  });

  const focusCat = activeCat !== null ? activeCat : hoveredCat;
  const nodes = nodesRef.current;

  // Draw SVG lines between nodes of same category
  const lines: React.ReactNode[] = [];
  if (focusCat !== null) {
    const catNodes = nodes.filter(n => n.catIdx === focusCat);
    for (let i = 0; i < catNodes.length; i++) {
      for (let j = i + 1; j < catNodes.length; j++) {
        const a = catNodes[i], b = catNodes[j];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist < 240) {
          const opacity = (1 - dist / 240) * 0.4;
          lines.push(
            <line key={`${a.id}-${b.id}`}
              x1={a.x} y1={a.y} x2={b.x} y2={b.y}
              stroke={a.color} strokeWidth="0.8" strokeOpacity={opacity}
            />
          );
        }
      }
    }
  }

  return (
    <div className="flex flex-col items-center gap-6 w-full">

      {/* Category filter pills */}
      <div className="flex flex-wrap justify-center gap-2 max-w-3xl">
        {skillCategories.map((cat, ci) => (
          <button
            key={ci}
            onMouseEnter={() => setHoveredCat(ci)}
            onMouseLeave={() => setHoveredCat(null)}
            onClick={() => setActiveCat(activeCat === ci ? null : ci)}
            className="relative px-3.5 py-1.5 rounded-full text-[13px] tracking-widest uppercase transition-all duration-300"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            {activeCat === ci && (
              <motion.div layoutId="catPill"
                className="absolute inset-0 rounded-full"
                style={{ background: `${cat.color}18`, border: `1px solid ${cat.color}55` }}
                transition={{ type: "spring", stiffness: 500, damping: 38 }}
              />
            )}
            <span style={{
              color: activeCat === ci || hoveredCat === ci ? cat.color : "rgba(255,255,255,0.2)",
              transition: "color 0.2s",
              position: "relative", zIndex: 1,
            }}>
              {cat.label}
            </span>
          </button>
        ))}
        {activeCat !== null && (
          <button onClick={() => setActiveCat(null)}
            className="px-3.5 py-1.5 rounded-full text-[13px] tracking-widest uppercase text-white/20 hover:text-white/50 transition-colors duration-200 border border-white/[0.06]"
            style={{ fontFamily: "'DM Mono', monospace" }}>
            all
          </button>
        )}
      </div>

      {/* Constellation stage */}
      <div ref={containerRef} className="relative w-full overflow-hidden rounded-2xl"
        style={{ maxWidth: `${W}px`, height: `${H}px`, background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.04)" }}>

        {/* Background grid dots */}
        <svg className="absolute inset-0 pointer-events-none" width={W} height={H}>
          {Array.from({ length: 12 }).map((_, r) =>
            Array.from({ length: 20 }).map((_, c) => (
              <circle key={`${r}-${c}`} cx={c * 40 + 20} cy={r * 36 + 18} r="0.8"
                fill="rgba(34,197,94,0.08)" />
            ))
          )}
        </svg>

        {/* Connection lines SVG */}
        <svg className="absolute inset-0 pointer-events-none" width={W} height={H}>
          {lines}
        </svg>

        {/* Nodes */}
        {nodes.map((node) => {
          const isFocused = focusCat === null || node.catIdx === focusCat;
          const isActive  = focusCat === node.catIdx;
          return (
            <motion.div
              key={node.id}
              className="absolute flex flex-col items-center gap-1 cursor-pointer group"
              style={{
                left: node.x, top: node.y,
                transform: "translate(-50%, -50%)",
                opacity: isFocused ? 1 : 0.12,
                transition: "opacity 0.4s ease",
                zIndex: isActive ? 10 : 1,
              }}
              onMouseEnter={(e) => {
                const rect = containerRef.current?.getBoundingClientRect();
                if (rect) setTooltip({ node, mx: node.x, my: node.y });
                console.log(e);
                
              }}
              onMouseLeave={() => setTooltip(null)}
            >
              {/* Glow ring on active */}
              {isActive && (
                <motion.div
                  className="absolute rounded-full pointer-events-none"
                  style={{ width: node.size + 20, height: node.size + 20,
                    background: `radial-gradient(circle, ${node.color}30 0%, transparent 70%)`,
                    left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              )}

              {/* Icon bubble */}
              <div
                className="flex items-center justify-center rounded-full transition-all duration-300"
                style={{
                  width: node.size, height: node.size,
                  background: isActive
                    ? `${node.color}22`
                    : "rgba(255,255,255,0.03)",
                  border: `1px solid ${isActive ? node.color + "60" : "rgba(255,255,255,0.07)"}`,
                  fontSize: node.size * 0.48,
                  color: isActive ? node.color : "rgba(255,255,255,0.35)",
                  boxShadow: isActive ? `0 0 16px ${node.color}30` : "none",
                }}
              >
                {node.icon}
              </div>

              {/* Label — only show on active category */}
              <AnimatePresence>
                {isActive && (
                  <motion.span
                    initial={{ opacity: 0, y: 4, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="text-[11px] whitespace-nowrap tracking-wider"
                    style={{ color: node.color, fontFamily: "'DM Mono', monospace" }}
                  >
                    {node.name}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}

        {/* Tooltip */}
        <AnimatePresence>
          {tooltip && focusCat === null && (
            <motion.div
              key={tooltip.node.id}
              initial={{ opacity: 0, scale: 0.85, y: 6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.15 }}
              className="absolute pointer-events-none z-50"
              style={{
                left: tooltip.mx, top: tooltip.my - tooltip.node.size / 2 - 36,
                transform: "translateX(-50%)",
              }}
            >
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg"
                style={{ background: "#111", border: `1px solid ${tooltip.node.color}40` }}>
                <span style={{ color: tooltip.node.color, fontSize: 15 }}>{tooltip.node.icon}</span>
                <span className="text-[13px] text-white/70" style={{ fontFamily: "'DM Mono', monospace" }}>
                  {tooltip.node.name}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hint */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[11px] text-white/15 tracking-widest pointer-events-none"
          style={{ fontFamily: "'DM Mono', monospace" }}>
          {activeCat === null ? "hover to inspect · click category to focus" : `${skillCategories[activeCat].skills.length} skills in ${skillCategories[activeCat].label} · click again to clear`}
        </div>
      </div>

      {/* Stats row */}
      <div className="flex items-center justify-center gap-8 flex-wrap">
        {[
          { label: "total skills", value: skillCategories.reduce((a, c) => a + c.skills.length, 0) },
          { label: "categories", value: skillCategories.length },
          { label: "years learning", value: "3+" },
        ].map((s) => (
          <div key={s.label} className="flex flex-col items-center gap-0.5">
            <span className="text-2xl font-black text-green-500" style={{ fontFamily: "'Syne', sans-serif" }}>
              {s.value}
            </span>
            <span className="text-[10px] tracking-widest uppercase text-white/25" style={{ fontFamily: "'DM Mono', monospace" }}>
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════
   MAIN SECTION
══════════════════════════════════════════════ */
const SkillsEducation: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<Tab>("Education");
  const allItems = [...educationList, ...certificationList, ...achievementList];
  const filteredItems = allItems.filter(item => item.category === selectedTab);

  return (
    <section id="skills-education"
      className="relative py-24 px-6 md:px-10 bg-[#0D0D0D] text-white overflow-hidden">

      {/* BG grid */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(34,197,94,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,197,94,0.6) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(34,197,94,0.07) 0%, transparent 70%)" }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Mono:wght@400;500&display=swap');
        .edu-card { transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s; }
        .edu-card:hover { border-color: rgba(34,197,94,0.35) !important; box-shadow: 0 0 40px rgba(34,197,94,0.07), inset 0 0 30px rgba(34,197,94,0.02); transform: translateY(-4px); }
      `}</style>

      <div className="relative max-w-5xl mx-auto text-center">

        {/* ── Heading ── */}
        <motion.div className="mb-16"
          initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-xs tracking-[0.4em] text-green-500/50 uppercase mb-3 font-mono">
            — stack & journey —
          </p>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-none"
            style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.02em" }}>
            Skills &{" "}
            <span className="text-transparent" style={{ WebkitTextStroke: "2px #22c55e" }}>
              Education
            </span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-px bg-green-500/30" />
        </motion.div>

        {/* ── Tech Stack ── */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="flex-1 h-px bg-white/[0.05]" />
            <span className="text-[10px] tracking-[0.35em] text-green-500/50 uppercase font-mono px-2">Tech Stack</span>
            <div className="flex-1 h-px bg-white/[0.05]" />
          </div>
          <ConstellationSkills />
        </div>

        {/* ── Journey ── */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-white/[0.05]" />
          <span className="text-[10px] tracking-[0.35em] text-green-500/50 uppercase font-mono px-2">Journey</span>
          <div className="flex-1 h-px bg-white/[0.05]" />
        </div>

        {/* ── Tabs ── */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {tabs.map(tab => (
            <button key={tab} onClick={() => setSelectedTab(tab)}
              className="relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium overflow-hidden"
              style={{ fontFamily: "'DM Mono', monospace" }}>
              {selectedTab === tab && (
                <motion.div layoutId="tabBg"
                  className="absolute inset-0 bg-green-500 rounded-xl"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }} />
              )}
              {selectedTab !== tab && (
                <span className="absolute inset-0 rounded-xl border border-white/[0.08] bg-white/[0.02]" />
              )}
              <span className={`relative z-10 text-base ${selectedTab === tab ? "text-black" : "text-green-500/70"}`}>
                {tabIcons[tab]}
              </span>
              <span className={`relative z-10 ${selectedTab === tab ? "text-black" : "text-white/50"}`}>
                {tab}
              </span>
            </button>
          ))}
        </div>

        {/* ── Cards ── */}
        <AnimatePresence mode="wait">
          <motion.div key={selectedTab}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.3 }}>
            {filteredItems.map((item, i) => (
              <motion.div key={i}
                className="edu-card relative bg-[#0f0f0f] border border-white/[0.06] rounded-2xl p-5 flex flex-col gap-3 overflow-hidden"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}>
                <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none"
                  style={{ background: "radial-gradient(circle at top right, rgba(34,197,94,0.06), transparent 70%)" }} />
                <div className="flex items-start justify-between gap-2">
                  <div className="w-9 h-9 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-500 text-lg shrink-0">
                    {item.icon}
                  </div>
                  {item.year && (
                    <span className="text-[10px] text-green-500 bg-green-500/10 border border-green-500/20 px-2 py-1 rounded-lg tracking-wider whitespace-nowrap"
                      style={{ fontFamily: "'DM Mono', monospace" }}>
                      {item.year}
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white/90 leading-snug mb-1"
                    style={{ fontFamily: "'Syne', sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-white/40 text-xs leading-relaxed" style={{ fontFamily: "'DM Mono', monospace" }}>
                    {item.subtitle}
                  </p>
                  {item.extra && (
                    <p className="text-green-500/40 text-[11px] mt-2 leading-relaxed" style={{ fontFamily: "'DM Mono', monospace" }}>
                      {item.extra}
                    </p>
                  )}
                </div>
                {item.img && (
                  <div className="mt-1 rounded-xl overflow-hidden border border-white/[0.05] bg-black/30">
                    <img src={item.img} alt={item.title}
                      className="w-full h-32 object-contain p-3 opacity-90 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* LinkedIn */}
        <div className="mt-12">
          <a href="https://www.linkedin.com/in/sasuni-wijerathne-a3b517311"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-white/30 hover:text-green-500 transition-colors duration-300 border border-white/[0.06] hover:border-green-500/30 rounded-full px-5 py-2.5"
            style={{ fontFamily: "'DM Mono', monospace" }}>
            <MdWorkspacePremium className="text-sm" />
            View full profile on LinkedIn
          </a>
        </div>

      </div>
    </section>
  );
};

export default SkillsEducation;