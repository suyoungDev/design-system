import React from 'react';
import elements from '../../../constance/elements';

const SectionElem = ({ offset }) => {
  return (
    <>
      <img
        alt='marks'
        src={elements.curlyO}
        style={{
          position: 'absolute',
          bottom: '2em',
          left: '2.2em',
          transform: `translateY(-${offset * 0.42}px)`,
        }}
      />
      <img
        alt='marks'
        src={elements.curlyC}
        style={{
          position: 'absolute',
          bottom: '-2em',
          right: '1.7em',
          transform: `translateY(-${offset * 0.82}px) scale(.8)`,
        }}
      />
      <img
        alt='marks'
        src={elements.mark}
        style={{
          position: 'absolute',
          bottom: '-30em',
          right: '-1em',
          transform: `translateY(-${offset * 0.802}px)`,
        }}
      />
      <img
        alt='marks'
        src={elements.inline}
        style={{
          position: 'absolute',
          bottom: '-30em',
          left: '1em',
          opacity: '0.9',
          transform: `translateY(-${offset * 0.52}px) translateX(-${
            offset * 0.15
          }px)`,
        }}
      />
      <img
        alt='marks'
        src={elements.outline}
        style={{
          position: 'absolute',
          bottom: '-34em',
          left: '-6em',
          transform: `translateY(-${offset * 0.62}px)`,
        }}
      />
      <img
        src={elements.four}
        alt='bubbles'
        style={{
          position: 'absolute',
          top: '5em',
          right: '2em',
          transform: `translateY(-${offset * 1.82}px)`,
        }}
      />
      <img
        src={elements.five}
        alt='bubbles'
        style={{
          position: 'absolute',
          bottom: '-30em',
          right: '-6.2em',
          transform: `translateY(-${offset * 0.42}px)`,
        }}
      />
      <img
        src={elements.three}
        alt='bubbles'
        style={{
          position: 'absolute',
          top: '-7em',
          left: '2em',
          transform: `translateY(-${offset * 0.52}px)`,
        }}
      />
      <img
        src={elements.two}
        alt='bubbles'
        style={{
          position: 'absolute',
          top: '-3em',
          left: '2em',
          transform: `translateY(-${offset * 0.96}px)`,
        }}
      />
      <img
        src={elements.seven}
        alt='bubbles'
        style={{
          position: 'absolute',
          top: '6em',
          left: '2em',
          transform: `translateY(-${offset * 0.72 - 200}px) rotate(60deg)`,
        }}
      />
      <img
        src={elements.six}
        alt='bubbles'
        style={{
          position: 'absolute',
          bottom: '2em',
          right: '13em',
          transform: `translateY(-${offset * 0.4}px) rotate(-70deg)`,
        }}
      />
      <img
        src={elements.two}
        alt='bubbles'
        style={{
          position: 'absolute',
          bottom: '-35em',
          right: '5em',
          transform: `translateY(-${offset * 0.7}px) rotate(-70deg)`,
        }}
      />
    </>
  );
};

export default SectionElem;
