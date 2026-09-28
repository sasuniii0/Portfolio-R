import React, { useEffect, useState } from "react";
import { RiQuillPenLine } from "react-icons/ri";
import { HiArrowRight, HiArrowUpRight } from "react-icons/hi2";
import axios from "axios";
import { Reveal, SectionHeader } from "./ui";

interface Article {
  title: string;
  link: string;
  pubDate: string;
  categories: string[];
  contentSnippet: string;
  thumbnail?: string;
}

const MEDIUM_URL = "https://medium.com/@sasuniwijerathne";

const SkeletonCard = () => (
  <div className="l-card overflow-hidden animate-pulse">
    <div className="aspect-[16/9]" style={{ background: "var(--bg-card)" }} />
    <div className="p-6 flex flex-col gap-3">
      <div className="h-3 w-24 rounded" style={{ background: "var(--bg-hover)" }} />
      <div className="h-4 w-full rounded" style={{ background: "var(--bg-hover)" }} />
      <div className="h-4 w-2/3 rounded" style={{ background: "var(--bg-hover)" }} />
    </div>
  </div>
);

const BlogExploring: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading]   = useState(true);

  useEffect(() => {
    const fetchMediumArticles = async () => {
      try {
        const rss_url = "https://medium.com/feed/@sasuniwijerathne";
        const response = await axios.get(
          `https://api.rss2json.com/v1/api.json?rss_url=${rss_url}`
        );
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const items = response.data.items.slice(0, 3).map((item: any) => {
          const imgMatch = item.content?.match(/<img[^>]+src="([^">]+)"/);
          return {
            title:          item.title,
            link:           item.link,
            pubDate:        item.pubDate,
            categories:     item.categories?.slice(0, 2) ?? [],
            contentSnippet: item.description?.replace(/<[^>]*>/g, "").slice(0, 140) + "…",
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
    <section id="blog" className="l-section">
      <div className="l-container">
        <SectionHeader
          num="06"
          label="Writing"
          title="Thoughts & explorations."
          lead="Insights, tutorials and experiments on AI, ML, software development and where technology is heading."
          aside={
            <a href={MEDIUM_URL} target="_blank" rel="noopener noreferrer" className="l-btn l-btn-secondary">
              <RiQuillPenLine /> Read on Medium <HiArrowUpRight />
            </a>
          }
        />

        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[0, 1, 2].map(i => <SkeletonCard key={i} />)}
          </div>
        )}

        {!loading && articles.length === 0 && (
          <Reveal>
            <div className="l-card p-10 text-center">
              <p className="l-body">Couldn't load the latest articles right now.</p>
              <a href={MEDIUM_URL} target="_blank" rel="noopener noreferrer" className="l-btn l-btn-sm l-btn-secondary mt-5">
                Visit my Medium <HiArrowUpRight />
              </a>
            </div>
          </Reveal>
        )}

        {!loading && articles.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {articles.map((article, i) => (
              <Reveal key={article.link} delay={i * 0.08} className="h-full">
                <a href={article.link} target="_blank" rel="noopener noreferrer"
                  className="group l-card l-card-hover h-full overflow-hidden flex flex-col">
                  <div className="relative aspect-[16/9] overflow-hidden" style={{ background: "var(--bg-card)", borderBottom: "1px solid var(--border)" }}>
                    {article.thumbnail ? (
                      <img src={article.thumbnail} alt="" loading="lazy"
                        className="w-full h-full object-cover opacity-80 transition duration-500 group-hover:opacity-100 group-hover:scale-[1.03]" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <RiQuillPenLine className="text-5xl" style={{ color: "var(--text-4)" }} />
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col gap-3 flex-1">
                    <div className="flex items-center gap-2 text-[12.5px]" style={{ color: "var(--text-4)" }}>
                      <time>
                        {new Date(article.pubDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </time>
                      {article.categories.map(tag => (
                        <React.Fragment key={tag}>
                          <span>·</span>
                          <span className="capitalize">{tag}</span>
                        </React.Fragment>
                      ))}
                    </div>
                    <h3 className="text-[17px] font-medium leading-snug tracking-[-0.015em] line-clamp-2" style={{ color: "var(--text-1)" }}>
                      {article.title}
                    </h3>
                    <p className="text-[14px] leading-relaxed line-clamp-3" style={{ color: "var(--text-3)" }}>
                      {article.contentSnippet}
                    </p>
                    <span className="mt-auto pt-3 inline-flex items-center gap-1.5 text-[13px] transition-colors group-hover:!text-[var(--text-1)]"
                      style={{ color: "var(--text-3)" }}>
                      Read article
                      <HiArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogExploring;
