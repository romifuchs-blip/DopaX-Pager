import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import dopaXLogoLight from '../../assets/images/dopa-x-logo-light.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8">
        
        {/* Top Row: Logo and Mobile Menu Toggle */}
        <div className="flex flex-row items-center justify-between w-full md:w-auto flex-shrink-0">
          <Link 
            to="/" 
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
              setIsOpen(false);
            }}
            className="flex-shrink-0"
          >
            <img
              src={dopaXLogoLight}
              alt="dopa-x Logo"
              className="w-48 md:w-56 h-auto object-contain cursor-pointer"
            />
          </Link>
          
          {/* Hamburger Menu Icon for Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-brand-orange md:hidden focus:outline-none p-2"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Desktop Navigation Link Row */}
        <nav className="hidden md:flex items-center gap-4 text-gray-300 font-outfit text-[18px] font-semibold tracking-wide">
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

        {/* Collapsible Mobile Navigation Menu */}
        <nav className={`${isOpen ? 'flex' : 'hidden'} md:hidden w-full flex-col gap-3 mt-2 pb-2 border-t border-white/10 pt-4 font-outfit text-[18px] font-semibold tracking-wide text-gray-300`}>
          <a 
            href="/#missing-x" 
            onClick={() => setIsOpen(false)} 
            className="text-white hover:text-brand-orange py-1 text-left w-full"
          >
            The Missing-X
          </a>
          <Link 
            to="/partners" 
            onClick={() => setIsOpen(false)} 
            className={`py-1 text-left w-full hover:text-brand-orange ${
              location.pathname === '/partners' ? 'text-brand-orange font-bold' : 'text-white'
            }`}
          >
            Our Partners
          </Link>
          <Link 
            to="/team" 
            onClick={() => setIsOpen(false)} 
            className={`py-1 text-left w-full hover:text-brand-orange ${
              location.pathname === '/team' ? 'text-brand-orange font-bold' : 'text-white'
            }`}
          >
            Our Team
          </Link>
          <a 
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);
              setTimeout(() => {
                const element = document.getElementById('join-us');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }} 
            className="cursor-pointer text-white hover:text-brand-orange py-1 text-left w-full"
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
