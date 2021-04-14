import React, { useEffect, useState } from 'react';
import {
  Head,
  Container,
  Inline,
  Outline,
  MainTitle,
  SubTitle,
  SubText,
  Dotted,
} from './EnterPage.styles';
import Section from './Section/Section';
import Section2 from './Section/Section2';
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
      <Container>
        <MainTitle>
          <h2>
            <Inline>
              THE FUTURE OF <Outline>DESIGN SYSTEM</Outline> IS HERE
            </Inline>
          </h2>
        </MainTitle>
      </Container>
      <Container>
        <SubText>
          <span>DO IT EASILY.</span>
          <span>IT'S TIME FOR A CHANGE.</span>
        </SubText>
        <SubTitle>
          <Inline>
            <div>
              COLORS<Outline> FOR</Outline>
            </div>
            WEB
          </Inline>
        </SubTitle>

        <SubText sub>
          <span>DESIGN EASILY</span>
          <span>PICK COLORS EASILY</span>
          <span>ON YOUR WAY</span>
        </SubText>
      </Container>
      <Dotted>
        <Container gradation>
          <MainTitle third>
            <Inline>쉽고</Inline>
            <Inline>편하게</Inline>
          </MainTitle>
        </Container>
      </Dotted>
      <Section2 />
      <Section />
    </Head>
  );
};

export default EnterPage;
