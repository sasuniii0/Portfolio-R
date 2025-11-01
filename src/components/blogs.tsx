import React, { useState } from "react";
import { FaRegNewspaper } from "react-icons/fa";

const BlogExploring = () => {
  const categories = ["All", "AI", "Machine Learning", "Web Development", "Python", "Java", "React"];
  
  const blogPosts = [
    {
      title: "Exploring AI in 2025: Trends & Insights",
      date: "Oct 15, 2025",
      summary: "A deep dive into the latest advancements in AI and Machine Learning and how they are reshaping technology.",
      category: "AI",
      link: "#"
    },
    {
      title: "Getting Started with Spring Boot",
      date: "Sep 20, 2025",
      summary: "An introductory guide to building backend applications with Java Spring Boot framework.",
      category: "Java",
      link: "#"
    },
    {
      title: "Python for Data Science",
      date: "Aug 30, 2025",
      summary: "Tips and techniques for leveraging Python in data science and machine learning projects.",
      category: "Python",
      link: "#"
    },
    {
      title: "Exploring Frontend with React & Tailwind",
      date: "Jul 18, 2025",
      summary: "A beginner-friendly guide to building interactive UIs with React and Tailwind CSS.",
      category: "React",
      link: "#"
    },
    {
      title: "ML Algorithms Simplified",
      date: "Jun 10, 2025",
      summary: "Breaking down key machine learning algorithms for beginners and enthusiasts.",
      category: "Machine Learning",
      link: "#"
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <section id="blog" className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8 py-20 px-6 md:px-10 bg-[#0D0D0D] text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
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
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
  {filteredPosts.map((post, index) => (
    <a
      href={post.link}
      key={index}
      className="bg-[#1A1A1A] rounded-xl shadow-lg p-6 flex flex-col gap-4 hover:translate-y-2 hover:shadow-2xl transition-transform duration-300"
    >
      <div className="flex items-center gap-3">
        <FaRegNewspaper className="text-green-500 text-3xl" />
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

{/* Explore More on Medium */}
<div className="max-w-6xl mx-auto mt-12 text-center">
  <p className="text-gray-400 mb-4">
    Want to read more articles and insights? Check out my Medium blog for the latest explorations in AI, ML, and Software Development.
  </p>
  <a
    href="https://medium.com/@yourusername" // replace with your Medium profile link
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-green-500 text-black px-8 py-3 rounded-full font-medium text-lg hover:bg-green-600 transition"
  >
    Explore More on Medium →
  </a>
</div>


    </section>
  );
};

export default BlogExploring;
