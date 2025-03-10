import React, { useState } from 'react'

const InsideStory = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg", // Teaching Sessions
      title: "Teaching Sessions",
      description: "Daily classes at Vivekanand Lecture Hall Complex"
    },
    {
      image: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg", // Extra Activities
      title: "Extra Activities",
      description: "Drawing and painting competitions"
    },
    {
      image: "https://images.pexels.com/photos/3184406/pexels-photo-3184406.jpeg", // Cultural Events
      title: "Cultural Events",
      description: "Celebrating festivals and cultural programs"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Inside Story</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Carousel */}
        <div className="max-w-5xl mx-auto relative">
          <div className="overflow-hidden rounded-xl shadow-2xl">
            <div className="relative h-[500px]">
              {/* Image */}
              <img 
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-full object-cover"
              />
              
              {/* Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                <h3 className="text-white text-2xl font-bold mb-2">
                  {slides[currentSlide].title}
                </h3>
                <p className="text-white/90">
                  {slides[currentSlide].description}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all"
          >
            <i className="ri-arrow-left-line text-2xl"></i>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all"
          >
            <i className="ri-arrow-right-line text-2xl"></i>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index ? 'bg-blue-600 w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <p className="text-gray-600 leading-relaxed">
            Literacy Mission organizes various activities throughout the year including 
            educational sessions, cultural events, and skill development programs. 
            Our volunteers work tirelessly to create an engaging and nurturing 
            environment for the children.
          </p>
        </div>
      </div>
    </section>
  )
}

export default InsideStory
