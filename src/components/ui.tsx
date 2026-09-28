import React from "react";
import { motion } from "framer-motion";

/* ── Scroll reveal: Linear's soft fade-up with blur ── */
export const Reveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}> = ({ children, delay = 0, className, y = 16 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y, filter: "blur(6px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

/* ── Section header: numbered eyebrow + gradient title + lead ── */
export const SectionHeader: React.FC<{
  num: string;
  label: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  aside?: React.ReactNode;
}> = ({ num, label, title, lead, aside }) => (
  <Reveal className="mb-14 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
    <div className="max-w-2xl">
      <p className="l-eyebrow mb-5">
        <span className="l-eyebrow-num">{num}</span>
        <span>{label}</span>
      </p>
      <h2 className="l-h2 l-gradient-text">{title}</h2>
      {lead && <p className="l-lead mt-5 max-w-xl">{lead}</p>}
    </div>
    {aside && <div className="shrink-0">{aside}</div>}
  </Reveal>
);
