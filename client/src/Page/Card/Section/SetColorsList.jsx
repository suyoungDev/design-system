import React from 'react';
import SelectModule from './SelectModule';
import styled from 'styled-components';
import CardSlider from './CardSlider';
import SetButtonHover from './SetButtonHover';
import { cardColorStore } from '../../../Store/CardColorStore';
import { observer } from 'mobx-react-lite';

const LIST = [
  { label: '제목 색상', value: 'headColor' },
  { label: '내용 색상', value: 'contentColor' },
  { label: '버튼 색상', value: 'buttonColor' },
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
  width: 100%;
`;

const SetColorsList = observer(({ isOpen }) => {
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
          {cardColorStore.buttonColor && <SetButtonHover />}
          <CardSlider />
        </Container>
      )}
    </>
  );
});

export default SetColorsList;
