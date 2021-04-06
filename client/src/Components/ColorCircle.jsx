import styled from 'styled-components';

export const ColorCircle = styled.div`
  width: 20px;
  height: 20px;
  padding: 10px;
  background: ${(props) => props.hexId};
  border-radius: 50%;
  margin-right: 0.74rem;
`;
