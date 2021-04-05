import styled from 'styled-components';

export const ColorCircle = styled.div`
  width: 20px;
  height: 20px;
  background: ${(props) => props.hexId};
  border-radius: 10px;
  margin-right: 0.5rem;
`;
