import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
const logo = "/favicon.svg";
import resume from "../assets/SasuniWIjerathne_CV (3).pdf";

const navLinks = [
  { label: "About",      href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Skills",   href: "#skills-education" },
  { label: "Projects", href: "#projects" },
  { label: "Blog",     href: "#blog" },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // highlight the link of the section currently in view
  useEffect(() => {
    const sections = navLinks
      .map(l => document.querySelector(l.href))
      .filter((el): el is Element => !!el);
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(`#${e.target.id}`); }),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach(s => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 transition-colors duration-300"
      style={{
        background: scrolled || menuOpen ? "rgba(8,9,10,0.8)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(20px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled || menuOpen ? "blur(20px) saturate(180%)" : "none",
        borderBottom: `1px solid ${scrolled || menuOpen ? "var(--border)" : "transparent"}`,
      }}
    >
      <nav className="l-container flex items-center justify-between h-16">

        {/* ── Logo ── */}
        <a href="#home" className="flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="" className="w-6 h-6 rounded-md" />
          <span className="text-[15px] font-semibold tracking-[-0.01em]" style={{ color: "var(--text-1)" }}>
            Sasuni
          </span>
        </a>

        {/* ── Desktop links ── */}
        <ul className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-[13.5px] transition-colors duration-150"
                style={{ color: active === link.href ? "var(--text-1)" : "var(--text-3)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--text-1)")}
                onMouseLeave={e => (e.currentTarget.style.color = active === link.href ? "var(--text-1)" : "var(--text-3)")}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── Desktop actions ── */}
        <div className="hidden lg:flex items-center gap-2">
          <a href={resume} target="_blank" rel="noopener noreferrer" className="l-btn l-btn-sm l-btn-ghost">
            Resume
          </a>
          <a href="#hireme" className="l-btn l-btn-sm l-btn-primary">
            Hire me
          </a>
        </div>

        {/* ── Mobile toggle ── */}
        <button
          className="lg:hidden relative w-9 h-9 flex items-center justify-center rounded-lg"
          style={{ color: "var(--text-2)" }}
          onClick={() => setMenuOpen(p => !p)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {[0, 1].map(i => (
            <motion.span
              key={i}
              className="absolute block h-[1.5px] w-[18px] rounded-full bg-current"
              animate={{
                rotate: menuOpen ? (i === 0 ? 45 : -45) : 0,
                y:      menuOpen ? 0 : (i === 0 ? -4 : 4),
              }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </button>
      </nav>

      {/* ── Mobile sheet ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-x-0 top-16 bottom-0"
            style={{ background: "var(--bg)" }}
          >
            <div className="l-container flex flex-col pt-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => setMenuOpen(false)}
                  className="py-4 text-lg font-medium"
                  style={{ color: "var(--text-1)", borderBottom: "1px solid var(--border)" }}
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="flex flex-col gap-3 mt-8">
                <a href="#hireme" onClick={() => setMenuOpen(false)} className="l-btn l-btn-primary">Hire me</a>
                <a href={resume} target="_blank" rel="noopener noreferrer" className="l-btn l-btn-secondary">Resume</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
