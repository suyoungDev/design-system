import styled, { css } from 'styled-components';

export const shrinkStyle = css`
  top: -14px;
  font-size: 12px;
  color: black;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  top: 10px;
  left: 5px;
  transition: all 0.3s ease;

  &.shrink {
    ${shrinkStyle}
  }
`;

export const Group = styled.div`
  position: relative;
  margin: 15px 0;

  :hover {
    ${Label} {
      ${shrinkStyle}
    }
  }
`;

export const Input = styled.input`
  background: none;
  background-color: white;
  color: black;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 150px;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid black;
  margin: 10px 0;

  &:focus {
    outline: none;
  }
`;
