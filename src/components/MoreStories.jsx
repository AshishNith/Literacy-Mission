import React from 'react'

const MoreStories = () => {
  const videos = [
    {
      id: "b1Ce96yfe5M",
      title: "Literacy Mission Nith",
      description: "Health Camp 2025 || NIT Hamirpur || Literacy Mission",
      thumbnail: "https://img.youtube.com/vi/b1Ce96yfe5M/maxresdefault.jpg"
    },
    {
      id: "o9pXhn2TUvE",
      title: "PRAYAS 2K25 | Literacy Mission NITH",
      description: "Highlights from our annual cultural event Prayas 2025",
      thumbnail: "https://img.youtube.com/vi/o9pXhn2TUvE/maxresdefault.jpg"
    },
    {
      id: "ENOUff3tjyA",
      title: "Performance Hillffair 2011",
      description: "Watch our memorable performances at NITH's Hillffair celebration",
      thumbnail: "https://img.youtube.com/vi/ENOUff3tjyA/maxresdefault.jpg"
    },
    {
      id: "r7Z68ChynOA",
      title: "Introduction Prayas(2017)",
      description: "A glimpse into our cultural fest 'Prayas' - Concert For A Cause",
      thumbnail: "https://img.youtube.com/vi/r7Z68ChynOA/maxresdefault.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">More Stories</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Watch our journey and impact through these videos</p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              {/* Video Thumbnail */}
              <div className="relative aspect-video">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={() => window.open(`https://www.youtube.com/watch?v=${video.id}`, '_blank')}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors"
                >
                  <i className="ri-play-circle-fill text-white text-5xl hover:scale-110 transition-transform"></i>
                </button>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                <p className="text-gray-600">{video.description}</p>
                <button 
                  onClick={() => window.open(`https://www.youtube.com/watch?v=${video.id}`, '_blank')}
                  className="mt-4 text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-2"
                >
                  Watch Video
                  <i className="ri-arrow-right-line"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MoreStories
