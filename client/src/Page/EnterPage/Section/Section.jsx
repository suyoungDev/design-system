import React from 'react';
import styled from 'styled-components';
import { Dotted } from '../EnterPage.styles';
import { AiOutlineArrowRight } from 'react-icons/ai';

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 0.45fr 1fr;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1rem 0;
  color: ${(props) => props.theme.ink50};
  height: 140px;
  display: flex;
  flex-direction: row;
  align-items: center;

  .react-icons {
    color: ${(props) => props.theme.ink50};
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }
  :not(:nth-child(5)) {
    border-bottom: 1px solid ${(props) => props.theme.ink50};
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  font-size: 1rem;
  color: ${(props) => props.theme.ink50};
  letter-spacing: 1px;
  word-break: keep-all;
  :not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.ink50};
  }
`;

export const Container = styled.div`
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
    title: '색상 선택',
    p: `실시간으로 색상을 선택할 수 있습니다. 선택한 컬러 중에 메인 컬러를
          선택하여 활용해 보세요. 간단하게 복사도 지원합니다.`,
  },
  {
    title: '글자체 선택',
    p: `선택한 글자체와 색상을 실시간으로 확인해 보세요.`,
  },
  {
    title: '버튼과 카드까지',
    p: `선택한 색상으로 버튼과 카드를 만들어보세요. 다양한 설정값을 적용하여 실시간으로 확인해 볼 수 있습니다.`,
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
