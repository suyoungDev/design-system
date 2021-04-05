import React from 'react';
import DropdownMenuList from './DropdownMenuList';

const DropdownMenu = ({ isOpen }) => {
  return <div>{isOpen && <DropdownMenuList />}</div>;
};

export default DropdownMenu;
