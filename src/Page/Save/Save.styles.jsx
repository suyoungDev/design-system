import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${rotate} 2s linear;
`;

export const SavingButton = styled.button`
  display: inline-block;
  margin-top: 1rem;
  padding: 1em 2em;
  letter-spacing: 0.15em;
  transition: all 0.3s;
  overflow: hidden;
  position: relative;
  z-index: 1;
  border: none;
  outline: none;
  border-radius: 10rem;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.purple20};
    border-radius: 10rem;
    z-index: -2;
  }

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: ${(props) => props.theme.purple30};
    transition: all 0.3s;
    border-radius: 10rem;
    z-index: -1;
  }

  :hover {
    transform: scale(0.98, 0.98);
  }

  &.saving {
    color: white;
    &:before {
      width: 100%;
    }
  }
`;
