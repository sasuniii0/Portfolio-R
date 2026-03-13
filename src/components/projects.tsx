import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  RiGithubLine, RiExternalLinkLine,
  RiDatabase2Line, RiSmartphoneLine, RiServerLine,
} from "react-icons/ri";
import { HiArrowUpRight } from "react-icons/hi2";

/* ─────────────────────────────── */
/*  PROJECT DATA                   */
/* ─────────────────────────────── */
interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  longDesc: string;
  tags: string[];
  type: string;
  typeIcon: React.ReactNode;
  github: string;
  live?: string;
  highlights: string[];
  color: string;        // accent tint
  index: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    index: "01",
    title: "Diabetes Readmission Risk Analysis",
    subtitle: "Vitality Complexity Index (VCI)",
    description:
      "A comprehensive data science project analyzing diabetes patient readmissions across 130 US hospitals, implementing a custom clinical risk scoring system to identify high-risk patients and reduce healthcare costs under HRRP.",
    longDesc:
      "Analyzed 101,766 patient encounters (1999–2008) to predict 30-day readmission risk. The VCI — inspired by the industry-standard LACE Index — helps healthcare providers stratify patient risk before discharge.",
    tags: ["Python", "Pandas", "Scikit-learn", "NumPy", "Matplotlib", "Seaborn", "Jupyter"],
    type: "Data Science",
    typeIcon: <RiDatabase2Line />,
    github: "https://github.com/sasuniii0",
    highlights: [
      "101,766 patient encounters analyzed",
      "Custom VCI clinical scoring system",
      "30-day readmission prediction",
      "HRRP financial penalty reduction",
    ],
    color: "34,197,94",
    index2: "rgba(34,197,94,0.07)",
  } as any,
  {
    id: 2,
    index: "02",
    title: "DailyForge",
    subtitle: "Forge Your Future, One Strike at a Time.",
    description:
      "A rugged, blacksmith-inspired habit-tracking mobile application that turns discipline into a visual craft. Every habit is a piece of iron that must be struck daily to stay hot.",
    longDesc:
      "Built with secure authentication, full CRUD functionality, state management, navigation, and cloud-based data persistence using Firebase. Developed as final coursework for ITS 2127 – Advanced Mobile Developer.",
    tags: ["React Native", "Firebase", "TypeScript", "Expo", "Redux", "AsyncStorage"],
    type: "Mobile App",
    typeIcon: <RiSmartphoneLine />,
    github: "https://github.com/sasuniii0",
    highlights: [
      "JWT + Firebase Auth",
      "Full CRUD habit tracking",
      "Cloud data persistence",
      "Streak & progress analytics",
    ],
    color: "74,222,128",
    index2: "rgba(74,222,128,0.07)",
  } as any,
  {
    id: 3,
    index: "03",
    title: "PropertyPulse",
    subtitle: "Backend API & Frontend Platform",
    description:
      "A robust RESTful API and full real estate platform built with Node.js, Express, TypeScript — featuring AI-powered analytics, Stripe payments, Cloudinary uploads, and automated email notifications.",
    longDesc:
      "JWT auth with RBAC, property CRUD, Stripe payment processing for premium listings, Cloudinary image storage, SendGrid email service, Google Generative AI & OpenAI integration, dynamic PDF reporting.",
    tags: ["Node.js", "Express", "TypeScript", "MongoDB", "Stripe", "OpenAI", "Cloudinary", "React"],
    type: "Full Stack",
    typeIcon: <RiServerLine />,
    github: "https://github.com/sasuniii0",
    highlights: [
      "AI-powered property analytics",
      "Stripe payment integration",
      "Role-based access control",
      "PDF report generation",
    ],
    color: "16,185,129",
    index2: "rgba(16,185,129,0.07)",
  } as any,
];

/* ─────────────────────────────── */
/*  FEATURED CARD (first project)  */
/* ─────────────────────────────── */
const FeaturedProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [hov, setHov] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="relative overflow-hidden rounded-2xl"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: hov
          ? `1px solid rgba(${project.color},0.4)`
          : "1px solid rgba(255,255,255,0.06)",
        boxShadow: hov
          ? `0 0 60px rgba(${project.color},0.1), inset 0 0 40px rgba(${project.color},0.02)`
          : "none",
        transition: "border 0.3s, box-shadow 0.3s",
      }}
    >
      {/* Big number watermark */}
      <div className="absolute -bottom-4 -right-2 text-[8rem] font-black leading-none select-none pointer-events-none"
        style={{
          fontFamily: "'Syne', sans-serif",
          color: hov ? `rgba(${project.color},0.07)` : "rgba(255,255,255,0.02)",
          transition: "color 0.3s",
        }}>
        {project.index}
      </div>

      <div className="relative flex flex-col lg:flex-row gap-0">

        {/* Left visual panel */}
        <div className="relative lg:w-[42%] min-h-[220px] overflow-hidden flex items-center justify-center shrink-0"
          style={{ background: `rgba(${project.color},0.04)` }}>

          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `linear-gradient(rgba(${project.color},1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(${project.color},1) 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
            }} />

          {/* Center icon cluster */}
          <div className="relative z-10 flex flex-col items-center gap-4 p-8">
            <motion.div
              animate={{ rotate: hov ? 360 : 0 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl"
              style={{
                background: `rgba(${project.color},0.12)`,
                border: `1px solid rgba(${project.color},0.3)`,
                color: `rgb(${project.color})`,
                boxShadow: hov ? `0 0 30px rgba(${project.color},0.2)` : "none",
                transition: "box-shadow 0.3s",
              }}>
              {project.typeIcon}
            </motion.div>

            {/* type label */}
            <span className="text-[10px] tracking-[0.3em] uppercase px-3 py-1 rounded-full"
              style={{
                fontFamily: "'DM Mono', monospace",
                color: `rgba(${project.color},0.8)`,
                background: `rgba(${project.color},0.1)`,
                border: `1px solid rgba(${project.color},0.2)`,
              }}>
              {project.type}
            </span>

            {/* Highlights */}
            <div className="flex flex-col gap-1.5 w-full">
              {project.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full shrink-0"
                    style={{ background: `rgba(${project.color},0.6)` }} />
                  <span className="text-[10px] text-white/30"
                    style={{ fontFamily: "'DM Mono', monospace" }}>
                    {h}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right fade */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0D0D0D] hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] to-transparent lg:hidden" />
        </div>

        {/* Right content */}
        <div className="flex flex-col justify-between gap-5 p-7 flex-1">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="text-[11px] text-white/20" style={{ fontFamily: "'DM Mono', monospace" }}>
                {project.index}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-md"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  color: `rgba(${project.color},0.7)`,
                  background: `rgba(${project.color},0.08)`,
                  border: `1px solid rgba(${project.color},0.15)`,
                }}>
                Featured
              </span>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-black text-white/90 leading-snug"
                style={{ fontFamily: "'Syne', sans-serif" }}>
                {project.title}
              </h3>
              <p className="text-sm mt-0.5" style={{ color: `rgba(${project.color},0.6)`, fontFamily: "'DM Mono', monospace" }}>
                {project.subtitle}
              </p>
            </div>

            <p className="text-white/35 text-sm leading-relaxed"
              style={{ fontFamily: "'DM Mono', monospace" }}>
              {project.longDesc}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mt-1">
              {project.tags.map((tag, ti) => (
                <span key={ti} className="text-[10px] px-2 py-0.5 rounded-md"
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    color: "rgba(255,255,255,0.35)",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs transition-all duration-300 hover:bg-white/5"
              style={{
                fontFamily: "'DM Mono', monospace",
                color: "rgba(255,255,255,0.4)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}>
              <RiGithubLine className="text-sm" /> View Code
            </a>
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs transition-all duration-300"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  color: `rgba(${project.color},0.8)`,
                  background: `rgba(${project.color},0.08)`,
                  border: `1px solid rgba(${project.color},0.2)`,
                }}>
                <RiExternalLinkLine className="text-sm" /> Live Demo
              </a>
            )}
            <motion.span
              animate={{ x: hov ? 4 : 0 }}
              className="ml-auto flex items-center gap-1 text-xs"
              style={{ color: `rgba(${project.color},0.5)`, fontFamily: "'DM Mono', monospace" }}>
              Explore <HiArrowUpRight />
            </motion.span>
          </div>
        </div>
      </div>

      {/* Bottom sweep */}
      <motion.div className="absolute bottom-0 left-0 h-[2px] rounded-full"
        style={{ background: `linear-gradient(90deg, rgb(${project.color}), rgba(${project.color},0.3))` }}
        animate={{ width: hov ? "100%" : "0%" }}
        transition={{ duration: 0.4, ease: "easeOut" }} />
    </motion.div>
  );
};

/* ─────────────────────────────── */
/*  SMALL CARD                     */
/* ─────────────────────────────── */
const SmallProjectCard: React.FC<{ project: Project; delay: number }> = ({ project, delay }) => {
  const [hov, setHov] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, type: "spring", stiffness: 130 }}
      whileHover={{ y: -6 }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="relative flex flex-col gap-4 rounded-2xl overflow-hidden p-6"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: hov
          ? `1px solid rgba(${project.color},0.35)`
          : "1px solid rgba(255,255,255,0.06)",
        boxShadow: hov
          ? `0 0 40px rgba(${project.color},0.08)`
          : "none",
        transition: "border 0.3s, box-shadow 0.3s",
      }}
    >
      {/* Watermark */}
      <div className="absolute -bottom-2 -right-1 text-[5rem] font-black leading-none select-none pointer-events-none"
        style={{
          fontFamily: "'Syne', sans-serif",
          color: hov ? `rgba(${project.color},0.06)` : "rgba(255,255,255,0.015)",
          transition: "color 0.3s",
        }}>
        {project.index}
      </div>

      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 transition-all duration-300"
          style={{
            background: hov ? `rgba(${project.color},0.15)` : `rgba(${project.color},0.08)`,
            border: `1px solid rgba(${project.color},0.2)`,
            color: `rgb(${project.color})`,
            boxShadow: hov ? `0 0 16px rgba(${project.color},0.2)` : "none",
          }}>
          {project.typeIcon}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[9px] px-2 py-0.5 rounded-md"
            style={{
              fontFamily: "'DM Mono', monospace",
              color: `rgba(${project.color},0.6)`,
              background: `rgba(${project.color},0.07)`,
              border: `1px solid rgba(${project.color},0.12)`,
            }}>
            {project.type}
          </span>
          <span className="text-[10px] text-white/15" style={{ fontFamily: "'DM Mono', monospace" }}>
            {project.index}
          </span>
        </div>
      </div>

      {/* Title */}
      <div>
        <h3 className="text-base font-bold leading-snug transition-colors duration-300"
          style={{
            fontFamily: "'Syne', sans-serif",
            color: hov ? `rgb(${project.color})` : "rgba(255,255,255,0.88)",
          }}>
          {project.title}
        </h3>
        <p className="text-[11px] mt-0.5" style={{ color: `rgba(${project.color},0.5)`, fontFamily: "'DM Mono', monospace" }}>
          {project.subtitle}
        </p>
      </div>

      {/* Description */}
      <p className="text-white/30 text-[11px] leading-relaxed line-clamp-3"
        style={{ fontFamily: "'DM Mono', monospace" }}>
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1">
        {project.tags.slice(0, 4).map((tag, ti) => (
          <span key={ti} className="text-[9px] px-1.5 py-0.5 rounded"
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "rgba(255,255,255,0.25)",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}>
            {tag}
          </span>
        ))}
        {project.tags.length > 4 && (
          <span className="text-[9px] px-1.5 py-0.5 rounded text-white/20"
            style={{ fontFamily: "'DM Mono', monospace" }}>
            +{project.tags.length - 4}
          </span>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center gap-2 pt-3 mt-auto"
        style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <a href={project.github} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-[10px] text-white/25 hover:text-white/60 transition-colors duration-300"
          style={{ fontFamily: "'DM Mono', monospace" }}>
          <RiGithubLine /> GitHub
        </a>
        <span className="ml-auto flex items-center gap-1 text-[10px] transition-colors duration-300"
          style={{ color: hov ? `rgba(${project.color},0.7)` : "rgba(255,255,255,0.2)", fontFamily: "'DM Mono', monospace" }}>
          View <HiArrowUpRight />
        </span>
      </div>

      {/* Bottom sweep */}
      <motion.div className="absolute bottom-0 left-0 h-[2px] rounded-full"
        style={{ background: `linear-gradient(90deg, rgb(${project.color}), rgba(${project.color},0.3))` }}
        animate={{ width: hov ? "100%" : "0%" }}
        transition={{ duration: 0.35, ease: "easeOut" }} />
    </motion.div>
  );
};

/* ─────────────────────────────── */
/*  MAIN SECTION                   */
/* ─────────────────────────────── */
const Projects: React.FC = () => {
  const featured = PROJECTS[0];
  const rest     = PROJECTS.slice(1);

  return (
    <section id="projects"
      className="relative py-24 px-6 md:px-10 bg-[#0D0D0D] text-white overflow-hidden">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Mono:wght@400;500&display=swap');
      `}</style>

      {/* BG grid */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(34,197,94,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,197,94,0.6) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(34,197,94,0.07) 0%, transparent 70%)" }} />

      <div className="relative max-w-6xl mx-auto">

        {/* ── Heading ── */}
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-xs tracking-[0.4em] text-green-500/50 uppercase mb-3"
            style={{ fontFamily: "'DM Mono', monospace" }}>
            — selected work —
          </p>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-none"
            style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.02em" }}>
            Featured{" "}
            <span className="text-transparent" style={{ WebkitTextStroke: "2px #22c55e" }}>
              Projects
            </span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-px bg-green-500/30" />
          <p className="mt-5 text-white/30 text-sm max-w-xl mx-auto"
            style={{ fontFamily: "'DM Mono', monospace" }}>
            Building full-stack systems, mobile apps, and data science solutions.
          </p>
        </motion.div>

        {/* ── Featured card ── */}
        <FeaturedProjectCard project={featured} />

        {/* Divider */}
        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px bg-white/[0.05]" />
          <span className="text-[10px] tracking-[0.35em] text-green-500/40 uppercase px-2"
            style={{ fontFamily: "'DM Mono', monospace" }}>
            More projects
          </span>
          <div className="flex-1 h-px bg-white/[0.05]" />
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {rest.map((p, i) => (
            <SmallProjectCard key={p.id} project={p} delay={i * 0.1} />
          ))}
        </div>

        {/* ── GitHub CTA ── */}
        <motion.div className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.3 }}>
          <motion.a
            href="https://github.com/sasuniii0"
            target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            className="relative overflow-hidden group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold text-black bg-green-500 hover:bg-green-400 transition-colors duration-300"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-0 bg-green-300 transition-transform duration-300 rounded-xl" />
            <RiGithubLine className="relative z-10 text-base" />
            <span className="relative z-10">View All on GitHub</span>
            <RiExternalLinkLine className="relative z-10 text-base" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;