import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const navLinks = [
    { name: 'Activities', subMenu: [
      { name: 'GyanManthan', to: '/gyanmanthan' },
      { name: 'Spardha', to: '/spardha' },
      { name: 'Prayas', to: '/prayas' }
    ]},
    { name: 'Achievements', to: '/achievements' },
    { name: 'Make A Donation', to: '/donation' },
    { name: 'Contact Us', to: '/contact' },
    { name: 'More', subMenu: [
      { name: 'NIT Hamirpur', to: 'https://nith.ac.in', external: true },
      { name: 'Helping Hands', to: '/helping-hands' },
      { name: 'Sponsors', to: '/sponsors' },
      { name: 'In Media', to: '/media' },
      { name: 'Volunteers', to: '/teams' },
      { name: 'Support', to: '/support' }
    ]}
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrolledDown = currentScrollPos > 20;
      
      // Show/hide navbar based on scroll direction
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setIsScrolled(isScrolledDown);
      
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.querySelector(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.querySelector(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
    }
  };

  const handleMouseLeave = () => {
    setDropdownTimeout(setTimeout(() => {
      setActiveDropdown(null);
    }, 3000));
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/"
            className="flex items-center space-x-2"
          >
            <img 
              src="/assets/logo.png" 
              alt="Logo" 
              className="h-10 w-auto rounded-full"
            />
            <span className={`text-xl font-bold ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Literacy Mission
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {link.subMenu ? (
                  <>
                    <button className={`py-2 text-sm font-medium transition-colors flex items-center
                      ${isScrolled ? 'text-gray-700' : 'text-white'}
                      hover:text-blue-600
                    `}>
                      {link.name}
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {activeDropdown === index && (
                      <div className="absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1">
                          {link.subMenu.map((subItem, subIndex) => (
                            subItem.external ? (
                              <a
                                key={subIndex}
                                href={subItem.to}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                {subItem.name}
                              </a>
                            ) : (
                              <Link
                                key={subIndex}
                                to={subItem.to}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                {subItem.name}
                              </Link>
                            )
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.to}
                    className={`py-2 text-sm font-medium transition-colors
                      ${isScrolled ? 'text-gray-700' : 'text-white'}
                      hover:text-blue-600
                    `}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all
              ${isScrolled 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
              }
            `}>
              Join Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            <div className={`w-6 h-5 relative flex flex-col justify-between transform transition-all duration-300 ${
              isMenuOpen ? 'rotate-180' : ''
            }`}>
              <span className={`w-full h-0.5 transform transition-all duration-300 ${
                isScrolled ? 'bg-gray-900' : 'bg-white'
              } ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 transform transition-all duration-300 ${
                isScrolled ? 'bg-gray-900' : 'bg-white'
              } ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 transform transition-all duration-300 ${
                isScrolled ? 'bg-gray-900' : 'bg-white'
              } ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className={`py-4 space-y-2 ${isScrolled ? 'bg-white' : 'bg-black/90'}`}>
            {navLinks.map((link, index) => (
              <div key={index}>
                {link.subMenu ? (
                  <>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                      className={`flex items-center justify-between w-full px-4 py-3 text-sm ${
                        isScrolled ? 'text-gray-700' : 'text-white'
                      }`}
                    >
                      {link.name}
                      <svg className={`w-4 h-4 transform transition-transform ${
                        activeDropdown === index ? 'rotate-180' : ''
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {activeDropdown === index && (
                      <div className="bg-gray-50 py-2">
                        {link.subMenu.map((subItem, subIndex) => (
                          subItem.external ? (
                            <a
                              key={subIndex}
                              href={subItem.to}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              {subItem.name}
                            </a>
                          ) : (
                            <Link
                              key={subIndex}
                              to={subItem.to}
                              className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              {subItem.name}
                            </Link>
                          )
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.to}
                    className={`block px-4 py-3 text-sm ${
                      isScrolled ? 'text-gray-700' : 'text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="px-4 pt-4 border-t border-gray-200/10"></div>
            <button className="w-full py-3 text-center text-sm font-medium bg-blue-600 text-white rounded-full hover:bg-blue-700">
              Join Us
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;