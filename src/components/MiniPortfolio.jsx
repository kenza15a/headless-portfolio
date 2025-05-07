"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PortfolioCard from "./PortfoliocCards/PortfolioCard";
import { getPortfolioProjects } from "@/lib/api";
import Loading from "@/components/Loading";

export default function MiniPortfolioSection() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getPortfolioProjects();
        setProjects(data);
      } finally {
        setIsLoading(false);
      }
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
    <section
      ref={sectionRef}
      className="py-16 px-6 md:px-12 bg-gray-900"
      id="mini-portfolio"
    >
      {isLoading ? (
        <Loading />
      ) : (
        <motion.div style={{ y, opacity }}>
          <h2 className="text-4xl font-bold text-white mb-10 text-center">
            MES PROJETS
          </h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[400px]"
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

          <div className="text-center mt-12">
            <a
              href="/portfolio"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
            >
              Voir tout le portfolio
            </a>
          </div>
        </motion.div>
      )}
    </section>
  );
}
