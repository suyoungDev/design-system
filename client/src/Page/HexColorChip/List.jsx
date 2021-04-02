import React from 'react';
import styled from 'styled-components';
import ColorChipList from './section/ColorChipList';
import { colorChipListStore, colorChip } from '../../Store/ColorListStore';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > div {
    margin-right: 1rem;
  }
`;

const newItem = new colorChip('#868bff', 'lavender');
console.log(newItem);

const List = () => {
  return (
    <Row>
      <ColorChipList colorChipListStore={colorChipListStore} />
    </Row>
  );
};

export default List;
