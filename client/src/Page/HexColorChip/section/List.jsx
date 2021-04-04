import React from 'react';
import styled from 'styled-components';
import ColorChipList from './ColorChipList';
import { colorChipListStore } from '../../../Store/ColorListStore';
import { observer } from 'mobx-react-lite';
import { Row } from '../../../Components/Row';

const List = observer(() => {
  return (
    <Row className='al_ct'>
      <ColorChipList colorChipListStore={colorChipListStore} />
    </Row>
  );
});

export default List;
