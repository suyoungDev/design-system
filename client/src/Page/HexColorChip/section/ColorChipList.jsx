import React from 'react';
import Chip from './Chip';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

const List = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
`;

const ColorChipList = observer(({ colorChipListStore }) => {
  return (
    <List>
      {colorChipListStore.colorList.map((item) => (
        <Chip item={item} key={item.id} />
      ))}
    </List>
  );
});

export default ColorChipList;
