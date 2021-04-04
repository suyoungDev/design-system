import React from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { CgClose } from 'react-icons/cg';

import ColorBox from './ColorBox';
import { colorChipListStore } from '../../../Store/ColorListStore';
import { Row } from '../../../Components/Row';
import { Button } from '../../../Components/Button';

const RelativeBox = styled.div`
  position: relative;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 8px;
  width: 100%;
`;

const Item = styled.div`
  position: relative;
  z-index: 0;
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
    <Item>
      <ButtonContainer>
        <Row className='jc_sb'>
          <Button onClick={changeColor}>수정</Button>
          <Button
            onClick={() => {
              colorChipListStore.deleteColorChip(item.id);
            }}
          >
            <CgClose />
          </Button>
        </Row>
      </ButtonContainer>
      <RelativeBox>
        <ColorBox item={item} />
      </RelativeBox>
    </Item>
  );
});

export default Chip;
