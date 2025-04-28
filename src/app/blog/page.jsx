"use client";

import { useState, useEffect } from "react";
import { getPosts } from "@/lib/api";
import PostCard from "@/components/PostCard";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "@/components/Loading"; // your spinner
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // 🚀 import icons

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const postsPerPage = 3;

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const { posts, totalPages } = await getPosts(currentPage, postsPerPage);
      setPosts(posts);
      setTotalPages(totalPages);
      setLoading(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    fetchData();
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Bienvenue dans Mon Monde d'Inspiration
      </h1>

      {loading ? (
        <div className="flex justify-center items-center min-h-[300px]">
          <Loading />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {posts.map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.3 }}
                >
                  <PostCard post={post} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Pagination */}
          <div className="flex flex-wrap justify-center items-center space-x-2 mt-8">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-2 bg-gray-300 rounded-full disabled:opacity-50 flex items-center justify-center"
            >
              <FaArrowLeft />
            </button>

            {/* Numbered Pagination */}
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`px-4 py-2 rounded-full ${
                  currentPage === i + 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-2 bg-gray-300 rounded-full disabled:opacity-50 flex items-center justify-center"
            >
              <FaArrowRight />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
