import React from 'react';
import styled from 'styled-components';
import ColorChipList from './ColorChipList';
import { colorChipListStore } from '../../../Store/ColorListStore';
import { observer } from 'mobx-react-lite';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  li {
    margin-right: 1rem;
  }
`;

const List = observer(() => {
  return (
    <Row>
      <ColorChipList colorChipListStore={colorChipListStore} />
    </Row>
  );
});

export default List;