import React from 'react';
import { Wrapper } from '../../Components/Wrapper';
import { HeadingRow } from '../../Components/Row';
import { baseColorListStore } from '../../Store/BaseColorStore';
import BaseColorList from './Section/BaseColorList';
import AddButton from '../../Components/AddButton';

const BaseColor = () => {
  const clickHandle = () => {
    baseColorListStore.addNewBaseColor();
  };

  return (
    <Wrapper>
      <HeadingRow>
        <h2>Main Colors</h2>
        <AddButton clickHandle={clickHandle} />
      </HeadingRow>
      <BaseColorList store={baseColorListStore} />
    </Wrapper>
  );
};

export default BaseColor;
