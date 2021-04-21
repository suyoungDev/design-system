import React from 'react';
import SelectModule from './SelectModule';
import CardSlider from './CardSlider';
import { OptionContainer } from '../../../Components/OptionContainer';
import SetButtonHover from './SetButtonHover';

const LIST = [
  { label: '제목 색상', value: 'headColor' },
  { label: '내용 색상', value: 'contentColor' },
  { label: '버튼 색상', value: 'buttonColor' },
];

const SetColorsList = ({ isOpen }) => {
  return (
    <>
      {isOpen && (
        <OptionContainer>
          {LIST.map((item) => (
            <SelectModule
              label={item.label}
              value={item.value}
              key={item.value}
            />
          ))}
          <SetButtonHover />
          <CardSlider label='버튼 라운드 값' name='buttonRadius' />
          <CardSlider label='카드 라운드 값' name='borderRadius' />
        </OptionContainer>
      )}
    </>
  );
};

export default SetColorsList;
