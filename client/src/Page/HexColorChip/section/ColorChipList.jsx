import React from 'react';
import { observer } from 'mobx-react-lite';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import ColorChipListItems from './ColorChipListItems';

const ChipList = styled.div`
  width: 100%;
  max-width: 540px;
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
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
          <div
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
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
});

export default ColorChipList;
