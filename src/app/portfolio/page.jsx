"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getPortfolioProjects } from "@/lib/api";
import PortfolioCard from "@/components/PortfolioCard";

export default function PortfolioPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getPortfolioProjects(100);
      setProjects(data);
    }
    fetchData();
  }, []);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="py-20 px-6 md:px-12 bg-white min-h-screen">
      <h1 className="text-4xl font-bold text-blue-600 mb-10 text-center">
        Mon Portfolio
      </h1>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={cardVariant}>
            <PortfolioCard
              title={project.title.rendered}
              image={
                project._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                "images/default.jpg"
              }
              description={project.excerpt.rendered.replace(/<[^>]+>/g, "")}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
