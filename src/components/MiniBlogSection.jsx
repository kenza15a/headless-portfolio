"use client";
import { useEffect, useState } from "react";
import { getPosts, getCategories } from "@/lib/api";
import Loading from "./Loading";
import PostCard from "@/components/PostCard";

export default function MiniBlogSection() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [{ posts }, cats] = await Promise.all([
          getPosts(1, 3),
          getCategories(),
        ]);
        setPosts(posts);
        setCategories(cats);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  const filteredPosts = activeCategory
    ? posts.filter((p) => p.categories.includes(activeCategory))
    : posts;

  const sizeVariants = ["", "scale-105", "scale-90", "translate-y-2"];
  const colorVariants = [
    "bg-white",
    "bg-gray-50",
    "bg-blue-50",
    "bg-yellow-50",
    "bg-green-50",
    "bg-pink-50",
    "bg-purple-50",
  ];

  return (
    <section className="py-20 px-6 md:px-16 bg-white text-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Dernier Articles
      </h2>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-4 py-1 rounded-full text-sm font-medium transition ${
            activeCategory === null
              ? "bg-blue-600 text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-1 rounded-full text-sm font-medium transition ${
              activeCategory === cat.id
                ? "bg-blue-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {filteredPosts.map((post, index) => {
            const colorVariant =
              colorVariants[Math.floor(Math.random() * colorVariants.length)];
            const styleVariant =
              sizeVariants[Math.floor(Math.random() * sizeVariants.length)];

            return (
              <PostCard
                key={post.id}
                post={post}
                categories={categories}
                index={index}
                colorVariant={colorVariant}
                styleVariant={styleVariant}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}
