import React, { useState } from 'react';
import { motion } from 'framer-motion';
import bg05 from '../../assets/backgrounds/intelligence-layer-bg.svg';
import dopaXLogoLight from '../../assets/images/dopa-x-logo-light.svg';

const IntelligenceLayer = () => {
  const [bgLoaded, setBgLoaded] = useState(false);

  const steps = [
    {
      num: "01",
      title: "SENSE",
      desc: "Physiological and behavioral data, continuously collected within and beyond the clinical visit."
    },
    {
      num: "02",
      title: "ANALYZE",
      desc: "Disease state, progression patterns, and treatment response."
    },
    {
      num: "03",
      title: "DELIVER",
      desc: "Adaptive, data-informed intervention over time. A signal patients, clinicians and researchers can finally act on."
    }
  ];

  return (
    <section className="w-full bg-brand-navy-dark py-16 md:py-24 relative overflow-hidden">
      {/* Background Graphic */}
      <img 
        src={bg05} 
        className={`absolute inset-0 w-full h-full object-cover pointer-events-none z-0 transition-opacity duration-1000 ${bgLoaded ? 'opacity-100' : 'opacity-0'}`} 
        alt="bg bottom" 
        onLoad={() => setBgLoaded(true)} 
      />
      
      {/* Coded Responsive Storytelling Card Container */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={bgLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-[90%] md:w-[80%] max-w-5xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-[3rem] p-8 md:p-16 shadow-2xl relative z-10 flex flex-col"
      >
        
        {/* Card Header: Section Titles */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 md:mb-16 pb-8 border-b border-white/10 w-full">
          <div className="flex flex-col items-start text-left">
            <img src={dopaXLogoLight} alt="dopa-x Logo" className="w-28 md:w-36 mb-3 object-contain" />
            <h2 className="text-white font-rajdhani text-3xl md:text-5xl font-bold leading-tight tracking-tight m-0">
              Intelligence Layer
            </h2>
          </div>
          <div className="text-left md:text-right flex flex-col md:items-end">
            <p className="text-brand-orange text-sm md:text-base uppercase tracking-[0.2em] font-outfit font-bold m-0">
              A CLOSED-LOOP SYSTEM
            </p>
            <p className="text-gray-light text-sm md:text-base uppercase tracking-[0.2em] font-outfit mt-1 m-0 opacity-80">
              FOR PARKINSON'S
            </p>
          </div>
        </div>

        {/* Card Body: Linear Storytelling items */}
        <div className="flex flex-col gap-y-12 md:gap-y-16 w-full relative">
          {steps.map((step, idx) => {
            const isLast = idx === steps.length - 1;
            return (
              <div key={idx} className="flex flex-col md:flex-row items-start gap-4 md:gap-0 w-full relative group">
                
                {/* Left Column: Number indicator + Vertical Line connector */}
                <div className="w-full md:w-[25%] flex md:justify-end items-center md:pr-10 relative shrink-0">
                  <span className="font-rajdhani text-6xl md:text-8xl font-bold text-brand-orange leading-none select-none transition-transform duration-300 group-hover:scale-105">
                    {step.num}
                  </span>
                  
                  {/* Vertical connector line (desktop only) */}
                  {!isLast && (
                    <div className="absolute right-0 top-12 bottom-[-64px] w-[2px] bg-gradient-to-b from-brand-orange via-brand-blue to-brand-orange hidden md:block opacity-60 pointer-events-none"></div>
                  )}
                </div>

                {/* Right Column: Text descriptions */}
                <div className="w-full md:w-[75%] pl-0 md:pl-10 text-left flex flex-col items-start pt-1 md:pt-4">
                  <h3 className="font-rajdhani text-2xl md:text-3xl font-bold tracking-widest text-white uppercase mb-3">
                    {step.title}
                  </h3>
                  <p className="font-outfit text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl m-0 font-light">
                    {step.desc}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
};

export { IntelligenceLayer };
export default IntelligenceLayer;
