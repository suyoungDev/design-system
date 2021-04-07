import React from 'react';
import { Button } from '../../../Components/Button';
import { baseColorListStore } from '../../../Store/BaseColorStore';
import { BiPlus } from 'react-icons/bi';

const AddBaseColor = () => {
  const clickHandle = () => {
    baseColorListStore.addNewBaseColor();
  };

  return (
    <Button onClick={clickHandle}>
      <BiPlus />
    </Button>
  );
};

export default AddBaseColor;
