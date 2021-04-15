import React from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { BiPalette, BiCodeAlt, BiPlus } from 'react-icons/bi';

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

const ImageBox = styled.div`
  position: absolute;
  width: 150%;
  height: 150%;
  z-index: -1;
  background-image: url(${Moving});
  background-size: contain;
  background-origin: border-box;

  &.offset {
    transform: scale(1.1) rotate(15deg);
    transition: all 16s ease;
  }
`;

const GradationBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: gradation;
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;

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

  box-shadow: 0 0.9em 1.5em 0 rgba(0, 0, 0, 0.4);
`;

const GridRow = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 40px 5fr 230px;
  grid-template-areas: 'windowSection' 'gradation' 'code';
`;

const Code = styled.div`
  grid-area: code;
  margin: 0;
  font-size: 0.7rem;
  background-color: ${(props) => props.theme.white};
  overflow: hidden;
`;

const WindowSection = styled.div`
  grid-area: windowSection;
  background-color: ${(props) => props.theme.neutral40};
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.2rem 0;

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
    color: ${(props) => props.theme.ink30};
    :not(:last-child) {
      margin-right: 1rem;
    }
  }
`;

const codeBlock = `import styled, { css } from 'styled-components';

export const Label = styled.label\`
        position: absolute;
        top: -12px;
        z-index: 1;
        font-size: 14px;
        font-weight: 300;
        color: \${(props) => props.theme.ink30};
\`;

export const Group = styled.div\`
      position: relative;
      width: 78%;
\`;
`;

const Section5 = ({ offset }) => {
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
                <BiPalette />
                <BiPlus />
              </div>
            </WindowSection>
            <GradationBox>
              <ImageBox className={`${offset > 2200 && 'offset'}`} />
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
