import React from 'react';
import { NavLinkS, NavItem } from './Menu.styles';
import { animateScroll as scroll } from 'react-scroll';

import { BiSave, BiDockTop, BiPalette, BiArrowToTop } from 'react-icons/bi';
import { IoColorFilterOutline } from 'react-icons/io5';
import { IoMdBrush } from 'react-icons/io';
import { BsType } from 'react-icons/bs';

const NavLinkModule = ({ item, config }) => {
  const toggleTop = () => {
    scroll.scrollToTop({ duration: 500, smooth: 'easeOutQuad' });
  };

  return (
    <NavItem>
      {item.to === 'top' && (
        <NavLinkS
          smooth={config.smooth}
          duration={config.duration}
          spy={config.spy}
          exact='true'
          offset={config.offset}
          activeClass={config.activeClass}
          to={item.to}
          onClick={toggleTop}
        >
          <BiArrowToTop />
        </NavLinkS>
      )}
      {item.to !== 'top' && (
        <NavLinkS
          smooth={config.smooth}
          duration={config.duration}
          spy={config.spy}
          exact='true'
          offset={config.offset}
          activeClass={config.activeClass}
          to={item.to}
        >
          {item.to === 'palette' && <BiPalette />}
          {item.to === 'mixin' && <IoColorFilterOutline />}
          {item.to === 'maincolors' && <IoMdBrush />}
          {item.to === 'typo' && <BsType />}
          {item.to === 'cards' && <BiDockTop />}
          {item.to === 'save' && <BiSave />}
        </NavLinkS>
      )}
    </NavItem>
  );
};

export default NavLinkModule;
