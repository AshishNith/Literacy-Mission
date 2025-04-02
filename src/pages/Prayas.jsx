import React from 'react';
import Button from '../components/Button';
import img1 from '/assets/Prayaas/1.jpeg';
import img2 from '/assets/Prayaas/2.jpeg';
import img3 from '/assets/Prayaas/3.jpeg';
import img4 from '/assets/Prayaas/4.jpeg';

const Prayas = () => {
  const performances = [
    {
      title: 'Dance',
      icon: 'ri-footprint-line',
      description: 'Classical and contemporary dance performances'
    },
    {
      title: 'Drama',
      icon: 'ri-emotion-happy-line',
      description: 'Theatrical performances and skits'
    },
    {
      title: 'Music',
      icon: 'ri-music-2-line',
      description: 'Vocal and instrumental performances'
    }
  ];

  const highlights = [
    {
      year: '2023',
      theme: 'सर्वे भवन्तु शिक्षिताः',
      description: 'Celebrating 15 years of empowerment through education',
      image: 'path_to_image'
    }
  ];

  return (
    <>
      {/* Hero Section with Image Background */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          {/* Updated with cultural event image */}
          <img 
            src="https://images.pexels.com/photos/2417726/pexels-photo-2417726.jpeg"
            alt="Cultural Performance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-gray-900/90"></div>
          
          {/* Decorative Pattern */}
          <div 
            className="absolute inset-0 opacity-20 mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23A0AEC0' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          ></div>
        </div>
        
        <div className="relative container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <span className="text-blue-400 font-medium mb-4 block animate-fadeIn">
              Annual Cultural-Cum-Charity Festival
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
              PRAYAS
              <span className="block text-xl md:text-2xl mt-4 text-gray-300 font-normal italic">
                "Art is an effort to create, beside the real world, a more humane world."
              </span>
            </h1>
          </div>
        </div>

        {/* Updated Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <div className="w-full h-20 bg-gradient-to-b from-transparent to-gray-100"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-100 to-transparent"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <p className="text-xl text-gray-800 leading-relaxed">
              PRAYAS provides a platform for children to showcase their talents through various art forms. 
              It's where NITH students and Literacy Mission students come together to create magical moments.
            </p>
          </div>

          {/* Performance Categories */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {performances.map((item, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-blue-50 to-white shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-blue-600 text-4xl mb-4">
                  <i className={item.icon}></i>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                <div className="absolute top-0 right-0 -translate-x-2 translate-y-2 text-blue-200 text-8xl opacity-20">
                  <i className={item.icon}></i>
                </div>
              </div>
            ))}
          </div>

          {/* Quote Section */}
          <div className="bg-gradient-to-r from-blue-900 to-gray-900 text-white rounded-2xl p-12 mb-20">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                सर्वे भवन्तु शिक्षिताः
              </h2>
              <p className="text-xl text-blue-200">
                Celebrating 20 years of contribution in making society a better place
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Button
              variant="gradient"
              size="lg"
              icon={<i className="ri-ticket-line"></i>}
            >
              Register for PRAYAS 2025
            </Button>
          </div>

          {/* Gallery Section */}

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-12">Event Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[img1, img2, img3, img4].map((image, index) => (
                <div key={index} className="relative group overflow-hidden rounded-xl">
                  <img 
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Prayas;
