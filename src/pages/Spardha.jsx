import React from 'react';
import Button from '../components/Button';

const Spardha = () => {
  const activities = [
    {
      title: 'Team Sports',
      icon: 'ri-team-line',
      description: 'Cricket, Football, and Volleyball tournaments fostering team spirit',
      color: 'blue'
    },
    {
      title: 'Individual Sports',
      icon: 'ri-run-line',
      description: 'Athletics, Racing, and Long Jump competitions',
      color: 'green'
    },
    {
      title: 'Fun Games',
      icon: 'ri-game-line',
      description: 'Recreational activities and traditional games',
      color: 'orange'
    }
  ];

  const highlights = [
    {
      title: 'Teamwork',
      description: 'Building collaboration through sports',
      icon: 'ri-team-fill'
    },
    {
      title: 'Leadership',
      description: 'Developing leadership qualities',
      icon: 'ri-flag-fill'
    },
    {
      title: 'Confidence',
      description: 'Boosting self-confidence through achievement',
      icon: 'ri-medal-fill'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg"
            alt="Spardha Sports"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/70"></div>
        </div>
        
        <div className="relative container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <span className="text-blue-400 font-medium mb-4 block animate-fadeIn">
              Annual Sports Fair
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
              SPARDHA
              <span className="block text-xl md:text-2xl mt-4 text-gray-300 font-normal italic">
                "Wondered what's the best part of the game? The opportunity to play!"
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
              SPARDHA is our annual sports fair that ignites passion for sports among students 
              and faculty alike. It's where we create an environment full of energy, teamwork, 
              and the pure joy of playing.
            </p>
          </div>

          {/* Activities Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {activities.map((activity, index) => (
              <div 
                key={index}
                className="relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-blue-50 to-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`text-${activity.color}-600 text-4xl mb-4`}>
                  <i className={activity.icon}></i>
                </div>
                <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                <p className="text-gray-600">{activity.description}</p>
              </div>
            ))}
          </div>

          {/* Quote Section */}
          <div className="bg-blue-600 text-white rounded-2xl p-12 mb-16">
            <blockquote className="text-2xl font-light text-center">
              "We come, we play, we enjoy, we fall, we get up, we run, we jump, we win, 
              we lose, at the end we all smile."
            </blockquote>
          </div>

          {/* Highlights Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="text-center p-6 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="inline-block p-4 rounded-full bg-blue-50 mb-4">
                  <i className={`${highlight.icon} text-3xl text-blue-600`}></i>
                </div>
                <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[1, 2, 3, 4].map((item) => (
              <div 
                key={item}
                className="relative aspect-square overflow-hidden rounded-lg group"
              >
                <img 
                  src={`https://source.unsplash.com/800x800/?sports,games,${item}`}
                  alt={`Sports Activity ${item}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Button
              variant="gradient"
              size="lg"
              icon={<i className="ri-calendar-event-line"></i>}
            >
              Join Next Event
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Spardha;
