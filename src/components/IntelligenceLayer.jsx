import React, { useState } from 'react';
import { motion } from 'framer-motion';
import bg05 from '../assets/bg-05.svg';
import frame40 from '../assets/Frame40.svg';

const IntelligenceLayer = () => {
  const [bgLoaded, setBgLoaded] = useState(false);
  return (
    <section className="w-full bg-brand-navy-dark py-10 relative overflow-hidden">
      <img src={bg05} className={`absolute inset-0 w-full h-full object-cover pointer-events-none z-0 transition-opacity duration-1000 ${bgLoaded ? 'opacity-100' : 'opacity-0'}`} alt="bg bottom" onLoad={() => setBgLoaded(true)} />
      
      {/* Main Content */}
      <div className="relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={bgLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-[90vw] mx-auto xl:max-w-screen-2xl w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16 px-6 md:px-12 relative z-10"
        >
          
          {/* Column 1: Left - Text Area */}
          <div className="w-full lg:w-1/4 flex flex-col items-start text-left">
            <img 
              src="/assets/logos/Dopa-Z-logo light.svg" 
              alt="dopa-x Logo" 
              className="w-32 md:w-40 mb-3 object-contain" 
            />
            <h2 className="text-white font-rajdhani text-3xl md:text-4xl lg:text-5xl font-bold leading-tight m-0 tracking-tight">
              Intelligence<br className="hidden lg:block"/> Layer:
            </h2>
            <p className="text-gray-light text-sm md:text-base uppercase tracking-[0.2em] mt-3 font-outfit m-0 leading-relaxed opacity-90 text-left">
              A CLOSED-LOOP SYSTEM<br/>FOR PARKINSON'S.
            </p>
          </div>

          {/* Column 2: Right - Image */}
          <div className="w-full lg:w-3/4 flex items-center justify-center">
            <img 
              src={frame40} 
              alt="Intelligence Layer" 
              className="w-full h-auto object-contain"
            />
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default IntelligenceLayer;
