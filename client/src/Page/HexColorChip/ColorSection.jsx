import React from 'react';
import List from './section/List';
import AddColorChip from './section/AddColorChip';
import { HeadingRow } from '../../Components/Row';
import { Wrapper } from '../../Components/Wrapper';

const ColorSection = () => {
  return (
    <Wrapper>
      <HeadingRow>
        <h2>All Colors</h2>
        <AddColorChip />
      </HeadingRow>
      <List />
    </Wrapper>
  );
};

export default ColorSection;
