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
  border: 1px solid ${(props) => props.theme.neutral50};
  border-radius: ${({ radius }) => `${radius}px`};
  box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.1);
  transition: transform 0.5s ease;

  display: flex;
  flex-direction: column;

  :not(:first-child) {
    margin-bottom: 2rem;
  }

  :hover {
    transform: translateY(-0.35em) scale(1.002);
  }
  ::after {
    z-index: -1;
    content: '';
    position: absolute;
    border-radius: ${({ radius }) => `${radius}px`};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    box-shadow: 0 0.5rem 1rem -0.25em rgba(0, 0, 0, 0.2);
  }
  :hover::after {
    opacity: 1;
  }
`;

export const PhotoCardLayout = styled(CardLayout)`
  height: 390px;
  padding: 0;
  display: grid;
  grid-template-rows: 190px 200px;
`;
