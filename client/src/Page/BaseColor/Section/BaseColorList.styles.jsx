import styled from 'styled-components';

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${(props) => props.theme.neutral50};
  border-bottom: 1px solid ${(props) => props.theme.neutral50};
`;
