import React, { useEffect, useState } from 'react';
import { Head } from './EnterPage.styles';
import Section1 from './Section/Section1';
import Section2 from './Section/Section2';
import Section3 from './Section/Section3';
import Section4 from './Section/Section4';
import Section5 from './Section/Section5';
import Section6 from './Section/Section6';

const EnterPage = () => {
  const [positionY, setPositionY] = useState(0);

  const parallex = () => {
    setPositionY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', parallex);
    return () => {
      window.removeEventListener('scroll', parallex);
    };
  }, []);

  return (
    <Head>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </Head>
  );
};

export default EnterPage;
