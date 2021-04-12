import React from 'react';
import { BiPlus, BiCodeAlt } from 'react-icons/bi';
import { SmallButton } from './Button';

const AddButton = ({ addNew, viewCode, typo }) => {
  return (
    <div>
      {!typo && (
        <SmallButton narrow onClick={viewCode}>
          <BiCodeAlt />
        </SmallButton>
      )}
      <SmallButton narrow onClick={addNew}>
        <BiPlus />
      </SmallButton>
    </div>
  );
};

export default AddButton;
