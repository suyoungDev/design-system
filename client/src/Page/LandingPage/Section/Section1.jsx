import React, { useEffect, useState } from 'react';
import { Container, Inline, Outline, MainTitle } from '../LandingPage.styles';
import Section1Elem from './Section1Elem';

const Section1 = () => {
  const [offset, setOffset] = useState(0);

  const onScroll = () => {
    if (window.pageYOffset <= window.innerHeight * 0.6)
      setOffset(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <Container>
      <Section1Elem offset={offset} />
      <MainTitle>
        <h2>
          <Outline>THE FUTURE OF</Outline>
          <Inline>
            <div>
              <span style={{ transform: `translate(0,${offset * 0.4}% )` }}>
                d
              </span>
              <span style={{ transform: `translate(0,${offset * 0.26}% )` }}>
                e
              </span>
              <span style={{ transform: `translate(0,${offset * 0.3}% )` }}>
                s
              </span>
              <span style={{ transform: `translate(0,${offset * 0.45}% )` }}>
                i
              </span>
              <span style={{ transform: `translate(0,${offset * 0.2}% )` }}>
                g
              </span>
              <span style={{ transform: `translate(0,${offset * 0.3}% )` }}>
                n
              </span>
            </div>
            <div>
              <span style={{ transform: `translate(0,${offset * 0.54}% )` }}>
                s
              </span>
              <span style={{ transform: `translate(0,${offset * 0.43}% )` }}>
                y
              </span>
              <span style={{ transform: `translate(0,${offset * 0.67}% )` }}>
                s
              </span>
              <span style={{ transform: `translate(0,${offset * 0.45}% )` }}>
                t
              </span>
              <span style={{ transform: `translate(0,${offset * 0.37}% )` }}>
                e
              </span>
              <span style={{ transform: `translate(0,${offset * 0.3}% )` }}>
                M
              </span>
            </div>
          </Inline>
          <Outline>IS HERE</Outline>
        </h2>
      </MainTitle>
    </Container>
  );
};

export default Section1;
