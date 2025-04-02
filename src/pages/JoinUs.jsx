import React, { useState } from 'react';
import { motion } from 'framer-motion';

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    message: ''
  });
  const [result, setResult] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult('Sending...');

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });
    formDataToSend.append('access_key', 'afd28b03-8917-48bd-9243-c725e2f54500');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setResult('Form Submitted Successfully');
        setFormData({
          name: '',
          email: '',
          phone: '',
          role: '',
          message: ''
        });
      } else {
        console.log('Error', data);
        setResult(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setResult('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-gray-900 text-white py-28">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Mission</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Be part of our journey to promote literacy and education for all
            </p>
          </motion.div>
        </div>
      </section>

      {/* Volunteer Options */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Ways to Get Involved</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="text-blue-600 mb-4">
              <i className="ri-book-open-line text-4xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4">Become a Tutor</h3>
            <p className="text-gray-600">Share your knowledge and help others learn through one-on-one tutoring sessions.</p>
          </motion.div>
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="text-blue-600 mb-4">
              <i className="ri-team-line text-4xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4">Volunteer</h3>
            <p className="text-gray-600">Support our events, administrative tasks, and community outreach programs.</p>
          </motion.div>
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="text-blue-600 mb-4">
              <i className="ri-heart-line text-4xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4">Donate</h3>
            <p className="text-gray-600">Contribute to our cause and help us provide resources to those in need.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">How would you like to help?</label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select an option</option>
                    <option value="tutor">Become a Tutor</option>
                    <option value="volunteer">Volunteer</option>
                    <option value="donate">Donate</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Submit Application
                </button>
                {result && (
                  <div className={`text-center p-2 rounded ${
                    result === 'Sending...' ? 'bg-yellow-100 text-yellow-700' :
                    result === 'Form Submitted Successfully' ? 'bg-green-100 text-green-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {result}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;
