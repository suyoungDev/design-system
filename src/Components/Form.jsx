import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  align-items: center;
  justify-content: ${({ mixin }) => (mixin ? 'space-between' : 'center')};
  width: ${({ mixin }) => (mixin ? '200px' : '100%')};
`;
