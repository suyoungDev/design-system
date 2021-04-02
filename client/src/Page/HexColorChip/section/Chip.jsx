import React, { useRef } from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

const Card = styled.div`
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
  color: gray;
  font-size: 14px;
`;

const Chip = observer(({ item }) => {
  const chip = useRef(null);

  const onClick = () => {
    let innerText = chip.current.innerText;
    navigator.clipboard.writeText(innerText);
    // 저장했다는 모션 나오면 좋을 듯? 근데 이건 뭘로하지? 모달?은 아닌디..
  };

  return (
    <li>
      <Label>{item.title}</Label>
      <Card hexId={item.hexId} onClick={onClick} ref={chip}>
        {item.hexId}
      </Card>
    </li>
  );
});

export default Chip;
