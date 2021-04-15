import React from 'react';
import {
  BasicContainer,
  TitleContainer,
  MainTitle,
  SubText,
} from '../LandingPage.styles';
import { Button } from '../../../Components/Button';

const Section3 = ({ offset }) => {
  return (
    <BasicContainer>
      <TitleContainer>
        <MainTitle small>
          <span>더이상 색상을 고르느라 시간을 낭비하지 마세요.</span>
        </MainTitle>
        <SubText subSmall>
          <span>색상을 쉽게 고르고 저장하세요.</span>
          <span>
            고른 색상을 가지고 상상력을 발휘하여 자신만의 카드를 만들어 보세요.
          </span>
          <span>한번 저장해둔 셋팅을 불러와서 다시 사용 할 수 있습니다.</span>
        </SubText>
        <Button primary>바로 시작하기</Button>
      </TitleContainer>
    </BasicContainer>
  );
};

export default Section3;
