import React from 'react';
import {
  BasicContainer,
  TitleContainer,
  MainTitle,
  SubText,
} from '../EnterPage.styles';
import { Button } from '../../../Components/Button';

const Section3 = () => {
  return (
    <BasicContainer>
      <TitleContainer>
        <MainTitle small>
          <span>더이상 색상을 고르느라 시간을 낭비하지 마세요.</span>
        </MainTitle>
        <SubText subSmall>
          <span>한번 저장해둔 셋팅을 불러와서 다시 사용 할 수 있습니다.</span>
        </SubText>
        <Button primary>바로 시작하기</Button>
      </TitleContainer>
    </BasicContainer>
  );
};

export default Section3;
