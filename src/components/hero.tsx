import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import resume from "../assets/SasuniWIjerathne_CV (3).pdf";

/* ── seeded stable particles (no hydration flicker) ── */
const SPARKS = Array.from({ length: 40 }, (_, i) => {
  const s = (n: number) => { const x = Math.sin(n) * 43758.5453; return x - Math.floor(x); };
  return {
    id: i,
    top:   s(i * 7  + 1) * 100,
    left:  s(i * 13 + 3) * 100,
    size:  1.5 + s(i * 17 + 5) * 4,
    dur:   4   + s(i * 11 + 2) * 6,
    delay: s(i * 19 + 7) * 5,
    opacity: 0.15 + s(i * 23 + 9) * 0.55,
  };
});

/* ── mouse-tracked magnetic button ── */
const MagneticBtn: React.FC<{
  href: string; children: React.ReactNode; primary?: boolean;
  target?: string; rel?: string;
}> = ({ href, children, primary, target, rel }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0), y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 22 });
  const sy = useSpring(y, { stiffness: 300, damping: 22 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width  / 2) * 0.35);
    y.set((e.clientY - r.top  - r.height / 2) * 0.35);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.a
      ref={ref} href={href} target={target} rel={rel}
      onMouseMove={onMove} onMouseLeave={onLeave}
      whileTap={{ scale: 0.95 }}
      className={`relative overflow-hidden group px-7 py-3.5 rounded-xl font-semibold text-sm tracking-wider transition-colors duration-300 ${
        primary
          ? "bg-green-500 text-black hover:bg-green-400"
          : "border text-green-400 hover:text-white"
      }`}
      style={{
        x: sx, y: sy,
        fontFamily: "'DM Mono', monospace",
        ...(primary ? {} : { borderColor: "rgba(34,197,94,0.35)" }),
      }}
    >
      {primary && (
        <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-0 bg-green-300 transition-transform duration-300 rounded-xl" />
      )}
      <span className="relative z-10">{children}</span>
    </motion.a>
  );
};

/* ══════════════════════════════════════════════
   MAIN HERO
══════════════════════════════════════════════ */
const Hero: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 0.4], [0, -120]);
  const fadeOut   = useTransform(scrollYProgress, [0, 0.35], [1, 0]);

  /* mouse parallax layers */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smx = useSpring(mouseX, { stiffness: 60, damping: 18 });
  const smy = useSpring(mouseY, { stiffness: 60, damping: 18 });
  const layer1x = useTransform(smx, v => v * 0.02);
  const layer1y = useTransform(smy, v => v * 0.02);
  const layer2x = useTransform(smx, v => v * -0.035);
  const layer2y = useTransform(smy, v => v * -0.035);
  const layer3x = useTransform(smx, v => v * 0.055);
  const layer3y = useTransform(smy, v => v * 0.055);

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { innerWidth: W, innerHeight: H } = window;
    mouseX.set(e.clientX - W / 2);
    mouseY.set(e.clientY - H / 2);
  };

  /* canvas star-field */
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let W = canvas.width  = window.innerWidth;
    let H = canvas.height = window.innerHeight;
    const resize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
    window.addEventListener("resize", resize);

    const stars = Array.from({ length: 120 }, (_, i) => {
      const s = (n: number) => { const x = Math.sin(n) * 43758.5; return x - Math.floor(x); };
      return { x: s(i * 7) * W, y: s(i * 13) * H, r: 0.4 + s(i * 17) * 1.2, speed: 0.08 + s(i * 23) * 0.18, alpha: 0.1 + s(i * 31) * 0.4 };
    });

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      stars.forEach(s => {
        s.y += s.speed;
        if (s.y > H) s.y = 0;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34,197,94,${s.alpha})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  /* letter split for heading */
  const name = "Sasuni Wijerathne";

  return (
    <motion.section
      id="home"
      onMouseMove={onMouseMove}
      style={{ opacity: fadeOut }}
      className="relative min-h-screen flex flex-col justify-center items-center text-center bg-[#0D0D0D] text-white overflow-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Mono:wght@400;500&display=swap');

        @keyframes floatSpark {
          0%,100% { transform: translateY(0)     scale(1);   opacity: var(--op); }
          50%      { transform: translateY(-18px) scale(1.4); opacity: calc(var(--op) * 1.6); }
        }
        @keyframes rotateRing {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes rotateRingRev {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
        @keyframes pulseGlow {
          0%,100% { box-shadow: 0 0 40px rgba(34,197,94,0.15), 0 0 80px rgba(34,197,94,0.05); }
          50%      { box-shadow: 0 0 70px rgba(34,197,94,0.30), 0 0 140px rgba(34,197,94,0.12); }
        }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .cursor-blink { animation: blink 1s step-end infinite; }
        .hero-glow    { animation: pulseGlow 4s ease-in-out infinite; }
      `}</style>

      {/* ── star-field canvas ── */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* ── BG grid ── */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(34,197,94,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,197,94,1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }} />

      {/* ── parallax blobs ── */}
      <motion.div
        style={{ x: layer1x, y: layer1y, background: "radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%)" }}
        className="absolute top-1/4 left-1/5 w-96 h-96 rounded-full pointer-events-none blur-3xl"
        animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{ x: layer2x, y: layer2y, background: "radial-gradient(circle, rgba(34,197,94,0.09) 0%, transparent 70%)" }}
        className="absolute bottom-1/4 right-1/5 w-80 h-80 rounded-full pointer-events-none blur-3xl"
        animate={{ scale: [1.1, 1, 1.1] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{ x: layer3x, y: layer3y, background: "radial-gradient(circle, rgba(34,197,94,0.07) 0%, transparent 70%)" }}
        className="absolute top-2/3 left-2/3 w-48 h-48 rounded-full pointer-events-none blur-2xl"
        animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── floating sparkles ── */}
      {SPARKS.map(p => (
        <div key={p.id} className="absolute rounded-full pointer-events-none"
          style={{
            top: `${p.top}%`, left: `${p.left}%`,
            width: p.size, height: p.size,
            background: "rgba(34,197,94,0.7)",
            "--op": p.opacity,
            animation: `floatSpark ${p.dur}s ease-in-out ${p.delay}s infinite`,
          } as React.CSSProperties}
        />
      ))}

      {/* ── corner brackets ── */}
      {[
        "top-8 left-8 border-t border-l",
        "top-8 right-8 border-t border-r",
        "bottom-8 left-8 border-b border-l",
        "bottom-8 right-8 border-b border-r",
      ].map((cls, i) => (
        <motion.div key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8 + i * 0.1, duration: 0.5 }}
          className={`absolute w-8 h-8 border-green-500/25 pointer-events-none ${cls}`}
        />
      ))}

      {/* ── decorative orbit rings ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[560px] h-[560px] rounded-full border border-green-500/[0.04]"
          style={{ animation: "rotateRing 40s linear infinite" }}>
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-green-500/40"
            style={{ boxShadow: "0 0 10px #22c55e" }} />
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[420px] h-[420px] rounded-full border border-green-500/[0.06]"
          style={{ animation: "rotateRingRev 28s linear infinite" }}>
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-green-400/50" />
        </div>
      </div>

      {/* ══════════ MAIN CONTENT ══════════ */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-5 px-6 max-w-4xl"
        style={{ y: yParallax }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >

        {/* Typewriter label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2"
        >
          <span className="text-green-500/40 text-xs" style={{ fontFamily: "'DM Mono', monospace" }}>&gt;_</span>
          <span className="text-xs tracking-[0.3em] text-green-400/60 uppercase"
            style={{ fontFamily: "'DM Mono', monospace" }}>
            <Typewriter
              words={["Software Engineer", "AI & ML Enthusiast", "Cloud Explorer", "Tech Blogger"]}
              loop cursor cursorStyle="|" typeSpeed={65} deleteSpeed={40} delaySpeed={1400}
            />
          </span>
        </motion.div>

        {/* Main heading — letter-by-letter entrance */}
        <div className="flex flex-col items-center gap-0">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "-0.01em" }}
            transition={{ delay: 0.4, duration: 0.9, ease: "easeOut" }}
            className="text-white/30 text-sm tracking-[0.5em] uppercase mb-1"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Hello, I'm
          </motion.p>

          <h1 className="text-3xl text-5xl md:text-7xl font-black leading-none select-none whitespace-nowrap"
            style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.03em" }}>
            {name.split("").map((ch, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.5 + i * 0.035, duration: 0.5, type: "spring", stiffness: 200 }}
                className={`inline-block ${ch === " " ? "mr-4" : ""} hover:text-green-400 transition-colors duration-200 cursor-default`}
                style={{ transformOrigin: "50% 100%" }}
              >
                {ch === " " ? "\u00A0" : ch}
              </motion.span>
            ))}
          </h1>

          {/* Underline draw */}
          <motion.div
            className="h-[2px] bg-green-500/60 rounded-full mt-2"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
          />
        </div>

        {/* Sub text */}
        <motion.p
          className="text-white/40 text-base md:text-lg max-w-xl leading-relaxed"
          style={{ fontFamily: "'DM Mono', monospace" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Crafting intelligent, scalable systems — one commit at a time.
          <span className="cursor-blink text-green-500 ml-1">|</span>
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.7 }}
        >
          <MagneticBtn href="#about" primary>Meet Sasuni →</MagneticBtn>
          <MagneticBtn href={resume} target="_blank" rel="noopener noreferrer">Resume ↗</MagneticBtn>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <span className="text-[10px] tracking-[0.4em] text-white/20 uppercase"
            style={{ fontFamily: "'DM Mono', monospace" }}>scroll</span>
          <div className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center p-1">
            <motion.div
              className="w-1 h-1.5 bg-green-500 rounded-full"
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

      </motion.div>
    </motion.section>
  );
};

export default Hero;