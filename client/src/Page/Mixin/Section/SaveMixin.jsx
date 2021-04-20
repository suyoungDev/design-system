import React from 'react';
import { AddContainer } from '../../../Components/ColorCircle';
import { BiSave } from 'react-icons/bi';
import { mixinStore } from '../../../Store/MixinStore';

const SaveMixin = ({ id }) => {
  const addToPalette = () => {
    mixinStore.addMixinToPalette(id);
  };

  return (
    <AddContainer title='팔레트에 기록' onClick={addToPalette}>
      <BiSave />
    </AddContainer>
  );
};

export default SaveMixin;
