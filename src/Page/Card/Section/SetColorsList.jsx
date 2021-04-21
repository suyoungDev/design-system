import React from 'react';
import SelectModule from './SelectModule';
import CardSlider from './CardSlider';
import { OptionContainer } from '../../../Components/OptionContainer';
import SetButtonHover from './SetButtonHover';

const SELECT_LIST = [
  { label: '제목 색상', value: 'headColor' },
  { label: '내용 색상', value: 'contentColor' },
  { label: '버튼 색상', value: 'buttonColor' },
];

const SLIDER_LIST = [
  { label: '버튼 라운드 값', name: 'buttonRadius' },
  { label: '카드 라운드 값', name: 'borderRadius' },
];

const SetColorsList = ({ isOpen }) => {
  return (
    <>
      {isOpen && (
        <OptionContainer>
          {SELECT_LIST.map((item) => (
            <SelectModule
              label={item.label}
              value={item.value}
              key={item.value}
            />
          ))}
          <SetButtonHover />
          {SLIDER_LIST.map((item) => (
            <CardSlider label={item.label} name={item.name} />
          ))}
        </OptionContainer>
      )}
    </>
  );
};

export default SetColorsList;
