import React from 'react';

import { HeadingRow } from '../../Components/Row';
import BaseColorModule from './Section/BaseColorModule';

const BaseColor = () => {
  return (
    <div>
      <HeadingRow>
        <h2>Base</h2>
      </HeadingRow>
      <BaseColorModule hexId='#868bff' />
    </div>
  );
};

export default BaseColor;
