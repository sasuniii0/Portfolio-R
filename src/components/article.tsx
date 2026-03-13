import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  RiArticleLine, RiExternalLinkLine,
  RiCalendarLine, RiLoader4Line, RiQuillPenLine,
} from "react-icons/ri";
import { HiArrowUpRight } from "react-icons/hi2";

interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
  thumbnail?: string;
  categories?: string[];
}

/* ─────────────────────────────── */
/*  FEATURED CARD (first article)  */
/* ─────────────────────────────── */
const FeaturedCard: React.FC<{ post: MediumPost; index: number }> = ({ post, index }) => {
  const [hov, setHov] = useState(false);

  return (
    <motion.a
      href={post.link} target="_blank" rel="noopener noreferrer"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="relative flex flex-col md:flex-row overflow-hidden rounded-2xl group"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: hov ? "1px solid rgba(34,197,94,0.4)" : "1px solid rgba(255,255,255,0.06)",
        boxShadow: hov ? "0 0 60px rgba(34,197,94,0.1), inset 0 0 40px rgba(34,197,94,0.02)" : "none",
        transition: "border 0.3s, box-shadow 0.3s",
      }}
    >
      {/* Image side */}
      <div className="relative md:w-[45%] h-56 md:h-auto overflow-hidden bg-[#111] shrink-0">
        {post.thumbnail ? (
          <img src={post.thumbnail} alt={post.title}
            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <RiArticleLine className="text-green-500/15 text-8xl" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0D0D0D] hidden md:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] to-transparent md:hidden" />

        {/* Featured badge */}
        <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full"
          style={{ background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.3)" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-green-400"
            style={{ boxShadow: "0 0 6px #4ade80", animation: "blink 2s ease-in-out infinite" }} />
          <span className="text-[10px] text-green-400 tracking-widest uppercase"
            style={{ fontFamily: "'DM Mono', monospace" }}>Featured</span>
        </div>
      </div>

      {/* Text side */}
      <div className="flex flex-col justify-between gap-4 p-7 flex-1">
        <div className="flex flex-col gap-3">
          {/* Index + categories */}
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-green-500/40 font-mono">
              {String(index + 1).padStart(2, "0")}
            </span>
            {post.categories?.slice(0, 2).map((tag, ti) => (
              <span key={ti}
                className="text-[10px] px-2 py-0.5 rounded-md tracking-wider text-green-400/60"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  background: "rgba(34,197,94,0.08)",
                  border: "1px solid rgba(34,197,94,0.15)",
                }}>
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-2xl md:text-3xl font-black text-white/90 leading-snug group-hover:text-green-400 transition-colors duration-300"
            style={{ fontFamily: "'Syne', sans-serif" }}>
            {post.title}
          </h3>
          <p className="text-white/35 text-sm leading-relaxed line-clamp-3"
            style={{ fontFamily: "'DM Mono', monospace" }}>
            {post.contentSnippet}
          </p>
        </div>

        <div className="flex items-center justify-between pt-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <span className="flex items-center gap-1.5 text-[11px] text-white/25"
            style={{ fontFamily: "'DM Mono', monospace" }}>
            <RiCalendarLine className="text-green-500/50" />
            {new Date(post.pubDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </span>
          <motion.span
            animate={{ x: hov ? 4 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-1.5 text-xs text-green-500/70 group-hover:text-green-400 transition-colors duration-300"
            style={{ fontFamily: "'DM Mono', monospace" }}>
            Read article <HiArrowUpRight className="text-sm" />
          </motion.span>
        </div>
      </div>

      {/* bottom accent */}
      <motion.div className="absolute bottom-0 left-0 h-[2px] bg-green-500/50 rounded-full"
        animate={{ width: hov ? "100%" : "0%" }}
        transition={{ duration: 0.4, ease: "easeOut" }} />
    </motion.a>
  );
};

/* ─────────────────────────── */
/*  SMALL CARD                 */
/* ─────────────────────────── */
const SmallCard: React.FC<{ post: MediumPost; index: number; delay: number }> = ({ post, index, delay }) => {
  const [hov, setHov] = useState(false);

  return (
    <motion.a
      href={post.link} target="_blank" rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, type: "spring", stiffness: 130 }}
      whileHover={{ y: -5 }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="relative flex flex-col gap-3 rounded-2xl overflow-hidden group"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: hov ? "1px solid rgba(34,197,94,0.35)" : "1px solid rgba(255,255,255,0.06)",
        boxShadow: hov ? "0 0 40px rgba(34,197,94,0.08), inset 0 0 20px rgba(34,197,94,0.02)" : "none",
        transition: "border 0.3s, box-shadow 0.3s",
      }}
    >
      {/* Thumbnail */}
      <div className="relative w-full h-36 overflow-hidden bg-[#111]">
        {post.thumbnail ? (
          <img src={post.thumbnail} alt={post.title}
            className="w-full h-full object-cover opacity-55 group-hover:opacity-75 group-hover:scale-105 transition-all duration-500" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <RiArticleLine className="text-green-500/15 text-5xl" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/40 to-transparent" />

        {/* Corner number */}
        <div className="absolute top-3 right-3 w-7 h-7 rounded-lg bg-black/60 border border-green-500/20 flex items-center justify-center backdrop-blur-sm">
          <span className="text-[10px] text-green-500/70" style={{ fontFamily: "'DM Mono', monospace" }}>
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-2.5 px-4 pb-4">
        {post.categories && post.categories.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {post.categories.slice(0, 2).map((tag, ti) => (
              <span key={ti}
                className="text-[9px] px-2 py-0.5 rounded-md tracking-wider text-green-400/50"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  background: "rgba(34,197,94,0.07)",
                  border: "1px solid rgba(34,197,94,0.12)",
                }}>
                {tag}
              </span>
            ))}
          </div>
        )}

        <h3 className="text-sm font-bold text-white/85 leading-snug line-clamp-2 group-hover:text-green-400 transition-colors duration-300"
          style={{ fontFamily: "'Syne', sans-serif" }}>
          {post.title}
        </h3>

        <p className="text-white/30 text-[11px] leading-relaxed line-clamp-2"
          style={{ fontFamily: "'DM Mono', monospace" }}>
          {post.contentSnippet}
        </p>

        <div className="flex items-center justify-between pt-2.5 mt-auto"
          style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <span className="flex items-center gap-1 text-[10px] text-white/20"
            style={{ fontFamily: "'DM Mono', monospace" }}>
            <RiCalendarLine className="text-green-500/40 text-xs" />
            {new Date(post.pubDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
          </span>
          <span className="flex items-center gap-1 text-[10px] text-green-500/50 group-hover:text-green-400 transition-colors"
            style={{ fontFamily: "'DM Mono', monospace" }}>
            Read <RiExternalLinkLine />
          </span>
        </div>
      </div>

      {/* bottom bar */}
      <motion.div className="absolute bottom-0 left-0 h-[2px] bg-green-500/40 rounded-full"
        animate={{ width: hov ? "100%" : "0%" }}
        transition={{ duration: 0.35, ease: "easeOut" }} />

      {/* corner glow */}
      <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none transition-opacity duration-300"
        style={{
          background: "radial-gradient(circle at top right, rgba(34,197,94,0.07), transparent 70%)",
          opacity: hov ? 1 : 0,
        }} />
    </motion.a>
  );
};

/* ─────────────────────────── */
/*  MAIN SECTION               */
/* ─────────────────────────── */
const Blog: React.FC = () => {
  const [posts, setPosts]     = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res  = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sasuniwijerathne`
        );
        const data = await res.json();
        if (data.status !== "ok") throw new Error("feed error");

        const items: MediumPost[] = data.items.slice(0, 6).map((item: any) => {
          const imgMatch = item.content?.match(/<img[^>]+src="([^">]+)"/);
          return {
            title:          item.title,
            link:           item.link,
            pubDate:        item.pubDate,
            contentSnippet: item.description?.replace(/<[^>]*>/g, "").slice(0, 130) + "…",
            thumbnail:      imgMatch?.[1] ?? undefined,
            categories:     item.categories?.slice(0, 3) ?? [],
          };
        });
        setPosts(items);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <section id="blog"
      className="relative py-24 px-6 md:px-10 bg-[#0D0D0D] text-white overflow-hidden">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Mono:wght@400;500&display=swap');
        @keyframes spinSlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes blink    { 0%,100% { opacity:1; } 50% { opacity:0; } }
      `}</style>

      {/* BG grid */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(34,197,94,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,197,94,0.6) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(34,197,94,0.07) 0%, transparent 70%)" }} />

      <div className="relative max-w-6xl mx-auto">

        {/* ── Heading ── */}
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-xs tracking-[0.4em] text-green-500/50 uppercase mb-3"
            style={{ fontFamily: "'DM Mono', monospace" }}>
            — thoughts & tutorials —
          </p>
          <h2 className="text-5xl md:text-6xl font-black text-white leading-none"
            style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.02em" }}>
            Latest{" "}
            <span className="text-transparent" style={{ WebkitTextStroke: "2px #22c55e" }}>
              Articles
            </span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-px bg-green-500/30" />
          <p className="mt-4 text-white/30 text-sm"
            style={{ fontFamily: "'DM Mono', monospace" }}>
            Writing about AI, ML & modern software on{" "}
            <a href="https://medium.com/@sasuniwijerathne" target="_blank" rel="noopener noreferrer"
              className="text-green-500/70 hover:text-green-400 transition-colors">
              Medium ↗
            </a>
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

        {/* ── Error ── */}
        {error && !loading && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="flex flex-col items-center gap-4 py-24">
            <div className="w-16 h-16 rounded-2xl bg-green-500/5 border border-green-500/15 flex items-center justify-center">
              <RiQuillPenLine className="text-green-500/40 text-3xl" />
            </div>
            <p className="text-white/30 text-sm" style={{ fontFamily: "'DM Mono', monospace" }}>
              couldn't load articles —{" "}
              <a href="https://medium.com/@sasuniwijerathne" target="_blank" rel="noopener noreferrer"
                className="text-green-500 hover:underline">
                read on Medium →
              </a>
            </p>
          </motion.div>
        )}

        {/* ── Articles layout ── */}
        {!loading && !error && posts.length > 0 && (
          <div className="flex flex-col gap-6">

            {/* Featured — first post */}
            <FeaturedCard post={posts[0]} index={0} />

            {/* Divider */}
            <div className="flex items-center gap-4 my-2">
              <div className="flex-1 h-px bg-white/[0.05]" />
              <span className="text-[10px] tracking-[0.35em] text-green-500/40 uppercase px-2"
                style={{ fontFamily: "'DM Mono', monospace" }}>
                More articles
              </span>
              <div className="flex-1 h-px bg-white/[0.05]" />
            </div>

            {/* Remaining posts grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {posts.slice(1).map((post, i) => (
                <SmallCard key={i} post={post} index={i + 1} delay={i * 0.08} />
              ))}
            </div>
          </div>
        )}

        {/* ── CTA ── */}
        {!loading && !error && (
          <motion.div className="mt-12 text-center"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <a
              href="https://medium.com/@sasuniwijerathne"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-green-500 transition-all duration-300 hover:bg-green-500/8"
              style={{
                fontFamily: "'DM Mono', monospace",
                border: "1px solid rgba(34,197,94,0.2)",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(34,197,94,0.06)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              <RiQuillPenLine />
              View all articles on Medium
              <RiExternalLinkLine />
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Blog;