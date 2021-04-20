import React, { useEffect, useState } from 'react';
import { withRouter, useLocation } from 'react-router-dom';
import { MenuButton } from '../../Components/Button';
import Menu from './Menu';
import { Nav, Container, Navigation } from './NavbBar.styles';
import { animateScroll } from 'react-scroll';

const NavBar = ({ history }) => {
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

  const onLogoClick = () => {
    animateScroll.scrollToTop({ smooth: 'linear' });
  };

  return (
    <Nav visiblility={visiblility} location={location}>
      <Container visiblility={visiblility} location={location}>
        <Navigation>
          <ul>
            <li onClick={onLogoClick}>Dd</li>
          </ul>
        </Navigation>
        {location === '/main' && <MenuButton to='/'>돌아가기</MenuButton>}
        {location === '/' && <MenuButton to='/main'>시작하기</MenuButton>}
      </Container>
      <Menu />
    </Nav>
  );
};

export default withRouter(NavBar);
