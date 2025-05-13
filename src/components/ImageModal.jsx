"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

export default function ImageModal({ media, onClose, onNext, onPrev }) {
  useEffect(() => {
    const disableContextMenu = (e) => e.preventDefault();
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("contextmenu", disableContextMenu);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("contextmenu", disableContextMenu);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onNext, onPrev]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="relative max-w-[90vw] max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <img
              src={media.source_url}
              alt={media.alt_text || media.title?.rendered || ""}
              className="max-h-[80vh] rounded-xl"
            />
            <div className="absolute bottom-2 right-2 text-white text-xs opacity-60 bg-black/40 px-2 py-1 rounded">
              © Kenza Filali
            </div>
          </div>

          {/* Navigation and close buttons */}
          <button
            onClick={onPrev}
            className="absolute -left-16 top-1/2 -translate-y-1/2 text-white"
          >
            <FaChevronLeft size={42} />
          </button>
          <button
            onClick={onNext}
            className="absolute -right-16 top-1/2 -translate-y-1/2 text-white"
          >
            <FaChevronRight size={32} />
          </button>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white"
          >
            <FaTimes size={24} />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
