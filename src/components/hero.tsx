import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import {
  RiInboxLine, RiStackLine, RiQuillPenLine, RiCodeSSlashLine, RiAwardLine,
} from "react-icons/ri";

/* ══════════════════════════════════════════════
   STATUS ICONS (Linear-style)
══════════════════════════════════════════════ */
type Status = "done" | "progress" | "todo";

const StatusIcon: React.FC<{ status: Status }> = ({ status }) => {
  if (status === "done") return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-label="Done">
      <circle cx="7" cy="7" r="6" fill="var(--accent)" />
      <path d="M4.5 7.2l1.7 1.7 3.3-3.4" stroke="#fff" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  if (status === "progress") return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-label="In progress">
      <circle cx="7" cy="7" r="5.5" stroke="var(--yellow)" strokeWidth="1.5" fill="none" />
      <path d="M7 3.5a3.5 3.5 0 0 1 0 7z" fill="var(--yellow)" />
    </svg>
  );
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-label="Todo">
      <circle cx="7" cy="7" r="5.5" stroke="var(--text-4)" strokeWidth="1.5" fill="none" strokeDasharray="2 2" />
    </svg>
  );
};

const PriorityIcon: React.FC<{ level: number }> = ({ level }) => (
  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
    {[0, 1, 2].map(i => (
      <rect key={i} x={2 + i * 4} y={9 - i * 3} width="2.5" height={3 + i * 3} rx="0.8"
        fill={i < level ? "var(--text-2)" : "var(--text-4)"} opacity={i < level ? 1 : 0.5} />
    ))}
  </svg>
);

/* ══════════════════════════════════════════════
   WORKSPACE DATA
══════════════════════════════════════════════ */
const ROWS: { id: string; title: string; status: Status; label: string; labelColor: string; date: string; priority: number }[] = [
  { id: "SAS-14", title: "Software Engineer Intern — PayMedia",                status: "progress", label: "Fintech",  labelColor: "#4cb782", date: "Now",   priority: 3 },
  { id: "SAS-13", title: "Certified AI & ML Engineer (CAME) program",           status: "progress", label: "AI/ML",    labelColor: "#7170ff", date: "2025",  priority: 3 },
  { id: "SAS-12", title: "StayCloud — cloud-native microservices on GCP",       status: "done",     label: "Cloud",    labelColor: "#26b5ce", date: "2026",  priority: 3 },
  { id: "SAS-11", title: "Secure login — OTP auth + AES-256 vault",             status: "done",     label: "Security", labelColor: "#f2994a", date: "2026",  priority: 3 },
  { id: "SAS-10", title: "FairVision — bias-audited CNN age classifier",        status: "done",     label: "AI/ML",    labelColor: "#7170ff", date: "2026",  priority: 2 },
  { id: "SAS-09", title: "VeloStream — event-driven streaming backend",         status: "done",     label: "Backend",  labelColor: "#5e6ad2", date: "2026",  priority: 2 },
  { id: "SAS-08", title: "Secretary — IJSE Student Committee",                 status: "progress", label: "Lead",     labelColor: "#bb87fc", date: "2026",  priority: 2 },
  { id: "SAS-07", title: "GENESYS Hackathon — 1st place, Team CodeHub",          status: "done",     label: "Award",    labelColor: "#f2c94c", date: "2024",  priority: 3 },
];

const SIDEBAR = [
  { icon: <RiInboxLine />,      label: "Inbox" },
  { icon: <RiStackLine />,      label: "My work", active: true },
  { icon: <RiCodeSSlashLine />, label: "Projects" },
  { icon: <RiQuillPenLine />,   label: "Writing" },
  { icon: <RiAwardLine />,      label: "Awards" },
];

/* ══════════════════════════════════════════════
   APP WINDOW MOCK
══════════════════════════════════════════════ */
const Workspace: React.FC = () => (
  <div className="rounded-xl overflow-hidden text-left"
    style={{
      background: "var(--bg-elevated)",
      border: "1px solid var(--border-strong)",
      boxShadow: "0 0 0 1px rgba(0,0,0,0.6), 0 40px 120px -20px rgba(0,0,0,0.9), 0 0 80px -20px rgba(113,112,255,0.25)",
    }}>
    {/* title bar */}
    <div className="flex items-center gap-2 px-4 h-10" style={{ borderBottom: "1px solid var(--border)" }}>
      {["#ff5f57", "#febc2e", "#28c840"].map(c => (
        <span key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c, opacity: 0.8 }} />
      ))}
      <span className="ml-3 text-xs" style={{ color: "var(--text-4)" }}>sasuni.me / my-work</span>
    </div>

    <div className="flex">
      {/* sidebar */}
      <aside className="hidden md:flex flex-col gap-0.5 w-48 shrink-0 p-3" style={{ borderRight: "1px solid var(--border)" }}>
        <div className="flex items-center gap-2 px-2 py-1.5 mb-2">
          <span className="w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-semibold"
            style={{ background: "var(--accent)", color: "#fff" }}>S</span>
          <span className="text-[13px] font-medium" style={{ color: "var(--text-1)" }}>Sasuni</span>
        </div>
        {SIDEBAR.map(item => (
          <div key={item.label}
            className="flex items-center gap-2.5 px-2 py-1.5 rounded-md text-[13px]"
            style={{
              color: item.active ? "var(--text-1)" : "var(--text-3)",
              background: item.active ? "rgba(255,255,255,0.06)" : "transparent",
            }}>
            <span className="text-[15px]">{item.icon}</span>
            {item.label}
          </div>
        ))}
      </aside>

      {/* issue list */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between px-4 h-11" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="flex items-center gap-2 text-[13px]">
            <span style={{ color: "var(--text-1)" }}>My work</span>
            <span style={{ color: "var(--text-4)" }}>·</span>
            <span style={{ color: "var(--text-3)" }}>{ROWS.length} items</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-[11px]" style={{ color: "var(--text-4)" }}>
            <span className="l-kbd">⌘</span><span className="l-kbd">K</span>
          </div>
        </div>

        {ROWS.map((row, i) => (
          <motion.div
            key={row.id}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 + i * 0.05, duration: 0.4 }}
            className="flex items-center gap-3 px-4 h-11 text-[13px]"
            style={{ borderBottom: i < ROWS.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}
          >
            <span className="hidden sm:inline"><PriorityIcon level={row.priority} /></span>
            <span className="l-mono text-[11.5px] w-12 shrink-0 hidden sm:inline" style={{ color: "var(--text-4)" }}>{row.id}</span>
            <StatusIcon status={row.status} />
            <span className="truncate flex-1" style={{ color: "var(--text-2)" }}>{row.title}</span>
            <span className="l-pill hidden sm:inline-flex !h-[22px] !text-[11.5px]">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: row.labelColor }} />
              {row.label}
            </span>
            <span className="text-[12px] w-14 text-right shrink-0 hidden md:inline" style={{ color: "var(--text-4)" }}>{row.date}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

/* ══════════════════════════════════════════════
   MAIN HERO
══════════════════════════════════════════════ */
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const Hero: React.FC = () => {
  const shotRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: shotRef, offset: ["start end", "start 20%"] });
  const rotateX = useTransform(scrollYProgress, [0, 1], [18, 0]);
  const scale   = useTransform(scrollYProgress, [0, 1], [0.94, 1]);

  return (
    <section id="home" className="relative overflow-hidden pt-36 md:pt-44 pb-24">
      <div className="l-hero-glow" />
      <div className="l-fade-grid" />

      <div className="l-container relative flex flex-col items-center text-center">

        {/* announcement pill */}
        <motion.a href="#experience" {...fadeUp(0.1)}
          className="l-pill !h-8 !px-3.5 !text-[13px] mb-8 transition-colors hover:!border-[var(--border-strong)]">
          <span className="l-status-dot !w-1.5 !h-1.5" />
          <span style={{ color: "var(--text-3)" }}>Now</span>
          <span style={{ color: "var(--text-2)" }}>Software Engineer Intern at PayMedia</span>
          <HiArrowRight style={{ color: "var(--text-3)" }} />
        </motion.a>

        <motion.h1 {...fadeUp(0.2)} className="l-display l-gradient-text max-w-4xl">
          From idea to production,<br className="hidden sm:block" /> built with care.
        </motion.h1>

        <motion.p {...fadeUp(0.35)} className="l-lead mt-6 max-w-xl">
          I'm <span style={{ color: "var(--text-1)" }}>Sasuni Wijerathne</span>, a software engineer
          interning at <span style={{ color: "var(--text-1)" }}>PayMedia</span>. I build secure,
          cloud-native systems across the stack from Spring microservices to AI/ML.
        </motion.p>

        <motion.div {...fadeUp(0.5)} className="flex flex-wrap items-center justify-center gap-3 mt-10">
          <a href="#projects" className="l-btn l-btn-primary">
            View my work <HiArrowRight />
          </a>
          <a href="#hireme" className="l-btn l-btn-secondary">
            Get in touch
          </a>
        </motion.div>

        {/* product-shot style workspace */}
        <motion.div
          ref={shotRef}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full mt-20 md:mt-24"
          style={{ perspective: 1600 }}
        >
          <motion.div style={{ rotateX, scale, transformOrigin: "50% 0%" }}>
            <Workspace />
          </motion.div>
          {/* bottom fade into page */}
          <div className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent, var(--bg))" }} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
