import styled from 'styled-components';

export const Heading = styled.h2`
  margin: 1rem 1.5rem;
  color: ${(props) => props.headHex};
  text-transform: capitalize;
`;

export const ContextContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
`;

export const ButtonBox = styled.div`
  padding: 0 1.5rem;
  margin: 1rem 0;
`;

export const CardButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 35px;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  font-weight: 400;
  font-size: 0.8rem;
  letter-spacing: 2px;
  background-color: ${(props) => props.mainHex};
  color: ${(props) => props.textHex};
  transition: all 0.3s ease;
  text-transform: uppercase;
  :hover {
    background-color: ${(props) => props.hoverHex};
    color: ${(props) => props.hoverText};
  }
`;

export const Context = styled.div`
  padding: 0 1.5rem;
  width: 100%;
  font-size: 0.85rem;
  color: ${(props) => props.contentHex};
`;

export const CardLayout = styled.div`
  position: relative;

  width: 300px;
  height: 200px;
  border: 1px solid ${(props) => props.theme.neutral50};
  border-radius: ${({ radius }) => `${radius}px`};
  box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.1);
  transition: transform 0.5s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  :not(:first-child) {
    margin-bottom: 2rem;
  }

  :hover {
    transform: translateY(-0.35em);
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

  @media screen and (min-width: 768px) {
    width: 350px;
  }
`;

export const PhotoCardLayout = styled(CardLayout)`
  height: 390px;
  padding: 0;
  display: grid;
  grid-template-rows: 190px 200px;
`;
