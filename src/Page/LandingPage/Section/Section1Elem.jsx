import React from 'react';
import elements from '../../../constance/elements';

const Section1Elem = ({ offset }) => {
  return (
    <>
      <img
        src={elements.one}
        alt='elements'
        style={{
          position: 'absolute',
          top: '5em',
          left: '-10em',
          transform: `translateY(-${offset * 1.2}px)`,
        }}
      />
      <img
        src={elements.six}
        alt='elements'
        style={{
          position: 'absolute',
          top: '28em',
          left: '2em',
          transform: `translateY(-${offset * 0.67}px) scale(1.2)`,
        }}
      />
      <img
        src={elements.two}
        alt='elements'
        style={{
          position: 'absolute',
          bottom: '2em',
          right: '6em',
          transform: `translateY(-${offset * 0.62}px)`,
        }}
      />
      <img
        src={elements.three}
        alt='elements'
        style={{
          position: 'absolute',
          bottom: '5em',
          right: '2em',
          transform: `translateY(-${offset * 1.2}px)`,
        }}
      />
      <img
        src={elements.six}
        alt='elements'
        style={{
          position: 'absolute',
          top: '18em',
          right: '4em',
          transform: `translateY(-${offset * 1.7}px) rotate(160deg) scale(0.7)`,
        }}
      />
    </>
  );
};

export default Section1Elem;
