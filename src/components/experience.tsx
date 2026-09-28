import React from "react";
import { RiBriefcase4Line, RiBankLine, RiCheckLine } from "react-icons/ri";
import { Reveal, SectionHeader } from "./ui";

interface Role {
  company: string;
  title: string;
  type: string;
  industry?: string;
  period: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  /* what the company works on — context, not personal claims */
  domain?: { label: string; items: string[] };
  tags: string[];
}

/* Add new roles to the top of this list. */
const EXPERIENCE: Role[] = [
  {
    company:  "PayMedia",
    title:    "Software Engineer Intern",
    type:     "Internship · 6 months",
    industry: "Fintech · Colombo",
    period:   "Present",
    current:  true,
    summary:
      "Engineering in fintech at PayMedia — an award-winning Sri Lankan company building digital banking and payment software for banks and financial institutions, where security, compliance and performance come first.",
    highlights: [
      "Building software for the banking domain",
      "Security- and compliance-first engineering",
      "Working in an agile product team",
      "Collaborating through code reviews",
    ],
    domain: {
      label: "What PayMedia builds",
      items: ["Digital onboarding (eKYC)", "Wallets & payments", "Agency banking", "Remittance", "Loan origination", "Smart & EFT POS"],
    },
    tags: [],
  },
];

const CompanyMark: React.FC<{ name: string }> = ({ name }) => (
  <div className="w-11 h-11 rounded-xl shrink-0 flex items-center justify-center text-[17px] font-semibold"
    style={{
      color: "#fff",
      background: "linear-gradient(135deg, #8b8cff 0%, #5e6ad2 55%, #3c3f9e 100%)",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.18)",
    }}>
    {name.charAt(0)}
  </div>
);

const Experience: React.FC = () => (
  <section id="experience" className="l-section">
    <div className="l-container">
      <SectionHeader
        num="02"
        label="Experience"
        title="Where I'm building."
        lead="Hands-on industry experience in fintech, applying what I learn to software that banks and their customers rely on."
      />

      <div className="flex flex-col gap-4">
        {EXPERIENCE.map((role, i) => (
          <Reveal key={role.company + role.title} delay={i * 0.08}>
            <article className="l-card l-card-hover grid md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] overflow-hidden">

              {/* ── Meta column ── */}
              <div className="p-8 flex flex-col gap-5 border-b md:border-b-0 md:border-r"
                style={{ borderColor: "var(--border)", background: "var(--bg-elevated)" }}>
                <div className="flex items-center gap-3">
                  <CompanyMark name={role.company} />
                  <div>
                    <p className="text-[17px] font-semibold tracking-[-0.015em]" style={{ color: "var(--text-1)" }}>{role.company}</p>
                    <p className="flex items-center gap-1.5 text-[13px]" style={{ color: "var(--text-3)" }}>
                      <RiBriefcase4Line /> {role.type}
                    </p>
                    {role.industry && (
                      <p className="flex items-center gap-1.5 text-[13px] mt-0.5" style={{ color: "var(--text-3)" }}>
                        <RiBankLine /> {role.industry}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {role.current ? (
                    <span className="l-pill">
                      <span className="l-status-dot !w-1.5 !h-1.5" /> Current role
                    </span>
                  ) : (
                    <span className="l-pill">Completed</span>
                  )}
                  <span className="l-mono text-[12px]" style={{ color: "var(--text-4)" }}>{role.period}</span>
                </div>
              </div>

              {/* ── Detail column ── */}
              <div className="p-8 flex flex-col gap-5">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold tracking-[-0.02em]" style={{ color: "var(--text-1)" }}>
                    {role.title}
                  </h3>
                  <p className="l-body mt-2">{role.summary}</p>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                  {role.highlights.map(h => (
                    <li key={h} className="flex items-center gap-2.5 text-[14px]" style={{ color: "var(--text-2)" }}>
                      <RiCheckLine className="shrink-0" style={{ color: "var(--accent-hi)" }} /> {h}
                    </li>
                  ))}
                </ul>
                {role.domain && (
                  <div className="pt-5" style={{ borderTop: "1px solid var(--border)" }}>
                    <p className="text-[12.5px] mb-2.5" style={{ color: "var(--text-4)" }}>{role.domain.label}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {role.domain.items.map(item => <span key={item} className="l-tag">{item}</span>)}
                    </div>
                  </div>
                )}
                {role.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {role.tags.map(tag => <span key={tag} className="l-tag">{tag}</span>)}
                  </div>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
