import React from 'react';
import { BiPalette, BiCodeAlt, BiPlus } from 'react-icons/bi';
import { WindowSection } from './Section5.styles';

const CodePanWindow = () => {
  return (
    <WindowSection>
      <span>Custon Code</span>
      <div>
        <BiCodeAlt />
        <BiPalette />
        <BiPlus />
      </div>
    </WindowSection>
  );
};

export default CodePanWindow;
