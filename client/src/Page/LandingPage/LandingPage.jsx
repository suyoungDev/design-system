import React, { useEffect, useState } from 'react';
import { Head } from './LandingPage.styles';
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
    <Head>
      <Section1 offset={offset} />
      <Section2 offset={offset} />
      <Section3 offset={offset} />
      <Section4 offset={offset} />
      <Section5 offset={offset} />
    </Head>
  );
};

export default LandingPage;
