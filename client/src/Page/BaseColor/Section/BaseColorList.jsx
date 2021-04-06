import React from 'react';
import styled from 'styled-components';
import BaseColorModule from './BaseColorModule';
import { observer } from 'mobx-react-lite';

const ListLayout = styled.div`
  display: flex;
  flex-direction: column;

  > :first-child {
    border-top: 1px solid ${(props) => props.theme.neutral50};
  }
  > :not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.neutral50};
  }
  border-bottom: 1px solid ${(props) => props.theme.neutral50};
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
