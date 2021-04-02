import React from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { colorChipListStore } from '../../../Store/ColorListStore';
import ColorBox from './ColorBox';

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
        {item.title}
      </ColorBox>
    </li>
  );
});

export default Chip;
