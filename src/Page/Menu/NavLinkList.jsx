import React from 'react';
import { NavMenu } from './Menu.styles';
import NavLinkModule from './NavLinkModule';

const NavLinkList = ({ isVisible, list }) => {
  return (
    <NavMenu isVisible={isVisible}>
      {list.data.map((item) => (
        <NavLinkModule item={item} config={list.config} key={item.to} />
      ))}
    </NavMenu>
  );
};

export default NavLinkList;
