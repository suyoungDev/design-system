import React from 'react';
import TypographyModule from './TypographyModule';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

const ListModule = styled.div`
  border-top: 1px solid ${(props) => props.theme.neutral50};
  border-bottom: 1px solid ${(props) => props.theme.neutral50};

  > div {
    :not(:last-child) {
      border-bottom: 1px solid ${(props) => props.theme.neutral50};
    }
  }
`;

const TypographyList = observer(({ list }) => {
  return (
    <ListModule>
      {list.colorList?.map((item) => (
        <TypographyModule hexId={item.hexId} key={item.id} item={item} />
      ))}
    </ListModule>
  );
});

export default TypographyList;
