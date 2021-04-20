import React from 'react';
import { mixinStore } from '../../../Store/MixinStore';
import { observer } from 'mobx-react-lite';
import MixinModule from './MixinModule';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
`;

const ListOfMixin = observer(() => {
  return (
    <Container>
      {mixinStore.mixinList.map((item) => (
        <MixinModule item={item} key={item.id} />
      ))}
    </Container>
  );
});

export default ListOfMixin;
