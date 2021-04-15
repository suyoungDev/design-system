import React from 'react';
import elements from '../../../constance/elements';

const SectionElem = () => {
  return (
    <>
      <img
        alt='marks'
        src={elements.curlyO}
        style={{ position: 'absolute', bottom: '22em', left: '2.2em' }}
      />
      <img
        alt='marks'
        src={elements.curlyC}
        style={{ position: 'absolute', top: '-2em', right: '5.7em' }}
      />
      <img
        alt='marks'
        src={elements.mark}
        style={{ position: 'absolute', bottom: '12em', right: '2em' }}
      />
      <img
        alt='marks'
        src={elements.inline}
        style={{
          position: 'absolute',
          bottom: '-1em',
          left: '1em',
          opacity: '0.9',
        }}
      />
      <img
        alt='marks'
        src={elements.outline}
        style={{ position: 'absolute', bottom: '4em', left: '-6em' }}
      />
      <img
        src={elements.four}
        alt='bubbles'
        style={{
          position: 'absolute',
          top: '5em',
          right: '2em',
        }}
      />
      <img
        src={elements.five}
        alt='bubbles'
        style={{
          position: 'absolute',
          top: '15em',
          right: '-1.2em',
        }}
      />
      <img
        src={elements.three}
        alt='bubbles'
        style={{
          position: 'absolute',
          top: '-7em',
          left: '2em',
        }}
      />
      <img
        src={elements.two}
        alt='bubbles'
        style={{
          position: 'absolute',
          top: '-3em',
          left: '2em',
        }}
      />
      <img
        src={elements.seven}
        alt='bubbles'
        style={{
          position: 'absolute',
          top: '6em',
          left: '9em',
          transform: 'rotate(60deg)',
        }}
      />
      <img
        src={elements.six}
        alt='bubbles'
        style={{
          position: 'absolute',
          top: '2em',
          right: '20em',
          transform: 'rotate(30deg) scale(0.7)',
        }}
      />
      <img
        src={elements.six}
        alt='bubbles'
        style={{
          position: 'absolute',
          bottom: '2em',
          right: '13em',
          transform: 'rotate(-70deg) ',
        }}
      />
      <img
        src={elements.two}
        alt='bubbles'
        style={{
          position: 'absolute',
          bottom: '3em',
          right: '10em',
          transform: 'rotate(-70deg) ',
        }}
      />
    </>
  );
};

export default SectionElem;
