import React from "react";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { RiMailLine, RiMapPinLine } from "react-icons/ri";
import portrait from "../assets/fintech-festival.jpg";

const socials = [
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/sasuni-wijerathne-a3b517311", label: "LinkedIn" },
  { icon: <FaGithub />,   href: "https://github.com/sasuniii0",                             label: "GitHub" },
  { icon: <FaMedium />,   href: "https://medium.com/@sasuniwijerathne",                     label: "Medium" },
  { icon: <RiMailLine />, href: "mailto:sasuniwijerathne@gmail.com",                        label: "Email" },
];

const focus = [
  "Java 21",
  "Spring Boot",
  "Microservices",
  "REST APIs",
  "PostgreSQL",
  "Redis",
  "Kafka",
  "React",
  "TypeScript",
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 18, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const Hero: React.FC = () => (
  <section id="home" className="relative overflow-hidden pt-28 md:pt-36 pb-20 md:pb-28">
    <div className="l-hero-glow" />
    <div className="l-fade-grid" />

    <div className="l-container relative grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,520px)] lg:gap-16">
      <div className="max-w-2xl">
        <motion.a href="#experience" {...fadeUp(0.05)}
          className="l-pill !h-8 !px-3.5 !text-[13px] mb-7 transition-colors hover:!border-[var(--border-strong)]">
          <span className="l-status-dot !w-1.5 !h-1.5" />
          <span style={{ color: "var(--text-2)" }}>Junior Software Engineer at PayMedia</span>
          <HiArrowRight style={{ color: "var(--text-4)" }} />
        </motion.a>

        <motion.h1 {...fadeUp(0.14)} className="l-display">
          Sasuni<br />Wijerathne
        </motion.h1>

        <motion.p {...fadeUp(0.24)} className="mt-6 text-[1.2rem] leading-snug tracking-[-0.02em]" style={{ color: "var(--text-2)" }}>
          Full-stack engineer for <span className="l-em">digital finance</span>.
        </motion.p>

        <motion.p {...fadeUp(0.32)} className="l-lead mt-4 max-w-xl">
          I build Java and Spring Boot services, REST APIs, and the interfaces around them.
          Currently at PayMedia, working on software for banks and financial institutions.
        </motion.p>

        <motion.div {...fadeUp(0.42)} className="flex flex-wrap items-center gap-3 mt-8">
          <a href="#projects" className="l-btn l-btn-lg l-btn-primary">
            View my work <HiArrowRight />
          </a>
          <a href="#hireme" className="l-btn l-btn-lg l-btn-secondary">
            Get in touch
          </a>
        </motion.div>

        <motion.div {...fadeUp(0.5)} className="flex flex-wrap items-center gap-1 mt-6">
          {socials.map(s => (
            <a key={s.label} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={s.label}
              className="l-btn l-btn-ghost !w-10 !h-10 !p-0 text-[17px]">
              {s.icon}
            </a>
          ))}
          <a href="mailto:sasuniwijerathne@gmail.com" className="l-link ml-2 text-[13.5px] break-all">
            sasuniwijerathne@gmail.com
          </a>
        </motion.div>
      </div>

      <motion.div {...fadeUp(0.28)} className="w-full max-w-lg mx-auto lg:max-w-none lg:mx-0 lg:justify-self-end">
        <figure className="l-card p-2">
          <div className="overflow-hidden rounded-[12px] aspect-[3/2] bg-[var(--bg-card)]">
            <img
              src={portrait}
              alt="Sasuni Wijerathne at the Sri Lanka FinTech Festival"
              className="h-full w-full object-contain object-center"
              fetchPriority="high"
            />
          </div>
          <figcaption className="flex items-center justify-between gap-3 px-3 py-3">
            <div>
              <p className="text-[14.5px] font-medium" style={{ color: "var(--text-1)" }}>Sri Lanka FinTech Festival</p>
              <p className="mt-0.5 flex items-center gap-1.5 text-[13px]" style={{ color: "var(--text-3)" }}>
                <RiMapPinLine aria-hidden /> Colombo, Sri Lanka
              </p>
            </div>
            <span className="l-pill shrink-0">
              <span className="l-status-dot !w-1.5 !h-1.5" /> Available
            </span>
          </figcaption>
        </figure>

        <ul className="flex flex-wrap gap-1.5 mt-4" aria-label="Core technologies">
          {focus.map(item => (
            <li key={item} className="l-pill !h-7 !px-2.5 !text-[12.5px]">{item}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

export default Hero;
