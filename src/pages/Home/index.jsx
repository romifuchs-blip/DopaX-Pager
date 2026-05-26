import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../../components/Hero';
import { MissingX } from '../../components/MissingX';
import { Measurements } from '../../components/Measurements';
import { Infrastructure } from '../../components/Infrastructure';
import { IntelligenceLayer } from '../../components/IntelligenceLayer';
import { TeamIntro } from '../../components/TeamIntro';
import { Timeline } from '../../components/Timeline';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="w-full">
      <Hero />
      <MissingX />
      <Measurements />
      <Infrastructure />
      <IntelligenceLayer />
      <TeamIntro />
      <Timeline />
    </div>
  );
};

export { Home };
export default Home;
