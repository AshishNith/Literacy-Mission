import React, { useState } from 'react';

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Photos', icon: 'ri-image-line' },
    { id: 'events', name: 'Events', icon: 'ri-calendar-event-line' },
    { id: 'activities', name: 'Activities', icon: 'ri-group-line' },
    { id: 'achievements', name: 'Achievements', icon: 'ri-medal-line' }
  ];

  const images = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg",
      category: 'events',
      title: 'Annual Day Celebration',
      description: 'Students performing at the annual day celebration'
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/1234568/pexels-photo-1234568.jpeg",
      category: 'activities',
      title: 'Outdoor Team Building',
      description: 'Team building activities in the park'
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/1234569/pexels-photo-1234569.jpeg",
      category: 'achievements',
      title: 'Graduation Ceremony',
      description: 'Graduates celebrating their achievements'
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/1234570/pexels-photo-1234570.jpeg",
      category: 'events',
      title: 'Charity Fundraiser',
      description: 'Community gathering for a charity event'
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/1234571/pexels-photo-1234571.jpeg",
      category: 'activities',
      title: 'Art Workshop',
      description: 'Participants engaged in an art workshop'
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/1234572/pexels-photo-1234572.jpeg",
      category: 'achievements',
      title: 'Science Fair',
      description: 'Students showcasing their science projects'
    }
  ];

  const filteredImages = activeFilter === 'all' 
    ? images 
    : images.filter(img => img.category === activeFilter);

  const handleDownload = (imageSrc, imageTitle) => {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = imageTitle;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Modern Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold mb-2 block">Our Collections</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Capturing Moments That Matter
          </h2>
          <p className="text-gray-600 text-lg">
            A visual journey through our mission's impact and achievements
          </p>
        </div>

        {/* Filter Pills with Icons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-full transition-all
                ${activeFilter === filter.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }
              `}
            >
              <i className={`${filter.icon} text-lg`}></i>
              <span>{filter.name}</span>
            </button>
          ))}
        </div>

        {/* Grid Layout with Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="relative bg-gray-100 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="text-white text-lg font-semibold">{image.title}</h3>
                <p className="text-gray-300">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/95 z-50 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="absolute top-4 right-4 z-10 space-x-4">
              <button 
                className="text-white/50 hover:text-white transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDownload(selectedImage.src, selectedImage.title);
                }}
              >
                <i className="ri-download-line text-2xl"></i>
              </button>
              <button 
                className="text-white/50 hover:text-white transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <i className="ri-close-line text-3xl"></i>
              </button>
            </div>

            <div className="relative max-w-5xl w-full animate-zoomIn">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                <h3 className="text-white text-xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Custom Scrollbar */}
      <style>
        {`
          ::-webkit-scrollbar {
            width: 8px;
          }
          ::-webkit-scrollbar-track {
            background: #f1f1f1;
          }
          ::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 4px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #555;
          }
        `}
      </style>
    </section>
  );
};

export default ImageGallery;