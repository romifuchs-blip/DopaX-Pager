import React, { useState } from 'react';
import { motion } from 'framer-motion';
import headerBg from '../assets/header-bg.svg';
import line4 from '../assets/Line4.svg';
const Hero = () => {
  const [bgLoaded, setBgLoaded] = useState(false);
  return (
    <section className="relative w-full bg-brand-navy-dark text-white min-h-screen overflow-hidden flex flex-col">
      <img src={headerBg} className={`absolute inset-0 w-full h-full object-cover pointer-events-none z-0 transition-opacity duration-1000 ${bgLoaded ? 'opacity-100' : 'opacity-0'}`} alt="hero bg" onLoad={() => setBgLoaded(true)} />



      {/* Fallback placeholder if image is missing */}
      <div className="absolute right-0 top-0 h-full w-[40%] pointer-events-none"></div>

      {/* Top Header/Navigation Container */}
      <header className="relative z-20 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-6 pb-2 flex flex-row items-center justify-between md:justify-start gap-8 flex-wrap">
        <img
          src="/assets/logos/Dopa-Z-logo light.svg"
          alt="dopa-x Logo"
          className="w-48 md:w-56 h-auto object-contain"
        />
        <nav className="flex items-center gap-4 text-gray-300 font-outfit text-[18px] font-semibold tracking-wide">
          <a href="#missing-x" className="transition-colors duration-200 hover:text-brand-orange">
            The Missing-X
          </a>
          <span className="text-gray-500">|</span>
          <a href="#partners" className="transition-colors duration-200 hover:text-brand-orange">
            Our Partners
          </a>
          <span className="text-gray-500">|</span>
          <a href="#team" className="transition-colors duration-200 hover:text-brand-orange">
            Our Team
          </a>
          <span className="text-gray-500">|</span>
          <a href="#join-us" className="transition-colors duration-200 hover:text-brand-orange">
            Join Us
          </a>
        </nav>
      </header>

      {/* Main Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={bgLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-6 lg:py-10 flex flex-col items-start text-left flex-grow justify-center"
      >

        {/* Text Width Constraint */}
        <div className="w-full lg:w-3/4 xl:w-2/3 flex flex-col items-start text-left gap-4 lg:gap-5">

          {/* Headline Container with Glow */}
          <div className="relative w-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/15 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
            <h1 className="text-5xl md:text-6xl font-rajdhani font-bold leading-[1.1] text-white tracking-wide text-left w-full m-0 p-0 relative z-10 drop-shadow-md">
              We Can't Halt <br />
              What We Can't See.
            </h1>
          </div>

          {/* Two Column Text (Paragraph Proportions balanced) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 w-full text-left relative z-10">
            <div className="flex flex-col items-start max-w-[520px]">
              <p className="text-lg lg:text-xl font-outfit text-gray-200 leading-relaxed font-light text-left m-0 p-0 drop-shadow-md">
                <span className="text-xl lg:text-2xl font-normal text-white">Parkinson's</span> can become a chronic disease managed for decades, but that future depends on something that still does not exist: continuous, precise and objective measurement of how the disease progresses.
              </p>
            </div>
            <div className="flex flex-col items-start max-w-[450px]">
              <p className="text-lg lg:text-xl font-outfit text-gray-200 leading-relaxed font-light text-left m-0 p-0 drop-shadow-md">
                <span className="text-xl lg:text-2xl font-normal text-white">dopa-x</span> was built to close this gap, generating the measurement infrastructure Parkinson's has never had, to halt its progression and dramatically extend effective treatment.
              </p>
            </div>
          </div>

          {/* Underlined Sentence */}
          <div className="flex flex-col items-start self-start text-left mt-2">
            <p className="text-[17px] md:text-lg font-outfit text-white font-bold tracking-wide m-0 text-left">
              For the 15M+ people living with it, that vision cannot come soon enough.
            </p>
            <img 
              src={line4} 
              alt="underline" 
              className="w-full h-auto mt-2" 
            />
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
