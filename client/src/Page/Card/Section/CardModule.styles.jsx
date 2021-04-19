import styled from 'styled-components';

export const Heading = styled.h2`
  color: ${(props) => props.headHex};
  text-transform: capitalize;
`;

export const ContextContainer = styled.div`
  padding: 1rem 1.5rem;
  display: grid;
  grid-gap: 0.5rem;
  grid-template-rows: 0.5fr 1.5fr 1fr;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 35px;
  border: none;
  border-radius: ${({ buttonRadius }) => `${buttonRadius}px`};
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
  width: 100%;
  font-size: 0.85rem;
  color: ${(props) => props.contentHex};
`;

export const CardLayout = styled.div`
  position: relative;

  width: 300px;
  height: auto;

  border: 1px solid ${(props) => props.theme.neutral50};
  border-radius: ${({ radius }) => `${radius}px`};
  box-shadow: 0 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease;
  will-change: transfrom, opacity;

  :hover {
    transform: translateY(-0.35em);
  }

  ::after {
    z-index: -1;
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: ${({ radius }) => `${radius}px`};
    top: 0;
    left: 0;
    opacity: 0;
    box-shadow: 0 0.5rem 1rem -0.25rem rgba(0, 0, 0, 0.2);
  }
  :hover {
    ::after {
      opacity: 1;
    }
  }

  @media screen and (min-width: 768px) {
    width: 350px;
  }
`;

export const PhotoCardLayout = styled(CardLayout)`
  height: auto;
  padding: 0;
  display: grid;
  grid-template-rows: 190px auto;
`;
