import React, { useState } from 'react';
import { motion } from 'framer-motion';
import currentStateGraph from '../../assets/images/current-state-graph.svg';
import futureStateGraph from '../../assets/images/future-state-graph.svg';

const containerBg = '/backgrounds/container-bg.svg';
const bg04 = '/backgrounds/infrastructure-bg.svg';

const Infrastructure = () => {
  const [bgLoaded, setBgLoaded] = useState(false);
  return (
    <section className="w-full relative overflow-hidden py-10 bg-[#E6E6F4]">
      <img src={bg04} loading="lazy" className={`absolute inset-0 w-full h-full object-cover pointer-events-none z-0 transition-opacity duration-1000 ${bgLoaded ? 'opacity-100' : 'opacity-0'}`} alt="bg top" onLoad={() => setBgLoaded(true)} />
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={bgLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 max-w-5xl mx-auto flex flex-col gap-6 w-full px-6 md:px-12"
      >
        
        {/* Top Text Card */}
        <div className="bg-white rounded-[3rem] p-10 md:p-12 shadow-lg w-full flex flex-col items-start text-left">
          <h2 className="text-3xl md:text-4xl font-rajdhani font-bold mb-4 text-brand-navy-dark">
            Open Infrastructure. Built to be Shared.
          </h2>
          
          <div className="space-y-6 text-lg font-outfit text-brand-navy-dark/80 font-normal leading-relaxed w-full">
            <p className="text-left m-0">
              At its core, dopa-x is developing a multidimensional measurement system integrating AI, neurophysiology, sensing, computational biology and cellular biology, creating the first objective ruler for Parkinson's.
            </p>
            <p className="text-left m-0">
              We are building the infrastructure that makes both possible: accelerating the path to disease-modifying treatments, and unlocking the full potential of existing care.
            </p>
            <p className="font-semibold text-brand-navy-dark text-left m-0">
              Developed as a non-profit, open-source initiative, built on existing technologies and available to the entire community.
            </p>
          </div>
        </div>

        {/* Bottom Grid Container */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* Left Column Card (Graph 1) - Blue Background */}
          <div className="bg-brand-navy-dark rounded-[3rem] p-10 md:p-12 flex flex-col shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-brand-orange border border-transparent relative overflow-hidden h-full">
            <img src={containerBg} loading="lazy" alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0" />
            <div className="relative z-10 flex flex-col items-center w-full h-full">
              <div className="w-full h-[220px] flex items-center justify-center mb-10 shrink-0">
                <img 
                  src={currentStateGraph} 
                  alt="Current State Graph" 
                  className="w-3/4 max-w-[280px] h-full object-contain"
                />
              </div>
              <div className="w-full text-left">
                <h3 className="text-3xl font-rajdhani font-bold text-white uppercase tracking-tight mt-0 mb-4">
                  WHAT'S HAPPENING NOW?
                </h3>
                <p className="font-outfit text-gray-light leading-relaxed text-[17px] m-0">
                  A real-time snapshot of disease state, enabling smarter, more precise symptom management.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Column Card (Graph 2) - White Background */}
          <div className="bg-white rounded-[3rem] p-10 md:p-12 shadow-lg flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-brand-orange border border-transparent h-full">
            <div className="flex flex-col items-center w-full h-full">
              <div className="w-full h-[220px] flex items-center justify-center mb-10 shrink-0">
                <img 
                  src={futureStateGraph} 
                  alt="Future State Graph" 
                  className="w-3/4 max-w-[280px] h-full object-contain"
                />
              </div>
              <div className="w-full text-left">
                <h3 className="text-3xl font-rajdhani font-bold text-brand-navy-dark uppercase tracking-tight mt-0 mb-4">
                  WHERE IS IT HEADING?
                </h3>
                <p className="font-outfit text-brand-navy-dark/80 leading-relaxed text-[17px] m-0">
                  A longitudinal signal of disease progression, enabling development of treatments that slow or reverse it.
                </p>
              </div>
            </div>
          </div>

        </div>

      </motion.div>
    </section>
  );
};

export { Infrastructure };
export default Infrastructure;
