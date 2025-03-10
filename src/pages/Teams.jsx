import React, { useState } from 'react';

const Teams = () => {
  const [activeTab, setActiveTab] = useState('current');
  const [activeAlumniBatch, setActiveAlumniBatch] = useState('2015-19');

  const faculty = {
    leadership: [
      { name: 'Prof. Lalit Kumar Awasthi', role: 'Director, NIT Hamirpur' },
      { name: 'Dr. Yogesh Gupta', role: 'Registrar, NIT Hamirpur' }
    ],
    coordinators: [
      { name: 'Dr. Y.D. Sharma', role: 'Faculty Coordinator' },
      { name: 'Dr. Anoop Kumar', role: 'Faculty Coordinator' }
    ],
    supporters: [
      'Dr. Kamlesh Dutta',
      'Dr. Vijay Shankar Dogra',
      'Dr. Chander Prakash',
      'Dr. Vinod Kapoor',
      'Mr. Suresh Dhiman',
      'Mr. Nitin Paliwal',
      'Dr. Sumit Arora'
    ]
  };

  const currentBatches = {
    "2021": [
      { name: 'Monish Jaiswal', email: 'monishjaiswal64@gmail.com' },
      { name: 'Piyush Dangayach', email: 'Piyushdangayach8@gmail.com' },
      // ...more students
    ],
    "2020": [
      { name: 'Anshul Ameta', email: 'anshulameta@gmail.com' },
      { name: 'Satyam Chandra', email: 'truthofmoon@gmail.com' },
      // ...more students
    ]
  };

  const alumniBatches = {
    "2015-19": [
      { name: 'Aman Jain', email: 'jainamanranu@gmail.com' },
      // ...more alumni
    ],
    "2014-18": [
      { name: 'Shubham Saini', email: 'sainishubham497@gmail.com' },
      // ...more alumni
    ],
    // Add all other batches similarly
  };

  const batchOptions = [
    { value: '2015-19', label: 'B.Tech 2015-19' },
    { value: '2014-18', label: 'B.Tech 2014-18' },
    // Add all batch options
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-r from-blue-900 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
            <blockquote className="text-lg md:text-xl text-gray-300 italic">
              "Never Worry About Numbers. Help One Person At A Time, And Always Start With The Person Next to You."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Faculty Section */}
          <div className="max-w-6xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Faculty</h2>
            
            {/* Leadership */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {faculty.leadership.map((member, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600">{member.role}</p>
                </div>
              ))}
            </div>

            {/* Faculty Coordinators */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {faculty.coordinators.map((member, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
                  <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>

            {/* Faculty Supporters */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-bold mb-6 text-center">Faculty Supporters</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {faculty.supporters.map((name, index) => (
                  <div key={index} className="text-center p-4 rounded-lg bg-gray-50">
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Volunteers Section */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Team Members</h2>
            
            {/* Tabs */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex rounded-md shadow-sm">
                <button
                  onClick={() => setActiveTab('current')}
                  className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                    activeTab === 'current'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Current Batches
                </button>
                <button
                  onClick={() => setActiveTab('alumni')}
                  className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                    activeTab === 'alumni'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  Alumni
                </button>
              </div>
            </div>

            {/* Batch Selector for Alumni */}
            {activeTab === 'alumni' && (
              <div className="mb-8">
                <select
                  value={activeAlumniBatch}
                  onChange={(e) => setActiveAlumniBatch(e.target.value)}
                  className="block mx-auto w-full max-w-xs px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  {batchOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Member List */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {(activeTab === 'current' ? 
                      Object.values(currentBatches).flat() : 
                      alumniBatches[activeAlumniBatch]
                    ).map((member, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {member.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                          <a href={`mailto:${member.email}`} className="hover:underline">
                            {member.email}
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    
  );
};

export default Teams;
