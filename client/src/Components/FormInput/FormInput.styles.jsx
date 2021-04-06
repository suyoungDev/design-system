import styled, { css } from 'styled-components';

export const Label = styled.label`
  position: absolute;
  top: -12px;
  z-index: 1;
  font-size: 14px;
  font-weight: 300;
  color: ${(props) => props.theme.ink30};
`;

export const Group = styled.div`
  position: relative;
  width: 78%;
`;

const defineInputStyle = (props) => {
  if (props.setThemeName) return setThemeNameStyles;
};

export const Input = styled.input`
  position: relative;
  background: none;
  background-color: white;
  color: black;
  font-size: 18px;
  display: block;
  width: 150px;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${(props) => props.theme.ink50};
  margin: 10px 0 40px 0;

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
  border-bottom: 2px solid ${(props) => props.theme.neutral50};
  :focus {
    border-bottom: 2px solid ${(props) => props.theme.purple10};
  }
`;
