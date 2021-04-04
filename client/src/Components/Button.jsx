import styled, { css } from 'styled-components';

const defineButtonStyle = (props) => {
  if (props.primary) return primaryStyles;
  if (props.secondary) return secondaryStyles;
  if (props.tertiary) return tertiaryStyles;
  else return hoverStyles;
};

export const Button = styled.button`
  border: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  color: ${(props) => props.theme.white};
  padding: 9px 15px;
  border-radius: 5px;
  font-weight: 300;
  transition: all 0.3s ease;
  border: 2px solid transparent;

  ${defineButtonStyle};

  .react-icons {
    display: flex;
    align-items: center;
  }
`;

const hoverStyles = css`
  :hover {
    opacity: 0.7;
  }
`;

const primaryStyles = css`
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.purple50};
  width: ${({ hex }) => hex && '150px'};

  :hover {
    background: ${(props) => props.theme.purple70};
  }
  :focus {
    border: 2px solid ${(props) => props.theme.purple10};
  }
  :active {
    background: ${(props) => props.theme.purple90};
  }
  :disabled {
    background: ${(props) => props.theme.purple20};
  }
`;

const secondaryStyles = css`
  background: ${(props) => props.theme.neutral50};
  color: ${(props) => props.theme.ink50};

  :hover {
    background: ${(props) => props.theme.neutral60};
  }
  :focus {
    border: 2px solid ${(props) => props.theme.purple10};
    background: ${(props) => props.theme.neutral50};
  }
  :active {
    background: ${(props) => props.theme.neutral70};
  }
  :disabled {
    color: ${(props) => props.theme.ink30};
    background: ${(props) => props.theme.neutral50};
  }
`;

const tertiaryStyles = css`
  color: ${(props) => props.theme.purple50};

  :hover {
    color: ${(props) => props.theme.purple70};
    background: ${(props) => props.theme.neutral50};
  }

  :focus {
    border: 2px solid ${(props) => props.theme.purple10};
  }

  :active {
    background: ${(props) => props.theme.purple10};
    color: ${(props) => props.theme.purple90};
  }
  :disabled {
    color: ${(props) => props.theme.purple20};
  }
`;
