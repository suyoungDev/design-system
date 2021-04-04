import React from 'react';
import styled from 'styled-components';
import { Row } from '../../../Components/Row';
import { Column } from '../../../Components/Column';

const ColorBox = styled.div`
  border-radius: 8px;
  width: 36px;
  height: 36px;
  background-color: ${(props) => props.hexId};
  margin-right: 1rem;
`;

const Wrapper = styled.div`
  padding: 0.8rem 0.4rem;
  width: 200px;
  border-top: 1px solid ${(props) => props.theme.neutral60};
  border-bottom: 1px solid ${(props) => props.theme.neutral60};
`;

const Title = styled.span`
  font-weight: 400;
  font-size: 0.8rem;
  margin-bottom: 0.2rem;
  color: ${(props) => props.theme.ink40};
`;
const Color = styled.span`
  font-size: 0.7rem;
  font-weight: 200;
  color: ${(props) => props.theme.ink30};
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
