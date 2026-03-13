import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import profilePic from "../assets/profilepic.png";
import resume from "../assets/SasuniWIjerathne_CV (3).pdf";
import { FaGithub, FaLinkedin, FaInstagram, FaMedium, FaFacebook } from "react-icons/fa";

/* ── floating particles ── */
const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  x: Math.sin(i * 137.5 * (Math.PI / 180)) * 50 + 50,
  y: Math.cos(i * 137.5 * (Math.PI / 180)) * 50 + 50,
  size: 2 + (i % 4),
  dur: 4 + (i % 5) * 1.4,
  delay: (i % 7) * 0.6,
}));

const socials = [
  { icon: <FaLinkedin />,  link: "https://www.linkedin.com/in/sasuni-wijerathne-a3b517311", label: "LinkedIn" },
  { icon: <FaGithub />,   link: "https://github.com/sasuniii0",                             label: "GitHub" },
  { icon: <FaMedium />,   link: "https://medium.com/@sasuniwijerathne",                     label: "Medium" },
  { icon: <FaInstagram />,link: "https://www.instagram.com/sasunyyy.y?igsh=ZTNwanBtMWdwdzJk&utm_source=qr", label: "Instagram" },
  { icon: <FaFacebook />, link: "https://www.facebook.com/share/1D7FnhajhP/?mibextid=wwXIfr", label: "Facebook" },
];

const tags = ["Full-Stack Engineer", "AI/ML Enthusiast", "Cloud Explorer", "Tech Blogger", "Open Source"];

/* ── 3-D tilt card ── */
const TiltCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 200, damping: 20 });
  const sry = useSpring(ry, { stiffness: 200, damping: 20 });
  const rotateX  = useTransform(srx, v => `${v}deg`);
  const rotateY  = useTransform(sry, v => `${v}deg`);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const px = (e.clientX - left) / width  - 0.5;
    const py = (e.clientY - top)  / height - 0.5;
    ry.set(px * 18);
    rx.set(-py * 18);
  };
  const onLeave = () => { rx.set(0); ry.set(0); };

  return (
    <motion.div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 800 }}
      className="cursor-pointer">
      {children}
    </motion.div>
  );
};

/* ══════════════════════════════════════════════
   MAIN
══════════════════════════════════════════════ */
const AboutMe = () => {
  const [tagIdx, setTagIdx] = useState(0);

  // cycle tags
  useEffect(() => {
    const t = setInterval(() => setTagIdx(p => (p + 1) % tags.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="about"
      className="relative min-h-screen flex items-center py-24 px-6 md:px-10 bg-[#0D0D0D] text-white overflow-hidden">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Mono:wght@400;500&display=swap');

        @keyframes floatY {
          0%,100% { transform: translateY(0px)   rotate(0deg);   }
          33%      { transform: translateY(-14px) rotate(1.5deg); }
          66%      { transform: translateY(-7px)  rotate(-1deg);  }
        }
        @keyframes orbit {
          from { transform: rotate(0deg)   translateX(138px) rotate(0deg); }
          to   { transform: rotate(360deg) translateX(138px) rotate(-360deg); }
        }
        @keyframes orbitRev {
          from { transform: rotate(0deg)   translateX(108px) rotate(0deg); }
          to   { transform: rotate(-360deg) translateX(108px) rotate(360deg); }
        }
        @keyframes scanLine {
          0%   { top: -10%; opacity: 0; }
          10%  { opacity: 0.6; }
          90%  { opacity: 0.6; }
          100% { top: 110%;  opacity: 0; }
        }
        @keyframes glitch {
          0%,94%,100% { clip-path: none; transform: none; }
          95% { clip-path: polygon(0 20%, 100% 20%, 100% 40%, 0 40%); transform: translate(-3px, 2px); }
          97% { clip-path: polygon(0 60%, 100% 60%, 100% 80%, 0 80%); transform: translate(3px, -2px); }
        }
        @keyframes blink {
          0%,100% { opacity: 1; } 50% { opacity: 0; }
        }
        .float-img   { animation: floatY 6s ease-in-out infinite; }
        .scan-line   { animation: scanLine 3.5s linear infinite; }
        .cursor-blink{ animation: blink 1s step-end infinite; }
        .glitch-text { animation: glitch 6s steps(1) infinite; }
      `}</style>

      {/* ── deep BG grid ── */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(34,197,94,0.7) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,197,94,0.7) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }} />

      {/* ── ambient blobs ── */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)" }} />
      <div className="absolute -bottom-24 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 70%)" }} />

      {/* ── floating particles ── */}
      {PARTICLES.map(p => (
        <motion.div key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${p.x}%`, top: `${p.y}%`,
            width: p.size, height: p.size,
            background: "rgba(34,197,94,0.35)",
          }}
          animate={{ y: [-8, 8, -8], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="relative max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-16 md:gap-24 z-10">

        {/* ════════════════════════════
            LEFT — PROFILE IMAGE
        ════════════════════════════ */}
        <motion.div
          className="flex-shrink-0 flex flex-col items-center gap-6"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
        >
          <TiltCard>
            <div className="relative" style={{ width: 280, height: 280 }}>

              {/* Outer orbit ring */}
              <div className="absolute inset-0 rounded-full pointer-events-none"
                style={{ border: "1px solid rgba(34,197,94,0.12)" }} />

              {/* Orbiting dot 1 */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div style={{ animation: "orbit 9s linear infinite" }}>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                </div>
              </div>
              {/* Orbiting dot 2 */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{ margin: 15 }}>
                <div style={{ animation: "orbitRev 13s linear infinite" }}>
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400/60" />
                </div>
              </div>

              {/* Hex corner accents */}
              {[0, 90, 180, 270].map(deg => (
                <div key={deg} className="absolute pointer-events-none"
                  style={{
                    width: 10, height: 10,
                    border: "1px solid rgba(34,197,94,0.5)",
                    transform: `rotate(45deg)`,
                    ...deg === 0   ? { top: 6,  left: "50%", marginLeft: -5 } :
                      deg === 90  ? { right: 6, top: "50%",  marginTop: -5 }  :
                      deg === 180 ? { bottom: 6, left: "50%", marginLeft: -5 } :
                                    { left: 6, top: "50%", marginTop: -5 },
                  }} />
              ))}

              {/* Photo */}
              <div className="absolute inset-[28px] rounded-full overflow-hidden float-img"
                style={{ border: "2px solid rgba(34,197,94,0.45)", boxShadow: "0 0 40px rgba(34,197,94,0.2), inset 0 0 20px rgba(34,197,94,0.05)" }}>

                {/* Scan line */}
                <div className="scan-line absolute left-0 right-0 h-8 pointer-events-none z-10"
                  style={{ background: "linear-gradient(transparent, rgba(34,197,94,0.08), transparent)" }} />

                <img src={profilePic} alt="Sasuni Wijerathne"
                  className="w-full h-full object-cover" />
              </div>

              {/* Status badge */}
              <motion.div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full z-20"
                style={{
                  background: "#0f1a0f",
                  border: "1px solid rgba(34,197,94,0.3)",
                  boxShadow: "0 0 16px rgba(34,197,94,0.1)",
                }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-400"
                  style={{ boxShadow: "0 0 6px #4ade80", animation: "blink 2s ease-in-out infinite" }} />
                <span className="text-[11px] text-green-400 tracking-widest"
                  style={{ fontFamily: "'DM Mono', monospace" }}>
                  open to work
                </span>
              </motion.div>
            </div>
          </TiltCard>

          {/* Cycling role tag */}
          <div className="h-7 overflow-hidden flex items-center justify-center">
            <motion.div
              key={tagIdx}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0,  opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="text-[11px] tracking-[0.3em] uppercase text-green-500/60"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              {tags[tagIdx]}
            </motion.div>
          </div>
        </motion.div>

        {/* ════════════════════════════
            RIGHT — TEXT
        ════════════════════════════ */}
        <motion.div
          className="flex flex-col gap-5 max-w-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {/* Section label */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            className="text-[10px] tracking-[0.45em] text-green-500/40 uppercase"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            — who i am —
          </motion.p>

          {/* Heading */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <h2 className="text-5xl md:text-6xl font-black leading-none glitch-text"
              style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.02em" }}>
              About{" "}
              <span className="text-transparent" style={{ WebkitTextStroke: "2px #22c55e" }}>
                Me.
              </span>
            </h2>
          </motion.div>

          {/* Bio paragraphs */}
          <motion.p
            variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } }}
            className="text-white/50 text-base leading-relaxed"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            I'm{" "}
            <span className="text-green-400 font-medium">Sasuni Wijerathne</span>
            , a dedicated Software Engineer passionate about developing innovative programs that boost efficiency and drive real-world impact. With a keen interest in AI and Machine Learning, I constantly explore cutting-edge technologies.
          </motion.p>

          <motion.p
            variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.05 } } }}
            className="text-white/40 text-sm leading-relaxed"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Beyond coding, I blog about technology trends and share insights on AI & ML. When I'm not immersed in tech, I love exploring nature, reading, and finding inspiration in creativity.
          </motion.p>

          {/* Typewriter line */}
          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="flex items-center gap-2"
          >
            <span className="text-green-500/40 text-xs" style={{ fontFamily: "'DM Mono', monospace" }}>
              &gt;_
            </span>
            <span className="text-green-400/70 text-xs" style={{ fontFamily: "'DM Mono', monospace" }}>
              Building intelligent, scalable systems
            </span>
            <span className="cursor-blink text-green-500 text-sm">|</span>
          </motion.div>

          {/* Stat chips */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-wrap gap-3"
          >
            {[
              { val: "2+",  label: "years coding" },
              { val: "15+", label: "projects built" },
              { val: "10+", label: "articles written" },
              { val: "1st", label: "hackathon place" },
            ].map((s, i) => (
              <motion.div key={i}
                whileHover={{ y: -3, borderColor: "rgba(34,197,94,0.5)" }}
                className="flex flex-col items-center px-4 py-2.5 rounded-xl transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}>
                <span className="text-xl font-black text-green-400"
                  style={{ fontFamily: "'Syne', sans-serif" }}>
                  {s.val}
                </span>
                <span className="text-[10px] text-white/30 tracking-widest uppercase mt-0.5"
                  style={{ fontFamily: "'DM Mono', monospace" }}>
                  {s.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-wrap gap-3 pt-1"
          >
            <motion.a
              href="#hireme"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="relative overflow-hidden group px-6 py-3 rounded-xl font-semibold text-black text-sm bg-green-500 hover:bg-green-400 transition-colors duration-300"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              <span className="relative z-10">Contact Me →</span>
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 bg-green-300" />
            </motion.a>
            <motion.a
              href={resume}
              target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 rounded-xl font-semibold text-green-500 text-sm transition-all duration-300"
              style={{
                fontFamily: "'DM Mono', monospace",
                border: "1px solid rgba(34,197,94,0.35)",
                background: "transparent",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(34,197,94,0.08)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              Resume ↗
            </motion.a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            className="flex items-center gap-1 pt-1"
          >
            {socials.map((s, i) => (
              <motion.a
                key={i}
                href={s.link}
                target="_blank" rel="noopener noreferrer"
                aria-label={s.label}
                variants={{ hidden: { y: 16, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                whileHover={{ y: -4, color: "#22c55e" }}
                className="w-10 h-10 flex items-center justify-center rounded-xl text-white/30 text-lg transition-all duration-300"
                style={{ border: "1px solid rgba(255,255,255,0.05)" }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,197,94,0.3)";
                  (e.currentTarget as HTMLElement).style.background   = "rgba(34,197,94,0.06)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.05)";
                  (e.currentTarget as HTMLElement).style.background   = "transparent";
                }}
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;