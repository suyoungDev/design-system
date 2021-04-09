import React from 'react';
import { HeadingRow } from '../../Components/Row';
import TypographyList from './section/TypographyList';
import { Wrapper } from '../../Components/Wrapper';
import AddButton from '../../Components/AddButton';
import { typoColorStore } from '../../Store/TypoStore';

const Typography = () => {
  const clickHandle = () => {
    typoColorStore.addNewColor();
  };

  return (
    <Wrapper>
      <HeadingRow>
        <h2>Typography</h2>
        <AddButton clickHandle={clickHandle} />
      </HeadingRow>
      <TypographyList list={typoColorStore} />
    </Wrapper>
  );
};

export default Typography;
