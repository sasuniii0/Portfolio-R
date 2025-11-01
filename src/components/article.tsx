import React, { useEffect, useState } from "react";
import Parser from "rss-parser";

interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
}

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  
  useEffect(() => {
    const fetchPosts = async () => {
      const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"; // To handle CORS
      const parser = new Parser();
      const feed = await parser.parseURL(CORS_PROXY + "https://medium.com/@sasuniwijerathne");
      const items = feed.items.map(item => ({
        title: item.title!,
        link: item.link!,
        pubDate: item.pubDate!,
        contentSnippet: item.contentSnippet!
      }));
      setPosts(items);
    };
    
    fetchPosts();
  }, []);

  return (
    <section className="py-20 px-6 bg-[#1A1A1A] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-500 mb-8">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {posts.map((post, index) => (
            <a 
              key={index}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0D0D0D] p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 flex flex-col gap-3 w-full max-w-sm"
            >
              <h3 className="text-xl font-bold text-green-500">{post.title}</h3>
              <p className="text-gray-400 text-sm">{new Date(post.pubDate).toLocaleDateString()}</p>
              <p className="text-gray-300">{post.contentSnippet}</p>
              <span className="mt-auto text-green-500 font-medium hover:underline">Read More →</span>
            </a>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Blog;
