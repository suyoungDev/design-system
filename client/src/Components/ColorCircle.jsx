import styled, { css } from 'styled-components';

const defineStyles = (props) => {
  if (props.big) return bigStyles;
};

export const ColorCircle = styled.div`
  width: 20px;
  height: 20px;
  padding: 10px;
  background: ${(props) => props.hexId};
  border-radius: 50%;
  ${defineStyles}
`;

const bigStyles = css`
  width: 35px;
  height: 35px;
  border-radius: 30%;
  margin-right: 0.7rem;
`;
