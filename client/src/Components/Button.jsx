import styled, { css } from 'styled-components';

const defineButtonStyle = (props) => {
  if (props.primary) return primaryStyles;
  if (props.secondary) return secondaryStyles;
  if (props.tertiary) return tertiaryStyles;
  if (props.colorChip) return colorChipStyles;
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
`;

export const SmallButton = styled(Button)`
  align-self: center;
  height: 32px;
  font-size: 12px;
  font-weight: 400;
  margin-right: 0.2rem;
  padding: ${({ narrow }) => narrow && '0.2rem 0.3rem'};
  border: none;
`;

export const ModalButton = styled(Button)`
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding: 0;
`;

export const ModalSubmitButton = styled(Button)`
  color: ${(props) => props.theme.ink50};
  background: ${(props) => props.theme.neutral50};
  width: 200px;
  height: auto;
  padding: 0.6em 3em;

  :hover {
    background: ${(props) => props.buttonColor};
    color: ${(props) => props.theme.white};
  }
`;

const colorChipStyles = css`
  color: ${(props) => props.color};
  font-weight: 200;
  :hover {
    opacity: 0.5;
  }

  .react-icons {
    font-size: 0.6rem;
    color: ${(props) => props.color};
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
