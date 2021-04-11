import styled from 'styled-components';

export const RadioLabel = styled.label`
  color: ${(props) => props.theme.ink40};
  font-weight: 200;
  font-size: 18px;
  cursor: pointer;
  padding: 4px 15px;
  border-radius: 4px;
`;

export const CheckLabel = styled.label`
  width: 25px;
  height: 25px;
  border: 2px solid ${(props) => props.theme.ink50};
  border-radius: 50%;

  .check {
    width: 5px;
    height: 5px;
    background: yellow;
    display: inline-block;
  }
`;

export const Radio = styled.input`
  display: none;
  &:checked + ${RadioLabel} {
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.purple20};
    transition: all 0.3s ease;
  }
`;

export const OptionContainer = styled.form`
  width: 340px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px 10px;
`;
