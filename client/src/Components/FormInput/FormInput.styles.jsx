import styled from 'styled-components';

export const Label = styled.label`
  font-size: 16px;
  font-weight: normal;
  color: gray;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  background: none;
  background-color: white;
  color: black;
  font-size: 18px;
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
