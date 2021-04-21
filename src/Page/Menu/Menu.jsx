import React, { useState, useEffect, lazy, Suspense } from 'react';
import { withRouter, useLocation } from 'react-router-dom';

import { NavContainer } from './Menu.styles';
import NAV_LIST from './NAV_LIST';
const NavLinkList = lazy(() => import('./NavLinkList'));

const Menu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/main') {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
    // eslint-disable-next-line
  }, [pathname]);

  const changeNav = () => {
    if (window.scrollY >= 70) setIsVisible(true);
    else setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    return () => {
      window.removeEventListener('scroll', changeNav);
    };
  }, []);

  return (
    <NavContainer>
      {isOpen && (
        <Suspense fallback={<div>...loading</div>}>
          <NavLinkList list={NAV_LIST} isVisible={isVisible} />
        </Suspense>
      )}
    </NavContainer>
  );
};

export default withRouter(Menu);
