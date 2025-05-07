"use client";
import React from "react";

export default function BehanceCard({
  src,
  lazyLoad,
  frameBorder,
  allow,
  refererPolicy,
}) {
  return (
    <div className="w-full h-[400px] flex flex-col rounded-xl overflow-hidden shadow-md bg-white">
      <div className="flex-1 relative">
        <iframe
          src={src}
          loading={lazyLoad ? "lazy" : "eager"}
          frameBorder={frameBorder}
          allow={allow}
          referrerPolicy={refererPolicy}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
