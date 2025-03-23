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
    "2026": [
      { name: 'Aadesh Kumar Bairwa', email: 'aadeshsawant77@gmail.com' },
      { name: 'Ashish Garhwal', email: '22bce026@nith.ac.in' },
      { name: 'Akhilesh Kumar Verma', email: '22bch005@nith.ac.in' },
      { name: 'Anjali Maurya', email: 'mauryaanjali017@gmail.com' },
      { name: 'Esha', email: 'eshakhanoria@gmail.com' },
      { name: 'Harsh Nagar', email: 'harsh043nagar@gmail.com' },
      { name: 'Hritik Kumar', email: '22bce048@nith.ac.in' },
      { name: 'Jagat', email: 'jagats845@gmail.com' },
      { name: 'Jay Pratap', email: '22bch024@nith.ac.in' },
      { name: 'Kashish', email: 'kashish020605@gmail.com' },
      { name: 'Khushi Sharma', email: 'khushi102018@gmail.com' },
      { name: 'Lakshya Choudhary', email: 'Choudhary5102003@gmail.com' },
      { name: 'Nikita Saini', email: 'saininikita1000@gmail.com' },
      { name: 'Nikita Silu', email: 'nikitasilu09@gmail.com' },
      { name: 'Rakesh Kumar', email: 'rakeshkumarjamui32@gmail.com' },
      { name: 'Sachin Kumar', email: 'sachinkumarnag2@gmail.com' },
      { name: 'Samaira Sharma', email: '22bce088@nith.ac.in' },
      { name: 'Sonu Kumar', email: 'sonuqaz2003@gmail.com' },
      { name: 'Shreya Thakur', email: '22bms026@nith.ac.in' },
      { name: 'Tuhina Pegu', email: 'tuhinapegu73@gmail.com' },
      { name: 'Yuvraj', email: '22bce121@nith.ac.in' }
    ],
    "2025": [
      { name: 'Arpit', email: 'arpitsinha289@gmail.com' },
      { name: 'Anshika Jaiswal', email: 'anshikaj611@gmail.com' },
      { name: 'Divyanshu Verma', email: 'divyanshuvermaji@gmail.com' },
      { name: 'Jyotika Jakhar', email: 'jyotikajakhar1401@gmail.com' },
      { name: 'Kaushal Kumar', email: 'kaushalkishore2791@gmail.com' },
      { name: 'Kapil Meena', email: 'Kapilmeena2203@gmail.com' },
      { name: 'Md Shaquib Alam', email: '21bce009@nith.ac.in' },
      { name: 'Mohd Naim', email: 'naimkhan5805@gmail.com' },
      { name: 'Nilu Kumari', email: 'kumarinilu019@gmail.com' },
      { name: 'Praneet Srivastava', email: 'praneet.nitian@gmail.com' },
      { name: 'Sachin Kumar', email: 'sachinkumarnag2@gmail.com' },
      { name: 'Shagun', email: 'angadshagun700@gmail.com' },
      { name: 'Shailendra Kumar', email: 'shailendrakumar143728@gmail.com' },
      { name: 'Shashank Sharma', email: 'shashanksk63672@gmail.com' },
      { name: 'Shashwat Gupta', email: 'shashwatgupta1990gupta@gmail.com' },
      { name: 'Shubham Jaswal', email: 'Jaswalshubham7683@gmail.com' },
      { name: 'Vaibhav Sharma', email: 'vaibhavsharma15eb2003@gmail.com' },
      { name: 'Vishalakshi Raj', email: 'vishalakshiraj8@gmail.com' }
    ]
  };

  const alumniBatches = {
    "2020-24": [
      { name: 'Archit Yadav', email: 'archityadavkarhal@gmail.com' },
      { name: 'Kartikeya Gaur', email: 'kartikeyagaur9@gmail.com' },
      { name: 'Monika Bishnoi', email: 'monikasikar78@gmail.com' },
      { name: 'Pintu Kumar', email: 'pintupn1397@gmail.com' },
      { name: 'Priya Dhiman', email: 'dhimanpriya948@gmail.com' },
      { name: 'Pratiksha Rajput', email: 'pratiksharajput492@gmail.com' },
      { name: 'Rishu Pathak', email: 'pathak22rishu@gmail.com' },
      { name: 'Sachin Gupta', email: 'guptaabhi012003@gmail.com' },
      { name: 'Rohit Kumar', email: 'rohit.2128Singh@gmail.com' },
      { name: 'Sakshi Jaryal', email: 'jaryalsakshi12@gmail.com' },
      { name: 'Samanvay Arya', email: 'aryasamanvay@gmail.com' },
      { name: 'Samyak Jain', email: 'samjain3179@gmail.com' },
      { name: 'Simar Dhingra', email: 'simardhingra03@gmail.com' },
      { name: 'Sugandh Pal', email: 'sugandhpal19@gmail.com' },
      { name: 'Vikas Thakur', email: 'vt378487@gmail.com' },
      { name: 'Virendra Kumar Bishnoi', email: 'vkbishnoi9468@gmail.com' },
      { name: 'Vishal', email: 'vk7821188@gmail.com' }
    ],
    "2019-23": [
      { name: 'Aalok Kumar', email: 'aalokmamtasah@gmail.com' },
      { name: 'Charu', email: 'acharu848@gmail.com' },
      { name: 'Kuldeep Soni', email: 'ks2596050@gmail.com' },
      { name: 'Riya Chauhan', email: 'chauhanriya2002@gmail.com' },
      { name: 'Samyak Jain', email: 'jainsamyak.com@gmail.com' },
      { name: 'Amisha Syal', email: 'syalamisha4@gmail.com' },
      { name: 'Rushil Koundal', email: 'rushilkoundal1611@gmail.com' }
    ],
    "2018-22": [
      { name: 'Abhishek Meena', email: 'rkbyadwal2001@gmail.com' },
      { name: 'Aman Kumar Singh', email: 'amankumarsingh600@gmail.com' },
      { name: 'Chitresh Dhaked', email: 'chitreshdhaked22@gmail.com' },
      { name: 'Kawish Masood', email: 'kawishm@gmail.com' },
      { name: 'Raju Yadav', email: 'rajuyadav14220000@gmail.com' },
      { name: 'Ritik Kumar', email: 'krishur03@gmail.com' },
      { name: 'Sudhir barala', email: 'sudhirbarala56@gmail.com' },
      { name: 'Vishal Sharma', email: 'vishalavasthi77@gmail.com' },
      { name: 'Yash', email: 'mathasyash@gmail.com' },
      { name: 'Radhika', email: 'radhika.bhatti050523@gmail.com' },
      { name: 'Yachana Arora', email: 'yachanaarora17@gmail.com' },
      { name: 'Aniket', email: 'aniket.negi03@gmail.com' },
      { name: 'Sachin Bhardwaj', email: 'sachinbhardwaj4022@gmail.com' },
      { name: 'Vikas Kumar Gupta', email: 'kumarvikas1209139@gmail.com' },
      { name: 'Tamanna Rana', email: 'tamannarana922@gmail.com' }
    ],
    "2017-21": [
      { name: 'Monish Jaiswal', email: 'monishjaiswal64@gmail.com' },
      { name: 'Piyush Dangayach', email: 'Piyushdangayach8@gmail.com' },
      { name: 'Keshav Bhatt', email: 'keshav17359@gmail.com' },
      { name: 'Vishakha Jangir', email: 'vishakhajangir618@gmail.com' },
      { name: 'Shivani Garg', email: 'shivani1999garg@gmail.com' },
      { name: 'Vikas Kumar', email: 'kumarvk5jul@gmail.com' },
      { name: 'Meet Vyas', email: 'vyasmet@gmail.com' },
      { name: 'Aman Verma', email: 'aman99stp@gmail.com' },
      { name: 'Yogesh Sharma', email: 'yogesh.iiitu@gmail.com' },
      { name: 'Akash Kumar', email: 'akash.kr0925@gmail.com' },
      { name: 'Amarjeet Kumar', email: 'amarjeetkur99@gmail.com' },
      { name: 'Piyush Yadav', email: 'piyush012k@gmail.com' },
      { name: 'Dheeraj Kumar', email: 'Yadavdheeraj197@gmail.com' },
      { name: 'Kamal Kishor', email: 'kamalp2207@gmail.com' },
      { name: 'Anurag Meena', email: 'anuraggomladu2001@gmail.com' },
      { name: 'Ajay Singh', email: 'ajsingh7055@gmail.com' },
      { name: 'Akshika Sharma', email: 'akshikasharma209@gmail.com' },
      { name: 'Ravi Kant', email: 'ravi15012000@gmail.com' },
      { name: 'Aradhita Sharma', email: 'aradhita21@gmail.com' },
      { name: 'Komal Negi', email: 'Komalnegi130@gmail.com' },
      { name: 'Aditya Nath Suman', email: 'adityanathsuman13@gmail.com' },
      { name: 'Arvind Kumar', email: 'barvind9898@gmail.com' },
      { name: 'Shivani Garg', email: 'shivani1999garg@gmail.com' },
      { name: 'Neha Sharma', email: 'ns3075203@gmail.com' },
      { name: 'Srajika Gupta', email: 'srajika49@gmail.com' },
      { name: 'Priyanka Kumar', email: 'priyanka109kumar@gmail.com' },
      { name: 'Namisha Goyal', email: 'namishagoyal99@gmail.com' },
      { name: 'Harsh Kumar Gupta', email: 'harshgupta0203@gmail.com' },
      { name: 'Kushagra Pal', email: 'kushagrapal9798@gmail.com' },
      { name: 'Abhishek Kumar', email: 'akumar3016@gmail.com' },
      { name: 'Mohit Sharma', email: 'ms4684348@gmail.com' },
      { name: 'Peeyush Singhal', email: 'singhalpeeyush61@gmail.com' },
      { name: 'Charu Sehgal', email: 'charusehgal27@gmail.com' },
      { name: 'Abhishek Gaurav', email: 'abhishek15gaurav@gmail.com' },
      { name: 'Ritesh Singh', email: 'risi.vns@gmail.com' },
      { name: 'Garvita Rana', email: 'garvitarana@gmail.com' }
    ],
    "2016-20": [
      { name: 'Anshul Ameta', email: 'anshulameta@gmail.com' },
      { name: 'Satyam Chandra', email: 'truthofmoon@gmail.com' },
      { name: 'Md. Aftab Raini', email: 'aftabraini8090@gmail.com' },
      { name: 'Chandranshu Malhotra', email: 'chandranshumalhotra@gmail.com' },
      { name: 'Ankit Kumar', email: 'ankit.2official@gmail.com' },
      { name: 'Abhay Kumar', email: 'abhaykrsingh16.17@gmail.com' },
      { name: 'Saumya Asati', email: '0000saumya@gmail.com' },
      { name: 'Akshita Arora', email: 'akshitaarora0000@gmail.com' },
      { name: 'Sakshi Goyal', email: 'sakshigoyal3499@gmail.com' },
      { name: 'Krishna Odedara', email: 'krishnaodedara30@gmail.com' },
      { name: 'Muskan Jhunjhunwalla', email: 'muskan20031998@gmail.com' },
      { name: 'Tania Verma', email: 'tania.vr3@gmail.com' },
      { name: 'Pallvi Dogra', email: 'pallvidogra19@gmail.com' },
      { name: 'Komal Thakur', email: 'komal98thakur@gmail.com' },
      { name: 'Sai Krishna', email: 'revanth.vuruma@yahoo.com' },
      { name: 'Tarun Kumar Jaiswal', email: 'tkj012@gmail.com' },
      { name: 'Sachin Gautam', email: 'sachinsachin71997@gmail.com' },
      { name: 'Dhiraj Kumar', email: 'dhirajjindal6@gmail.com' },
      { name: 'Arti Dhiman', email: 'artyd678@gmail.com' },
      { name: 'Prathibha Rehalia', email: 'pratibharehalia@gmail.com' },
      { name: 'Shubham Kumar Gupta', email: 'shubham15199@gmail.com' },
      { name: 'Ashruti Singh', email: '9ashruti9@gmail.com' },
      { name: 'Ankit Shyoran', email: 'ankitshyorannit@gmail.com' },
      { name: 'Payal Sharma', email: 'sharmapayal10100@gmail.com' },
      { name: 'Lavish Goyal', email: 'levisgoel98@gmail.com' },
      { name: 'Arvind Agrawal', email: 'arvindagrawal257@gmail.com' },
      { name: 'Shubham Vijay', email: 'shubhamvijay142@gmail.com' },
      { name: 'Mayank Mittal', email: 'mittalmayank366@gmail.com' },
      { name: 'Rajat Pratap Singh', email: 'rpratapsingh296@gmail.com' },
      { name: 'Adarsh Pal', email: 'aadypal.479@gmail.com' },
      { name: 'Prashant Arora', email: 'prashantarora873@gmail.com' },
      { name: 'Kanika Sharma', email: 'sharmakanika1105@gmail.com' },
      { name: 'Veer Katyal Singh', email: 'veerkatyal77@gmail.com' }
    ],
    "2015-19": [
      { name: 'Aman Jain', email: 'jainamanranu@gmail.com' },
      { name: 'Vibhor Garg', email: 'vibhorg69@gmail.com' },
      { name: 'Gaurav Rajpurohit', email: 'gauravr2101@gmail.com' },
      { name: 'Abhishek Sharma', email: 'abusharma16197@gmail.com' },
      { name: 'Shubham Vijay', email: 'vshubham020@gmail.com' },
      { name: 'Vishakha Yadav', email: 'yadavvis26@gmail.com' },
      { name: 'Khushboo Gupta', email: 'khushinith238@gmail.com' },
      { name: 'Shiksha Nayak', email: 'shikshanayak111@gmail.com' },
      { name: 'Akshit Sharma', email: 'akshitsharma444@gmail.com' },
      { name: 'Shubham Jain', email: 'shubham.jain.nahar@gmail.com' },
      { name: 'Abhinav Anand', email: 'anandabhinav16@gmail.com' },
      { name: 'Diksha Bhateja', email: 'dikshabhateja23@gmail.com' },
      { name: 'Vikrant Sharma', email: 'vikrants164@gmail.com' }
    ]
  };

  const batchOptions = [
    { value: '2020-24', label: 'B.Tech 2020-24' },
    { value: '2019-23', label: 'B.Tech 2019-23' },
    { value: '2018-22', label: 'B.Tech 2018-22' },
    { value: '2017-21', label: 'B.Tech 2017-21' },
    { value: '2016-20', label: 'B.Tech 2016-20' },
    { value: '2015-19', label: 'B.Tech 2015-19' }
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
          
          {/* Account Details Section */}
          <div className="max-w-6xl mx-auto mt-20">
            <h2 className="text-3xl font-bold text-center mb-8">Account Details</h2>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">Bank Details</h3>
                  <ul className="space-y-2">
                    <li><span className="font-semibold">Branch:</span> State Bank of India, NIT Hamirpur (H.P.)</li>
                    <li><span className="font-semibold">IFSC Code:</span> SBIN0010367</li>
                    <li><span className="font-semibold">MICR Code:</span> 177002003</li>
                    <li><span className="font-semibold">Bank Code:</span> 10367</li>
                    <li><span className="font-semibold">Account Name:</span> Literacy Mission NITH</li>
                    <li><span className="font-semibold">Account Number:</span> 30172923495</li>
                    <li><span className="font-semibold">Account Signatories:</span> Anjali Maurya and Jay Pratap</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Contact Details</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold">Shubham Jaswal</p>
                      <a href="mailto:Jaswalshubham7683@gmail.com" className="text-blue-600 hover:underline block">Jaswalshubham7683@gmail.com</a>
                      <a href="tel:+919805331020" className="text-blue-600 hover:underline block">+91-9805331020</a>
                    </div>
                    <div>
                      <p className="font-semibold">Nilu Kumari</p>
                      <a href="mailto:kumarinilu019@gmail.com" className="text-blue-600 hover:underline block">kumarinilu019@gmail.com</a>
                      <a href="tel:+918235256750" className="text-blue-600 hover:underline block">+91-8235256750</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teams;
