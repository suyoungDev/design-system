import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import { colorChipListStore } from '../../../Store/ColorListStore';
import ChangeBaseColorModule from './ChangeBaseColorModule';

const Container = styled.div`
  width: 100%;
  background: ${(props) => props.theme.neutral40};
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(20px, 1fr));
  padding: ${({ small }) => (small ? '0' : '1rem 1.5rem')};
`;

const ChangeBaseColorList = observer(({ changeColor, ...props }) => {
  return (
    <Container {...props}>
      {colorChipListStore.colorList.map((item) => (
        <ChangeBaseColorModule
          item={item}
          changeColor={changeColor}
          key={item.id}
        />
      ))}
    </Container>
  );
});

export default ChangeBaseColorList;
