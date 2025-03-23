import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);
  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);
  const firstAnimationRef = useRef(null);
  const secondAnimationRef = useRef(null);

  const images = [
    { id: 1, url: '/assets/General/1.JPG', alt: "Gallery Image 1" },
    { id: 2, url: '/assets/General/2.JPG', alt: "Gallery Image 2" },
    { id: 3, url: '/assets/General/3.jpg', alt: "Gallery Image 3" },
    { id: 4, url: '/assets/General/4.jpg', alt: "Gallery Image 4" },
    { id: 5, url: '/assets/General/5.jpg', alt: "Gallery Image 5" },
    { id: 6, url: '/assets/General/6.jpg', alt: "Gallery Image 6" },
    { id: 7, url: '/assets/General/7.jpg', alt: "Gallery Image 7" },
    { id: 8, url: '/assets/General/8.jpg', alt: "Gallery Image 8" },
    { id: 9, url: '/assets/General/9.jpg', alt: "Gallery Image 9" },
    { id: 10, url: '/assets/General/10.JPG', alt: "Gallery Image 10" },
  ];

  useEffect(() => {
    // First row animation
    firstAnimationRef.current = gsap.to(firstRowRef.current, {
      x: '-33.33%',
      duration: 30,
      ease: 'none',
      repeat: -1,
    });

    // Second row animation
    secondAnimationRef.current = gsap.to(secondRowRef.current, {
      x: '0%',
      duration: 30,
      ease: 'none',
      repeat: -1,
    });
    
    gsap.set(secondRowRef.current, { x: '-33.33%' });

    // Update animation state based on hoveredImage
    if (hoveredImage !== null) {
      firstAnimationRef.current.pause();
      secondAnimationRef.current.pause();
    } else {
      firstAnimationRef.current.play();
      secondAnimationRef.current.play();
    }

    return () => {
      firstAnimationRef.current?.kill();
      secondAnimationRef.current?.kill();
    };
  }, [hoveredImage]);

  return (
    <section className="py-20 bg-white overflow-hidden" id="gallery">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Gallery</h2>
          <p className="text-gray-600">Moments captured in our journey</p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        {/* Sliding Gallery Container */}
        <div 
          className="relative w-full overflow-hidden" 
          style={{ height: '800px' }}
        >
          {/* First Row */}
          <div 
            ref={firstRowRef}
            className="flex gap-4 will-change-transform"
            style={{ 
              width: 'max-content',
              position: 'absolute',
              top: '0',
              transform: 'translate3d(0, 0, 0)'
            }}
          >
            {[...images, ...images.slice(0, 5)].map((image, index) => (
              <motion.div
                key={`row1-${image.id}-${index}`}
                className="w-72 flex-shrink-0 transform-gpu"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                onMouseEnter={() => setHoveredImage(image.id)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <div
                  className="relative aspect-square overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    width={288}
                    height={288}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Second Row */}
          <div 
            ref={secondRowRef}
            className="flex gap-4 will-change-transform"
            style={{ 
              width: 'max-content',
              position: 'absolute',
              top: '400px',
              transform: 'translate3d(0, 0, 0)'
            }}
          >
            {[...images, ...images.slice(0, 5)].reverse().map((image, index) => (
              <motion.div
                key={`row2-${image.id}-${index}`}
                className="w-72 flex-shrink-0 transform-gpu"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                onMouseEnter={() => setHoveredImage(image.id)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <div
                  className="relative aspect-square overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    width={288}
                    height={288}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              transition: { duration: 0.3 }
            }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl w-full">
              <button
                className="absolute -top-12 right-0 text-white hover:text-blue-400 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <img
                src={selectedImage.url}
                alt={selectedImage.alt}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Gallery;