import React from 'react';
import styled from 'styled-components';
import { Dotted } from '../EnterPage.styles';
import { AiOutlineArrowRight } from 'react-icons/ai';

const GridLayout = styled.div`
  display: grid;

  @media screen and (min-width: 768px) {
    grid-template-columns: 0.45fr 1fr;
  }
`;

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(props) => props.theme.ink50};
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;

  .react-icons {
    color: ${(props) => props.theme.ink50};
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }

  @media screen and (min-width: 768px) {
    height: 140px;
    padding: 1rem 0;
    font-size: 1.5rem;

    :not(:nth-child(7)) {
      border-bottom: 1px solid ${(props) => props.theme.ink30};
    }
  }
`;

const Content = styled.div`
  display: flex;
  height: 100px;
  align-items: center;
  padding: 1rem 0;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: ${(props) => props.theme.ink50};
  letter-spacing: 1px;
  word-break: keep-all;
  :not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.ink30};
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    height: 140px;
  }
`;

const Container = styled.div`
  position: relative;
  height: auto;
  overflow: hidden;
  padding: 2rem 0;
`;

const GridContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Center = styled.div`
  width: 80vw;
`;

const description = [
  {
    title: '손쉬운 색상 선택',
    p: `실시간으로 색상을 선택할 수 있습니다. 선택한 색상 중에 중요한 색상만 따로 보관해보세요.
           복사도 간단합니다.`,
  },
  {
    title: '글자체 선택',
    p: `선택한 글자체와 색상을 실시간으로 확인하고 비교해 보세요.`,
  },
  {
    title: '버튼과 카드까지',
    p: `선택한 색상으로 버튼과 카드를 만들어보세요. 다양한 설정값을 적용하여 실시간으로 확인해 볼 수 있습니다.`,
  },
  {
    title: '라이브 코드',
    p: `선택한 옵션들을 적용한 JSX, styled-components 코드를 바로 바로 사용하세요.`,
  },
];

const Section = () => {
  return (
    <Container>
      <Dotted />
      <GridContainer>
        <Center>
          <GridLayout>
            {description.map((item) => (
              <React.Fragment>
                <Title>
                  <AiOutlineArrowRight />
                  <span>{item.title}</span>
                </Title>
                <Content>
                  <p>{item.p}</p>
                </Content>
              </React.Fragment>
            ))}
          </GridLayout>
        </Center>
      </GridContainer>
    </Container>
  );
};

export default Section;
