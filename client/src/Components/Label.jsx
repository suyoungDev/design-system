import styled, { css } from 'styled-components';

const definedStyles = (props) => {
  if (props.card) return cardModuleStyles;
  if (props.cardHover) return cardHoverModuleStyles;
};

const cardHoverModuleStyles = css`
  @media screen and (min-width: 768px) {
    align-self: flex-start;
    padding-top: 0.6rem;
  }
`;

const cardModuleStyles = css`
  align-items: center;

  @media screen and (min-width: 768px) {
    padding: 0;
    margin: 0;
  }
`;

export const Label = styled.label`
  color: ${(props) => props.theme.ink50};
  font-weight: 200;
  width: 160px;
  height: 36px;
  display: flex;
  align-items: ${({ center }) => (center ? 'center' : 'flex-start')};
  word-break: keep-all;

  ${definedStyles}
`;
