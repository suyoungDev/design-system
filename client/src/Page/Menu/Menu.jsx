import React, { useState, useEffect } from 'react';
import { BiSave, BiDockTop, BiPalette, BiArrowToTop } from 'react-icons/bi';
import { IoMdBrush } from 'react-icons/io';
import { BsType } from 'react-icons/bs';
import { animateScroll as scroll } from 'react-scroll';
import { NavMenu, NavLinkS, NavItem, NavContainer } from './Menu.styles';

const Menu = () => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 70) setScrollNav(true);
    else setScrollNav(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleTop = () => {
    scroll.scrollToTop();
  };

  return (
    <NavContainer>
      <NavMenu scrollNav={scrollNav}>
        <NavItem>
          <NavLinkS
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-30}
            onClick={toggleTop}
            activeClass='active'
            to='top'
          >
            <BiArrowToTop />
          </NavLinkS>
        </NavItem>
        <NavItem>
          <NavLinkS
            to='allcolors'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-30}
            activeClass='active'
          >
            <BiPalette />
          </NavLinkS>
        </NavItem>
        <NavItem>
          <NavLinkS
            to='maincolors'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-30}
            activeClass='active'
          >
            <IoMdBrush />
          </NavLinkS>
        </NavItem>
        <NavItem>
          <NavLinkS
            to='typo'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-30}
            activeClass='active'
          >
            <BsType />
          </NavLinkS>
        </NavItem>
        <NavItem>
          <NavLinkS
            to='cards'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-30}
            activeClass='active'
          >
            <BiDockTop />
          </NavLinkS>
        </NavItem>
        <NavItem>
          <NavLinkS
            to='save'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-30}
            activeClass='active'
          >
            <BiSave />
          </NavLinkS>
        </NavItem>
      </NavMenu>
    </NavContainer>
  );
};

export default Menu;
