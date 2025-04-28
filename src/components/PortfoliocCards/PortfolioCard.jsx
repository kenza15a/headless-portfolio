"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PortfolioCard({ title, image, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileFocus={{ scale: 1.5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="rounded-xl overflow-hidden shadow-md focus:outline-none focus-visible:ring-2 ring-blue-400"
      tabIndex={0} // Allows focus via keyboard
    >
      <div className="w-full h-48 relative">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4 bg-white">
        <h3 className="font-semibold text-lg text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </motion.div>
  );
}
