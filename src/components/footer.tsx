import { useState } from "react";
import { RiCheckLine } from "react-icons/ri";
const logo = "/favicon.svg";

const columns = [
  {
    title: "Navigate",
    links: [
      { label: "About",      href: "#about" },
  { label: "Experience", href: "#experience" },
      { label: "Services", href: "#services" },
      { label: "Skills",   href: "#skills-education" },
      { label: "Projects", href: "#projects" },
      { label: "Blog",     href: "#blog" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "LinkedIn",  href: "https://www.linkedin.com/in/sasuni-wijerathne-a3b517311" },
      { label: "GitHub",    href: "https://github.com/sasuniii0" },
      { label: "Medium",    href: "https://medium.com/@sasuniwijerathne" },
      { label: "Instagram", href: "https://www.instagram.com/sasunyyy.y?igsh=ZTNwanBtMWdwdzJk&utm_source=qr" },
      { label: "Facebook",  href: "https://www.facebook.com/share/1D7FnhajhP/?mibextid=wwXIfr" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "sasuniwijerathne@gmail.com", href: "mailto:sasuniwijerathne@gmail.com" },
      { label: "Colombo, Sri Lanka" },
      { label: "Hire me", href: "#hireme" },
    ],
  },
];

const Footer = () => {
  const [email, setEmail]     = useState("");
  const [subDone, setSubDone] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubDone(true);
    setEmail("");
  };

  return (
    <footer style={{ borderTop: "1px solid var(--border)" }}>
      <div className="l-container pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))] gap-10">

          {/* ── Brand + newsletter ── */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-5 max-w-xs">
            <a href="#home" className="flex items-center gap-2.5">
              <img src={logo} alt="" className="w-6 h-6 rounded-md" />
              <span className="text-[15px] font-semibold" style={{ color: "var(--text-1)" }}>Sasuni Wijerathne</span>
            </a>
            <p className="text-[13.5px] leading-relaxed" style={{ color: "var(--text-3)" }}>
              Software engineer · AI & ML enthusiast · writer. Get the latest on AI, ML and software development.
            </p>
            {subDone ? (
              <p className="flex items-center gap-2 text-[13.5px]" style={{ color: "var(--green)" }}>
                <RiCheckLine /> Thanks for subscribing.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  aria-label="Email address"
                  required
                  className="l-input !py-0 !h-8 !text-[13px]"
                />
                <button type="submit" className="l-btn l-btn-sm l-btn-secondary shrink-0">Subscribe</button>
              </form>
            )}
          </div>

          {/* ── Link columns ── */}
          {columns.map(col => (
            <div key={col.title} className={col.title === "Contact" ? "col-span-2 sm:col-span-1" : ""}>
              <h3 className="text-[13px] font-medium mb-4" style={{ color: "var(--text-1)" }}>{col.title}</h3>
              <ul className="flex flex-col gap-3">
                {col.links.map(link => (
                  <li key={link.label} className="text-[13.5px] break-words">
                    {link.href ? (
                      <a href={link.href} className="l-link"
                        {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                        {link.label}
                      </a>
                    ) : (
                      <span style={{ color: "var(--text-3)" }}>{link.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12.5px]"
          style={{ borderTop: "1px solid var(--border)", color: "var(--text-4)" }}>
          <p>© {new Date().getFullYear()} Sasuni Wijerathne. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="l-status-dot !w-1.5 !h-1.5" /> Designed & built by Sasuni
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
