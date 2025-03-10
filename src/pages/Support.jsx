import React from 'react';

const Support = () => {
  const initiatives = [
    {
      title: "Educational Support",
      description: "Daily 1.5 hours of teaching to help kids excel in their studies.",
      icon: "📚"
    },
    {
      title: "Physical Fitness",
      description: "Daily yoga classes and Sunday sports activities. Protein-rich supplements provided after yoga.",
      icon: "🧘‍♂️"
    },
    {
      title: "Financial Aid",
      description: "School fees assistance for children from low-income families.",
      icon: "💰"
    },
    {
      title: "Educational Materials",
      description: "Free books, pencils, pens, notebooks, and other stationery materials.",
      icon: "✏️"
    },
    {
      title: "Medical Support",
      description: "Medical assistance for children whose parents cannot afford healthcare expenses.",
      icon: "🏥"
    },
    {
      title: "Essential Supplies",
      description: "Distribution of clothes, woollens, and other necessities donated by NITH community.",
      icon: "👕"
    },
    {
      title: "Nutritional Support",
      description: "Bi-weekly distribution of sweets, fruits, and refreshments for motivation and well-being.",
      icon: "🍎"
    },
    {
      title: "Social Awareness",
      description: "Family planning awareness and community development initiatives for slum dwellers.",
      icon: "👥"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-r from-blue-900 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Support</h1>
            <blockquote className="text-lg md:text-xl text-gray-300 italic">
              "Never Worry About Numbers. Help One Person At A Time, And Always Start With The Person Near You."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {initiatives.map((initiative, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
                  <div className="flex items-start">
                    <span className="text-3xl mr-4">{initiative.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {initiative.title}
                      </h3>
                      <p className="text-gray-600">
                        {initiative.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
