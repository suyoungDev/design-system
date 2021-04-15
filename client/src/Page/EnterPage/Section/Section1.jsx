import React from 'react';
import circles from '../../../constance/circle/circles';
import { Container, Inline, Outline, MainTitle } from '../EnterPage.styles';

const Section1 = () => {
  return (
    <Container>
      <img
        src={circles.one}
        alt='circles'
        style={{ position: 'absolute', top: '2em', left: '-10em' }}
      />
      <img
        src={circles.six}
        alt='circles'
        style={{
          position: 'absolute',
          top: '2em',
          left: '6em',
          transform: 'scale(1.2)',
        }}
      />
      <img
        src={circles.two}
        alt='circles'
        style={{
          position: 'absolute',
          bottom: '2em',
          right: '6em',
        }}
      />
      <img
        src={circles.three}
        alt='circles'
        style={{
          position: 'absolute',
          bottom: '5em',
          right: '8em',
        }}
      />
      <img
        src={circles.six}
        alt='circles'
        style={{
          position: 'absolute',
          top: '8em',
          right: '6em',
          transform: 'rotate(160deg) scale(0.7)',
        }}
      />
      <img
        src={circles.seven}
        alt='circles'
        style={{
          position: 'absolute',
          bottom: '1em',
          left: '10em',
        }}
      />
      <MainTitle style={{}}>
        <h2>
          <Inline>
            THE FUTURE OF <Outline>DESIGN SYSTEM</Outline> IS HERE
          </Inline>
        </h2>
      </MainTitle>
    </Container>
  );
};

export default Section1;
