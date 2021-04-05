import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  align-items: center;
  justify-content: center;
`;
