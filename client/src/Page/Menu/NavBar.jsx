import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MenuButton } from '../../Components/Button';
import Menu from './Menu';

const Nav = styled.header`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 80px;
  padding: 0 2em;
  background: ${(props) => props.theme.lemon};
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const Navigation = styled.nav`
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
`;

const Container = styled.div`
  width: 100%;
  max-width: 1250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavBar = () => {
  const [visiblility, setvisiblility] = useState(true);

  const onScroll = () => {
    const offset = window.pageYOffset;
    const height = window.innerHeight;
    if (offset >= height * 1.7) setvisiblility(false);
    else setvisiblility(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <Nav style={{ opacity: !visiblility && 0 }}>
      <Container>
        <Navigation>
          <ul>
            <li>pallete</li>
            <li>colors</li>
            <li>typography</li>
            <li>card</li>
          </ul>
        </Navigation>
        <MenuButton>시작하기</MenuButton>
      </Container>
      <Menu />
    </Nav>
  );
};

export default NavBar;
