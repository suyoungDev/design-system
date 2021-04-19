import React from 'react';
import {
  BiPlus,
  BiPalette,
  BiExtension,
  BiCodeAlt,
  BiWorld,
} from 'react-icons/bi';
import { SmallButton } from './Button';
import { FiBox } from 'react-icons/fi';

const AddButton = ({
  palette,
  changeStyle,
  addNew,
  viewCode,
  changeLanguage,
  addRandom,
}) => {
  return (
    <div>
      {viewCode && (
        <SmallButton narrow onClick={viewCode}>
          <BiCodeAlt />
        </SmallButton>
      )}
      {changeLanguage && (
        <SmallButton narrow onClick={changeLanguage}>
          <BiWorld />
        </SmallButton>
      )}
      {addRandom && (
        <SmallButton narrow onClick={addRandom}>
          <FiBox />
        </SmallButton>
      )}
      {addNew && (
        <SmallButton narrow onClick={addNew}>
          <BiPlus />
        </SmallButton>
      )}
      {changeStyle && (
        <SmallButton narrow onClick={changeStyle}>
          <BiExtension />
        </SmallButton>
      )}
      {palette && (
        <SmallButton narrow onClick={palette}>
          <BiPalette />
        </SmallButton>
      )}
    </div>
  );
};

export default AddButton;
