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
        <SmallButton narrow onClick={viewCode} title='코드 보기'>
          <BiCodeAlt />
        </SmallButton>
      )}
      {changeLanguage && (
        <SmallButton narrow onClick={changeLanguage} title='언어 변경'>
          <BiWorld />
        </SmallButton>
      )}
      {addRandom && (
        <SmallButton narrow onClick={addRandom} title='랜덤으로 추가'>
          <FiBox />
        </SmallButton>
      )}
      {addNew && (
        <SmallButton narrow onClick={addNew} title='추가'>
          <BiPlus />
        </SmallButton>
      )}
      {changeStyle && (
        <SmallButton narrow onClick={changeStyle} title='카드 변경'>
          <BiExtension />
        </SmallButton>
      )}
      {palette && (
        <SmallButton narrow onClick={palette} title='색상 변경'>
          <BiPalette />
        </SmallButton>
      )}
    </div>
  );
};

export default AddButton;
