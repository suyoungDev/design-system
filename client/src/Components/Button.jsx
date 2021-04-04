import styled, { css } from 'styled-components';

const defineButtonStyle = (props) => {
  if (props.primary) return primaryStyles;
  if (props.secondary) return secondaryStyles;
  if (props.tertiary) return tertiaryStyles;
};

export const Button = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  color: ${(props) => props.theme.white};
  padding: 9px 15px;
  border-radius: 5px;
  font-weight: bold;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  ${defineButtonStyle}
`;

const primaryStyles = css`
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.purple50};

  :hover {
    opacity: 1;
    background-color: ${(props) => props.theme.purple70};
  }
  :focus {
    border: 2px solid ${(props) => props.theme.purple10};
  }
  :active {
    background-color: ${(props) => props.theme.purple90};
  }
  :disabled {
    background-color: ${(props) => props.theme.purple20};
  }
`;

const secondaryStyles = css`
  background-color: ${(props) => props.theme.neutral50};
  color: ${(props) => props.theme.ink50};

  :hover {
    background-color: ${(props) => props.theme.neutral60};
  }
  :focus {
    border: 2px solid ${(props) => props.theme.purple10};
    background-color: ${(props) => props.theme.neutral50};
  }
  :active {
    background-color: ${(props) => props.theme.neutral70};
  }
  :disabled {
    color: ${(props) => props.theme.ink30};
    background-color: ${(props) => props.theme.neutral50};
  }
`;

const tertiaryStyles = css`
  color: ${(props) => props.theme.purple50};

  :hover {
    color: ${(props) => props.theme.purple70};
    background-color: ${(props) => props.theme.neutral50};
  }

  :focus {
    border: 2px solid ${(props) => props.theme.purple10};
  }

  :active {
    background-color: ${(props) => props.theme.purple10};
    color: ${(props) => props.theme.purple90};
  }
  :disabled {
    color: ${(props) => props.theme.purple20};
  }
`;
