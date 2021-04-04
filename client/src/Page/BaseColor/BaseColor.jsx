import React from 'react';
import { Wrapper } from '../../Components/Wrapper';

import { HeadingRow } from '../../Components/Row';
import BaseColorModule from './Section/BaseColorModule';

const BaseColor = () => {
  return (
    <Wrapper>
      <HeadingRow>
        <h2>Base</h2>
      </HeadingRow>
      <BaseColorModule hexId='#868bff' />
    </Wrapper>
  );
};

export default BaseColor;
