import React, { useState } from 'react';
import { motion } from 'framer-motion';

const bg02 = '/backgrounds/missing-x-bg.svg';

const MissingX = () => {
  const [bgLoaded, setBgLoaded] = useState(false);
  return (
    <section id="missing-x" className="w-full bg-bg-light py-8 flex flex-col justify-center border-b border-gray-light/30 relative overflow-hidden scroll-mt-24">
      <img src={bg02} loading="lazy" className={`absolute inset-0 w-full h-full object-cover pointer-events-none z-0 transition-opacity duration-1000 ${bgLoaded ? 'opacity-100' : 'opacity-0'}`} alt="measurements bg" onLoad={() => setBgLoaded(true)} />
      <div className="relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={bgLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 flex flex-row items-center justify-center gap-4 md:gap-6"
      >
        
        {/* Massive "0" on the left */}
        <div className="flex-shrink-0 relative z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/15 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
          <span className="text-[12rem] md:text-[16rem] leading-[0.8] font-rajdhani font-bold bg-clip-text text-transparent bg-gradient-to-b from-brand-orange to-brand-blue drop-shadow-md relative z-10">
            0
          </span>
        </div>
        
        {/* Text Block on the right */}
        <div className="flex flex-col items-start text-left w-full space-y-3">
          <p className="text-[19px] md:text-[21px] font-outfit text-brand-navy-dark font-medium leading-snug m-0 text-left">
            Approved treatments that slow or stop Parkinson's progression.
          </p>
          
          <p className="text-[19px] md:text-[21px] font-outfit text-brand-navy-dark font-medium leading-snug m-0 text-left">
            Not for lack of trying. For lack of continuous, objective measurement.
          </p>
          
          <p className="text-2xl md:text-[28px] font-outfit font-bold text-brand-orange tracking-wide text-left mt-2 m-0">
            That is the missing X.
          </p>
        </div>

      </motion.div>
      </div>
    </section>
  );
};

export { MissingX };
export default MissingX;
