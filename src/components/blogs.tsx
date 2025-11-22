import React, { useEffect, useState } from "react";
import { FaRegNewspaper } from "react-icons/fa";
import axios from "axios";

interface Article {
  title: string;
  link: string;
  pubDate: string;
  categories: string[];
  contentSnippet: string;
}

const BlogExploring: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchMediumArticles = async () => {
      try {
        const rss_url = "https://medium.com/feed/@sasuniwijerathne";
        const response = await axios.get(
          `https://api.rss2json.com/v1/api.json?rss_url=${rss_url}`
        );

        const fetchedArticles = response.data.items.map((item: any) => ({
          title: item.title,
          link: item.link,
          pubDate: item.pubDate,
          categories: item.categories,
          contentSnippet: item.contentSnippet,
        }));

        setArticles(fetchedArticles);
      } catch (error) {
        console.error("Error fetching Medium articles:", error);
      }
    };

    fetchMediumArticles();
  }, []);

  // Take only the latest 3 articles
  const latestArticles = articles.slice(0, 3);

  return (
    <section id="blog" className="max-w-6xl mx-auto flex flex-col justify-center items-center gap-8 pt-30 pb-10 px-6 md:px-10 bg-[#0D0D0D] text-white">
      {/* Header */}
      <div className="text-center mb-12" >
        <h2 className="text-4xl md:text-5xl font-bold text-green-500 mb-4">
          Blog & Exploring
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Sharing my latest insights, tutorials, and explorations about AI, ML, software development, and technology trends.
        </p>
      </div>

      {/* Latest Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center w-full">
        {latestArticles.map((article, index) => (
          <a
            href={article.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1A1A1A] rounded-xl shadow-lg p-6 flex flex-col gap-4 hover:translate-y-2 hover:shadow-2xl transition-transform duration-300 w-full max-w-sm"
          >
            <div className="flex items-center gap-3">
              <FaRegNewspaper className="text-green-500 text-3xl flex-shrink-0" />
              <h3 className="text-xl md:text-2xl font-bold">{article.title}</h3>
            </div>
            <p className="text-gray-400 text-sm">
              {new Date(article.pubDate).toLocaleDateString()}
            </p>
            <p className="text-gray-300">
              {article.contentSnippet?.slice(0, 120) ?? ""}...
            </p>
            <span className="text-green-500 font-medium mt-auto hover:underline">
              Read More →
            </span>
          </a>
        ))}
      </div>

      {/* Explore More Message */}
      <a
        href="https://medium.com/@sasuniwijerathne"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 bg-green-500 px-6 py-3 rounded-md font-medium hover:bg-green-600 transition"
      >
        Explore More on Medium
      </a>
    </section>
  );
};

export default BlogExploring;
