import React from 'react';
import ColorChipList from './ColorChipList';
import { colorChipListStore } from '../../../Store/ColorListStore';
import { observer } from 'mobx-react-lite';

const List = observer(() => {
  return <ColorChipList colorChipListStore={colorChipListStore} />;
});

export default List;
