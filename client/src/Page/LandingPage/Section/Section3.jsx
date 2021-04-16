import React, { useState, useEffect } from 'react';
import {
  BasicContainer,
  TitleContainer,
  MainTitle,
  SubText,
  BlueGradation,
} from '../LandingPage.styles';
import { Button } from '../../../Components/Button';

const Section3 = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [visibility, setvisibility] = useState(true);

  const onSticky = () => {
    let offset = window.scrollY;
    let height = window.innerHeight;
    if (offset < height * 2) setIsSticky(false);
    if (offset >= height * 2) setIsSticky(true);
    if (offset > height * 3) setIsSticky(false);
    if (offset > height * 2.7) setvisibility(false);
    if (offset <= height * 2.7) setvisibility(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', onSticky);
    return () => {
      window.removeEventListener('scroll', onSticky);
    };
  }, []);

  return (
    <BasicContainer>
      <TitleContainer
        className={`${isSticky && 'fixed'}`}
        style={{ opacity: visibility ? 1 : 0 }}
      >
        <BlueGradation />
        <MainTitle small>
          <span>더이상 시간을 낭비하지 마세요.</span>
        </MainTitle>
        <SubText subSmall>
          <span>색상을 쉽게 고르고 저장하세요.</span>
          <span>한번 저장해둔 셋팅을 불러와서 다시 사용 할 수 있습니다.</span>
        </SubText>
        <Button primary>바로 시작하기</Button>
      </TitleContainer>
    </BasicContainer>
  );
};

export default Section3;
