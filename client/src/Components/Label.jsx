import styled from 'styled-components';

export const Label = styled.span`
  color: ${(props) => props.theme.ink50};
  font-weight: 200;
  width: 160px;
  display: flex;
  align-items: ${({ center }) => (center ? 'center' : 'flex-start')};
`;
