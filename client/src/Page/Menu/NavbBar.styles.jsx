import styled from 'styled-components';

export const Nav = styled.header`
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 80px;
  padding: 0 2em;
  background: ${(props) => props.theme.white};
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;

  @media screen and (min-width: 768px) {
    display: flex;
    background-color: ${({ location }) =>
      location === '/main' && 'transparent'};
  }
`;

export const Navigation = styled.nav`
  color: ${(props) => props.theme.purple40};
  height: 100%;
  left: 4rem;
  top: 0;
  display: flex;
  align-items: center;

  ul {
    display: flex;
    flex-direction: row;
    cursor: pointer;
    list-style: none;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bold;
    font-size: 1rem;

    li {
      :not(:last-child) {
        margin-right: 1rem;
      }
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1250px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    display: ${({ visiblility, location }) =>
      !visiblility && location === '/main'
        ? 'none'
        : !visiblility && location === '/'
        ? 'flex'
        : 'flex'};

    justify-content: space-between;
  }
`;
