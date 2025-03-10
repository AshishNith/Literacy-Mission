import React, { useState } from 'react';
import Button from '../components/Button';
import ImageGallery from '../components/ImageGallery';

const Achievements = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Achievements', icon: 'ri-award-line' },
    { id: 'academic', name: 'Academic', icon: 'ri-graduation-cap-line' },
    { id: 'medical', name: 'Medical Aid', icon: 'ri-heart-pulse-line' },
    { id: 'recognition', name: 'Recognition', icon: 'ri-medal-line' },
    { id: 'skills', name: 'Skills & Training', icon: 'ri-tools-line' }
  ];

  const achievements = [
    {
      category: 'academic',
      year: '2024',
      title: 'Military Exam Success',
      description: 'Arman Thakur cleared both the Merchant Navy and Air Force exams.',
      icon: 'ri-ship-line'
    },
    {
      category: 'academic',
      year: '2024',
      title: 'CUET Success',
      description: 'Manish secured admission in University of Allahabad through CUET exam.',
      icon: 'ri-graduation-cap-line'
    },
    {
      category: 'academic',
      year: '2023',
      title: 'Corporate Placement',
      description: 'Deepak from Govt. Polytechnic Hamirpur got hired by Suzuki Motor Gujarat.',
      icon: 'ri-building-line'
    },
    {
      category: 'academic',
      year: '2018',
      title: 'JNV Selection Success',
      description: 'Six students - Suraj, Rahul, Shivani, Gudia, Pratima and Priyanka got selected in JNV.',
      icon: 'ri-medal-line'
    },
    {
      category: 'medical',
      year: '2016',
      title: 'Successful Heart Surgery',
      description: "Karan's heart surgery performed successfully at Fortis Hospital, Delhi, with help from Rotary Club, Hamirpur.",
      icon: 'ri-heart-pulse-line'
    },
    {
      category: 'medical',
      year: '2015',
      title: 'Kidney Surgery Success',
      description: 'Arpita, a 4-year old girl, successfully operated for kidney cysts at PGIMER Chandigarh.',
      icon: 'ri-hospital-line'
    },
    {
      category: 'academic',
      year: '2013',
      title: 'JEE Success',
      description: 'Chandan Bhagat selected in JEE Mains 2013, secured seat in Mechanical Engineering at NIT Patna.',
      icon: 'ri-building-4-line'
    },
    {
      category: 'recognition',
      year: '2009',
      title: 'Presidential Recognition',
      description: 'Former President Dr. A.P.J Abdul Kalam showed great interest in NITH Literacy Mission activities.',
      icon: 'ri-award-line'
    },
    {
      category: 'academic',
      year: '2010',
      title: 'Academic Excellence',
      description: 'Lalita topped regional board (8 schools) with 95.8% in 5th grade and cleared JNV selection.',
      icon: 'ri-award-fill'
    },
    {
      category: 'skills',
      year: '2022',
      title: 'ITI Excellence',
      description: 'Ritu topped ITI college with 81% marks, while Pankaj scored 79%.',
      icon: 'ri-tools-line'
    }
  ];

  const stats = [
    { value: "50+", label: "JNV Selections" },
    { value: "15+", label: "Medical Success Stories" },
    { value: "100+", label: "Academic Achievements" },
    { value: "20+", label: "Training Programs" }
  ];

  const filteredAchievements = activeFilter === 'all' 
    ? achievements 
    : achievements.filter(item => item.category === activeFilter);

  return (
    <>
      {/* Hero Section - Scaled down */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg"
            alt="Achievement Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70"></div>
        </div>
        <div className="relative container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fadeIn">
              Our Achievements
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl animate-fadeInUp animation-delay-300">
              Celebrating our commitment to education and empowerment since 2004.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - More compact */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Filter Buttons - Scrollable on mobile */}
          <div className="overflow-x-auto pb-4 mb-8 -mx-4 px-4 flex md:flex-wrap md:justify-center gap-3">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeFilter === cat.id ? 'primary' : 'secondary'}
                size="sm"
                onClick={() => setActiveFilter(cat.id)}
                icon={<i className={cat.icon}></i>}
                className={`flex-shrink-0 ${
                  activeFilter === cat.id 
                    ? 'bg-blue-700 text-white shadow-lg' 
                    : 'bg-black text-gray-800 hover:bg-gray-50'
                }`}
              >
                {cat.name}
              </Button>
            ))}
          </div>

          {/* Achievement Timeline - More compact spacing */}
          <div className="max-w-4xl mx-auto">
            {Object.entries(
              filteredAchievements.reduce((acc, item) => {
                acc[item.year] = [...(acc[item.year] || []), item];
                return acc;
              }, {})
            ).sort((a, b) => b[0] - a[0]).map(([year, items]) => (
              <div key={year} className="mb-12 last:mb-0">
                {/* Year Header - Smaller */}
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-4xl md:text-5xl font-bold text-blue-600">{year}</h2>
                  <div className="h-px flex-grow bg-blue-200"></div>
                </div>

                {/* Achievement Cards - Responsive grid */}
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  {items.map((achievement, index) => (
                    <div 
                      key={index}
                      className="group relative bg-white rounded-lg p-4 md:p-6 shadow hover:shadow-md transition-all duration-300"
                    >
                      <div className="absolute top-0 left-0 w-1 h-full bg-blue-600 rounded-l-lg"></div>
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                            <i className={`${achievement.icon} text-xl md:text-2xl text-blue-600`}></i>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                            {achievement.title}
                          </h3>
                          <p className="text-sm md:text-base text-gray-600">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section - More compact */}
        <div className="bg-blue-600 mt-12 py-10 md:py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center text-white">
                  <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm md:text-base text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ImageGallery />
    </>
  );
};

export default Achievements;
