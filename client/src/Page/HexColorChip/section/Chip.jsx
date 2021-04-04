import React from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import ColorBox from './ColorBox';
import { colorChipListStore } from '../../../Store/ColorListStore';
import { Row } from '../../../Components/Row';
import { Button } from '../../../Components/Button';

const RelativeBox = styled.div`
  position: static;
`;

const Inner = styled.div`
  position: relative;
  top: 35px;
  left: 0px;
`;

const List = styled.li`
  list-style: none;
  margin-right: 1rem;
`;

// 드랍다운 메뉴 버튼 만들어서 '수정',
// '타이포컬러로 추가', 'accent로 추가' 이런거 있음 좋을듯?
const Chip = observer(({ item }) => {
  const changeColor = () => {
    const hexId = prompt('hexId');
    const title = prompt('title');
    if (hexId && title) item.fix(hexId, title);
  };

  return (
    <List>
      <Inner>
        <Row className='jc_sa'>
          <Button onClick={changeColor}>수정</Button>
          <Button
            onClick={() => {
              colorChipListStore.deleteColorChip(item.id);
            }}
          >
            X
          </Button>
        </Row>
      </Inner>
      <RelativeBox>
        <ColorBox item={item} />
      </RelativeBox>
    </List>
  );
});

export default Chip;
