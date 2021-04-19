import styled from 'styled-components';

export const OptionContainer = styled.div`
  background: ${(props) => props.theme.neutral40};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${(props) => props.theme.neutral50};
  border-top: 1px solid ${(props) => props.theme.neutral50};
  width: 100%;
`;
