import React, { useState } from 'react'
import Button from './Button'

const Achievements = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Achievements' },
    { id: 'academic', name: 'Academic Excellence' },
    { id: 'medical', name: 'Medical Success Stories' },
    { id: 'recognition', name: 'Special Recognition' }
  ];

  const achievements = [
    // Academic Excellence
    {
      category: 'academic',
      year: '2023',
      title: 'Polytechnic Success',
      description: 'Deepak got hired by Suzuki Motor Gujarat during their campus drive from Govt. Polytechnic Hamirpur(Baru).',
      icon: 'ri-graduation-cap-line'
    },
    {
      category: 'academic',
      year: '2018',
      title: 'JNV Selection Success',
      description: 'Six students - Suraj, Rahul, Shivani, Gudia, Pratima and Priyanka got selected in JNV.',
      icon: 'ri-medal-line'
    },
    {
      category: 'academic',
      year: '2013',
      title: 'Engineering Achievement',
      description: 'Chandan Bhagat selected in JEE Mains 2013, secured seat in Mechanical Engineering at NIT Patna.',
      icon: 'ri-building-line'
    },
    // Medical Success Stories
    {
      category: 'medical',
      year: '2016',
      title: 'Successful Heart Surgery',
      description: "Karan's heart surgery performed successfully at Fortis Hospital, Delhi, with help from Rotary Club, Hamirpur.",
      icon: 'ri-heart-pulse-line'
    },
    {
      category: 'medical',
      title: 'Kidney Surgery Success',
      description: '4-year old Arpita successfully operated for multiple kidney cysts at PGIMER Chandigarh.',
      icon: 'ri-hospital-line'
    },
    // Special Recognition
    {
      category: 'recognition',
      year: '2009',
      title: 'Presidential Recognition',
      description: 'Former President Dr. A.P.J Abdul Kalam showed great interest in NITH Literacy Mission activities during his visit.',
      icon: 'ri-award-line'
    }
  ];

  const filteredAchievements = activeFilter === 'all' 
    ? achievements 
    : achievements.filter(achievement => achievement.category === activeFilter);

  return (
    <section className="py-20 bg-gray-50" id="achievements">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Celebrating our students' success stories</p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAchievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <i className={`${achievement.icon} text-2xl text-blue-600`}></i>
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    {achievement.year && (
                      <span className="text-sm font-semibold text-blue-600">
                        {achievement.year}
                      </span>
                    )}
                    <h3 className="text-lg font-bold text-gray-800">
                      {achievement.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-gray-600 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600">50+</div>
            <div className="text-gray-600 mt-1">JNV Selections</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600">15+</div>
            <div className="text-gray-600 mt-1">Medical Success Stories</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600">100+</div>
            <div className="text-gray-600 mt-1">Academic Achievements</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600">10+</div>
            <div className="text-gray-600 mt-1">Special Recognitions</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
