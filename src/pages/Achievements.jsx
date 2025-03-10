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
    <div className="min-h-screen bg-white pt-24"> {/* Changed bg color and increased padding-top */}
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Achievements</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            A testament to our commitment towards education and empowerment since 2004
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap  justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              
              variant={activeFilter === cat.id ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setActiveFilter(cat.id)}
              icon={<i className={cat.icon}></i>}
              className={`${
                activeFilter === cat.id 
                  ? 'bg-blue-600 text-white ' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200 cursor-pointer'
              }`}
            >
              {cat.name}
            </Button>
          ))}
        </div>

        {/* Timeline View */}
        <div className="max-w-4xl mx-auto">
          {Object.entries(
            filteredAchievements.reduce((acc, item) => {
              acc[item.year] = [...(acc[item.year] || []), item];
              return acc;
            }, {})
          ).sort((a, b) => b[0] - a[0]).map(([year, items]) => (
            <div key={year} className="mb-12">
              {/* Year Marker */}
              <div className="flex items-center gap-4 mb-6">
                <div className="text-2xl font-bold text-blue-600">{year}</div>
                <div className="h-px bg-blue-200 flex-grow"></div>
              </div>

              {/* Achievement Cards */}
              <div className="grid gap-6">
                {items.map((achievement, index) => (
                  <div 
                    key={index}
                    className="bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
                  >
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                          <i className={`${achievement.icon} text-2xl text-blue-600`}></i>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900">{achievement.title}</h3>
                        <p className="text-gray-600">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      <ImageGallery />
    </div>
  );
};

export default Achievements;
