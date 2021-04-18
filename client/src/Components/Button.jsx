import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const defineButtonStyle = (props) => {
  if (props.primary) return primaryStyles;
  if (props.secondary) return secondaryStyles;
  if (props.tertiary) return tertiaryStyles;
  if (props.colorChip) return colorChipStyles;
  if (props.codeBox) return codeBoxStyles;
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

export const ButtonToTop = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.ink40};
  background: transparent;
  padding: 0;
  border-radius: 0;
  font-size: 0.9rem;

  > span {
    display: none;
  }

  .react-icons {
    font-size: 1rem;
    margin-left: 0;
    color: ${(props) => props.theme.ink40};
  }

  :hover {
    color: ${(props) => props.theme.purple60};
    background: transparent;

    .react-icons {
      color: ${(props) => props.theme.purple60};
    }
  }

  :focus {
    background: transparent;
    border: none;
  }

  @media screen and (min-width: 768px) {
    width: auto;
    height: auto;
    padding: 0;

    > span {
      display: flex;
    }
    .react-icons {
      margin-left: 0.7rem;
    }
  }
`;

export const MenuButton = styled(Link)`
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.purple60};

  padding: 0.7em 1.7em;
  margin: 0;

  display: none;

  align-items: center;
  border-radius: 35px;

  font-weight: bold;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  text-decoration: none;

  :hover {
    background: ${(props) => props.theme.purple20};
    color: white;
  }
  :active {
    background: ${(props) => props.theme.purple70};
    color: white;
    transform: scale(0.97);
  }

  @media screen and (min-width: 768px) {
    display: flex;
  }
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

export const CopyButton = styled(SmallButton)`
  position: absolute;
  top: 0px;
  right: 10px;
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
  color: ${(props) => props.theme.ink70};
  background: ${(props) => props.theme.white};
  padding: 1.2em 2em;
  display: flex;
  align-items: center;
  border-radius: 35px;
  margin-top: 0.5rem;

  font-size: 0.7rem;
  font-weight: bold;

  :hover {
    opacity: 0.8;
  }
  :focus {
    background: white;
  }
  :active {
    background: white;
  }

  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
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

const codeBoxStyles = css`
  color: ${(props) => props.theme.ink70};
  background: ${(props) => props.theme.white};
  padding: 1.2em 2em;
  border-radius: 35px;
  margin: 2rem 0;
  display: flex;
  align-items: center;
  font-size: 0.7rem;
  font-weight: bold;

  :hover {
    opacity: 0.8;
  }
  :focus {
    border: 2px solid transparent;
  }
  :active {
    background: ${(props) => props.theme.white};
  }

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;
