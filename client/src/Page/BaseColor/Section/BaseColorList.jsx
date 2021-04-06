import React from 'react';
import styled from 'styled-components';
import BaseColorModule from './BaseColorModule';
import { observer } from 'mobx-react-lite';

const ListLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;
`;

const BaseColorList = observer(({ store }) => {
  return (
    <ListLayout>
      {store?.baseColorList.map((item) => (
        <BaseColorModule item={item} key={item.id} />
      ))}
    </ListLayout>
  );
});

export default BaseColorList;
