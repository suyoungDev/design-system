import React from 'react';
import {
  Container,
  Inline,
  Outline,
  SubTitle,
  SubText,
} from '../EnterPage.styles';
import circles from '../../../constance/circle/circles';

const Section2 = () => {
  return (
    <Container>
      <img
        src={circles.four}
        alt='circles'
        style={{
          position: 'absolute',
          top: '2em',
          right: '12em',
        }}
      />
      <img
        src={circles.five}
        alt='circles'
        style={{
          position: 'absolute',
          top: '9em',
          right: '2em',
        }}
      />
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
  );
};

export default Section2;
