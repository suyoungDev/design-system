import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { ColorCircle } from '../../../Components/ColorCircle';
import { colorChipListStore } from '../../../Store/ColorListStore';

const Container = styled.div`
  width: 100%;
  background: ${(props) => props.theme.neutral40};
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(14, 25px);
  padding: 1rem 1.5rem;
`;

const Button = styled.button`
  outline: none;
  border: none;
  background: transparent;
  margin-right: 1rem;
  border: 2px solid transparent;
  width: 20px;

  :hover {
    transform: scale(1.1);
  }
  :active {
    transform: scale(0.9);
  }

  transition: all 0.3s ease;
`;

const ChangeBaseColorList = observer(({ changeColor }) => {
  return (
    <Container>
      {colorChipListStore.colorList.map((item) => (
        <Button
          onClick={(e) =>
            changeColor(e.currentTarget.name, e.currentTarget.value)
          }
          key={item.id}
          value={item.hexId}
          name={item.label}
        >
          <ColorCircle hexId={item.hexId} select />
        </Button>
      ))}
    </Container>
  );
});

export default ChangeBaseColorList;
