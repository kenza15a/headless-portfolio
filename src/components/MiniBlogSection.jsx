"use client";
import { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import PostCard from "./PostCard";
import { getPosts } from "@/lib/api";
import Loading from "./Loading";

export default function MiniBlogSection() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const controls = useAnimationControls();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const { posts } = await getPosts(1, 10);
        setPosts(posts);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();

    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);
    }
  }, []);

  useEffect(() => {
    if (posts.length && !isMobile) {
      controls.start("animate");
    }
  }, [posts, controls, isMobile]);

  const sliderVariants = {
    animate: {
      x: ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section className="py-16 px-6 md:px-12 bg-gray-50 w-screen" id="mini-blog">
      <h2 className="text-3xl font-bold text-blue-600 mb-10 text-center">
        Derniers articles
      </h2>

      {isLoading ? (
        <Loading />
      ) : (
        <div className="overflow-x-auto overflow-y-hidden relative hide-scrollbar-md">
          <motion.div
            className="flex gap-6 w-max"
            variants={sliderVariants}
            initial="initial"
            animate={isMobile ? undefined : controls}
            onMouseEnter={() => !isMobile && controls.stop()}
            onMouseLeave={() => !isMobile && controls.start("animate")}
          >
            {[...posts, ...posts].map((post, index) => (
              <div
                key={`${post.id}-${index}`}
                className="w-[80vw] md:min-w-[350px] flex-shrink-0"
              >
                <PostCard post={post} />
              </div>
            ))}
          </motion.div>
        </div>
      )}
    </section>
  );
}
