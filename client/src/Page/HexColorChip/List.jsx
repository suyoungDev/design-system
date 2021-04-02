import React from 'react';
import styled from 'styled-components';
import ColorChipList from './section/ColorChipList';
import { colorChipListStore } from '../../Store/ColorListStore';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  li {
    margin-right: 1rem;
  }
`;

const List = () => {
  return (
    <Row>
      <ColorChipList colorChipListStore={colorChipListStore} />
    </Row>
  );
};

export default List;
