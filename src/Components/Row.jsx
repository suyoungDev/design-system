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
  &.mb-4 {
    margin-bottom: 0.4rem;
  }
  &.mb-5 {
    margin-bottom: 0.8rem;
  }
  &.mt-5 {
    margin-top: 0.8rem;
  }
  &.mb-20 {
    margin-bottom: 2.5rem;
  }
`;

const defineHeadingStyles = (props) => {
  if (props.first) return fristStyles;
};

const fristStyles = css`
  margin: 0;
`;

export const HeadingRow = styled.div`
  display: flex;
  width: 100%;
  margin: 3rem 0 1.4rem 0;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.ink60};
  text-transform: capitalize;
  margin: 0 0 1.4rem 0;

  h1 {
    font-size: 2rem;
  }

  :hover {
    .react-icons {
      color: ${(props) => props.theme.ink30};
    }
  }

  button {
    :hover {
      background: ${(props) => props.theme.neutral50};
      color: ${(props) => props.theme.purple50};
    }
  }

  @media screen and (min-width: 768px) {
    padding: 0;
  }

  ${defineHeadingStyles}
`;

export const ListItemRow = styled(Row)`
  align-items: center;
  :not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.neutral50};
  }
`;

export const BaseColorItemRow = styled(Row)`
  padding: 0.5rem 1rem;
`;
