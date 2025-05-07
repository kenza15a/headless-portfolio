"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PortfolioCard({ title, image, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileFocus={{ scale: 1.5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="w-full h-full flex flex-col rounded-xl overflow-hidden shadow-md focus:outline-none focus-visible:ring-2 ring-blue-400"
      tabIndex={0}
    >
      <div className="relative h-1/2 w-full">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="flex-1 p-4 bg-white overflow-hidden">
        <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-4">{description}</p>
      </div>
    </motion.div>
  );
}
