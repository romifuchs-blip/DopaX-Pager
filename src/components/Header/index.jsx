import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import dopaXLogoLight from '../../assets/images/dopa-x-logo-light.svg';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleJoinUsClick = (e) => {
    e.preventDefault();
    const element = document.getElementById('join-us');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-brand-navy-dark/80 backdrop-blur-md border-b border-white/10 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-4 flex flex-row items-center justify-between md:justify-start gap-8 flex-wrap">
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
            src={dopaXLogoLight}
            alt="dopa-x Logo"
            className="w-48 md:w-56 h-auto object-contain cursor-pointer"
          />
        </Link>
        <nav className="flex items-center gap-4 text-gray-300 font-outfit text-[18px] font-semibold tracking-wide">
          <a href="/#missing-x" className="text-white hover:text-brand-orange">
            The Missing-X
          </a>
          <span className="text-white font-normal">|</span>
          <Link 
            to="/partners" 
            className={`transition-colors duration-200 hover:text-brand-orange ${
              location.pathname === '/partners' ? 'text-brand-orange font-bold' : ''
            }`}
          >
            Our Partners
          </Link>
          <span className="text-white font-normal">|</span>
          <Link 
            to="/team" 
            className={`transition-colors duration-200 hover:text-brand-orange ${
              location.pathname === '/team' ? 'text-brand-orange font-bold' : ''
            }`}
          >
            Our Team
          </Link>
          <span className="text-white font-normal">|</span>
          <a 
            onClick={handleJoinUsClick} 
            className="cursor-pointer transition-colors duration-200 hover:text-brand-orange"
          >
            Join Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export { Header };
export default Header;
