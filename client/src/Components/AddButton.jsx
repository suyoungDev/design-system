import React from 'react';
import { BiPlus } from 'react-icons/bi';
import { Button } from './Button';

const AddButton = ({ clickHandle }) => {
  return (
    <Button onClick={clickHandle}>
      <BiPlus />
    </Button>
  );
};

export default AddButton;
