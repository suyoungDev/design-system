import React from 'react';
import ChangeName from './ChangeName';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ModifyName = observer(({ isOpen, item, ...props }) => {
  return (
    <Container>
      {!isOpen && <span>{item.title}</span>}
      {isOpen && <ChangeName item={item} {...props} />}
    </Container>
  );
});

export default ModifyName;
