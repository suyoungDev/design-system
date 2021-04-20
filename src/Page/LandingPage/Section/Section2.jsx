import React from 'react';
import { Container, SubTitle, SubText, Outline } from '../LandingPage.styles';
import SectionElem from './SectionElem';

const Section2 = ({ offset }) => {
  return (
    <Container>
      <SectionElem offset={offset} />
      <SubText style={{ opacity: (offset - 500) / 10 }}>
        <span>IT'S TIME FOR A CHANGE.</span>
      </SubText>
      <SubTitle
        style={{
          backgroundPositionX: (500 - offset) / 16,
          backgroundPositionY: (500 - offset) / 26,
        }}
      >
        <span>
          COLORS <Outline> FOR</Outline> WEB
        </span>
      </SubTitle>

      <SubText sub>
        <span className={`${offset > 700 && 'movingText'}`}>DESIGN EASILY</span>
        <span className={`${offset > 900 && 'movingText'}`}>
          PICK COLORS EASILY
        </span>
        <span className={`${offset > 1100 && 'movingText'}`}>ON YOUR WAY</span>
      </SubText>
    </Container>
  );
};

export default Section2;
