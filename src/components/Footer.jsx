import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Inside Story', href: '#inside-story' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Financial Docs', href: '#financial-docs' }
  ];

  const contactInfo = {
    address: 'NIT Hamirpur, Himachal Pradesh 177005',
    email: 'literacy_mission@nith.ac.in',
    phone: '+91 XXXXXXXXXX'
  };

  const socialLinks = [
    { name: 'Facebook', icon: 'ri-facebook-fill', href: '#' },
    { name: 'Instagram', icon: 'ri-instagram-line', href: '#' },
    { name: 'LinkedIn', icon: 'ri-linkedin-fill', href: '#' },
    { name: 'YouTube', icon: 'ri-youtube-fill', href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Literacy Mission</h3>
            <p className="text-gray-400 leading-relaxed">
              Empowering lives through education since 2004. Join us in our mission to create a brighter future.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  <i className={`${link.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors flex items-center group"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href).scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <i className="ri-arrow-right-s-line mr-2 transition-transform group-hover:translate-x-1"></i>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <i className="ri-map-pin-line text-lg mt-1"></i>
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="ri-mail-line text-lg"></i>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <i className="ri-phone-line text-lg"></i>
                <span>{contactInfo.phone}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-gray-800 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-500 hover:text-blue-400"
                >
                  <i className="ri-send-plane-fill"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">
              © {currentYear} Literacy Mission NITH. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
