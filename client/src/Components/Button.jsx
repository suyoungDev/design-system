import styled, { css } from 'styled-components';

const defineButtonStyle = (props) => {
  if (props.primary) return primaryStyles;
  if (props.secondary) return secondaryStyles;
  if (props.tertiary) return tertiaryStyles;
  if (props.basic) return basicStyles;
  else return hoverStyles;
};

export const Button = styled.button`
  height: 35px;
  padding: 0.4em 1em;
  font-weight: 500;
  letter-spacing: 0.5px;
  background: transparent;
  border: 2px solid transparent;
  border-radius: 8px;
  outline: none;
  transition: all 0.3s ease;
  cursor: pointer;

  ${defineButtonStyle};

  .react-icons {
    display: flex;
    align-items: center;
  }
`;

export const SmallButton = styled(Button)`
  align-self: center;
  height: 32px;
  font-size: 12px;
  font-weight: 400;
  margin-right: 0.2rem;
`;

const basicStyles = css`
  color: ${(props) => props.theme.white};
  font-weight: 200;
  :hover {
    opacity: 0.5;
  }
`;

const hoverStyles = css`
  color: ${(props) => props.theme.ink30};

  :hover {
    color: ${(props) => props.theme.purple40};
  }
`;

const primaryStyles = css`
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.purple50};
  width: ${({ hex }) => hex && '200px'};
  position: ${({ hex }) => hex && 'absolute'};
  bottom: ${({ hex }) => hex && '25px'};

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
  border-radius: 8px;
  :hover {
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
