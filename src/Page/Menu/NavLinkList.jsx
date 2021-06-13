import React from 'react';
import { NavMenu } from './Menu.styles';
import NavLinkModule from './NavLinkModule';

const NavLinkList = ({ isVisible, isDisplay, list }) => {
  return (
    <NavMenu isVisible={isVisible} isDisplay={isDisplay}>
      {list.data.map((item) => (
        <NavLinkModule item={item} config={list.config} key={item.to} />
      ))}
    </NavMenu>
  );
};

export default NavLinkList;
