import styled, { css } from 'styled-components';

export const ColorContainer = styled.div``;

const definedStyles = (props) => {
  if (props.mixin) return mixinOptionStyles;
  if (props.check) return checkOptionStyles;
};

const checkOptionStyles = css`
  :hover {
    input ~ span {
      background: #ccc;
    }
  }
`;

const mixinOptionStyles = css`
  font-size: 0.8rem;
  align-items: center;
  margin-bottom: 0.4rem;
  padding: 0;
`;

export const SaveWrapper = styled.div`
  display: flex;
  margin-bottom: 0.7rem;
`;

export const Label = styled.label`
  position: relative;

  color: ${(props) => props.theme.ink40};
  font-weight: 200;
  font-size: 0.8rem;
  cursor: pointer;
  padding: 0.3rem 0;
  padding-left: 35px;
  border-radius: 0.5rem;
  display: block;

  ${definedStyles}
`;

export const Checkbox = styled.span`
  position: absolute;
  top: 0.3rem;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;

  :after {
    content: '';
    position: absolute;
    display: none;

    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

export const Check = styled.input`
  display: none;

  &:checked + ${Checkbox} {
    background: ${(props) => props.theme.purple20};
  }
  &:checked ~ span:after {
    display: block;
  }
`;

export const Modifying = styled.span`
  font-size: 0.7rem;
  color: ${(props) => props.theme.ink30};
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
