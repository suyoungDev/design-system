import styled from 'styled-components';

export const Heading = styled.h2`
  margin: 15px 20px;
  color: ${(props) => props.headHex};
  text-transform: capitalize;
`;

export const CardButton = styled.button`
  display: block;
  align-items: center;
  align-self: center;
  justify-content: center;
  width: 340px;
  height: 35px;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  margin: 0px 20px;
  font-weight: 400;
  font-size: 0.6rem;
  background-color: ${(props) => props.mainHex};
  color: ${(props) => props.textHex};
  position: absolute;
  bottom: 20px;
  transition: all 0.3s ease;

  :hover {
    background-color: ${(props) => props.hoverHex};
    color: ${(props) => props.hoverText};
  }
`;

export const Context = styled.span`
  display: flex;
  margin: 0 20px;
  width: 340px;
  font-size: 0.85rem;
  color: ${(props) => props.contentHex};
`;

export const CardLayout = styled.div`
  position: relative;

  width: 380px;
  height: 200px;
  border: 1px solid #f2f3f5;
  border-radius: ${({ radius }) => `${radius}px`};

  display: flex;
  flex-direction: column;

  :not(:first-child) {
    margin-bottom: 2rem;
  }

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const PhotoCardLayout = styled(CardLayout)`
  height: 390px;
  padding: 0;
  display: grid;
  grid-template-rows: 190px 200px;
`;
