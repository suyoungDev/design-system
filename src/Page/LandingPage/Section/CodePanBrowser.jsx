import React from 'react';
import { Button, StyledLink } from '../../../Components/Button';
import {
  GradationBox,
  ImageBox,
  Title,
  Text,
  ButtonBox,
} from './Section5.styles';

const CodePanBrowser = () => {
  return (
    <GradationBox>
      <ImageBox />
      <Title>
        <span>Custom Code</span>
      </Title>
      <Text>
        <p>
          자유롭게 상상을 발휘해서 버튼과 카드를 만들어보세요. 그리고 실시간으로
          변하는 코드를 개인 프로젝트에 바로바로 적용해보세요.
        </p>
      </Text>
      <ButtonBox>
        <StyledLink to='/main'>
          <Button codeBox>만들어보기</Button>
        </StyledLink>
      </ButtonBox>
    </GradationBox>
  );
};

export default CodePanBrowser;
