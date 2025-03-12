import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const FloatingShape = ({ className, pattern }) => {
  const shapeRef = useRef(null);

  useEffect(() => {
    const shape = shapeRef.current;
    
    gsap.set(shape, {
      x: Math.random() * (window.innerWidth - 100),
      y: Math.random() * (window.innerHeight - 100),
    });

    // Create a more complex animation timeline
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      defaults: { duration: gsap.utils.random(3, 6), ease: "sine.inOut" }
    });

    tl.to(shape, {
      x: `+=${gsap.utils.random(-200, 200)}`,
      y: `+=${gsap.utils.random(-200, 200)}`,
      rotation: gsap.utils.random(-180, 180),
    })
    .to(shape, {
      x: `+=${gsap.utils.random(-200, 200)}`,
      y: `+=${gsap.utils.random(-200, 200)}`,
      rotation: gsap.utils.random(-180, 180),
    });

    return () => tl.kill();
  }, []);

  const renderPattern = () => {
    switch(pattern) {
      case 'donut':
        return (
          <g>
            <circle cx="25" cy="25" r="20" fill="currentColor" opacity="0.3" />
            <circle cx="25" cy="25" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
          </g>
        );
      case 'cross':
        return (
          <g>
            <rect x="22" y="10" width="6" height="30" fill="currentColor" />
            <rect x="10" y="22" width="30" height="6" fill="currentColor" />
          </g>
        );
      case 'star':
        return (
          <path
            d="M25 5 L28.5 17.7 L42 17.7 L31.2 25.8 L34.7 38.5 L25 31 L15.3 38.5 L18.8 25.8 L8 17.7 L21.5 17.7 Z"
            fill="currentColor"
          />
        );
      case 'dots':
        return (
          <g>
            <circle cx="15" cy="15" r="3" fill="currentColor" />
            <circle cx="35" cy="15" r="3" fill="currentColor" />
            <circle cx="15" cy="35" r="3" fill="currentColor" />
            <circle cx="35" cy="35" r="3" fill="currentColor" />
          </g>
        );
      case 'ring':
        return (
          <g>
            <circle cx="25" cy="25" r="15" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="15 10" />
          </g>
        );
      default:
        return <circle cx="25" cy="25" r="20" fill="currentColor" />;
    }
  };

  return (
    <div
      ref={shapeRef}
      className={`absolute pointer-events-none ${className}`}
    >
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {renderPattern()}
      </svg>
    </div>
  );
};

const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[5]">
      <FloatingShape className="text-blue-400/30 blur-[1px]" pattern="donut" />
      <FloatingShape className="text-purple-400/20 scale-150 blur-[2px]" pattern="star" />
      <FloatingShape className="text-pink-400/25 scale-75" pattern="cross" />
      <FloatingShape className="text-indigo-400/20 scale-125 blur-[1px]" pattern="dots" />
      <FloatingShape className="text-green-400/20 scale-100" pattern="ring" />
      <FloatingShape className="text-yellow-400/20 scale-90 blur-[1px]" pattern="star" />
      <FloatingShape className="text-red-400/20 scale-110" pattern="donut" />
      <FloatingShape className="text-teal-400/25 scale-95 blur-[2px]" pattern="cross" />
    </div>
  );
};

export default FloatingShapes;
