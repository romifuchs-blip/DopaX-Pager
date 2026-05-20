import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleMissingXClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const handleJoinUsClick = (e) => {
    e.preventDefault();
    const element = document.getElementById('join-us');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-6 pb-2 flex flex-row items-center justify-between md:justify-start gap-8 flex-wrap bg-transparent">
      <Link 
        to="/" 
        onClick={(e) => {
          if (location.pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
        className="flex-shrink-0"
      >
        <img
          src="/assets/logos/Dopa-Z-logo light.svg"
          alt="dopa-x Logo"
          className="w-48 md:w-56 h-auto object-contain cursor-pointer"
        />
      </Link>
      <nav className="flex items-center gap-4 text-gray-300 font-outfit text-[18px] font-semibold tracking-wide">
        <a 
          onClick={handleMissingXClick} 
          className="cursor-pointer transition-colors duration-200 hover:text-brand-orange"
        >
          The Missing-X
        </a>
        <span className="text-gray-500">|</span>
        <Link 
          to="/partners" 
          className={`transition-colors duration-200 hover:text-brand-orange ${
            location.pathname === '/partners' ? 'text-brand-orange font-bold' : ''
          }`}
        >
          Our Partners
        </Link>
        <span className="text-gray-500">|</span>
        <Link 
          to="/team" 
          className={`transition-colors duration-200 hover:text-brand-orange ${
            location.pathname === '/team' ? 'text-brand-orange font-bold' : ''
          }`}
        >
          Our Team
        </Link>
        <span className="text-gray-500">|</span>
        <a 
          onClick={handleJoinUsClick} 
          className="cursor-pointer transition-colors duration-200 hover:text-brand-orange"
        >
          Join Us
        </a>
      </nav>
    </header>
  );
};

export default Header;
