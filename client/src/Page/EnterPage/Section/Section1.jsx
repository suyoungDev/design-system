import React from 'react';
import elements from '../../../constance/elements';
import { Container, Inline, Outline, MainTitle } from '../EnterPage.styles';

const Section1 = () => {
  return (
    <Container>
      <img
        src={elements.one}
        alt='elements'
        style={{ position: 'absolute', top: '2em', left: '-10em' }}
      />
      <img
        src={elements.six}
        alt='elements'
        style={{
          position: 'absolute',
          top: '2em',
          left: '6em',
          transform: 'scale(1.2)',
        }}
      />
      <img
        src={elements.two}
        alt='elements'
        style={{
          position: 'absolute',
          bottom: '2em',
          right: '6em',
        }}
      />
      <img
        src={elements.three}
        alt='elements'
        style={{
          position: 'absolute',
          bottom: '5em',
          right: '2em',
        }}
      />
      <img
        src={elements.six}
        alt='elements'
        style={{
          position: 'absolute',
          top: '8em',
          right: '6em',
          transform: 'rotate(160deg) scale(0.7)',
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
