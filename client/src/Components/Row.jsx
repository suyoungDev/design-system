import styled from 'styled-components';

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

export const HeadingRow = styled(Row)`
  width: 500px;
  justify-content: space-between;
  margin: 5rem 0 1rem 0;
`;
