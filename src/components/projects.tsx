import React from "react";
import {
  RiGithubLine, RiExternalLinkLine, RiCheckLine, RiSmartphoneLine, RiServerLine,
  RiCloudLine, RiShieldKeyholeLine, RiMovie2Line, RiBrainLine, RiHeartPulseLine,
} from "react-icons/ri";
import { HiArrowUpRight } from "react-icons/hi2";
import { Reveal, SectionHeader } from "./ui";

/* ─────────────────────────────── */
/*  PROJECT DATA                   */
/* ─────────────────────────────── */
interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  type: string;
  typeIcon: React.ReactNode;
  github: string;
  live?: string;
  highlights: string[];
  /* stats panel shown when the project is featured */
  spec: { file: string; metric: string; metricLabel: string };
}

const GH = "https://github.com/sasuniii0";

/* The first project is featured; order the rest by relevance. */
const PROJECTS: Project[] = [
  {
    id: "01",
    title: "StayCloud",
    subtitle: "Cloud-native hotel booking platform on Google Cloud",
    description:
      "A Spring Cloud microservice architecture for hotel room booking — rooms, reservations and payments as independent services behind a single API gateway, deployed to Google Cloud with load balancing, health checks and managed instance groups.",
    tags: ["Java", "Spring Boot 4", "Spring Cloud", "Eureka", "PostgreSQL", "MongoDB", "Google Cloud", "React"],
    type: "Cloud · Microservices",
    typeIcon: <RiCloudLine />,
    github: `${GH}/StayCloud-Platform`,
    highlights: [
      "Payment service with inter-service calls",
      "API gateway + Eureka service discovery",
      "Centralized config via Config Server",
      "GCP load balancing, DNS & instance groups",
    ],
    spec: { file: "staycloud / gcp", metric: "6", metricLabel: "Spring microservices · deployed on GCP" },
  },
  {
    id: "02",
    title: "Secure Login System",
    subtitle: "OTP authentication + AES-256 encrypted vault",
    description:
      "A stateless Spring Boot security backend with two-step login: BCrypt-hashed passwords, time-limited one-time passwords, JWT sessions and a personal vault whose notes are encrypted at rest with AES-256.",
    tags: ["Java", "Spring Boot", "Spring Security", "JWT", "BCrypt", "AES-256"],
    type: "Security",
    typeIcon: <RiShieldKeyholeLine />,
    github: `${GH}/Secure-Login-System`,
    highlights: [
      "6-digit OTP with 5-minute expiry",
      "BCrypt hashing (cost factor 12)",
      "AES-256/CBC with random IV",
      "JWT (HS256) stateless sessions",
    ],
    spec: { file: "secure-login / auth", metric: "AES-256", metricLabel: "encryption at rest · OTP + JWT" },
  },
  {
    id: "03",
    title: "VeloStream",
    subtitle: "Netflix-inspired streaming backend",
    description:
      "A movie streaming platform backend built as Spring Boot microservices — users, movies, reviews, watchlists and notifications — with event-driven messaging, distributed tracing and role-based security.",
    tags: ["Spring Boot", "Spring Cloud", "RabbitMQ", "OpenFeign", "Zipkin", "MySQL", "Docker"],
    type: "Microservices",
    typeIcon: <RiMovie2Line />,
    github: `${GH}/VeloStream`,
    highlights: [
      "Event-driven messaging with RabbitMQ",
      "Distributed tracing with Zipkin",
      "JWT + role-based access control",
      "Database-per-service design",
    ],
    spec: { file: "velostream / services", metric: "5", metricLabel: "domain services · async events" },
  },
  {
    id: "04",
    title: "FairVision",
    subtitle: "Bias-audited age classification",
    description:
      "A custom CNN that predicts age groups from face images, built without transfer learning and focused on auditing and mitigating bias across demographic groups — served through an interactive Streamlit app.",
    tags: ["Python", "PyTorch", "CNN", "Streamlit", "Jupyter"],
    type: "AI / ML",
    typeIcon: <RiBrainLine />,
    github: `${GH}/FairVision`,
    highlights: [
      "Custom 3-layer CNN, no pre-training",
      "Fairness audit across demographics",
      "Bias mitigation techniques applied",
      "Top-3 predictions with confidence",
    ],
    spec: { file: "fairvision.ipynb", metric: "9", metricLabel: "age groups · bias-audited CNN" },
  },
  {
    id: "05",
    title: "Diabetes Readmission Risk Analysis",
    subtitle: "Vitality Complexity Index (VCI)",
    description:
      "Analyzed 101,766 patient encounters across 130 US hospitals to predict 30-day readmission risk. The VCI — inspired by the LACE Index — helps providers stratify patient risk before discharge.",
    tags: ["Python", "Pandas", "Scikit-learn", "NumPy", "Matplotlib", "Seaborn", "Jupyter"],
    type: "Data Science",
    typeIcon: <RiHeartPulseLine />,
    github: `${GH}/Strategic-Patient-Risk-Stratification-Readmission-Predictive-Modeling-for-Vitality-Health-Network`,
    highlights: [
      "101,766 patient encounters analyzed",
      "Custom VCI clinical scoring system",
      "30-day readmission prediction",
      "HRRP financial penalty reduction",
    ],
    spec: { file: "vci_analysis.ipynb", metric: "101,766", metricLabel: "patient encounters · 130 US hospitals" },
  },
  {
    id: "06",
    title: "DailyForge",
    subtitle: "Forge your future, one strike at a time.",
    description:
      "A blacksmith-inspired habit-tracking mobile app that turns discipline into a visual craft — every habit is a piece of iron that must be struck daily to stay hot.",
    tags: ["React Native", "Firebase", "TypeScript", "Expo", "Redux"],
    type: "Mobile App",
    typeIcon: <RiSmartphoneLine />,
    github: `${GH}/DailyForge`,
    highlights: [
      "Firebase authentication",
      "Full CRUD habit tracking",
      "Cloud data persistence",
      "Streak & progress analytics",
    ],
    spec: { file: "dailyforge / app", metric: "Daily", metricLabel: "streaks · progress analytics" },
  },
  {
    id: "07",
    title: "PropertyPulse",
    subtitle: "Real estate platform & REST API",
    description:
      "A full real estate platform with a Node.js + TypeScript API — AI-powered analytics, Stripe payments for premium listings, Cloudinary uploads, SendGrid emails and dynamic PDF reports.",
    tags: ["Node.js", "Express", "TypeScript", "MongoDB", "Stripe", "OpenAI", "React"],
    type: "Full Stack",
    typeIcon: <RiServerLine />,
    github: GH,
    highlights: [
      "Stripe payment integration",
      "AI-powered property analytics",
      "Role-based access control",
      "PDF report generation",
    ],
    spec: { file: "propertypulse / api", metric: "Stripe", metricLabel: "payments · AI analytics" },
  },
];

const TypeBadge: React.FC<{ project: Project }> = ({ project }) => (
  <span className="l-pill">
    <span style={{ color: "var(--text-3)" }}>{project.typeIcon}</span>
    {project.type}
  </span>
);

const ProjectLinks: React.FC<{ project: Project }> = ({ project }) => (
  <div className="flex items-center gap-2">
    <a href={project.github} target="_blank" rel="noopener noreferrer" className="l-btn l-btn-sm l-btn-secondary">
      <RiGithubLine /> Code
    </a>
    {project.live && (
      <a href={project.live} target="_blank" rel="noopener noreferrer" className="l-btn l-btn-sm l-btn-primary">
        <RiExternalLinkLine /> Live demo
      </a>
    )}
  </div>
);

/* ─────────────────────────────── */
/*  FEATURED CARD                  */
/* ─────────────────────────────── */
const FeaturedProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <Reveal>
    <article className="l-card l-card-hover overflow-hidden grid lg:grid-cols-2">
      <div className="p-8 md:p-10 flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <TypeBadge project={project} />
          <span className="l-pill" style={{ color: "var(--accent-hi)", borderColor: "rgba(113,112,255,0.3)", background: "var(--accent-soft)" }}>
            Featured
          </span>
        </div>
        <div>
          <h3 className="text-2xl md:text-[28px] font-semibold tracking-[-0.025em] leading-tight" style={{ color: "var(--text-1)" }}>
            {project.title}
          </h3>
          <p className="text-[15px] mt-1.5" style={{ color: "var(--text-3)" }}>{project.subtitle}</p>
        </div>
        <p className="l-body">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map(tag => <span key={tag} className="l-tag">{tag}</span>)}
        </div>
        <div className="mt-auto pt-2"><ProjectLinks project={project} /></div>
      </div>

      {/* spec-sheet panel */}
      <div className="relative p-8 md:p-10 flex items-center overflow-hidden border-t lg:border-t-0 lg:border-l"
        style={{ background: "var(--bg-elevated)", borderColor: "var(--border)" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 60% at 100% 0%, rgba(113,112,255,0.12), transparent 70%)" }} />
        <div className="relative w-full rounded-xl overflow-hidden"
          style={{ border: "1px solid var(--border)", background: "var(--bg)" }}>
          <div className="flex items-center justify-between px-4 h-10" style={{ borderBottom: "1px solid var(--border)" }}>
            <span className="l-mono text-[12px]" style={{ color: "var(--text-3)" }}>{project.spec.file}</span>
            <span className="l-mono text-[11px]" style={{ color: "var(--text-4)" }}>{project.id}</span>
          </div>
          <div className="px-4 py-6 text-center" style={{ borderBottom: "1px solid var(--border)" }}>
            <p className="text-5xl font-semibold tracking-[-0.04em] l-gradient-text">{project.spec.metric}</p>
            <p className="text-[13px] mt-2" style={{ color: "var(--text-3)" }}>{project.spec.metricLabel}</p>
          </div>
          <ul>
            {project.highlights.map((h, i) => (
              <li key={h} className="flex items-center gap-3 px-4 h-11 text-[13.5px]"
                style={{ color: "var(--text-2)", borderBottom: i < project.highlights.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                <RiCheckLine style={{ color: "var(--accent-hi)" }} /> {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  </Reveal>
);

/* ─────────────────────────────── */
/*  SMALL CARD                     */
/* ─────────────────────────────── */
const SmallProjectCard: React.FC<{ project: Project; delay: number }> = ({ project, delay }) => (
  <Reveal delay={delay} className="h-full">
    <article className="l-card l-card-hover h-full p-8 flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <TypeBadge project={project} />
        <span className="l-mono text-[11px]" style={{ color: "var(--text-4)" }}>{project.id}</span>
      </div>
      <div>
        <h3 className="text-xl font-semibold tracking-[-0.02em]" style={{ color: "var(--text-1)" }}>{project.title}</h3>
        <p className="text-[14px] mt-1" style={{ color: "var(--text-3)" }}>{project.subtitle}</p>
      </div>
      <p className="l-body">{project.description}</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
        {project.highlights.map(h => (
          <li key={h} className="flex items-center gap-2 text-[13px]" style={{ color: "var(--text-2)" }}>
            <RiCheckLine className="shrink-0" style={{ color: "var(--accent-hi)" }} /> {h}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map(tag => <span key={tag} className="l-tag">{tag}</span>)}
      </div>
      <div className="mt-auto pt-5" style={{ borderTop: "1px solid var(--border)" }}>
        <ProjectLinks project={project} />
      </div>
    </article>
  </Reveal>
);

/* ─────────────────────────────── */
/*  MAIN SECTION                   */
/* ─────────────────────────────── */
const Projects: React.FC = () => {
  const [featured, ...rest] = PROJECTS;

  return (
    <section id="projects" className="l-section">
      <div className="l-container">
        <SectionHeader
          num="05"
          label="Projects"
          title="Selected work."
          lead="Cloud-native microservices, secure backends, AI/ML and mobile — built end to end."
          aside={
            <a href={GH} target="_blank" rel="noopener noreferrer" className="l-btn l-btn-secondary">
              <RiGithubLine /> View all on GitHub <HiArrowUpRight />
            </a>
          }
        />

        <FeaturedProjectCard project={featured} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {rest.map((p, i) => <SmallProjectCard key={p.id} project={p} delay={(i % 2) * 0.08} />)}
        </div>
      </div>
    </section>
  );
};

export default Projects;
