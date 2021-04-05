import React from 'react';
import styled from 'styled-components';
import BaseColorModule from './BaseColorModule';

const ListLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;
`;

const BaseColorList = ({ store }) => {
  return (
    <ListLayout>
      {store?.baseColorList.map((item) => (
        <BaseColorModule item={item} key={item.id} />
      ))}
    </ListLayout>
  );
};

export default BaseColorList;
