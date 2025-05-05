"use client";
import { motion } from "framer-motion";

export default function PostCard({
  post,
  categories = [],
  index = 0,
  styleVariant = "",
  colorVariant = "",
}) {
  const image = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

  return (
    <motion.a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0, scale: 1.03 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`block p-4 rounded-xl shadow hover:shadow-lg border hover:-rotate-2 hover:z-100 hover:scale-105 border-gray-100 break-inside-avoid ${colorVariant} ${styleVariant}`}
    >
      {image && (
        <img
          src={image}
          alt={post.title.rendered}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      )}
      <h3
        className="text-lg font-semibold mb-2"
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />
      <p className="text-sm text-gray-600 line-clamp-3">
        {post.excerpt.rendered.replace(/<[^>]+>/g, "")}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {post.categories.map((catId) => {
          const cat = categories.find((c) => c.id === catId);
          return (
            cat && (
              <span
                key={catId}
                className="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-700"
              >
                {cat.name}
              </span>
            )
          );
        })}
      </div>
    </motion.a>
  );
}
