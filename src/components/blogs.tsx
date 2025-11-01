import React, { useState } from "react";
import { FaRegNewspaper } from "react-icons/fa";

// Example categories and blog posts
const categories = ["All", "AI", "ML", "Software Development", "Tutorials", "Tech Trends"];

const blogPosts = [
  {
    title: "The Story of React’s Virtual DOM vs Actual DOM",
    link: "https://medium.com/@sasuniwijerathne/the-story-of-reacts-virtual-dom-vs-actual-dom-998d128a7042",
    date: "Sep 28, 2025",
    category: "Software Development",
    summary: "This is why React apps feel fast, efficient, and smooth, even when they grow big.",
  },
  {
    title: "Building an Inclusive, Responsible, and Human Future",
    link: "https://medium.com/@sasuniwijerathne/ai-and-us-building-an-inclusive-responsible-and-human-future-165e57635e4a",
    date: "Jul 29, 2025",
    category: "AI",
    summary: "Artificial Intelligence (AI) is everywhere ,writing code, creating music, and summarizing news in seconds.",
  },
  {
    title: "Mastering Spring Boot Annotations: The Complete Guide",
    link: "https://medium.com/@sasuniwijerathne/mastering-spring-boot-annotations-the-complete-guide-fed561e98ce0",
    date: "Aug 11, 2025",
    category: "Software Development",
    summary: "Tips, best practices, and tutorials for building efficient applications using Java and Spring Boot.",
  }
];

const BlogExploring: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter posts based on category
  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <section
      id="blog"
      className="max-w-6xl mx-auto flex flex-col justify-center items-center gap-8 py-20 px-6 md:px-10 bg-[#0D0D0D] text-white"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-green-500 mb-4">
          Blog & Exploring
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Sharing insights, tutorials, and explorations about AI, ML, software development, and technology trends. Filter by category to explore specific topics.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full font-medium transition
              ${selectedCategory === cat 
                ? "bg-green-500 text-black" 
                : "bg-gray-800 text-gray-300 hover:bg-green-500 hover:text-black"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center w-full">
        {filteredPosts.map((post, index) => (
          <a
            href={post.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1A1A1A] rounded-xl shadow-lg p-6 flex flex-col gap-4 hover:translate-y-2 hover:shadow-2xl transition-transform duration-300 w-full max-w-sm"
          >
            <div className="flex items-center gap-3">
                <div>
              <FaRegNewspaper className="text-green-500 text-3xl flex-shrink-0" />
                </div>
              <h3 className="text-xl md:text-2xl font-bold">{post.title}</h3>
            </div>
            <p className="text-gray-400 text-sm">{post.date} | {post.category}</p>
            <p className="text-gray-300">{post.summary}</p>
            <span className="text-green-500 font-medium mt-auto hover:underline">
              Read More →
            </span>
          </a>
        ))}
      </div>

      <a
          href="https://medium.com/@sasuniwijerathne"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-10 bg-green-500 px-6 py-3 rounded-md font-medium hover:bg-green-600 transition"
        >
          Explore More on Medium
        </a>
    </section>
  );
};

export default BlogExploring;
