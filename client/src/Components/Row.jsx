import styled, { css } from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-direction: row;

  &.jc_sb {
    justify-content: space-between;
  }
  &.jc_sa {
    justify-content: space-around;
  }
  &.al_ct {
    align-items: center;
  }
`;

const defineHeadingStyles = (props) => {
  if (props.first) return fristStyles;
};

const fristStyles = css`
  margin: 3rem 0 1.4rem 0;
`;

export const HeadingRow = styled(Row)`
  width: 500px;
  justify-content: space-between;
  color: ${(props) => props.theme.ink50};
  text-transform: capitalize;
  margin: 0 0 1.4rem 0;

  ${defineHeadingStyles}
`;
