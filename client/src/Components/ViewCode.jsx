import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { githubGist } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { IoMdCopy } from 'react-icons/io';

import { CopyButton } from '../Components/Button';
import useCopy from '../Hook/useCopy';
import { cardCode, code } from './ViewCodeCard';

const Container = styled.div`
  font-size: 14px;
  width: 100%;
  max-width: 540px;
  max-height: 600px;
  overflow: auto;
  margin-bottom: 1rem;
  position: relative;
`;

const ViewCode = observer(({ base, card }) => {
  const [copy] = useCopy();

  const codeBlock = card ? cardCode() : base ? code('base') : code();

  return (
    <Container>
      <SyntaxHighlighter
        language='javascript'
        style={githubGist}
        wrapLines={true}
        wrapLongLines={true}
      >
        {codeBlock}
      </SyntaxHighlighter>
      <CopyButton narrow onClick={() => copy(codeBlock)}>
        <IoMdCopy />
      </CopyButton>
    </Container>
  );
});

export default ViewCode;
