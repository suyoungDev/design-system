import styled from 'styled-components';

export const Copy = styled.div`
  position: absolute;
  left: 42px;
  top: 40px;

  .react-icons {
    color: ${({ buttonColor }) => buttonColor};
    transition: opacity 0.4s ease;
    opacity: 0;
  }
`;

export const Container = styled.div`
  cursor: pointer;
  width: 100px;
  height: 100px;

  display: grid;
  grid-template-rows: 70px 30px;
  border: 1px solid ${({ borderColor }) => `${borderColor}`};
  border-radius: 13px;
  overflow: hidden;

  :hover {
    .react-icons {
      opacity: 0.7;
    }
  }
`;

export const Color = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid ${({ hexId }) => `${hexId}`};
  background-color: ${({ hexId }) => `${hexId}`};
`;

export const Label = styled.label`
  font-size: 11px;
  font-weight: 200;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  > span {
    color: ${(props) => props.theme.ink30};
    padding-bottom: 3px;

    :first-child {
      color: ${(props) => props.theme.ink40};
      font-weight: 500;
      font-size: 12px;
    }
  }
`;
