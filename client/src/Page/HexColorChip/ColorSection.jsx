import React from 'react';
import List from './section/List';
import AddColorChip from './section/AddColorChip';
import { HeadingRow } from '../../Components/Row';

const ColorSection = () => {
  return (
    <div>
      <HeadingRow>
        <h2>All Colors</h2>
        <AddColorChip />
      </HeadingRow>
      <List />
    </div>
  );
};

export default ColorSection;
