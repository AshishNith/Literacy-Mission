import React from 'react'

const Gallery = () => {
  const images = [
    {
      url: "https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg",
      alt: "Education Gallery"
    },
    // {
    //   url: "https://images.pexels.com/photos/8363032/pexels-photo-8363032.jpeg",
    //   alt: "Teaching Gallery"
    // },
    {
      url: "https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg",
      alt: "Learning Gallery"
    },
    {
      url: "https://images.pexels.com/photos/8364588/pexels-photo-8364588.jpeg",
      alt: "Students Gallery"
    }
  ];

  return (
    <section className="py-20 bg-white" id="gallery">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Moments captured in our journey</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          {/* <p className="mt-4 text-gray-600">Moments captured in our journey</p> */}
        </div>

        {/* Sliding Gallery */}
        <div className="relative overflow-hidden">
          <div className="flex animate-slide">
            {/* First set of images */}
            <div className="flex min-w-full">
              {images.map((image, index) => (
                <div key={index} className="w-1/4 p-1">
                  <div className="relative group overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-[300px] object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gray-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <i className="ri-zoom-in-line text-white text-3xl"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex min-w-full">
              {images.map((image, index) => (
                <div key={`dup-${index}`} className="w-1/4 p-1">
                  <div className="relative group overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-[300px] object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gray-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <i className="ri-zoom-in-line text-white text-3xl"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
