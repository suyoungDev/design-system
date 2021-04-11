import styled, { css } from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  &.jc_sb {
    justify-content: space-between;
  }
  &.jc_sa {
    justify-content: space-around;
  }
  &.al_ct {
    align-items: center;
  }
  &.mb-3 {
    margin-bottom: 0.3rem;
  }
`;

const defineHeadingStyles = (props) => {
  if (props.first) return fristStyles;
};

const fristStyles = css`
  margin: 3rem 0 1.4rem 0;
`;

export const HeadingRow = styled(Row)`
  width: 540px;
  justify-content: space-between;
  color: ${(props) => props.theme.ink60};
  text-transform: capitalize;
  margin: 0 0 1.4rem 0;

  ${defineHeadingStyles}
`;

export const ListItemRow = styled(Row)`
  align-items: center;
  :not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.neutral50};
  }
`;

export const BaseColorItemRow = styled(Row)`
  padding: 0.5rem 0.7rem;
`;
