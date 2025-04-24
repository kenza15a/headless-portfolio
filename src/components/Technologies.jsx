"use client";
import { motion } from "framer-motion";
import TechnologyCard from "./TechnologyCard";

export default function TechnologiesSection() {
  const categories = {
    "Front-end": [
      "HTML",
      "CSS / SCSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
    ],
    "Back-end & API": ["Node.js", "REST API", "MongoDB", "SQL"],
    "CMS & Emailing": ["WordPress", "WooCommerce", "Mailchimp"],
    "Design & UX": ["Figma", "Photoshop", "Canva"],
    "Outils & Déploiement": [
      "Git",
      "GitHub",
      "VSCode",
      "OVH",
      "AWS",
      "Azure",
      "FileZilla",
    ],
    "Méthodologie & Gestion": [
      "Trello",
      "Notion",
      "Agile",
      "User Stories",
      "Kanban",
    ],
  };

  // Animation settings
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
    <section className="py-16 px-6 md:px-12 bg-gray-50" id="technologies">
      <h2 className="text-3xl font-bold text-blue-600 mb-10 text-center">
        Technologies maîtrisées
      </h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }} // 👈 triggers only on scroll into view
        className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        {Object.entries(categories).map(([title, tools]) => (
          <motion.div key={title} variants={cardVariant}>
            <TechnologyCard title={title} tools={tools} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
