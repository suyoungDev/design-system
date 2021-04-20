import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';

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

const MixinOptions = observer(
  ({ index, setIsOptionOpen, id, isChecked, setIsChecked }) => {
    const [value, setValue] = useState('');

    // 함수 props의 name없애면 안됨!
    const changeColor = (name, value) => {
      setValue(value);
    };

    const toggle = (e) => {
      setIsChecked(e.target.checked);
    };

    const onSubmit = (e) => {
      e.preventDefault();
      mixinStore.changeVariation(value, isChecked, index, id);
    };

    return (
      <OptionContainer>
        <Modifying>{index + 1}번째 색상 수정</Modifying>
        <form onSubmit={onSubmit}>
          {index !== 2 && (
            <SaveWrapper>
              <Label check htmlFor={id}>
                <Check
                  type='checkbox'
                  id={id}
                  name={id}
                  value={id}
                  onChange={toggle}
                  checked={`${isChecked ? 'checked' : ''}`}
                />
                <Checkbox />
                중간값 보존
              </Label>
            </SaveWrapper>
          )}
          <div>
            <Label mixin>변경 색상</Label>
            <ChangeBaseColorList
              changeColor={changeColor}
              small
              type='button'
            />
          </div>
        </form>
      </OptionContainer>
    );
  }
);

export default MixinOptions;
