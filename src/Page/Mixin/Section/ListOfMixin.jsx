import React, { Suspense } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { mixinStore } from '../../../Store/MixinStore';
const MixinModule = React.lazy(() => import('./MixinModule'));

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
        <Suspense fallback={<div>...loading...</div>} key={item.id}>
          <MixinModule item={item} />
        </Suspense>
      ))}
    </Container>
  );
});

export default ListOfMixin;
