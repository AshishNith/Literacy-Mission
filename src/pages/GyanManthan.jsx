import React, { useState } from 'react';
import Button from '../components/Button';

const GyanManthan = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects', icon: 'ri-apps-line' },
    { id: 'science', name: 'Science', icon: 'ri-flask-line' },
    { id: 'innovation', name: 'Innovation', icon: 'ri-lightbulb-line' },
    { id: 'art', name: 'Art Gallery', icon: 'ri-palette-line' }
  ];

  const projects = [
    {
      category: 'science',
      title: 'Environmental Studies',
      description: 'Projects focusing on environmental conservation and sustainability.',
      image: 'https://images.pexels.com/photos/3850940/pexels-photo-3850940.jpeg',
      year: '2023'
    },
    // Add more projects...
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg"
            alt="GyanManthan Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-gray-900/90"></div>
        </div>
        <div className="relative container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <span className="text-blue-400 font-medium mb-4 block animate-fadeIn">Annual Educational Fair</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
              GYANMANTHAN
              <span className="block text-xl md:text-2xl mt-4 text-gray-300 font-normal italic">
                "The world is but a canvas to our imagination and innovation!"
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-xl text-gray-700 leading-relaxed">
              GYANMANTHAN is an Annual educational fair of Literacy Mission. It serves as a platform for children to innovate and transform their thoughts into action, supported by NITH students and faculty.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-blue-50 rounded-xl p-8 text-center">
              <i className="ri-lightbulb-line text-4xl text-blue-600 mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">Platform for creative ideas and innovative thinking</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-8 text-center">
              <i className="ri-team-line text-4xl text-blue-600 mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-gray-600">Students and faculty working together</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-8 text-center">
              <i className="ri-gallery-line text-4xl text-blue-600 mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Exhibition</h3>
              <p className="text-gray-600">Showcase of creativity and hard work</p>
            </div>
          </div>

          {/* Quote Section */}
          <div className="bg-gray-900 text-white rounded-2xl p-12 mb-16">
            <blockquote className="text-2xl font-light text-center italic">
              "GYANMANTHAN is not only a fair to put up the science projects of children, but also a platform that shows their hardwork, perseverance and ideas."
            </blockquote>
          </div>

          {/* Gallery Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-12">Event Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="relative group overflow-hidden rounded-xl">
                  <img 
                    src={`https://source.unsplash.com/800x600/?science,education,${item}`}
                    alt={`Gallery ${item}`}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Button
              variant="gradient"
              size="lg"
              icon={<i className="ri-calendar-event-line"></i>}
            >
              Register for Next Event
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default GyanManthan;
