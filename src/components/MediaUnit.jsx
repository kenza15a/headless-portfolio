"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0 },
};

export default function MediaUnit({ media, onClick }) {
  // 🔒 Disable right-click when MediaUnit mounts
  useEffect(() => {
    const disableContextMenu = (e) => e.preventDefault();
    window.addEventListener("contextmenu", disableContextMenu);
    return () => window.removeEventListener("contextmenu", disableContextMenu);
  }, []);

  return (
    <motion.div
      className="mb-4 break-inside-avoid overflow-hidden rounded-2xl shadow-md cursor-pointer"
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 100 }}
      onClick={onClick}
    >
      <div className="relative">
        <img
          src={media.source_url}
          alt={media.alt_text}
          className="w-full h-auto object-cover"
        />
        <div className="absolute bottom-2 right-2 text-white text-xs opacity-60 bg-black/40 px-2 py-1 rounded">
          © Kenza Filali
        </div>
      </div>
    </motion.div>
  );
}
