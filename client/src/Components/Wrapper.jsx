import styled, { css } from 'styled-components';

const defineWrapperStyles = (props) => {
  if (props.first) return fristStyles;
  if (props.last) return lastStyles;
};

const lastStyles = css`
  margin: 0 0 5em 0;
`;
const fristStyles = css`
  margin: 0 0 2em 0;
`;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 0 4em 0;
  padding: 1rem;
  background: white;

  @media screen and (min-width: 768px) {
    padding: 1.5rem 0;
    max-width: 700px;
  }

  ${defineWrapperStyles}
`;

export const SaveExplain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p:nth-of-type(2) {
    margin-top: 1rem;
  }
  p:not(:first-child) {
    font-size: 0.8rem;
    color: ${(props) => props.theme.ink40};
  }
  p:last-child {
    margin-bottom: 1rem;
  }
`;
