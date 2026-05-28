import React, { useState } from 'react';
import { motion } from 'framer-motion';
import bg05 from '../../assets/backgrounds/intelligence-layer-bg.svg';
import dopaXLogoLight from '../../assets/images/dopa-x-logo-light.svg';
import intelligenceLayerBg2 from '../../assets/backgrounds/intelligence-layer-bg2.svg';

const IntelligenceLayer = () => {
  const [bgLoaded, setBgLoaded] = useState(false);

  return (
    <section className="w-full bg-brand-navy-dark py-10 relative overflow-hidden">
      <img 
        src={bg05} 
        className={`absolute inset-0 w-full h-full object-cover pointer-events-none z-0 transition-opacity duration-1000 ${bgLoaded ? 'opacity-100' : 'opacity-0'}`} 
        alt="bg bottom" 
        onLoad={() => setBgLoaded(true)} 
      />
      
      {/* ---------------------------------------------------- */}
      {/* 1. DESKTOP VIEW: Original SVG wave layout (hidden md:block) */}
      {/* ---------------------------------------------------- */}
      <div className="hidden md:block relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={bgLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-[90vw] mx-auto xl:max-w-screen-2xl w-full flex flex-row items-center gap-12 lg:gap-16 px-6 md:px-12"
        >
          {/* Left Column: Text Area */}
          <div className="w-1/4 flex flex-col items-start text-left shrink-0">
            <img 
              src={dopaXLogoLight} 
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

          {/* Right Column: Original SVG diagram layout */}
          <div className="w-3/4 flex items-center justify-center py-6">
            <img 
              src={intelligenceLayerBg2} 
              alt="Intelligence Layer Diagram" 
              className="w-full h-auto max-w-4xl object-contain pointer-events-none" 
            />
          </div>
        </motion.div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 2. MOBILE VIEW: Stacked clean layout (block md:hidden) */}
      {/* ---------------------------------------------------- */}
      <div className="block md:hidden relative z-10 w-full px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={bgLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full flex flex-col items-center gap-8"
        >
          {/* Mobile Heading Section */}
          <div className="w-full flex flex-col items-center text-center">
            <img 
              src={dopaXLogoLight} 
              alt="dopa-x Logo" 
              className="w-32 mb-4 object-contain" 
            />
            <h2 className="text-white font-rajdhani text-3xl font-bold leading-tight tracking-tight m-0">
              Intelligence Layer:
            </h2>
            <p className="text-gray-light text-xs sm:text-sm uppercase tracking-[0.2em] mt-2 font-outfit m-0 leading-relaxed opacity-95">
              A CLOSED-LOOP SYSTEM FOR PARKINSON'S.
            </p>
          </div>

          {/* Mobile Stacked Cards Section */}
          <div className="w-full flex flex-col gap-y-6 max-w-md mx-auto mt-2">
            
            {/* Card 01 - SENSE */}
            <div className="flex flex-col items-center text-center border border-brand-orange/40 rounded-[2rem] py-8 px-6 min-h-[220px] bg-white/5 backdrop-blur-md shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-brand-orange">
              <span className="font-rajdhani text-5xl font-bold text-brand-orange leading-none mb-3">01</span>
              <h3 className="font-rajdhani text-2xl font-bold tracking-widest text-white uppercase mb-3">SENSE</h3>
              <p className="font-outfit text-base text-gray-200 leading-relaxed max-w-[280px]">
                Physiological and behavioral data, continuously collected within and beyond the clinical visit.
              </p>
            </div>

            {/* Card 02 - ANALYZE */}
            <div className="flex flex-col items-center text-center border border-brand-orange/40 rounded-[2rem] py-8 px-6 min-h-[220px] bg-white/5 backdrop-blur-md shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-brand-orange">
              <span className="font-rajdhani text-5xl font-bold text-brand-orange leading-none mb-3">02</span>
              <h3 className="font-rajdhani text-2xl font-bold tracking-widest text-white uppercase mb-3">ANALYZE</h3>
              <p className="font-outfit text-base text-gray-200 leading-relaxed max-w-[280px] mb-3">
                Disease state, progression patterns, and treatment response.
              </p>
            </div>

            {/* Card 03 - DELIVER */}
            <div className="flex flex-col items-center text-center border border-brand-orange/40 rounded-[2rem] py-8 px-6 min-h-[220px] bg-white/5 backdrop-blur-md shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-brand-orange">
              <span className="font-rajdhani text-5xl font-bold text-brand-orange leading-none mb-3">03</span>
              <h3 className="font-rajdhani text-2xl font-bold tracking-widest text-white uppercase mb-3">DELIVER</h3>
              <p className="font-outfit text-base text-gray-200 leading-relaxed max-w-[280px]">
                Adaptive, data-informed intervention over time. A signal patients, clinicians and researchers can finally act on.
              </p>
            </div>

          </div>
        </motion.div>
      </div>

    </section>
  );
};

export { IntelligenceLayer };
export default IntelligenceLayer;
