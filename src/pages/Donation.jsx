import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Donation = () => {
  const bankDetails = {
    branch: 'State Bank of India, NIT Hamirpur (H.P.)',
    ifsc: 'SBIN0010367',
    micr: '177002003',
    bankCode: '10367',
    accountName: 'Literacy Mission NITH',
    accountSignatories: 'Meet Vyas and Akash Kumar',
    accountNumber: '30172923495'
  };

  const contacts = [
    {
      name: 'Saumya Asati',
      email: '0000saumya@gmail.com',
      phone: '+91-7999984308'
    },
    {
      name: 'Sai Krishna',
      email: 'revanth.vuruma@yahoo.com',
      phone: '+91-7013583763'
    }
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        toast.success('Copied to clipboard!', {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      })
      .catch(() => {
        toast.error('Failed to copy!', {
          position: "bottom-right",
          autoClose: 2000,
        });
      });
  };

  return (
    <>
      <ToastContainer />
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center bg-gradient-to-r from-blue-900 to-gray-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-repeat opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`
            }}
          ></div>
        </div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Support Our Cause</h1>
            <p className="text-xl text-gray-300">
              Your contribution helps us continue our mission of empowering lives through education
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Bank Details Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Bank Account Details</h2>
              <div className="space-y-4">
                {Object.entries(bankDetails).map(([key, value]) => (
                  <div key={key} className="flex flex-col sm:flex-row sm:items-center py-3 border-b border-gray-100">
                    <div className="sm:w-1/3 text-gray-600 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                    <div className="sm:w-2/3  flex items-center justify-between mt-1 sm:mt-0">
                      <span className="font-medium text-gray-900">{value}</span>
                      <button 
                        onClick={() => copyToClipboard(value)}
                        className="text-blue-600 cursor-pointer hover:text-blue-700"
                      >
                        <i className="ri-file-copy-line"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">For Further Details</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {contacts.map((contact, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="font-bold text-gray-900">{contact.name}</h3>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <i className="ri-mail-line"></i>
                      <a href={`mailto:${contact.email}`} className="hover:text-blue-600">
                        {contact.email}
                      </a>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <i className="ri-phone-line"></i>
                      <a href={`tel:${contact.phone}`} className="hover:text-blue-600">
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-12 space-y-4">
              <p className="text-2xl font-semibold text-gray-800">
                "Education is the most powerful weapon which you can use to change the world"
              </p>
              <p className="text-gray-600 italic">
                - Nelson Mandela
              </p>
              <p className="text-lg text-gray-700 mt-4">
                Your donation today can light up someone's tomorrow. Every contribution, no matter how small, helps us create a brighter, more literate future.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Donation;
