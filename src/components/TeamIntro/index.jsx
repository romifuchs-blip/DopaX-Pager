import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import achiPic from '../../assets/images/achi-krauz.svg';

const frame12 = '/backgrounds/founder-card-bg.svg';

const TeamIntro = () => {
  const [bgLoaded, setBgLoaded] = useState(false);
  return (
    <section id="team" className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 flex flex-col items-center">
        
        {/* Columns Wrapper */}
        <div className="w-full flex flex-col md:flex-row gap-16 items-center justify-center">
          
          {/* Left Column */}
          <div className="w-full md:w-1/2 max-w-[450px] flex flex-col">
            {/* Left Column (Text Container) */}
            <div className="flex flex-col items-start w-full max-w-[450px]">
              <h2 className="text-left text-4xl md:text-[42px] font-rajdhani font-bold text-brand-navy-dark leading-tight mb-4">
                Built By Multidisciplinary<br />Problem-Solvers.
              </h2>
              <p className="text-left font-outfit text-gray-500 leading-relaxed text-[18px] m-0">
                Some problems require an uncommon combination of people. <strong className="font-semibold text-brand-navy-dark">dopa-X</strong> brings together biologists, pharmacologists, physicists, computational biologists, chemists and AI specialists, alongside deep-tech and defense expertise, not as an interesting mix, but as the team this problem actually demands.
              </p>
            </div>
          </div>

          {/* Right Column (Founder Card) */}
          <div className="w-full md:w-1/2 max-w-[450px] bg-[#FCEAE3] p-10 md:p-12 rounded-[3rem] shadow-sm relative overflow-hidden flex flex-col items-center justify-center text-center">
            <img src={frame12} loading="lazy" className={`absolute inset-0 w-full h-full object-cover pointer-events-none z-0 transition-opacity duration-1000 ${bgLoaded ? 'opacity-100' : 'opacity-0'}`} alt="Founder Card Background" onLoad={() => setBgLoaded(true)} />
            <div className={`relative z-10 flex flex-col items-center gap-6 transition-opacity duration-1000 ${bgLoaded ? 'opacity-100' : 'opacity-0'}`}>

              {/* Image at Top */}
              <div className="flex-shrink-0">
                <img
                  src={achiPic}
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

        {/* Meet The Team Button */}
        <Link
          to="/team"
          className="w-[300px] mt-12 bg-brand-blue hover:bg-blue-700 text-white py-4 rounded-xl text-center font-bold text-lg shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5"
        >
          Meet The Team
        </Link>

      </div>
    </section>
  );
};

export { TeamIntro };
export default TeamIntro;
