import styled, { css } from 'styled-components';

const defineModalStyles = (props) => {
  if (props.big) return BigStyles;
};

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  backdrop-filter: blur(2px);
`;

export const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 500px;
  height: 300px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: white;
  position: relative;
  border-radius: 10px;
  z-index: 150;
  ${defineModalStyles}
`;

const BigStyles = css`
  height: 700px;
`;
