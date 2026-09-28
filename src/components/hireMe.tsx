import React, { useState } from "react";
import resume from "../assets/SasuniWIjerathne_CV (3).pdf";
import { RiMailLine, RiMapPinLine, RiTimeLine, RiCheckboxCircleLine, RiErrorWarningLine, RiLoader4Line } from "react-icons/ri";
import { HiArrowRight, HiArrowUpRight } from "react-icons/hi2";
import { Reveal } from "./ui";

const details = [
  { icon: <RiMailLine />,   label: "Email",    value: "sasuniwijerathne@gmail.com", href: "mailto:sasuniwijerathne@gmail.com" },
  { icon: <RiMapPinLine />, label: "Location", value: "Colombo, Sri Lanka" },
  { icon: <RiTimeLine />,   label: "Response", value: "Usually within 24 hours" },
];

const HireMe = () => {
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<{ type: "success" | "error"; message: string } | null>(null);

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
    <section id="hireme" className="l-section overflow-hidden">
      {/* soft top glow */}
      <div className="absolute inset-x-0 top-0 h-[420px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 70% at 50% 0%, rgba(113,112,255,0.14), transparent 70%)" }} />

      <div className="l-container relative">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <p className="l-eyebrow mb-5 justify-center">
            <span className="l-eyebrow-num">07</span>
            <span>Contact</span>
          </p>
          <h2 className="l-h2 l-gradient-text">Let's build something together.</h2>
          <p className="l-lead mt-5">
            Have a project, a role, or just an idea worth exploring? Send a message — I'd love to hear from you.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-6 max-w-4xl mx-auto">

          {/* ── Details ── */}
          <Reveal className="flex flex-col">
            <div className="l-card p-2 flex-1 flex flex-col">
              {details.map((d, i) => (
                <div key={d.label} className="flex items-start gap-3 p-4"
                  style={{ borderBottom: i < details.length - 1 ? "1px solid var(--border)" : "none" }}>
                  <span className="mt-0.5 text-[17px]" style={{ color: "var(--text-3)" }}>{d.icon}</span>
                  <div className="min-w-0">
                    <p className="text-[12.5px]" style={{ color: "var(--text-4)" }}>{d.label}</p>
                    {d.href ? (
                      <a href={d.href} className="l-link text-[14.5px] break-all" style={{ color: "var(--text-1)" }}>{d.value}</a>
                    ) : (
                      <p className="text-[14.5px]" style={{ color: "var(--text-1)" }}>{d.value}</p>
                    )}
                  </div>
                </div>
              ))}
              <div className="mt-auto p-4 flex flex-col sm:flex-row md:flex-col lg:flex-row gap-2">
                <a href={resume} target="_blank" rel="noopener noreferrer" className="l-btn l-btn-sm l-btn-secondary flex-1">
                  Download resume <HiArrowUpRight />
                </a>
                <a href="#about" className="l-btn l-btn-sm l-btn-ghost flex-1">About me</a>
              </div>
            </div>
          </Reveal>

          {/* ── Form ── */}
          <Reveal delay={0.08}>
            <form id="contactForm" onSubmit={handleSubmit} className="l-card p-6 md:p-8 flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="flex flex-col gap-2">
                  <span className="text-[13px] font-medium" style={{ color: "var(--text-2)" }}>Name</span>
                  <input className="l-input" type="text" name="name" placeholder="Jane Doe" required autoComplete="name" />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-[13px] font-medium" style={{ color: "var(--text-2)" }}>Email</span>
                  <input className="l-input" type="email" name="email" placeholder="jane@company.com" required autoComplete="email" />
                </label>
              </div>
              <label className="flex flex-col gap-2">
                <span className="text-[13px] font-medium" style={{ color: "var(--text-2)" }}>Message</span>
                <textarea className="l-input resize-none" name="message" rows={5} placeholder="Tell me about your project…" required />
              </label>

              {notification && (
                <div role="status"
                  className="flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-[13.5px]"
                  style={notification.type === "success"
                    ? { color: "var(--green)", background: "rgba(76,183,130,0.08)", border: "1px solid rgba(76,183,130,0.25)" }
                    : { color: "#eb5757", background: "rgba(235,87,87,0.08)", border: "1px solid rgba(235,87,87,0.25)" }}>
                  {notification.type === "success" ? <RiCheckboxCircleLine /> : <RiErrorWarningLine />}
                  {notification.message}
                </div>
              )}

              <button type="submit" disabled={loading} className="l-btn l-btn-primary w-full mt-1">
                {loading
                  ? <><RiLoader4Line className="l-spin" /> Sending…</>
                  : <>Send message <HiArrowRight /></>}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
