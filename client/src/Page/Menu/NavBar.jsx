import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { MenuButton } from '../../Components/Button';
import Menu from './Menu';
import { Nav, Container, Navigation } from './NavbBar.styles';

const NavBar = ({ history }) => {
  const [visiblility, setVisiblility] = useState(true);
  const [location, setLocation] = useState('');

  const onScroll = () => {
    const offset = window.pageYOffset;
    const height = window.innerHeight;

    if (offset >= height * 2.6) setVisiblility(false);
    else setVisiblility(true);
  };

  useEffect(() => {
    const path = history.location.pathname;
    setLocation(path);

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [history.location.pathname]);

  return (
    <Nav visiblility={visiblility} location={location}>
      <Container visiblility={visiblility} location={location}>
        <Navigation>
          <ul>
            <li>pallete</li>
            <li>colors</li>
            <li>typography</li>
            <li>card</li>
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
