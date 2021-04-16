import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { BiPalette, BiCodeAlt, BiPlus } from 'react-icons/bi';

import { Button } from '../../../Components/Button';
import { SimpleContainer, Dotted } from '../LandingPage.styles';
import {
  GridColumn,
  BgBox,
  GridRow,
  WindowSection,
  GradationBox,
  ImageBox,
  Code,
  Title,
  Text,
  ButtonBox,
} from './Section5.styles';

import codeBlock from './codeBlock';
import { withRouter } from 'react-router';

const Section5 = (props) => {
  return (
    <SimpleContainer>
      <Dotted />
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
              <ImageBox />
              <Title>
                <span>Custom Code</span>
              </Title>
              <Text>
                <p>
                  자유롭게 상상을 발휘해서 버튼과 카드를 만들어보세요. 그리고
                  실시간으로 변하는 코드를 개인 프로젝트에 바로바로
                  적용해보세요.
                </p>
              </Text>
              <ButtonBox>
                <Button codeBox onClick={() => props.history.push('/main')}>
                  만들어보기
                </Button>
              </ButtonBox>
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

export default withRouter(Section5);
