// components/PostCard.jsx
import React from "react";

export default function PostCard({ post }) {
  const image = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const title = post.title.rendered;
  const snippet = post.excerpt.rendered.replace(/<[^>]+>/g, ""); // Strip HTML tags
  const postUrl = post.link;

  return (
    <div className="  shadow-md p-4">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-xl mb-4"
        />
      )}
      <h2
        className="text-xl font-bold mb-2"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <p className="text-gray-600 mb-4">{snippet.substring(0, 150)}...</p>
      <a
        href={postUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Lire plus
      </a>
    </div>
  );
}
