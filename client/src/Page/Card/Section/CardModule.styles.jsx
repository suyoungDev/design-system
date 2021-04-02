import styled from 'styled-components';

export const Heading = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin: 15px 20px;
  display: flex;
  align-items: center;
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

  margin: 0px 20px;
  font-weight: bold;
  font-size: 0.6rem;
  background-color: ${({ hexId }) => hexId && `${hexId}`};
  position: absolute;
  bottom: 20px;
  :hover {
    opacity: 0.7;
  }
`;

export const Context = styled.span`
  display: flex;
  margin: 0 20px;
  width: 340px;
  font-size: 0.85rem;
`;

export const CardLayout = styled.div`
  position: relative;

  width: 380px;
  height: 180px;
  border: 1px solid #f2f3f5;
  border-radius: 0.3em;

  display: flex;
  flex-direction: column;

  :not(:first-child) {
    margin-bottom: 2rem;
  }

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

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