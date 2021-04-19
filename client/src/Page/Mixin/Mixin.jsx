import React from 'react';
import { Wrapper } from '../../Components/Wrapper';
import Head from '../../Components/Head';
import ListOfMixin from './Section/ListOfMixin';
import { mixinStore } from '../../Store/MixinStore';

const Mixin = () => {
  const clickHandle = () => {
    mixinStore.addNewMixin();
  };
  return (
    <Wrapper id='mixin'>
      <Head title='mixin' addNew={clickHandle} />
      <ListOfMixin />
    </Wrapper>
  );
};

export default Mixin;
