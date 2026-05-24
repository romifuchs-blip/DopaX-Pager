import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Import graphics and backgrounds
import teamHeaderBg from '../assets/header-bg (1).svg';
import builtByBg from '../assets/Built By.svg';
import frame12Bg from '../assets/Frame12.svg';

// Import team member avatars
import achiPic from '../assets/Achi-pic.svg';
import dvirPic from '../assets/DvirDahary.svg';
import oriPic from '../assets/OriWeisberg.svg';
import gabrielPic from '../assets/GabrielCohen.svg';
import danPic from '../assets/Prof.DanMarom.svg';

const TeamMemberCard = ({ member }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="relative w-full rounded-[2.5rem] p-8 md:p-10 flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start text-left shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl bg-no-repeat bg-cover bg-center"
      style={{ 
        backgroundImage: `url("${frame12Bg}")`,
        backgroundColor: '#FFF' // fallback background
      }}
    >
      {/* Left Column: Avatar & Title */}
      <div className="w-[180px] md:w-[220px] flex-shrink-0 flex flex-col items-center text-center">
        {/* Circular Avatar */}
        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-white shadow-sm flex-shrink-0 bg-white">
          <img 
            src={member.image} 
            alt={member.name} 
            className="w-full h-full object-cover" 
          />
        </div>
        
        {/* Name and Role */}
        <div className="flex flex-col items-center text-center mt-4">
          <h3 className="font-rajdhani text-lg md:text-xl font-bold uppercase tracking-wider text-brand-navy-dark leading-tight">
            {member.name}
          </h3>
          <p className="font-outfit text-sm md:text-[14px] font-semibold text-brand-navy-dark/70 mt-1 leading-snug">
            {member.role}
          </p>
        </div>
      </div>

      {/* Right Column: Biography text */}
      <div className="flex-grow flex flex-col justify-between items-start text-left h-full self-stretch pt-2">
        <p className="font-outfit text-[15px] md:text-[16px] text-brand-navy-dark/85 leading-relaxed font-light m-0">
          {isExpanded ? member.fullBio : member.truncatedBio}
        </p>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="font-rajdhani font-bold text-[13px] uppercase tracking-widest text-[#2828C6] hover:text-brand-orange transition-colors cursor-pointer mt-4 outline-none border-none bg-transparent p-0"
        >
          {isExpanded ? 'READ LESS' : 'READ MORE'}
        </button>
      </div>
    </div>
  );
};

const Team = () => {
  const location = useLocation();

  useEffect(() => {
    // Always scroll to top of page when route loads
    window.scrollTo(0, 0);
  }, [location]);

  const members = [
    {
      name: "Achi Krauz",
      role: "President & CTO",
      image: achiPic,
      truncatedBio: "Krauz has spent his career at the frontier of what hasn't been done yet. National security. Cybersecurity. Space. Sixteen years inside the Israeli Prime Minister's Office, a decade as Chairman of SpaceIL, where Israel became the first private entity in history to...",
      fullBio: "Krauz has spent his career at the frontier of what hasn't been done yet. National security. Cybersecurity. Space. Sixteen years inside the Israeli Prime Minister's Office, a decade as Chairman of SpaceIL, where Israel became the first private entity in history to reach the moon. After being diagnosed with Parkinson's, he chose to face the challenge the way engineers do: by building what is missing."
    },
    {
      name: "Dvir Dahary",
      role: "CSO",
      image: dvirPic,
      truncatedBio: "Dvir has spent two decades at the frontier of human genetics, from the Weizmann Institute to genomics labs in Japan, from founding Geneyx to leading computational biology research that turned raw genetic data into clinical breakthroughs. He builds co...",
      fullBio: "Dvir has spent two decades at the frontier of human genetics, from the Weizmann Institute to genomics labs in Japan, from founding Geneyx to leading computational biology research that turned raw genetic data into clinical breakthroughs. He builds computational platforms that bridge the gap between biological complexity and actionable medicine."
    },
    {
      name: "Ori Weisberg",
      role: "COO & VP Products",
      image: oriPic,
      truncatedBio: "Ori brings something rare to the table: the scientific depth of a physicist trained at MIT, the operational instinct of a Sayeret Matkal veteran, and two decades of transforming complex medical technology into products that actually reach patients. Fr...",
      fullBio: "Ori brings something rare to the table: the scientific depth of a physicist trained at MIT, the operational instinct of a Sayeret Matkal veteran, and two decades of transforming complex medical technology into products that actually reach patients. From deep tech to clinical deployment, he bridges the gap between vision and execution."
    },
    {
      name: "Gabriel Cohen",
      role: "Director of Development & Fundraising",
      image: gabrielPic,
      truncatedBio: "Gabriel doesn't specialize. He connects. A physicist by training, an industrial designer by instinct and a connector by obsession, driven by the conviction that complex problems yield to people who refuse to stay in one field. For nearly a decade, he led an innovation platform inside the Israeli Prime Minister's Office, hel...",
      fullBio: "Gabriel doesn't specialize. He connects. A physicist by training, an industrial designer by instinct and a connector by obsession, driven by the conviction that complex problems yield to people who refuse to stay in one field. For nearly a decade, he led an innovation platform inside the Israeli Prime Minister's Office, helping bridge deep tech solutions with critical defense and national security challenges."
    },
    {
      name: "Prof. Dan Marom",
      role: "Advisor",
      image: danPic,
      truncatedBio: "Dan is an Associate Professor of the Practice at the Hebrew University Business School and heads the Asper Center for Entrepreneurship and Innovation. His work focuses on entrepreneurial finance, innovation strategy, and building conne...",
      fullBio: "Dan is an Associate Professor of the Practice at the Hebrew University Business School and heads the Asper Center for Entrepreneurship and Innovation. His work focuses on entrepreneurial finance, innovation strategy, and building connections between academic research and early-stage commercial ventures to scale breakthrough ideas."
    }
  ];

  return (
    <div className="w-full flex flex-col">
      {/* Top Header Section */}
      <div 
        className="relative w-full bg-brand-navy-dark text-white pt-40 pb-20 md:pt-48 md:pb-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${teamHeaderBg}")` }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-left flex flex-col items-start">
          <h1 className="text-5xl md:text-6xl font-rajdhani font-bold tracking-wide mb-6">Our Team</h1>
          <p className="text-lg md:text-xl font-outfit text-gray-200 max-w-3xl leading-relaxed m-0 font-light">
            The kind of problem that's been unsolved for 30 years doesn't need more of the same. It needs people assembled differently.
          </p>
        </div>
      </div>

      {/* Team Members Section */}
      <section 
        className="w-full py-16 md:py-24 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${builtByBg})` }}
      >
        <div className="max-w-[1000px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col gap-8 relative z-10">
          {members.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;
