import React, { useState } from 'react';
import SelectList from '../../../Components/SelectList';
import { Button } from '../../../Components/Button';
import { baseColorList } from './BaseColorListSource';
import { baseColorListStore } from '../../../Store/BaseColorStore';

const AddBaseColorContent = ({ openModal }) => {
  const [customBaseColor, setCustomBaseColor] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    openModal();
    baseColorListStore.modifyListItem(customBaseColor);
  };

  return (
    <form onSubmit={onSubmit}>
      <SelectList
        first
        list={baseColorList}
        defineCustomColor={setCustomBaseColor}
      />
      <Button primary type='submit'>
        완료
      </Button>
    </form>
  );
};

export default AddBaseColorContent;
