import React from 'react';

const HelpingHand = () => {
  const supportCategories = {
    faculty: [
      { name: 'Prof. Vinod Yadava', role: 'Director, NIT Hamirpur' },
      { name: 'Prof. I.K. Bhatt', role: 'Ex-Director NIT Hamirpur' },
      { name: 'Prof. Y.D. Sharma', role: 'NIT Hamirpur' },
      { name: 'Dr. Anoop Kumar', role: 'NIT Hamirpur' },
      { name: 'Dr. Kamlesh Dutta', role: 'NIT Hamirpur' },
      { name: 'Dr. Vinod Kapoor', role: 'NIT Hamirpur' },
      { name: 'Dr. V. S. Dogra', role: 'NIT Hamirpur' },
      { name: 'Dr. Chander Prakash', role: 'NIT Hamirpur' },
      { name: 'Mr. Siddhartha Chauhan', role: 'NIT Hamirpur' },
      { name: 'Mr. Amit Kaul', role: 'NIT Hamirpur' },
      { name: 'Mr. R.K. Vats', role: 'NIT Hamirpur' }
    ],
    communities: [
      'Rotary Club, NIT Hamirpur',
      'The Art of Living, NIT Hamirpur',
      'Hindi Samiti, NIT Hamirpur',
      'Nimbus Team, NIT Hamirpur',
      'Hill\'ffair Team, NIT Hamirpur'
    ],
    specialSupport: [
      {
        org: 'Antariksh Mall',
        contribution: 'School fees to Siya & Karishma, students of 11th & 10th standard respectively'
      },
      {
        org: 'Chanakya Coaching',
        contribution: 'Free coaching to student for AIEEE'
      },
      {
        org: 'Shimla Classes',
        contribution: 'Free coaching to Chandan for IIT-JEE and AIEEE'
      },
      {
        org: 'Jyotsna ITI',
        contribution: 'Admission fees'
      },
      {
        org: 'Community Service & CSE Deptt., NIT Hamirpur',
        contribution: 'Free computer courses'
      },
      {
        org: 'Acme Coaching',
        contribution: 'Free coaching to one student for IIT-JEE'
      },
      {
        org: 'Sunrise Medical Store',
        contribution: 'Medicines for children'
      },
      {
        org: 'Him Academy',
        contribution: 'For helping our students in academics'
      },
      {
        org: 'Sai Sweets',
        contribution: 'Fruits for children'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-r from-blue-900 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Helping Hands</h1>
            <blockquote className="text-lg md:text-xl text-gray-300 italic">
              "When you become detached mentally from yourself and concentrate on helping other people with their difficulties, you will be able to cope with your own more effectively. Somehow, the act of self-giving is a personal power-releasing factor."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <p className="text-center text-xl text-gray-600 mb-16 italic">
              We pay our hearty gratitude to the gracious people who came up with their helping hands to support us in this regime
            </p>

            {/* Faculty Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-center">Faculty, NIT Hamirpur</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {supportCategories.faculty.map((member, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="font-bold text-gray-900">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Student Communities Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-center">Student Communities, NIT Hamirpur</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {supportCategories.communities.map((community, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center">
                    <p className="text-gray-800 font-medium">{community}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Support Section */}
            <div>
              <h2 className="text-2xl font-bold mb-8 text-center">Special Support</h2>
              <div className="space-y-4">
                {supportCategories.specialSupport.map((support, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="font-bold text-gray-900 mb-2">{support.org}</h3>
                    <p className="text-gray-600">{support.contribution}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Note */}
            <div className="mt-16 text-center space-y-4 text-gray-600">
              <p>Apart from these, many alumni of NIT Hamirpur support us.</p>
              <p className="font-medium">
                We are also thankful to Our Sponsors for supporting us economically.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpingHand;
