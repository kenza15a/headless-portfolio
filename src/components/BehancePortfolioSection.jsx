"use client";
import React from "react";
import { motion } from "framer-motion";
import BehanceCard from "./PortfoliocCards/BehanceCard"; // make sure the path matches your structure

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

function BehancePortfolioSection() {
  const behanceProjects = [
    {
      src: "https://www.behance.net/embed/project/219274011?ilo0=1",
      height: 316,
      width: 404,
      lazyLoad: true,
      frameBorder: 0,
      allow: "clipboard-write",
      refererPolicy: "strict-origin-when-cross-origin",
    },
    {
      src: "https://www.behance.net/embed/project/132051663?ilo0=1",
      height: 316,
      width: 404,
      lazyLoad: true,
      frameBorder: 0,
      allow: "clipboard-write",
      refererPolicy: "strict-origin-when-cross-origin",
    },
    {
      src: "https://www.behance.net/embed/project/132051279?ilo0=1",
      height: 316,
      width: 404,
      lazyLoad: true,
      frameBorder: 0,
      allow: "clipboard-write",
      refererPolicy: "strict-origin-when-cross-origin",
    },
  ];

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
    >
      {behanceProjects.map((project, index) => (
        <motion.div key={index} variants={cardVariant}>
          <BehanceCard
            src={project.src}
            height={project.height}
            width={project.width}
            lazyLoad={project.lazyLoad}
            frameBorder={project.frameBorder}
            allow={project.allow}
            refererPolicy={project.refererPolicy}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default BehancePortfolioSection;
