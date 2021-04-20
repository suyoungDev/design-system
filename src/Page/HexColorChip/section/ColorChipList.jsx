import React from 'react';
import { observer } from 'mobx-react-lite';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import ColorChipListItems from './ColorChipListItems';

const Wrapper = styled.div`
  width: 100%;
`;

const ChipList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-gap: 0.7rem;
`;

const ColorChipList = observer(({ colorChipListStore }) => {
  const colorList = colorChipListStore?.colorList;

  function onDragEnd(result) {
    const sourceIndex = result.source.index;
    const destinationIndex = result.destination?.index;

    colorChipListStore.changeOrder(sourceIndex, destinationIndex);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='droppable-1' direction='horizontal'>
        {(provided, snapshot) => (
          <Wrapper
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{
              backgroundColor: snapshot.isDraggingOver ? '#FCFBFC' : 'white',
            }}
          >
            <ChipList>
              <ColorChipListItems
                colorList={colorList}
                {...provided}
                {...snapshot}
              />
            </ChipList>
            {provided.placeholder}
          </Wrapper>
        )}
      </Droppable>
    </DragDropContext>
  );
});

export default ColorChipList;
