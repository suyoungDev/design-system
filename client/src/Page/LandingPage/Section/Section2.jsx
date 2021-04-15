import React from 'react';
import {
  Container,
  Inline,
  Outline,
  SubTitle,
  SubText,
} from '../LandingPage.styles';
import SectionElem from './SectionElem';

const Section2 = ({ offset }) => {
  return (
    <Container>
      <SectionElem offset={offset} />
      <SubText style={{ opacity: (offset - 500) / 10 }}>
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
        <span
          style={{
            opacity: (offset - 700) / 10,
          }}
        >
          DESIGN EASILY
        </span>
        <span style={{ opacity: (offset - 750) / 10 }}>PICK COLORS EASILY</span>
        <span style={{ opacity: (offset - 800) / 10 }}>ON YOUR WAY</span>
      </SubText>
    </Container>
  );
};

export default Section2;
