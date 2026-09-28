import profilePic from "../assets/WhatsApp Image 2026-09-28 at 23.43.02.jpeg";
import resume from "../assets/SasuniWIjerathne_CV (3).pdf";
import { FaGithub, FaLinkedin, FaInstagram, FaMedium, FaFacebook } from "react-icons/fa";
import { HiArrowRight, HiArrowUpRight } from "react-icons/hi2";
import { RiMapPinLine } from "react-icons/ri";
import { Reveal, SectionHeader } from "./ui";

const socials = [
  { icon: <FaLinkedin />,  link: "https://www.linkedin.com/in/sasuni-wijerathne-a3b517311", label: "LinkedIn" },
  { icon: <FaGithub />,    link: "https://github.com/sasuniii0",                             label: "GitHub" },
  { icon: <FaMedium />,    link: "https://medium.com/@sasuniwijerathne",                     label: "Medium" },
  { icon: <FaInstagram />, link: "https://www.instagram.com/sasunyyy.y?igsh=ZTNwanBtMWdwdzJk&utm_source=qr", label: "Instagram" },
  { icon: <FaFacebook />,  link: "https://www.facebook.com/share/1D7FnhajhP/?mibextid=wwXIfr", label: "Facebook" },
];

const stats = [
  { val: "2+",  label: "Years coding" },
  { val: "15+", label: "Projects built" },
  { val: "10+", label: "Articles written" },
  { val: "1st", label: "Hackathon place" },
];

const AboutMe = () => (
  <section id="about" className="l-section">
    <div className="l-container">
      <SectionHeader
        num="01"
        label="About"
        title={<>Engineer, writer,<br className="hidden sm:block" /> lifelong learner.</>}
      />

      <div className="grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 md:gap-16 items-start">

        {/* ── Portrait card ── */}
        <Reveal>
          <div className="l-card p-2 max-w-sm mx-auto md:mx-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[10px]">
              <img src={profilePic} alt="Sasuni Wijerathne" className="w-full h-full object-cover" />
              <div className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(8,9,10,0.85) 0%, transparent 45%)" }} />
              <div className="absolute bottom-0 inset-x-0 p-4 flex items-end justify-between">
                <div>
                  <p className="text-[15px] font-medium" style={{ color: "var(--text-1)" }}>Sasuni Wijerathne</p>
                  <p className="flex items-center gap-1 text-[13px] mt-0.5" style={{ color: "var(--text-3)" }}>
                    <RiMapPinLine /> Colombo, Sri Lanka
                  </p>
                </div>
                <span className="l-pill" style={{ background: "rgba(8,9,10,0.6)", backdropFilter: "blur(8px)" }}>
                  <span className="l-status-dot !w-1.5 !h-1.5" /> Available
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── Bio ── */}
        <div className="flex flex-col gap-8">
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed tracking-[-0.011em]" style={{ color: "var(--text-2)" }}>
              I'm a software engineer interning at PayMedia, a Sri Lankan fintech company building digital
              banking and payment software. I work across the stack — from Spring Boot microservices and
              cloud deployments to React and React Native interfaces — with a growing focus on AI and machine learning.
            </p>
            <p className="l-body mt-4">
              I'm studying software engineering at IJSE, where I also serve as Secretary of the student committee.
              Beyond code, I write about technology trends and share what I learn about AI & ML on Medium.
              Away from the keyboard you'll find me exploring nature, reading, and finding inspiration in creativity.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="l-grid grid-cols-2 sm:grid-cols-4">
              {stats.map(s => (
                <div key={s.label} className="px-5 py-5">
                  <p className="text-[28px] font-semibold tracking-[-0.03em] l-gradient-text">{s.val}</p>
                  <p className="text-[13px] mt-1" style={{ color: "var(--text-3)" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2} className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap gap-3">
              <a href="#hireme" className="l-btn l-btn-primary">Contact me <HiArrowRight /></a>
              <a href={resume} target="_blank" rel="noopener noreferrer" className="l-btn l-btn-secondary">
                Resume <HiArrowUpRight />
              </a>
            </div>
            <div className="flex items-center gap-1">
              {socials.map(s => (
                <a key={s.label} href={s.link} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="l-btn l-btn-ghost !w-9 !h-9 !p-0 text-base">
                  {s.icon}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMe;
