import React, { useState } from 'react';

import { OptionContainer } from '../../../Components/OptionContainer';
import {
  SaveWrapper,
  Label,
  Check,
  Checkbox,
  Modifying,
} from './MixinOptions.styles';
import { mixinStore } from '../../../Store/MixinStore';

import ChangeBaseColorList from '../../BaseColor/Section/ChangeBaseColorList';

const MixinOptions = ({ index, setIsOptionOpen, id }) => {
  const [isCheck, setIsCheck] = useState(false);
  const [value, setValue] = useState('');

  // 함수 props의 name없애면 안됨!
  const changeColor = (name, value) => {
    setValue(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(value, isCheck, index, id);
    setIsOptionOpen(false);
    //   mixinStore.changeVariation('#F3EFA1', index, id);
  };

  const toggle = (e) => {
    setIsCheck(e.target.checked);
  };

  return (
    <OptionContainer>
      <Modifying>{index + 1}번째 색상 수정</Modifying>
      <form onSubmit={onSubmit}>
        {index !== 2 && (
          <SaveWrapper>
            <Label check htmlFor='saveMiddle'>
              <Check
                type='checkbox'
                value='saveMiddle'
                id='saveMiddle'
                name='test'
                onChange={toggle}
              />
              <Checkbox className='checkmark' />
              중간값 보존
            </Label>
          </SaveWrapper>
        )}
        <div>
          <Label mixin>변경 색상</Label>
          <ChangeBaseColorList changeColor={changeColor} small type='button' />
        </div>
      </form>
    </OptionContainer>
  );
};

export default MixinOptions;
