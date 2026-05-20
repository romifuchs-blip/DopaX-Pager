import React, { useState } from 'react';
import { motion } from 'framer-motion';
import bg03 from '../assets/bg-03.svg';
const Measurements = () => {
  const [bgLoaded, setBgLoaded] = useState(false);
  return (
    <section className="relative w-full bg-[#F9FAFB] py-10 overflow-hidden z-0">
      <img src={bg03} className={`absolute inset-0 w-full h-full object-cover pointer-events-none z-0 transition-opacity duration-1000 ${bgLoaded ? 'opacity-100' : 'opacity-0'}`} alt="features bg" onLoad={() => setBgLoaded(true)} />

      {/* Content Centering Wrapper */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={bgLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-7xl mx-auto relative z-10 w-full px-6 md:px-12 lg:px-16"
      >
        
        {/* Title */}
        <h2 className="text-4xl md:text-[2.5rem] font-rajdhani font-bold text-brand-navy-dark mb-6 text-center tracking-wide">
          Measuring Changes Everything.
        </h2>
        
        {/* Block 1: White Cards (Equal Width Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10">
          <div className="bg-white rounded-[2.5rem] p-10 md:p-12 shadow-sm border border-gray-light/20 flex flex-col items-start text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-brand-orange">
            <h3 className="text-2xl font-rajdhani font-bold tracking-wider uppercase text-brand-navy-dark mb-5">
              Disease Modification
            </h3>
            <p className="font-outfit text-gray-600 leading-[1.8] text-lg m-0 text-left">
              For the first time, AI-driven continuous measurement gives researchers a real, objective signal to test against, creating the infrastructure needed to find disease-modifying treatments and dramatically shortening the path to answers.
            </p>
          </div>
          
          <div className="bg-white rounded-[2.5rem] p-10 md:p-12 shadow-sm border border-gray-light/20 flex flex-col items-start text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-brand-orange">
            <h3 className="text-2xl font-rajdhani font-bold tracking-wider uppercase text-brand-navy-dark mb-5">
              Better Care
            </h3>
            <p className="font-outfit text-gray-600 leading-[1.8] text-lg m-0 text-left">
              The same measurement layer enables improving and optimizing the outcomes from existing levodopa therapy. The right dose, at the right time, extending the effective treatment window to 15 years and beyond.
            </p>
          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default Measurements;
