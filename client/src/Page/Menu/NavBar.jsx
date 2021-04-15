import React from 'react';
import styled from 'styled-components';
import { MenuButton } from '../../Components/Button';
import Menu from './Menu';

const Nav = styled.div`
  width: 100%;
  height: 80px;
  padding: 0 2em;
  background: ${(props) => props.theme.lemon};
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  > div:first-of-type {
    color: ${(props) => props.theme.purple40};
    height: 100%;
    left: 4rem;
    top: 0;
    display: flex;
    align-items: center;

    ul {
      display: flex;
      flex-direction: row;

      list-style: none;
      font-family: 'Roboto Condensed', sans-serif;
      font-weight: bold;
      font-size: 1rem;

      li {
        text-transform: uppercase;
        :not(:last-child) {
          margin-right: 1rem;
        }
      }
    }
  }
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: bold;
  font-size: 4rem;
  color: ${(props) => props.theme.purple70};
`;

const NavBar = () => {
  return (
    <Nav>
      <Container>
        <div>
          <ul>
            <li>pallete</li>
            <li>colors</li>
            <li>typography</li>
            <li>card</li>
          </ul>
        </div>
        <MenuButton>시작하기</MenuButton>
      </Container>
      <Menu />
    </Nav>
  );
};

export default NavBar;
