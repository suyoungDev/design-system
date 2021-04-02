import React, { useRef } from 'react';
import styled from 'styled-components';

const Chip = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ hexId }) => (hexId ? `${hexId}` : '#dbdbdb')};
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;

const ColorChipList = ({ colorChipListStore }) => {
  const chip = useRef(null);

  console.log(colorChipListStore.colorList);
  const onClick = () => {
    let innerText = chip.current.innerText;
    navigator.clipboard.writeText(innerText);
    // 저장했다는 모션 나오면 좋을 듯? 근데 이건 뭘로하지? 모달?은 아닌디..
  };

  return (
    <Chip onClick={onClick} ref={chip}>
      +
    </Chip>
  );

  // return (
  //   <>
  //     {colorList.map((item) => (
  //       <Chip hexId={item.hexId} onClick={onClick}>
  //         {item.whatFor}
  //       </Chip>
  //     ))}
  //     <Chip onClick={onClick} ref={chip}>
  //       +
  //     </Chip>
  //   </>
  // );
};

export default ColorChipList;
