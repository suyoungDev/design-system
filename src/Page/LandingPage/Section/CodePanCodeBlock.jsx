import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { Code } from './Section5.styles';
import codeBlock from './codeBlock';

const CodePanCodeBlock = () => {
  return (
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
  );
};

export default CodePanCodeBlock;
