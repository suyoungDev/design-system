import React from 'react';
import styled from 'styled-components';
import { Row } from '../../../Components/Row';
import { Column } from '../../../Components/Column';

const ColorBox = styled.div`
  border-radius: 6px;
  width: 30px;
  height: 30px;
  background-color: ${({ hexId }) => hexId && `${hexId}`};
  margin-right: 1rem;
`;

const Wrapper = styled.div`
  padding: 0.8rem 0.4rem;
  width: 200px;
  border-top: 1px solid #d5d8df;
  border-bottom: 1px solid #d5d8df;
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 0.8rem;
  margin-bottom: 0.4rem;
`;
const Color = styled.span`
  font-size: 0.7rem;
`;

const BASE_COLOR_LIST = [
  'Background',
  'Ink',
  'Action',
  'Negative',
  'Positive',
  'Primary',
  'Secondary',
  'Warning',
];

const BaseColorModule = ({ hexId }) => {
  return (
    <Wrapper>
      <Row className='al_ct'>
        <ColorBox hexId={hexId} />
        <Column>
          <Title>{BASE_COLOR_LIST[0]}</Title>
          <Color>{hexId}</Color>
        </Column>
      </Row>
    </Wrapper>
  );
};

export default BaseColorModule;
