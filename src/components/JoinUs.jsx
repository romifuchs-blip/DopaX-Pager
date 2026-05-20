import React, { useState } from 'react';
import { motion } from 'framer-motion';
import frame40Bg from '../assets/Frame 40.svg';
const JoinUs = () => {
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const cards = [
    {
      title: "PHILANTHROPIC SUPPORT",
      desc: "Accelerate the work that moves precision neurology from concept to clinical reality."
    },
    {
      title: "STRATEGIC PARTNERSHIP",
      desc: "Bring scientific, clinical or institutional reach to strengthen and scale the model."
    },
    {
      title: "OPEN COLLABORATION",
      desc: "Add expertise, networks or access to a mission already in motion."
    }
  ];

  return (
    <section id="join-us" className="w-full bg-[#EAEAF5] py-10 relative overflow-hidden">
      {/* Faint DNA Background Graphic */}
      <svg width="100%" height="100%" viewBox="0 0 1000 431" fill="none" xmlns="http://www.w3.org/2000/svg"  preserveAspectRatio="xMidYMid slice" className="absolute inset-0 pointer-events-none z-0 opacity-50 mix-blend-multiply">
<g clipPath="url(#clip0_44_674)">
<rect width="1000" height="431" fill="white"/>
<rect width="1000" height="431" fill="#2828C6" fillOpacity="0.2"/>
<rect width="1000" height="431" fill="url(#pattern0_44_674)" fillOpacity="0.05"/>
<g opacity="0.3">
<g opacity="0.3">
<path d="M495.841 131.018L418.667 226.852L345.87 317.295L337.52 327.699C313.687 357.315 276.396 374.781 236.755 374.781L154.068 374.781L273.073 226.852L345.87 136.409L354.219 126.006C377.809 96.6176 414.694 79.3036 453.93 78.9999C454.254 78.9999 454.66 78.9999 454.984 78.9999L536.617 78.9998C536.617 78.9998 537.347 78.9998 537.671 78.9998L495.76 131.018L495.841 131.018Z" fill="#131354"/>
<path d="M500.158 131.018L577.333 226.852L650.129 317.295L658.479 327.699C682.312 357.315 719.603 374.781 759.244 374.781L841.931 374.781L722.926 226.852L650.129 136.409L641.78 126.006C618.19 96.6176 581.305 79.3036 542.069 78.9999C541.745 78.9999 541.339 78.9999 541.015 78.9999L459.382 78.9999C459.382 78.9999 458.653 78.9999 458.328 78.9999L500.239 131.018L500.158 131.018Z" fill="url(#paint0_linear_44_674)"/>
</g>
<g opacity="0.3">
<path d="M1077.84 131.018L1000.67 226.852L927.87 317.295L919.52 327.699C895.687 357.315 858.396 374.781 818.755 374.781L736.068 374.781L855.073 226.852L927.87 136.409L936.219 126.006C959.809 96.6176 996.694 79.3036 1035.93 78.9999C1036.25 78.9999 1036.66 78.9999 1036.98 78.9999L1118.62 78.9998C1118.62 78.9998 1119.35 78.9998 1119.67 78.9998L1077.76 131.018L1077.84 131.018Z" fill="#131354"/>
</g>
<g opacity="0.3">
<path d="M-77.842 131.018L-0.667493 226.852L72.1294 317.295L80.4791 327.699C104.312 357.315 141.603 374.781 181.244 374.781L263.931 374.781L144.926 226.852L72.1294 136.409L63.7796 126.006C40.1895 96.6176 3.30466 79.3036 -35.9311 78.9999C-36.2554 78.9999 -36.6606 78.9999 -36.9849 78.9999L-118.618 78.9999C-118.618 78.9999 -119.347 78.9999 -119.672 78.9999L-77.7609 131.018L-77.842 131.018Z" fill="url(#paint1_linear_44_674)"/>
</g>
</g>
</g>
<defs>

<linearGradient id="paint0_linear_44_674" x1="801.641" y1="405.384" x2="551.908" y2="70.2291" gradientUnits="userSpaceOnUse">
<stop offset="0.31" stopColor="#FF5C35"/>
<stop offset="0.33" stopColor="#EE5740"/>
<stop offset="0.43" stopColor="#BA4B63"/>
<stop offset="0.53" stopColor="#8D4081"/>
<stop offset="0.62" stopColor="#68379A"/>
<stop offset="0.72" stopColor="#4C30AD"/>
<stop offset="0.81" stopColor="#382BBB"/>
<stop offset="0.91" stopColor="#2C28C3"/>
<stop offset="1" stopColor="#2828C6"/>
</linearGradient>
<linearGradient id="paint1_linear_44_674" x1="223.641" y1="405.384" x2="-26.0916" y2="70.2291" gradientUnits="userSpaceOnUse">
<stop offset="0.31" stopColor="#FF5C35"/>
<stop offset="0.33" stopColor="#EE5740"/>
<stop offset="0.43" stopColor="#BA4B63"/>
<stop offset="0.53" stopColor="#8D4081"/>
<stop offset="0.62" stopColor="#68379A"/>
<stop offset="0.72" stopColor="#4C30AD"/>
<stop offset="0.81" stopColor="#382BBB"/>
<stop offset="0.91" stopColor="#2C28C3"/>
<stop offset="1" stopColor="#2828C6"/>
</linearGradient>
<clipPath id="clip0_44_674">
<rect width="1000" height="431" fill="white"/>
</clipPath>

</defs>
</svg>


      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 relative z-10"
      >
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-rajdhani font-bold mb-5 text-center text-brand-navy-dark w-full">
          Join Us.
        </h2>
        
        {/* 3-Card Grid Wrapper */}
        <div className="relative w-full max-w-[950px] mx-auto">
          {/* Natural Image Layer */}
          <img 
            src={frame40Bg} 
            alt="Support Options" 
            className="w-full h-auto object-contain pointer-events-none" 
          />
          
          {/* Absolute Overlay Grid */}
          <div className="absolute inset-0 w-full h-full grid grid-cols-3">
            {cards.map((card, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center justify-center text-center px-4 sm:px-8 h-full"
              >
                <h3 className="text-[11px] sm:text-[15px] md:text-[20px] font-rajdhani font-medium leading-[1.2] tracking-[1.2px] uppercase text-brand-blue text-center w-full">
                  {card.title}
                </h3>
                <p className="font-outfit font-normal text-[9px] sm:text-[12px] md:text-[16px] leading-[1.7] text-brand-navy-dark text-center w-full mt-2 md:mt-3">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Contact Form Section */}
        <div className="mt-6 md:mt-8 w-full flex flex-col items-center relative z-10">
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              const mailtoSubject = "New Contact from Dopa-X Website";
              const mailtoBody = `Name: ${name}
Organization: ${organization || 'N/A'}
Email: ${email}

Message:
${message}`;
              const mailtoLink = `mailto:hello@dopa-x.org?subject=${encodeURIComponent(mailtoSubject)}&body=${encodeURIComponent(mailtoBody)}`;
              window.location.href = mailtoLink;
            }}
            className="w-full max-w-[700px] mx-auto border-2 border-[#2828C6] rounded-[19px] p-6 pt-8 md:p-10 md:pt-12 flex flex-col gap-5 bg-transparent"
          >
            
            <h3 className="text-brand-navy-dark text-xl md:text-2xl font-rajdhani font-bold uppercase tracking-widest mb-2 text-left">
              TELL US HOW YOU'D LIKE TO GET INVOLVED:
            </h3>
            
            {/* Row 1 */}
            <div className="flex flex-col md:flex-row gap-4 w-full">
              {/* NAME */}
              <div className="flex flex-col w-full md:w-[28.5%]">
                <label className="text-[#2828C6] font-rajdhani font-bold text-[13px] mb-1.5 uppercase tracking-widest">Name*</label>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full h-[38px] bg-[#F0F4F8] rounded-[12px] px-4 text-brand-navy-dark placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#2828C6] transition-all font-outfit text-sm" 
                />
              </div>
              {/* ORGANIZATION */}
              <div className="flex flex-col w-full md:w-[28.5%]">
                <label className="text-[#2828C6] font-rajdhani font-bold text-[13px] mb-1.5 uppercase tracking-widest">Organization</label>
                <input 
                  type="text" 
                  placeholder="Your Organization"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  className="w-full h-[38px] bg-[#F0F4F8] rounded-[12px] px-4 text-brand-navy-dark placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#2828C6] transition-all font-outfit text-sm" 
                />
              </div>
              {/* EMAIL */}
              <div className="flex flex-col w-full md:w-[39.5%]">
                <label className="text-[#2828C6] font-rajdhani font-bold text-[13px] mb-1.5 uppercase tracking-widest">Email*</label>
                <input 
                  type="email" 
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full h-[38px] bg-[#F0F4F8] rounded-[12px] px-4 text-brand-navy-dark placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#2828C6] transition-all font-outfit text-sm" 
                />
              </div>
            </div>
            
            {/* Row 2 */}
            <div className="flex flex-col md:flex-row gap-4 w-full mt-2">
              {/* MESSAGE */}
              <div className="flex flex-col w-full md:w-[49%]">
                <label className="text-[#2828C6] font-rajdhani font-bold text-[13px] mb-1.5 uppercase tracking-widest">Message</label>
                <textarea 
                  placeholder="Anything we should know before we talk?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full h-[52px] bg-[#F0F4F8] rounded-[12px] px-4 py-3 text-brand-navy-dark placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#2828C6] transition-all font-outfit text-sm resize-none"
                ></textarea>
              </div>
              {/* BUTTON */}
              <div className="flex flex-col w-full md:w-[49%] justify-end mt-4 md:mt-0">
                <button 
                  type="submit" 
                  className="w-full h-[52px] bg-[#2828C6] hover:bg-blue-700 text-white font-rajdhani font-bold text-[16px] tracking-widest uppercase rounded-[8px] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  Let's talk
                </button>
              </div>
            </div>
          </form>
        </div>

      </motion.div>
    </section>
  );
};

export default JoinUs;
