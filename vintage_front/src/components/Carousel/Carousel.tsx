// components/ImageCarousel.tsx
"use client"
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  
    


  return (
    <div className="carousel">
      {images.map((imageUrl, index) => (
        <motion.img
          key={index}
          src={imageUrl}
          alt={`Image ${index + 1}`}
          className="carousel-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      ))}
    </div>
  );
};



export default ImageCarousel;
