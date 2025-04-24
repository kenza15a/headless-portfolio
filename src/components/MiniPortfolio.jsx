"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PortfolioCard from "./PortfolioCard";
import { getPortfolioProjects } from "@/lib/api";

export default function MiniPortfolioSection() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getPortfolioProjects();
      setProjects(data);
    }
    fetchData();
  }, []);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="py-16 px-6 md:px-12 bg-white" id="mini-portfolio">
      <h2 className="text-3xl font-bold text-blue-600 mb-10 text-center">
        Mini Portfolio
      </h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={cardVariant}>
            <PortfolioCard
              title={project.title.rendered}
              image={
                project._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                "https://via.placeholder.com/400x250?text=Portfolio"
              }
              description={project.excerpt.rendered.replace(/<[^>]+>/g, "")}
            />
          </motion.div>
        ))}
      </motion.div>

      <div className="text-center mt-12">
        <a
          href="/portfolio"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Voir tout le portfolio
        </a>
      </div>
    </section>
  );
}
