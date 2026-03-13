import React, { useState, useEffect, useRef } from "react";
import resume from "../assets/SasuniWIjerathne_CV (3).pdf";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const HireMe = () => {
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);

  /* ── 3D Wireframe Sphere ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const W = canvas.width = 340;
    const H = canvas.height = 340;
    const cx = W / 2, cy = H / 2, R = 125;
    let angleY = 0, angleX = 0.35;

    const project = (x: number, y: number, z: number) => {
      const cosY = Math.cos(angleY), sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX), sinX = Math.sin(angleX);
      const x1 = x * cosY - z * sinY;
      const z1 = x * sinY + z * cosY;
      const y1 = y * cosX - z1 * sinX;
      const z2 = y * sinX + z1 * cosX;
      const scale = 700 / (700 + z2);
      return { x: cx + x1 * scale, y: cy + y1 * scale, z: z2, scale };
    };

    const LATS = 14, LONS = 20;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      /* Outer glow */
      const grd = ctx.createRadialGradient(cx, cy, R * 0.3, cx, cy, R * 1.3);
      grd.addColorStop(0, "rgba(34,197,94,0.06)");
      grd.addColorStop(0.5, "rgba(34,197,94,0.03)");
      grd.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.3, 0, Math.PI * 2);
      ctx.fill();

      /* Latitude lines */
      for (let i = 1; i < LATS; i++) {
        const phi = (Math.PI * i) / LATS - Math.PI / 2;
        const r = R * Math.cos(phi);
        const yy = R * Math.sin(phi);
        const pts: { x: number; y: number; z: number }[] = [];
        for (let j = 0; j <= LONS; j++) {
          const theta = (2 * Math.PI * j) / LONS;
          pts.push(project(r * Math.cos(theta), yy, r * Math.sin(theta)));
        }
        ctx.beginPath();
        pts.forEach((p, idx) => idx === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
        const depth = (pts[0].z + R) / (2 * R);
        ctx.strokeStyle = `rgba(34,197,94,${0.08 + depth * 0.28})`;
        ctx.lineWidth = 0.6 + depth * 0.5;
        ctx.stroke();
      }

      /* Longitude lines */
      for (let j = 0; j < LONS; j++) {
        const theta = (2 * Math.PI * j) / LONS;
        const pts: { x: number; y: number; z: number }[] = [];
        for (let i = 0; i <= LATS; i++) {
          const phi = (Math.PI * i) / LATS - Math.PI / 2;
          const r = R * Math.cos(phi);
          const yy = R * Math.sin(phi);
          pts.push(project(r * Math.cos(theta), yy, r * Math.sin(theta)));
        }
        ctx.beginPath();
        pts.forEach((p, idx) => idx === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
        const depth = (pts[Math.floor(LATS / 2)].z + R) / (2 * R);
        ctx.strokeStyle = `rgba(34,197,94,${0.06 + depth * 0.22})`;
        ctx.lineWidth = 0.5 + depth * 0.4;
        ctx.stroke();
      }

      /* Glowing nodes at intersections */
      for (let i = 0; i < LATS; i += 3) {
        for (let j = 0; j < LONS; j += 3) {
          const phi = (Math.PI * i) / LATS - Math.PI / 2;
          const theta = (2 * Math.PI * j) / LONS;
          const r = R * Math.cos(phi);
          const yy = R * Math.sin(phi);
          const p = project(r * Math.cos(theta), yy, r * Math.sin(theta));
          if (p.z > -20) {
            const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 4);
            g.addColorStop(0, "rgba(34,197,94,0.9)");
            g.addColorStop(1, "rgba(34,197,94,0)");
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      angleY += 0.004;
      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animFrameRef.current);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setNotification(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY || "ece9ddf5-1f42-4720-b07e-2f211bf60247");
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await res.json();
      if (data.success) {
        setNotification({ type: "success", message: "Your message has been sent successfully!" });
        form.reset();
      } else {
        setNotification({ type: "error", message: "Error: " + data.message });
      }
    } catch {
      setNotification({ type: "error", message: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="hireme"
      className=" relative flex flex-col justify-center px-6 md:px-10 bg-[#0D0D0D] text-white overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Background depth grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,197,94,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,197,94,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient green glow top-right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 80% 10%, rgba(34,197,94,0.08) 0%, transparent 65%)",
        }}
      />

      {/* Section label */}
      <div className="relative text-center mb-6">
        <p className="text-[10px] tracking-[0.5em] text-green-500/60 uppercase mb-2 font-mono">
          — get in touch —
        </p>
        <h2
          className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-none"
          style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.01em" }}
        >
          Hire{" "}
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "1px #22c55e" }}
          >
            Me.
          </span>
        </h2>
        <div className="mt-4 mx-auto w-12 h-px bg-green-500/30" />
      </div>

      {/* Main 2-col layout */}
      <div className="w-full relative max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">

        {/* LEFT — Form */}
        <div className="order-2 md:order-1">

          {notification && (
            <div
              className={`mb-6 px-5 py-3 rounded-lg text-sm font-medium tracking-wide ${
                notification.type === "success"
                  ? "bg-green-500/10 border border-green-500/30 text-green-400"
                  : "bg-red-500/10 border border-red-500/30 text-red-400"
              }`}
            >
              {notification.message}
            </div>
          )}

          <form
            id="contactForm"
            onSubmit={handleSubmit}
            className="flex flex-col gap-3"
          >
            {[
              { type: "text", name: "name", placeholder: "Your Name" },
              { type: "email", name: "email", placeholder: "Your Email" },
            ].map((f) => (
              <div key={f.name} className="relative group">
                <input
                  type={f.type}
                  name={f.name}
                  placeholder={f.placeholder}
                  required
                  className="w-full bg-[#111] border border-white/[0.07] text-white placeholder-white/20 rounded-xl px-5 py-4 text-sm
                    focus:outline-none focus:border-green-500/50 focus:bg-[#0f1a0f]
                    transition-all duration-300 group-hover:border-white/15"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                />
                <div className="absolute inset-0 rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: "0 0 20px rgba(34,197,94,0.06)" }} />
              </div>
            ))}

            <div className="relative group">
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={4}
                className="w-full bg-[#111] border border-white/[0.07] text-white placeholder-white/20 rounded-xl px-5 py-4 text-sm
                  focus:outline-none focus:border-green-500/50 focus:bg-[#0f1a0f]
                  transition-all duration-300 resize-none group-hover:border-white/15"
                style={{ fontFamily: "'DM Mono', monospace" }}
              />
              <div className="absolute inset-0 rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: "0 0 20px rgba(34,197,94,0.06)" }} />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="relative mt-1 group overflow-hidden rounded-xl px-8 py-4 text-sm font-semibold tracking-widest uppercase
                bg-green-500 text-black hover:bg-green-400 transition-all duration-300
                disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              <span className="relative z-10">
                {loading ? "Sending..." : "Send Message →"}
              </span>
              <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-green-300" />
            </button>
          </form>

          {/* Contact info + buttons */}
          <div className="mt-6 pt-6 border-t border-white/[0.06]">
            <ul className="flex flex-col gap-3 text-sm text-white/40 mb-7">
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-green-500 text-xs shrink-0" />
                <span style={{ fontFamily: "'DM Mono', monospace" }}>sasuniwijerathne@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-green-500 text-xs shrink-0" />
                <span style={{ fontFamily: "'DM Mono', monospace" }}>Colombo, Sri Lanka</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center border border-green-500/40 text-green-500 text-sm font-medium
                  rounded-xl px-5 py-3 hover:bg-green-500/10 transition-all duration-300 tracking-wider"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                Download Resume
              </a>
              <a
                href="#about"
                className="flex-1 text-center border border-white/[0.08] text-white/40 text-sm font-medium
                  rounded-xl px-5 py-3 hover:border-white/20 hover:text-white/70 transition-all duration-300 tracking-wider"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                Explore About Me
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT — 3D Sphere */}
        <div className="order-1 md:order-2 flex items-center justify-center">
          <div className="relative">
            {/* Outer ring */}
            <div
              className="absolute inset-[-30px] rounded-full border border-green-500/10 animate-spin"
              style={{ animationDuration: "20s" }}
            />
            <div
              className="absolute inset-[-60px] rounded-full border border-green-500/[0.05] animate-spin"
              style={{ animationDuration: "35s", animationDirection: "reverse" }}
            />

            {/* Ground reflection */}
            <div
              className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-[200px] h-[20px] blur-xl"
              style={{ background: "radial-gradient(ellipse, rgba(34,197,94,0.25) 0%, transparent 70%)" }}
            />

            <canvas
              ref={canvasRef}
              className="relative z-10 drop-shadow-2xl"
              style={{
                filter: "drop-shadow(0 0 40px rgba(34,197,94,0.15)) drop-shadow(0 0 80px rgba(34,197,94,0.08))",
              }}
            />

            {/* Floating label chips */}
            <div
              className="absolute top-[12%] right-[-30px] bg-[#111] border border-green-500/20 rounded-full px-3 py-1
                text-green-500 text-[10px] font-mono tracking-widest uppercase animate-bounce"
              style={{ animationDuration: "3s" }}
            >
              AI/ML
            </div>
            <div
              className="absolute bottom-[20%] left-[-40px] bg-[#111] border border-green-500/20 rounded-full px-3 py-1
                text-green-500 text-[10px] font-mono tracking-widest uppercase animate-bounce"
              style={{ animationDuration: "4s", animationDelay: "1s" }}
            >
              Full-Stack
            </div>
            <div
              className="absolute top-[45%] right-[-50px] bg-[#111] border border-green-500/20 rounded-full px-3 py-1
                text-green-500 text-[10px] font-mono tracking-widest uppercase animate-bounce"
              style={{ animationDuration: "3.5s", animationDelay: "0.5s" }}
            >
              Cloud
            </div>
          </div>
        </div>
      </div>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@800;900&family=DM+Mono:wght@400;500&display=swap');
      `}</style>
    </section>
  );
};

export default HireMe;