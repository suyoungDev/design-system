import React from 'react';

import { Wrapper } from '../../Components/Wrapper';
import { HeadingRow } from '../../Components/Row';
import { baseColorListStore } from '../../Store/BaseColorStore';
import BaseColorList from './Section/BaseColorList';
import AddBaseColor from './Section/AddBaseColor';

const BaseColor = () => {
  return (
    <Wrapper>
      <HeadingRow>
        <h2>Base</h2>
        <AddBaseColor />
      </HeadingRow>
      <BaseColorList store={baseColorListStore} />
    </Wrapper>
  );
};

export default BaseColor;
