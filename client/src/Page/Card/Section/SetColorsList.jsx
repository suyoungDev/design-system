import React from 'react';
import SelectModule from './SelectModule';
import styled from 'styled-components';
import CardSlider from './CardSlider';
import SetButtonHover from './SetButtonHover';
import { cardColorStore } from '../../../Store/CardColorStore';

const LIST = [
  { label: '제목 색상', value: 'head' },
  { label: '내용 색상', value: 'content' },
  { label: '버튼 색상', value: 'main' },
];

const Container = styled.div`
  background: ${(props) => props.theme.neutral40};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${(props) => props.theme.neutral50};
  border-top: 1px solid ${(props) => props.theme.neutral50};
`;

const SetColorsList = ({ isOpen }) => {
  return (
    <>
      {isOpen && (
        <Container>
          {LIST.map((item) => (
            <SelectModule
              label={item.label}
              value={item.value}
              key={item.value}
            />
          ))}
          {cardColorStore.mainColor && <SetButtonHover />}
          <CardSlider />
        </Container>
      )}
    </>
  );
};

export default SetColorsList;
