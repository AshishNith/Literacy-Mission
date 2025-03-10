import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About Us', to: '/#about' },
    { name: 'Inside Story', to: '/#inside-story' },
    { name: 'Achievements', to: '/achievements' },
    { name: 'More Stories', to: '/#more-stories' },
  ];

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.querySelector(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        {/* Main Navbar */}
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden mr-4"
            >
              <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl ${
                isScrolled ? 'text-dark' : 'text-white'
              }`}></i>
            </button>
            <Link 
              to="/"
              className={`text-xl font-bold ${
                isScrolled ? 'text-dark' : 'text-white'
              }`}
            >
              Literacy Mission
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className={`transition-colors hover:text-secondary ${
                  isScrolled ? 'text-dark' : 'text-white'
                }`}
                onClick={(e) => {
                  if (link.to.includes('#')) {
                    e.preventDefault();
                    scrollToSection(link.to.split('#')[1]);
                  }
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="minimal"
              size="sm"
              className="hidden lg:inline-flex"
              icon={<i className="ri-user-add-line" />}
            >
              Volunteer
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-screen opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        }`}>
          <div className={`py-4 space-y-2 ${
            isScrolled ? 'bg-white' : 'bg-black/90'
          }`}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className={`block w-full text-left px-4 py-2 hover:bg-blue-500/10 ${
                  isScrolled ? 'text-dark' : 'text-white'
                }`}
                onClick={(e) => {
                  if (link.to.includes('#')) {
                    e.preventDefault();
                    scrollToSection(link.to.split('#')[1]);
                  }
                }}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-4 pt-2 border-t border-gray-200/10"></div>
              <Button 
                variant="primary"
                fullWidth
                icon={<i className="ri-user-add-line" />}
              >
                Volunteer
              </Button>
            </div>
          </div>
        </div>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;