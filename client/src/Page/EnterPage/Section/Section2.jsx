import React from 'react';
import {
  Container,
  Inline,
  Outline,
  SubTitle,
  SubText,
} from '../EnterPage.styles';
import SectionElem from './SectionElem';

const Section2 = () => {
  return (
    <Container>
      <SectionElem />
      <SubText>
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
  );
};

export default Section2;
