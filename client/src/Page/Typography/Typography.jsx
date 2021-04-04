import React from 'react';
import { HeadingRow } from '../../Components/Row';
import TypographyModule from './section/TypographyModule';
import TypographyList from './section/TypographyList';
import { Wrapper } from '../../Components/Wrapper';

const Typography = () => {
  return (
    <Wrapper>
      <HeadingRow>
        <h2>Typography</h2>
      </HeadingRow>
      <TypographyList />
      <TypographyModule hexId='#748199' />
    </Wrapper>
  );
};

export default Typography;
