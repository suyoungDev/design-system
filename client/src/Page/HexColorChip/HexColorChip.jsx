import React, { useState } from 'react';
import styled from 'styled-components';
import ColorChip from './section/ColorChip';
import SubmitHex from './section/SubmitHex';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > div {
    margin-right: 1rem;
  }
`;

const HexColorChip = () => {
  const [colorList, setColorList] = useState([]);

  return (
    <Row>
      <ColorChip colorList={colorList} />
      <SubmitHex />
    </Row>
  );
};

export default HexColorChip;
