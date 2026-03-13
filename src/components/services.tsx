import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { RiFlashlightLine, RiMedalLine, RiCustomerService2Line } from "react-icons/ri";
import { HiArrowUpRight } from "react-icons/hi2";

/* ── seeded stable particles (no Math.random on render) ── */
const PARTICLES = Array.from({ length: 28 }, (_, i) => {
  const seed = (i * 137.508 + 42) % 100;
  const seed2 = (i * 97.3 + 17)   % 100;
  const seed3 = (i * 61.8 + 9)    % 6;
  return {
    id: i,
    top:   seed,
    left:  seed2,
    size:  2 + seed3,
    delay: (i * 0.47) % 4,
    dur:   3.5 + (i % 4) * 0.8,
  };
});

const SERVICES = [
  {
    index:    "01",
    title:    "Instant Solutions",
    subtitle: "Fast · Efficient · On-Point",
    desc:     "Rapid delivery without compromising craft. From idea to deployment — minimal friction, maximum output.",
    icon:     <RiFlashlightLine />,
    color:    "34,197,94",
    perks:    ["48h turnaround", "Clean architecture", "Zero-bloat code"],
  },
  {
    index:    "02",
    title:    "Guaranteed Excellence",
    subtitle: "Quality · Precision · Beyond Expectations",
    desc:     "Every line of code reviewed, every edge case handled. Production-grade quality that scales with your ambitions.",
    icon:     <RiMedalLine />,
    color:    "74,222,128",
    perks:    ["Code review included", "Tested & documented", "Scalable systems"],
  },
  {
    index:    "03",
    title:    "Endless Support",
    subtitle: "Always Here · Always Available",
    desc:     "Your journey doesn't end at launch. Ongoing support, updates, and guidance — wherever the road takes you.",
    icon:     <RiCustomerService2Line />,
    color:    "16,185,129",
    perks:    ["Post-launch support", "Open communication", "Long-term partnership"],
  },
];

/* ─────────────────────────── */
/*  CARD                       */
/* ─────────────────────────── */
const ServiceCard = ({
  service, delay,
}: {
  service: typeof SERVICES[0];
  index: number;
  delay: number;
}) => {
  const [hov, setHov]       = useState(false);
  const cardRef             = useRef<HTMLDivElement>(null);
  const [tilt, setTilt]     = useState({ x: 0, y: 0 });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = (e.clientX - rect.left) / rect.width  - 0.5;
    const cy = (e.clientY - rect.top)  / rect.height - 0.5;
    setTilt({ x: cy * -10, y: cx * 10 });
  };
  const onMouseLeave = () => { setHov(false); setTilt({ x: 0, y: 0 }); };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, type: "spring", stiffness: 130 }}
      onMouseEnter={() => setHov(true)}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative flex flex-col gap-5 rounded-2xl overflow-hidden p-7"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: hov
          ? `1px solid rgba(${service.color},0.4)`
          : "1px solid rgba(255,255,255,0.06)",
        boxShadow: hov
          ? `0 0 50px rgba(${service.color},0.1), inset 0 0 30px rgba(${service.color},0.02)`
          : "none",
        transform: hov
          ? `perspective(600px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
          : "perspective(600px) rotateX(0deg) rotateY(0deg)",
        transition: "border 0.3s, box-shadow 0.3s, transform 0.15s",
      }}
    >
      {/* BIG watermark number */}
      <div
        className="absolute -bottom-3 -right-1 text-[7rem] font-black leading-none select-none pointer-events-none"
        style={{
          fontFamily: "'Syne', sans-serif",
          color: hov ? `rgba(${service.color},0.07)` : "rgba(255,255,255,0.02)",
          transition: "color 0.3s",
        }}
      >
        {service.index}
      </div>

      {/* Top row: icon + index */}
      <div className="flex items-start justify-between">
        <motion.div
          animate={{ rotate: hov ? 15 : 0, scale: hov ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
          className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
          style={{
            background: hov ? `rgba(${service.color},0.18)` : `rgba(${service.color},0.09)`,
            border:    `1px solid rgba(${service.color},0.25)`,
            color:     `rgb(${service.color})`,
            boxShadow: hov ? `0 0 20px rgba(${service.color},0.25)` : "none",
            transition: "background 0.3s, box-shadow 0.3s",
          }}
        >
          {service.icon}
        </motion.div>

        <span
          className="text-[10px] text-white/15"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          {service.index}
        </span>
      </div>

      {/* Title */}
      <div>
        <h3
          className="text-xl font-black leading-tight transition-colors duration-300"
          style={{
            fontFamily: "'Syne', sans-serif",
            color: hov ? `rgb(${service.color})` : "rgba(255,255,255,0.88)",
          }}
        >
          {service.title}
        </h3>
        <p
          className="text-[10px] mt-0.5 tracking-wider"
          style={{
            fontFamily: "'DM Mono', monospace",
            color: `rgba(${service.color},0.5)`,
          }}
        >
          {service.subtitle}
        </p>
      </div>

      {/* Desc */}
      <p
        className="text-white/30 text-xs leading-relaxed"
        style={{ fontFamily: "'DM Mono', monospace" }}
      >
        {service.desc}
      </p>

      {/* Perks */}
      <div className="flex flex-col gap-2">
        {service.perks.map((perk, pi) => (
          <motion.div
            key={pi}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: hov ? 1 : 0.4, x: 0 }}
            transition={{ delay: pi * 0.06 }}
            className="flex items-center gap-2"
          >
            <span
              className="w-1 h-1 rounded-full shrink-0"
              style={{
                background: `rgba(${service.color},0.7)`,
                boxShadow: hov ? `0 0 4px rgba(${service.color},0.6)` : "none",
              }}
            />
            <span
              className="text-[11px]"
              style={{
                fontFamily: "'DM Mono', monospace",
                color: hov ? `rgba(${service.color},0.7)` : "rgba(255,255,255,0.25)",
                transition: "color 0.3s",
              }}
            >
              {perk}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div
        className="flex items-center justify-between pt-4 mt-auto"
        style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
      >
        <a
          href="#hireme"
          className="text-[10px] transition-colors duration-300"
          style={{
            fontFamily: "'DM Mono', monospace",
            color: hov ? `rgba(${service.color},0.7)` : "rgba(255,255,255,0.2)",
          }}
        >
          Get started →
        </a>
        <motion.div
          animate={{ x: hov ? 3 : 0 }}
          className="text-xs"
          style={{ color: `rgba(${service.color},0.4)` }}
        >
          <HiArrowUpRight />
        </motion.div>
      </div>

      {/* Bottom sweep */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] rounded-full"
        style={{
          background: `linear-gradient(90deg, rgb(${service.color}), rgba(${service.color},0.2))`,
        }}
        animate={{ width: hov ? "100%" : "0%" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Corner glow */}
      <div
        className="absolute top-0 right-0 w-24 h-24 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at top right, rgba(${service.color},0.1), transparent 70%)`,
          opacity: hov ? 1 : 0,
        }}
      />
    </motion.div>
  );
};

/* ─────────────────────────── */
/*  MAIN                       */
/* ─────────────────────────── */
const Services = () => (
  <section
    id="services"
    className="relative py-24 px-6 md:px-10 bg-[#0D0D0D] text-white overflow-hidden"
  >
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Mono:wght@400;500&display=swap');
      @keyframes floatDot {
        0%,100% { transform: translateY(0) translateX(0); opacity: 0.3; }
        50%      { transform: translateY(-12px) translateX(5px); opacity: 0.7; }
      }
    `}</style>

    {/* Stable particles */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      {PARTICLES.map(p => (
        <div
          key={p.id}
          className="absolute rounded-full bg-green-500/30"
          style={{
            width:  p.size,
            height: p.size,
            top:    `${p.top}%`,
            left:   `${p.left}%`,
            animation: `floatDot ${p.dur}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>

    {/* BG grid */}
    <div
      className="absolute inset-0 opacity-[0.025] pointer-events-none"
      style={{
        backgroundImage: `linear-gradient(rgba(34,197,94,0.6) 1px, transparent 1px),
          linear-gradient(90deg, rgba(34,197,94,0.6) 1px, transparent 1px)`,
        backgroundSize: "80px 80px",
      }}
    />

    {/* Ambient glow */}
    <div
      className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[280px] pointer-events-none"
      style={{ background: "radial-gradient(ellipse, rgba(34,197,94,0.07) 0%, transparent 70%)" }}
    />

    <div className="relative z-10 max-w-6xl mx-auto">

      {/* ── Heading ── */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p
          className="text-xs tracking-[0.4em] text-green-500/50 uppercase mb-3"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          — what i bring —
        </p>
        <h2
          className="text-5xl md:text-6xl font-black text-white leading-none"
          style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.02em" }}
        >
          My{" "}
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "2px #22c55e" }}
          >
            Services
          </span>
        </h2>
        <div className="mt-4 mx-auto w-16 h-px bg-green-500/30" />
        <p
          className="mt-5 text-white/30 text-sm max-w-lg mx-auto"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          Turning complex problems into clean, scalable solutions — fast, precise, and built to last.
        </p>
      </motion.div>

      {/* ── Cards ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SERVICES.map((svc, i) => (
          <ServiceCard key={i} service={svc} index={i} delay={i * 0.12} />
        ))}
      </div>

      {/* ── CTA ── */}
      <motion.div
        className="mt-12 flex justify-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <motion.a
          href="#hireme"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="relative overflow-hidden group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold text-black bg-green-500 transition-colors duration-300"
          style={{ fontFamily: "'DM Mono', monospace" }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#4ade80")}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#22c55e")}
        >
          <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-0 bg-green-300 transition-transform duration-300 rounded-xl" />
          <RiFlashlightLine className="relative z-10 text-base" />
          <span className="relative z-10">Let's Work Together</span>
          <HiArrowUpRight className="relative z-10 text-base" />
        </motion.a>
      </motion.div>
    </div>
  </section>
);

export default Services;