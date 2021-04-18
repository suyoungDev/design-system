import React, { useEffect, useState } from 'react';
import Section1 from './Section/Section1';
import Section2 from './Section/Section2';
import Section3 from './Section/Section3';
import Section4 from './Section/Section4';
import Section5 from './Section/Section5';

const LandingPage = () => {
  const [offset, setOffset] = useState(0);
  const onScroll = () => setOffset(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <body>
      <Section1 />
      <Section2 offset={offset} />
      <Section3 />
      <Section4 />
      <Section5 />
    </body>
  );
};

export default LandingPage;
