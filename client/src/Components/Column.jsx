import styled from 'styled-components';

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  &.center {
    align-items: center;
    > div {
      margin-bottom: 2rem;
    }
  }

  &.jc-ct {
    justify-content: center;
  }
`;
