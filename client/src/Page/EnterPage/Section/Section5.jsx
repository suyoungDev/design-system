import React from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { BiPalette, BiWorld, BiCodeAlt } from 'react-icons/bi';

import { Button } from '../../../Components/Button';
import { SimpleContainer, MainTitle, Dotted } from '../EnterPage.styles';
import Moving from '../../../constance/movingGradation.webp';

const GridColumn = styled.div`
  display: grid;
  grid-template-columns: 0.1fr 1fr 0.1fr;
  grid-template-areas: '. box .';
  @media screen and (min-width: 768px) {
    grid-template-columns: 0.4fr 1fr 0.4fr;
  }
`;

const GradationBox = styled.div`
  background-image: url(${Moving});
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: gradation;

  display: flex;
  align-items: center;
  justify-content: space-around;
  > p {
    color: white;
    width: 70%;
    line-height: 1.4rem;
    word-break: keep-all;
    text-align: center;
    font-size: 0.9rem;
  }

  @media screen and (min-width: 768px) {
    > p {
      font-size: 1rem;
      line-height: 1.8rem;
    }
  }
`;

const BgBox = styled.div`
  position: relative;
  grid-area: box;
  border: 1px solid ${(props) => props.theme.ink30};
  height: 80vh;
  max-height: 700px;

  box-shadow: 0 8px 15px 0 rgba(0, 0, 0, 0.2);
`;

const GridRow = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 5fr 2fr;
  grid-template-areas: 'windowSection' 'gradation' 'code';
`;

const Code = styled.div`
  margin: 0;
  height: 100%;
  font-size: 0.7rem;
  background-color: ${(props) => props.theme.white};
`;

const WindowSection = styled.div`
  grid-area: windowSection;
  background-color: ${(props) => props.theme.neutral40};
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  > span {
    margin-left: 1.5rem;
    color: ${(props) => props.theme.purple70};
    font-size: 0.8rem;
    font-weight: bold;
    font-family: 'Open Sans', sans-serif;
  }
  > div {
    margin-right: 1.5rem;
    display: flex;
    flex-direction: row;
  }

  .react-icons {
    font-size: 0.8rem;
    color: ${(props) => props.theme.ink40};
    :not(:last-child) {
      margin-right: 1rem;
    }
  }
`;

const codeBlock = `const Title = styled.div\`
    font-size: 1.2rem;
    font-weight: bold;
    color: \${(props) => props.theme.ink50};
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;

    .react-icons {
        color: \${(props) => props.theme.ink50};
        font-size: 1.5rem;
        margin-right: 0.5rem;
    }
\`;`;

const Section5 = () => {
  return (
    <SimpleContainer>
      <Dotted small />
      <GridColumn>
        <BgBox>
          <GridRow>
            <WindowSection>
              <span>Custon Code</span>
              <div>
                <BiCodeAlt />
                <BiWorld />
                <BiPalette />
              </div>
            </WindowSection>
            <GradationBox>
              <MainTitle mini>
                <span>Custom Code</span>
              </MainTitle>
              <p>
                자유롭게 상상을 발휘해서 버튼과 카드를 만들어보세요. 그리고
                실시간으로 변하는 코드를 개인 프로젝트에 바로바로 적용해보세요.
              </p>
              <Button codeBox>만들어보기</Button>
            </GradationBox>
            <Code>
              <SyntaxHighlighter
                language='javascript'
                style={anOldHope}
                wrapLines={true}
                wrapLongLines={true}
                showLineNumbers={true}
                children={codeBlock}
                useInlineStyles={true}
              />
            </Code>
          </GridRow>
        </BgBox>
      </GridColumn>
    </SimpleContainer>
  );
};

export default Section5;
