import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaMedium,
  FaEnvelope, FaMapMarkerAlt,
} from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
import { HiArrowUpRight } from "react-icons/hi2";

const navLinks = [
  { label: "Home",     href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Skills",   href: "#skills" },
  { label: "Blog",     href: "#blog" },
  { label: "Contact",  href: "#hireme" },
];

const socials = [
  { icon: <FaLinkedin />,  href: "https://www.linkedin.com/in/sasuni-wijerathne-a3b517311", label: "LinkedIn" },
  { icon: <FaGithub />,    href: "https://github.com/sasuniii0",                             label: "GitHub" },
  { icon: <FaMedium />,    href: "https://medium.com/@sasuniwijerathne",                     label: "Medium" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/sasunyyy.y?igsh=ZTNwanBtMWdwdzJk&utm_source=qr", label: "Instagram" },
  { icon: <FaFacebook />,  href: "https://www.facebook.com/share/1D7FnhajhP/?mibextid=wwXIfr", label: "Facebook" },
];

const Footer = () => {
  const [email, setEmail]     = useState("");
  const [subDone, setSubDone] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubDone(true);
    setEmail("");
  };

  return (
    <footer className="relative bg-[#0D0D0D] text-white overflow-hidden">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Mono:wght@400;500&display=swap');
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>

      {/* BG grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(34,197,94,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,197,94,0.6) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }} />

      {/* ambient bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[260px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(34,197,94,0.06) 0%, transparent 70%)" }} />

      {/* ── Big watermark name ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap select-none pointer-events-none"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(3rem, 10vw, 8rem)",
          fontWeight: 900,
          letterSpacing: "-0.04em",
          color: "rgba(255,255,255,0.018)",
        }}>
        Sasuni Wijerathne
      </div>

      {/* ── Top divider line ── */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 pt-16 pb-10">

        {/* ── Main grid ── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >

          {/* ── Brand ── */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-col gap-4"
          >
            <div>
              <h2 className="text-xl font-black text-white leading-none"
                style={{ fontFamily: "'Syne', sans-serif" }}>
                Sasuni
              </h2>
              <h2 className="text-xl font-black leading-none"
                style={{ fontFamily: "'Syne', sans-serif", WebkitTextStroke: "1px #22c55e", color: "transparent" }}>
                Wijerathne
              </h2>
            </div>

            <p className="text-white/30 text-xs leading-relaxed"
              style={{ fontFamily: "'DM Mono', monospace" }}>
              Software Engineer · AI & ML Enthusiast · Blogger. Exploring technology to create efficient and innovative solutions.
            </p>

            {/* Status dot */}
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400"
                style={{ boxShadow: "0 0 6px #4ade80", animation: "blink 2.5s ease-in-out infinite" }} />
              <span className="text-[10px] text-green-400/60 tracking-widest"
                style={{ fontFamily: "'DM Mono', monospace" }}>
                open to work
              </span>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2 mt-1">
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href} target="_blank" rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -3, color: "#22c55e" }}
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-white/30 text-sm transition-all duration-300"
                  style={{ border: "1px solid rgba(255,255,255,0.06)" }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,197,94,0.3)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(34,197,94,0.07)";
                    (e.currentTarget as HTMLElement).style.color = "#22c55e";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.3)";
                  }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ── Quick Links ── */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-3">
              <span className="text-[10px] tracking-[0.3em] uppercase text-green-500/50"
                style={{ fontFamily: "'DM Mono', monospace" }}>
                Navigation
              </span>
              <div className="flex-1 h-px bg-white/[0.05]" />
            </div>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 4 }}
                    className="group flex items-center gap-2 text-sm text-white/35 hover:text-green-400 transition-colors duration-300"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    <span className="w-0 h-px bg-green-500 transition-all duration-300 group-hover:w-4" />
                    {link.label}
                    <HiArrowUpRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-green-500" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Contact ── */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-3">
              <span className="text-[10px] tracking-[0.3em] uppercase text-green-500/50"
                style={{ fontFamily: "'DM Mono', monospace" }}>
                Contact
              </span>
              <div className="flex-1 h-px bg-white/[0.05]" />
            </div>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="mailto:sasuniwijerathne@gmail.com"
                  className="group flex flex-col gap-1 hover:text-green-400 transition-colors duration-300">
                  <span className="flex items-center gap-2 text-green-500/50 text-[10px] tracking-widest uppercase"
                    style={{ fontFamily: "'DM Mono', monospace" }}>
                    <FaEnvelope className="text-xs" /> Email
                  </span>
                  <span className="text-white/35 text-xs group-hover:text-green-400 transition-colors duration-300 break-all"
                    style={{ fontFamily: "'DM Mono', monospace" }}>
                    sasuniwijerathne@gmail.com
                  </span>
                </a>
              </li>
              <li>
                <div className="flex flex-col gap-1">
                  <span className="flex items-center gap-2 text-green-500/50 text-[10px] tracking-widest uppercase"
                    style={{ fontFamily: "'DM Mono', monospace" }}>
                    <FaMapMarkerAlt className="text-xs" /> Location
                  </span>
                  <span className="text-white/35 text-xs"
                    style={{ fontFamily: "'DM Mono', monospace" }}>
                    Colombo, Sri Lanka
                  </span>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* ── Newsletter ── */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-3">
              <span className="text-[10px] tracking-[0.3em] uppercase text-green-500/50"
                style={{ fontFamily: "'DM Mono', monospace" }}>
                Stay Updated
              </span>
              <div className="flex-1 h-px bg-white/[0.05]" />
            </div>
            <p className="text-white/30 text-xs leading-relaxed"
              style={{ fontFamily: "'DM Mono', monospace" }}>
              Get the latest insights on AI, ML, and software development.
            </p>

            {subDone ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col gap-1.5 px-4 py-3 rounded-xl"
                style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.25)" }}
              >
                <span className="text-green-400 text-xs" style={{ fontFamily: "'DM Mono', monospace" }}>
                  ✓ Subscribed!
                </span>
                <span className="text-white/30 text-[10px]" style={{ fontFamily: "'DM Mono', monospace" }}>
                  Thanks for subscribing.
                </span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-2.5 rounded-xl text-xs text-white placeholder-white/20 focus:outline-none transition-all duration-300"
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                    onFocus={e => {
                      e.currentTarget.style.borderColor = "rgba(34,197,94,0.4)";
                      e.currentTarget.style.background = "rgba(34,197,94,0.04)";
                    }}
                    onBlur={e => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                      e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                    }}
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative overflow-hidden group flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-black bg-green-500 hover:bg-green-400 transition-colors duration-300"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-0 bg-green-300 transition-transform duration-300 rounded-xl" />
                  <RiSendPlaneLine className="relative z-10 text-sm" />
                  <span className="relative z-10">Subscribe</span>
                </motion.button>
              </form>
            )}
          </motion.div>
        </motion.div>

        {/* ── Bottom bar ── */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="text-[11px] text-white/20"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            © {new Date().getFullYear()} Sasuni Wijerathne. All rights reserved.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ delay: 0.4 }}
            className="text-[11px] text-white/15"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            designed & built with{" "}
            <span className="text-green-500/50">♥</span>
            {" "}by Sasuni
          </motion.p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;