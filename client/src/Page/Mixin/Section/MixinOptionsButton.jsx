import React from 'react';
import { AddContainer } from '../../../Components/ColorCircle';
import { CgOptions } from 'react-icons/cg';

const MixinOptionsButton = ({ setIsOptionOpen }) => {
  return (
    <AddContainer onClick={(props) => setIsOptionOpen(!props)}>
      <CgOptions />
    </AddContainer>
  );
};

export default MixinOptionsButton;
