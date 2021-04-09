import styled, { css } from 'styled-components';

const defineWrapperStyles = (props) => {
  if (props.first) return fristStyles;
};

const fristStyles = css`
  margin: 0 0 1em 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 4em 0;
  ${defineWrapperStyles}
`;
