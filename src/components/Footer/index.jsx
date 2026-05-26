import React from 'react';
import dopaXLogoDark from '../../assets/images/dopa-x-logo-dark.svg';

const Footer = () => {
  return (
    <footer className="w-full bg-[#EAEAF5] py-8 border-t border-gray-300">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 flex flex-row justify-center items-center gap-x-4 md:gap-x-6 gap-y-4 flex-wrap text-brand-navy-dark text-[15px] font-outfit font-semibold tracking-wide">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <img 
            src={dopaXLogoDark} 
            alt="dopa-x Logo" 
            className="h-8 md:h-10 w-auto object-contain" 
          />
        </div>
        
        {/* Website */}
        <a href="https://dopa-x.org" className="hover:text-brand-orange transition-colors">
          dopa-x.org
        </a>
        
        {/* Separator 1 */}
        <span className="text-gray-400 font-light">|</span>
        
        {/* Email */}
        <a href="mailto:hello@dopa-x.org" className="hover:text-brand-orange transition-colors">
          hello@dopa-x.org
        </a>
        
        {/* Separator 2 */}
        <span className="text-gray-400 font-light">|</span>
        
        {/* Phone */}
        <a href="tel:+972542204821" className="hover:text-brand-orange transition-colors">
          +972 54-220-4821
        </a>
        
        {/* Separator 3 */}
        <span className="text-gray-400 font-light">|</span>
        
        {/* LinkedIn */}
        <a href="https://linkedin.com/company/dopa-x" className="flex items-center gap-2 hover:text-brand-orange transition-colors">
          <span className="font-bold font-rajdhani text-2xl leading-none pt-[2px]">in</span>
          <span>dopa-x</span>
        </a>
        
      </div>
    </footer>
  );
};

export { Footer };
export default Footer;
