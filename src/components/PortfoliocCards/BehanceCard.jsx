"use client";
import React from "react";

function BehanceCard({
  src,
  height,
  width,
  lazyLoad,
  frameBorder,
  allow,
  refererPolicy,
}) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <iframe
        src={src}
        height={height}
        width={width}
        loading={lazyLoad ? "lazy" : "eager"}
        frameBorder={frameBorder}
        allow={allow}
        referrerPolicy={refererPolicy}
        className="w-full h-80 object-cover"
      />
    </div>
  );
}

export default BehanceCard;
