import React, { useState } from 'react';
import { motion } from 'framer-motion';
import bg06 from '../../assets/backgrounds/timeline-bg.svg';

const Timeline = () => {
  const [bgLoaded, setBgLoaded] = useState(false);
  const phases = [
    {
      year: "2026",
      status: "COMPLETE",
      title: "Foundation & Partnerships",
      desc: "Team, scientific framework, and initial academic and industry collaborations in place"
    },
    {
      year: "2027",
      status: "IN PROGRESS",
      title: "Proof of Concept",
      desc: "Digital biomarkers integration and real-world data acquisition underway"
    },
    {
      year: "",
      status: "UPCOMING",
      title: "Clinical Validation",
      desc: "Multi-site trials to validate and refine the infrastructure with partner institutions"
    },
    {
      year: "",
      status: "UPCOMING",
      title: "Research Deployment",
      desc: "Infrastructure released to the Parkinson's research and clinical ecosystem"
    },
    {
      year: "",
      status: "UPCOMING",
      title: "Clinical Adoption",
      desc: "Large-scale implementation across clinical and research networks worldwide"
    }
  ];

  return (
    <section id="partners" className="w-full bg-[#F9FAFB] py-10 relative overflow-hidden">
      <img src={bg06} className={`absolute inset-0 w-full h-full object-cover pointer-events-none z-0 transition-opacity duration-1000 ${bgLoaded ? 'opacity-100' : 'opacity-0'}`} alt="Timeline Background" onLoad={() => setBgLoaded(true)} />
      <div className="relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={bgLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-[1400px] mx-auto w-full px-6 md:px-12 lg:px-16"
      >

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-rajdhani font-bold text-brand-navy-dark leading-tight mb-4 text-center">
          The Work Has Already Begun.
        </h2>

        {/* Timeline Container */}
        <div className="relative w-full">

          {/* Axis Wrapper (Sticky Timeline Axis) */}
          <div className="hidden md:flex relative w-full items-center h-16 mb-8 mt-12 sticky top-20 z-40 bg-transparent">

            {/* The Line */}
            <div className="absolute left-0 right-0 h-[2px] bg-[#1E1E46] z-0"></div>

            {/* Right-pointing Arrow */}
            <div className="absolute right-0 w-0 h-0 border-y-[5px] border-y-transparent border-l-[6px] border-l-[#1E1E46] z-0"></div>

            {/* The Nodes Container */}
            <div className="relative z-10 w-full flex justify-around items-center px-4">
              {phases.map((phase, idx) => (
                <div key={`node-${idx}`} className="relative flex flex-col items-center w-full">

                  {/* The Dot */}
                  <div className="w-4 h-4 rounded-full bg-[#1E1E46] border-2 border-white z-10"></div>

                  {/* The Date Pill */}
                  {phase.year && (
                    <div className="absolute -top-12 bg-white border border-gray-200 shadow-sm rounded-full px-4 py-1 text-sm font-rajdhani font-bold tracking-widest text-[#1E1E46]">
                      {phase.year}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>

          {/* The 5-Column Grid for Cards */}
          <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10 items-stretch">
            {phases.map((phase, idx) => {

              // Determine Card Styling based on strictly defined status
              let cardBg = "bg-white";
              let cardBorder = "border-2 border-gray-200";
              let statusColor = "text-gray-400";

              if (phase.status === "COMPLETE") {
                cardBg = "bg-gray-100";
                cardBorder = "border-2 border-brand-blue";
                statusColor = "text-brand-blue";
              } else if (phase.status === "IN PROGRESS") {
                cardBg = "bg-white";
                cardBorder = "border-2 border-brand-blue";
                statusColor = "text-brand-blue";
              }

              return (
                <div key={`card-${idx}`} className="flex relative w-full mt-8 md:mt-0">

                  {/* The Card */}
                  <div className={`rounded-[2rem] p-8 flex flex-col items-start text-left ${cardBg} ${cardBorder} shadow-sm w-full h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-brand-orange`}>

                    <span className={`text-[13px] font-outfit font-bold uppercase tracking-widest mb-2 ${statusColor}`}>
                      {phase.status}
                    </span>

                    <h3 className="font-rajdhani font-bold text-brand-navy-dark text-2xl lg:text-3xl mb-2 leading-tight">
                      {phase.title}
                    </h3>

                    <p className="font-outfit text-gray-500 text-[16px] lg:text-[17px] leading-relaxed m-0">
                      {phase.desc}
                    </p>

                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </motion.div>
      </div>
    </section>
  );
};

export { Timeline };
export default Timeline;
