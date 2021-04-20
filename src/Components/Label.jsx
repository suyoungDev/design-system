import styled, { css } from 'styled-components';

const definedStyles = (props) => {
  if (props.card) return cardModuleStyles;
  if (props.cardHover) return cardHoverModuleStyles;
  if (props.mixin) return mixinOptionStyles;
};

const mixinOptionStyles = css`
  font-size: 0.8rem;
  align-items: center;
  margin-bottom: 0.4rem;
`;

const cardHoverModuleStyles = css`
  @media screen and (min-width: 768px) {
    align-self: flex-start;
    padding-top: 0.6rem;
    width: 250px;
  }
`;

const cardModuleStyles = css`
  align-items: center;

  @media screen and (min-width: 768px) {
    padding: 0;
    margin: 0;
    width: 250px;
  }
`;

export const Label = styled.label`
  color: ${(props) => props.theme.ink50};
  font-weight: 400;
  width: 160px;
  height: 36px;
  display: flex;
  align-items: ${({ center }) => (center ? 'center' : 'flex-start')};
  word-break: keep-all;

  ${definedStyles}
`;
