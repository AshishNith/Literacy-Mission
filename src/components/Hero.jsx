import React from 'react'
import Button from './Button'

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Minimal Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black">
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Minimal Line */}
          <div className="w-16 h-0.5 bg-blue-500 mx-auto mb-8 opacity-0 animate-fadeIn" />
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-light text-white mb-6 opacity-0 animate-fadeIn">
            Empowering Lives Through
            <span className="block font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200">
              Education
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto opacity-0 animate-fadeInUp animation-delay-300">
            Join us in our mission to transform lives and build brighter futures at NIT Hamirpur.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fadeInUp animation-delay-500">
            <Button
              variant="primary"
              size="lg"
              onClick={scrollToAbout}
            >
              Learn More
            </Button>
            <Button
              variant="outline"
              size="lg"
            >
              Join Us
            </Button>
          </div>

          {/* Minimal Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto opacity-0 animate-fadeInUp animation-delay-700">
            <div>
              <div className="text-3xl font-light text-white">120+</div>
              <div className="text-sm text-gray-500 mt-1">Students</div>
            </div>
            <div>
              <div className="text-3xl font-light text-white">18+</div>
              <div className="text-sm text-gray-500 mt-1">Years</div>
            </div>
            <div>
              <div className="text-3xl font-light text-white">50+</div>
              <div className="text-sm text-gray-500 mt-1">Volunteers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-500/20 to-gray-500/50"></div>
      </div>
    </div>
  )
}

export default Hero
