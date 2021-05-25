import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MenuButton } from '../../Components/Button';
import Menu from './Menu';
import { Nav, Container, Header } from './NavbBar.styles';
import { animateScroll } from 'react-scroll';

const NavBar = () => {
  const [visiblility, setVisiblility] = useState(true);
  const [location, setLocation] = useState('');
  const { pathname } = useLocation();

  const onScroll = () => {
    const offset = window.pageYOffset;
    const height = window.innerHeight;

    if (offset >= height * 2.6) setVisiblility(false);
    else setVisiblility(true);
  };

  useEffect(() => {
    setLocation(pathname);

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [pathname]);

  const goToStart = () => {
    animateScroll.scrollToTop({ smooth: 'linear' });
  };

  return (
    <Header location={location}>
      <Nav>
        <Container visiblility={visiblility} location={location}>
          <h2 onClick={goToStart}>Dd</h2>
          {location === '/main' && <MenuButton to='/'>돌아가기</MenuButton>}
          {location === '/' && <MenuButton to='/main'>시작하기</MenuButton>}
        </Container>
      </Nav>
      <Menu />
    </Header>
  );
};

export default NavBar;
