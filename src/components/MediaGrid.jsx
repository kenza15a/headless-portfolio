"use client";

import { useEffect, useState } from "react";
import MediaUnit from "./MediaUnit";
import ImageModal from "./ImageModal";

function shuffleArray(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export default function MediaGrid({ items }) {
  const [shuffledItems, setShuffledItems] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    setShuffledItems(shuffleArray(items));
  }, [items]);

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);
  const showPrev = () =>
    setSelectedIndex(
      (prev) => (prev - 1 + shuffledItems.length) % shuffledItems.length
    );
  const showNext = () =>
    setSelectedIndex((prev) => (prev + 1) % shuffledItems.length);

  if (shuffledItems.length === 0) return null;

  return (
    <div className="relative h-[100vh] overflow-hidden">
      <div className="absolute top-0 animate-verticalScroll pause-animation">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 p-4">
          {shuffledItems.map((item, index) => (
            <MediaUnit
              key={`${item.id}-${index}`}
              media={item}
              onClick={() => openModal(index)}
            />
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <ImageModal
          media={shuffledItems[selectedIndex]}
          onClose={closeModal}
          onNext={showNext}
          onPrev={showPrev}
        />
      )}
    </div>
  );
}
