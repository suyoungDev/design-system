import React from 'react';

import { Wrapper } from '../../Components/Wrapper';
import Head from '../../Components/Head';
import BaseColorList from './Section/BaseColorList';
import { baseColorListStore } from '../../Store/BaseColorStore';

const BaseColor = () => {
  const clickHandle = () => {
    baseColorListStore.addNewBaseColor();
  };

  return (
    <Wrapper>
      <Head title='Main Colors' clickHandle={clickHandle} />
      <BaseColorList store={baseColorListStore} />
    </Wrapper>
  );
};

export default BaseColor;
