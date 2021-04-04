import styled, { css } from 'styled-components';

export const Label = styled.label`
  font-size: 16px;
  font-weight: normal;
  color: ${(props) => props.theme.ink30};
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
`;

const defineInputStyle = (props) => {
  if (props.setThemeName) return setThemeNameStyles;
};

export const Input = styled.input`
  background: none;
  background-color: white;
  color: black;
  font-size: 18px;
  display: block;
  width: 150px;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${(props) => props.theme.ink50};
  margin: 10px 0;

  &:focus {
    outline: none;
  }

  ${defineInputStyle}
`;

const setThemeNameStyles = css`
  font-size: 2em;
  text-transform: capitalize;
  color: ${(props) => props.theme.ink50};
  width: 100%;
  margin: 0;
  border-bottom: 1px solid ${(props) => props.theme.ink30};
`;
