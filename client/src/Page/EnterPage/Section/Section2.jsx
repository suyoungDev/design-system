import React from 'react';
import styled from 'styled-components';
import { BasicContainer, MainTitle, SubText } from '../EnterPage.styles';
import { Button } from '../../../Components/Button';

const TitleContainer = styled.div`
  position: absolute;
  top: 0;
  z-index: 2;
  padding: 2.3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(176deg, #3430bd 20%, transparent 70%);
`;

const Section2 = () => {
  return (
    <BasicContainer>
      <TitleContainer>
        <MainTitle small>
          <span>더이상 시간을 낭비하지 마세요.</span>
        </MainTitle>
        <SubText subSmall>
          <span>한번 저장해둔 셋팅을 불러와서 다시 사용 할 수 있습니다.</span>
        </SubText>
        <Button primary>바로 시작하기</Button>
      </TitleContainer>
    </BasicContainer>
  );
};

export default Section2;
