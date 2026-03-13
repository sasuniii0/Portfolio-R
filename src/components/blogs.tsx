import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RiQuillPenLine, RiExternalLinkLine, RiCalendarLine, RiLoader4Line } from "react-icons/ri";
import { HiArrowUpRight } from "react-icons/hi2";
import axios from "axios";

interface Article {
  title: string;
  link: string;
  pubDate: string;
  categories: string[];
  contentSnippet: string;
  thumbnail?: string;
}

/* ── 3 animated background number chars ── */
const BIG_NUMS = ["01", "02", "03"];

const BlogExploring: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading]   = useState(true);
  const [hovered, setHovered]   = useState<number | null>(null);

  useEffect(() => {
    const fetchMediumArticles = async () => {
      try {
        const rss_url = "https://medium.com/feed/@sasuniwijerathne";
        const response = await axios.get(
          `https://api.rss2json.com/v1/api.json?rss_url=${rss_url}`
        );
        const items = response.data.items.slice(0, 3).map((item: any) => {
          const imgMatch = item.content?.match(/<img[^>]+src="([^">]+)"/);
          return {
            title:          item.title,
            link:           item.link,
            pubDate:        item.pubDate,
            categories:     item.categories?.slice(0, 2) ?? [],
            contentSnippet: item.description?.replace(/<[^>]*>/g, "").slice(0, 120) + "…",
            thumbnail:      imgMatch?.[1] ?? undefined,
          };
        });
        setArticles(items);
      } catch (error) {
        console.error("Error fetching Medium articles:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMediumArticles();
  }, []);

  return (
    <section
      id="blog"
      className="relative py-24 px-6 md:px-10 bg-[#0D0D0D] text-white overflow-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Mono:wght@400;500&display=swap');
        @keyframes spinSlow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes floatUp {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-10px); }
        }
      `}</style>

      {/* BG grid */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(34,197,94,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,197,94,0.6) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }} />

      {/* ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[280px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(34,197,94,0.07) 0%, transparent 70%)" }} />

      <div className="relative max-w-6xl mx-auto">

        {/* ── Heading ── */}
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.4em] text-green-500/50 uppercase mb-3"
            style={{ fontFamily: "'DM Mono', monospace" }}>
            — thoughts & explorations —
          </p>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-none"
            style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.02em" }}>
            Blog &{" "}
            <span className="text-transparent" style={{ WebkitTextStroke: "2px #22c55e" }}>
              Exploring
            </span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-px bg-green-500/30" />
          <p className="mt-5 text-white/30 text-sm max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "'DM Mono', monospace" }}>
            Sharing insights, tutorials, and explorations about AI, ML, software development, and technology trends.
          </p>
        </motion.div>

        {/* ── Loading ── */}
        {loading && (
          <div className="flex flex-col items-center gap-4 py-24">
            <RiLoader4Line className="text-green-500 text-4xl"
              style={{ animation: "spinSlow 0.9s linear infinite" }} />
            <p className="text-white/25 text-xs tracking-widest uppercase"
              style={{ fontFamily: "'DM Mono', monospace" }}>
              fetching articles…
            </p>
          </div>
        )}

        {/* ── Cards ── */}
        {!loading && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.13 } } }}
          >
            {articles.map((article, i) => (
              <motion.a
                key={i}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={{
                  hidden:  { opacity: 0, y: 40, scale: 0.96 },
                  visible: { opacity: 1, y: 0,  scale: 1,
                    transition: { type: "spring", stiffness: 150, damping: 18 } },
                }}
                whileHover={{ y: -7 }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="relative flex flex-col overflow-hidden rounded-2xl group cursor-pointer"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: hovered === i
                    ? "1px solid rgba(34,197,94,0.4)"
                    : "1px solid rgba(255,255,255,0.06)",
                  boxShadow: hovered === i
                    ? "0 0 50px rgba(34,197,94,0.1), inset 0 0 30px rgba(34,197,94,0.02)"
                    : "none",
                  transition: "border 0.3s, box-shadow 0.3s",
                }}
              >
                {/* Big bg number watermark */}
                <div className="absolute -bottom-4 -right-2 text-[7rem] font-black leading-none select-none pointer-events-none transition-opacity duration-300"
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    color: hovered === i ? "rgba(34,197,94,0.06)" : "rgba(255,255,255,0.025)",
                    transition: "color 0.3s",
                  }}>
                  {BIG_NUMS[i]}
                </div>

                {/* Thumbnail */}
                <div className="relative w-full h-44 overflow-hidden bg-[#111] shrink-0">
                  {article.thumbnail ? (
                    <img src={article.thumbnail} alt={article.title}
                      className="w-full h-full object-cover opacity-55 group-hover:opacity-80 group-hover:scale-106 transition-all duration-600"
                      style={{ transition: "opacity 0.5s, transform 0.6s" }} />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, rgba(34,197,94,0.04) 0%, transparent 60%)" }}>
                      <RiQuillPenLine className="text-green-500/15 text-6xl"
                        style={{ animation: hovered === i ? "floatUp 3s ease-in-out infinite" : "none" }} />
                    </div>
                  )}
                  {/* gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/30 to-transparent" />

                  {/* article number badge */}
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-xl flex items-center justify-center"
                    style={{
                      background: hovered === i ? "rgba(34,197,94,0.2)" : "rgba(0,0,0,0.5)",
                      border: hovered === i ? "1px solid rgba(34,197,94,0.4)" : "1px solid rgba(255,255,255,0.08)",
                      transition: "all 0.3s",
                      backdropFilter: "blur(4px)",
                    }}>
                    <span className="text-[11px] font-mono"
                      style={{ color: hovered === i ? "#4ade80" : "rgba(255,255,255,0.3)" }}>
                      {BIG_NUMS[i]}
                    </span>
                  </div>

                  {/* top-right corner glow */}
                  <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none transition-opacity duration-300"
                    style={{
                      background: "radial-gradient(circle at top right, rgba(34,197,94,0.1), transparent 70%)",
                      opacity: hovered === i ? 1 : 0,
                    }} />
                </div>

                {/* Card body */}
                <div className="flex flex-col gap-3 p-5 flex-1">

                  {/* Tags */}
                  {article.categories.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {article.categories.map((tag, ti) => (
                        <span key={ti}
                          className="text-[10px] px-2 py-0.5 rounded-md tracking-wider"
                          style={{
                            fontFamily: "'DM Mono', monospace",
                            color: "rgba(74,222,128,0.6)",
                            background: "rgba(34,197,94,0.08)",
                            border: "1px solid rgba(34,197,94,0.14)",
                          }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Title */}
                  <h3
                    className="text-base font-bold leading-snug line-clamp-2 transition-colors duration-300"
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      color: hovered === i ? "#4ade80" : "rgba(255,255,255,0.88)",
                    }}
                  >
                    {article.title}
                  </h3>

                  {/* Snippet */}
                  <p className="text-white/30 text-[11px] leading-relaxed line-clamp-3 flex-1"
                    style={{ fontFamily: "'DM Mono', monospace" }}>
                    {article.contentSnippet}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3 mt-auto"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                    <span className="flex items-center gap-1.5 text-[10px] text-white/20"
                      style={{ fontFamily: "'DM Mono', monospace" }}>
                      <RiCalendarLine className="text-green-500/40" />
                      {new Date(article.pubDate).toLocaleDateString("en-US", {
                        month: "short", day: "numeric", year: "numeric",
                      })}
                    </span>
                    <motion.span
                      className="flex items-center gap-1 text-[11px] transition-colors duration-300"
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        color: hovered === i ? "#4ade80" : "rgba(34,197,94,0.45)",
                      }}
                      animate={{ x: hovered === i ? 3 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      Read more <HiArrowUpRight />
                    </motion.span>
                  </div>
                </div>

                {/* bottom sweep line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] rounded-full"
                  style={{ background: "linear-gradient(90deg, #22c55e, #4ade80)" }}
                  animate={{ width: hovered === i ? "100%" : "0%" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </motion.a>
            ))}
          </motion.div>
        )}

        {/* ── CTA button ── */}
        {!loading && (
          <motion.div className="mt-12 flex justify-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}>
            <motion.a
              href="https://medium.com/@sasuniwijerathne"
              target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="relative overflow-hidden group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-black bg-green-500 hover:bg-green-400 transition-colors duration-300"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-0 bg-green-300 transition-transform duration-300 rounded-xl" />
              <RiQuillPenLine className="relative z-10 text-base" />
              <span className="relative z-10">Explore More on Medium</span>
              <RiExternalLinkLine className="relative z-10 text-base" />
            </motion.a>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default BlogExploring;