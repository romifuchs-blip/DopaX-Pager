import React, { useState } from 'react';
import frame12 from '../assets/Frame_12.svg';

const Team = () => {
  const [bgLoaded, setBgLoaded] = useState(false);
  return (
    <section id="team" className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 flex flex-col md:flex-row gap-16 items-center">

        {/* Left Column */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <h2 className="text-4xl md:text-5xl font-rajdhani font-bold text-brand-navy-dark leading-tight mb-3">
            Built By Multidisciplinary Problem-Solvers.
          </h2>
          <p className="font-outfit text-gray-500 leading-relaxed text-lg text-left m-0">
            Some problems require an uncommon combination of people. dopa-x brings together biologists, pharmacologists, physicists, computational biologists, chemists and AI specialists, alongside deep-tech and defense expertise. Not as an interesting mix, but as the team this problem actually demands.
          </p>
        </div>

        {/* Right Column (Founder Card) */}
        <div className="w-full md:w-1/2 bg-[#FCEAE3] p-10 md:p-12 rounded-[3rem] shadow-sm relative overflow-hidden flex flex-col items-center justify-center text-center">
          <img src={frame12} className={`absolute inset-0 w-full h-full object-cover pointer-events-none z-0 transition-opacity duration-1000 ${bgLoaded ? 'opacity-100' : 'opacity-0'}`} alt="Founder Card Background" onLoad={() => setBgLoaded(true)} />
          <div className={`relative z-10 flex flex-col items-center gap-6 transition-opacity duration-1000 ${bgLoaded ? 'opacity-100' : 'opacity-0'}`}>

            {/* Image at Top */}
            <div className="flex-shrink-0">
              <img
                src="/assets/graphs/Achi-pic.svg"
                alt="Achi Krauz"
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-sm"
              />
            </div>

            {/* Text Block Centered */}
            <div className="flex flex-col items-center text-center">
              <h3 className="font-rajdhani text-xl md:text-2xl font-bold uppercase tracking-widest text-gray-900 mb-2 leading-tight">
                Founded by Achi Krauz
              </h3>
              <p className="font-outfit text-brand-navy-dark/80 leading-relaxed text-[15px] lg:text-[17px] m-0">
                Krauz spent 25 years building systems that did not yet exist, including Israel's first private spacecraft to the moon with SpaceIL. After being diagnosed with Parkinson's, he chose to face the challenge the way engineers do: by building what is missing.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Team;
