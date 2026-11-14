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
        title={<>Software engineering, <span className="l-em">practiced in fintech.</span></>}
      />

      <div className="flex flex-col gap-8 max-w-3xl">
        <Reveal>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="l-pill">
              <span className="l-status-dot !w-1.5 !h-1.5" /> Available
            </span>
            <p className="flex items-center gap-1.5 text-[14px]" style={{ color: "var(--text-3)" }}>
              <RiMapPinLine aria-hidden /> Junior Software Engineer · PayMedia, Colombo
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col gap-8">
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed tracking-[-0.011em]" style={{ color: "var(--text-2)" }}>
              I'm a Junior Software Engineer at PayMedia, a Sri Lankan fintech company building digital
              banking and payment software. I work across the stack — Java and Spring Boot services,
              REST APIs, and React interfaces — on systems that have to stay secure and reliable.
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
                  <p className="l-serif text-[2rem] leading-none tracking-[-0.03em]" style={{ color: "var(--text-1)" }}>{s.val}</p>
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
