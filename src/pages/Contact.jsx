import React from 'react';

const Contact = () => {
  const facultyCoordinators = [
    {
      name: 'Dr. Y.D.Sharma',
      department: 'Dept. Of Mathematics, NIT Hamirpur',
      email: 'yds@nith.ac.in',
      tel: '+91-01972254126',
      mobile: '+91-9418153838'
    },
    {
      name: 'Dr. Anoop Kumar',
      department: 'Dept. Of Mechanical Engg, NIT Hamirpur',
      email: 'anoop@nith.ac.in',
      tel: '+91-01972-304726',
      mobile: '+91-9418009467'
    }
  ];

  const studentContacts = [
    {
      name: 'Praneet Shrivastava',
      email: 'praneet.nitian@gmail.com',
      mobile: '7848070796'
    },
    {
      name: 'Shailendra Kumar',
      email: 'shailendrakumar143728@gmai.com',
      mobile: '9653001364'
    },
    {
      name: 'Jyotika Jakhar',
      email: 'jyotikajakhar1401@gmail.com',
      mobile: '7876328461'
    },
    {
      name: 'Hritik Kumar',
      email: 'hritikkumar20022018@gmail.com',
      mobile: '6299531641'
    },
    {
      name: 'Nikita Silu',
      email: 'nikitasilu09@gmail.com',
      mobile: '9680462320'
    },
    {
      name: 'Akhilesh Kumar Verma',
      email: 'akhilesh7april3@gmail.com',
      mobile: '7458097065'
    },
    {
      name: 'Rakesh Kumar',
      email: 'rakeshkumarjamui32@gmail.com',
      mobile: '9905725161'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 to-gray-900 pt-28 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-gray-300">Get in touch with our team</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Faculty Coordinators Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Faculty Coordinators</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {facultyCoordinators.map((faculty, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{faculty.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{faculty.department}</p>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center space-x-3">
                    <i className="ri-mail-line text-blue-500"></i>
                    <a href={`mailto:${faculty.email}`} className="hover:text-blue-600">
                      {faculty.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="ri-phone-line text-blue-500"></i>
                    <a href={`tel:${faculty.tel}`} className="hover:text-blue-600">
                      {faculty.tel}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="ri-smartphone-line text-blue-500"></i>
                    <a href={`tel:${faculty.mobile}`} className="hover:text-blue-600">
                      {faculty.mobile}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Student Contacts Section */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Student Contacts</h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Email</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Mobile</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {studentContacts.map((student, index) => (
                    <tr 
                      key={index}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                        {student.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-blue-600">
                        <a href={`mailto:${student.email}`} className="hover:text-blue-800">
                          {student.email}
                        </a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                        <a href={`tel:+91${student.mobile}`} className="hover:text-blue-600">
                          +91-{student.mobile}
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
    </div>
  );
};

export default Contact;
