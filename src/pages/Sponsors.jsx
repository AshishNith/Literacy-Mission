import React from 'react';

const Sponsors = () => {
  const benefits = [
    {
      icon: 'ri-building-line',
      title: 'NIT Hamirpur Association',
      description: 'Associate with one of the best technical institutes of India'
    },
    {
      icon: 'ri-advertisement-line',
      title: 'Wide Publicity',
      description: 'Through flex, posters and other paraphernalia'
    },
    {
      icon: 'ri-global-line',
      title: 'Digital Presence',
      description: 'Name and logo on PRAYAS website for ONE YEAR with thousands of hits'
    },
    {
      icon: 'ri-layout-masonry-line',
      title: 'Campus Branding',
      description: 'On-campus branding and publicity opportunities'
    },
    {
      icon: 'ri-rocket-line',
      title: 'Product Launch Platform',
      description: 'Ideal platform for launching new products'
    },
    {
      icon: 'ri-heart-line',
      title: 'Social Impact',
      description: 'Investment in brightening someone\'s future'
    }
  ];

  const sponsors = {
    main: [
      { name: 'Sunrise Medicals', location: 'Hamirpur' },
      { name: 'Suraj Sweets', location: 'Hamirpur' },
      { name: 'Antariksh Mall', location: 'Hamirpur' }
    ],
    others: [
      { name: 'Ellora Technology', location: 'Hamirpur' },
      { name: 'Microcom Computer Ltd.', location: 'Hamirpur' },
      { name: 'Rakesh Printing Press', location: 'Hamirpur' },
      { name: 'Gurukul Public School', location: 'Hamirpur' },
      { name: 'Kapil General Stores', location: 'Hamirpur' },
      { name: 'Verka', location: 'NIT Hamirpur' },
      { name: 'Nescafe', location: 'NIT Hamirpur' }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Sponsors</h1>
            <p className="text-xl text-gray-300">
              Partners in our mission to empower through education
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits of Sponsorship</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <i className={`${benefit.icon} text-2xl text-blue-600`}></i>
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Lists */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Main Sponsors */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Main Sponsors</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {sponsors.main.map((sponsor, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
                >
                  <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <i className="ri-building-2-line text-2xl text-gray-500"></i>
                  </div>
                  <h3 className="font-bold text-lg mb-1">{sponsor.name}</h3>
                  <p className="text-gray-600">{sponsor.location}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Other Sponsors */}
          <div>
            <h2 className="text-2xl font-bold text-center mb-8">Other Sponsors</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {sponsors.others.map((sponsor, index) => (
                <div 
                  key={index}
                  className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center"
                >
                  <h3 className="font-medium mb-1">{sponsor.name}</h3>
                  <p className="text-sm text-gray-600">{sponsor.location}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Become a Sponsor</h2>
          <p className="mb-8 text-blue-100">Join us in making a difference</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;
