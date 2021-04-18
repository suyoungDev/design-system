import styled, { css } from 'styled-components';

const definedStyles = (props) => {
  if (props.card) return cardModuleStyles;
};

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

  ${definedStyles}
`;
