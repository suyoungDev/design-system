import React from 'react';
import Chip from './Chip';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

const ChipList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
`;

const ColorChipList = observer(({ colorChipListStore }) => {
  return (
    <ChipList>
      {colorChipListStore.colorList.map((item) => (
        <Chip item={item} key={item.id} />
      ))}
    </ChipList>
  );
});

export default ColorChipList;
