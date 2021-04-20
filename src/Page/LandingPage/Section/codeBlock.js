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

export default codeBlock;
