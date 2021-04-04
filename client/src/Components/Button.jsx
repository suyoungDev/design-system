import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  color: ${(props) => props.theme.white};

  &:hover {
    opacity: 0.6;
  }

  transition: all 0.3s ease;
`;
