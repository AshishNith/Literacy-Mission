import React from 'react';

const JoinUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Join Our Mission
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Be part of our journey to promote literacy and education for all
          </p>
        </div>
      </div>

      {/* Volunteer Options */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Ways to Get Involved</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Become a Tutor</h3>
            <p className="text-gray-600">Share your knowledge and help others learn through one-on-one tutoring sessions.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Volunteer</h3>
            <p className="text-gray-600">Support our events, administrative tasks, and community outreach programs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Donate</h3>
            <p className="text-gray-600">Contribute to our cause and help us provide resources to those in need.</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
          <form className="max-w-lg mx-auto">
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input type="text" className="w-full p-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full p-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">How would you like to help?</label>
                <select className="w-full p-2 border rounded-md">
                  <option>Select an option</option>
                  <option>Become a Tutor</option>
                  <option>Volunteer</option>
                  <option>Donate</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea className="w-full p-2 border rounded-md h-32"></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
