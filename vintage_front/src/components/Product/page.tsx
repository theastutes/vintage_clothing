"use client";

import React, { useState } from "react";

export const Product: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const handleMouseDown = () => {
    setTimeout(() => {
      setIsActive(true);
    }, 3000); // 3 seconds delay
  };

  const handleMouseUp = () => {
    setIsActive(false);
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className={`bg-white/30 transition-all duration-700 cursor-pointer rounded-lg aspect-square backdrop-blur-2xl max-w-full ${
        isActive
          ? "h-full top-12 bottom-20 absolute right-5 w-full left-0 z-50"
          : ""
      }`}
    ></div>
  );
};
