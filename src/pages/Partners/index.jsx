import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Import graphics and backgrounds
import partnersHeaderBg from '../../assets/backgrounds/page-header-bg.svg';
import builtByBg from '../../assets/backgrounds/built-by-bg.svg';
import orangeSquiggle from '../../assets/icons/partners-underline.svg';

// Import institutional partner logos
import ifmLogo from '../../assets/images/ifm-logo.png';
import deepdubLogo from '../../assets/images/deepdub-logo.png';
import ironNationLogo from '../../assets/images/iron-nation-logo.png';
import eyecucyLogo from '../../assets/images/eyecucy-logo.png';
import vocavibeLogo from '../../assets/images/vocavibe-logo.png';
import orocaLogo from '../../assets/images/oroca-logo.png';

// Import scientific advisory board avatars
import chenLinchevskiPic from '../../assets/images/chen-linchevski.svg';
import profMoussaYoudimPic from '../../assets/images/moussa-youdim.svg';
import profHagaiBergmanPic from '../../assets/images/hagai-bergman.svg';
import atanGrossPic from '../../assets/images/atan-gross.png';
import shayBenShacharPic from '../../assets/images/shay-ben-shachar.jpg';

const Partners = () => {
  const location = useLocation();

  useEffect(() => {
    // Always scroll to top of page when route loads
    window.scrollTo(0, 0);
  }, [location]);

  const partners = [
    { name: 'IFM', logo: ifmLogo, className: 'h-10 sm:h-14 md:h-16 lg:h-20 max-h-20' },
    { name: 'Deepdub', logo: deepdubLogo, className: 'h-7 sm:h-10 md:h-12 lg:h-16 max-h-16' },
    { name: 'Iron Nation', logo: ironNationLogo, className: 'h-6 sm:h-8 md:h-10 lg:h-12 max-h-12' },
    { name: 'Eyecucy', logo: eyecucyLogo, className: 'h-8 sm:h-12 md:h-14 lg:h-18 max-h-18' },
    { name: 'Vocavibe', logo: vocavibeLogo, className: 'h-7 sm:h-10 md:h-12 lg:h-16 max-h-16' },
    { name: 'Oroca', logo: orocaLogo, className: 'h-8 sm:h-12 md:h-14 lg:h-18 max-h-18' }
  ];

  const boardMembers = [
    {
      name: 'CHEN LINCHEVSKI',
      image: chenLinchevskiPic,
      bio: 'Expert in positioning and venture building; supports fundraising, narrative, and partnerships',
      linkedinText: 'Chen Linchevski',
      linkedinUrl: 'https://www.linkedin.com/in/clinchevski/'
    },
    {
      name: 'PROF. MOUSSA YOUDIM',
      image: profMoussaYoudimPic,
      bio: 'Pioneer in PD drug development (Azilect); world-renowned expert in iron metabolism and neuroprotection.',
      linkedinText: 'Prof. Moussa Youdim',
      linkedinUrl: 'https://www.linkedin.com/in/moussa-youdim-025388141/'
    },
    {
      name: 'PROF. HAGAI BERGMAN',
      image: profHagaiBergmanPic,
      bio: 'Leading expert in Deep Brain Stimulation (DBS) and brain physiology; fundamental for understanding PD signals.',
      linkedinText: 'Prof. Hagai Bergman',
      linkedinUrl: 'https://www.linkedin.com/in/hagai-bergman-3234381a/'
    },
    {
      name: 'PROF. ATAN GROSS',
      image: atanGrossPic,
      bio: 'Leading mitochondrial biologist at the Weizmann Institute; pioneering research on energy failure in dopaminergic cells as a root cause of Parkinson’s.',
      linkedinText: 'Prof. Atan Gross',
      linkedinUrl: 'https://www.linkedin.com/in/atan-gross-b5516774?utm_source=share_via&utm_content=profile&utm_medium=member_ios'
    },
    {
      name: 'PROF. SHAY BEN-SHACHAR',
      image: shayBenShacharPic,
      bio: 'Head of Precision Medicine & Genomics at Clalit Innovation.',
      linkedinText: 'Prof. Shay Ben-Shachar',
      linkedinUrl: 'https://www.linkedin.com/in/shay-ben-shachar-aa9470195?utm_source=share_via&utm_content=profile&utm_medium=member_ios'
    }
  ];

  return (
    <div className="w-full flex flex-col">
      {/* Top Header Section */}
      <div 
        className="relative w-full bg-brand-navy-dark text-white pt-40 pb-20 md:pt-48 md:pb-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${partnersHeaderBg}")` }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-left flex flex-col items-start">
          <h1 className="text-5xl md:text-6xl font-rajdhani font-bold tracking-wide mb-6">Our Partners</h1>
          <div className="flex flex-col items-start max-w-3xl">
            <p className="text-lg md:text-xl font-outfit text-gray-200 leading-relaxed m-0 font-light">
              The missing X cannot be decoded alone. These are the organizations and researchers already building with us.
            </p>
            <img 
              src={orangeSquiggle} 
              alt="Orange accent squiggle" 
              className="mt-4 w-40 md:w-48 h-auto object-contain select-none"
            />
          </div>
        </div>
      </div>

      {/* Middle Content Section */}
      <section 
        className="w-full py-12 md:py-16 bg-cover bg-center relative bg-no-repeat"
        style={{ backgroundImage: `url(${builtByBg})` }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 flex flex-col">
          
          {/* Institutional Partners Sub-section */}
          <div className="w-full mb-10">
            <h2 className="text-3xl md:text-4xl font-rajdhani font-bold text-center text-brand-navy-dark mb-6">
              Institutional Partners
            </h2>
            
            {/* Logos Row */}
            <div className="w-full max-w-7xl mx-auto px-4">
              <div className="flex flex-row flex-nowrap items-center justify-center gap-x-3 sm:gap-x-6 md:gap-x-10 lg:gap-x-12 w-full">
                {partners.map((partner, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-center shrink flex-shrink transition-all duration-300 hover:scale-105"
                  >
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`} 
                      className={`${partner.className} w-auto object-contain shrink`}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Divider */}
            <hr className="w-full max-w-4xl mx-auto border-t-2 border-brand-blue opacity-30 mt-8" />
          </div>

          {/* Scientific Advisory Board Sub-section */}
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl font-rajdhani font-bold text-center text-brand-navy-dark mb-8">
              Scientific Advisory Board
            </h2>
            
            {/* Cards Container */}
            <div className="flex flex-col gap-6 max-w-3xl mx-auto">
              {boardMembers.map((member, index) => (
                <div 
                  key={index}
                  className="w-full border border-brand-navy rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start text-left bg-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* Left: Avatar */}
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border border-brand-navy/10 bg-white flex-shrink-0 shadow-sm flex items-center justify-center">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Right: Info */}
                  <div className="flex-grow flex flex-col justify-between items-start text-left">
                    <h3 className="font-rajdhani text-xl md:text-2xl font-bold uppercase tracking-wider text-brand-navy-dark leading-tight mb-2">
                      {member.name}
                    </h3>
                    <p className="font-outfit text-[15px] md:text-[16px] text-brand-navy-dark/85 leading-relaxed font-light mb-4">
                      {member.bio}
                    </p>
                    
                    {/* LinkedIn Link */}
                    <a 
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[15px] font-outfit text-brand-blue hover:text-brand-orange transition-colors font-semibold group"
                    >
                      <svg 
                        className="w-5 h-5 fill-current text-brand-blue group-hover:text-brand-orange transition-colors" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      <span className="underline decoration-solid decoration-1 underline-offset-4">
                        {member.linkedinText}
                      </span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
          
        </div>
      </section>
    </div>
  );
};

export { Partners };
export default Partners;
