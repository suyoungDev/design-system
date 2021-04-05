import React from 'react';
import styled from 'styled-components';
import { Row } from '../../../Components/Row';
import { Column } from '../../../Components/Column';
import { BaseColorList } from './BaseColorList';

const ColorBox = styled.div`
  border-radius: 8px;
  width: 36px;
  height: 36px;
  background-color: ${(props) => props.hexId};
  margin-right: 1rem;
`;

const Wrapper = styled.div`
  padding: 0.8rem 0.4rem;
  width: 220px;
  border-top: 1px solid ${(props) => props.theme.neutral60};
  border-bottom: 1px solid ${(props) => props.theme.neutral60};
`;

const Title = styled.span`
  font-weight: 400;
  font-size: 0.8rem;
  margin: 0 0.6rem 0.2rem 0;
  color: ${(props) => props.theme.ink50};
`;

const Color = styled.span`
  font-size: ${({ small }) => (small ? '0.6rem' : '0.7rem')};
  font-weight: 200;
  color: ${(props) => props.theme.ink30};
`;

const BaseColorModule = ({ item }) => {
  return (
    <Wrapper>
      <Row className='al_ct'>
        <ColorBox hexId={item.hexId} />
        <Column>
          <Row className='al_ct jc_sb'>
            <Title>{item.mainRole}</Title>
            <Color small>{item.title}</Color>
          </Row>
          <Color>{item.hexId}</Color>
        </Column>
      </Row>
    </Wrapper>
  );
};

export default BaseColorModule;
