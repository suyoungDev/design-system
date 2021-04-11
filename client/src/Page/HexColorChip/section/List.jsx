import React from 'react';
import ColorChipList from './ColorChipList';
import { colorChipListStore } from '../../../Store/ColorListStore';

const List = () => {
  return <ColorChipList colorChipListStore={colorChipListStore} />;
};

export default List;
