import React from "react";
import { RiStackLine, RiShieldCheckLine, RiTeamLine, RiCheckLine } from "react-icons/ri";
import { HiArrowRight } from "react-icons/hi2";
import { Reveal, SectionHeader } from "./ui";

const SERVICES = [
  {
    title: "Clear delivery",
    desc:  "I take a feature from a rough brief to a service or interface someone else can maintain. Scope stays explicit, and the structure stays simple.",
    icon:  <RiStackLine />,
    perks: ["Explicit scope", "Straightforward architecture", "Code the next person can read"],
  },
  {
    title: "Production mindset",
    desc:  "Financial software has to fail carefully. I treat security, data, and the unhappy paths with the same attention as the feature itself.",
    icon:  <RiShieldCheckLine />,
    perks: ["Security-conscious defaults", "Reviewed changes", "Behavior worth documenting"],
  },
  {
    title: "Steady collaboration",
    desc:  "I work in agile teams, write things down, and stay available after the first version is in review — not only until the ticket closes.",
    icon:  <RiTeamLine />,
    perks: ["Code review", "Open communication", "Follow-through"],
  },
];

const onSpotlight = (e: React.MouseEvent<HTMLDivElement>) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};

const Services = () => (
  <section id="services" className="l-section">
    <style>{`
      .svc-cell { position: relative; }
      .svc-cell::before {
        content: ""; position: absolute; inset: 0; pointer-events: none;
        opacity: 0; transition: opacity 0.3s;
        background: radial-gradient(380px circle at var(--mx, 50%) var(--my, 50%), rgba(231, 208, 168, 0.08), transparent 70%);
      }
      .svc-cell:hover::before { opacity: 1; }
    `}</style>

    <div className="l-container">
      <SectionHeader
        num="03"
        label="Services"
        title={<>How the work <span className="l-em">gets done.</span></>}
        lead="The same three habits, whether the task is an API, a service, or a full feature."
        aside={<a href="#hireme" className="l-btn l-btn-secondary">Start a conversation <HiArrowRight /></a>}
      />

      <Reveal>
        <div className="l-grid grid-cols-1 md:grid-cols-3">
          {SERVICES.map((svc, i) => (
            <div key={svc.title} className="svc-cell p-8 flex flex-col gap-5" onMouseMove={onSpotlight}>
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-lg"
                  style={{ border: "1px solid var(--border-strong)", color: "var(--accent-hi)", background: "var(--accent-soft)" }}>
                  {svc.icon}
                </div>
                <span className="l-mono text-[11px]" style={{ color: "var(--text-4)" }}>{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div>
                <h3 className="l-h3">{svc.title}</h3>
                <p className="l-body mt-2">{svc.desc}</p>
              </div>
              <ul className="flex flex-col gap-2.5 mt-auto pt-2">
                {svc.perks.map(perk => (
                  <li key={perk} className="flex items-center gap-2.5 text-[14px]" style={{ color: "var(--text-2)" }}>
                    <RiCheckLine aria-hidden style={{ color: "var(--accent-hi)" }} />
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export default Services;
