"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getPosts } from "../lib/api";
import { FaBehance, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdArticle, MdBuild, MdMenuBook } from "react-icons/md";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const tools = [
    "HTML",
    "CSS/SCSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "WordPress",
    "WooCommerce",
    "Git",
    "GitHub",
    "VSCode",
    "OVH",
    "AWS",
    "Azure",
    "FileZilla",
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { posts } = await getPosts(1, 3);
        setPosts(posts);
      } catch (err) {
        console.error("Erreur lors du chargement des articles :", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <footer className="bg-gray-900 text-gray-200 px-6 py-12  ">
      <div className="  max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Intro */}
        <div className="space-y-4 ">
          <motion.div
            whileHover={{ rotate: 6, scale: 1.05 }}
            whileTap={{ scale: 1.25 }}
            className="md:w-20 md:h-20 relative"
          >
            <Link href="/" className="flex w-full items-center gap-4">
              <Image
                src="/images/logo-white.png"
                alt="KENZA web Logo"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
              <span className="text-lg font-bold text-white">KENZA WEB</span>
            </Link>
          </motion.div>
          <p className="text-sm text-gray-400">
            Développeuse web front-end passionnée. +6 ans d’expérience avec
            WordPress, React, Next.js, et plus.
          </p>
        </div>

        {/* Blog Preview */}
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            Derniers articles
          </h3>
          <ul className="space-y-2 text-sm">
            {loading && <li>Chargement...</li>}
            {!loading && posts.length === 0 && <li>Aucun article trouvé.</li>}
            {!loading &&
              posts.map((post) => (
                <li key={post.id}>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {post.title.rendered}
                  </a>
                </li>
              ))}
          </ul>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            Outils maîtrisés
          </h3>
          <ul className="flex flex-wrap gap-2 text-sm text-gray-300">
            {tools.map((tool) => (
              <li key={tool} className="bg-gray-800 px-2 py-1 rounded">
                {tool}
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            Navigation
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/">Accueil</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/portfolio">Portfolio</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Kenza WEB — Made with ❤️ and ☕ in
          🇫🇷
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0 text-xl">
          <a
            href="https://www.behance.net/kenzafilali"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Behance"
          >
            <FaBehance className="hover:text-white transition" />
          </a>
          <a
            href="https://github.com/kenza15a"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="hover:text-white transition" />
          </a>
          <a
            href="https://www.linkedin.com/in/kenza-fil/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="hover:text-white transition" />
          </a>
        </div>
      </div>
    </footer>
  );
}
