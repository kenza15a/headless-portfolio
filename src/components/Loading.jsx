"use client";
import { motion } from "framer-motion";

const Loading = () => {
  const spiralVariants = {
    animate: {
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration: 1.5,
        ease: "linear",
      },
    },
  };

  return (
    <div className="loading-container">
      <motion.div
        className="spiral"
        variants={spiralVariants}
        animate="animate"
      />
    </div>
  );
};

export default Loading;
