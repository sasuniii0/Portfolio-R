import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/favicon-B65GwPu0.png";

const navLinks = [
  { label: "Home",     href: "#home" },
  { label: "Blog",     href: "#blog" },
  { label: "About",    href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#hireme" },
];

const Navbar: React.FC = () => {
  const [scrolled,    setScrolled]    = useState(false);
  const [activeLink,  setActiveLink]  = useState("Home");
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Mono:wght@400;500&display=swap');
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 100, damping: 18 }}
        className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(13,13,13,0.92)"
            : "rgba(13,13,13,0.6)",
          backdropFilter: "blur(16px)",
          borderBottom: scrolled
            ? "1px solid rgba(34,197,94,0.12)"
            : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 40px rgba(0,0,0,0.4)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">

          {/* ── Logo ── */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2.5 group"
            onClick={() => setActiveLink("Home")}
          >
            <div className="relative">
              {/* glow ring on hover */}
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ boxShadow: "0 0 16px rgba(34,197,94,0.4)" }} />
              <img src={logo} alt="Sasuni Logo"
                className="w-9 h-9 relative z-10 transition-all duration-300"
                style={{ filter: "brightness(1)" }}
                onMouseEnter={e => (e.currentTarget.style.filter = "brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(90deg)")}
                onMouseLeave={e => (e.currentTarget.style.filter = "brightness(1)")}
              />
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="text-sm font-black text-white"
                style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.01em" }}>
                Sasuni
              </span>
              <span className="text-[10px] text-green-500/60 tracking-widest"
                style={{ fontFamily: "'DM Mono', monospace" }}>
                .dev
              </span>
            </div>
          </motion.a>

          {/* ── Desktop nav ── */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setActiveLink(link.label)}
                  onMouseEnter={() => setHoveredLink(link.label)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="relative px-4 py-2 rounded-xl text-sm transition-colors duration-300 flex items-center"
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    color: activeLink === link.label
                      ? "#4ade80"
                      : hoveredLink === link.label
                        ? "rgba(255,255,255,0.8)"
                        : "rgba(255,255,255,0.35)",
                  }}
                >
                  {/* active / hover bg pill */}
                  {(activeLink === link.label || hoveredLink === link.label) && (
                    <motion.div
                      layoutId="navPill"
                      className="absolute inset-0 rounded-xl"
                      style={{
                        background: activeLink === link.label
                          ? "rgba(34,197,94,0.1)"
                          : "rgba(255,255,255,0.04)",
                        border: activeLink === link.label
                          ? "1px solid rgba(34,197,94,0.2)"
                          : "1px solid rgba(255,255,255,0.06)",
                      }}
                      transition={{ type: "spring", stiffness: 500, damping: 38 }}
                    />
                  )}

                  <span className="relative z-10">{link.label}</span>

                  {/* active dot */}
                  {activeLink === link.label && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="relative z-10 ml-1.5 w-1 h-1 rounded-full bg-green-400"
                      style={{ boxShadow: "0 0 4px #4ade80", animation: "blink 2.5s ease-in-out infinite" }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* ── Hire Me CTA ── */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href="#hireme"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="relative overflow-hidden group px-5 py-2 rounded-xl text-sm font-semibold text-black bg-green-500 hover:bg-green-400 transition-colors duration-300"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-0 bg-green-300 transition-transform duration-300 rounded-xl" />
              <span className="relative z-10">Hire Me →</span>
            </motion.a>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-xl transition-all duration-300"
            onClick={() => setMenuOpen(p => !p)}
            style={{
              background: menuOpen ? "rgba(34,197,94,0.1)" : "rgba(255,255,255,0.03)",
              border: menuOpen ? "1px solid rgba(34,197,94,0.25)" : "1px solid rgba(255,255,255,0.07)",
            }}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map(i => (
              <motion.span
                key={i}
                className="block h-px bg-white rounded-full"
                animate={{
                  width:   menuOpen && i === 1 ? "0%" : "60%",
                  rotate:  menuOpen ? (i === 0 ? 45 : i === 2 ? -45 : 0) : 0,
                  y:       menuOpen ? (i === 0 ? 6 : i === 2 ? -6 : 0) : 0,
                  opacity: menuOpen && i === 1 ? 0 : 1,
                  backgroundColor: menuOpen ? "#22c55e" : "rgba(255,255,255,0.7)",
                }}
                transition={{ duration: 0.25 }}
                style={{ transformOrigin: "center" }}
              />
            ))}
          </button>
        </div>

        {/* ── Mobile drawer ── */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
              style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
            >
              <div className="px-6 py-5 flex flex-col gap-1"
                style={{ background: "rgba(13,13,13,0.97)" }}>
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => { setActiveLink(link.label); setMenuOpen(false); }}
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-all duration-300"
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      color: activeLink === link.label ? "#4ade80" : "rgba(255,255,255,0.4)",
                      background: activeLink === link.label ? "rgba(34,197,94,0.08)" : "transparent",
                      border: activeLink === link.label ? "1px solid rgba(34,197,94,0.15)" : "1px solid transparent",
                    }}
                  >
                    <span>{link.label}</span>
                    {activeLink === link.label && (
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400"
                        style={{ boxShadow: "0 0 4px #4ade80" }} />
                    )}
                  </motion.a>
                ))}

                <motion.a
                  href="#hireme"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  onClick={() => setMenuOpen(false)}
                  className="mt-3 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-black bg-green-500"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  Hire Me →
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;