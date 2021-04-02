import React from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { colorChipListStore } from '../../../Store/ColorListStore';

const ColorBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ hexId }) => (hexId ? `${hexId}` : '#dbdbdb')};
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;

const Label = styled.label`
  color: white;
  font-size: 14px;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 5px 10px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 1rem;
`;

const Chip = observer(({ item }) => {
  const getHexId = () => {
    navigator.clipboard.writeText(item.hexId);
    // 저장했다는 모션 나오면 좋을 듯? 근데 이건 뭘로하지? 모달?은 아닌디..
  };

  const changeColor = () => {
    const hexId = prompt('hexId');
    const title = prompt('title');
    if (hexId && title) item.fix(hexId, title);
  };

  return (
    <li>
      <Row>
        <button
          onClick={() => {
            colorChipListStore.deleteColorChip(item.id);
          }}
        >
          X
        </button>
        <button onClick={changeColor}>수정</button>
      </Row>
      <ColorBox hexId={item.hexId} onClick={getHexId}>
        <Label>{item.title}</Label>
      </ColorBox>
    </li>
  );
});

export default Chip;
