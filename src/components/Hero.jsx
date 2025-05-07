import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { techIcons } from "../utils/data";
export default function Hero() {
  const [backgroundDots, serBackgroundDots] = useState([]);
  const nameVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  const roleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.3, duration: 0.8 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.6, duration: 0.5 },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.8 + i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    float: (i) => ({
      y: [0, -6, 0],
      transition: {
        delay: i * 0.1,
        duration: 2 + i * 0.3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    }),
  };
  useEffect(() => {
    const backgroundDots = Array.from({ length: 100 }).map((_, i) => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 12 + 4,
      delay: Math.random() * 5,
    }));
    serBackgroundDots(backgroundDots);
  }, []);
  return (
    <div className="relative flex flex-col items-center justify-center bg-neutral-950 text-white min-h-screen overflow-hidden px-6">
      <div className="z-10 text-center">
        <motion.h1
          className="text-6xl md:text-9xl  mb-2"
          initial="hidden"
          animate="visible"
          variants={nameVariants}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-blue-400 ">
            Kenza Filali
          </span>
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl text-gray-300 mb-6"
          initial="hidden"
          animate="visible"
          variants={roleVariants}
        >
          WEBMASTER / Développeuse Frontend
        </motion.h2>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
          className="flex gap-4 justify-center mb-8"
        >
          <motion.button
            className="px-6 py-2 rounded-full bg-blue-600 text-white font-medium"
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              const section = document.getElementById("mini-portfolio");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Voir Mes Projets
          </motion.button>
          <motion.button
            className="hover:bg-purple-500  px-6 py-2 rounded-full bg-transparent border-2 border-white text-white font-medium"
            whileHover={{ scale: 1.05 }}
          >
            Me Contacter
          </motion.button>
        </motion.div>

        {/* Tech logos */}
        <motion.div
          className="flex flex-wrap justify-center gap-6  md:mt-2 mt-16"
          initial="hidden"
          animate="visible"
        >
          {techIcons.map((tech, i) => (
            <motion.div
              key={tech.name}
              custom={i}
              variants={logoVariants}
              animate={["visible", "float"]}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center p-2"
              title={tech.name}
              style={{ backgroundColor: tech.bgColor }}
            >
              <Image
                src={tech.src}
                alt={tech.name}
                width={32}
                height={32}
                className="object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Animated gradient background overlay */}
      <motion.div
        className="absolute inset-0 z-0 opacity-30"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundSize: "200% 200%",
          backgroundImage:
            "linear-gradient(45deg, #000, #3b82f6, #06b6d4, #000)",
        }}
      />
      {backgroundDots.map((dot, i) => (
        <motion.div
          key={i}
          className="absolute opacity-50 "
          style={{
            top: dot.top,
            left: dot.left,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
          }}
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: dot.delay,
          }}
        >
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
          >
            <title>CodeCrafters</title>
            <path d="M9.825 17.527a.111.111 0 0 1-.107-.142l3.05-10.837a.111.111 0 0 1 .108-.081H14.2c.074 0 .127.07.107.141l-3.063 10.838a.111.111 0 0 1-.107.08H9.825Zm-2.146-2.732a.11.11 0 0 1-.079-.033l-2.667-2.704a.111.111 0 0 1 0-.156L7.6 9.211a.111.111 0 0 1 .08-.033h1.702c.1 0 .149.12.079.19l-2.534 2.534a.111.111 0 0 0 0 .157l2.535 2.546c.07.07.02.19-.079.19H7.68Zm6.954 0a.111.111 0 0 1-.079-.19l2.525-2.546a.111.111 0 0 0 0-.157l-2.524-2.535a.111.111 0 0 1 .079-.19h1.692c.03 0 .058.013.078.034l2.68 2.69a.111.111 0 0 1 0 .157l-2.68 2.704a.111.111 0 0 1-.078.033h-1.693ZM12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12Zm0-22.667C6.118 1.333 1.333 6.118 1.333 12S6.118 22.667 12 22.667 22.667 17.882 22.667 12 17.882 1.333 12 1.333Z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
