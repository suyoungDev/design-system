import React from 'react';
import styled from 'styled-components';
import { Row } from '../../../Components/Row';
import { ColorCircle } from '../../../Components/ColorCircle';
import { BiTransfer } from 'react-icons/bi';

const Wrapper = styled.div`
  padding: 0.5rem 0.7rem;
  width: 100%;

  .react-icons {
    transform: rotate(90deg);
    color: ${(props) => props.theme.ink30};
  }
`;

const Title = styled.span`
  font-weight: 400;
  font-size: 0.8rem;
  margin: 0 0.6rem 0.2rem 0;
  color: ${(props) => props.theme.ink50};
`;

const Color = styled.span`
  font-size: ${({ small }) => (small ? '0.5rem' : '0.7rem')};
  font-weight: 200;
  color: ${(props) => props.theme.ink30};
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
`;

const BaseColorModule = ({ item }) => {
  return (
    <Wrapper>
      <Row className='al_ct'>
        <ColorCircle hexId={item.hexId} />
        <Row className='al_ct jc_sb'>
          <Row className='al_ct'>
            <Title>{item.role}</Title>
            <Color>{item.label}</Color>
          </Row>
          <BiTransfer />
        </Row>
      </Row>
    </Wrapper>
  );
};

export default BaseColorModule;
