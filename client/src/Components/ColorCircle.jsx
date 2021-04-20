import styled, { css } from 'styled-components';

const defineStyles = (props) => {
  if (props.big) return bigStyles;
};

export const ColorCircle = styled.div`
  width: 20px;
  height: 20px;
  padding: 10px;
  background: ${(props) => props.hexId};
  border-radius: 50%;
  ${defineStyles}
`;

const bigStyles = css`
  width: 35px;
  height: 35px;
  border-radius: 30%;
  margin-right: 0.7rem;
`;

export const ColorBox = styled(ColorCircle)`
  border-radius: 0px;
  width: 40px;
  height: 40px;
  border: 1px solid ${(props) => props.borderColor};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  :nth-child(1) {
    border-radius: 5px 0 0 5px;
  }
  :last-child {
    border-radius: 0 5px 5px 0;
  }
`;

export const AddContainer = styled.button`
  outline: none;
  width: 40px;
  height: 40px;
  padding: 10px;
  background: white;
  border-radius: 5px;
  border: 2px solid ${(props) => props.theme.neutral50};

  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.7rem;
  transition: all 0.5s ease;

  :hover {
    background: ${(props) => props.theme.neutral50};
    .react-icons {
      color: ${(props) => props.theme.ink30};
    }
  }

  :active {
    transform: scale(0.8);
    transition: transform 0.5s ease;
  }
`;
