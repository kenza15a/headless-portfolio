"use client";
import { motion } from "framer-motion";

const Loading = () => {
  const spinVariants = {
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
        variants={spinVariants}
        animate="animate"
        className="svg-wrapper"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={50}
          height={50}
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="#dcdcdc"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
          >
            <path d="M10.143 8.857L7 12l3.143 3.143m3.714-6.286L17 12l-3.143 3.143"></path>
            <rect width={16.5} height={16.5} x={3.75} y={3.75} rx={4}></rect>
          </g>
        </svg>
      </motion.div>
    </div>
  );
};

export default Loading;
