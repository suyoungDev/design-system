import React from 'react';
import { HeadingRow } from '../../Components/Row';
import TypographyModule from './section/TypographyModule';
import TypographyList from './section/TypographyList';

const Typography = () => {
  return (
    <div>
      <HeadingRow>
        <h2>Typography</h2>
      </HeadingRow>
      <TypographyList />
      <TypographyModule hexId='#748199' />
    </div>
  );
};

export default Typography;
