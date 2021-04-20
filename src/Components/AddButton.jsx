import React from 'react';
import {
  BiPlus,
  BiPalette,
  BiExtension,
  BiCodeAlt,
  BiWorld,
  BiPencil,
  BiSave,
  BiX,
} from 'react-icons/bi';
import { CgOptions } from 'react-icons/cg';
import { FiBox } from 'react-icons/fi';

import { SmallButton } from './Button';

const AddButton = ({
  palette,
  changeStyle,
  addNew,
  viewCode,
  changeLanguage,
  addRandom,
  options,
  changeName,
  save,
  deleteItem,
  ...props
}) => {
  return (
    <div>
      {viewCode && (
        <SmallButton narrow onClick={viewCode} title='코드 보기'>
          <BiCodeAlt />
        </SmallButton>
      )}

      {changeName && (
        <SmallButton narrow onClick={changeName} title='이름 변경' {...props}>
          <BiPencil />
        </SmallButton>
      )}
      {save && (
        <SmallButton narrow onClick={save} title='저장하기' {...props}>
          <BiSave />
        </SmallButton>
      )}
      {options && (
        <SmallButton narrow onClick={options} title='옵션 변경'>
          <CgOptions />
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
      {deleteItem && (
        <SmallButton narrow onClick={deleteItem} title='삭제하기' {...props}>
          <BiX />
        </SmallButton>
      )}
    </div>
  );
};

export default AddButton;
