import React from "react";
import { RiFlashlightLine, RiMedalLine, RiCustomerService2Line, RiCheckLine } from "react-icons/ri";
import { HiArrowRight } from "react-icons/hi2";
import { Reveal, SectionHeader } from "./ui";

const SERVICES = [
  {
    title: "Instant solutions",
    desc:  "Rapid delivery without compromising craft. From idea to deployment with minimal friction and maximum output.",
    icon:  <RiFlashlightLine />,
    perks: ["48h turnaround", "Clean architecture", "Zero-bloat code"],
  },
  {
    title: "Guaranteed excellence",
    desc:  "Every line reviewed, every edge case handled. Production-grade quality that scales with your ambitions.",
    icon:  <RiMedalLine />,
    perks: ["Code review included", "Tested & documented", "Scalable systems"],
  },
  {
    title: "Endless support",
    desc:  "Your journey doesn't end at launch. Ongoing support, updates and guidance — wherever the road takes you.",
    icon:  <RiCustomerService2Line />,
    perks: ["Post-launch support", "Open communication", "Long-term partnership"],
  },
];

/* cursor-following spotlight, set via CSS variables to avoid re-renders */
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
        background: radial-gradient(360px circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.05), transparent 70%);
      }
      .svc-cell:hover::before { opacity: 1; }
    `}</style>

    <div className="l-container">
      <SectionHeader
        num="03"
        label="Services"
        title="Built for speed. Designed to last."
        lead="Turning complex problems into clean, scalable solutions — fast, precise and made to endure."
        aside={<a href="#hireme" className="l-btn l-btn-secondary">Let's work together <HiArrowRight /></a>}
      />

      <Reveal>
        <div className="l-grid grid-cols-1 md:grid-cols-3">
          {SERVICES.map(svc => (
            <div key={svc.title} className="svc-cell p-8 flex flex-col gap-5" onMouseMove={onSpotlight}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-lg"
                style={{ border: "1px solid var(--border-strong)", color: "var(--text-2)", background: "rgba(255,255,255,0.03)" }}>
                {svc.icon}
              </div>
              <div>
                <h3 className="l-h3">{svc.title}</h3>
                <p className="l-body mt-2">{svc.desc}</p>
              </div>
              <ul className="flex flex-col gap-2.5 mt-auto pt-2">
                {svc.perks.map(perk => (
                  <li key={perk} className="flex items-center gap-2.5 text-[14px]" style={{ color: "var(--text-2)" }}>
                    <RiCheckLine style={{ color: "var(--accent-hi)" }} />
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
