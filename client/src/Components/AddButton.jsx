import React from 'react';
import { BiPlus, BiCodeAlt } from 'react-icons/bi';
import { SmallButton } from './Button';
import { FiBox } from 'react-icons/fi';

const AddButton = ({ addNew, viewCode, addRandom }) => {
  return (
    <div>
      {viewCode && (
        <SmallButton narrow onClick={viewCode}>
          <BiCodeAlt />
        </SmallButton>
      )}
      {addRandom && (
        <SmallButton narrow onClick={addRandom}>
          <FiBox />
        </SmallButton>
      )}
      <SmallButton narrow onClick={addNew}>
        <BiPlus />
      </SmallButton>
    </div>
  );
};

export default AddButton;
