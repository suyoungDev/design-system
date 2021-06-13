import React, { useState, useEffect, lazy, Suspense } from 'react';
import { withRouter, useLocation } from 'react-router-dom';

import { NavContainer } from './Menu.styles';
import NAV_LIST from './NAV_LIST';
const NavLinkList = lazy(() => import('./NavLinkList'));

const Menu = () => {
  const [isDisplay, setIsDisplay] = useState(false);
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
    if (window.scrollY > 50) setIsDisplay(true);
    if (window.scrollY > 100) setIsVisible(true);
    else {
      setIsVisible(false);
      setIsDisplay(false);
    }
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
        <Suspense fallback={<div></div>}>
          <NavLinkList
            list={NAV_LIST}
            isVisible={isVisible}
            isDisplay={isDisplay}
          />
        </Suspense>
      )}
    </NavContainer>
  );
};

export default withRouter(Menu);
