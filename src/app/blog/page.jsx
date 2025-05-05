"use client";

import { useState, useEffect } from "react";
import { getPosts, getCategories } from "@/lib/api";
import PostCard from "@/components/PostCard";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "@/components/Loading";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SearchField from "@/components/SearchField";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const [allCategories, setAllCategories] = useState([]);
  const [categories, setCategories] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const postsPerPage = 10;

  // Charger les données dès qu’un filtre ou la page change
  useEffect(() => {
    fetchData();
  }, [currentPage, selectedCategory, searchTerm]);

  async function fetchData() {
    setLoading(true);

    // 1. Récupérer les articles selon les filtres actifs
    const { posts, totalPages } = await getPosts(
      currentPage,
      postsPerPage,
      selectedCategory,
      searchTerm
    );

    //  Charger toutes les catégories si ce n’est pas déjà fait
    let updatedAllCategories = allCategories;
    if (allCategories.length === 0) {
      updatedAllCategories = await getCategories();
      setAllCategories(updatedAllCategories);
    }

    // Extraire les catégories utilisées dans les articles
    const usedCategoryIds = new Set();
    posts.forEach((post) => {
      post.categories.forEach((id) => usedCategoryIds.add(id));
    });

    //  Filtrer les catégories selon les filtres actifs
    const showAll = !searchTerm && !selectedCategory;
    const filtered = showAll
      ? updatedAllCategories
      : updatedAllCategories.filter((cat) => usedCategoryIds.has(cat.id));

    // Mettre à jour les états
    setCategories(filtered);
    setPosts(posts);
    setTotalPages(totalPages);
    setLoading(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="h-[calc(100vh-64px)] grid grid-cols-1 md:grid-cols-6 gap-4">
      {/* Sidebar */}
      <div className="col-span-1 flex flex-col gap-4 sticky top-16 h-full overflow-y-auto p-4 bg-white z-10">
        <SearchField
          toFind="article"
          onSearch={(value) => {
            setSearchTerm(value);
            setCurrentPage(1);
          }}
        />
        <div className="flex flex-col gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setCurrentPage(1);
              }}
              className={`px-3 py-2 rounded-full text-sm ${
                selectedCategory === cat.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {cat.name}
            </button>
          ))}
          {selectedCategory && (
            <button
              onClick={() => {
                setSelectedCategory(null);
                setCurrentPage(1);
              }}
              className="mt-4 px-3 py-2 bg-blue-800 rounded-lg text-white hover:bg-blue-200 hover:text-black transition"
            >
              Toutes les catégories
            </button>
          )}
        </div>
      </div>

      {/* Scrollable Articles List */}
      <div className="col-span-1 md:col-span-5 overflow-y-auto h-full p-6">
        {loading ? (
          <div className="flex justify-center items-center min-h-[300px]">
            <Loading />
          </div>
        ) : posts.length === 0 ? (
          <p className="text-center text-gray-600">Aucun article trouvé.</p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

            {/* Reset Button */}
            <div className="text-center mt-6">
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setSearchTerm("");
                  setCurrentPage(1);
                }}
                className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-300"
              >
                Tous les articles
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
