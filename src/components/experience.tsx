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
    title:    "Junior Software Engineer",
    type:     "Digital financial services",
    industry: "FinTech · Colombo",
    period:   "Present",
    current:  true,
    summary:
      "Junior Software Engineer at PayMedia, an award-winning Sri Lankan fintech company building digital banking and payment software for banks and financial institutions. I contribute on the enterprise backend of those products, where security, compliance, and performance come first.",
    highlights: [
      "Enterprise backend development for digital financial services",
      "Security- and compliance-conscious engineering",
      "Delivery inside an agile product team",
      "Collaboration through code review",
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
      color: "#1a140c",
      background: "linear-gradient(160deg, #f0e2c8 0%, #c6a36a 55%, #8d6a3a 100%)",
      boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.28)",
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
        title={<>Where the work <span className="l-em">happens.</span></>}
        lead="Industry experience in digital financial services — enterprise backend work where security and reliability come first. Client and project details stay private."
      />

      <ol className="l-timeline flex flex-col gap-6">
        {EXPERIENCE.map((role, i) => (
            <li key={role.company + role.title} className="relative">
              <span className="l-timeline-dot" aria-hidden />
              <Reveal delay={i * 0.08}>
              <article className="l-card l-card-hover grid md:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] overflow-hidden">

                <div className="p-7 md:p-8 flex flex-col gap-5 border-b md:border-b-0 md:border-r"
                  style={{ borderColor: "var(--border)", background: "var(--bg-elevated)" }}>
                  <div className="flex items-center gap-3">
                    <CompanyMark name={role.company} />
                    <div>
                      <p className="text-[17px] font-semibold tracking-[-0.015em]" style={{ color: "var(--text-1)" }}>{role.company}</p>
                      <p className="flex items-center gap-1.5 text-[13px]" style={{ color: "var(--text-3)" }}>
                        <RiBriefcase4Line aria-hidden /> {role.type}
                      </p>
                      {role.industry && (
                        <p className="flex items-center gap-1.5 text-[13px] mt-0.5" style={{ color: "var(--text-3)" }}>
                          <RiBankLine aria-hidden /> {role.industry}
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

                <div className="p-7 md:p-8 flex flex-col gap-5">
                  <div>
                    <h3 className="l-serif text-[1.85rem] leading-none tracking-[-0.02em]" style={{ color: "var(--text-1)" }}>
                      {role.title}
                    </h3>
                    <p className="l-body mt-3">{role.summary}</p>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                    {role.highlights.map(h => (
                      <li key={h} className="flex items-start gap-2.5 text-[14px] leading-snug" style={{ color: "var(--text-2)" }}>
                        <RiCheckLine className="shrink-0 mt-0.5" aria-hidden style={{ color: "var(--accent-hi)" }} /> {h}
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
            </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
